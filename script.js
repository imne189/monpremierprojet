
window.onload = function () {

   
    var canvas = document.getElementById("logo");
    if (canvas) {
        var ctx = canvas.getContext("2d");

        var centreX = 110;
        var centreY = 110;
        var rayon = 90;

        ctx.beginPath();
        ctx.arc(centreX, centreY, rayon, 0, 2 * Math.PI);
        ctx.fillStyle = "#ffb6c1";
        ctx.fill();

        ctx.beginPath();
        ctx.rect(20, 85, 180, 60);
        ctx.fillStyle = "#2b2b2b";
        ctx.fill();

        ctx.fillStyle = "white";
        ctx.font = "16px Arial";
        ctx.textAlign = "center";
        ctx.fillText("TRUE", centreX, 105);
        ctx.fillText("BEAUTY", centreX, 130);

        ctx.beginPath();
        ctx.arc(centreX, centreY, rayon, 0, 2 * Math.PI);
        ctx.strokeStyle = "#ff69b4";
        ctx.lineWidth = 4;
        ctx.stroke();
    }

    
    var table = document.getElementById("tableKdrama");
    if (table) {
        var donnees = [
            ["Imen", "vu", "vu", "pas vu", "vu", "pas vu"],
            ["Saimeh", "vu", "pas vu", "vu", "vu", "pas vu"],
            ["Imen", "9", "8", "-", "7", "-"],
            ["Saimeh", "8", "-", "9", "8", "9"]
        ];

        for (var i = 0; i < donnees.length; i++) {
            var ligne = table.insertRow();
            for (var j = 0; j < donnees[i].length; j++) {
                ligne.insertCell().innerHTML = donnees[i][j];
            }
        }
    }

    
    var formulaire = document.getElementById("formulaire");
    if (formulaire) {
        formulaire.addEventListener("submit", function (e) {
            var nom = document.getElementById("nom");
            var email = document.getElementById("email");
            var tel = document.getElementById("tel");
            var couleur = document.getElementById("couleur");
            var date = document.getElementById("date");

            if (nom.value === "") { e.preventDefault(); nom.focus(); }
            else if (email.value === "") { e.preventDefault(); email.focus(); }
            else if (tel.value === "") { e.preventDefault(); tel.focus(); }
            else if (couleur.value === "") { e.preventDefault(); couleur.focus(); }
            else if (date.value === "") { e.preventDefault(); date.focus(); }
        });
    }

    
    var audio = document.getElementById("audio1");
    if (audio) {
        audio.volume = 0.5;

        window.JouePause = function () {
            if (audio.paused) audio.play();
            else audio.pause();
        };

        window.grand = function () {
            if (audio.volume < 1) audio.volume += 0.1;
        };

        window.petit = function () {
            if (audio.volume > 0) audio.volume -= 0.1;
        };
    }
};


function AllerA(page) {
    window.location.href = page;
}

document.addEventListener("DOMContentLoaded", function () {
    const date = new Date();
    const options = { day: 'numeric', month: 'long', year: 'numeric' };

    const dateElement = document.getElementById("dateday");

    if (dateElement) {
        dateElement.textContent =
            "Nous sommes le " + date.toLocaleDateString('fr-FR', options);
    }
});
