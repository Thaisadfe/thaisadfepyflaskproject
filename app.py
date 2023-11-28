from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from data import projects  # Import the projects list from data.py

app = Flask(__name__)

# Configure the SQLAlchemy database URI
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql+psycopg2://postgres:Fernandes13$@localhost/tdfe'

# Initialize the SQLAlchemy class with the Flask app
db = SQLAlchemy(app)

# Define your database models
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.username

# Define routes
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/projects')
def projects_page():
    return render_template('projects.html', projects=projects)

@app.route('/Resume/CV')
def resume():
    return render_template('Resumecv.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        # Retrieve form data from request.form
        username = request.form['full-name']  # Using full-name as username
        email = request.form['email']
        # Create a new User object
        new_user = User(username=username, email=email)
        # Add the new user to the session and commit to the database
        db.session.add(new_user)
        db.session.commit()

        # Redirect to a success page or return a success response
        return redirect(url_for('success'))
    
    # This block executes for GET requests (display the form)
    return render_template('contact.html')

@app.route('/success')
def success():
    return "Form submission successful!"

if __name__ == '__main__':
    app.run(debug=True, use_reloader=True)

