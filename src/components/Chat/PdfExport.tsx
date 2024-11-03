import * as React from 'react';
/* import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';
import theme from '../../theme'; */
import { Page, Text, Document, StyleSheet, View } from '@react-pdf/renderer';


interface Message {
  sender: 'user' | 'assistant';
  content: string;
}

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 10,
  },
  box: {
    marginBottom: 10,
    marginTop: 10,
    padding: 10,
  },
  boxTitle: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#E2F389',
  },
  title: {
    fontSize: 16, // Cambiado de '1.125rem' a 16
    marginBottom: 10,
  },
  content: {
    fontSize: 12, // Cambiado de '0.75rem' a 12
    marginBottom: 5,
  },
  header: {
    backgroundColor: '#00301E',
    fontSize: 14, // Cambiado de '1rem' a 14
    color: '#FFFFFF',
    padding: 10,
  },
});

interface PdfExportProps {
  messages: Message[];
}

const PdfExport: React.FC<PdfExportProps> = ({ messages }) => {
  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.boxTitle}>
          <Text style={styles.title}>Chat theme: {messages[0]?.content}</Text>
          <Text style={styles.content}>Downloaded conversation</Text>
        </View>
        {messages.map((message, index) => (
          <View key={index} style={styles.box}>
            <View style={styles.header}>
              <Text style={styles.content}>{index % 2 === 0 ? 'User Question' : 'Lupai Answer'}</Text>
            </View>
            <Text style={styles.content}>{message.content}</Text>
          </View>
        ))}
      </Page>
    </Document>
  );
};


// Exporta el wrapper en lugar del componente PdfExport
export default PdfExport;
