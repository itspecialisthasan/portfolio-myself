import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import "../home/Home.scss";

function Home() {
  const navigate = useNavigate();

  const handleToNavigateToContact = () => {
    navigate("/contact");
  };

  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>Hello,</h1>
        <h4>I' m a Full Stack Developer</h4>
      </div>
      <Animate
      play
      delay={1}
      duration={1.5}
      start={{
        transform : 'translateY(550px)'
      }}
      end={{
        transform : 'translateX(0px)'
      }}
      >
        <div className="home__contact-me">
          <button onClick={handleToNavigateToContact}>Hire Me</button>
        </div>
      </Animate>
    </section>
  );
}

export default Home;
