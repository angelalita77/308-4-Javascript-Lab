console.log(`Part 3: Feeling Loopy`);

const csvData = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26'
console.log(csvData)

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

// -----------------------Part 2 -----------------------
console.log(/n/n);

// Declare a variable that stores the number of columns in each row of data within the CSV.
// Instead of hard-coding four columns per row, expand your code to accept any number of columns. This should be calculated dynamically based on the first row of data.

