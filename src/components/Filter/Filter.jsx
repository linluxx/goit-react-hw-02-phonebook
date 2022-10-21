export const Filter = ({ filter, onFilter }) => {
  return (
    <input type="text" name="filter" value={filter} onChange={onFilter}></input>
  );
};
