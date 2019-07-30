import React, { useCallback } from 'react';
import html2canvas from 'html2canvas';
import JSPDF from 'jspdf';

import styles from './index.scss';

const Saver = () => {
  const onClick = useCallback(() => {
    const fileName = 'mickail-drozdovich.pdf';
    html2canvas(document.body).then((canvas) => {
      const pdf = new JSPDF('p', 'mm', 'a4');
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
      pdf.save(fileName);
    });
  }, []);

  return (
    <div onClick={onClick} className={styles['save-padf-button']}>
      Save as PDF
    </div>
  );
};

export default Saver;
