import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetData } from "../../store/apiData/apiData.effect";
import { selectApiData } from "../../store/apiData/apiData.selector";

export const ApiData = () => {
  const { error, loading, data } = useSelector(selectApiData);
  console.log("error, loading, data", error, loading, data);

  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(asyncGetData());
        }}
      >
        Get Data
      </button>
      <div>
        {loading ? (
          <p>LOADING...</p>
        ) : error ? (
          <p>ERROR FETCHING DATA</p>
        ) : (
          data.map((row) => {
            return <div key={row.url}>{row.name}</div>;
          })
        )}
      </div>
    </div>
  );
};
