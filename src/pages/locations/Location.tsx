import { ErrorComponent, Loading, GroupPagination } from "../../components";
import EpisodeCard from "../../components/EpisodeCard/EpisodeCard";
import { useFetch, usePaginated } from "../../hooks";
import type { Info } from "../../Types";
import styles from "./Location.module.css";
import img from "../../assets/Locations/Locations.jpg";

interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
}
interface apiResponse {
  info: Info;
  results: Location[];
}
const Location = () => {
  const { handleNext, handlePrev, page } = usePaginated();
  const url = `https://rickandmortyapi.com/api/location?page=${page}`;
  const { data, error, loading } = useFetch<apiResponse>(url);

  return (
    <>
      {/*Error */}

      {error && <ErrorComponent error={error} />}

      {/*Loading */}

      {loading && <Loading />}

      {/*Renderizado*/}

      {data?.results && (
        <>
          <div className={styles.container}>
            {data?.results.map((location) => (
              <EpisodeCard>
                <div className={styles.data}>
                  <p>
                    <span>Name:</span> {location.name}
                  </p>
                  <p>
                    <span>Type: </span>
                    {location.type}
                  </p>
                  <p>
                    <span>Dimension:</span> {location.dimension}
                  </p>
                </div>
                <div className={styles.image}>
                  <img src={img} alt="" />
                </div>
              </EpisodeCard>
            ))}
          </div>

          {/*Pagination Buttons */}
          <GroupPagination
            handleNext={handleNext}
            handlePrev={handlePrev}
            page={page}
            next={data.info.next}
          />
        </>
      )}
    </>
  );
};

export default Location;
