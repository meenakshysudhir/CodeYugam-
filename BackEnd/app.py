from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return 'Hello, World! This is the homepage.'

@app.route('/api/data')
def get_data():
    # Logic to fetch data from database or external API
    data = {'name': 'John Doe', 'age': 30}
    return data

if __name__ == '__main__':
    app.run(debug=True)
