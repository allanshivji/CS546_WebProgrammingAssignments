function checkArray(a) {
    if (!Array.isArray(a))
        throw "Entered data is not an array";
}

function checkString(st) {
    if (typeof st != 'string'){
        throw "Entered data is not a string";
    }
}

function deepEquality(obj1, obj2) {
    
        if (obj1 === obj2) {
            return true;
        }
         // Data should be objects else return false, length should be equal...
        else if (typeof obj1 === "object" && typeof obj2 === "object" && Object.keys(obj1).length === Object.keys(obj2).length && obj1 && obj2) {
            if (Array.isArray(obj1) === Array.isArray(obj2)) {
                for (let i in obj1) {
                    if (i in obj2) {
                        if (!deepEquality(obj1[i], obj2[i])) {
                            return false;
                        }
                    } else {
                        return false;
                    }
                }
                return true;
            }
        }
        return false;
    }
    


module.exports = {

    deepEquality,

    uniqueElements: (arr) => {
        checkArray(arr)
        var c = 0;
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < i; j++) {
                if (arr[i] == arr[j])
                    break;
            }
            if (i == j)
                c++;
        }
        return c;
    },

    countOfEachCharacterInString: (str) => {
        checkString(str);

        var chars = {};
        for (var i = 0; i < str.length; i++) {
            var count = 0;
            var a = str.charAt(i);
            for (var j = 1; j < str.length; j++) {
                if (a == str.charAt(j)) {
                    count++;
                }
            }
            if (count == 0) {
                count = 1;
            }
            chars[str.charAt(i)] = count;
        }
        return chars;
    }

}