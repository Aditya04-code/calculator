var screen = document.getElementById('screen')
var buttons = document.querySelectorAll('button');
let screenvalue = '';
for (var item of buttons) {
    item.addEventListener('click', function (e) {
        var buttonText = e.target.innerText;
        console.log("is", buttonText);
        if (buttonText == '*') {
            buttonText = '*';
            screenvalue += buttonText;
            screen.value = screenvalue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenvalue);
        }
        else if (buttonText == 'C') {
            screenvalue = "";
            screen.value = screenvalue;
        }
        else {
            screenvalue += buttonText;
            screen.value = screenvalue;
        }
    })
}
