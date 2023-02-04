# DOM Manipulation: Change Background Color on Click

- Create an HTML file with an empty body and save it as "index.html".

- In the head section of the HTML file, include a reference to a JavaScript file named "index.js".

- In the body section of the HTML file, create a simple unordered list with 5 list items. Each list item should contain a different color name.

- In the "index.js" file, use querySelectorAll to select all the list items and store them in a variable called "listItems".

- Use a forEach loop to iterate through the list items and add an event listener to each item. The event listener should be triggered when the user clicks on the list item and should change the background color of the page to the color specified in the list item.

- In the "dom-exercise.js" file, create a function called "changeColor" that takes in a color parameter. The function should use document.body.style.backgroundColor to change the background color of the page to the color passed in as a parameter.

- Test the exercise by opening the "index.html" file in a web browser and clicking on each list item to see if the background color changes to the specified color.