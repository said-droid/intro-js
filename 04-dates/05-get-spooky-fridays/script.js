/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("run").addEventListener("click", function() {

        let year = document.getElementById("year").value;
        let date = new Date();
        date.setFullYear(year, 0, 13);
        let months = ['january', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        let spookyMonths = [];
        for (let i = 0; i < 12; i++) {
            date.setMonth(i);
            if (date.getDay() === 5) {
                spookyMonths.push(months[i]);
            }
        }

        alert(spookyMonths);
    });

    })();
