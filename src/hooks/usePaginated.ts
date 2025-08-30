import { useState } from "react";

export const usePaginated = () => {
  const [page, setPage] = useState(42);
  const handleNext = () => {
    setPage(page + 1);
  };
  const handlePrev = () => {
    setPage(page - 1);
  };

  return { page, handleNext, handlePrev, setPage };
};
