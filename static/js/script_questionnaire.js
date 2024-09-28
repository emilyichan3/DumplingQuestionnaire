// this js code is for the page of questionnaire
const errorMessage = '*Requested';

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
    const popup = document.querySelector('.popup');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let errors=[];

        var starter = document.mainform.starter;
        if (!validateInputs(starter, 'question-section-1')){
            errors.push('question-section-1');
        };
        
        var maincourse = document.mainform.maincourse;
        if (!validateInputs(maincourse, 'question-section-2')){
            errors.push('question-section-2');
        };

        var sidedish = document.mainform.sidedish;
        if (!validateInputs(sidedish, 'question-section-3')){
            errors.push('question-section-3');
        };

        var dessert = document.mainform.dessert;
        if (!validateInputs(dessert, 'question-section-4')){
            errors.push('question-section-4');
        };

        var homemade = document.mainform.homemade;
        if (!validateInputs(homemade, 'question-section-5')){
            errors.push('question-section-5');
        };

        var froze = document.mainform.froze;
        if (!validateInputs(froze, 'question-section-6')){
            errors.push('question-section-6');
        };

        var takeaway = document.mainform.takeaway;
        if (!validateInputs(takeaway, 'question-section-7')){
            errors.push('question-section-7');
        };
        var restaurant = document.mainform.restaurant;
        if (!validateInputs(restaurant, 'question-section-8')){
            errors.push('question-section-8');
        };

        // scroll up to the first error section
        if (Array.isArray(errors) && errors.length > 0){
            const firstError = errors[0];
            console.log(`first error: ${firstError}`);
            var element = document.getElementById(errors[0])
            element.scrollIntoView({ behavior: "smooth", block: "center" });
        } else {
            popup.classList.add('poppedup');
        } 
    })   
}

function validateInputs(radioGroup, sectionName) {
    // validate answers for each question. 
    let question_id = sectionName
    let question_validate = false;

    console.log(`step ${question_id}`);

    for(var i=0; i<radioGroup.length;i++){
        // added success class if the question be answered.
        if(radioGroup[i].checked){
            setSuccess(question_id);
            return true;
        }
    }

    if(!question_validate){
        // added error class if the question not be answered.
        setError(question_id, errorMessage);
        return false;
    }
}

function popupClose() {
    // using popup message to submit the form
    const form = document.getElementById('questionnaireform');
    const popup = document.querySelector('.popup');
    popup.classList.remove('poppedup');
    form.action = "questionnaire_submit";
    form.submit();
}

addEventListener('load', init);

