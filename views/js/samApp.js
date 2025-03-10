import GeneratePDF from "./pdfFrame.js"

const myPdf = new GeneratePDF();

myPdf.addHeader("title");
myPdf.addText("More text here");

myPdf.newPage();

myPdf.setFillingColor("#eee");
myPdf.addRect(0, 0, 1000, 1000);
myPdf.setFillingColor("#137");
myPdf.addRect(0, 0, 1000, 25);

myPdf.setTextColor("#222");
myPdf.addHeader("Event Name", 5, 35)
myPdf.addText("with yo mama ;)")
myPdf.addText("Damn, got em")

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
var barcodeLetters = "";
for (let i = 0; i < 16; i++) {
    barcodeLetters += characters.charAt(Math.floor(Math.random() * characters.length));
}

myPdf.addImg(`https://barcodeapi.org/api/39/${barcodeLetters}?&bg=DDDDDD&dpi=300`, 10, 180, 86, 20)

document.querySelector("#pdf-preview").src = myPdf.getPdfUrl();

console.log("hi", myPdf.getPdfUrl());