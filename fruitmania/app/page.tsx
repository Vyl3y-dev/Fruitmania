import Image from "next/image";

export default function Home() {
  return (
    <div className="arcade">
      <div className="cabinetdisplayimg">
        <img src="/assets/LittleOniHoldingBasketFloating.gif" className="yoanydisplay" alt="yoany character"/>
      </div>
      <div className="gamewindow">
      <img src="/assets/FruitmaniaBG.png" className="gamebackground" alt="background of game"/>
      </div>
      <div className="cabinetdisplayimg">
        <img src="/assets/LittleVyleyHoldingPeaches.gif" className="vyleydisplay" alt="vyley character"/>
      </div>
    </div>
  );
}
