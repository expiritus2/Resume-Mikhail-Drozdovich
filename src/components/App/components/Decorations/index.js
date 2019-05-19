import React, { useRef, useEffect } from 'react';
import { ResizeListener } from 'components';
import SnowFlakes from './SnowFlakes';

import styles from './index.scss';

const Decorations = () => {
  const canvasRef = useRef();

  const getCtx = context => canvasRef.current.getContext(context);
  const getFieldSize = () => {
    const { innerWidth, innerHeight } = window;

    return {
      width: innerWidth,
      height: innerHeight,
    };
  };

  const runSnowFlakes = (ctx) => {
    const fieldSize = getFieldSize();
    const snowFlakes = new SnowFlakes(ctx, 1000, fieldSize);
    snowFlakes.start();
  };

  const defineDecoration = () => {
    const ctx = getCtx('2d');
    runSnowFlakes(ctx);
  };

  useEffect(() => {
    defineDecoration();
  });

  return (
    <ResizeListener
      render={({ screenWidth, screenHeight }) => (
        <canvas width={`${screenWidth}px`} height={`${screenHeight}px`} id={styles.decor} ref={canvasRef} />
      )}
    />
  );
};

export default Decorations;
