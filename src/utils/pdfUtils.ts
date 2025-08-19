import jsPDF from 'jspdf';

// Define Message type to match the shape from Redux store
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface Message extends Record<string, any> {
  sender: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: string | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sources?: any[];
  isFinalResponse?: boolean;
  error?: string;
}

/**
 * Generates a PDF from the chat conversation
 * @param messages - Array of chat messages
 * @returns Promise that resolves when PDF is saved
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const generatePdf = (messages: Record<string, any>[]): Promise<void> => {
  return new Promise((resolve, reject) => {
    try {
      // Create PDF using jsPDF
      const pdf = new jsPDF();
      const date = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });

      // Configure fonts and colors
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(16);
      pdf.setTextColor(0, 48, 30); // Title color

      // Add title
      pdf.text('Assistant Conversation', 105, 20, { align: 'center' });

      // Date
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(10);
      pdf.setTextColor(100, 100, 100); // Gray for date
      pdf.text(`Exported on ${date}`, 105, 30, { align: 'center' });

      // Content configuration
      pdf.setTextColor(0, 0, 0); // Black for content
      pdf.setFontSize(11);

      let yPosition = 50; // Initial position to start writing messages

      // Add each message
      messages.forEach((message) => {
        const senderLabel = message.sender === 'user' ? 'User:' : 'Assistant:';
        const content =
          typeof message.content === 'string'
            ? message.content
            : JSON.stringify(message.content, null, 2);

        // Add sender
        pdf.setFont('helvetica', 'bold');
        pdf.text(senderLabel, 20, yPosition);
        yPosition += 6;

        // Add message content with automatic wrapping
        pdf.setFont('helvetica', 'normal');
        yPosition = addWrappedText(pdf, content, 20, yPosition, 170, 6);

        // Space between messages
        yPosition += 10;

        // If we're approaching the end of the page, add a new one
        if (yPosition > 270) {
          pdf.addPage();
          yPosition = 20;
        }
      });

      // Save the PDF
      pdf.save('chat-conversation.pdf');
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * Function to add text with automatic line breaks
 */
const addWrappedText = (
  pdf: jsPDF,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number
): number => {
  pdf.text(text, x, y, {
    maxWidth,
    lineHeightFactor: lineHeight,
  });
  return y + lineHeight; // Update yPosition after adding text
};

/**
 * Fallback function to generate text file when PDF generation fails
 * @param messages - Array of chat messages
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const generateTextFallback = (messages: Record<string, any>[]): void => {
  const textContent = messages
    .map(
      (msg) =>
        `${msg.sender === 'user' ? 'User' : 'Assistant'}: ${
          typeof msg.content === 'string'
            ? msg.content
            : JSON.stringify(msg.content)
        }`
    )
    .join('\n\n');

  const textBlob = new Blob([textContent], { type: 'text/plain' });
  const textUrl = URL.createObjectURL(textBlob);
  const textLink = document.createElement('a');
  textLink.href = textUrl;
  textLink.download = 'chat-conversation.txt';
  textLink.click();
  URL.revokeObjectURL(textUrl);
};
