const myForm = document.getElementById("myForm");
if (myForm) {

    myForm.addEventListener("submit", event => {
        // Need to prevent the default behavior of the form submit
        event.preventDefault();

        // Getting the values of the textarea
        var a = document.getElementsByName("phrase")[0].value;
        // b will be used for error checking
        var b = a.replace(/\s/g, "");
        var out = a;
        // Lowering the values
        out = out.toLowerCase();
        // Stripping all the special characters
        var string = out.replace(/[\.,-\/#!+$%\^&\*;<>:@{}=\-_?"'’`~()]/g, "").replace(/\s/g, "")
        // var string = out.replace(/[\.,-\/#!+$%\^&\*;:@{}=\-_?"'’`~()]/g, "").replace(/\s/g, "").toLowerCase();
        var reverse = string.split('').reverse().join('');
        // if (a && b != "" && string != "")
        if (a && b != "") {
            $("#error").hide();

            if (string == reverse && string != "" && reverse != "") {
                const li = `<div class="pBox"><li class = "is-palindrome"> ${a} </li></div>`
                $("#attempts").append(li);
                $("#myForm").trigger('reset');
                $('#text_input').focus();
            } else {
                const li = `<div class="npBox"><li class = "not-palindrome"> ${a} </li></div>`
                $("#attempts").append(li);
                $("#myForm").trigger('reset');
                $('#text_input').focus();
            }
        } else {
            $("#error").show();
            $("#error").html("ERROR! You Need to supply a alphanumeric value!");
            $("#myForm").trigger('reset');
            $('#text_input').focus();
        }

    });
}