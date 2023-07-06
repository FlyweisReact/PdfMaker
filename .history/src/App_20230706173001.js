/** @format */
import React, { useState } from "react";
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

  // PDF INPUT

  const [date, setDate] = useState("");
  const [companyGstIn, setCompanyGstIn] = useState("");
  const [taxInvoice, setTaxInvoice] = useState("");
  const [billTo, setBillTo] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [gstIn, setGstIn] = useState("");
  const [productDesc, setproductDesc] = useState("");
  const [productQuan, setProductQuan] = useState("");
  const [productUnitPrice, setProductUnitPrice] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const [totalvalues, setTotalValues] = useState("");
  const [totalgst, setTotalGst] = useState("");
  const [invoiceValue, setInvoiceValue] = useState("");
  const [amountInWords, setAmountInWords] = useState("");

  function InputChecker(input, string) {
    if (input) {
      return input;
    } else {
      return `Please provide ${string}`;
    }
  }

  return (
    <>
      <button onClick={generatePDF}>Generate PDF</button>

      <div className="Container_Div">
        <div className="Form_Container">
          <p className="Header">Create Invoice </p>
          <form>
            <div className="Two_Input">
              <div>
                <label>Date</label>
                <input type="date" onChange={(e) => setDate(e.target.value)} />
              </div>
              <div>
                <label>COMPANY GSTIN</label>
                <input type="text" onChange={(e) => setCompanyGstIn(e.target.value)} />
              </div>
              <div>
                <label>TAX INVOICE</label>
                <input type="text" onChange={(e) => setTaxInvoice(e.target.value)} />
              </div>
              <div>
                <label>BILL TO</label>
                <input type="text" onChange={(e) => setBillTo(e.target.value)} />
              </div>
              <div>
                <label>BILLING ADDRESS</label>
                <input type="text" onChange={(e) => setBillingAddress(e.target.value)} />
              </div>
              <div>
                <label>BILL GST</label>
                <input type="text" onChange={(e) => setGstIn(e.target.value)} />
              </div>

              <div>
                <label>PRODUCT DESCRIPTION</label>
                <input type="text" onChange={(e) => setproductDesc(e.target.value)} />
              </div>
              <div>
                <label> PRODUCT QUANTITY </label>
                <input type="text" onChange={(e) => setProductQuan(e.target.value)} />
              </div>
              <div>
                <label>PRODUCT UNIT PRICE </label>
                <input type="text" onChange={(e) => setProductUnitPrice(e.target.value)} />
              </div>

              <div>
                <label>TOTAL PRICE</label>
                <input type="text" onChange={(e) => setTotalPrice(e.target.value)} />
              </div>
              <div></div>
              <div></div>

              <div>
                <button type="button">Add</button>
              </div>
              <div></div>
              <div></div>

              <div>
                <label>TOTALVALUES</label>
                <input type="text" onChange={(e) => setTotalValues(e.target.value)} />
              </div>
              <div>
                <label> GST 18%</label>
                <input type="text" onChange={(e) => setTotalGst(e.target.value)} />
              </div>
              <div>
                <label>INVOICE VALUE</label>
                <input type="text" onChange={(e) => setInvoiceValue(e.target.value)} />
              </div>

              <div>
                <label>AMOUNT IN WORDS</label>
                <input type="text" onChange={(e) => setAmountInWords(e.target.value)} />
              </div>
              <div></div>
              <div></div>
            </div>
          </form>
        </div>

        <div id="pdfContent">
          <div className="Company_Title">
            <p> {InputChecker(date, "Date")} </p>
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
                  <strong>GSTIN - {InputChecker(companyGstIn, "GSTIN")} </strong>{" "}
                </p>
              </div>
              <div className="right">
                <p>
                {InputChecker(companyGstIn, "GSTIN")}
                </p>
              </div>
            </div>

            <div className="empty2"></div>

            <div className="Date">
              <div>
                <p>Date - {InputChecker(date, "Date")} </p>
                <p>Invice# - {InputChecker(taxInvoice, "Invice")}</p>
              </div>
            </div>

            <div className="Bill_To">
              <h5>BILL TO</h5>
              <div className="Bill_To_Content">
                <p className="title"> {InputChecker(billTo, "GSTIN")} </p>
                <span className="address">
                  <p>Address </p>
                  <p> : </p>
                  <p>
                  {InputChecker(companyGstIn, "GSTIN")}
                  </p>
                </span>
                <span className="GST">
                  <p className="first">GST</p>
                  <p> :- </p>
                  <p> {InputChecker(gstIn, "GSTIN")} </p>
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
                  <p>₹{InputChecker(companyGstIn, "GSTIN")}</p>
                </div>
                <div className="two_sec">
                  <p>GST 18%</p>
                  <p>₹ {InputChecker(companyGstIn, "GSTIN")}</p>
                </div>
                <div className="two_sec">
                  <p>INVOICE VALUE</p>
                  <p>₹ {InputChecker(companyGstIn, "GSTIN")}</p>
                </div>
              </div>
            </div>

            <div className="Red">
              <div className="red">
                <p>₹ INR</p>
                <p className="under">
                {InputChecker(companyGstIn, "GSTIN")}
                </p>
              </div>
              <div>
                <p className="under">GST amount is charged @18%</p>
              </div>
            </div>
          </div>

          <p className="thanks">Thank you for your business!</p>
        </div>
      </div>
    </>
  );
};

export default App;
