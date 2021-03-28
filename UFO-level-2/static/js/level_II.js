//from data.js
const tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the sightings data from data.js
//console.log(data);

function buildTable(tableData) {

    tbody.html("");
    // Step 1: Loop Through `data` and console.log each sightings report object
    tableData.forEach(function(sightingsReport) {
        //console.log(sightingsReport);
        // Step 2: Use d3 to append one table row `tr` for each sightings report object
        var row = tbody.append("tr")
        // Step 3: Use `Object.entries` to console.log each sightings report value
        Object.entries(sightingsReport).forEach(function([key, value]) {
            //console.log(key, value);
            // Step 4: Use d3 to append 1 cell per sightings report value
            //(datetime, city, state, country, shape, durationMinutes, comments)   
            var cell = row.append("td");
            // Step 5: Use d3 to update each cell's text with sightings values
            cell.text(value);
        });
    });
}


function handleClick() {
    var date = d3.selectAll("#datetime").property("value")
    var city = d3.selectAll("#city").property("value")
    var state = d3.selectAll("#state").property("value")
    var country = d3.selectAll("#country").property("value")
    var shape = d3.selectAll("#shape").property("value")


    let filteredData = tableData
    if (date) {
        filteredData = filteredData.filter(site => site.datetime === date)
    }    
    if (city) {    
        filteredData = filteredData.filter(site => site.city === city) 
    }
    if (state) {    
        filteredData = filteredData.filter(site => site.state === state) 
    }
    if (country) {    
        filteredData = filteredData.filter(site => site.country === country) 
    }
    if (shape) {    
        filteredData = filteredData.filter(site => site.shape === shape) 
    }
    buildTable(filteredData);
}

//just want this to listen.  Execute the handle event when the filter-btn id was clicked.

function clearClick() {
    tableData.date.value("")
    tableData.city.value("")
    tableData.state.value("")    
    tableData.country.value("")
    tableData.shape.value("")
}


d3.selectAll("#filter-btn").on("click", handleClick);
d3.selectAll("#clear-btn").on("click", clearClick);

buildTable(tableData);

