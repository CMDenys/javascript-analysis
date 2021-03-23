// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);

// Step 1: Loop Through `data` and console.log each weather report object
data.forEach(function(sightingsReport) {
    console.log(sightingsReport);
    // Step 2: Use d3 to append one table row `tr` for each weather report object
    var row = tbody.append("tr")
    // Step 3: Use `Object.entries` to console.log each weather report value
    Object.entries(sightingsReport).forEach(function([key, value]) {
        console.log(key, value);
        // Step 4: Use d3 to append 1 cell per sightings report value
        //(datetime, city, state, country, shape, durationMinutes, comments)   
        var cell = row.append("td");
        // Step 5: Use d3 to update each cell's text with sightings values
        cell.text(value);
    });
});