

test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar, fromYenToPound, fromDollarToYen } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test ("50 yen should be 312.74 pound" , function (){
    const { fromEuroToDollar, fromYenToPound , fromDollarToYen } = require('./app.js') 
    expect (fromYenToPound (50000)) .toBe (312.74); 
}) 

test ("100 dollar should be 10.658 yen" , function (){
    const { fromEuroToDollar, fromYenToPound , fromDollarToYen} = require('./app.js') 
    expect ( fromDollarToYen (100)) .toBe (10.658);

})

test (" 1000 euro should be 1200 dollars" , function (){
    const { fromEuroToDollar, fromYenToPound , fromDollarToYen} = require('./app.js') 
    expect ( fromEuroToDollar (1000)) .toBe (1200);

})
test ("10000 yen  should be 62.54 pounds" , function (){
    const { fromEuroToDollar, fromYenToPound , fromDollarToYen} = require('./app.js') 
    expect ( fromYenToPound (10000)) .toBe (62.5488663);

})


