from supabase import create_client
import os
from dotenv import load_dotenv

load_dotenv()

url = os.getenv("PROJECT_URL")
key = os.getenv("SUPABASE_KEY")

supabase = create_client(url, key)

def get_best_cars(amount):
    result = supabase.rpc("get_best_cars", {"amount": amount}).execute()
    return result.data

def get_most_profit_cars(amount):
    result = supabase.rpc("get_most_profit_cars", {"amount": amount}).execute()
    return result.data

def carbon_vs_no_carbon(amount):
    result_carbon = supabase.rpc("get_best_cars", {"amount": amount, "carbon": True}).execute()
    result_no_carbon = supabase.rpc("get_best_cars", {"amount": amount, "carbon": False}).execute()
    return result_carbon.data, result_no_carbon.data

def interior_vs_no_interior(amount):
    result_interior = supabase.rpc("get_best_cars", {"amount": amount, "interior": True}).execute()
    result_no_interior = supabase.rpc("get_best_cars", {"amount": amount, "interior": False}).execute()
    return result_interior.data, result_no_interior.data





