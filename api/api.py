from flask import Flask
import requests
import json

app = Flask(__name__)


@app.route('/uwm', methods=['GET'])
def get_uwm_stats():
    try:
      #Request data from API endpoint
      req = requests.get('https://api.data.gov/ed/collegescorecard/v1/schools/?school.operating=1&2015.academics.program_available.assoc_or_bachelors=true&2015.student.size__range=1..&school.degrees_awarded.predominant__range=1..3&school.degrees_awarded.highest__range=2..4&id=240444&api_key=MkI1iM1B22ezc4GpLEdgNCe89ZxkwEMCgBQgQRzY')

      #Convert the data into a JSON object
      data = json.loads(req.content)
      return data

    except Exception as e:
      print('Failed to GET data from API')
      return(str(e))
