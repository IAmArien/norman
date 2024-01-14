import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Header,
  About,
  WhatIDo,
  Experience,
  Projects,
  Skills,
  ContactUs,
  Testimonials,
  Footer
} from './components';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import { CVDownload } from './components/cvdownload/CVDownload';
import { HireForm } from './components/hireform/HireForm';

export const MainLayout =(): React.ReactElement => {
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
      <Footer />
    </React.Fragment>
  )
}

export const App =(): React.ReactElement => {
  return (
    <React.Fragment>
      <HashRouter>
        <Routes>
          <Route path='/' index element={<MainLayout />} />
          <Route path='/norman' index element={<MainLayout />} />
          <Route path='/norman/cv' element={<CVDownload />} />
          <Route path='/norman/hire' element={<HireForm />} />
        </Routes>
      </HashRouter>
    </React.Fragment>
  )
}