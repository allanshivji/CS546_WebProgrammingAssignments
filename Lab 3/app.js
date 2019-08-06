
const fd = require("./fileData.js")
const rm = require("./textMatrics.js")
var fs = require("fs");

async function main(fileN) {

    if(typeof fileN == undefined) throw 'File NAME not provided';
    
    var filename = fileN+".txt";
    var F = fileN+".result"+".json";
    var fileExist = fs.existsSync(F);
    if (fileExist) {
        
        // Read JSON file and print as object
        var obj = await fd.getFileAsJSON(F).catch(err =>{
            console.log("NO such file or directory provided ");
        });
        console.log(obj);
    }
    else {
        if(fileN == "") throw 'File NAME not provided';
        let path = filename;
        
        var content = "";
        content = await fd.getFileAsString(path).catch(err =>{
            console.log("No file name provided");
        });

        var oResultR={};
        var oResultR = rm.createMatrics(content);
        var oString = JSON.stringify(oResultR);

        var jj = await fd.saveJSONToFile(F, oResultR).catch(err =>{
            console.log("Error in saving fine "+err);
        });

        var j = await fd.saveStringToFile(fileN,oString).catch(err =>{
            console.log("No file name provided");
        });

        
          
        console.log(oResultR);

        
    }
}

main("chapter1");



