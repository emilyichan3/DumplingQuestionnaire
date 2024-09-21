from models import Questionnaire, Questionnaire_result

# Default data:

questionnaire_datastore = {
    '1': Questionnaire("1", "Do you eat dumplings as a starter?", "starter", "fried_dumplings.jpg", "fried_dumplings" ),
    '2': Questionnaire('2', "Do you eat dumplings as a main course?", "maincourse", "Indian_dumplings.jpg", "Indian_dumplings" ),
    '3': Questionnaire('3', "Do you eat dumplings as a side dish?", "sidedish", "steaming_dumplings.jpg", "steaming_dumplings" ),
    '4': Questionnaire('4', "Do you eat dumplings as a dessert?", "dessert", "Polish_dumplings.jpg", "Polish_dumplings" ),
    '5': Questionnaire('5', "Do you make homemade dumplings?", "homemade", "Knodel_dumplings.jpg", "Knodel_dumplings" ),
    '6': Questionnaire('6', "Do you buy frozen dumplings from the shop?", "froze", "Pelmen_dumplings.jpg", "Pelmen_dumplings" ),
    '7': Questionnaire('7', "Do you eat take away dumplings?", "takeaway", "Empanadas_dumplings.jpg", "Empanadas_dumplings" ),
    '8': Questionnaire('8', "Do you eat dumplings in restaurants?", "restaurant", "boiling_dumplings.jpg", "boiling_dumplings" )
}

questionnaire_result_datastore = {
    '1': Questionnaire_result("1", "Eat dumplings as starter?"),
    '2': Questionnaire_result('2', "Eat dumplings as main course?"),
    '3': Questionnaire_result('3', "Eat dumplings as a side dish?"),
    '4': Questionnaire_result('4', "Eat dumplings as dessert?"),
    '5': Questionnaire_result('5', "Have you do homemade dumplings?"),
    '6': Questionnaire_result('6', "Have you bought frozen dumplings from the shop?"),
    '7': Questionnaire_result('7', "Have you ordered take away dumplings?"),
    '8': Questionnaire_result('8', "Have you had dumplings in the restaurant?")
}
