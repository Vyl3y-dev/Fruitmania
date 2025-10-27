import { ReactNode } from "react";


interface GameContainerProps {
  children: ReactNode;
}


export default function GameContainer({children}: GameContainerProps) {
    return (
<div className="screen">
    <div className="title">
        <img src="/assets/FruitmaniaTITLE.png" className="fruittitle" alt="Fruitmania Title"/>
    </div>
        <div className="arcade">
      <div className="cabinetdisplayimg">
        <img src="/assets/LittleOniHoldingBasketFloating.gif" className="yoanydisplay" alt="yoany character"/>
      </div>
      <div className="gamewindow">
        {children}
      </div>
      <div className="cabinetdisplayimg">
        <img src="/assets/LittleVyleyHoldingPeaches.gif" className="vyleydisplay" alt="vyley character"/>
      </div>
    </div>
    <div className="fullbasket">
      <img src="/assets/FullBasketPeaches.png" className="fullbasketdisplay" alt="Basket of peaches"/>
    </div>
    </div>
    );
}