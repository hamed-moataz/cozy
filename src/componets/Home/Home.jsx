import React from "react";
import "./Home.css";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { TiSocialPinterestCircular } from "react-icons/ti";


import img_1 from "../../assets/images/1.png"
import img_2 from "../../assets/images/2.jpg"
import img_3 from "../../assets/images/3.jpg"
import img_4 from "../../assets/images/4.jpg"
import img_5 from "../../assets/images/5.jpg"
import img_6 from "../../assets/images/6.png"



const Home = () => {
  return (
    <section className="main-home">
      <div className="container">
        <div className="row">
          <div className="content">
            <div className="left-home">
              <div className="header">
                <IoIosArrowRoundBack style={{fontSize : "50px"}} />
                <span>
                  Chair / <h5> Meryl Lounge Chair </h5>
                </span>
              </div>
              <div className="card">
                <h2 className="title-card">Meryl Lounge Chair</h2>
                <div className="price">
                  <p>$149.99</p>
                <div>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <span>4.6 / 5.0 </span>
                </div>

                </div>
                <p className="disc">
                  The gently curved lines accentuated by sewn details are kind
                  to your body and pleasant to look at. Also, there’s a tilt and
                  height-adjusting mechanism that’s built to outlast years of
                  ups and downs.
                </p>
                <div className="btn">
                    <div className="counter">
                    <span> - </span>
                      <span> 1 </span>
                      <span> + </span>

                    </div>
                    <div><button>Add to Cart</button></div>
                </div>
                <span className="day">Free 3-5 day shipping  •  Tool-free assembly  •  30-day trial</span>
              </div>
              <div className="socal">
                <div className="left-socal">
                <FaRegHeart style={{fontSize : "22px"}} />

                    <span>Add to Wishlist</span>
                </div>
                <div className="right-socal">
                <FaFacebook style={{fontSize : "22px"}}  />
                <FaTwitter style={{fontSize : "22px"}}  />
                <TiSocialPinterestCircular style={{fontSize : "22px"}}  />
                <FaInstagram style={{fontSize : "22px"}}  />

                </div>
              </div>
            </div>
            <div className="right-home">
              <img
                src={img_1}
                alt=""
              />
              <div className="list-img">
              <img
                src={img_2}
                alt=""
              />
                 <img
                src={img_3}
                alt=""
              />
                 <img
                src={img_4}
                alt=""
              />
                 <img
                src={img_5}
                alt=""
              />
                 <img
                src={img_6}
                alt=""
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
