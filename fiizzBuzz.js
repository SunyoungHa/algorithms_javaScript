function fizBuzz(num) {
    for (var i = 1; i <= num; i++) {
        if (i % 15 === 0) console.log('fizzBuzz');
        else if (i % 3 === 0) console.log('fizz');
        else if (i % 5 === 0) console.log('buzz');
        else console.log(i);
    }
}
fizBuzz(10);

// source https://anniecannons.udemy.com/course/learning-algorithms-in-javascript-from-scratch/