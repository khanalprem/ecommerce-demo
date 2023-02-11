import React from "react";
import { BiGridSmall, BiListUl } from "react-icons/bi";
import { useProductContext } from "../context/ProductContext ";

const sorting_params = [
  {value: 'lowest', text: 'Price(lowest)'},
  {value: 'highest', text: 'Price(highest)'},
  {value: 'a-z', text: 'Price(a-z)'},
  {value: 'z-a', text: 'Price(z-a)'},
]

const ListToggle = () => {
  const { grid_view, setGridView, setListView,sorting } = useProductContext();
  
  return (
    <div className="is-flex is-between is-align-center col-gap-24">
      <div className="is-flex is-start is-align-center col-gap-12 gridToggle-buttons">
        <button
          className={`is-square is-square_sm radius-4 ${
            grid_view ? "is-active" : ""
          }`}
          onClick={() => setGridView()}
        >
          <BiGridSmall />
        </button>
        <button
          className={`is-square is-square_sm radius-4 ${
            !grid_view ? "is-active" : ""
          }`}
          onClick={() => setListView()}
        >
          <BiListUl />
        </button>
      </div>
      <form action="#">
      <select name="sort" id="sort" onChange={sorting}>
        {sorting_params.map((opt) => {
          return (
            <option value={opt.value}>{opt.text}</option>
          )
        })}
      </select>
      </form>
    </div>
  );
};

export default ListToggle;
