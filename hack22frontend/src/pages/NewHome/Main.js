import React, { useState } from 'react';
import Event1 from './EventSchedule/Event1';

export default function Main() {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <div>
            <header>
                <div class="container header__container">
                    <div class="header__left">
                        <div>
                            <h1>2022 Hack OHI/O Honda Challenge</h1>
                            <p>
                                We are aiming to provide user with the best travelling solution with the current resources we have, and provide out solution for improvement.
                            </p>
                            <a 
                            class="btn btn-primary btn-lg" 
                            onClick={() => {
                                setModalOpen(true);
                              }}
                            >
                                Demo</a>
                        </div>
                    </div>

                    <div class="header__right">
                        <div class="header__image">
                            <img src="https://user-images.githubusercontent.com/69735000/194733235-0fe58209-5768-44ce-b7c9-adbb376b70b6.png" />
                        </div>
                        <div class="header__right-bg"></div>
                        <ul class="header__socials">
                            {/* <li>
                                <a href="https://www.linkedin.com/in/wang-chengyan-1b118b218" target="_blank"
                                ><i class="uil uil-linkedin"></i
                                ></a>
                            </li>
                            <li>
                                <a href="https://github.com/Yannn001?tab=repositories" target="_blank"
                                ><i class="uil uil-github-alt"></i
                                ></a>
                            </li> */}
                        </ul>
                    </div>
                </div>
                {modalOpen && <Event1 setOpenModal={setModalOpen}/>}
            </header>
        </div>
    );
}

