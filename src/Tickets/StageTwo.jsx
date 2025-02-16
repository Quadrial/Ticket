import React, { useState, useEffect } from "react";
import Header from "../Header/Header";

const Ticket = ({ nextStage, stage, totalStages, prevStage, ticketData, setTicketData }) => {
  // Load from localStorage or set default values
  const [localData, setLocalData] = useState({
    name: ticketData?.name || localStorage.getItem("name") || "",
    email: ticketData?.email || localStorage.getItem("email") || "",
    project: ticketData?.project || localStorage.getItem("project") || "",
    image: ticketData?.image || localStorage.getItem("profileImage") || null,
  });

  useEffect(() => {
    localStorage.setItem("name", localData.name);
    localStorage.setItem("email", localData.email);
    localStorage.setItem("project", localData.project);
    if (localData.image) {
      localStorage.setItem("profileImage", localData.image);
    }
    setTicketData(localData); // Ensure ticketData is updated globally
  }, [localData, setTicketData]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setLocalData((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <Header />
      <section className="px-5 text-white flex flex-col min-h-screen">
        <main className="border-[#0E464F] border-4 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-auto rounded-2xl mx-auto my-10 p-5 shadow-lg">
          <div className="flex flex-col md:flex-row lg:flex-row md:justify-between lg:justify-between">
            <p className="text-2xl">Attendee Details</p>
            <p>Step 2/3</p>
          </div>
          <div className="w-full bg-gray-300 h-2 rounded-full mt-2">
            <div className="h-2 bg-blue-500 rounded-full transition-all duration-500" style={{ width: `${(stage / totalStages) * 100}%` }}></div>
          </div>
          <section className="lg:border-[#0E464F] md:border-[#0E464F] lg:border-2 md:border-2 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-auto rounded-xl mx-auto my-5 p-5">
            <main className="flex flex-col border-[#0E464F] border-2 w-full h-auto rounded-2xl mx-auto my-1 p-5">
              <h2 className="text-md">Upload Profile Photo</h2>
              <figure className="mt-5 flex flex-col items-center bg-[#073733F] border-[#0E464F] border-2 w-full h-auto rounded-md mx-auto my-2 p-3">
                {localData.image ? (
                  <img src={localData.image} alt="Profile Preview" className="w-[150px] h-[150px] object-cover rounded-full border-[#0E464F] border-2" />
                ) : (
                  <label className="flex items-center justify-center w-[190px] h-[150px] bg-[#197686] border-[#0E464F] border-2 rounded-2xl cursor-pointer">
                    <span className="p-1 text-center">Drag & drop or click to Upload</span>
                    <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                  </label>
                )}
              </figure>
            </main>
            <div className="border-[#0E464F] border-2 w-full h-auto rounded-xl mx-auto my-5"></div>
            <form className="flex flex-col gap-10">
              <div>
                <label>Enter your name</label>
                <input
                  value={localData.name}
                  onChange={(e) => setLocalData((prev) => ({ ...prev, name: e.target.value }))}
                  type="text"
                  className="mt-3 w-full py-3 px-3 border-[#0E464F] border-2 rounded-xl text-white"
                />
              </div>
              <div>
                <label>Enter your email*</label>
                <input
                  value={localData.email}
                  onChange={(e) => setLocalData((prev) => ({ ...prev, email: e.target.value }))}
                  type="email"
                  placeholder="hello@avioflags.io"
                  className="mt-3 w-full py-3 px-3 border-[#0E464F] border-2 rounded-xl text-white"
                />
              </div>
              <div>
                <label>About the project</label>
                <textarea
                  value={localData.project}
                  onChange={(e) => setLocalData((prev) => ({ ...prev, project: e.target.value }))}
                  placeholder="Tell us about the project..."
                  className="mt-3 w-full py-3 px-3 border-[#0E464F] border-2 rounded-xl text-white"
                ></textarea>
              </div>
            </form>
            <main className="mt-5 flex flex-col-reverse gap-5 items-center">
              <button onClick={prevStage} className="border-[#0E464F] hover:bg-[#24A0B5] border-2 p-3 rounded-xl w-full">
                Back
              </button>
              <button onClick={nextStage} className="border-[#0E464F] bg-[#24A0B5] border-2 p-3 rounded-xl w-full">
                Get My Free Tickets
              </button>
            </main>
          </section>
        </main>
      </section>
    </div>
  );
};

export default Ticket;
