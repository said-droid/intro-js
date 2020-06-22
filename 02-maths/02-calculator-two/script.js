/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
function test(i) {

    let a = parseFloat(document.getElementById('op-one').value);
    let b = parseFloat(document.getElementById('op-two').value);

    switch (i) {
        case 0:
            return (a + b);
            break;
        case 1:
            return (a - b);
            break;
        case 2:
            return (a * b);
            break;
        case 3:
            return (a / b);
            break;
    }
}


(function() {
    const operators = document.getElementsByClassName("operator");

    for (let i = 0; i < operators.length; i++) {
        operators[i].addEventListener('click', function () {
            alert(test(i));
            document.getElementById("op-one").value = '';
            document.getElementById("op-two").value = '';
        });
    }
})();
