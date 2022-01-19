let today = new Date();
document.addEventListener("DOMContentLoaded", function() {
    makeCalendar();
});

function clickPrevBtn() {
    today = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
    makeCalendar();
}

function clickNextBtn() {
    today = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
    makeCalendar();
}

function makeCalendar() {
    let makeMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    let lastDate = new Date(today.getFullYear(), today.getMonth()+1, 0);

    document.querySelector('.year').innerText = today.getFullYear()+'년';
    document.querySelector('.month').innerText = autoLeftPad((today.getMonth() + 1), 2) +'월';

    let dates = document.querySelector('.dates');
    let date=[];
    for(let i=0; i<lastDate.getDate(); i++) {
        if(i%7 == 7-today.getDay()) {
            date[i] = `<a href="#" class="sunday">${i+1}</a>`;
        }
        else {
            date[i] = `<a href="#">${i+1}</a>`;
        }
    }
    dates.innerHTML = date.join('');

    //today 표시하기
    console.log(today.getDate());
}



function autoLeftPad(num, digit) {
    if(String(num).length < digit) {
        num = "0" + num;
        // num = new Array(digit - String(num).length + 1).join("0") + num;
    }
    return num;

}