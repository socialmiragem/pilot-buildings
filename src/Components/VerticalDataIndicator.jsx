import React from "react";

const options = [
  "Atlas",
  "Apex",
  "Epic",
  "Genesis",
  "Magnum",
  "EasyAccess",
  "SuperAtlas"
];

const VerticalDataIndicator = ({ selectedType, onSelect }) => {
  return (
    <>
      {/* Desktop List */}
      <nav className="items-list d-none d-md-block" aria-label="Building Types Navigation">
        <ul className="font-inter">
          {options.map((type, index) => (
            <li
              key={index}
              className={selectedType === type ? "active" : ""}
              role="button"
              tabIndex={0}
              onClick={() => onSelect(type)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") onSelect(type);
              }}
            >
              {type}
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Dropdown */}
      <form className="d-block d-md-none mt-4" aria-label="Select Building Type">
        <label htmlFor="building-type" className="visually-hidden">
          Choose a building type
        </label>
        <select
          id="building-type"
          className="form-select font-inter w-100"
          value={selectedType}
          onChange={(e) => onSelect(e.target.value)}
        >
          {options.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
      </form>
    </>
  );
};

export default VerticalDataIndicator;
