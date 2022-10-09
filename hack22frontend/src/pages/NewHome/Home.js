import React from 'react';
import NavBar from './NavBar'
import Main from './Main'
import About from './About'
import Event from './Event'
import Footer from './Footer'
import CurrProblem from './CurrProblem'
import OurSolution from './OurSolution'
import FutureProblem from './FutureProblem'




export default function Home() {

  return (
    <React.Fragment>

      <NavBar />
      <Main />
      <About />
      <CurrProblem />
      <OurSolution />
      <FutureProblem />
      <Footer />
      

   </React.Fragment>

  );
}

