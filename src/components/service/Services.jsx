import React from "react";
import "./services.css";

const Services = () => {
  return (
    <div className="card_container">
      <div className="services">
        <div className="card">
          <div className=" card_items">
            <div className="logo  ">
              <img src="images/img_music.svg" alt="music_one" className=" img1 " />
              <heading size="s" as="h6" className="text ">
                Join Development{" "}
              </heading>
            </div>
            <div className="horizline" />
            <heading as="h5" className="dev">
              <>
                Blockchain
                <br />
                Development{" "}
              </>
            </heading>
            <div className="imgcontainer">
              <img className="img2" src="images/img_design_prototyp.png" alt="" />
            </div>
            <div className="horizline"></div>
            <div className="btn2 ">
              <button className="btnn">
                Explore{" "}
                <div className="arrow1">
                  <img className="arr1" src="images/img_arrowright_gray_900_01.svg" alt="" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2nd  */}
      <div className="services">
        <div className="card2">
          <div className=" card_items ">
            <div className="logo ">
              <img src="images/img_music.svg" alt="music_one" className=" img1 h-[29px] w-[29px]" />
              <heading size="s" as="h6" className="text ">
                Join Development{" "}
              </heading>
            </div>
            <div className="horizline " />
            <heading as="h5" className="dev ">
              <>
                Blockchain
                <br />
                Development{" "}
              </>
            </heading>
            <div className="imgcontainer">
              <img className="img2" src="images/img_4494868_1.png" alt="" />
            </div>
            <div className="horizline"></div>
            <div className="btn2 ">
              <button className="btnn2">
                Explore{" "}
                <div className="arrow1">
                  <img className="arr1" src="images/img_arrowright_gray_900_01.svg" alt="" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* 3rd */}
      <div className="services">
        <div className="card3">
          <div className=" card_items flex flex-col items-center">
            <div className="logo ">
              <img src="images/img_music.svg" alt="music_one" className=" img1 h-[29px] w-[29px]" />
              <heading size="s" as="h6" className="text ">
                Join Development{" "}
              </heading>
            </div>
            <div className="horizline " />
            <heading as="h5" className="dev ">
              <>
                Security
                <br />
                AAS{" "}
              </>
            </heading>
            <div className="imgcontainer">
              <img className="img2" src="images/img_9646c1361705d0d16e.png" alt="" />
            </div>
            <div className="horizline"></div>
            <div className="btn2 ">
              <button className="btnn">
                Explore{" "}
                <div className="arrow1">
                  <img className="arr1" src="images/img_arrowright_gray_900_01.svg" alt="" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* 4rth */}
      <div className="services">
        <div className="card4">
          <div className=" card_items flex flex-col items-center">
            <div className="logo ">
              <img src="images/img_music.svg" alt="music_one" className=" img1 h-[29px] w-[29px]" />
              <heading size="s" as="h6" className="text ">
                Join Development{" "}
              </heading>
            </div>
            <div className="horizline " />
            <heading as="h5" className="dev ">
              <>
                Motion
                <br />
                Graphics{" "}
              </>
            </heading>
            <div className="imgcontainer">
              <img className="img2" src="images/img_2895987_1.png" alt="" />
            </div>
            <div className="horizline"></div>
            <div className="btn2 ">
              <button className="btnn">
                Explore{" "}
                <div className="arrow1">
                  <img className="arr1" src="images/img_arrowright_gray_900_01.svg" alt="" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
