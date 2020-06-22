/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById('run').addEventListener('click', function () {
        let birthDay = document.getElementById('dob-day').value;
        let birthMonth = document.getElementById('dob-month').value;
        let birthYear = document.getElementById('dob-year').value;
        let today = new Date();
        let age = today.getFullYear() - birthYear;

        if (today.getMonth() < birthMonth || today.getMonth() == birthMonth && today.getDate() < birthDay) {
            age--
        }

       alert('your age is ' + age)


    });

})();
