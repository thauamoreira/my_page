import React from "react";
import opener from "../../assets/opener.png";
import styled from "styled-components";

export default function Opener() {
  return (
    <Main id="opener">
      <Container className="container">
        <Heading
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-delay="10"
          data-aos-duration="370"
        >
          <div className="Ola">
            <img src="https://firebasestorage.googleapis.com/v0/b/thauamoreira-7d658.appspot.com/o/THAU%C3%83%20MOREIRA%20(1).png?alt=media&token=757de1a0-6d83-4a59-8e9e-61b2c4b99708" />
            </div>
        </Heading>
      </Container>
    </Main>
  );
}

const Main = styled.main`
  background-image: url(${opener});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  color: white;
`;
const Container = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const Heading = styled.h1`
  font-size: clamp(8rem, 20vw, 14rem);
  text-transform: uppercase;
  font-weight: normal;
`;
