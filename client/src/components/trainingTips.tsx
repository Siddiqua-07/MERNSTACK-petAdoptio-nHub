import React from 'react';
//import './TrainingTips.css'; // Importing the CSS file for styling

export const TrainingTips = () => {
  return (
    <div className="training-tips-container">
      {/* Main Header Image */}
      <div className="header-image">
        {/* Placeholder for the main image */}
        <img
          src="../../../uploads/basic-puppy-training.jpg"
          alt="Training Tips Header"
          className="header-img"
        />
      </div>

      <div className="content-wrapper">
      
      <div className="tip-section first-tip-section">
        <h2>1. Start Early, Stay Consistent</h2>
        
        <div className="tip-content">
          {/* Left: Text content */}
          <div className="tip-text">
            <p>
              Begin training as soon as you bring your pet home. Consistency is key! Stick to a regular routine and use the same commands and signals for each behavior.
            </p>
          </div>
          
          {/* Right: Image placeholder */}
          <div className="tip-image-wrapper">
            <img
              src="../../../uploads/baby-kitten.jpg"
              alt="Start Early, Stay Consistent"
              className="tip-image"
            />
          </div>
        </div>
      </div>


      <div className="tip-section second-tip-section">
      <h2>2. Use Positive Reinforcement</h2>

        <div className="tip-content">
          {/* Left: Image placeholder */}
          <div className="tip-image-wrapper">
            <img
              src="../../../uploads/positive-reinforcement.png"
              alt="Positive Reinforcement"
              className="tip-image"
            />
          </div>

          {/* Right: Text content */}
          <div className="tip-text">
            <p>
              Reward good behavior with treats, praise, or toys. Positive reinforcement encourages your pet to repeat desired behaviors. Avoid punishment, as it can lead to fear and confusion.
            </p>
          </div>
        </div>
      </div>


        {/* Section 3 */}
        <div className="tip-section first-tip-section">
          <h2>3. Keep Training Sessions Short</h2>

          <div className="tip-content">
          {/* Left: Text content */}
          <div className="tip-text">
          <p>Limit training sessions to 5-10 minutes at a time to keep your pet engaged and prevent frustration.</p>
          
          </div>
          
          {/* Right: Image placeholder */}
          <div className="tip-image-wrapper">
            <img
              src="../../../uploads/shortTraining.jpg"
              alt="Start Early, Stay Consistent"
              className="tip-image"
            />
          </div>
          </div>
          </div>
          

        {/* Section 4 */}
        <div className="tip-section">

          <h2>4. Be Patient and Persistent</h2>
          
        </div>

        <div className="tip-content">
          {/* Left: Image placeholder */}
          <div className="tip-image-wrapper">
          <img
            src="../../../uploads/workingChick.jpg"
            alt="Be Patient and Persistent"
            className="tip-image"
          />
          </div>

          {/* Right: Text content */}
          <div className="tip-text">
            <p>
              Reward good behavior with treats, praise, or toys. Positive reinforcement encourages your pet to repeat desired behaviors. Avoid punishment, as it can lead to fear and confusion.
            </p>
          </div>
        </div>


        {/* Add more sections as needed */}
      </div>
    </div>
  );
};
