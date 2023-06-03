function fromDollarToYen (dollar){
    const  value = dollar / 1.2 * 127.9
    return Number.parseFloat (value.toFixed (2));
};
function fromEuroToDollar (euro){
    const value = euro * 1.2
    return Number.parseFloat (value.toFixed (2));
};
function fromYenToPound (yen){
const value =  yen / 127.9 * 0.8
return Number.parseFloat (value.toFixed (2));

};
module.exports = {
    fromDollarToYen , fromEuroToDollar , fromYenToPound 
}
console.log(fromYenToPound(10)) 

