//import /*React,*/ {useState} from 'react';
//import {faBookOpenReader, faHandsHolding, faUsers} from "@fortawesome/free-solid-svg-icons";
import './Content.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBook, faCompass, /*faCopyright,*/ faHandshake} from "@fortawesome/free-solid-svg-icons";

const Content = (/*{className}*/) => {
  

  return (
    <>
    <section className="negative">
      <div className="container">
        <ul className="list">
          <li className="enter-from-left hidden">
            <FontAwesomeIcon icon={faBook} size="lg"/>
            Learn
          </li>
          <li className="enter-from-left hidden">
              <FontAwesomeIcon icon={faHandshake} size="lg"/>
              Create
            </li>
            <li className="enter-from-left hidden">
              <FontAwesomeIcon icon={faCompass} size="lg"/>
              Explore
            </li>
        </ul>
      </div>
    </section>
    </>
  );
};

export default Content;