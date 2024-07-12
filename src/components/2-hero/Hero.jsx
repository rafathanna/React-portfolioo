import Lottie from "lottie-react";
import "./hero.css";
import headerAnimation from '../../../public/animation/header.json';
const Hero = () => {
  return (
    <section className="hero flex">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <img src="./rafat.png" className="avatar" alt="" />
          <div className="icon-verified"></div>
        </div>

        <h1 className="title">
        Front-end developer
        </h1>
        <p className="sub-title">
          I’m Rafat Hanna,a Front End Developer based in Egypt, that loves to code and build products with a delightful user experience
        </p>

        <div className="all-icons flex">
          <div className="icon icon-twitter"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin"></div>
        </div>
      </div>

      <div className="right-section animation">
      <Lottie animationData={headerAnimation} style={{width:'300px'}} />

      </div>
    </section>
  );
};

export default Hero;
