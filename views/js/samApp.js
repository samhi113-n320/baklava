import GeneratePDF from "./pdfFrame.js"

const myPdf = new GeneratePDF();

function basicSetup(file, backColor, topBarColor) {
    file.setFillingColor("#" + backColor);
    file.addRect(0, 0, 1000, 1000);
    file.setFillingColor("#" + topBarColor);
    file.addRect(0, 0, 1000, 25);

    file.setTextColor("#222");

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var barcodeLetters = "";
    for (let i = 0; i < 16; i++) {
        barcodeLetters += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    file.addImg(`https://barcodeapi.org/api/39/${barcodeLetters}?&bg=${backColor}&dpi=300`, 5, 270, 86, 20)
}

function setURL(file) {
    document.querySelector("#pdf-preview").src = file.getPdfUrl();
    console.log("hi", file.getPdfUrl());
}

document.querySelector("#concert").onclick = function () {
    basicSetup(myPdf);

    myPdf.addHeader("The Concert", 5, 35);
    myPdf.addText("Featuring");
    myPdf.addText("Band you heard once or twice but never really");
    myPdf.addText("had too much of an interest in but you");
    myPdf.addText("wanna spend money so sure ig we move");
    myPdf.addText("Some other band you never heard about");
    myPdf.addText("but will be listening to after the show");
    myPdf.addText("Band you researched but is disappointing");
    myPdf.addText("Presented by Ticketmoney, give us more cash");

    var usersName = document.querySelector("#nameInput").value

    myPdf.addText(`Ticket For: ${usersName}`, 5, 225)

    myPdf.addImg("../assets/concert.jpeg", 5, 100, 100, 100)

    setURL(myPdf);
}

document.querySelector("#concert").onclick = function () {
    basicSetup(myPdf, "ddaa77", "ffaa44");

    myPdf.addHeader("The Concert", 5, 35);
    myPdf.addText("Featuring");
    myPdf.addText("Band you heard once or twice but never really");
    myPdf.addText("had too much of an interest in but you");
    myPdf.addText("wanna spend money so sure ig we move");
    myPdf.addText("Some other band you never heard about");
    myPdf.addText("but will be listening to after the show");
    myPdf.addText("Band you researched but is disappointing");
    myPdf.addText("Presented by Ticketmoney, give us more cash");

    var usersName = document.querySelector("#nameInput").value

    myPdf.addText(`Ticket For: ${usersName}`, 5, 225)

    myPdf.addImg("../assets/concert.jpeg", 5, 100, 100, 100)

    setURL(myPdf);
}

document.querySelector("#sports").onclick = function () {
    basicSetup(myPdf, "dddddd", "112266");

    myPdf.addHeader("The Game", 5, 35);
    myPdf.addText("Your Team");
    myPdf.addText("VS");
    myPdf.addText("Decent Team");
    myPdf.addText("7PM | Ticketmoney Dome");
    myPdf.addText("But it'll actually start at 7:15 for no good reason")
    myPdf.addText("because modern sports is oriented all around")
    myPdf.addText("the TV experience and not the fans at the game")
    myPdf.addText("Presented by Ticketmoney, give us more cash");

    var usersName = document.querySelector("#nameInput").value

    myPdf.addText(`Ticket For: ${usersName}`, 5, 225)

    myPdf.addImg("../assets/basketball.jpeg", 5, 100, 100, 100)

    setURL(myPdf);
}