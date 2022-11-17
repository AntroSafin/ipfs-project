from __future__ import print_function
from flask import Flask, request, json, jsonify
from flask_json import FlaskJSON, json_response
from flask_cors import CORS

app = Flask(__name__)
jsonObj = FlaskJSON(app)
cors = CORS(app,resources={r'*':{'origins':'*'}})


# Route for seeing a data
@app.route('/login')
def login():
    email = request.args.get('username')
    password = request.args.get('password')
    sql = "SELECT * FROM login where username ='{}'".format(email) 
    if document['pasword']==password :
        response = json_response(value=0)
    else :
        response = json_response(value=1)
    return response
  
@app.route('/reg',methods=['POST'])
def register():
    if request.method == "POST":
        reg = json.loads(request.data)
        sql = "INSERT INTO login VALUES('{}','{}')".format(reg['username'],reg['password']) 
       
        response = json_response(200)
        return response 

@app.route('/loadData',methods=['POST'])
def register():
    if request.method == "POST":
        
        response = json_response(200)
        return response 


if __name__ == '__main__':
    app.run(host=('0.0.0.0'), port=5000)