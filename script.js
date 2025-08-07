console.log(`Part 1: Feeling Loopy Refactored \n`);

const csvData = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26'


// convert the string into an array where each indencies is segment before '\n'
// Example: rows[0] = "ID, Name, Occupation, Age"
//          rows[1] = "42,Bruce,Knight,41"
let rows = csvData.split('\n');
console.log(rows);

//for each row of rows
// save the words of one row into an array
// the string is split at the comma and each word is saved in each array index
// Example: row[0] = row ="ID, Name, Occupation, Age"
//          row.split(',') = [ID, Name, Occupation, Age]
//                           [cell1 = ID, cell2 = Name, etc.]
for (row of rows) {
    let [cell1, cell2, cell3, cell4] = row.split(',')
    // For each row, it will log the for cells
    console.log(cell1, cell2, cell3, cell4);
}


console.log('\n');
// -----------------------Part 2 -----------------------
console.log(`Part 2: Expanding Functionality \n`);
// Declare a variable that stores the number of columns in each row of data within the CSV.
// Instead of hard-coding four columns per row, expand your code to accept any number of columns. 
// This should be calculated dynamically based on the first row of data.

// Create a new array hold the string in a 2D matrix form
let newArr=[];

    //For each rows[index], it will split the string at the "," and save in newArr[index]
    //newArr[0] = [ID, Name, Occupation, Age] <= rows[0].split(",") 
    //newArr[1] = [42, Bruce, Knight, 41] <= rows[0].split(",") 
    for (i = 0; i < rows.length; i++){
    newArr[i] = rows[i].split(",");
    }

console.log(newArr); // output newArr as a 2D Matrix



console.log('\n');
// ------------------- Part 3 --------------------------------
console.log(`Part 3: Transforming Data\n`);

// Saving the 2D matrix of the string to a better labled variable
let csvDataMatrix = newArr;


// For each row of data in the result array produced by your code above, 
// create an object where the key of each value is the heading for that value’s column.
let tempHeaders = csvDataMatrix[0];
let headers = [];

// Convert these keys to all lowercase letters for consistency.
for (let i = 0; i < tempHeaders.length; i++){
    headers[i] = tempHeaders[i].toLowerCase();
}

// object Array to store each object
let objArr =[];

for (let i = 1; i < csvDataMatrix.length; i++) {
    row = csvDataMatrix[i];
    let obj = {};
    
    for (let j = 0; j < headers.length; j++) {
        // save each row as an object header
        obj[headers[j]] = row[j];
    }
    // console.log(obj)
    objArr.push(obj);

}

console.log(objArr);

// Store these objects in an array, in the order that they were originally listed.
// Since the heading for each column will be stored in the object keys, you do not need to create an object for the heading row itself.

// ----------------- Part 4 -------------------------------
let newEntry1 = { id: "48", name: "Barry", occupation: "Runner", age: "25" };
let newEntry2 = { id: "7", name: "Bilbo", occupation: "None", age: "111" };

// place the first object newEntry1 at after index 1 but not removing anything 
objArr.splice(1,0,newEntry1);
console.log(objArr);
// push second object newEntry2 at the end of the array
objArr.push(newEntry2);
console.log(objArr);

// Finally, use the values of each object within the array and the array’s length property to calculate the average age of the group. 
// This calculation should be accomplished using a loop.
