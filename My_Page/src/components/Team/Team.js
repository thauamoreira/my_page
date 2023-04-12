import React from "react";
import { Container } from "react-bootstrap";
import "./Team.css";
import member1 from "../../assets/member1.png";
import member2 from "../../assets/member2.png";
import member3 from "../../assets/member3.png";
import member4 from "../../assets/member4.png";

export default function Team() {
  return (
    <article id="team">
      <Container className="container">
        <div className="content">
          <h1 className="title">Minhas Redes</h1>
          <div className="teamGrid">
            <div xs={4} className="member">
              <a
                href="https://www.linkedin.com/in/thau%C3%A3-moreira/"
                target="_blank"
              >
                <img
                  src={member1}
                  alt="Linkedin"
                  data-aos="fade-right"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-delay="500"
                  data-aos-duration="1000"
                />
              </a>
              <h3 className="memberInfo">LinkedIn</h3>
            </div>

            <div className="member">
              <a
                href="https://github.com/thauamoreira"
                target="_blank"
              >
                <img
                  src={member2}
                  alt="Manesh"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-delay="500"
                  data-aos-duration="1000"
                />
              </a>
              <h3 className="memberInfo">GitHub</h3>
            </div>

            <div className="member">
              <a
                href="https://www.instagram.com/thauamoreira/"
                target="_blank"
              >
                <img
                  src={member3}
                  alt="Nick"
                  data-aos="fade-left"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-delay="500"
                  data-aos-duration="1000"
                />
              </a>
              <h3 className="memberInfo">Instagram</h3>
            </div>
            <div className="member">
              <a
                href="https://wa.link/iz05ir"
                target="_blank"
              >
                <img
                  src={member4}
                  alt="Nick"
                  data-aos="fade-left"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-delay="500"
                  data-aos-duration="1000"
                />
              </a>
              <h3 className="memberInfo">WhatsApp</h3>
            </div>
          </div>
        </div>
      </Container>
    </article>
  );
}
