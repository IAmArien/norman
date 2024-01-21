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
  Footer,
  getSerializedPath
} from './components';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { CVDownload } from './components/cvdownload/CVDownload';
import { HireForm } from './components/hireform/HireForm';
import { LoadingModal } from './components/modal/LoadingModal';
import { Provider } from 'react-redux';
import { store } from './redux';

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
      <Provider store={store}>
        <LoadingModal>
          <HashRouter>
            <Routes>
              <Route path='/' index element={<MainLayout />} />
              <Route path='/norman' index element={<MainLayout />} />
              <Route path={getSerializedPath('cv')} element={<CVDownload />} />
              <Route path={getSerializedPath('hire')} element={<HireForm />} />
            </Routes>
          </HashRouter>
        </LoadingModal>
      </Provider>
    </React.Fragment>
  )
}