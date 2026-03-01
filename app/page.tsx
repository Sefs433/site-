"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Users, Trophy, Send } from "lucide-react";

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

      {/* TELEGRAM SIDE BUTTON */}
      <motion.a
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        href="https://t.me/team1337cs2"
        target="_blank"
        className="hidden md:block fixed right-0 top-1/2 -translate-y-1/2 z-50"
      >
        <div className="flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-4 rounded-l-2xl shadow-2xl">
          <Send className="w-5 h-5 text-white" />
          <span className="font-semibold text-white">Связь с нами</span>
        </div>
      </motion.a>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 space-y-32">

        {/* HERO */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-6xl md:text-7xl font-extrabold">
              1337 <span className="text-blue-500">Team</span>
            </h1>
            <p className="text-lg opacity-70">
              Competitive CS2 Roster • FACEIT Core
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="h-80 bg-gradient-to-br from-blue-600/30 to-cyan-400/20 rounded-3xl backdrop-blur-xl shadow-2xl flex items-center justify-center text-3xl font-bold"
          >
            PRO ROSTER
          </motion.div>
        </section>

        {/* TOURNAMENT */}
        <section className="space-y-10">
          <h2 className="text-4xl font-bold flex items-center gap-3">
            <Trophy /> Ближайший турнир
          </h2>

          <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 flex justify-between items-center">
            <div>
              <div className="text-2xl font-bold">
                RIEM RIO 7 марта 2026
              </div>
              <div className="opacity-50 mt-1">
                W StarLadder
              </div>
            </div>
            <Countdown targetDate="2026-03-07T18:00:00" />
          </div>
        </section>

        {/* ROSTER */}
        <section className="space-y-10">
          <h2 className="text-4xl font-bold flex items-center gap-3">
            <Users /> Основной состав
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { nick: "amullet 🇺🇦", role: "FACEIT 8 • Rifler" },
              { nick: "xinxed 🇷🇺", role: "FACEIT 9 • Captain" },
              { nick: "kironixx 🇷🇺", role: "FACEIT 8 • Rifler" },
              { nick: "s1per 🇷🇺", role: "FACEIT 8 • Rifler" },
              { nick: "for4ward 🇷🇺", role: "FACEIT 8 • AWP" },
            ].map((player) => (
              <motion.div
                key={player.nick}
                whileHover={{ scale: 1.05 }}
                className="rounded-3xl bg-gradient-to-br from-white/5 to-white/10 p-6 backdrop-blur-xl shadow-xl border border-white/10"
              >
                <div className="text-2xl font-bold">{player.nick}</div>
                <div className="opacity-60 mt-2">{player.role}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* BENCH */}
        <section className="space-y-10">
          <h2 className="text-4xl font-bold">Bench</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { nick: "hulsey 🇷🇺", role: "FACEIT 7 • Rifler" },
              { nick: "winda 🇷🇺", role: "FACEIT 8 • Rifler" },
            ].map((player) => (
              <div
                key={player.nick}
                className="rounded-3xl bg-white/5 p-6 backdrop-blur-xl border border-white/10"
              >
                <div className="text-2xl font-bold">{player.nick}</div>
                <div className="opacity-60 mt-2">{player.role}</div>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER LINKS */}
        <section className="mt-32 border-t border-white/10 pt-10">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-lg">

            <a
              href="https://www.twitch.tv/f0w4rdd"
              target="_blank"
              className="opacity-70 hover:opacity-100 transition"
            >
              Twitch
            </a>

            <a
              href="https://t.me/team1337cs2"
              target="_blank"
              className="opacity-70 hover:opacity-100 transition"
            >
              Telegram
            </a>

            <a
              href="https://1wfetj.life/v3/landing-page/cyber?p=2gci"
              target="_blank"
              className="text-yellow-400 font-semibold hover:text-yellow-300 transition"
            >
              1WIN
            </a>

          </div>
        </section>

      </div>
    </div>
  );
}