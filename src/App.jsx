import { bgImages } from "./assets/bgImages";
import fortuna from "./assets/data.json";
import { useState } from "react";
import { useEffect } from "react";
import fondofortuna from "./assets/fortuna-removebg-preview.png";
import Card from "./componentes/Card/Card";

import "./App.css";
function App() {
  const [indexVisibleFramework, setFrameworkVisible] = useState(0);

  useEffect(() => {
    const randomTexto = Math.floor(Math.random() * fortuna.length);
    setFrameworkVisible(randomTexto);
  }, []);

  const changeFramework = () => {
    const newFrameworkVisible = indexVisibleFramework + 1;
    if (newFrameworkVisible > fortuna.length - 1) setFrameworkVisible(0);
    else setFrameworkVisible(newFrameworkVisible);
  };

  const randomIndex = Math.floor(Math.random() * bgImages.length);
  const randomBg = bgImages[randomIndex];

  const style = {
    backgroundImage: `url(${randomBg})`,
  };
  return (
    <section className="bg-img" style={style}>
      <div className="kat">
        <div className="imagen">
          <img src={fondofortuna} alt="" />
        </div>
        <Card
          fortuna={fortuna[indexVisibleFramework]}
          changeFramework={changeFramework}
        />
      </div>
    </section>
  );
}

export default App;
