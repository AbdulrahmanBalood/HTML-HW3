function calcRectangle(length,width){
    return (console.log(length*width))
}
function tempConverter(temp,form){
    if(form == "celsius ")
    return (console.log((temp * (9/5)) + 32))
    if(form == "fahrenheit")
    return (console.log((temp - 32) * 5/9))
}
function arraySum(numArray){
    let sum = 0
    for(let i = 0; i < numArray.length ; i++){
        sum+= numArray[i];
    }
    return (console.log(sum))
}
function maxNum(maxArray){
    let max = maxArray[0];
    for(let i =1; i < maxArray.length ; i++){
        if(maxArray[i]> max)
        max = maxArray[i];
    }
    return (console.log(max))

}
function reversArray(revArray){
    let rev = []
    for(let i =revArray.length-1; i >= 0 ; i--){
        rev.push(revArray[i])
    }
    return (console.log(rev))
}
function printStar(stars){
    let starResult = ``;
    for(let i = 0; i <= stars; i++){
    console.log(starResult);
    starResult = ``
    for(let j =0; j <= i ; j++){
        starResult += "*"
    }
}
}
calcRectangle(2,2)
tempConverter(32,"fahrenheit")
let nums = [23,54,32,87,47]
arraySum(nums)
let maxArray = [16,4,2,0,19,6];
maxNum(maxArray)
let revArray = [1,2,3,4,5,6,7,8,9,10];
reversArray(revArray)
printStar(5)