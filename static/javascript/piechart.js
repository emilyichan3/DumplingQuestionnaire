
function toTrimString(s) {
    return s.trim();
}
function toInteger(s) {
    return parseInt(s.trim())
}
var allIds = document.getElementsByClassName('hide-id');

//using allIds.length to know how many question been shown
var targetId = allIds.length;
var target = 'pie-' + targetId;

if (targetId) {
    var ctx = document.getElementById(target).getContext("2d");
    var question = document.getElementById("question-"+targetId).innerText;
    var keys = document.getElementById("keys-"+targetId).innerText;
    var values = document.getElementById("values-"+targetId).innerText;
    
    var pieChart = new Chart(ctx, {
        type: "pie",
        data: {
            // labels: ['never', 'sometimes', 'often', 'very', 'almost'],
            labels: keys.slice(1,-1).replaceAll("'","").split(",").map(toTrimString),
            datasets: [{
                textinfo: "label+percent",
                backgroundColor: barColors,
                data: values.slice(1,-1).replaceAll("'","").split(",").map(toInteger),
            }]
        },
        options: {
            responsive: false,
            plugins: {
                title: {
                display: true,
                text: question
                }
            }
        }
    });    
}
  

// jQuery
// $(pieChart).appendTo("#pie-1");

