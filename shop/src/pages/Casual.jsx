import React, { useContext, useEffect } from 'react';
import Card from '../compounds/Card';
import Filters from '../compounds/Filters';
import { FilterContext } from '../context/Filtercontext';
import { useParams } from 'react-router-dom';

function Casual() {
  const { filterdata, fetchoccasion, occassiondata } = useContext(FilterContext);
  const { type } = useParams();

  useEffect(() => {
    fetchoccasion(type);
  }, [type]);

  // Decide which data to render
  const dataToRender = filterdata && filterdata.length > 0 ? filterdata : occassiondata;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-7 gap-6 mt-6 p-6">
      {/* Filters - spans 2 columns */}
      <div className="col-span-2">
        <Filters />
      </div>

      {/* Cards Section - spans 5 columns */}
      <div className="col-span-1 lg:col-span-5">
        <h1 className="font-bold text-4xl mb-4 capitalize">{type}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dataToRender?.map((item, index) => (
            <Card key={index} productData={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Casual;
