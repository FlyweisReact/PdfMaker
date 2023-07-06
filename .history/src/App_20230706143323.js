/** @format */
import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const App = () => {
  return (
    <>
      <div>
        <PDFViewer>
          <Document>
            <Page size="A4" style={styles.page}>
              <View style={styles.section}>
                <Text>Section #1</Text>
              </View>
              <View style={styles.section}>
                <Text>Section #2</Text>
              </View>
            </Page>
          </Document>
        </PDFViewer>
      </div>
    </>
  );
};

export default App;
