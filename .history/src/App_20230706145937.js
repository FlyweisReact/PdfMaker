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
          <div>
            <p>27/09/2022</p>
            <p> Flyweis services Pvt Lts</p>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default App;
