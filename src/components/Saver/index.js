import React, { useCallback } from 'react';
import html2canvas from 'html2canvas';
import JSPDF from 'jspdf';

import styles from './index.scss';

const Saver = ({ showSpinner }) => {
  const onClick = useCallback(() => {
    Export2Doc('root', 'test');
    // showSpinner(true);
    // const fileName = 'mickail-drozdovich.pdf';
    // html2canvas(document.body).then((canvas) => {
    //   const pdf = new JSPDF('p', 'mm', 'a4');
    //   pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
    //   pdf.save(fileName);
    //   showSpinner(false);
    // });
  }, [showSpinner]);

  return (
    <div onClick={onClick} className={styles['save-padf-button']}>
      Save as PDF
    </div>
  );
};

export default Saver;

function Export2Doc(element, filename = '') {
  const preHtml = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
  const postHtml = '</body></html>';
  const html = preHtml + document.getElementById(element).innerHTML + postHtml;

  const blob = new Blob(['\ufeff', html], {
    type: 'application/msword',
  });

  // Specify link url
  const url = `data:application/vnd.ms-word;charset=utf-8,${encodeURIComponent(html)}`;

  // Specify file name
  filename = filename ? `${filename}.doc` : 'document.doc';

  // Create download link element
  const downloadLink = document.createElement('a');

  document.body.appendChild(downloadLink);

  if (navigator.msSaveOrOpenBlob) {
    navigator.msSaveOrOpenBlob(blob, filename);
  } else {
    // Create a link to the file
    downloadLink.href = url;

    // Setting the file name
    downloadLink.download = filename;

    // triggering the function
    downloadLink.click();
  }

  document.body.removeChild(downloadLink);
}
