class Questionnaire:
    def __init__(self, questionnaire_id, question, group_name, image_name, image_alt):
        self.questionnaire_id = questionnaire_id
        self.question = question
        self.group_name = group_name
        self.image_name = image_name
        self.image_alt = image_alt


class Questionnaire_result:
    def __init__(self, questionnaire_id, question, totalcounts=0):
        self.questionnaire_id = questionnaire_id
        self.question = question
        self.totalcounts = totalcounts
        self.count = {
            'never':  0,
            'sometimes':  0,
            'often':  0,
            'very':  0,
            'almost':  0
        }

    def answer(self, questionnaire_answer):
        self.count[questionnaire_answer] +=1
        self.totalcounts += 1

