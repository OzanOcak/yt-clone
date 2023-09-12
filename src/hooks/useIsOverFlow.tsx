import * as React from "react";

interface Props {
  ref: string;
  callback: () => void;
}

export const useIsOverflow = (ref, callback): Props => {
  const [isOverflow, setIsOverflow] = React.useState<undefined | boolean>(
    undefined
  );

  React.useLayoutEffect(() => {
    const { current } = ref;

    const trigger = () => {
      const hasOverflow = current.scrollHeight > current.clientHeight;

      setIsOverflow(hasOverflow);

      if (callback) callback(hasOverflow);
    };

    if (current) {
      trigger();
    }
  }, [callback, ref]);

  return isOverflow;
};
