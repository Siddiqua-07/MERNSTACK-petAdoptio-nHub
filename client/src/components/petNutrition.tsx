import React from 'react';

export const Nutrition = () => {
  return (
    <div className="nutrition-container">
      {/* Main Header Image */}
      <div className="header-image">
        {/* Placeholder for the main image */}
        <img
          src="../../../uploads/petNutrition.jpg"
          alt="Pet Nutrition Header"
          className="header-img"
        />
      </div>

      <div className="content-wrapper">
        <h1>Everything About Pet Nutrition</h1>
        <p>Proper nutrition is vital to your pet's health and longevity. Here are key guidelines to ensure your pet is getting the best diet possible.</p>

        {/* Section 1 */}
        <div className="tip-section first-tip-section">
          <h2>1. Balanced Diet for Pets</h2>

          <div className="tip-content">
            {/* Left: Text content */}
            <div className="tip-text">
              <p>
                Like humans, pets need a well-balanced diet to stay healthy. Make sure to provide a mix of protein, carbohydrates, fats, vitamins, and minerals appropriate to your pet’s species and age.
              </p>
            </div>
            {/* Right: Image placeholder */}
            <div className="tip-image-wrapper">
              <img
                src="path-to-your-image.jpg"
                alt="Balanced Diet"
                className="tip-image"
              />
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="tip-section second-tip-section">
          <h2>2. Portion Control and Feeding Schedule</h2>

          <div className="tip-content">
            {/* Left: Image placeholder */}
            <div className="tip-image-wrapper">
              <img
                src="path-to-your-image.jpg"
                alt="Portion Control"
                className="tip-image"
              />
            </div>

            {/* Right: Text content */}
            <div className="tip-text">
              <p>
                Overfeeding can lead to obesity, which can cause health problems. Establish a feeding schedule based on your pet’s age, breed, and activity level, and ensure portion sizes are controlled.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="tip-section first-tip-section">
          <h2>3. Fresh Water is Essential</h2>

          <div className="tip-content">
            {/* Left: Text content */}
            <div className="tip-text">
              <p>
                Always provide fresh water for your pet. Dehydration can be dangerous and affect their overall health. Keep water bowls clean and refill them regularly.
              </p>
            </div>
            {/* Right: Image placeholder */}
            <div className="tip-image-wrapper">
              <img
                src="path-to-your-image.jpg"
                alt="Fresh Water"
                className="tip-image"
              />
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div className="tip-section second-tip-section">
          <h2>4. Avoid Toxic Foods</h2>

          <div className="tip-content">
            {/* Left: Image placeholder */}
            <div className="tip-image-wrapper">
              <img
                src="path-to-your-image.jpg"
                alt="Toxic Foods"
                className="tip-image"
              />
            </div>

            {/* Right: Text content */}
            <div className="tip-text">
              <p>
                Some human foods are toxic to pets, such as chocolate, onions, garlic, and certain artificial sweeteners like xylitol. Always double-check if a food is safe before sharing it with your pet.
              </p>
            </div>
          </div>
        </div>

        {/* Add more sections as needed */}
      </div>
    </div>
  );
};
