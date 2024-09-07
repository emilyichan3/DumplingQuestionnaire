class Option:
    def __init__(self, value, label):
        self.value = value
        self.label = label


class Questionnaire:
    def __init__(self, id, question, group_name):
        self.id = id
        self.question = question
        self.group_name = group_name

    