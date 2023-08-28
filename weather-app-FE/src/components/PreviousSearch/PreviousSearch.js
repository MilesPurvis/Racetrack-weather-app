import { React, useEffect, useState } from 'react';

const PreviousSearch = () => {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('/recent-search');
    const items = await data.json();
    setItems(items);
  };

  return (
    <div className='container border-bottom m-3'>
      <div className='card p-3'>
        <h3>Search History</h3>
        <div className='card-body'>
          <h5 className='card-title'>
            {items.city}, {items.country}
          </h5>
          <p className='card-text'>Temperature: {items.temperature}c</p>
          <a href='#' className='btn btn-primary'>
            Check Temp
          </a>
        </div>
      </div>
    </div>
  );
};

export default PreviousSearch;
