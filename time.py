from datetime import datetime
import pytz

def print_time_for_countries():
    countries = {
        'New York': 'America/New_York',
        'London': 'Europe/London',
        'Tokyo': 'Asia/Tokyo',
        'Sydney': 'Australia/Sydney',
        'UTC': 'UTC',
    }

    current_time_utc = datetime.utcnow().replace(tzinfo=pytz.utc)

    print("Current time in different countries:")
    for city, time_zone in countries.items():
        local_time = current_time_utc.astimezone(pytz.timezone(time_zone))
        print(f"{city}: {local_time.strftime('%Y-%m-%d %H:%M:%S')}")

if __name__ == "__main__":
    print_time_for_countries()
