import React, { useState } from "react";
import Feedback from "../Feedback/Feedback";
import Button from "../Button/Button"; // Your custom button component

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <nav>
      {/* Your logo and search bar code here */}
      
      <Button 
        text="Give Feedback" 
        onClick={() => setIsModalOpen(true)} 
      />

      <Feedback
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </nav>
  );
};
export default Navbar;