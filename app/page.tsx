"use client"

import { useState } from "react";
import { Users, Trophy, Crown, Send, Handshake } from "lucide-react";

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
  const [selectedTournament, setSelectedTournament] = useState("RIEM RIO");

  const players = [
    { nick: "amullet 🇺🇦", role: "Rifler", lvl: 8, kd: "1.35" },
    { nick: "s1per 🇷🇺", role: "Rifler", lvl: 8, kd: "1.26" },
    { nick: "xinxed 🇷🇺", role: "Captain", lvl: 9, kd: "1.12" },
    { nick: "kironixx 🇷🇺", role: "Rifler", lvl: 8, kd: "1.15" },
    { nick: "for4ward 🇷🇺", role: "AWP", lvl: 8, kd: "1.05" },
  ];

  const tournamentTables: any = {
    "RIEM RIO": [
      { team: "1337 Team", wins: 2, losses: 0 },
      { team: "Xtreme Gaming", wins: 1, losses: 1 },
      { team: "DarkPulse", wins: 0, losses: 2 },
    ],
    "W StarLadder": [
      { team: "1337 Team", wins: 0, losses: 0 },
      { team: "Team Nova", wins: 0, losses: 0 },
      { team: "Iron Wolves", wins: 0, losses: 0 },
    ],
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">

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
            <div className="mt-10 p-8 bg-[#111] border border-neutral-800 space-y-6">

              {/* выбор турнира */}
              <div className="flex gap-4">
                {Object.keys(tournamentTables).map((name) => (
                  <button
                    key={name}
                    onClick={() => setSelectedTournament(name)}
                    className={`px-4 py-2 border ${
                      selectedTournament === name
                        ? "bg-orange-500 text-black"
                        : "border-neutral-700"
                    }`}
                  >
                    {name}
                  </button>
                ))}
              </div>

              {/* таблица */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-neutral-700">
                      <th className="py-2">Команда</th>
                      <th>Победы</th>
                      <th>Поражения</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tournamentTables[selectedTournament].map(
                      (row: any, index: number) => (
                        <tr key={index} className="border-b border-neutral-800">
                          <td className="py-2">{row.team}</td>
                          <td>{row.wins}</td>
                          <td>{row.losses}</td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
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
              🎁 <span className="font-bold">БОНУСЫ ПО ПРОМОКОДУ 1337CS2</span>
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
                <li>🥇 1 место —</li>
                <li>🥈 2 место —</li>
                <li>🥉 3 место — W Cup 2</li>
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