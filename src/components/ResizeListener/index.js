import { useCallback, useEffect, useState } from 'react';

const ResizeListener = ({ render }) => {
  const [screenWidth, setScreenWidth] = useState(null);
  const [screenHeight, setScreenHeight] = useState(null);

  const onResize = useCallback((event) => {
    const scrnWidth = event.target.innerWidth;
    const scrnHight = event.target.innerHeight;

    setScreenWidth(scrnWidth);
    setScreenHeight(scrnHight);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', onResize);

    onResize({ target: window });

    return () => window.removeEventListener('resize', onResize);
  }, []); // eslint-disable-line

  return render({ screenWidth, screenHeight });
};

export default ResizeListener;
