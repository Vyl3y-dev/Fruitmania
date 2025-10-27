"use client";

import { useState } from "react";
import GameContainer from "./components/GameContainer";
import MenuScreen from "./components/MenuScreen";

export default function Home() {
  

  return (
    <GameContainer>
      <MenuScreen></MenuScreen>
    </GameContainer>
  );
}
