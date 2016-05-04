function some_function(arg1, arg2, callback) {
    // this generates a random number between
    // arg1 and arg2
    var my_number = Math.ceil(Math.random() *
        (arg1 - arg2) + arg2);
    // then we're done, so we'll call the callback and
    // pass our result
    callback(my_number);
}
// call the function
some_function(5, 15,

    function(num) {
        console.log("number is: "+ parseInt(num));
        console.log("callback called! " + parseInt("10") + parseInt("30"));
    }

);
