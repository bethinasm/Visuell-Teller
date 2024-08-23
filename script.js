var number = 0;

function increaseButton(){
    //let element = document.getElementById('numberText');
    //let value = element.innerHTML;

    //++value;
    number++;

    console.log(number);
    document.getElementById('numberText').innerHTML = number;
}

function decreaseButton(){
    //let element = document.getElementById('numberText');
    //let value = element.innerHTML;

    //--value;
    number--;

    console.log(number);
    document.getElementById('numberText').innerHTML = number;
}


