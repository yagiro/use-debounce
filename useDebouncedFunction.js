import { useCallback, useRef } from 'react';

const useDebouncedFunction = (func, delayMs) => {
  const tid = useRef();

  const debouncedFunc = useCallback(
     (...args) => {

        if (tid.current) {
           // console.log('============== canceling timeout:', tid.current);
           clearTimeout(tid.current);
        }

        tid.current = setTimeout(() => {
           // console.log('============== running timeout:', tid.current);
           func(...args);
           tid.current = null;
        }, delayMs);
     },
     [ func ]
  );

  return debouncedFunc;
};

export default useDebouncedFunction;
