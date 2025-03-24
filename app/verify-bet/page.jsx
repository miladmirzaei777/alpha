"use client";
import React, { useState } from "react";
import Dice from "./Games/Dice";
import Limbo from "./Games/Limbo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function page() {
  const [clinetseed, setclientseed] = useState("");
  const [serverseed, setserverseed] = useState("");
  const [nonce, setnonce] = useState("");
  const [result, setresult] = useState("");
  const [game, setgame] = useState("dice");
  function dobet() {
    console.log(game);
    if (game == "limbo") {
      const limo = new Limbo();
      setresult(
        limo.verify({
          serverSeed: serverseed,
          clientSeed: clinetseed,
          nonce: nonce,
        })
      );
    }
    if (game == "dice") {
      const dice = new Dice();
      setresult(
        dice.verify({
          serverSeed: serverseed,
          clientSeed: clinetseed,
          nonce: nonce,
        })
      );
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center flex-col gap-5">
      <select
        value={game}
        onChange={(e) => {
          setgame(e.target.value);
        }}
        className=""
      >
        <option className="text-black" value="dice" name="dice">
          Dice
        </option>
        <option className="text-black" value="limbo" name="limbo">
          Limbo
        </option>
      </select>
      <div className="flex flex-col gap-2 items-center justify-center">
        {" "}
        <label htmlFor="">client seed : </label>{" "}
        <Input 
          type="text"
          
          value={clinetseed}
          onChange={(e) => {
            setclientseed(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-col gap-2 items-center justify-center">
        {" "}
        <label htmlFor="">server seed : </label>{" "}
        <Input 
          type="text"
       
          value={serverseed}
          onChange={(e) => {
            setserverseed(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-col gap-2 items-center justify-center">
        {" "}
        <label htmlFor="">nonce : </label>{" "}
        <Input 
          type="number"
         
          value={nonce}
          onChange={(e) => {
            setnonce(e.target.value);
          }}
        />
      </div>
      <Button
        className="bg-amber-300 hover:bg-amber-700 cursor-pointer text-black"
        onClick={() => {
          dobet();
        }}
      >
        {" "}
        generate
      </Button>
      <div>result {result}</div>
    </div>
  );
}

export default page;
