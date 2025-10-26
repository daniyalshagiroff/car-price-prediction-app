from fastapi import FastAPI

app = FastAPI()

@app.get("/best_cars")
def get_best_cars():
    return True

