/** @format */
import React from "react";
import html2pdf from "html2pdf.js";

const App = () => {
  const generatePDF = () => {
    const element = document.getElementById("pdfContent");
    const opt = {
      margin: 0,
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
          <div className="Company_Title">
            <p>27/09/2022</p>
            <p> Flyweis services Pvt Lts</p>
          </div>

          <div className="Bordered">
            <div className="empty"></div>
            <div className="Invoice_Title">
              <div className="left">
                <p>
                  <strong>FLYWEIS SERVICES PRIVATE LIMITED</strong>
                </p>
                <p>
                  <strong>
                    {" "}
                    Addresss: - C-18, Acharaya Niketan, Mayur Vihar Phase-1,
                    Delhi -91Email:
                  </strong>
                </p>
                <p className="email">
                  {" "}
                  <strong>info@flyweis.technology</strong>{" "}
                </p>
                <p>
                  <strong>GSTIN - 07AAECF6220A1Z9</strong>{" "}
                </p>
              </div>
              <div className="right">
                <p>
                  PROFORMA TAX <br />
                  INVOICE
                </p>
              </div>
            </div>

            <div className="empty2"></div>

            <div className="Date">
              <div>
                <p>Date - 27/04/2023</p>
                <p>Invice# - FSLR2106221</p>
              </div>
            </div>

            <div className="Bill_To">
              <h5>BILL TO</h5>
              <div className="Bill_To_Content">
                <p className="title">Axons Technology and Solutions Pvt Ltd</p>
                <span className="address">
                  <p>Address  </p>
                  <p> : </p>
                  <p>
                    {" "}
                    #6-2/9, 2nd Floor, Monthly Archade Commercial Complex,
                    Santhekatte Main Road, Belthangady, D.K (D) Karnataka, India
                    - 574214
                  </p>
                </span>
                <p className="GST">
                  <strong>GST :- </strong>
                  <strong>  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
