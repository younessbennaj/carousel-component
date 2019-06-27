import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';
import Slider from './components/Slider';

const data = {
  "type": "caroussel",
  "content": [
    {
      "title": "Room 1",
      "type": "caroussel",
      "subtitle": "Some quick example text to build on the card title and make up the bulk of the cards content",
      "imageUrl": "https://placeimg.com/286/180/arch",
      "button": "Go somewhere"
    },
    {
      "title": "Room 2",
      "type": "caroussel",
      "subtitle": "Some quick example text to build on the card title and make up the bulk of the cards content",
      "imageUrl": "https://placeimg.com/286/180/arch",
      "button": "Go somewhere"
    },
    {
      "title": "Room 3",
      "type": "caroussel",
      "subtitle": "Some quick example text to build on the card title and make up the bulk of the cards content",
      "imageUrl": "https://placeimg.com/286/180/arch",
      "button": "Go somewhere"
    }
  ]
};

class App extends Component {
  constructor(props) {
    // Ici, on appelle le constructeur de Component
    // qui est l'objet « parent » de App
    super(props);

    // Pour les classes dérivées, super() doit être appelé
    // avant d'utiliser 'this' sinon cela entraînera une 
    // exception ReferenceError.
    this.state = {
      data: {
        "type": "caroussel",
        "content": [
          {
            "title": "Room 1",
            "type": "caroussel",
            "subtitle": "Some quick example text to build on the card title and make up the bulk of the cards content",
            "imageUrl": "https://placeimg.com/286/180/arch",
            "button": "Go somewhere"
          },
          {
            "title": "Room 2",
            "type": "caroussel",
            "subtitle": "Some quick example text to build on the card title and make up the bulk of the cards content",
            "imageUrl": "https://placeimg.com/286/180/arch",
            "button": "Go somewhere"
          },
          {
            "title": "Room 3",
            "type": "caroussel",
            "subtitle": "Some quick example text to build on the card title and make up the bulk of the cards content",
            "imageUrl": "https://placeimg.com/286/180/arch",
            "button": "Go somewhere"
          }
        ]
      }
    }
  }
  render() {
    return (
      <div className="container">
        <h1>Card Slide</h1>
        <Slider data={this.state.data}></Slider>
      </div>
    );
  }
}

export default App;
