function generateButtons() {
    var buttonsHTML = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(function (letter) {
        return "\n          <button\n            class=\"btn btn-dark\"\n            id='" + letter + "'\n            onClick=\"handleGuess('" + letter + "')\"\n          >\n          " + letter + "\n          </button>\n        ";
    }).join('');
    document.getElementById('keyboard').innerHTML = buttonsHTML;
}
