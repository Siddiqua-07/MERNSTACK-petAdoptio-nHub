import React from 'react';

export const Health = () => {
  return (
    <div className="health-container">
    {/* Main Header Image */}
    <div className="header-image">
      {/* Placeholder for the main image */}
      <img
        src="../../../uploads/healthHeader.jpg"
        alt="Pet Health Header"
        className="header-img"
      />
    </div>

    <div className="content-wrapper">
   
      <p>Keeping your pet healthy is crucial for a happy and long life. Here are key tips to ensure your pet stays in top shape.</p>
      <h1></h1>
      {/* Section 1 */}
      <div className="tip-section first-tip-section">
        <h2>1. Regular Veterinary Visits</h2>

        <div className="tip-content">
          {/* Left: Text content */}
          <div className="tip-text">
            <p>
              Make sure to take your pet for regular checkups. Preventive care is essential to catch any health issues early and ensure vaccinations and treatments are up to date.
            </p>
          </div>
          {/* Right: Image placeholder */}
          <div className="tip-image-wrapper">
            <img
              src="../../../uploads/vetVisit.jpg"
              alt="Veterinary Visits"
              className="tip-image"
            />
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="tip-section second-tip-section">
        <h2>2. Proper Dental Care</h2>

        <div className="tip-content">
          {/* Left: Image placeholder */}
          <div className="tip-image-wrapper">
            <img
              src="../../../uploads/dental.jpg"
              alt="Dental Care"
              className="tip-image"
            />
          </div>

          {/* Right: Text content */}
          <div className="tip-text">
            <p>
              Dental hygiene is just as important for pets as it is for humans. Regularly brushing your pet’s teeth or providing dental treats helps avoid plaque buildup and gum disease.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="tip-section first-tip-section">
        <h2>3. Exercise and Mental Stimulation</h2>

        <div className="tip-content">
          {/* Left: Text content */}
          <div className="tip-text">
            <p>
              Regular exercise keeps your pet physically fit, while mental stimulation through play and training helps keep them sharp and happy. Ensure you’re providing both physical and mental activities.
            </p>
          </div>
          {/* Right: Image placeholder */}
          <div className="tip-image-wrapper">
            <img
              src="../../../uploads/mental.jpg"
              alt="Exercise and Mental Stimulation"
              className="tip-image"
            />
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div className="tip-section second-tip-section">
        <h2>4. Proper Grooming</h2>

        <div className="tip-content">
          {/* Left: Image placeholder */}
          <div className="tip-image-wrapper">
            <img
              src="../../../uploads/dog-grooming.webp"
              alt="Proper Grooming"
              className="tip-image"
            />
          </div>

          {/* Right: Text content */}
          <div className="tip-text">
            <p>
              Grooming is vital for your pet’s overall health. Regular brushing, bathing, nail trimming, and ear cleaning can prevent skin issues, infections, and other health concerns.
            </p>
          </div>
        </div>
      </div>

      {/* Section 5 */}
      <div className="tip-section first-tip-section">
        <h2>5. Parasite Prevention</h2>

        <div className="tip-content">
          {/* Left: Text content */}
          <div className="tip-text">
            <p>
              Fleas, ticks, and worms can cause major health problems in pets. Use recommended parasite preventives and check your pet regularly for signs of infestation.
            </p>
          </div>
          {/* Right: Image placeholder */}
          <div className="tip-image-wrapper">
            <img
              src="../../../uploads/parasite.webp"
              alt="Parasite Prevention"
              className="tip-image"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

