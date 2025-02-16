import React, { useRef } from "react";
import html2canvas from "html2canvas";
import Header from "../Header/Header";

const Ticket = ({ prevStage, ticketData, selectedTicket, selectedCount }) => {
  const ticketRef = useRef(null);

  const downloadTicket = async () => {
    if (!ticketRef.current) return;

    const canvas = await html2canvas(ticketRef.current, {
      backgroundColor: null,
    });
    const image = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = image;
    link.download = "ticket.png";
    link.click();
  };

  return (
    <>
      <div>
        <Header />
        <section className="px-5 text-white flex flex-col  min-h-screen">
          <main className="border-[#0E464F] border-4 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-auto rounded-2xl mx-auto my-10 p-7 shadow-lg">
            <h1 className="text-2xl text-center">Your Ticket is Booked</h1>
            <p className="text-md text-center">
              You can download or check your email for a copy
            </p>

            {/* Ticket design */}
            <figure
              ref={ticketRef}
              className=" flex flex-col items-center p-6 mt-5 w-full h-[70vh] bg-[url('/images/bg.png')] bg-no-repeat bg-contain bg-center"
            >
              <main className="lg:mt-5 md:mt-5 -mt-2 flex flex-col items-center border-[#0E464F] p-1 md:p-5 lg:p-5 border-2 max-w-[280px] rounded-2xl">
                <h1 className="lg:text-2xl md:text-xl text-[20px] font-bold">
                  Techember Fest "25
                </h1>
                <span className="lg:text-[16px] md:text-[15px] text-[14px]">
                  📍04 Rumens road, Ikoyi, Lagos
                </span>
                <span className="lg:text-[16px] md:text-[15px] text-[15px]">
                  📅 March 15, 2005 || 7:00PM
                </span>

                {ticketData.image && (
                  <img
                    src={ticketData.image}
                    alt="User Upload"
                    className="mt-5 border-3 border-[#269bad] w-[100px] h-[100px] rounded-2xl"
                  />
                )}

                <div className="lg:mt-10 md:mt-12 mt-5 flex flex-col p-1 rounded-[8px] border lg:w-[224px] w-[200px] border-[#133D44] bg-[#08343C] ">
                  <div className="flex gap-x-2 border-b border-[#12464E] w-full">
                    <div className=" border-r border-[#12464E] w-[100px] p-1 flex flex-col gap-y-1 ">
                      <label className="text-white/30 font-roboto text-[10px] leading-[15px] ">
                        Enter your name
                      </label>
                      <p className="font-roboto text-[12px] truncate font-bold leading-[18px] text-white">
                        {ticketData.name}
                      </p>
                    </div>
                    <div className="flex flex-col w-[100px] p-1 gap-y-1">
                      <label className=" text-white/30 font-roboto text-[10px] leading-[15px] ">
                        Enter your email *
                      </label>
                      <p className="font-roboto truncate text-[12px] font-bold leading-[18px] text-white">
                        {ticketData.email}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-x-2 border-b border-[#12464E] ">
                    <div className=" w-[100px] border-r border-[#12464E] p-1 flex flex-col gap-y-1">
                      <label className="text-white/30 font-roboto text-[10px] leading-[15px] ">
                        Ticket Type:
                      </label>
                      <p className="font-roboto text-[12px] font-bold leading-[18px] text-white">
                        {selectedTicket}
                      </p>
                    </div>
                    <div className="flex flex-col p-1 gap-y-1 w-[100px]">
                      <label className="text-white/30 font-roboto text-[10px] leading-[15px] ">
                        Ticket for :
                      </label>
                      <p className="font-roboto text-[12px] font-bold leading-[18px] text-white">
                        {selectedCount}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col p-2 gap-y-1 h-[62px]">
                    <label className="text-white/30 font-roboto text-[10px] leading-[15px] ">
                      Special request?
                    </label>
                    <textarea
                      disabled=""
                      className="font-roboto text-[10px] font-bold leading-[15px] overflow-y-auto bg-transparent  text-white resize-none"
                    >
                      {ticketData.project}
                    </textarea>
                  </div>
                </div>
              </main>
              <div className="flex flex-col l:mt-[60px] md:mt-[60px] mt-[40px] flex items-center">
                <img
                  src="images/Bar Code.png"
                  alt=""
                  className="lg:w-full md:w-full w-[80%]"
                />
              </div>
            </figure>

            <main className="mt-5 flex flex-col-reverse gap-5 items-center">
              <button
                onClick={prevStage}
                className="border-[#0E464F] border-2 p-3 rounded-xl w-full"
              >
                Book Another Ticket
              </button>
              <button
                onClick={downloadTicket}
                className="border-[#0E464F] bg-[#24A0B5] border-2 p-3 rounded-xl w-full"
              >
                Download Ticket
              </button>
            </main>
          </main>
        </section>
      </div>
    </>
  );
};

export default Ticket;
