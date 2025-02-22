import React from "react";
import "./ExampleCrop.css";
import CropData from "./CropData";
import { useState } from "react";
import NAV from "../nav";

export function ExampleCrop() {
  const [search, setSearch] = useState("");

  return (
    <div className="backdrop-opacity-10 backdrop-invert bg-white/30">
      <NAV />
      <h1 className="h1_E">Find your crop </h1>
    
      <div className="inputcard_E">
        <form className="form_E">
          <input
            placeholder="Input season to find your crop"
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="input_E"
          ></input>
        </form>
      </div>


      <table className="table_E">
        <thead className="thead_E">
          <tr>
            <th>SL NO.</th>
            <th>SEASON</th>
            <th>CROP</th>
            <th>IMAGE</th>
          </tr>
        </thead>
        <tbody className="tbody_E">
          {CropData.filter((card) => {
            return search.toLowerCase() === ""
              ? card
              : card.season.toLowerCase().includes(search);
          }).map((card, index) => (
            <tr className="rowex">
              <td>{card.sl}</td>
              <td>{card.season}</td>
              <td>{card.head}</td>
              <td>
                <img src={card.imageUrl} alt="img" className="Avtar" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
