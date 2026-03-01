"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Users, Trophy, Twitch, Send } from "lucide-react";

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
    <div className="flex gap-4 text-xl font-bold">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="text-center">
          <div>{String(value).padStart(2, "0")}</div>
          <div className="text-xs opacity-50">{label}</div>
        </div>
      ))}
    </div>
  );
}

export default function PremiumTeamSite() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,120,255,0.15),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(0,255,200,0.1),transparent_40%)]" />

      {/* TELEGRAM DESKTOP */}
      <motion.a
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        href="https://t.me/team1337cs2"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:block fixed right-0 top-1/2 -translate-y-1/2 z-50"
      >
        <div className="flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-4 rounded-l-2xl shadow-2xl shadow-cyan-500/40">
          <Send className="w-5 h-5 text-white" />
          <span className="font-semibold text-white">
            Связь с нами
          </span>
        </div>
      </motion.a>

      {/* TELEGRAM MOBILE */}
      <motion.a
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4 }}
        href="https://t.me/team1337cs2"
        target="_blank"
        rel="noopener noreferrer"
        className="md:hidden fixed bottom-6 right-6 z-50"
      >
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 shadow-2xl shadow-cyan-500/50">
          <Send className="w-6 h-6 text-white" />
        </div>
      </motion.a>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 space-y-32">

        {/* HERO */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h1 className="text-6xl md:text-7xl font-extrabold">
              1337 <span className="text-blue-500">Team</span>
            </h1>
            <p className="opacity-70">
              Профессиональная киберспортивная организация.
            </p>
          </div>
        </section>

        {/* TOURNAMENT */}
        <section className="space-y-10">
          <h2 className="text-4xl font-bold flex items-center gap-3">
            <Trophy /> Ближайший турнир
          </h2>

          <div className="rounded-3xl bg-white/5 p-8 border border-white/10">
            <div className="text-2xl font-bold">W StarLadder</div>
            <div className="opacity-50 mb-4">4 марта 2026</div>
            <Countdown targetDate="2026-03-04T00:00:00" />
          </div>
        </section>

        {/* MAIN ROSTER */}
        <section className="space-y-10">
          <h2 className="text-4xl font-bold flex items-center gap-3">
            <Users /> Основной состав
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "amul1et",
              "xinxed",
              "kironixx",
              "s1per",
              "for4ward",
              "hulsey",
              "winda"
            ].map((nick) => (
              <div key={nick} className="rounded-3xl bg-white/5 p-6 border border-white/10">
                <div className="text-2xl font-bold">{nick}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section className="space-y-10">
          <h2 className="text-4xl font-bold">Наши достижения</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl bg-white/5 p-6 border border-white/10">
              <div className="text-3xl font-bold text-blue-500">#2</div>
              <div>ESL League</div>
            </div>

            <div className="rounded-3xl bg-white/5 p-6 border border-white/10">
              <div className="text-3xl font-bold text-cyan-400">#3</div>
              <div>W CUP 5x5</div>
            </div>
          </div>
        </section>

        {/* PARTNER */}
        <section className="space-y-10">
          <h2 className="text-4xl font-bold">Партнёр 1Win</h2>

          <div className="rounded-3xl bg-white/5 p-8 border border-white/10">
            <div className="text-xl font-bold mb-4">
              Промокод: <span className="text-blue-400">1337CS2</span>
            </div>
            <div className="opacity-70 space-y-2">
              <div>— 500% бонус к первым 4 депозитам</div>
              <div>— 500 фриспинов на первые четыре депозита</div>
              <div>— другие бонусы для старта</div>
            </div>
            <a
              href="https://1wfetj.life/v3/landing-page/cyber?p=2gci"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-6 bg-blue-600 px-6 py-3 rounded-xl">
                Перейти к 1Win
              </button>
            </a>
          </div>
        </section>

        {/* ACADEMY */}
        <section className="space-y-10">
          <h2 className="text-4xl font-bold">Академия</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "LeV1sY — Опен",
              "Mezagy — Рифл",
              "Dezmoral — AWP",
              "TwiZzy — Люрк",
              "Klimen1245 — IGL"
            ].map((player) => (
              <div key={player} className="rounded-3xl bg-white/5 p-6 border border-white/10">
                {player}
              </div>
            ))}
          </div>
        </section>

        {/* SOCIALS */}
        <section className="space-y-6">
          <h2 className="text-4xl font-bold">Наши соцсети</h2>

          <div className="flex gap-6">
            <a href="https://www.twitch.tv/f0w4rdd" target="_blank">
              Twitch
            </a>
            <a href="https://t.me/team1337cs2" target="_blank">
              Telegram
            </a>
          </div>
        </section>

        <footer className="text-center opacity-40 pt-20">
          © 2026 1337 Team
        </footer>
      </div>
    </div>
  );
}