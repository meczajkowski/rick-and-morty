import { useState, FormEvent } from "react";

type UseSearchFormProps = {
  onSearch: (query: string) => void;
  initialValue?: string;
};

const useSearchForm = ({ onSearch, initialValue = "" }: UseSearchFormProps) => {
  const [searchValue, setSearchValue] = useState(initialValue);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(searchValue);
  };

  const handleChange = (value: string) => {
    setSearchValue(value);
  };

  return {
    searchValue,
    handleSubmit,
    handleChange,
  };
};

export default useSearchForm;
