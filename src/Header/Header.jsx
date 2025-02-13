import React from "react";

const Header = () => {
  return (
    <header className="px-5">
      <header className="max-w-screen-xl mx-auto mt-10 p-5 border-2 rounded-3xl border-[#0E464F]">
        <main className="flex justify-between">
          <img src="images/logo1.png" alt="" className="" />
          <div className="md:flex lg:flex gap-10 hidden text-[#0E464F] items-center">
            <p className="text-xl hover:text-amber-50">Events</p>
            <p className="text-xl hover:text-amber-50">My Tickets</p>
            <p className="text-xl hover:text-amber-50">About Project</p>
          </div>
          <button className="bg-white p-2 rounded-lg">MY TICKETS </button>
        </main>
      </header>
    </header>
  );
};

export default Header;
