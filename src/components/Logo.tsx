import React from 'react';

// Props interface for Logo component
interface LogoProps {
  imageUrl?: string; // Optional URL for the logo image
}

const Logo: React.FC<LogoProps> = ({ imageUrl = '/logo.png' }) => {
  return (
    // Logo container with flexbox layout
    <div className="flex items-center">
      {/* Image container with doubled height and auto width */}
      <div className="h-20 w-auto"> {/* Changed from h-10 to h-20 */}
        <img 
          src={imageUrl} 
          alt="Versed Accounting LLC" 
          className="h-full w-auto object-contain" // Maintain aspect ratio
        />
      </div>
    </div>
  );
};

export default Logo;