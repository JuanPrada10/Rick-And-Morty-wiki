import { useState } from "react";
import { Button, Card } from "../../components";
import { useFetch } from "../../hooks";
import styles from "./episode.module.css";
interface ApiResponse {
  results: Episode[];
}
type Episode = {
  id: number;
  name: string;
  airDate: string;
  episode: string;
};

const Episode = () => {
  const [page, setPage] = useState(1);
  const url = `https://rickandmortyapi.com/api/episode/?page=${page}`;
  const { data, loading, error } = useFetch<ApiResponse>(url);

  const handleNext = () => {
    if (page) {
      setPage(page + 1);
    }
  };
  const handlePrev = () => {
    if (page) {
      setPage(page - 1);
    }
  };
  return (
    <>
      <div className={styles.container}>
        {error && <div>Error : {error.message}</div>}
        {loading && <div>Cargando....</div>}
        {data?.results?.map((episode: Episode) => (
          <Card key={episode.id} name={episode.name} />
        ))}
      </div>
      <div className={styles.page}>
        <Button disabled={page === 1} handleClick={handlePrev}>
          Prev
        </Button>
        <Button disabled={!data?.info.next} handleClick={handleNext}>
          Next
        </Button>
      </div>
    </>
  );
};

export default Episode;
