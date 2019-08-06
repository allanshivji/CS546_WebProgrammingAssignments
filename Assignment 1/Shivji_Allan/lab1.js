const questionOne = function questionOne(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++)
        sum = sum + (arr[i] * arr[i]);
    return sum;
}

const questionThree = function questionThree(text){
    var str;
    str=text.match(/[aeiou]/gi);
    return str.length;
}

const questionTwo = function questionTwo(num){
    if(num<1)
        return 0;
    else if(num == 1)
        return 1;  
    return (questionTwo(num-1) + questionTwo(num-2));
}

const questionFour = function questionFour(num){
    var factorial = 1;
    if(num<0)
        factorial = NaN;
    else
        for(var i=1; i<=num; i++)
            factorial=factorial * i;
    return factorial;
}

module.exports = {
    firstName: "ALLAN", 
    lastName: "SHIVJI", 
    studentId: "10437270",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};