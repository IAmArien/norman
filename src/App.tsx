import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Header, About, WhatIDo, Experience, Projects, Skills, ContactUs } from './components';

export const App =(): React.ReactElement => {
  return (
    <React.Fragment>
      <Header />
      <About />
      <WhatIDo />
      <Experience />
      <Projects />
      <Skills />
      <ContactUs />
    </React.Fragment>
  )
}