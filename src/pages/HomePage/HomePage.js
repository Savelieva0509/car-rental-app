//import css from './Home.module.css';

import React, { useState, useEffect, useMemo } from 'react';
import deliveryCar from './img/deliveryCar.jpg'
import travelCar from './img/travelCar.jpg';
import giftCar from './img/giftCar.jpg';

function HomePage() {
  const backgrounds = useMemo(
    () => [
      {
        imageUrl: deliveryCar ,
        text: '24/7 delivery and returns',
      },
      {
        imageUrl: travelCar,
        text: 'car rental with departure abroad',
      },
      {
        imageUrl: giftCar,
        text: 'long-term lease with the right of redemption',
      },
    ],
    []
  );

  const [backgroundIndex, setBackgroundIndex] = useState(0); // индекс текущего фона
  const [currentBackground, setCurrentBackground] = useState(backgrounds[0]); // текущий фон и текст

  useEffect(() => {
    // Функция для циклического изменения фона каждые 5 секунд
    const interval = setInterval(() => {
      const nextIndex = (backgroundIndex + 1) % backgrounds.length;
      setBackgroundIndex(nextIndex);
      setCurrentBackground(backgrounds[nextIndex]);
    }, 2000); 

    return () => clearInterval(interval); // Очистка интервала при размонтировании компонента
  }, [backgroundIndex, backgrounds]);


 const containerStyles = {
   backgroundImage:`url(${currentBackground.imageUrl})`,
   backgroundSize: 'cover',
   minHeight: '100vh',
   padding: '20px',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   flexDirection: 'column',
   color: 'white',
   textShadow: '2px 2px 4px #000000',
 };


  return (
    <div
      style={containerStyles}
    >
      <h1>{currentBackground.text}</h1>
    </div>
  );
}

export default HomePage;
