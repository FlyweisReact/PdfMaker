/** @format */
import React from "react";
import jsPDF from "jspdf";

const App = () => {
  const printDocument = () => {
    const pdf = new jsPDF();
    const element = document.getElementById("divToPrint");
    
    // Generate the PDF from the element
    pdf.html(element, {
      callback: () => {
        pdf.save("invoice.pdf");
      }
    });
  };

  return (
    <>
      <div className="App">
        <div>
          <div className="mb5">
            <button onClick={printDocument}>Print</button>
          </div>
          <div id="divToPrint">
            <div className="Company_Title">
              <p className="date">27/09/2022 </p>
              <p> Flyweis services Pvt Lts</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
