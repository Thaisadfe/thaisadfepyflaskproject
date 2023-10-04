from flask import Flask, render_template, request, redirect, url_for
from data import projects  # Import the projects list from data.py

app = Flask(__name__)

# Define routes
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/projects')
def projects_page():
    return render_template('projects.html', projects=projects)  # Pass the projects list to the template

@app.route('/Resume/CV')
def resume():
    return render_template('Resumecv.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        # Handle form submission here (e.g., save data to a database)
        # Retrieve form data from request.form
        full_name = request.form['full-name']
        email = request.form['email']
        phone = request.form['phone']
        message = request.form['message']
        
        # Process the form data as needed (e.g., save it to a database)

        # Redirect to a success page or return a success response
        return redirect(url_for('success'))
    
    # This block executes for GET requests (display the form)
    return render_template('contact.html')

@app.route('/success')
def success():
    return "Form submission successful!"

if __name__ == '__main__':
    app.run(debug=True, use_reloader=True)
