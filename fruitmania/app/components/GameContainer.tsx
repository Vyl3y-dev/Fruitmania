"use client";

export default function GameContainer() {
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
      </div>
      <div className="cabinetdisplayimg">
        <img src="/assets/LittleVyleyHoldingPeaches.gif" className="vyleydisplay" alt="vyley character"/>
      </div>
    </div>
    </div>
    );
}