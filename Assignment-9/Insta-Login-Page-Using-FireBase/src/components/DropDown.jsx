import React, { useState } from "react";

const DropDown = (props) => {
  const [inputVal, setInputVal] = useState({
    day: "",
    month: "",
    year: "",
  });

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentYear = new Date().getFullYear();

  const handleChange = (e) => {
    const newInputVal = {
      ...inputVal,
      [e.target.name]: e.target.value,
    };

    setInputVal(newInputVal);

    const { day, month, year } = newInputVal;

    if (day && month && year) {
      props.setValue(`${day}-${month}-${year}`);
    }
  };

  return (
    <div className="flex w-full gap-3">
      {/* Month */}
      <div className="relative flex-1 ">
        <select
          name="month"
          value={inputVal.month}
          onChange={handleChange}
          className={`h-14.5 w-full appearance-none rounded-xl border border-gray-300 bg-white px-4 pr-10 text-[15px] transition-all hover:border-gray-400 ${
            inputVal.month ? "text-black" : "text-gray-400"
          }`}
        >
          <option value="" disabled>
            Month
          </option>

          {months.map((item, index) => (
            <option key={item} value={index + 1}>
              {item}
            </option>
          ))}
        </select>

        <svg
          className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>

      {/* Day */}
      <div className="relative flex-1">
        <select
          name="day"
          value={inputVal.day}
          onChange={handleChange}
          className={`h-14.5 w-full appearance-none rounded-xl border border-gray-300 bg-white px-4 pr-10 text-[15px] transition-all hover:border-gray-400 ${
            inputVal.day ? "text-black" : "text-gray-400"
          }`}
        >
          <option value="" disabled>
            Day
          </option>

          {Array.from({ length: 31 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>

        <svg
          className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>

      {/* Year */}
      <div className="relative flex-1">
        <select
          name="year"
          value={inputVal.year}
          onChange={handleChange}
          className={`h-14.5 w-full appearance-none rounded-xl border border-gray-300 bg-white px-4 pr-10 text-[15px] transition-all hover:border-gray-400 ${
            inputVal.year ? "text-black" : "text-gray-400"
          }`}
        >
          <option value="" disabled>
            Year
          </option>

          {Array.from({ length: currentYear - 1899 }, (_, i) => {
            const y = currentYear - i;

            return (
              <option key={y} value={y}>
                {y}
              </option>
            );
          })}
        </select>

        <svg
          className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
    </div>
  );
};

export default DropDown;
