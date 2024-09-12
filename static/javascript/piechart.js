// var abc = document.getElementById("id-1").innerText;
function toTrimString(s) {
    return s.trim();
}
function toInteger(s) {
    return parseInt(s.trim())
}

var target = 'pie-1';

var test = document.getElementById(target);
var ctx = document.getElementById(target).getContext("2d");
var question = document.getElementById("question-1").innerText;
var keys = document.getElementById("keys-1").innerText;
var values = document.getElementById("values-1").innerText;

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

// jQuery
// $(pieChart).appendTo("#pie-1");

