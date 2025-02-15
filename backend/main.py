from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import methods

app = FastAPI()
app.include_router(methods.router)

origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message: Rekrypt"}
