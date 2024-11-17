from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def hello():
    CATEGORIAS = [
        {
            "TITLE": "SHA'S",
            "ELEMENTS": [
                "MD5", 
                "SHA 1",
                "SHA 224",
                "SHA 256",
                "SHA 384",
                "SHA 512"
            ]
        },
        {
            "TITLE": "SHAKE",
            "ELEMENTS": [
                "SHAKE 128",
                "SHAKE 256"
            ]
        },
        {
            "TITLE": "BLAKE",
            "ELEMENTS": [
                "BLAKE 2B",
                "BLAKE 2S"
            ]
        }
    ]
    
    return render_template('index.html', categorias=CATEGORIAS)

if __name__ == '__main__':
    app.run(debug=True)
