import type { Info } from "../../Types/apiTypes";
import { ErrorComponent, Loading, GroupPagination } from "../../components";
import EpisodeCard from "../../components/EpisodeCard/EpisodeCard";
import { useFetch, usePaginated } from "../../hooks";
import styles from "./episode.module.css";

interface ApiResponse {
  results: Episode[];
  info: Info;
}
type Episode = {
  id: number;
  name: string;
  airDate: string;
  episode: string;
};

const Episode = () => {
  const { handleNext, handlePrev, page } = usePaginated();
  const url = `https://rickandmortyapi.com/api/episode/?page=${page}`;
  const { data, loading, error } = useFetch<ApiResponse>(url);

  return (
    <>
      {/*Error */}

      {error && <ErrorComponent error={error} />}

      {/*Loading */}

      {loading && <Loading />}

      {/*Episodes */}

      {data && (
        <>
          <div className={styles.container}>
            {data?.results?.map((episode: Episode) => {
              return (
                <EpisodeCard
                  key={episode.id}
                  name={episode.name}
                  date={episode.airDate}
                  episode={episode.episode}
                />
              );
            })}
          </div>
          {/*Pagination */}

          <GroupPagination
            page={page}
            handleNext={handleNext}
            handlePrev={handlePrev}
            next={data.info.next}
          />
        </>
      )}
    </>
  );
};

export default Episode;
