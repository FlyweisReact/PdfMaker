/** @format */
import React from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const App = () => {

  const printDocument = () => {
    const input = document.getElementById("divToPrint");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      pdf.save("download.pdf");
    });
  };



  return (
    <>
      <div>

      </div>
    </>
  );
};

export default App;
