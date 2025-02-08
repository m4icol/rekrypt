from fastapi import APIRouter
import hashlib

router = APIRouter()

METHODS = {
    "SHA_1": lambda text: hashlib.sha1(text.encode()).hexdigest(),
    "SHA_256": lambda text: hashlib.sha256(text.encode()).hexdigest(),
    "SHA_224": lambda text: hashlib.sha224(text.encode()).hexdigest(),
    "SHA_384": lambda text: hashlib.sha384(text.encode()).hexdigest(),
    "SHA_512": lambda text: hashlib.sha512(text.encode()).hexdigest(),
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
