import styles from "./SearchInput.module.css";
interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const SearchInput = ({ value, onChange }: Props) => {
  return (
    <input
      className={styles.searchInput}
      type="search"
      placeholder="Buscar por Nombre"
      value={value}
      onChange={onChange}
    />
  );
};

export default SearchInput;
