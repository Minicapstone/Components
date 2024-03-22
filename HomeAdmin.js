import React, { useState, useEffect } from "react";
import { BsFileEarmarkSpreadsheetFill } from "react-icons/bs";
import CanvasJSReact from "@canvasjs/react-charts";

const LibraryLogs = () => {
  
  const [walkIns] = useState(23);
  const [borrowedToday] = useState(15);
  const [returned] = useState(5);
  const [overdue] = useState(0);
  const options = {
    height: 400,
    axisY: {
      maximum: 30,
    },

    data: [
      {
        type: "column",
        dataPoints: [
          { label: "Monday", y: 10, color: "maroon" },
          { label: "Tuesday", y: 15, color: "maroon" },
          { label: "Wednesday", y: 15, color: "maroon" },
          { label: "Thursday", y: 10, color: "maroon" },
          { label: "Friday", y: 10, color: "maroon" },
          { label: "Saturday", y: 3, color: "maroon" },
        ],
      },
    ],
  };


  const [username] = useState("Admin");

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hour = currentTime.getHours();

  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const getGreeting = () => {
    if (hour >= 5 && hour < 12) {
      return "Good morning";
    } else if (hour >= 12 && hour < 18) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  };



  const handleExport = () => {
    alert('Succesfully exported as Spreadsheet...');
  };

  var CanvasJSChart = CanvasJSReact.CanvasJSChart;

  return (
    <div className="px-3 flex-1 mt-3">
      <div className="p-4 bg-white rounded-lg shadow-lg mb-3">
        <div className="flex justify-between">
          <div className="Greetings">
            <p className="text-xl font-semibold pr-4">
              {getGreeting()},{" "}
              <span className="text-maroon">Welcome {username}!👋</span>
            </p>
          </div>
          <div>
            <p className="text-xl font-semibold">
              {currentTime.toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}{" "}
              |{" "}
              {currentTime.toLocaleDateString("en-US", {
                weekday: "long",
              })}
              , {formattedTime}
            </p>
          </div>
        </div>
      </div>

      <div className="statistics-section flex-1">

      <div className="flex justify-between mt-10 mb-10 gap-5">
        <div className="p-12 h-60 w-full bg-white mx-3 rounded-xl shadow-xl">
          <p className="text-4xl text-center mt-5 font-bold">{walkIns}</p>
          <p className="center text-lg font-bold text-center my-3">Walk In</p>
        </div>

        <div className="p-12 h-60 w-full bg-white mr-3 rounded-xl shadow-lg">
          <p className="text-4xl text-center mt-5 font-bold">{borrowedToday}</p>
          <p className="center text-lg font-bold text-center my-3">
            Books Borrowed Today
          </p>
        </div>

        <div className="p-12 h-60 w-full bg-white mr-3 rounded-xl shadow-lg">
          <p className="text-4xl text-center mt-5 font-bold">{returned}</p>
          <p className="center text-lg font-bold text-center my-3">
            Books Returned Today
          </p>
        </div>

        <div className="p-12 h-60 w-full bg-white mr-3 rounded-xl shadow-lg">
          <p className="text-4xl text-center mt-5 font-bold">{overdue}</p>
          <p className="center text-lg font-bold text-center my-3">
            Overdue Books
          </p>
        </div>
      </div>

      <div className="flex">
        <div className="h-auto w-full bg-white mx-3 p-5 mt-5 rounded-xl shadow-lg">
          <p className="center text-lg font-bold text-center my-3">
            New Users per Day
          </p>
          <CanvasJSChart
            options={options}
           
          />
        </div>

        <div className="bg-white mx-3 w-1/2 mt-5 rounded-xl shadow-xl flex flex-col">
          <p className="text-xl font-bold text-center mt-10">Newly Registered Users</p>
          <div className="p-10 custom-scrollbar overflow-y-auto max-h-[400px]">
            <p className="mt-5 p-3 w-full bg-maroon rounded-md text-white flex justify-between">
              1. Full Name: </p>

            <p className="mt-5 p-3 w-full bg-maroon rounded-md text-white flex justify-between">
              2. Full Name: </p>

            <p className="mt-5 p-3 w-full bg-maroon rounded-md text-white flex justify-between">
              3. Full Name: </p>

            <p className="mt-5 p-3 w-full bg-maroon rounded-md text-white flex justify-between">
              4. Full Name: </p>

            <p className="mt-5 p-3 w-full bg-maroon rounded-md text-white flex justify-between">
              5. Full Name: </p>

              <p className="mt-5 p-3 w-full bg-maroon rounded-md text-white flex justify-between">
              6. Full Name: </p>

            <p className="mt-5 p-3 w-full bg-maroon rounded-md text-white flex justify-between">
              7. Full Name: </p>

            <p className="mt-5 p-3 w-full bg-maroon rounded-md text-white flex justify-between">
              8. Full Name: </p>

            <p className="mt-5 p-3 w-full bg-maroon rounded-md text-white flex justify-between">
              9. Full Name: </p>

            <p className="mt-5 p-3 w-full bg-maroon rounded-md text-white flex justify-between">
              10. Full Name: </p>

          </div>
        </div>
      </div>
    </div>

    </div>
  );
};

export default LibraryLogs;
