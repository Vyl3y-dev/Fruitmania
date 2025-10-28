"use client";

import { useState } from "react";
import GameContainer from "./components/GameContainer";
import MenuScreen from "./components/MenuScreen";

export default function Home() {
  const [screen, setScreen] = useState("menu");

  return (
    <GameContainer>
       {screen === "menu" && <MenuScreen onStart={() => setScreen("game")} />}
    </GameContainer>
  );
}
