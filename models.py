class Questionnaire:
    def __init__(self, questionnaire_id, question, group_name):
        self.questionnaire_id = questionnaire_id
        self.question = question
        self.group_name = group_name


class Questionnaire_result:
    def __init__(self, questionnaire_id, question):
        self.questionnaire_id = questionnaire_id
        self.question = question
        self.questionnaire_answers =[]
        self.count = {
            'never':  0,
            'sometimes':  0,
            'often':  0,
            'very':  0,
            'almost':  0
        }

    def answer(self, questionnaire_answer):
        self.questionnaire_answers.append(questionnaire_answer)

    def update_count(self):
        self.count['never'] = self.questionnaire_answers.count('never')
        self.count['sometimes'] = self.questionnaire_answers.count('sometimes')
        self.count['often'] = self.questionnaire_answers.count('often')
        self.count['very'] = self.questionnaire_answers.count('very')
        self.count['almost'] = self.questionnaire_answers.count('almost')
