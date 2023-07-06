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
        <button onClick={generatePDF}>Generate PDF</button>

          <form></form>




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
                  <p>Address </p>
                  <p> : </p>
                  <p>
                    {" "}
                    #6-2/9, 2nd Floor, Monthly Archade Commercial Complex,
                    Santhekatte Main Road, Belthangady, D.K (D) Karnataka, India
                    - 574214
                  </p>
                </span>
                <span className="GST">
                  <p className="first">GST</p>
                  <p> :- </p>
                  <p>29AAOCA5829J1Z2</p>
                </span>
              </div>
            </div>

            <table>
              <thead>
                <tr>
                  <td>DESCRIPTION</td>
                  <td>QTY</td>
                  <td> ₹ UNIT PRICE</td>
                  <td> ₹ TOTAL</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Web app & App Development (Androis & iOS)(10% 1st
                    Installment)
                  </td>
                  <td>1</td>
                  <td>₹ 35,000 </td>
                  <td>₹ 35,000 </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>

            <div className="signature_Div">
              <div className="left">
                <h6>For FLYWEIS SERVICES PRIVATE LIMITED</h6>
                <p>Auth Signatory</p>
              </div>
              <div className="right">
                <div className="two_sec">
                  <p>TOTALVALUES</p>
                  <p>₹ 35,000</p>
                </div>
                <div className="two_sec">
                  <p>GST 18%</p>
                  <p>₹ 6,300</p>
                </div>
                <div className="two_sec">
                  <p>INVOICE VALUE</p>
                  <p>₹ 41,300</p>
                </div>
              </div>
            </div>

            <div className="Red">
              <div className="red">
                <p>₹ INR</p>
                <p className="under">
                  Forty One Thousand and Three Hundred Rupees only
                </p>
              </div>
              <div>
                <p className="under">GST amount is charged @18%</p>
              </div>
            </div>
          </div>

          <p className="thanks">Thank you for your business!</p>
          
        </div>
    </>
  );
};

export default App;
