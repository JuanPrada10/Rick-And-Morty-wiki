import styles from "./character.module.css";
import { useFetch, usePaginated, useSearch } from "../../hooks";
import {
  Card,
  Button,
  SearchInput,
  ErrorComponent,
  Loading,
} from "../../components";
import type { Info } from "../../Types/apiTypes";

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

interface ApiResponse {
  results: Character[];
  info: Info;
}

const Character = () => {
  const { onChange, search, debouncedSearch } = useSearch();
  const { handleNext, handlePrev, page } = usePaginated();
  const url = `https://rickandmortyapi.com/api/character/?page=${page}&name=${debouncedSearch}`;
  const { data, loading, error } = useFetch<ApiResponse>(url);

  return (
    <>
      {/* Search Input */}

      <div className={styles.search}>
        <SearchInput value={search} onChange={onChange}></SearchInput>
      </div>

      {/* Error */}

      {error && <ErrorComponent error={error} />}
      {/* Loading */}

      {loading && <Loading />}

      {/*Renderizado Normal*/}

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
            <Button disabled={!data.info.next} handleClick={handleNext}>
              Next
            </Button>
          </div>
        </>
      )}
    </>
  );
};

export default Character;
