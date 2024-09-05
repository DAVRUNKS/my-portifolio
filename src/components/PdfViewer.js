import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { useNavigate } from 'react-router-dom';
import './PdfViewer.css'; // Import the CSS file for custom styles

// Set worker path
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.mjs`;

const PdfViewer = ({ pdfUrl }) => {
  const navigate = useNavigate();
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisitedPdfPage');

    if (hasVisited) {
      navigate('/');
    } else {
      localStorage.setItem('hasVisitedPdfPage', 'true');
    }

    return () => {
      localStorage.removeItem('hasVisitedPdfPage');
    };
  }, [navigate]);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="pdf-viewer-container">
      <div className="pdf-pages-container">
        <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from({ length: numPages }, (_, index) => (
            <div key={`page_${index + 1}`} className="pdf-page-wrapper">
              <Page pageNumber={index + 1} />
            </div>
          ))}
        </Document>
      </div>
    </div>
  );
};

export default PdfViewer;


