/** @format */
import React from "react";
import { PDFDownloadLink, Page, Text, View, Document } from "react-pdf";

const App = () => {
  return (
    <>
   <div>
      <PDFDownloadLink document={<Document>
        <Page>
          <View>
            <Text>Hello, React-PDF!</Text>
          </View>
        </Page>
      </Document>} fileName="example.pdf">
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : 'Download now!'
        }
      </PDFDownloadLink>
    </div>
    </>
  );
};

export default App;
