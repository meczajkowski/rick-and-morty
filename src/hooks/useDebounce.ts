import { useEffect } from "react";

const useDebounce = ({
  callback,
  delay,
  dependencyList,
}: {
  callback: () => void;
  delay: number;
  dependencyList: React.DependencyList;
}) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      callback();
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [dependencyList, delay, callback]);

  return {};
};

export default useDebounce;
