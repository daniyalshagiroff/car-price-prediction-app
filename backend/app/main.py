from fastapi import FastAPI
from .repo import get_best_cars, get_most_profit_cars, carbon_vs_no_carbon, interior_vs_no_interior

app = FastAPI()

@app.get("/home")
def get_dashboard(amount: int = 5):
    return get_best_cars(amount), get_most_profit_cars(amount), carbon_vs_no_carbon(amount), interior_vs_no_interior(amount)

