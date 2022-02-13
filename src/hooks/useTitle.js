import { useEffect, useRef } from "react";

export const useTitle = ({ title }) => {
  const prevTitle = useRef(document.title);

  useEffect(() => {
    const previousTitle = prevTitle.current;
    document.title = `${title} | Giffy`;

    return () => (document.title = previousTitle);
  }, [title]);
};
