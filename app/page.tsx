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
          <div className="text-cyan-400 text-2xl">
            {String(value).padStart(2, "0")}
          </div>
          <div className="text-xs opacity-50 uppercase">
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

function TournamentCard({
  title,
  targetDate,
  group,
}: {
  title: string;
  targetDate: string;
  group?: string[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      layout
      onClick={() => group && setOpen(!open)}
      className="cursor-pointer rounded-3xl bg-white/5 p-8 backdrop-blur-xl border border-cyan-500/20 space-y-4 hover:border-cyan-400 transition"
    >
      <div className="text-2xl font-bold text-cyan-400">
        {title}
      </div>

      <Countdown targetDate={targetDate} />

      {group && open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
          className="pt-4 border-t border-white/10 space-y-2"
        >
          <div className="text-sm uppercase opacity-50">
            Группа A
          </div>

          {group.map((team) => (
            <div
              key={team}
              className="bg-cyan-500/10 px-4 py-2 rounded-xl border border-cyan-500/20"
            >
              {team}
            </div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}

export default function TeamSite() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,255,200,0.15),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(0,255,200,0.08),transparent_40%)]" />

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

            <TournamentCard
              title="RIEM RIO"
              targetDate="2026-03-07T18:00:00"
              group={[
                "1337 Team",
                "Xtreme Gaming",
                "DarkPulse"
              ]}
            />

            <TournamentCard
              title="W StarLadder"
              targetDate="2026-03-07T18:00:00"
            />

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

      </div>
    </div>
  );
}