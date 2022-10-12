import React from 'react';
import './App.css';
import Lottie from 'react-lottie-player';
import animationData from './animation/animated.json';

export default function App() {
  return (
    <div>
      <Lottie 
	     loop
       animationData={animationData}
       play
       style={{ width: 150, height: 150 }}
      />
    </div>
  );
}