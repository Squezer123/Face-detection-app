# Face Detection App

This is a web application that detects faces in images using the Clarifai API. Users can enter an image URL, and the application will identify and highlight the faces in the image.

## Features

- Detects faces in images by analyzing the provided URL using the Clarifai face-detection model.
- Highlights the detected faces with bounding boxes on the image.
- Provides a user-friendly interface for inputting image URLs and displaying the results.
- Uses React.js for building the user interface components.

## Technologies Used

- React.js
- HTML/CSS
- Clarifai API

## Getting Started

### Prerequisites

- Node.js (version 12 or above) and npm (Node Package Manager) must be installed on your system.

### Installation

1. Clone the repository:  git clone https://github.com/Squezer123/face-detection-app.git

2. Navigate to the project directory:  cd face-detection-app

3. Install the dependencies: npm install

### Usage

1. Obtain an API key from Clarifai by signing up for an account on their website.
2. Replace the `API_KEY` placeholder in the `src/App.js` file with your actual Clarifai API key.
3. Start the development server: npm start
4. Open the web application in your browser: http://localhost:3000


5. Enter an image URL in the input field and click the "Detect" button to see the face detection results.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
