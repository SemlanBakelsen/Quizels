# Quizels World Quiz
Quizels is a website with a simple quiz that asks questions about big things in the world.
## Responsive design
The website has been tested and built to be responsive for multiple screen sizes. The page was testing using Lighthouse with an accessibility score of 100.

![Lighthouse test results](assets/images/Lighthouse_quizels.png)


## Issues

### Bugs (Resolved)
- The score falsely adds a point on the second answer of the second question.
- It also adds a point falsely on the second option of question three.
- There's a false addition of two points on option 1.
    * These instances were fixed by only adding the event listener to the buttons once.

### Console errors
console errors would appear when clicking buttons at the end of the quiz. This was resolved by removing the event listeners for the buttons.



## Credit
Made use of [W3Schools](https://www.w3schools.com/js/) and their JavaScript tutorials for inspiration and code snippets.  
A few tutorials used where:
- [JavaScript Functions](https://www.w3schools.com/js/js_functions.asp)
- [JavaScript Arrays](https://www.w3schools.com/js/js_arrays.asp)
- [JavaScript For Loop](https://www.w3schools.com/js/js_loop_for.asp)