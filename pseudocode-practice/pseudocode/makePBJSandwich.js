//Version 1: Create a program that helps the user make a peanut butter and jelly sandwich. Display the instructions on how to make this sandwich to the user in the browser.





//Version 2: Your product manager wants user input and wants alternatives to peanut butter considered. The program should take the user's choice of butter and fruit spread to make this sandwich. After the sandwich is made, your product manager would also like the sandwich to be cut in fun shapes to increase user appeal. Then display to the user in the browser: "Your [fun]-shaped [choice of butter] and [flavor of fruit spread] is ready for consumption!""

#input
prompt butter
prompt fruit spread
prompt shape


function sandwich(butter, fruit_spread, shape) {
    this.butter = butter;
    this.name = fruit_spread;
    this.shape = shape;
    console.log("Your [fun]-shaped [ butter] and [fruit spread] is ready for consumption!"");
}
sandwich();

