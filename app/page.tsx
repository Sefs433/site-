"use client"

import { useState, useEffect } from "react";
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
      className="border border-neutral-800 p-6 bg-[#111] hover:border-orange-500 transition"
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
  const [showTournaments, setShowTournaments] = useState(false);

  const players = [
    { nick: "amullet 🇺🇦", role: "Rifler", lvl: 8, kd: "1.35" },
    { nick: "s1per 🇷🇺", role: "Rifler", lvl: 8, kd: "1.26" },
    { nick: "xinxed 🇷🇺", role: "Captain", lvl: 9, kd: "1.12" },
    { nick: "kironixx 🇷🇺", role: "Rifler", lvl: 8, kd: "1.15" },
    { nick: "for4ward 🇷🇺", role: "AWP", lvl: 8, kd: "1.05" },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* живой фон */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,100,0,0.08),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.05),transparent_50%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 space-y-24">

        {/* HERO */}
        <section>
          <h1 className="text-7xl font-black tracking-tight">
            1337 TEAM
          </h1>
        </section>

        {/* КНОПКА ТУРНИРЫ */}
        <section>
          <button
            onClick={() => setShowTournaments(!showTournaments)}
            className="px-6 py-3 bg-orange-500 text-black font-bold hover:opacity-80 transition"
          >
            ТУРНИРЫ
          </button>

          {showTournaments && (
            <div className="mt-12 grid md:grid-cols-2 gap-8">

              {/* RIEM RIO */}
              <div className="p-8 bg-[#111] border border-neutral-800 space-y-6">
                <div className="text-2xl font-bold text-orange-500">
                  RIEM RIO
                </div>

                <div>
                  <div className="text-sm uppercase text-neutral-500 mb-2">
                    Дата начала
                  </div>
                  <div className="text-lg font-semibold">
                    7 марта 2026 — 18:00
                  </div>
                </div>

                <Countdown targetDate="2026-03-07T18:00:00" />

                <div>
                  <div className="text-sm uppercase text-neutral-500 mt-6 mb-2">
                    Группа A
                  </div>
                  <ul className="space-y-1">
                    <li>1337 Team</li>
                    <li>Xtreme Gaming</li>
                    <li>DarkPulse</li>
                  </ul>
                </div>

                <div className="text-xs text-neutral-500">
                  Турнир ещё не начался
                </div>
              </div>

              {/* W StarLadder */}
              <div className="p-8 bg-[#111] border border-neutral-800 space-y-6">
                <div className="text-2xl font-bold text-orange-500">
                  W StarLadder
                </div>

                <div>
                  <div className="text-sm uppercase text-neutral-500 mb-2">
                    Дата начала
                  </div>
                  <div className="text-lg font-semibold">
                    7 марта 2026 
                  </div>
                </div>

                <Countdown targetDate="2026-03-07T18:00:00" />

                <div className="text-neutral-400 mt-6">
                  Соперники будут объявлены позже
                </div>

                <div className="text-xs text-neutral-500">
                  Турнир ещё не начался
                </div>
              </div>

            </div>
          )}
        </section>

        {/* СОСТАВ */}
        <section>
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
        <section>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Handshake size={28} /> ПАРТНЁРЫ
          </h2>

          <div className="p-10 bg-[#111] border border-neutral-800 space-y-6">

            <div className="text-2xl font-bold text-orange-500">
              1WIN
            </div>

            <div className="text-lg">
               <span className="font-bold">БОНУСЫ ПО ПРОМОКОДУ 1337CS2</span>
            </div>

            <div>
              При использовании промокода <span className="text-orange-500 font-bold">1337CS2</span> ты получаешь очень приятные бонусы, среди которых:
            </div>

            <ul className="space-y-2">
              <li>— 500% бонус к первым 4 депозитам</li>
              <li>— 500 фриспинов на первые четыре депозита</li>
              <li>— и другие бонусы для комфортного старта</li>
            </ul>

            <a
              href="https://1wfetj.life/v3/landing-page/cyber?p=2gci"
              target="_blank"
              className="inline-block mt-4 px-6 py-3 bg-orange-500 text-black font-bold hover:opacity-80 transition"
            >
              ПЕРЕЙТИ НА 1WIN
            </a>

          </div>
        </section>

        {/* ЗАЛ СЛАВЫ */}
        <section>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Crown size={28} /> ЗАЛ СЛАВЫ
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-[#111] border border-neutral-800">
              <div className="font-bold mb-4">Трофеи</div>
              <ul>
                <li> 1 место —</li>
                <li> 2 место —</li>
                <li> 3 место — W Cup 2</li>
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