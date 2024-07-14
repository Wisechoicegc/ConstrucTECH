import React, { useState } from 'react';
import * as ml5 from 'ml5';
import './StartEstimate.css';

const StartEstimate = () => {
  const [image, setImage] = useState(null);
  const [results, setResults] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      setImage(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleImageCapture = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      setImage(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  const analyzeImage = () => {
    const classifier = ml5.imageClassifier('MobileNet', () => {
      classifier.classify(document.getElementById('uploadedImage'), (err, results) => {
        if (err) {
          console.error(err);
        } else {
          setResults(results);
        }
      });
    });
  };

  return (
    <div className="start-estimate">
      <h2>Start an Estimate</h2>
      <div className="upload-container">
        <input
          type="file"
          accept="image/*"
          capture="camera"
          id="imageCapture"
          onChange={handleImageCapture}
          style={{ display: 'none' }}
        />
        <input
          type="file"
          accept="image/*"
          id="imageUpload"
          onChange={handleImageUpload}
          style={{ display: 'none' }}
        />
        <label htmlFor="imageCapture" className="upload-button">
          Capture Image
        </label>
        <label htmlFor="imageUpload" className="upload-button">
          Upload Image
        </label>
      </div>
      {image && (
        <div className="image-preview">
          <img id="uploadedImage" src={image} alt="Uploaded" />
          <button className="analyze-button" onClick={analyzeImage}>
            Analyze Image
          </button>
        </div>
      )}
      {results && (
        <div className="results">
          <h3>Analysis Results</h3>
          <ul>
            {results.map((result, index) => (
              <li key={index}>
                {result.label}: {(result.confidence * 100).toFixed(2)}%
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default StartEstimate;
