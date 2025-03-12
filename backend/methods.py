import binascii
from fastapi import APIRouter
import hashlib

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
    "BINARY": lambda text:''.join(format(ord(char), '08b') for char in text),
    "CRC32": lambda text:format(binascii.crc32(text.encode()), '08x'),
    "UUNCasdasdasdODE": lambda text:binascii.b2a_uu(text.encode()).decode(),
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
