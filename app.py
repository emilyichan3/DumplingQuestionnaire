from flask import Flask, render_template, request, redirect, url_for, session


app = Flask(__name__)

app.secret_key = 'Replace me with a real secret key for production use'

user_datastore = {}

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/recipe")
def recipe():
    return render_template("recipe.html")


@app.route('/login', methods=['GET'])
def login():
    """Login page for the app.

    If the user is not logged in, display the login form.
    """
    # If the user is already logged in, redirect back to the home page.
    if 'username' in session:
        return redirect(url_for('index'))

    # Otherwise, display the login form.
    return render_template('login.html')


@app.route('/login', methods=['POST'])
def login_action():
    """Login action for the app (same route as the form).
    """
    # Get the username from the form field.
    username = request.form['username']

    # Store the username in the session.
    session['username'] = username

    # Add the user to the user datastore.
    user_datastore[username] = 'online'

    # Redirect to the home page.
    return redirect(url_for('index'))

@app.route('/logout')
def logout():
    """Logout action for the app.

    This removes the user both from the session and from the user datastore.
    If for some reason they're not in either, or both,
    it ignores the issue silently.

    Note that semantically, this should be a POST request,
    but using GET for logging out is simpler and popular.
    """
    # Get and remove the username from the session.
    username = session.pop('username', None)

    # Remove the user from the user datastore.
    user_datastore.pop(username, None)

    # Redirect to the home page.
    return redirect(url_for('index'))

if __name__ == "__main__":
    app.run(debug=True, port=8080)