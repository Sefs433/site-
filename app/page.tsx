"use client"

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
    <div className="flex gap-6 text-lg font-bold">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="text-center">
          <div className="text-cyan-400 text-2xl drop-shadow-[0_0_8px_rgba(0,255,200,0.6)]">
            {String(value).padStart(2, "0")}
          </div>
          <div className="text-xs opacity-50 uppercase tracking-wider">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}

function FaceitBadge({ level }: { level: number }) {
  return (
    <div className="flex items-center gap-2 bg-amber-500/20 border border-amber-400/40 px-3 py-1 rounded-full">
      <div className="w-2 h-2 bg-amber-400 rounded-full" />
      <span className="text-amber-400 font-semibold text-sm">
        LVL {level}
      </span>
    </div>
  );
}

export default function TeamSite() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,255,200,0.15),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(0,255,200,0.08),transparent_40%)]" />

      {/* SIDE TELEGRAM */}
      <motion.a
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        href="https://t.me/team1337cs2"
        target="_blank"
        className="hidden md:block fixed right-0 top-1/2 -translate-y-1/2 z-50"
      >
        <div className="flex items-center gap-3 bg-cyan-500 px-5 py-4 rounded-l-2xl shadow-[0_0_25px_rgba(0,255,200,0.5)] hover:bg-cyan-400 transition">
          <Send className="w-5 h-5 text-black" />
          <span className="font-semibold text-black">Связь</span>
        </div>
      </motion.a>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 space-y-24">

        {/* HERO */}
        <section>
          <h1 className="text-6xl font-extrabold">
            1337 <span className="text-cyan-400">Team</span>
          </h1>
          <p className="text-lg opacity-70 mt-4">
            Competitive CS2 Roster
          </p>
        </section>

        {/* TOURNAMENTS */}
        <section className="space-y-10">
          <h2 className="text-4xl font-bold flex items-center gap-3">
            <Trophy className="text-cyan-400" /> Турниры
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="rounded-3xl bg-white/5 p-8 backdrop-blur-xl border border-cyan-500/20 space-y-4 hover:border-cyan-400 transition">
              <div className="text-2xl font-bold text-cyan-400">RIEM RIO</div>
              <Countdown targetDate="2026-03-07T18:00:00" />
            </div>

            <div className="rounded-3xl bg-white/5 p-8 backdrop-blur-xl border border-cyan-500/20 space-y-4 hover:border-cyan-400 transition">
              <div className="text-2xl font-bold text-cyan-400">
                W StarLadder
              </div>
              <Countdown targetDate="2026-03-07T18:00:00" />
            </div>

          </div>
        </section>

        {/* MAIN ROSTER */}
        <section className="space-y-10">
          <h2 className="text-4xl font-bold flex items-center gap-3">
            <Users className="text-cyan-400" /> Основной состав
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { nick: "amullet 🇺🇦", lvl: 8, role: "Rifler" },
              { nick: "xinxed 🇷🇺", lvl: 9, role: "Captain" },
              { nick: "kironixx 🇷🇺", lvl: 8, role: "Rifler" },
              { nick: "s1per 🇷🇺", lvl: 8, role: "Rifler" },
              { nick: "for4ward 🇷🇺", lvl: 8, role: "AWP" },
            ].map((player) => (
              <motion.div
                key={player.nick}
                whileHover={{ scale: 1.05 }}
                className="rounded-3xl bg-white/5 p-6 backdrop-blur-xl shadow-xl border border-cyan-500/20 space-y-3 hover:border-cyan-400 transition"
              >
                <div className="text-2xl font-bold">{player.nick}</div>
                <FaceitBadge level={player.lvl} />
                <div className="opacity-60">{player.role}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ACADEMY */}
        <section className="space-y-10">
          <h2 className="text-4xl font-bold text-cyan-400">
            Academy
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { nick: "LeV1sY", role: "Entry" },
              { nick: "Mezagy", role: "Rifler" },
              { nick: "Dezmoral", role: "AWP" },
              { nick: "TwiZzy", role: "Lurker" },
              { nick: "Klimen1245", role: "IGL" },
            ].map((player) => (
              <div
                key={player.nick}
                className="rounded-3xl bg-white/5 p-6 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-400 transition"
              >
                <div className="text-2xl font-bold">{player.nick}</div>
                <div className="opacity-60 mt-2">{player.role}</div>
              </div>
            ))}
          </div>
        </section>

        {/* PARTNERSHIP */}
        <section className="space-y-10">
          <h2 className="text-4xl font-bold text-cyan-400">
            Партнёрство
          </h2>

          <div className="rounded-3xl bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 p-10 backdrop-blur-xl border border-cyan-500/30 space-y-6">

            <div className="text-2xl font-bold text-cyan-400">
              🎁 БОНУСЫ ПО ПРОМОКОДУ 1337CS2
            </div>

            <ul className="space-y-3 text-lg">
              <li>— 500% бонус к первым 4 депозитам</li>
              <li>— 500 фриспинов на первые четыре депозита</li>
              <li>— и другие бонусы для комфортного старта</li>
            </ul>

            <a
              href="https://1wfetj.life/v3/landing-page/cyber?p=2gci"
              target="_blank"
              className="inline-block mt-6 bg-cyan-500 hover:bg-cyan-400 transition px-6 py-3 rounded-xl font-bold text-black shadow-[0_0_20px_rgba(0,255,200,0.4)]"
            >
              Активировать бонус
            </a>

          </div>
        </section>

        {/* FOOTER */}
        <section className="mt-24 border-t border-white/10 pt-8">
          <div className="flex justify-center gap-8 text-lg">
            <a href="https://www.twitch.tv/f0w4rdd" target="_blank">Twitch</a>
            <a href="https://t.me/team1337cs2" target="_blank">Telegram</a>
            <a
              href="https://1wfetj.life/v3/landing-page/cyber?p=2gci"
              target="_blank"
              className="text-cyan-400 font-semibold"
            >
              1WIN
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}