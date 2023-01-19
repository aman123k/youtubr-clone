import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import "./Index.css";
import Home from "./Pages/Home";
import Subscriptions from "./Pages/Subscriptions";
import Tranding from "./Pages/Tranding";
import Library from "./Pages/Library";
import Watchlater from "./Pages/Watchlater";
import History from "./Pages/History";
import YourVideo from "./Pages/YourVideo";
function HeaderlayOut() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="flex ">
          <Navbar />
          <div className="px-4 min-[800px]:px-0 min-[800px]:w-[92.5%] min-[800px]:ml-[7.6%]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/subscriptions" element={<Subscriptions />} />
              <Route path="/tranding" element={<Tranding />} />
              <Route path="/library" element={<Library />} />
              <Route path="/history" element={<History />} />
              <Route path="/yourvideo" element={<YourVideo />} />
              <Route path="/watchLater" element={<Watchlater />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default HeaderlayOut;
