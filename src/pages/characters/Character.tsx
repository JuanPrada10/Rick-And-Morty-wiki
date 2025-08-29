import styles from "./character.module.css";
import { useFetch } from "../../hooks";
import imgError from "../../assets/Error/Error-rick-and-morty.png";
import { Card, Button, SearchInput } from "../../components";
import { useEffect, useState } from "react";
import { RingLoader } from "react-spinners";
interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}
interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string | null;
}

interface ApiResponse {
  results: Character[];
  info: Info;
}

const Character = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(search);
  const url = `https://rickandmortyapi.com/api/character/?page=${page}&name=${debouncedSearch}`;
  const { data, loading, error } = useFetch<ApiResponse>(url);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(handler);
  }, [search]);

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
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setPage(1);
  };
  return (
    <>
      <div className={styles.search}>
        <SearchInput value={search} onChange={handleOnChange}></SearchInput>
      </div>
      {error && (
        <div className={styles.error}>
          <img src={imgError} alt="error-Rick" />
          <h1>¡Wubba Lubba Dub Dub! No encontramos nada</h1>
          <br />
          <p>Error : {error.message}</p>
        </div>
      )}
      {loading && (
        <div className={styles.loading}>
          <RingLoader color="#68ec3c" size={128} />
        </div>
      )}
      {data && (
        <>
          <div className={styles.container}>
            {data?.results?.map((character: Character) => (
              <Card
                key={character.id}
                name={character.name}
                img={character.image}
              />
            ))}
          </div>
          <div className={styles.pagination}>
            <Button disabled={page === 1} handleClick={handlePrev}>
              Prev
            </Button>
            <div className={styles.page}>{page}</div>
            <Button disabled={!data?.info.next} handleClick={handleNext}>
              Next
            </Button>
          </div>
        </>
      )}
    </>
  );
};

export default Character;
