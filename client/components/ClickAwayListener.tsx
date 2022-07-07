import React, { useCallback, useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
  onClickAway: () => void;
}

const ClickAwayListener: React.FC<Props> = ({ children, onClickAway }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const listener = useCallback(
    (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) return;
      onClickAway();
    },
    [onClickAway]
  );

  useEffect(() => {
    window.addEventListener("mousedown", listener);

    return () => window.removeEventListener("mousedown", listener);
  }, [listener]);

  return <div ref={ref}>{children}</div>;
};

export default ClickAwayListener;
