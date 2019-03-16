import React, { Component } from "react";
import Particles from "react-particles-js";
import Clarifai from "clarifai";
import "./App.css";
import "tachyons";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import FaceDetection from "./components/FaceDetection/FaceDetection";

const particleOptions = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

const app = new Clarifai.App({
  apiKey: "4ea42f77b34d4627a91a1bcbe614da78"
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      boxes: []
    };
  }

  onInputChange = event => {
    this.setState({
      input: event.target.value
    });
  }

  getFaces = response => {
    
    const faces = response.outputs[0].data.regions;
    const image = document.getElementById("inputImage");
    const width = Number(image.width);
    const height = Number(image.height);

    const result = [];

    for(let i = 0; i < faces.length; i++){
      const regions = faces[i].region_info.bounding_box;
      result.push({
        id: i,
        left_col: regions.left_col * width,
        top_row: height * regions.top_row,
        right_col: width - (regions.right_col * width),
        bottom_row: height - (regions.bottom_row * height)
      })
    }
      return result;
  }

  setFaces = (boxes) => {
    this.setState({boxes: boxes})
  }

  onBtnSubmit = event => {
    this.setState({
      imageUrl: this.state.input
    });
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response => this.setFaces(this.getFaces(response)))
    .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particleOptions} />{" "}
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onBtnSubmit={this.onBtnSubmit}
        />{" "}
        <FaceDetection boxes={this.state.boxes} imageUrl={this.state.imageUrl} />{" "}
      </div>
    );
  }
}

export default App;
