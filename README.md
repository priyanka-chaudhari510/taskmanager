Parsing:
The browser reads and analyzes the HTML code to understand its structure.

Tokenization:
The HTML is broken into smaller pieces called tokens, such as start tags, end tags, attributes, and text.

DOM Tree:
The browser uses these tokens to create the DOM Tree, which represents the structure of the HTML document.

CSSOM Tree:
The CSS is parsed and converted into a CSSOM Tree, which represents the styling rules.

Render Tree:
A Render Tree is created containing the elements that need to be displayed along with their styles.

Event Capturing:
Event Capturing is when an event travels from the parent element to the target element.
Parent → Child → Target

Event Bubbling:
Event Bubbling is when an event travels from the target element back up to its parent elements.
Target → Child → Parent

Event Delegation
Event Delegation means adding one event listener to a parent element to handle events from its child elements.
Parent
  ↓
Handles events of multiple children
