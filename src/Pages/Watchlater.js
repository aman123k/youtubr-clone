import React from "react";
import { WatchlaterVideo } from "../data/Video";
function WatchLater() {
  return (
    <>
      <section
        className="min-[500px]:grid min-[500px]:px-0
        min-[500px]:grid-cols-2 min-[500px]:gap-x-3 md:grid-cols-3 
        xl:grid-cols-4 2xl:grid-cols-5"
      >
        {WatchlaterVideo.map((item, index) => {
          return (
            <div key={index} className="w-full cursor-pointer my-4">
              <img className="w-full" src={item.image} alt="" />
              <div className=" w-full flex mt-3 items-start gap-3">
                <img
                  className="w-10 rounded-full "
                  src={item.channelImage}
                  alt=""
                />
                <div>
                  <h3 className=" font-semibold">{item.title}</h3>
                  <p className="text-sm mt-2 text-[#6A6060]">{item.channel}</p>
                  <div className="text-sm text-[#6A6060]">
                    <span className="mr-3">{item.views}</span>
                    <span>{item.timestamp}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default WatchLater;
