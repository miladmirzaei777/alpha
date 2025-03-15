import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-2 overflow-hidden items-center justify-center min-h-screen">
      <div>

      <div className="logo text-3xl lg:text-5xl flex">
        <b>
          {" "}
          MR <span> BtC </span>Gambler
        </b>
      </div>
      </div>

      <h1>
        <span>I</span>M<span>POSSIBLE</span>
      </h1>
      <div className="flex gap-2">
      <a href="#" className="neon-button absolute bottom-0">
        Discord
      </a>
      <a href="#" className="neon-button absolute bottom-0">
        Youtube
      </a>
      
      </div>
      <a className="w-fit" href="https://x.com/mrbtcgambler" id="btn-twtr" target="_b">
        Follow me on X
      </a>
    </div>
  );
}
