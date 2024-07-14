import React, { useState } from 'react';
import * as ml5 from 'ml5';
import './StartEstimate.css';
import LoadingScreen from './LoadingScreen';

const StartEstimate = () => {
  const [step, setStep] = useState(1);
  const [image, setImage] = useState(null);
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      setImage(event.target.result);
      handleNextStep();
    };
    reader.readAsDataURL(file);
  };

  const handleImageCapture = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      setImage(event.target.result);
      handleNextStep();
    };
    reader.readAsDataURL(file);
  };

  const analyzeImage = () => {
    setIsLoading(true);
    const classifier = ml5.imageClassifier('MobileNet', () => {
      classifier.classify(document.getElementById('uploadedImage'), (err, results) => {
        if (err) {
          console.error(err);
        } else {
          setResults(results);
        }
        setIsLoading(false);
        handleNextStep();
      });
    });
  };

  return (
    <div className="start-estimate">
      <h2>Start an Estimate</h2>
      {step === 1 && (
        <div className="step">
          <h3>Step 1: AI/ML can read an image or blueprint</h3>
          <button className="next-button" onClick={handleNextStep}>Next</button>
        </div>
      )}
      {step === 2 && (
        <div className="step">
          <h3>Step 2: Upload Your Image</h3>
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
        </div>
      )}
      {step === 3 && (
        <div className="step">
          <h3>Step 3: Analyzing and Reading</h3>
          {isLoading ? (
            <LoadingScreen />
          ) : (
            <>
              <div className="image-preview">
                <img id="uploadedImage" src={image} alt="Uploaded" />
              </div>
              <button className="analyze-button" onClick={analyzeImage}>Analyze Image</button>
            </>
          )}
        </div>
      )}
      {step === 4 && results && (
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
