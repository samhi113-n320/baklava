import GeneratePDF from "./pdfFrame.js";

class Receipt extends GeneratePDF {
    position = {
        x: 40,
        y: 20,
    };

    cbCount = 0;
    caCount = 0;
    pcCount = 0;
    wCount = 0;
    stCount = 0;
    lCount = 0;

    cbPrice = 7;
    caPrice = 10;
    pcPrice = 9;
    wPrice = 0;
    stPrice = 1;
    lPrice = 1;

    cbTotal = 0;
    caTotal = 0;
    pcTotal = 0;
    wTotal = 0;
    stTotal = 0;
    lTotal = 0;

    subTotal = 0;
    tax = 0;
    total = 0;

    addCB(){
        this.cbCount += 1;
    }
    addCA(){
        this.caCount += 1;
    }
    addPC(){
        this.pcCount += 1;
    }
    addW(){
        this.wCount += 1;
    }
    addST(){
        this.stCount += 1;
    }
    addL(){
        this.lCount += 1;
    }

    totalCalc(){
        this.cbTotal = (this.cbCount * this.cbPrice);
        this.caTotal = (this.caCount * this.caPrice);
        this.pcTotal = (this.pcCount * this.pcPrice);
        this.wTotal = (this.wCount * this.wPrice);
        this.stTotal = (this.stCount * this.stPrice);
        this.lTotal = (this.lCount *this.lPrice);

        this.subTotal = (this.cbTotal + this.caTotal + this.pcTotal + this.wTotal + this.stTotal + this.lTotal);
        this.tax = (this.subTotal * .07);
        this.total = (this.subTotal + this.tax);

        console.log(this.cbTotal, this.caTotal, this.pcTotal, this.wTotal, this.stTotal, this.lTotal, this.subTotal, this.tax, this.total);
    }

    viewPDF(){
        document.querySelector("#receiptPreview").src = super.getPdfUrl();
    }

    date = new Date();

    todaysDate = this.date.toLocaleDateString();
    currentTime = this.date.toLocaleTimeString();
}

const receiptPDF = new Receipt();

document.getElementById("cbButton").addEventListener("click", function() {receiptPDF.addCB();});
document.getElementById("caButton").addEventListener("click", function() {receiptPDF.addCA();});
document.getElementById("pcButton").addEventListener("click", function() {receiptPDF.addPC();});
document.getElementById("wButton").addEventListener("click", function() {receiptPDF.addW();});
document.getElementById("stButton").addEventListener("click", function() {receiptPDF.addST();});
document.getElementById("lButton").addEventListener("click", function() {receiptPDF.addL();});

document.getElementById("receiptButton").addEventListener("click", function() { 
        receiptPDF.totalCalc();
        receiptPDF.addHeader("Big Bob's Food Pit");
        receiptPDF.addText("");
        receiptPDF.addText("");
        if(receiptPDF.cbCount > 0){
            receiptPDF.addText(`Cheese Burger: $${receiptPDF.cbPrice} * ${receiptPDF.cbCount} = $${receiptPDF.cbTotal}`);
        }
        if(receiptPDF.caCount > 0){
            receiptPDF.addText(`Chicken Alfredo: $${receiptPDF.caPrice} * ${receiptPDF.caCount} = $${receiptPDF.caTotal}`);
        }
        if(receiptPDF.pcCount > 0){
            receiptPDF.addText(`Pork Chop: $${receiptPDF.pcPrice} * ${receiptPDF.pcCount} = $${receiptPDF.pcTotal}`);
        }
        if(receiptPDF.wCount > 0){
            receiptPDF.addText(`Water: $${receiptPDF.wPrice} * ${receiptPDF.wCount} = $${receiptPDF.wTotal}`);
        }
        if(receiptPDF.stCount > 0){
            receiptPDF.addText(`Sweet Tea: $${receiptPDF.stPrice} * ${receiptPDF.stCount} = $${receiptPDF.stTotal}`);
        }
        if(receiptPDF.lCount > 0){
            receiptPDF.addText(`Lemonade: $${receiptPDF.lPrice} * ${receiptPDF.lCount} = $${receiptPDF.lTotal}`);
        }
        receiptPDF.addText("");
        receiptPDF.addText(`Subtotal: $${receiptPDF.subTotal}`);
        receiptPDF.addText(`Tax: $${receiptPDF.tax}`);
        receiptPDF.addText(`Total: $${receiptPDF.total}`);
        receiptPDF.addText("");
        receiptPDF.addText(`Time of purchase: ${receiptPDF.currentTime} ${receiptPDF.todaysDate}`);
        receiptPDF.viewPDF();
        document.getElementById("downloadButton").removeAttribute("hidden");
    });

document.getElementById("downloadButton").addEventListener("click", function () { receiptPDF.downloadPdf() })