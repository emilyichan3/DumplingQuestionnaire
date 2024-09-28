from models import Questionnaire, Questionnaire_result

# Default data:
questionnaire_datastore = {
    '1': Questionnaire("1", "Do you eat dumplings as a starter?", "starter", "making_process_01.jpg", "Making dumpling process-step 1" ),
    '2': Questionnaire('2', "Do you eat dumplings as a main course?", "maincourse", "making_process_02.jpg", "Making dumpling process-step 2" ),
    '3': Questionnaire('3', "Do you eat dumplings as a side dish?", "sidedish", "making_process_03.jpg", "Making dumpling process-step 3" ),
    '4': Questionnaire('4', "Do you eat dumplings as a dessert?", "dessert", "making_process_04.jpg", "Making dumpling process-step 4" ),
    '5': Questionnaire('5', "Do you make homemade dumplings?", "homemade", "making_process_05.jpg", "Making dumpling process-step 5" ),
    '6': Questionnaire('6', "Do you buy frozen dumplings from the shop?", "froze", "making_process_06.jpg", "Making dumpling process-step 6" ),
    '7': Questionnaire('7', "Do you eat take away dumplings?", "takeaway", "making_process_07.jpg", "Making dumpling process-step 7" ),
    '8': Questionnaire('8', "Do you eat dumplings in restaurants?", "restaurant", "making_process_08.jpg", "Making dumpling process-step 8" )
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
