import React, { useState } from "react";
// import { getTableIDAction, updateTableAction } from "@/app/_actions";

const SelectAv = () => {
  const [pick, setPick] = useState<string>("Available");

  //   const table = getTableIDAction();

  const handleChange = async (e: any) => {
    setPick(e.target.value);
    // e.preventDefault();

    // updateTableAction(1, pick);
  };

  return (
    <>
      <select
        id="availability"
        className="bg-black text-center border-0 text-white"
        onChange={handleChange}
        // onSubmit={handleSubmit}
      >
        <option value="available">Available</option>
        <option value="unavailable">Unavailable</option>
        <option value="booked">Booked</option>
      </select>
    </>
  );
};

export default SelectAv;
