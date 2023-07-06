/** @format */
import React from "react";
import { PDFDownloadLink, Page, Text, View, Document } from 'react-pdf';




const App = () => {
  return (
    <>
      <PDFViewer>
        <Document>
          <Page>
            <View>
              <Text>Hello, React-PDF!</Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </>
  );
};

export default App;
