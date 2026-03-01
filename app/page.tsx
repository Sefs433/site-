"use client";

import { useEffect, useState } from "react";

function Countdown({ targetDate }: { targetDate: string }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: any = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-6 text-2xl font-bold mt-4">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="text-center">
          <div>{String(value).padStart(2, "0")}</div>
          <div className="text-sm opacity-70">{label}</div>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-blue-950 text-white p-10">
      <h1 className="text-4xl font-bold mb-6">1337 Team</h1>

      <h2 className="text-2xl font-semibold mt-10">🔥 Ближайший турнир</h2>
      <p className="mt-2 text-lg">7 марта</p>
      <Countdown targetDate="2026-03-07T18:00:00" />

      <h2 className="text-2xl font-semibold mt-16">🏆 Турниры</h2>
      <div className="mt-4 space-y-2">
        <p>• FACEIT Tournament — 7 марта</p>
        <p>• RIEM RIO — 7 марта</p>
      </div>

      <h2 className="text-2xl font-semibold mt-16">👑 Основной состав</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">

        <Player name="amullet" level="8" flag="🇺🇦" role="Rifler" />
        <Player name="xinxed" level="9" flag="🇷🇺" role="Rifler (Captain)" />
        <Player name="kironixx" level="8" flag="🇷🇺" role="Rifler" />
        <Player name="s1per" level="8" flag="🇷🇺" role="Rifler" />
        <Player name="for4ward" level="8" flag="🇷🇺" role="AWP" />

      </div>

      <h2 className="text-2xl font-semibold mt-16">🪑 Bench</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <Player name="hulsey" level="7" flag="🇷🇺" role="Rifler" />
        <Player name="winda" level="8" flag="🇷🇺" role="Rifler" />
      </div>
    </main>
  );
}

function Player({
  name,
  level,
  flag,
  role,
}: {
  name: string;
  level: string;
  flag: string;
  role: string;
}) {
  return (
    <div className="bg-blue-900/40 border border-blue-500/20 p-4 rounded-xl hover:bg-blue-800/40 transition">
      <div className="text-xl font-bold">
        {name} {flag}
      </div>
      <div className="opacity-80 mt-1">
        FACEIT lvl {level} • {role}
      </div>
    </div>
  );
}