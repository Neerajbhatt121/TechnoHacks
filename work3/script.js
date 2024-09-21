function result () {
    const display = document.getElementById('display');
    display.value = eval(display.value)
}

function cutting () {
    const display = document.getElementById('display');
    display.value = display.value.toString().slice(0,-1);
}