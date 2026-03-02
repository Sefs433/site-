"use client"

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Users, Trophy, Send, Star, Crown } from "lucide-react";

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
      <div className="text-2xl font-bold text-cyan-400">{title}</div>
      <Countdown targetDate={targetDate} />

      {group && open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
          className="pt-4 border-t border-white/10 space-y-2"
        >
          <div className="text-sm uppercase opacity-50">Группа A</div>
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
  const players = [
    { nick: "amullet 🇺🇦", role: "Rifler", kd: "1.35" },
    { nick: "s1per 🇷🇺", role: "Rifler", kd: "1.26" },
    { nick: "xinxed 🇷🇺", role: "Captain", kd: "1.12" },
    { nick: "kironixx 🇷🇺", role: "Rifler", kd: "1.15" },
    { nick: "for4ward 🇷🇺", role: "AWP", kd: "1.05" },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,255,200,0.15),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(0,255,200,0.08),transparent_40%)]" />

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
            <TournamentCard
              title="RIEM RIO"
              targetDate="2026-03-07T18:00:00"
              group={["1337 Team", "Xtreme Gaming", "DarkPulse"]}
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
            {players.map((player) => (
              <motion.div
                key={player.nick}
                whileHover={{ scale: 1.05 }}
                className="group relative rounded-3xl bg-white/5 p-6 backdrop-blur-xl border border-cyan-500/20 space-y-3 hover:border-cyan-400 transition overflow-hidden"
              >
                <div className="text-2xl font-bold">{player.nick}</div>
                <div className="opacity-60">{player.role}</div>

                {/* Hover K/D */}
                <div className="absolute inset-0 bg-black/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <div className="text-center">
                    <div className="text-cyan-400 text-sm uppercase opacity-60">
                      K/D за последние игры
                    </div>
                    <div className="text-4xl font-extrabold text-amber-400">
                      {player.kd}
                    </div>
                  </div>
                </div>
              </motion.div>
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
          </div>
        </section>

        {/* HALL OF FAME */}
        <section className="space-y-10">
          <h2 className="text-4xl font-bold flex items-center gap-3 text-cyan-400">
            <Crown /> Зал славы
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="rounded-3xl bg-white/5 p-6 border border-cyan-500/20 space-y-4">
              <div className="flex items-center gap-2 text-xl font-bold">
                <Trophy className="text-amber-400" /> Трофеи
              </div>
              <ul className="space-y-2 opacity-80">
                <li>🥇 1 место —</li>
                <li>🥈 2 место —</li>
                <li>🥉 3 место — W Cup 2</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-amber-500/10 to-cyan-500/10 p-6 border border-amber-400/40 space-y-4">
              <div className="flex items-center gap-2 text-xl font-bold text-amber-400">
                <Star /> Лучшие игроки команды
              </div>
              <div className="text-2xl font-extrabold">s1per</div>
              <div className="text-2xl font-extrabold">fonely</div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}