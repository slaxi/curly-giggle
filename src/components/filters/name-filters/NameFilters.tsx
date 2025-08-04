
const NameFilters = ({
    onHandleChange,
}: {
  onHandleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}) => {

  return (
    <div className="subregion-filters">
      <select className="subregion-select" onChange={onHandleChange}>
        <option value="">Select countries by name</option>
        <option value="asc">Sort asc A-Z</option>
        <option value="desc">Sort desc Z-A</option>
      </select>
    </div>
  );
};

export default NameFilters;
