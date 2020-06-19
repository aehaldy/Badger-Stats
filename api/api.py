from flask import Flask

app = Flask(__name__)

@app.route('/uwm')
def get_stats():
  return 'Welcome to University of Wisonsin, Madison, STATS!n'
