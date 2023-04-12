import React from "react";
import "./GetStarted.css";
import getStarted from "../../assets/getStarted.png";
import { Container } from "react-bootstrap";



export default function GetStarted() {
  return (
    <section id="getStarted">  
        <Container className="container">
        <div className="allText">
          <h1
            className="title"
            data-aos="slide-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-delay="10"
            data-aos-duration="370"
          >
            Prazer, sou o Thauã
          </h1>
          <img
            src={getStarted}
            alt="none"
            className="startedImg"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-delay="10"
            data-aos-duration="370"
            easing="ease-in-cubic"
          />    
          <p
            className="info"
            data-aos="slide-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-delay="10"
            data-aos-duration="370"
          >
            Com mais de 10 anos de experiência na área de T.I, sou uma pessoa organizada, 
            proativa e apaixonada por resolver problemas. Possuo habilidades especializadas
            em SQL Server e análise de sistemas, além de um histórico comprovado de entrega de
            soluções criativas e eficazes para as necessidades dos clientes. Meu foco é sempre
            na melhoria contínua e no desenvolvimento de habilidades que me permitam enfrentar
            desafios com confiança. Tenho um forte espírito de equipe e acredito que, juntos,
            podemos alcançar grandes objetivos.
          </p>
            <button
            className="getStartedBtn"
            data-aos="slide-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-delay="20"
            data-aos-duration="1000"
            easing="ease-in"
            href= "importance"
          >
            <strong>Saiba mais</strong> - chega aí!
          </button>
          </div>
          <div className="finish"></div>
      </Container>
    </section>
  );
}
