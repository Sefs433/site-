"use client"

import { useState, useEffect } from "react";
import { Users, Trophy, Crown, Handshake } from "lucide-react";

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
          <span className="text-neutral-500 uppercase">{label}</span>
        </div>
      ))}
    </div>
  );
}

export default function TeamSite() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* фон */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,100,0,0.12),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(255,0,100,0.08),transparent_50%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24">

        {/* HERO */}
        <div className="text-center mb-20">
          <h1 className="text-8xl font-black tracking-tight">
            1337
          </h1>
          <p className="text-xl text-neutral-400 mt-6">
            Built to dominate. Made to win.
          </p>
        </div>

        {/* КНОПКИ */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <button
            onClick={() => setActiveSection("roster")}
            className="px-6 py-3 bg-orange-500 text-black font-bold hover:opacity-80 transition"
          >
            Состав
          </button>

          <button
            onClick={() => setActiveSection("tournaments")}
            className="px-6 py-3 bg-orange-500 text-black font-bold hover:opacity-80 transition"
          >
            Турниры
          </button>

          <button
            onClick={() => setActiveSection("partners")}
            className="px-6 py-3 bg-orange-500 text-black font-bold hover:opacity-80 transition"
          >
            Партнёрство
          </button>

          <button
            onClick={() => setActiveSection("hall")}
            className="px-6 py-3 bg-orange-500 text-black font-bold hover:opacity-80 transition"
          >
            Зал славы
          </button>
        </div>

        {/* РАЗДЕЛЫ */}

        {activeSection === "roster" && (
          <div className="p-10 bg-[#111] border border-neutral-800 space-y-4">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <Users /> Основной состав
            </h2>
            <ul className="space-y-2">
              <li>amullet — LVL 8 — K/D 1.35</li>
              <li>s1per — LVL 8 — K/D 1.26</li>
              <li>xinxed — LVL 9 — K/D 1.12</li>
              <li>kironixx — LVL 8 — K/D 1.15</li>
              <li>for4ward — LVL 8 — K/D 1.05</li>
            </ul>
          </div>
        )}

        {activeSection === "tournaments" && (
          <div className="p-10 bg-[#111] border border-neutral-800 space-y-10">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <Trophy /> Турниры
            </h2>

            <div>
              <h3 className="text-xl font-bold text-orange-500 mb-2">
                RIEM RIO
              </h3>
              <div>7 марта 2026 — 18:00</div>
              <Countdown targetDate="2026-03-07T18:00:00" />
              <div className="mt-4 text-neutral-400">
                Группа A: 1337 Team / Xtreme Gaming / DarkPulse
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-orange-500 mb-2">
                W StarLadder
              </h3>
              <div>15 апреля 2026 — 18:00</div>
              <Countdown targetDate="2026-04-15T18:00:00" />
              <div className="mt-4 text-neutral-400">
                Соперники будут объявлены позже
              </div>
            </div>
          </div>
        )}

        {activeSection === "partners" && (
          <div className="p-10 bg-[#111] border border-neutral-800 space-y-6">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <Handshake /> Партнёры
            </h2>

            <div className="text-xl font-bold text-orange-500">
              1WIN
            </div>

            <div>
              🎁 БОНУСЫ ПО ПРОМОКОДУ <span className="text-orange-500 font-bold">1337CS2</span>
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
              Перейти на 1WIN
            </a>
          </div>
        )}

        {activeSection === "hall" && (
          <div className="p-10 bg-[#111] border border-neutral-800 space-y-4">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <Crown /> Зал славы
            </h2>
            <ul>
              <li>🥉 3 место — W Cup 2</li>
              <li>Лучшие игроки: s1per / fonely</li>
            </ul>
          </div>
        )}

      </div>
    </div>
  );
}