import React from 'react';
import './App.scss';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import MyJobs from "./my-jobs/MyJobs";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";

function App() {
  return (
      <div className="App">
        <Header />
        <Main />
        <Skills />
        <MyJobs />
        <Contacts />
        <Footer />
      </div>
  );
}

export default App;
