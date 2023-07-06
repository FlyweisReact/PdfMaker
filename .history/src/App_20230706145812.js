/** @format */
import React from "react";
import html2pdf from "html2pdf.js";

const App = () => {
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
