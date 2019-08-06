
//var fs = require("fs");
const promise = require("bluebird");
const fs = promise.promisifyAll(require("fs"));


async function getFileAsString(path) {
    if (!path)
        throw "No path provided";
    else {
        let d = await fs.readFileAsync(path, "UTF-8");
        return d;
        

    };
}


module.exports = {

    
    getFileAsString,

    saveStringToFile: async function saveStringToFile(path, text) {

        if (!path || text == "" || path == "")
            throw "No path or text provided";
        else {
            var pathh = path+"(2).result.json";
            fs.writeFile(pathh, text, (err) => {
                if (err) {
                    console.log(err);
                    return;
                };
                console.log("Extra JSON File created");
            })
        };
    },

      getFileAsJSON: async function getFileAsJSON(path){
       
        if (!path)
            throw "No path provided";
        else {
            let dg = await fs.readFileAsync(path, "UTF-8");
            var obj = JSON.parse(dg);
            return obj;
        }
    },

    saveJSONToFile: async function saveJSONToFile(path, obj){
        var oString = JSON.stringify(obj);

        if (!path || oString == "" || path == "" || path == ",")
            throw "No path or text provided";
        else {
            var pathh = path;
            fs.writeFile(pathh, oString, (err) => {
                if (err) {
                    console.log(err);
                    return;
                };
                console.log("File created");
            })
        };

    }

}

//saveStringToFile("/Users/allan/Desktop/MyNewFile.txt", "Hi hello what's up")
//getFileAsString("/Users/allan/Desktop/Test JS/chapter1.txt")