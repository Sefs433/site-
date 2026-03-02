"use client"

import { useEffect, useState } from "react";
import { Users, Trophy, Crown, Send, Handshake } from "lucide-react";

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
    <div className="flex gap-6 font-mono text-sm">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label}>
          <span className="text-orange-500 font-bold">
            {String(value).padStart(2, "0")}
          </span>{" "}
          <span className="text-neutral-500 uppercase">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

function FaceitBadge({ level }: { level: number }) {
  return (
    <span className="px-3 py-1 text-xs font-bold bg-orange-500 text-black">
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
      className="relative border border-neutral-800 p-6 bg-[#111] hover:border-orange-500 transition"
    >
      <div className="text-2xl font-extrabold">{nick}</div>
      <div className="text-sm opacity-60 mb-2">{role}</div>
      <FaceitBadge level={lvl} />

      {hovered && (
        <div className="mt-4 text-orange-500 font-bold">
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
    <div className="relative min-h-screen text-white overflow-hidden bg-black">

      {/* ЖИВОЙ ФОН */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,100,0,0.08),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.05),transparent_50%)]" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.2) 0px, rgba(255,255,255,0.2) 1px, transparent 1px, transparent 3px)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 space-y-24">

        {/* HERO */}
        <section className="border-b border-neutral-800 pb-12">
          <h1 className="text-7xl font-black tracking-tight">
            1337 TEAM
          </h1>
        </section>

        {/* ТУРНИРЫ */}
        <section className="border-b border-neutral-800 pb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Trophy size={28} /> ТУРНИРЫ
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="p-8 bg-[#111] border border-neutral-800">
              <div className="text-xl font-bold mb-4">RIEM RIO</div>
              <Countdown targetDate="2026-03-07T18:00:00" />

              <div className="mt-6 text-sm uppercase text-neutral-500">
                Группа A
              </div>
              <ul className="mt-2 space-y-1">
                <li>1337 Team</li>
                <li>Xtreme Gaming</li>
                <li>DarkPulse</li>
              </ul>
            </div>

            <div className="p-8 bg-[#111] border border-neutral-800">
              <div className="text-xl font-bold mb-4">W StarLadder</div>
              <Countdown targetDate="2026-04-15T18:00:00" />
            </div>

          </div>
        </section>

        {/* СОСТАВ */}
        <section className="border-b border-neutral-800 pb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Users size={28} /> СОСТАВ
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {players.map((player) => (
              <PlayerCard key={player.nick} {...player} />
            ))}
          </div>
        </section>

        {/* ПАРТНЁРЫ */}
        <section className="border-b border-neutral-800 pb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Handshake size={28} /> ПАРТНЁРЫ
          </h2>

          <div className="p-10 bg-[#111] border border-neutral-800">

            <div className="text-2xl font-bold text-orange-500">
              1WIN
            </div>

            <div className="mt-4 text-lg">
              Промокод:{" "}
              <span className="text-orange-500 font-bold">
                1337CS2
              </span>
            </div>

            <a
              href="https://1wfetj.life/v3/landing-page/cyber?p=2gci"
              target="_blank"
              className="inline-block mt-6 px-6 py-3 bg-orange-500 text-black font-bold hover:opacity-80 transition"
            >
              ПЕРЕЙТИ НА 1WIN
            </a>

          </div>
        </section>

        {/* ЗАЛ СЛАВЫ */}
        <section className="border-b border-neutral-800 pb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Crown size={28} /> ЗАЛ СЛАВЫ
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="p-8 bg-[#111] border border-neutral-800">
              <div className="font-bold mb-4">Трофеи</div>
              <ul>
                <li>🥇 1 место —</li>
                <li>🥈 2 место —</li>
                <li>🥉 3 место — W Cup 2</li>
              </ul>
            </div>

            <div className="p-8 bg-[#111] border border-orange-500">
              <div className="font-bold mb-4 text-orange-500">
                Лучшие игроки
              </div>
              <div>s1per</div>
              <div>fonely</div>
            </div>

          </div>
        </section>

        {/* СВЯЗЬ */}
        <section>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Send size={28} /> СВЯЗЬ
          </h2>

          <div className="p-8 bg-[#111] border border-neutral-800">
            Telegram:{" "}
            <a
              href="https://t.me/team1337cs2"
              target="_blank"
              className="text-orange-500 font-bold"
            >
              t.me/team1337cs2
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}