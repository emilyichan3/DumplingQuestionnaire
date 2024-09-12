const errorMessage = 'Please select this question';

const setError = (element, message) => {
    const inputControl = document.getElementById(element);
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

const setSuccess = (element) => {
    const inputControl = document.getElementById(element);
    console.log(`setSuccess ${inputControl}`);
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

function init(){
    const form = document.getElementById('questionnaireform');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        var starter = document.mainform.starter;
        var validate_starter = validateInputs(starter, 'question-section-1');

        var maincourse = document.mainform.maincourse;
        var validate_maincourse = validateInputs(maincourse, 'question-section-2');

        var sidedish = document.mainform.sidedish;
        var validate_sidedish = validateInputs(sidedish, 'question-section-3');

        var dessert = document.mainform.dessert;
        var validate_dessert = validateInputs(dessert, 'question-section-4');

        var homemade = document.mainform.homemade;
        var validate_homemade = validateInputs(homemade, 'question-section-5');

        var froze = document.mainform.froze;
        var validate_froze = validateInputs(froze, 'question-section-6');

        var takeaway = document.mainform.takeaway;
        var validate_takeaway = validateInputs(takeaway, 'question-section-7');

        var restaurant = document.mainform.restaurant;
        var validate_restaurant = validateInputs(restaurant, 'question-section-8');

        if (validate_starter & validate_maincourse & validate_sidedish & validate_dessert &
            validate_homemade & validate_froze & validate_takeaway & validate_restaurant)
        {
            form.submit();
        } else {
            event.preventDefault();
        }
    })
}

function validateInputs(radioGroup, sectionName) {
    let question_id = sectionName
    let question_validate = false;

    console.log(`step ${question_id}`);

    for(var i=0; i<radioGroup.length;i++){
        if(radioGroup[i].checked){
            setSuccess(question_id);
            return true;
        }
    }
    if(!question_validate){
        setError(question_id, errorMessage);
        return false;
    }
}

addEventListener('load', init);

