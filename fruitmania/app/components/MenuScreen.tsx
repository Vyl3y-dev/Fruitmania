
export default function MenuScreen({ onStart }) {
  return (
    <div className="menuscreen">
      <div className="menubg">
        <img src="/assets/MenuBackground.png" className="fruitmenubg" alt="Fruitmania Menu Background"/>
      </div>
      <div className="rainfruit">
        <img src="/assets/Peach.png" className="fruit" alt="Fruit to rain down"/>
        <img src="/assets/Peach.png" className="fruit" alt="Fruit to rain down"/>
        <img src="/assets/Peach.png" className="fruit" alt="Fruit to rain down"/>
        <img src="/assets/Peach.png" className="fruit" alt="Fruit to rain down"/>
        <img src="/assets/Peach.png" className="fruit" alt="Fruit to rain down"/>
        <img src="/assets/Peach.png" className="fruit" alt="Fruit to rain down"/>
        <img src="/assets/Peach.png" className="fruit" alt="Fruit to rain down"/>
      </div>
      <div className="menutitle">
        <img src="/assets/FruitmaniaTITLE.png" className="fruitmenutitle" alt="Fruitmania Menu Title"/>
      </div>
      <div className="menuoptions">
        <button className="start" onClick={onStart}>START</button>
      </div>
      <div className="fullbasket">
      <img src="/assets/FullBasketPeaches.png" className="fullbasketdisplay" alt="Basket of peaches"/>
      <img src="/assets/FullBasketPeaches.png" className="fullbasketdisplay" alt="Basket of peaches"/>
      <img src="/assets/FullBasketPeaches.png" className="fullbasketdisplay" alt="Basket of peaches"/>
      <img src="/assets/FullBasketPeaches.png" className="fullbasketdisplay" alt="Basket of peaches"/>
      <img src="/assets/FullBasketPeaches.png" className="fullbasketdisplay" alt="Basket of peaches"/>
    </div>
    </div>
  );
}