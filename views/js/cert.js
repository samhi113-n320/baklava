import GeneratePDF from "./pdfFrame.js";

document.getElementById("quiz-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    if (!name) {
        alert("Please enter your name.");
        return;
    }

    let score = 0;
    const totalQuestions = 2;
    if (document.querySelector('input[name="q1"]:checked')?.value === "correct") score++;
    if (document.querySelector('input[name="q2"]:checked')?.value === "correct") score++;
    const percentage = ((score / totalQuestions) * 100).toFixed(2);

    const pdf = new GeneratePDF();
    pdf.addHeader("Human Course", 50, 20);
    pdf.addText("Certificate of Completion", 50, 40);
    pdf.addText("to", 50, 50);
    pdf.addHeader(name, 50, 60);
    pdf.addText(`Date: ${new Date().toLocaleDateString()}`, 50, 80);
    pdf.addText(`Score: ${percentage}%`, 50, 90);

    document.getElementById("pdf-preview").src = pdf.getPdfUrl();

    const downloadBtn = document.getElementById("download-btn");
    downloadBtn.disabled = false;
    downloadBtn.onclick = () => pdf.downloadPdf();
});