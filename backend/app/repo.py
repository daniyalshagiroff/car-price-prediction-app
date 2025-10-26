from supabase import create_client
import os
from dotenv import load_dotenv

load_dotenv()

url = os.getenv("PROJECT_URL")
key = os.getenv("SUPABASE_KEY")

supabase = create_client(url, key)

def get_best_cars(amount):
    result = supabase.rpc("get_best_cars", {"amount": 10}).execute()
    print(result.data)

get_best_cars(10)
