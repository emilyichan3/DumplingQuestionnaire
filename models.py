class Questionnaire:
    def __init__(self, questionnaire_id, question, group_name):
        self.questionnaire_id = questionnaire_id
        self.question = question
        self.group_name = group_name


class Questionnaire_result:
    def __init__(self, questionnaire_id, question):
        self.questionnaire_id = questionnaire_id
        self.question = question
        self.count = {
            'never':  0,
            'sometimes':  0,
            'often':  0,
            'very':  0,
            'almost':  0
        }

    def answer(self, questionnaire_answer):
        self.count[questionnaire_answer] +=1

