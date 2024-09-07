function init(){
    let questionId =  window.location.pathname.split('/').at(-1);

    let targetQuestion = QUESTIONS.filter(question => question.id === questionId);
    let title = document.getElementById('question-label');

    title.innerText = targetQuestion[0].question;

    let allOptions = targetQuestion.map( x => x.options)[0];
    for (let optionDetail in allOptions) {
        addOption(allOptions[optionDetail]);
      }
}

function addOption(optionDetail){
    let tbody = document.getElementById('questionnaire-context-list');    

    let valueInput = document.createElement('input');
    valueInput.setAttribute('type', 'radio');
    valueInput.setAttribute('name', optionDetail.name);
    valueInput.setAttribute('value', optionDetail.value);
    
    let valueLable = document.createElement('label');   

    let nameTd = document.createElement('td');
    let optionTr = document.createElement('tr');

    valueLable.append(valueInput);
    //added <label> description after <input> element
    valueLable.append(optionDetail.label);

    nameTd.append(valueLable);
    optionTr.append(nameTd);
    
    tbody.appendChild(optionTr);
}


addEventListener('load', init);
