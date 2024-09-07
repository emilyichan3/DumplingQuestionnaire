// TODO: Allow for multiple questions
const QUESTIONS = [
    {
        id: '1',
        question: 'Eat dumplings as starter?',
        options: [
            { 'name': 'starter', 'value': 'never', 'label': 'Rarely, Almost Never or Never' },
            { 'name': 'starter', 'value': 'sometimes', 'label': 'Occasionally or Sometimes' },
            { 'name': 'starter', 'value': 'often', 'label': 'Often or Frequently' },
            { 'name': 'starter', 'value': 'very', 'label': 'Very Frequently' },
            { 'name': 'starter', 'value': 'always', 'label': 'Almost Always or Always' }
        ]
    },
    {
        id: '2',
        question: 'Eat dumplings as main course?',
        options: [
            { 'name': 'main-course', 'value': 'never', 'label': 'Rarely, Almost Never or Never' },
            { 'name': 'main-course', 'value': 'sometimes', 'label': 'Occasionally or Sometimes' },
            { 'name': 'main-course', 'value': 'often', 'label': 'Often or Frequently' },
            { 'name': 'main-course', 'value': 'very', 'label': 'Very Frequently' },
            { 'name': 'main-course', 'value': 'always', 'label': 'Almost Always or Always' }
        ]
    },
    {
        id: '3',
        question: 'Eat dumplings as a side dish?',
        options: [
            { 'name': 'side-dish', 'value': 'never', 'label': 'Rarely, Almost Never or Never' },
            { 'name': 'side-dish', 'value': 'sometimes', 'label': 'Occasionally or Sometimes' },
            { 'name': 'side-dish', 'value': 'often', 'label': 'Often or Frequently' },
            { 'name': 'side-dish', 'value': 'very', 'label': 'Very Frequently' },
            { 'name': 'side-dish', 'value': 'always', 'label': 'Almost Always or Always' }
        ]
    },
    {
        id: '4',
        question: 'Eat dumplings as dessert?',
        options: [
            { 'name': 'dessert', 'value': 'never', 'label': 'Rarely, Almost Never or Never' },
            { 'name': 'dessert', 'value': 'sometimes', 'label': 'Occasionally or Sometimes' },
            { 'name': 'dessert', 'value': 'often', 'label': 'Often or Frequently' },
            { 'name': 'dessert', 'value': 'very', 'label': 'Very Frequently' },
            { 'name': 'dessert', 'value': 'always', 'label': 'Almost Always or Always' }
        ]
    },
    {
        id: '5',
        question: 'Have you do homemade dumplings?',
        options: [
            { 'name': 'homemade', 'value': 'never', 'label': 'Rarely, Almost Never or Never' },
            { 'name': 'homemade', 'value': 'sometimes', 'label': 'Occasionally or Sometimes' },
            { 'name': 'homemade', 'value': 'often', 'label': 'Often or Frequently' },
            { 'name': 'homemade', 'value': 'very', 'label': 'Very Frequently' },
            { 'name': 'homemade', 'value': 'always', 'label': 'Almost Always or Always' }
        ]
    },
    {
        id: '6',
        question: 'Have you bought frozen dumplings from the shop?',
        options: [
            { 'name': 'shop', 'value': 'never', 'label': 'Rarely, Almost Never or Never' },
            { 'name': 'shop', 'value': 'sometimes', 'label': 'Occasionally or Sometimes' },
            { 'name': 'shop', 'value': 'often', 'label': 'Often or Frequently' },
            { 'name': 'shop', 'value': 'very', 'label': 'Very Frequently' },
            { 'name': 'shop', 'value': 'always', 'label': 'Almost Always or Always' }
        ]
    },
    {
        id: '7',
        question: 'Have you ordered take away dumplings?',
        options: [
            { 'name': 'takeaway', 'value': 'never', 'label': 'Rarely, Almost Never or Never' },
            { 'name': 'takeaway', 'value': 'sometimes', 'label': 'Occasionally or Sometimes' },
            { 'name': 'takeaway', 'value': 'often', 'label': 'Often or Frequently' },
            { 'name': 'takeaway', 'value': 'very', 'label': 'Very Frequently' },
            { 'name': 'takeaway', 'value': 'always', 'label': 'Almost Always or Always' }
        ]
    },
    {
        id: '8',
        question: 'Have you had dumplings in the restaurant?',
        options: [
            { 'name': 'restaurant', 'value': 'never', 'label': 'Rarely, Almost Never or Never' },
            { 'name': 'restaurant', 'value': 'sometimes', 'label': 'Occasionally or Sometimes' },
            { 'name': 'restaurant', 'value': 'often', 'label': 'Often or Frequently' },
            { 'name': 'restaurant', 'value': 'very', 'label': 'Very Frequently' },
            { 'name': 'restaurant', 'value': 'always', 'label': 'Almost Always or Always' }
        ]
    }
]