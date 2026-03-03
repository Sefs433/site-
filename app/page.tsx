"use client"

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    <div className="flex gap-6 font-mono text-sm mt-2">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label}>
          <span className="text-orange-500 font-bold text-lg">
            {String(value).padStart(2, "0")}
          </span>{" "}
          <span className="text-neutral-500 uppercase">{label}</span>
        </div>
      ))}
    </div>
  );
}

function PlayerCard({ nick, role, lvl, kd }: any) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bg-[#111] border border-neutral-800 p-6 space-y-3"
    >
      <div className="text-2xl font-extrabold">{nick}</div>
      <div className="text-neutral-400 text-sm">{role}</div>
      <div className="text-orange-500 font-bold text-sm">LVL {lvl}</div>

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-orange-400 font-bold"
          >
            K/D: {kd}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function TeamSite() {
  const [section, setSection] = useState("home");

  const players = [
    { nick: "amullet", role: "Rifler", lvl: 8, kd: "1.35" },
    { nick: "s1per", role: "Rifler", lvl: 8, kd: "1.26" },
    { nick: "xinxed", role: "Captain", lvl: 9, kd: "1.12" },
    { nick: "kironixx", role: "Rifler", lvl: 8, kd: "1.15" },
    { nick: "for4ward", role: "AWP", lvl: 8, kd: "1.05" },
  ];

  return (
    <div className="relative min-h-screen text-white overflow-hidden bg-black">

      {/* 🔥 АНИМИРОВАННЫЙ ФОН */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,120,0,0.15),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(255,0,120,0.08),transparent_50%)] animate-pulse" />
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(255,255,255,0.2) 0px, rgba(255,255,255,0.2) 1px, transparent 1px, transparent 4px)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-8xl font-black tracking-tight">
            1337
          </h1>
          <p className="text-xl text-neutral-400 mt-4">
            Built to dominate the server.
          </p>
        </motion.div>

        {/* NAV */}
        <div className="flex justify-center gap-6 mb-16 flex-wrap">
          {["roster", "tournaments", "partners", "hall"].map((item) => (
            <button
              key={item}
              onClick={() => setSection(item)}
              className={`px-6 py-3 font-bold transition ${
                section === item
                  ? "bg-orange-500 text-black"
                  : "bg-[#111] border border-neutral-800 hover:border-orange-500"
              }`}
            >
              {item === "roster" && "Состав"}
              {item === "tournaments" && "Турниры"}
              {item === "partners" && "Партнёрство"}
              {item === "hall" && "Зал славы"}
            </button>
          ))}
        </div>

        {/* SECTIONS */}
        <AnimatePresence mode="wait">
          {section === "roster" && (
            <motion.div
              key="roster"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="grid md:grid-cols-3 gap-8"
            >
              {players.map((p) => (
                <PlayerCard key={p.nick} {...p} />
              ))}
            </motion.div>
          )}

          {section === "tournaments" && (
            <motion.div
              key="tournaments"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="space-y-10"
            >
              <div className="bg-[#111] border border-neutral-800 p-8">
                <h3 className="text-2xl font-bold text-orange-500">
                  RIEM RIO
                </h3>
                <div>7 марта 2026 — 18:00</div>
                <Countdown targetDate="2026-03-07T18:00:00" />
              </div>

              <div className="bg-[#111] border border-neutral-800 p-8">
                <h3 className="text-2xl font-bold text-orange-500">
                  W StarLadder
                </h3>
                <div>15 апреля 2026 — 18:00</div>
                <Countdown targetDate="2026-04-15T18:00:00" />
              </div>
            </motion.div>
          )}

          {section === "partners" && (
            <motion.div
              key="partners"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="bg-[#111] border border-neutral-800 p-10 space-y-6"
            >
              <h2 className="text-3xl font-bold text-orange-500">
                1WIN
              </h2>

              <div className="text-lg font-bold">
                🎁 БОНУСЫ ПО ПРОМОКОДУ 1337CS2
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
                Перейти на 1WIN
              </a>
            </motion.div>
          )}

          {section === "hall" && (
            <motion.div
              key="hall"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="bg-[#111] border border-neutral-800 p-10 space-y-4"
            >
              <div>🥉 3 место — W Cup 2</div>
              <div>Лучшие игроки: s1per / fonely</div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}