import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="sectionContainer">
        {/* Test Case 11: Top Albums */}
        <Section 
          title="Top Albums" 
          endpoint="https://qtify-backend.labs.crio.do/albums/top" 
        />
        {/* Test Case 11: New Albums */}
        <Section 
          title="New Albums" 
          endpoint="https://qtify-backend.labs.crio.do/albums/new" 
        />
      </div>
    </div>
  );
}

export default App;