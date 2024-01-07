import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Header, About, WhatIDo, Experience, Projects, Skills, ContactUs, Testimonials } from './components';

export const App =(): React.ReactElement => {
  return (
    <React.Fragment>
      <Header />
      <About />
      <WhatIDo />
      <Experience />
      <Projects />
      <Skills />
      <Testimonials />
      <ContactUs />
    </React.Fragment>
  )
}