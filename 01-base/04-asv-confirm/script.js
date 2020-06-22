/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    let age = prompt('what is your age?');
    let gender = prompt('what is your gender?');
    let town = prompt('in which town do you live?');


    while (!confirm("Age: " + age + "\n" +
        "Gender: " + gender + "\n" +
        "Town: " + town + "\n" +
        "Press ok to continue"));

})();
