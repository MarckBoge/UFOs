// import the data from data.js

const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
// First, clear out any existing data
    tbody.html("");


// Next loop through each object in the data
// and append a row and cell for each value in the row
data.forEach((dataRow) => {

// Append a row to the table
    let row = tbody.append("tr");

// Loop through each field in the dataRow and 
// add each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
        
        let cell = row.append('td');
        cell.text(val);
        }
    );
});
}

function handleClick() {
// Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    console.log(date);
    let filteredData = tableData;
// Check to see i data was entered and filter the

// DATE USING THE DATE
    if(date) {
// Apply 'filter' to the table data to only keep the row
// where the 'datetime' value matches the filter value
            filteredData = filteredData.filter(row => row.datetime === date);
};

// Rebuild the table using the filter data
// @NOTE: If no date was entered, then filtered Data will 
// just be the orignal tableData.
buildTable(filteredData);
};

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);






