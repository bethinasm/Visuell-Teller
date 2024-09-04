
// MODEL
var number = 0;


// VIEW

updateView()
function updateView() {
    document.getElementById('app').innerHTML = /*HTML*/ `
        <div class="box">
            <h1 id="numberText"> ${number} </h1>
            <button onclick="increaseButton()"> + </button>
            <button onclick="decreaseButton()"> - </button>
        </div>
    `;
}

// CONTROLLER

function increaseButton(){
    number++;

    console.log(number);
    document.getElementById('numberText').innerHTML = number;

    updateView();
}

function decreaseButton(){
    number--;

    console.log(number);
    document.getElementById('numberText').innerHTML = number;

    updateView();
}


