
function traductor() {
    var str = document.getElementById("txtVal").value;
    var returnArray = [],
        wordArray = str.split(' ');
    for (var i = 0; i < wordArray.length; i++) {
        var word = wordArray[i];
        var beginning = word.charAt(0);

        if (/[aeiouAEIOU]/.test(beginning)) {
            returnArray.push(word += 'way');
            continue;
        }
        for (var ii = 1; ii < word.length; ii++) {
            if (/[aeiouAEIOU]/.test(word.charAt(ii))) {
                break;
            } else {
                beginning += word.charAt(ii);
            }
        }
        returnArray.push(word.substr(beginning.length) + beginning + 'ay');
    }
    document.getElementById("pig").textContent = returnArray.join(' ');
}

