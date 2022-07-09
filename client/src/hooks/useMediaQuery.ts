import { useEffect, useState } from "react";

// const matches = useMediaQuery('(min-width: 600px)')
const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const matchQueryList = window.matchMedia(query);

    setMatches(matchQueryList.matches);

    const onChangeMedia = (event: any) => {
      setMatches(event.matches);
    };

    matchQueryList.addEventListener("change", onChangeMedia);

    return () => {
      matchQueryList.removeEventListener("change", onChangeMedia);
    };
  }, [query]);
  return matches;
};

export default useMediaQuery;
