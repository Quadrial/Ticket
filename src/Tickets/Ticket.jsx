import React, { useState, useEffect } from "react";
import Header from "../Header/Header";

const Ticket = ({ nextStage, stage, totalStages }) => {
  const ticketTypes = [
    { name: "REGULAR ACCESS", price: "FREE" },
    { name: "VIP ACCESS", price: "$150" },
    { name: "VVIP ACCESS", price: "$50" },
  ];

  const ticketCounts = [1, 2, 3, 4];

  // Load from localStorage or set default values
  const [selectedTicket, setSelectedTicket] = useState(
    localStorage.getItem("selectedTicket") || ""
  );
  const [selectedCount, setSelectedCount] = useState(
    localStorage.getItem("selectedCount") || "1"
  );

  useEffect(() => {
    localStorage.setItem("selectedTicket", selectedTicket);
    localStorage.setItem("selectedCount", selectedCount);
  }, [selectedTicket, selectedCount]);

  return (
    <div>
      <Header />
      <section className="px-5 text-white flex flex-col items-center justify-center min-h-screen">
        <main className="border-[#0E464F] border-4 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-auto rounded-2xl mx-auto my-10 p-5 shadow-lg">
          {/* Stage Info */}
          <div className="flex flex-col md:flex-row lg:flex-row md:justify-between lg:justify-between">
            <p className="text-2xl">Ticket Selection</p>
            <p>
              Step {stage}/{totalStages}
            </p>
          </div>

          {/* Progress Tracker */}
          <div className="w-full bg-gray-300 h-2 rounded-full mt-2">
            <div
              className="h-2 bg-blue-500 rounded-full transition-all duration-500"
              style={{ width: `${(stage / totalStages) * 100}%` }}
            ></div>
          </div>

          {/* Ticket Information */}
          <section className="lg:border-[#0E464F] md:border-[#0E464F] lg:border-2 md:border-2 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-auto rounded-xl mx-auto my-5 p-5">
            <main className="flex flex-col text-center items-center border-[#0E464F] border-2 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-auto rounded-2xl mx-auto my-1 p-5">
              <h1 className="lg:text-4xl md:text-4xl text-xl font-extrabold">
                Techember Fest '25
              </h1>
              <h2 className="text-[18px] lg:w-[330px] md:w-[330px] w-[230px]">
                Join for an unforgettable experience at [Event Name]! Secure
                your spot now.
              </h2>
              <span className="mt-5 w-[180px] md:w-[350px] lg:w-[350px]">
                📍[Event Location] | March 15, 2005 | 7:00PM
              </span>
            </main>

            {/* Divider */}
            <div className="border-[#0E464F] border-2 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-auto rounded-xl mx-auto my-5"></div>

            {/* Ticket Selection */}
            <main className="flex flex-col">
              <h1>Select Ticket Type:</h1>
              <figure className="border-[#0E464F] border-2 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-auto rounded-2xl mx-auto my-5 p-5">
                <main className="grid lg:grid-cols-2 md:grid-cols-2 grid-rows-1 gap-6">
                  {ticketTypes.map((ticket) => (
                    <button
                      key={ticket.name}
                      onClick={() => setSelectedTicket(ticket.name)}
                      className={`flex flex-row justify-between text-start border-[#0E464F] border-2 rounded-xl p-2 ${
                        selectedTicket === ticket.name
                          ? "bg-red-500"
                          : "hover:bg-[#24A0B5]"
                      }`}
                    >
                      <div className="flex flex-col">
                        <h2 className="text-sm">{ticket.name}</h2>
                        <h2>20 Left!</h2>
                      </div>
                      <h2 className="border-[#0E464F] border-2 rounded-xl p-1 w-[80px] text-end">
                        {ticket.price}
                      </h2>
                    </button>
                  ))}
                </main>
              </figure>

              {/* Number of Tickets */}
              <main>
                <h2>Number of Tickets</h2>
                <select
                  value={selectedCount}
                  onChange={(e) => setSelectedCount(e.target.value)}
                  className="border-[#0E464F] border-2 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-auto rounded-xl mx-auto my-2 p-2"
                >
                  {ticketCounts.map((count) => (
                    <option key={count} value={count}>
                      {count}
                    </option>
                  ))}
                </select>
              </main>

              {/* Navigation Buttons */}
              <main className="lg:flex-row lg:justify-center md:justify-center md:flex-row flex flex-col-reverse gap-5 items-center lg:border-[#0E464F] md:border-[#0E464F] md:border-2 lg:border-2 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-auto rounded-xl mx-auto my-2">
                <button className="border-[#0E464F] hover:bg-[#24A0B5] border-2 p-3 rounded-xl lg:w-[200px] md:w-[200px] w-full">
                  Cancel
                </button>
                <button
                  onClick={nextStage}
                  className="border-[#0E464F] bg-[#24A0B5] border-2 p-3 rounded-xl lg:w-[200px] md:w-[200px] w-full"
                >
                  Next
                </button>
              </main>
            </main>
          </section>
        </main>
      </section>
    </div>
  );
};

export default Ticket;
