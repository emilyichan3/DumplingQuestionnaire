from models import Questionnaire

# Default data:

questionnaire_datastore = {
    '1': Questionnaire("1", "Eat dumplings as starter?", "starter"),
    '2': Questionnaire('2', "Eat dumplings as main course?", "main-course"),
    '3': Questionnaire('3', "Eat dumplings as a side dish?", "side-dish"),
    '4': Questionnaire('4', "Eat dumplings as dessert?", "dessert"),
    '5': Questionnaire('5', "Have you do homemade dumplings?", "homemade"),
    '6': Questionnaire('6', "Have you bought frozen dumplings from the shop?", "froze"),
    '7': Questionnaire('7', "Have you ordered take away dumplings?", "takeaway"),
    '8': Questionnaire('8', "Have you had dumplings in the restaurant?", "restaurant")
}
