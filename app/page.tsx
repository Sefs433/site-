"use client"

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tournamentDate = "2026-03-07T18:00:00";

function Countdown({ targetDate }: { targetDate: string }) {
  const calculate = () => {
    const diff = +new Date(targetDate) - +new Date();
    if (diff <= 0) return null;

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [time, setTime] = useState<any>(calculate());

  useEffect(() => {
    const i = setInterval(() => setTime(calculate()), 1000);
    return () => clearInterval(i);
  }, []);

  if (!time) return null;

  return (
    <div className="flex gap-4 font-mono mt-3">
      {Object.entries(time).map(([k, v]) => (
        <div key={k}>
          <span className="text-orange-500 font-bold text-lg">
            {String(v).padStart(2, "0")}
          </span>{" "}
          <span className="text-neutral-500 text-xs uppercase">{k}</span>
        </div>
      ))}
    </div>
  );
}

function LiveIndicator({ targetDate }: { targetDate: string }) {
  const [live, setLive] = useState(false);

  useEffect(() => {
    const check = () => {
      setLive(new Date() >= new Date(targetDate));
    };
    check();
    const i = setInterval(check, 1000);
    return () => clearInterval(i);
  }, []);

  if (!live) return null;

  return (
    <div className="flex items-center gap-2 text-red-500 font-bold mt-2 animate-pulse">
      <span className="w-3 h-3 bg-red-500 rounded-full"></span>
      LIVE NOW
    </div>
  );
}

function PlayerCard({ nick, role, lvl, kd }: any) {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="bg-[#111] border border-neutral-800 p-6"
    >
      <div className="text-2xl font-extrabold">{nick}</div>
      <div className="text-neutral-400 text-sm">{role}</div>
      <div className="text-orange-500 font-bold text-sm">LVL {lvl}</div>

      <AnimatePresence>
        {hover && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-orange-400 font-bold mt-2"
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
    <div className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* Esports animated background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,120,0,0.15),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(255,0,120,0.08),transparent_50%)] animate-pulse" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-8xl font-black">1337</h1>
          <p className="text-neutral-400 mt-4 text-xl">
            Built to dominate. Made to win.
          </p>
        </motion.div>

        {/* NAV */}
        <div className="flex justify-center gap-6 mb-16 flex-wrap">
          {["roster","tournaments","partners","hall"].map((item) => (
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

        <AnimatePresence mode="wait">

          {section === "roster" && (
            <motion.div
              key="roster"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="grid md:grid-cols-3 gap-8"
            >
              {players.map(p => <PlayerCard key={p.nick} {...p} />)}
            </motion.div>
          )}

          {section === "tournaments" && (
            <motion.div
              key="tournaments"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="space-y-12"
            >
              {["RIEM RIO","W StarLadder"].map(name => (
                <div key={name} className="bg-[#111] border border-neutral-800 p-8">
                  <h3 className="text-2xl font-bold text-orange-500">{name}</h3>
                  <div>7 марта 2026 — 18:00</div>
                  <LiveIndicator targetDate={tournamentDate}/>
                  <Countdown targetDate={tournamentDate}/>
                </div>
              ))}
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
              <h2 className="text-3xl font-bold text-orange-500">1WIN</h2>

              <div className="font-bold text-lg">
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