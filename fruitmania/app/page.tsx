"use client";

import { useState } from "react";
import GameContainer from "./components/GameContainer";
import GameplayScreen from "./components/Gameplay";
import MenuScreen from "./components/MenuScreen";

export default function Home() {
  const [screen, setScreen] = useState("menu");

  return (
    <GameContainer>
       <GameplayScreen></GameplayScreen>
    </GameContainer>
  );
}
