import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - The Second Tune`;
  }, [title]);
};

export default useTitle;
