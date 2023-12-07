import React, { useState, useEffect, useMemo } from 'react';

import deliveryCar from './img/deliveryCar.jpg';
import travelCar from './img/travelCar.jpg';
import giftCar from './img/giftCar.jpg';
import css from './HomePage.module.css';

function HomePage() {
  const backgrounds = useMemo(
    () => [
      {
        imageUrl: deliveryCar,
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
    const interval = setInterval(() => {
      const nextIndex = (backgroundIndex + 1) % backgrounds.length;
      setBackgroundIndex(nextIndex);
      setCurrentBackground(backgrounds[nextIndex]);
    }, 2000);

    return () => clearInterval(interval); // Очистка интервала при размонтировании компонента
  }, [backgroundIndex, backgrounds]);

  return (
    <div
      className={css.homeContainer}
      style={{ backgroundImage: `url(${currentBackground.imageUrl})` }}
    >
      <div className={css.homeOverlay}></div>
      <h1 className={css.homeTitle}>{currentBackground.text}</h1>
    </div>
  );
}

export default HomePage;
