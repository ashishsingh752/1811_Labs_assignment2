"use client";
import React, { useState, ChangeEvent } from "react";

const RangeInputExample: React.FC = () => {
  const [rangeValue, setRangeValue] = useState<number>(30); // Initial value

  const handleRangeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue: number = parseInt(event.target.value, 10);
    setRangeValue(newValue);
  };

  return (
    <div className="flex justify-center items-center gap-10">
      <input
        type="range"
        id="rangeInput"
        min="0"
        max="100"
        value={rangeValue}
        onChange={handleRangeChange}
        className="w-full"
      />
      <div className="flex justify-center items-center gap-3">
        <p className="p-2 bg-gray-300 rounded-md">{rangeValue} </p>{" "}
        <span>credit</span>
      </div>
    </div>
  );
};

export default RangeInputExample;
