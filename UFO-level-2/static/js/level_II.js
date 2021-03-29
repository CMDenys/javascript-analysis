
//from data.js
const tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");


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

// Part II - filter by multiple inputs
function handleClick() {
    var date = d3.selectAll("#datetime").property("value")
    var city = d3.selectAll("#city").property("value")
    var state = d3.selectAll("#state").property("value")
    var country = d3.selectAll("#country").property("value")
    var shape = d3.selectAll("#shape").property("value")


    var filteredData = tableData
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

//Reset data in form
function clearClick () { 
    {
        var map = d3.map({"a": datetime})
        A = map.get("a")
        map.clear(A)
    }
    {
        var map = d3.map({"b": city})
        B = map.get("b")
        map.clear(B)
    }
    {
        var map = d3.map({"c": state})
        C = map.get("c")
        map.clear(C)
    }
    {
        var map = d3.map({"d": country})
        D = map.get("d")
        map.clear(D)
    }
    {
        var map = d3.map({"e": shape})
        E = map.get("e")
        map.clear(E)
    }
    
    buildTable(tableData)
}

//just want this to listen.  Execute the handle event when the filter-btn id was clicked.

// function clearClick() {

//     for (i= 0; i < sightingsReport.length; i++){

//     tableData.date.value("")
//     tableData.city.value("")
//     tableData.state.value("")    
//     tableData.country.value("")
//     tableData.shape.value("")
//     }
// }

// Event Listener to filter table by input
d3.selectAll("#filter-btn").on("click", handleClick);
// Event Listener to clear form fields
d3.selectAll("#clear-btn").on("click", clearClick);

       



buildTable(tableData);
