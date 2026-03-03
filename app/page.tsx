"use client"

import { useEffect, useState } from "react";
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
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen text-white overflow-x-hidden bg-black">

      {/* 🔥 НОВЫЙ ЖИВОЙ ФОН */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(255,120,0,0.12),transparent_40%),radial-gradient(circle_at_90%_80%,rgba(255,0,100,0.08),transparent_50%)]" />
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(255,255,255,0.2) 0px, rgba(255,255,255,0.2) 1px, transparent 1px, transparent 3px)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 space-y-40">

        {/* HERO */}
        <section>
          <h1 className="text-7xl font-black tracking-tight">
            1337 TEAM
          </h1>
        </section>

        {/* ТУРНИРЫ */}
        <section id="tournaments" className="space-y-8">
          <h2 className="text-4xl font-bold flex items-center gap-3">
            <Trophy /> Турниры
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="p-8 bg-[#111] border border-neutral-800 space-y-6">
              <div className="text-2xl font-bold text-orange-500">
                RIEM RIO
              </div>
              <div>7 марта 2026 — 18:00</div>
              <Countdown targetDate="2026-03-07T18:00:00" />
              <div className="text-neutral-400">
                Группа A: 1337 Team / Xtreme Gaming / DarkPulse
              </div>
            </div>

            <div className="p-8 bg-[#111] border border-neutral-800 space-y-6">
              <div className="text-2xl font-bold text-orange-500">
                W StarLadder
              </div>
              <div>15 апреля 2026 — 18:00</div>
              <Countdown targetDate="2026-04-15T18:00:00" />
              <div className="text-neutral-400">
                Соперники будут объявлены позже
              </div>
            </div>

          </div>
        </section>

        {/* СОСТАВ */}
        <section id="roster" className="space-y-8">
          <h2 className="text-4xl font-bold flex items-center gap-3">
            <Users /> Состав
          </h2>
          <div className="p-8 bg-[#111] border border-neutral-800">
            Основной состав команды 1337.
          </div>
        </section>

        {/* ПАРТНЁРЫ */}
        <section id="partners" className="space-y-8">
          <h2 className="text-4xl font-bold flex items-center gap-3">
            <Handshake /> Партнёры
          </h2>

          <div className="p-10 bg-[#111] border border-neutral-800 space-y-6">

            <div className="text-2xl font-bold text-orange-500">
              1WIN
            </div>

            <div className="text-lg font-bold">
              🎁 БОНУСЫ ПО ПРОМОКОДУ 1337CS2
            </div>

            <div>
              При использовании промокода <span className="text-orange-500 font-bold">1337CS2</span> ты получаешь:
            </div>

            <ul className="space-y-2">
              <li>— 500% бонус к первым 4 депозитам</li>
              <li>— 500 фриспинов на первые четыре депозита</li>
              <li>— и другие бонусы для комфортного старта</li>
            </ul>

            <a
              href="https://1wfetj.life/v3/landing-page/cyber?p=2gci"
              target="_blank"
              className="inline-block px-6 py-3 bg-orange-500 text-black font-bold hover:opacity-80 transition"
            >
              ПЕРЕЙТИ НА 1WIN
            </a>

          </div>
        </section>

        {/* ЗАЛ СЛАВЫ */}
        <section id="hall" className="space-y-8">
          <h2 className="text-4xl font-bold flex items-center gap-3">
            <Crown /> Зал славы
          </h2>

          <div className="p-8 bg-[#111] border border-neutral-800">
            🥉 3 место — W Cup 2
          </div>
        </section>

      </div>

      {/* 🔘 ПЛАВАЮЩЕЕ МЕНЮ */}
      {showNav && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#111] border border-neutral-800 px-6 py-3 flex gap-6 backdrop-blur-md">
          <button onClick={() => scrollTo("tournaments")} className="hover:text-orange-500">
            Турниры
          </button>
          <button onClick={() => scrollTo("roster")} className="hover:text-orange-500">
            Состав
          </button>
          <button onClick={() => scrollTo("partners")} className="hover:text-orange-500">
            Партнёрство
          </button>
          <button onClick={() => scrollTo("hall")} className="hover:text-orange-500">
            Зал славы
          </button>
        </div>
      )}

    </div>
  );
}