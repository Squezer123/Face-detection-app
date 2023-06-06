import React, { Component } from 'react';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import './App.css';
import ParticlesBg from 'particles-bg';

class App extends Component {

    constructor() {
        super();
        this.state = {
          input: '',
          imageUrl: '',
          boxes: [],
        };
      }

    calculateFaceLocations = (data) => {
        const clarifaiFaces = data.outputs[0].data.regions;
        const image = document.getElementById('inputimage');
        const width = Number(image.width);
        const height = Number(image.height);
    
        const boxes = clarifaiFaces.map((region) => {
          const clarifaiFace = region.region_info.bounding_box;
          return {
            topRow: clarifaiFace.top_row * height,
            rightCol: width - clarifaiFace.right_col * width,
            bottomRow: height - clarifaiFace.bottom_row * height,
            leftCol: clarifaiFace.left_col * width,
          };
        });
    
        return boxes;
      };


    displayFaceBox = (box) => {
        this.setState({box: box})
    }

    onInputChange = (event) => {
        this.setState({input: event.target.value });
    }

  
      onSubmit = () => {
        this.setState({ imageUrl: this.state.input });
        const IMAGE_URL = this.state.input;
    
        const raw = JSON.stringify({
          "user_app_id": {
            "user_id": "USERNAME",
            "app_id": "APP_NAME"
          },
          "inputs": [
            {
              "data": {
                "image": {
                  "url": IMAGE_URL
                }
              }
            }
          ]
        });
    
        const requestOptions = {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Authorization': 'Key ' + 'YOUR PAT HERE'
          },
          body: raw
        };
    
        fetch(`https://api.clarifai.com/v2/models/face-detection/versions/6dc7e46bc9124c5c8824be4822abe105/outputs`, requestOptions)
          .then(response => response.json())
          .then(response => {
            const boxes = this.calculateFaceLocations(response);
            this.setState({ boxes: boxes });
          })
          .catch(err => console.log(err));
      };
   
    render() {
        const {imageUrl,boxes} = this.state;
        return (
            <div className="App">

                
                <Logo />
                <Rank />
                <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit} />
                <FaceRecognition boxes={boxes} imageUrl={imageUrl} />
                <ParticlesBg type="circle" bg={true} />
            </div>
           
        );
    }
}

export default App;
