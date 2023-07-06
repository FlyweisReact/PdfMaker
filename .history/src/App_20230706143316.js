/** @format */
import React from "react";
import { PDFViewer } from '@react-pdf/renderer';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';


const App = () => {
  return (
    <>
   <div>
   <PDFViewer>
    <MyDocument />
  </PDFViewer>
    </div>
    </>
  );
};

export default App;
