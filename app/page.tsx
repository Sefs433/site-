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
    <div className="flex gap-6 text-3xl font-bold mt-6">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="text-center">
          <div className="text-cyan-400">
            {String(value).padStart(2, "0")}
          </div>
          <div className="text-xs uppercase opacity-70">{label}</div>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-10 py-14">

      {/* HERO */}
      <section className="mb-20">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
          1337 TEAM
        </h1>
        <p className="mt-4 text-gray-400 text-lg">
          Competitive CS2 Roster • FACEIT Core
        </p>

        <div className="flex gap-4 mt-6">
          <a href="https://t.me/yourtelegram" target="_blank"
            className="bg-cyan-500 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 transition">
            Telegram
          </a>

          <a href="https://twitch.tv/yourtwitch" target="_blank"
            className="bg-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-500 transition">
            Twitch
          </a>
        </div>
      </section>

      {/* NEXT TOURNAMENT */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold">🔥 Ближайший турнир</h2>
        <p className="mt-2 text-lg text-gray-400">7 марта</p>
        <Countdown targetDate="2026-03-07T18:00:00" />
      </section>

      {/* TOURNAMENTS */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold">🏆 Турниры</h2>
        <div className="mt-6 space-y-3 text-lg">
          <p>• FACEIT Tournament — 7 марта</p>
          <p>• RIEM RIO — 7 марта</p>
          <p>• 1WIN CUP — 7 марта</p>
        </div>
      </section>

      {/* ROSTER */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-6">👑 Основной состав</h2>

        <div className="grid md:grid-cols-2 gap-6">

          <Player name="amullet" level="8" flag="🇺🇦" role="Rifler" />
          <Player name="xinxed" level="9" flag="🇷🇺" role="Rifler • Captain" highlight />
          <Player name="kironixx" level="8" flag="🇷🇺" role="Rifler" />
          <Player name="s1per" level="8" flag="🇷🇺" role="Rifler" />
          <Player name="for4ward" level="8" flag="🇷🇺" role="AWP" />

        </div>
      </section>

      {/* BENCH */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-6">🪑 Bench</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Player name="hulsey" level="7" flag="🇷🇺" role="Rifler" />
          <Player name="winda" level="8" flag="🇷🇺" role="Rifler" />
        </div>
      </section>

      {/* PARTNERS */}
      <section>
        <h2 className="text-3xl font-bold mb-6">🤝 Партнёры</h2>
        <div className="bg-gray-900 p-6 rounded-xl text-xl font-semibold text-yellow-400">
          1WIN Official Partner
        </div>
      </section>

    </main>
  );
}

function Player({
  name,
  level,
  flag,
  role,
  highlight
}: {
  name: string;
  level: string;
  flag: string;
  role: string;
  highlight?: boolean;
}) {
  return (
    <div className={`p-5 rounded-xl border transition
      ${highlight
        ? "bg-blue-800 border-cyan-400 shadow-lg shadow-cyan-500/30"
        : "bg-gray-900 border-gray-800 hover:border-cyan-500"
      }`}>

      <div className="text-xl font-bold">
        {name} {flag}
      </div>

      <div className="mt-2 text-gray-400">
        FACEIT lvl {level} • {role}
      </div>
    </div>
  );
}