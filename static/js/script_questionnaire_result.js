
//piechart can be hided by css if no question be shown, then only display message
var hidetotalcount = document.getElementsByClassName('hide-totalcount-0');
if (hidetotalcount.length === 0) {
    const popup = document.querySelector('.message');
    popup.classList.add('hide');
};

