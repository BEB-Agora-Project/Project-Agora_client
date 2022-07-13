import { useEffect, useState } from "react";

// const matches = useMediaQuery('(min-width: 600px)')
const useMediaQuery = (query: string) => {
  const matchQueryList = window.matchMedia(query);

  const [matches, setMatches] = useState(matchQueryList.matches);

  useEffect(() => {
    setMatches(matchQueryList.matches);

    const onChangeMedia = (event: any) => {
      setMatches(event.matches);
    };

    matchQueryList.addEventListener("change", onChangeMedia);

    return () => {
      matchQueryList.removeEventListener("change", onChangeMedia);
    };
  }, [query, matchQueryList]);
  return matches;
};

export default useMediaQuery;
