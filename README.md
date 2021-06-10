
<p float="left" align="center">
  <img src="images/table.png" width="400" />
  <img src="images/table2.png" width="400" /> 
</p>

Using a UFO dataset in the form of an array of JavaScript objects, the below code was written to create a table on a web page and then append new rows of data for each UFO sighting.

This was done by creating a function called "buildTable."  Using d3, the table body was cleared and data composed of multiple arrays was taken in by iterating though each object and appending it's value inside a cell, which was nested inside the table data, nested inside of a table row. 

<p align="center">
  <img src="images/build_table.png" width="500" />
</p>


Next, a function called handleClick was created to "listen" for a filter button and read the value entered into the respeective input field.  This returned a search specific to the input or inputs the user entered and rebuilds the table based on the new filtered data.

<p align="center">
  <img src="images/input_filter.png" width="500" />
</p>

Lastly, a function called clearClick was created to clear any data entered into the input fields and reset the table.  Event listeners were added to handle the event functions and finally rebuild the table when clearClick is called.

<p float="left" align="center">
  <img src="images/clear_filter.png" width="400" />
  <img src="images/events.png" width="400"/> 
</p>


