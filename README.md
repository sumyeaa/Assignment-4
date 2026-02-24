1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans :
getElementById select a single element by id where getElementsByClassName selects multiple elements by same class name.
querySelector its a method to select first item only taking element by string type.
querySelectorAll its a method to select all item taking element by string type.

2. How do you create and insert a new element into the DOM?
Ans :
create element by using this syntax 
element name = document.createElement('')
where we can create a div or section or p type things.
insert element by 
elementname.innerText = ''
in form we insert by .value equals something.

3. What is Event Bubbling? And how does it work?
Ans :
event bubbling means by capture phase we can get our target things from up to down and then show bubble from target to up for its parent.
it works like you click a button ,the button is the target ,it works first in button then its div then section then body.

4. What is Event Delegation in JavaScript? Why is it useful?
Ans :
event delegation means attaching a single event listener to parent for manage its child part.
its useful because it reduce the use for multiple event listener and for dynamically use.

5. What is the difference between preventDefault() and stopPropagation() methods?
Ans :
preventDefault(),its prevent default browser behaviour.
stopPropagation(),its stop propagating bubble time,so that only target works and not bubble to parents.