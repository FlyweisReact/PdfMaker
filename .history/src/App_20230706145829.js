/** @format */
import React from "react";
import html2pdf from "html2pdf.js";

const App = () => {
  const generatePDF = () => {
    const element = document.getElementById("pdfContent");
    const opt = {
      margin: 1,
      filename: "example.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf().from(element).set(opt).save();
  };

  return (
    <>
      <div className="App">
        <button onClick={generatePDF}>Generate PDF</button>
        <div id="pdfContent">
          {/* Add your content here using div elements */}
          <div>
            <h1>My PDF Content</h1>
            <p>This is a sample PDF generated from simple HTML div elements.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
