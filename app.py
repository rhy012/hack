from flask import Flask, request, render_template
import openai 
import os

app = Flask(__name__)

# Set up OpenAI API key
openai.api_key = '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' 

@app.route('/')
def chat():
    return render_template('chat.html')

@app.route('/api', methods=['POST'])
def api():
    message = request.json.get("message")
    
    completion = openai.ChatCompletion.create(
      model="gpt-3.5-turbo",
      message=[
        {"role":"user","content": message}
      ]
    ) 
    if completion.choices[0].message!=None:
      return completion.choices[0].message 
    else:
      return 'Failed to Generate response!'

if __name__ == '__main__':
    app.run(debug=True)
