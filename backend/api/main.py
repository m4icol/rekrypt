from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware
import binascii
import hashlib
import os
from dotenv import load_dotenv
load_dotenv()

ENV_MODE = os.getenv("ENV_MODE", "development")

FRONTEND_URL_LOCAL = os.getenv("FRONTEND_URL_LOCAL", "http://localhost:5173")
FRONTEND_URL_PROD = os.getenv("FRONTEND_URL_PROD", "https://rekrypt.vercel.app")

origins = [FRONTEND_URL_LOCAL, FRONTEND_URL_PROD]

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message": "Rekrypt"}

router = APIRouter()

METHODS = {
    "SHA_1": lambda text: hashlib.sha1(text.encode()).hexdigest(),
    "SHA_224": lambda text: hashlib.sha224(text.encode()).hexdigest(),
    "SHA_256": lambda text: hashlib.sha256(text.encode()).hexdigest(),
    "SHA_384": lambda text: hashlib.sha384(text.encode()).hexdigest(),
    "SHA_512": lambda text: hashlib.sha512(text.encode()).hexdigest(),
    "BLAKE2S": lambda text: hashlib.blake2s(text.encode()).hexdigest(),
    "BLAKE2B": lambda text: hashlib.blake2b(text.encode()).hexdigest(),
    "MD5": lambda text: hashlib.md5(text.encode()).hexdigest(),
    "HEX": lambda text: binascii.hexlify(text.encode()).decode(),
    "BASE 64": lambda text: binascii.b2a_base64(text.encode()).decode().strip(),
    "BINARY": lambda text: ''.join(format(ord(char), '08b') for char in text),
    "CRC32": lambda text: format(binascii.crc32(text.encode()), '08x'),
    "UUNCODE": lambda text: binascii.b2a_uu(text.encode()).decode(),
    "REVERSE": lambda text: text[::-1],
}

@router.get("/methods")
def get_methods():
    return {"methods": list(METHODS.keys())}

@router.post("/transform")
def transform(data: dict):
    text = data.get("text", "")
    methods = data.get("methods", [])

    for method in methods:
        if method in METHODS:
            text = METHODS[method](text)

    return {"result": text}

app.include_router(router)
