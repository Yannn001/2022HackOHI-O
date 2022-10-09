import React from 'react';

export default function About() {
  
  return (
    <div>
    <section id="aboutMe">
      <div class="container services__container">
        <div class="services__left">
          <h1> TRAVEL </h1>
          <br/>
          <h1> IS </h1>
          <br/>
          <h1> FOR </h1>
          <br/>
          <h1> EVERYONE </h1>
        </div>

        <div class="services__right">
          <h2>
            <b> Our goal is to provide a solution of travel with the current resources, including bus, car, walk, scooters... </b> <br/>
          </h2>
          <div class="services__cards">
            <div class="services__card">
              <span class="services__card-icon"
                ><i class="uil uil-layers-alt"></i
              ></span>
              <h5>Current problems</h5>
              <a href=""> Discover more<i class="uil uil-arrow-right"></i></a>
            </div>

            <div class="services__card">
              <span class="services__card-icon"
                ><i class="uil uil-browser"></i
              ></span>
              <h5>Our solution</h5>
              <a href="">Discover more <i class="uil uil-arrow-right"></i></a>
            </div>

            <div class="services__card">
              <span class="services__card-icon"
                ><i class="uil uil-lightbulb"></i
              ></span>
              <h5>Future solution</h5>
              <a href="">Discover more <i class="uil uil-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>

    </div>
  );
}

