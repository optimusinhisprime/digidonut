import React, { useEffect } from "react";
import "./SocialMediaIcons.css"; // Import CSS file for styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialMediaIcons = () => {
  useEffect(() => {
    const icons = document.querySelectorAll(".social-icon");

    icons.forEach((icon) => {
      const randomX = Math.random() * window.innerWidth;
      const randomY = Math.random() * window.innerHeight;
      const randomDuration = Math.random() * 6 + 4; // Random duration between 4 and 10 seconds
      const randomDelay = Math.random() * 6; // Random delay between 0 and 6 seconds

      icon.style.left = `${randomX}px`;
      icon.style.top = `${randomY}px`;
      icon.style.animationDuration = `${randomDuration}s`;
      icon.style.animationDelay = `${randomDelay}s`;
    });
  }, []);

  const handleIconClick = (platform) => {
    window.open(`https://www.${platform}.com`, "_blank"); // Open link in a new tab
  };

  return (
    <div className="floating-icons">
      <div className="social-icon" onClick={() => handleIconClick("facebook")}>
        <FontAwesomeIcon icon="fa-brands fa-facebook" />
      </div>
      <div className="social-icon" onClick={() => handleIconClick("twitter")}>
        <FontAwesomeIcon icon="fa-brands fa-x-twitter" />
      </div>
      {/* Add more social media icons as needed */}
    </div>
  );
};

export default SocialMediaIcons;
