from flask import Flask, request, render_template, jsonify
import openai
import os

app = Flask(__name__)

# Set up OpenAI API key
openai.api_key = 'API_KEY'

@app.route('/')
def index():
    return render_template('chat.html')

@app.route('/api', methods=['POST'])
def get_response():
    message = request.form['message']
    
    completion = openai.ChatCompletion.create(
      model="gpt-3.5-turbo",
      message=[
        {"role":"user","content": message}
      ]
    )
    return completion.choices[0].message

if __name__ == '__main__':
    app.run(debug=True)
