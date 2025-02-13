import React from "react";
import Header from "../Header/Header";

const Ticket = ({ prevStage, ticketData, selectedTicket, selectedCount }) => {
  return (
    <div>
      <Header />
      <section className="px-5 text-white flex flex-col min-h-screen">
        <main className="border-[#0E464F] border-4 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-auto rounded-2xl mx-auto my-10 p-7 shadow-lg">
          <h1 className="text-2xl">Your Ticket is Booked</h1>
          <p>You can download or check your email for a copy</p>

          <figure className="flex flex-col items-center p-6 mt-5 w-full h-[70vh] bg-[url('/images/bg.png')] bg-no-repeat bg-contain bg-center">
            <main className="flex flex-col items-center border-[#0E464F] p-3 border-2 max-w-[280px] rounded-2xl">
              <h1 className="text-xl font-bold">Techember Fest "25</h1>
              <span>📍04 Rumens road, Ikoyi, Lagos</span>
              <span>📅 March 15, 2005 || 7:00PM</span>

              {ticketData.image && (
                <img
                  src={ticketData.image}
                  alt="User Upload"
                  className="mt-2 border-3 border-[#269bad] w-[100px] h-[100px] rounded-2xl"
                />
              )}

              <figure className="flex flex-col gap-2 mt-5 border-3 p-2 border-[#269bad] w-auto h-auto rounded-2xl">
                <table className="w-full">
                  <tbody>
                    <tr className="flex gap-2 border-b-2">
                      <td>
                        <div className="flex flex-col gap-1">
                          <label className="text-xl">Name</label>
                          <h2 className="text-lg">{ticketData.name}</h2>
                        </div>
                      </td>
                      <td>
                        <div className="flex flex-col gap-1">
                          <label className="text-xl">Email</label>
                          <h2 className="text-lg">{ticketData.email}</h2>
                        </div>
                      </td>
                    </tr>
                    <tr className="flex gap-5 border-b-2">
                      <td>
                        <div className="flex flex-col gap-1">
                          <label className="text-xl">Ticket Type</label>
                          <h2 className="text-lg">{selectedTicket}</h2>
                        </div>
                      </td>
                      <td>
                        <div className="flex flex-col gap-1">
                          <label className="text-xl">Ticket for</label>
                          <h2 className="text-lg">{selectedCount}</h2>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </figure>
            </main>
          </figure>

          <main className="mt-5 flex flex-col-reverse gap-5 items-center">
            <button
              onClick={prevStage}
              className="border-[#0E464F] border-2 p-3 rounded-xl w-full"
            >
              Book Another Ticket
            </button>
            <button className="border-[#0E464F] bg-[#24A0B5] border-2 p-3 rounded-xl w-full">
              Download Ticket
            </button>
          </main>
        </main>
      </section>
    </div>
  );
};

export default Ticket;
