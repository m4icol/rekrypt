from fastapi import FastAPI
import methods

app = FastAPI()
app.include_router(methods.router)

@app.get("/")
async def root():
    return {"message": "Hello World"}
