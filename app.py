from flask import Flask, render_template, request, redirect, url_for, session

from database import questionnaire_datastore, questionnaire_result_datastore

app = Flask(__name__)

app.secret_key = 'Replace me with a real secret key for production use'

starter_result = questionnaire_result_datastore["1"]
maincourse_result = questionnaire_result_datastore["2"]
sidedish_result = questionnaire_result_datastore["3"]
dessert_result = questionnaire_result_datastore["4"]
homemade_result = questionnaire_result_datastore["5"]
froze_result = questionnaire_result_datastore["6"]
takeaway_result = questionnaire_result_datastore["7"]
restaurant_result = questionnaire_result_datastore["8"]

user_datastore = {}

@app.route("/")
@app.route("/index")
def index():
    return render_template("index.html")


@app.route("/questionnaire")
def questionnaire():
    return render_template("questionnaire.html", questions=questionnaire_datastore)


@app.route("/questionnaire_result")
def questionnaire_result():
    return render_template("questionnaire_result.html", answers=questionnaire_result_datastore)


@app.route("/questionnaire_per_result/<id>")
def questionnaire_per_result(id):
    never_count = questionnaire_result_datastore[id].count['never']
    sometimes_count = questionnaire_result_datastore[id].count['sometimes']
    often_count = questionnaire_result_datastore[id].count['often']
    very_count = questionnaire_result_datastore[id].count['very']
    almost_count = questionnaire_result_datastore[id].count['almost']

    data = [
            ('Never', never_count),
            ('Sometimes', sometimes_count),
            ('Often', often_count),
            ('Very', very_count),
            ('Almost', almost_count)
        ]

    labels = [row[0] for row in data]
    values = [row[1] for row in data]
    return render_template("questionnaire_result.html", answer=questionnaire_result_datastore[id], labels=labels, values=values)



@app.route("/questionnaire_submit", methods=["POST"])
def questionnaire_submit():
    """Sumbit the questionnaire."""
    # Get the values from the form.
    starter = request.form["starter"]
    maincourse = request.form["maincourse"]
    sidedish = request.form["sidedish"]
    dessert = request.form["dessert"]
    homemade = request.form["homemade"]
    froze = request.form["froze"]
    takeaway = request.form["takeaway"]
    restaurant = request.form["restaurant"]

    starter_result.answer(starter)
    maincourse_result.answer(maincourse)
    sidedish_result.answer(sidedish)
    dessert_result.answer(dessert)
    homemade_result.answer(homemade)
    froze_result.answer(froze)
    takeaway_result.answer(takeaway)
    restaurant_result.answer(restaurant)

    # Redirect to the questionnaire page.
    if 'username' in session:
        return redirect(url_for("questionnaire_result"))
    else:
        return redirect(url_for("questionnaire"))
    


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