"use client"

import { useEffect, useState } from "react";
import { Users, Trophy, Crown, Send, ExternalLink } from "lucide-react";

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
    <div className="flex gap-6 font-mono">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label}>
          <span className="text-amber-400 text-lg">
            {String(value).padStart(2, "0")}
          </span>{" "}
          <span className="text-neutral-500 text-xs uppercase">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

function FaceitBadge({ level }: { level: number }) {
  return (
    <span className="px-3 py-1 text-xs font-bold bg-amber-400 text-black">
      LVL {level}
    </span>
  );
}

function PlayerCard({
  nick,
  role,
  lvl,
  kd,
}: {
  nick: string;
  role: string;
  lvl: number;
  kd: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-neutral-800 p-6 bg-neutral-950 hover:border-amber-400 transition"
    >
      <div className="text-2xl font-extrabold">{nick}</div>
      <div className="text-sm opacity-60 mb-2">{role}</div>
      <FaceitBadge level={lvl} />

      {hovered && (
        <div className="mt-4 text-amber-400 font-bold">
          K/D: {kd}
        </div>
      )}
    </div>
  );
}

export default function TeamSite() {
  const players = [
    { nick: "amullet 🇺🇦", role: "Rifler", lvl: 8, kd: "1.35" },
    { nick: "s1per 🇷🇺", role: "Rifler", lvl: 8, kd: "1.26" },
    { nick: "xinxed 🇷🇺", role: "Captain", lvl: 9, kd: "1.12" },
    { nick: "kironixx 🇷🇺", role: "Rifler", lvl: 8, kd: "1.15" },
    { nick: "for4ward 🇷🇺", role: "AWP", lvl: 8, kd: "1.05" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white px-6 py-20 space-y-32 max-w-6xl mx-auto">

      {/* HERO */}
      <section>
        <h1 className="text-7xl font-black tracking-tight">
          1337 TEAM
        </h1>
      </section>

      {/* TOURNAMENTS */}
      <section>
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <Trophy size={28} /> Турниры
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="border border-neutral-800 p-8 bg-neutral-950 space-y-4">
            <div className="text-xl font-bold">RIEM RIO</div>
            <Countdown targetDate="2026-03-07T18:00:00" />

            <div className="mt-6 text-sm uppercase text-neutral-500">
              Группа A
            </div>
            <ul className="space-y-1">
              <li>1337 Team</li>
              <li>Xtreme Gaming</li>
              <li>DarkPulse</li>
            </ul>
          </div>

          <div className="border border-neutral-800 p-8 bg-neutral-950 space-y-4">
            <div className="text-xl font-bold">W StarLadder</div>
            <Countdown targetDate="2026-04-15T18:00:00" />
          </div>

        </div>
      </section>

      {/* ROSTER */}
      <section>
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <Users size={28} /> Основной состав
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {players.map((player) => (
            <PlayerCard key={player.nick} {...player} />
          ))}
        </div>
      </section>

      {/* PARTNERSHIP */}
      <section>
        <h2 className="text-3xl font-bold mb-6">
          Партнёрство
        </h2>

        <div className="border border-neutral-800 p-8 bg-neutral-950 space-y-6">

          <div>
            <div className="text-lg font-bold text-amber-400">
              1WIN
            </div>
            <div className="mt-2">
              Промокод: <span className="text-amber-400 font-bold">1337CS2</span>
            </div>

            <a
              href="https://1wfetj.life/v3/landing-page/cyber?p=2gci"
              target="_blank"
              className="inline-flex items-center gap-2 mt-4 px-5 py-2 bg-amber-400 text-black font-bold hover:opacity-80 transition"
            >
              Перейти на 1WIN <ExternalLink size={16} />
            </a>
          </div>

        </div>
      </section>

      {/* HALL OF FAME */}
      <section>
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <Crown size={28} /> Зал славы
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-neutral-800 p-6 bg-neutral-950">
            <div className="font-bold mb-3">Трофеи</div>
            <ul>
              <li>🥇 1 место —</li>
              <li>🥈 2 место —</li>
              <li>🥉 3 место — W Cup 2</li>
            </ul>
          </div>

          <div className="border border-amber-400 p-6 bg-neutral-900">
            <div className="font-bold mb-3 text-amber-400">
              Лучшие игроки
            </div>
            <div>s1per</div>
            <div>fonely</div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section>
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <Send size={28} /> Связь
        </h2>

        <div className="border border-neutral-800 p-6 bg-neutral-950 space-y-4">
          <div>
            Telegram:{" "}
            <a
              href="https://t.me/team1337cs2"
              className="text-amber-400 font-bold"
              target="_blank"
            >
              t.me/team1337cs2
            </a>
          </div>

          <div>
            Twitch:{" "}
            <a
              href="https://www.twitch.tv/f0w4rdd"
              className="text-amber-400 font-bold"
              target="_blank"
            >
              twitch.tv/f0w4rdd
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}