import type { Info } from "../../Types/apiTypes";
import {
  ErrorComponent,
  Loading,
  GroupPagination,
  Button,
} from "../../components";
import EpisodeCard from "../../components/EpisodeCard/EpisodeCard";
import { useFetch, usePaginated } from "../../hooks";
import styles from "./Episode.module.css";
import img from "../../assets/logos/rick-Episode.jpg";

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
              // Extraer número de season del string "S03E01"
              const match = episode.episode.match(/^S(\d+)E\d+$/i);
              const season = match ? parseInt(match[1], 10) : null;
              // Asignar color según la season
              const getCircleColor = (season: number | null) => {
                switch (season) {
                  case 1:
                    return "#43e97b";
                  case 2:
                    return "#68ec3c";
                  case 3:
                    return "#21a1f3";
                  case 4:
                    return "#ffb347";
                  case 5:
                    return "#ff5e62";
                  default:
                    return "#ccc";
                }
              };
              return (
                <EpisodeCard key={episode.id}>
                  <img src={img} alt="episode" />
                  <div className={styles.text}>
                    <p>
                      <span>Name:</span> {episode.name}
                    </p>
                    <div className={styles.season}>
                      <p>
                        <span>Episode:</span> {episode.episode}
                      </p>
                      <div
                        className={styles.circle}
                        style={{ background: getCircleColor(season) }}
                      ></div>
                    </div>
                    <p>
                      <span>Air Date:</span> {episode.airDate}
                    </p>
                    <Button>Resumen</Button>
                  </div>
                </EpisodeCard>
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
