/** Author: Mandy Xie
 * Date: october 28th 2024
*
*
**/
// sortName takes user input for a name, and then sorts it

// 1. take user input for name
// 2. assign that to variable userName
// 3. turn the name into an array
// 4. sort that array
// 5. join the array together 
// 6. return results

function sortName() {
    // user input for name
    var userName = window.prompt("Give me your username man");
    console.log("userName =", userName);
    // name to array
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
    // sort array
    var sortedArray = nameArray.sort();
    console.log("sortedArray =", sortedArray)
    // array to string again
    var nameSorted = sortedArray.join('');
    console.log("nameSorted =", nameSorted);
    // single line: userName.split('').sort().join('')
    return nameSorted;
}

//output
document.writeln("Your name sucked here's the new one: ", sortName(), "</br>")