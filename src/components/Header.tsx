import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white py-4 px-8 shadow-sm">
      <div className="container mx-auto">
        <img 
          src="/logo.png" 
          alt="ZeeIT Solutions Logo" 
          className="h-32" 
        />
      </div>
    </header>
  );
};

export default Header;
