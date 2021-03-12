import requests
import json


def get_iss():
    response = requests.get("http://api.open-notify.org/iss-now.json")
    json_data = json.loads(response.text)
    latitude = json_data["iss_position"]['latitude']
    longitude = json_data["iss_position"]['longitude']
    return_text = "The ISS is at latitude " + \
        latitude + " and longitude " + longitude
    return return_text


print(get_iss())
