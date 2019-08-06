module.exports = {
    createMatrics: (text) =>{
        //console.log(text);
        try {
            //console.log("Entered MAttics");
            var str = text.toLowerCase();
            var b = 0;
            for (var i = 0; i < text.length; i++) {
                if (text.charAt(i) == " " || text.charAt(i) == '\n' || text.charAt(i) == '\t')
                    b++;

                str = str.replace(" ", "");
            }
            var str = str.replace(/[\n\t]/g, "");

            var alpha = 0, vowels = 0, consonant = 0, n = 0, sc = 0;;
            for (var i = 0; i < str.length; i++) {

                var ch = str.charAt(i);
                if (ch >= 'a' && ch <= 'z') {
                    alpha++;

                    if (ch == 'a' || ch == 'e' || ch == 'i' ||
                        ch == 'o' || ch == 'u')
                        vowels++;
                    else
                        consonant++;
                }
                else if (ch >= 0 && ch <= 9) {
                    n++;
                }
                else {
                    sc++;
                }
            }

            var string = text.toLowerCase();
            string = string.replace(/[\n\t]/g, " ");
            string = string.replace(/[`~!@#$%^&*()_|+\.=?;:'",<>\{\}\[\]\\\/]/gi, '');
            string = string.replace(/-/g, " ");

            //console.log(string);
            var arrayWords = string.split(' ');
            var arrayWords = string.split(/\s+/);
            //console.log(arrayWords[1].length);
            var oWC = {};
            var wc = 0, uw = 0, lw = 0, sum = 0, s;
            for (var i = 0; i < arrayWords.length; i++) {
                var w = arrayWords[i];
                if (w.match(/[a-z]/g)) {
                    wc++;

                    if (!oWC[w]) {
                        oWC[w] = 1;
                        uw++;
                    }
                    else {
                        oWC[w]++;
                    }
                    var s = w.length;
                    sum = sum + s;
                    if (s > 5) {
                        lw++;
                    }
                }
            }
            var oResult = {};
            // console.log("Total leters: " + alpha);
            // console.log("Total nonletters: " + (sc + n + b));
            // console.log("Total words: " + wc);
            // console.log("Total vowels: " + vowels);
            // console.log("Total consonants: " + consonant);

            // console.log("Unique words: " + uw);
            // console.log("Long words: " + lw);
            // console.log("Average word length: " + (sc + n + b)/wc);
            // console.log("Word Occurance: ");
            // console.log(oWC);

            oResult["Total Letters"] = alpha;
            oResult["Total non-letters"] = (sc + n + b);
            oResult["Total Words"] = wc;
            oResult["Total vowels"] = vowels;
            oResult["Total consonants"] = consonant;
            oResult["Unique words"] = uw;
            oResult["Long Words"] = lw;
            oResult["Average word length"] = sum/wc;
            oResult['Word Occuance'] = oWC;

            //console.log(oResult);

            return oResult;

        }
        catch (err) {
            console.log("Enter valid string");
        }
    }
}
//createMatrics("Helllo, my -! This is a great day to say helllo.\n\n\tHelllo! 2 3 4 23")
//createMatrics()