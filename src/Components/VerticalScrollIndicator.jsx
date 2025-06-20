import React from "react";

const VerticalScrollIndicator = ({ current, scrollTo }) => {
  const handleChange = (e) => {
    scrollTo(parseInt(e.target.value));
  };

  return (
    <>
      {/* Desktop List */}
      <div className="items-list d-none d-md-block">
        <ul className="inter">
          <li className={current === 0 ? "active" : ""} onClick={() => scrollTo(0)}>Atlas</li>
          <li className={current === 1 ? "active" : ""} onClick={() => scrollTo(1)}>Apex</li>
          <li className={current === 2 ? "active" : ""} onClick={() => scrollTo(2)}>Epic</li>
          <li className={current === 3 ? "active" : ""} onClick={() => scrollTo(3)}>Genesis</li>
          <li className={current === 4 ? "active" : ""} onClick={() => scrollTo(4)}>Magnum</li>
          <li className={current === 5 ? "active" : ""} onClick={() => scrollTo(5)}>Easy-Access</li>
          <li className={current === 6 ? "active" : ""} onClick={() => scrollTo(6)}>Super Atlas</li>
        </ul>
      </div>

      {/* Mobile Dropdown */}
      <div className="d-block d-md-none mt-4">
        <select className="form-select inter" value={current} onChange={handleChange}>
          <option value={0}>Atlas</option>
          <option value={1}>Apex</option>
          <option value={2}>Epic</option>
          <option value={3}>Genesis</option>
          <option value={4}>Magnum</option>
          <option value={5}>Easy-Access</option>
          <option value={6}>Super Atlas</option>
        </select>
      </div>
    </>
  );
};

export default VerticalScrollIndicator;
