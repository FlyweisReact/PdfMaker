import React from 'react'
import { PDFViewer, Page, Text, View, Document } from 'react-pdf';


const App = () => {

  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    }
  });


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
  )
}

export default App