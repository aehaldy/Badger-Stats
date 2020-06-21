from flask import Flask
from os import environ
import requests
import json

app = Flask(__name__, static_folder='../build', static_url_path='/')


@app.route('/')
def index():
    return app.send_static_file('index.html')


@app.route('/api/school', methods=['GET'])
def get_school():
  api_key = environ.get('API_KEY')
  apiEndpoint = 'https://api.data.gov/ed/collegescorecard/v1/schools/?school.operating=1&2015.academics.program_available.assoc_or_bachelors=true&2015.student.size__range=1..&school.degrees_awarded.predominant__range=1..3&school.degrees_awarded.highest__range=2..4&id=240444&api_key=' + api_key

  try:
    #Request data from API endpoint
    req = requests.get(apiEndpoint)

    #Convert the data into a dict
    data = json.loads(req.content)
    return data

  except Exception as e:
    print('Failed to GET data from API')
    return(str(e))

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))
