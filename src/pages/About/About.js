import React from "react";
// import { useHistory } from "react-router-dom";
import "./About.css";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";

export default function AboutSection({ showProfile, setShowProfile }) {
  // const history = useHistory();

  // const checkLogin = () => {
  // if (!showProfile) {
  // alert("You are not logged in");
  // history.push("/cake");
  // }
  // };
  return (
    <>
      <hr className="hr1"></hr>
      <div className="content">
        <div className="part1">
          <h1 className="whwear">Who We Are</h1>
          <p className="whweartext">
            We are not just a bakery, we are not bakers. In fact, we are just
            like you, a bunch of food lovers fascinated with sweet indulgence,
            who dreamt of creating an appetizing fairy land of divine delicacies
            that relishes the utmost desires.
          </p>
        </div>
        <div className="part2">
          <h1 className="OS">Our Story</h1>
          <p className="OStext">
            Our journey began with one humble shop in Fort, Mumbai and grew to
            over one thousand locations throughout India under the inspiring
            vision of our founder, Hussein Khorakiwala in the early 1956. Since
            then, our family has combined their years of experience with the
            vision of a community of collaborative shop owners, suppliers and
            other partners working together to create a brand name in the market
            to grow their business to what it is today.
          </p>
          <p className="OStext2">
            In order to achieve this, the family offers franchises to budding
            entrepreneurs & distributors partnering with them to ensure success
            and excellence.
          </p>
          <button
            className="button"
            onClick={() => {
              setShowProfile((prev) => !prev);
              // checkLogin();
            }}
          >
            {showProfile ? "Login" : "Profile"}
          </button>
          <div className="part3-about">
            <img src={img1} className="img1-about" alt="img1" />
            <img src={img2} className="img2-about" alt="img2" />
            <img src={img3} className="img3-about" alt="img3" />
          </div>
          <p className="OStext3">
            Creating exceptional cakes is our way of life, and our customers and
            partners are the focus of everything that we do. Our unwavering
            commitment to both our customers, franchise partners & distributors
            is the key to our success in the future. We are dedicated to
            creating a dynamic environment, conducting ourselves with the
            highest integrity for every component in our value chain: our
            customers, suppliers, team members, and franchise partners. By
            acting in the best interest of everyone along our value chain, we
            are able to ensure our company's sweet success..
          </p>
        </div>
      </div>
      <hr className="hr1"></hr>
    </>
  );
}
