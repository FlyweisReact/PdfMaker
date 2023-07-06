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
      <div className="App">
        <div>
          <div className="mb5">
            <button onClick={printDocument}>Print</button>
          </div>
          <div id="divToPrint">
            <div className="Company_Title">
              <p className="date">27/09/2022 </p>
              <p className="name"> Flyweis services Pvt Lts</p>
            </div>
            <div className="Company_Title">
              <p className="date">27/09/2022 </p>
              <p className="name"> Flyweis services Pvt Lts</p>
            </div>
            <div className="Company_Title">
              <p className="date">27/09/2022 </p>
              <p className="name"> Flyweis services Pvt Lts</p>
            </div>
            <div className="Company_Title">
              <p className="date">27/09/2022 </p>
              <p className="name"> Flyweis services Pvt Lts</p>
            </div>
            <div className="Company_Title">
              <p className="date">27/09/2022 </p>
              <p className="name"> Flyweis services Pvt Lts</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
