import React from "react";
import "./Importance.css";

import { Container } from "react-bootstrap";

export default function Importance() {
  return (
    <section id="importance">
      <Container className="container">
        <h1 className="title">Posição atual no mercado de trabalho</h1>
        <br></br>
        <br></br>
        <div
          className="first-left text-box"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="370"
          data-aos-delay="10"
        >
          <h2 className="first-left-title">
            NEXTAR Tecnologia de Software Ltda
          </h2>
          <p className="first-left-info">
            A NEXTAR Tecnologia de Software Ltda é uma empresa brasileira
            especializada em soluções de software para gestão de negócios,
            incluindo PDV, controle de estoque, gestão financeira e outras
            funcionalidades para empresas de diferentes tamanhos e segmentos. A
            empresa foi fundada em 2001 e tem sede na cidade de Florianópolis,
            Santa Catarina, Brasil. A NEXTAR oferece serviços de suporte
            técnico, treinamento e consultoria para seus clientes, além de uma
            plataforma de e-commerce integrada. A empresa tem como missão ajudar
            os negócios a crescerem e prosperarem, oferecendo soluções
            tecnológicas eficientes e acessíveis.
          </p>
          <div className="text-box-content">
            <p>
            <p>
              <strong>Cargo:</strong>
            </p>
              <li>
                <strong>Analista de Suporte Técnico Avançado - JrII</strong>
              </li>
            </p>
            <p>
              <strong>Função:</strong>
            </p>
            <ul>
              <li>
                Fornecer suporte técnico avançado de alta qualidade para nossos
                clientes, garantindo que suas necessidades sejam atendidas e
                suas expectativas sejam superadas.
              </li>
              <li>
                Resolver problemas técnicos relacionados ao uso do software,
                trabalhando em estreita colaboração com nossas equipes de
                desenvolvimento e qualidade.
              </li>
              <li>
                Manusear banco de dados SQL, realizando consultas e execução de
                scripts de correção de erros.
              </li>
              <li>
                Solucionar problemas no sistema operacional Windows utilizando
                prompt de comando e PowerShell.
              </li>
              <li>
                Identificar e reportar bugs e problemas de desempenho do
                software para as equipes de desenvolvimento, garantindo que eles
                sejam abordados de maneira oportuna e eficaz.
              </li>
              <li>
                Manter registros precisos de todas as interações com os clientes
                e atualizações de problemas.
              </li>
            </ul>
          </div>
          <br></br>
          <a href="https://www.nextar.com.br" target="_blank">
            <button
              className="visitSiteBtn"
              data-aos="slide-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-delay="20"
              data-aos-duration="1000"
              easing="ease-in"
              target="_blank"
            >
              <strong>Visite o site</strong> - aquela espiadinha
            </button>
          </a>
        </div>
      </Container>
    </section>
  );
}
