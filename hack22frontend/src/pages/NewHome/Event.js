import React, { useState } from "react";
import Event1 from './EventSchedule/Event1';



export default function Event() {
  const [modalOpen, setModalOpen] = useState(false);
  const [dim, setDim] = useState("portfolio");
  
  const changeDim = () => {
    console.log("you just clicked");
    if(!modalOpen){ setDim("portfolio-change");}
    if(modalOpen){ setDim("portfolio");}
  };
  return (
    <div>
      <section id={dim}>
        <div class="container portfolio__container">
          <div class="portfolio__head">
            <h1>读书会活动</h1>
            <div class="portfolio__head-right">
              <p>
                点击链接可以查看读书会安排哦
              </p>
              <a href="https://github.com/Yannn001?tab=repositories">如何报名 <i class="uil uil-arrow-right"></i></a>
            </div>
          </div>
          <div class="portfolio__projects">
            <article class="portfolio__project">
              <span class="portfolio__project-image"
              ><img src="https://meet.eslite.com/Content/Images/Article/1200x628_20220209143427.jpg"
                /></span>
              <div class="portfolio__cta">
                <a href="" class="btn" target="_blank"
                >日程安排</a
                >
              </div>
            </article>
            <article class="portfolio__project">
              <span class="portfolio__project-image"
              ><img src="https://user-images.githubusercontent.com/69735000/191848907-d4a0b1a0-a32d-4595-93f8-d688cd4966c5.jpg"
                /></span>
              <div
                class="portfolio__cta"
              >
                <a class="btn" target="_blank" 
                  onClick={() => {
                    setModalOpen(true);
                    changeDim();
                  }}
                >日程安排 
                </a>
              </div>
              {modalOpen && <Event1 setOpenModal={setModalOpen} changeDim={changeDim}/>}
            </article>
            
          </div>
          
           
        </div>
      </section>
    </div>
  );
}

{/* TODO: 
1)modify event 2
2)change event 1 to 2
3)style event div
4)add calender
 */}
