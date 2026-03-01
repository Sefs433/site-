import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Users, Trophy, Twitch, Send } from "lucide-react";

function Countdown({ targetDate }: { targetDate: string }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

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

      {/* FIXED TELEGRAM BUTTON DESKTOP */}
      <motion.a
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        href="https://t.me/team1337cs2"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:block fixed right-0 top-1/2 -translate-y-1/2 z-50 group"
      >
        <div className="flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-4 rounded-l-2xl shadow-2xl shadow-cyan-500/40 hover:shadow-cyan-400/60 transition-all duration-300">
          <Send className="w-5 h-5 text-white" />
          <span className="font-semibold text-white whitespace-nowrap">
            Связь с нами
          </span>
        </div>
      </motion.a>

      {/* FLOATING TELEGRAM BUTTON MOBILE */}
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        href="https://t.me/team1337cs2"
        target="_blank"
        rel="noopener noreferrer"
        className="md:hidden fixed bottom-6 right-6 z-50"
      >
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 shadow-2xl shadow-cyan-500/50 active:scale-95 transition-all duration-300">
          <Send className="w-6 h-6 text-white" />
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
            <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
              1337 <span className="text-blue-500">Team</span>
            </h1>
            <p className="text-lg opacity-70">
              Профессиональная киберспортивная организация. Играем. Побеждаем. Доминируем.
            </p>
            <button className="rounded-2xl px-8 py-6 text-lg shadow-xl bg-blue-600 hover:bg-blue-500 transition">
              Смотреть состав
            </button>
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
            <Trophy /> Ближайшие турниры
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:scale-[1.02] transition-transform p-8 flex flex-col gap-6">
              <div>
                <div className="text-2xl font-bold">W StarLadder</div>
                <div className="opacity-50">7 марта 2026</div>
              </div>
              <Countdown targetDate="2026-03-07T00:00:00" />
            </div>

            <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-cyan-500/20 hover:scale-[1.02] transition-transform p-8 flex flex-col gap-6">
              <div>
                <div className="text-2xl font-bold text-cyan-400">IEM Rio</div>
                <div className="opacity-50">7 марта 2026</div>
              </div>
              <Countdown targetDate="2026-03-07T00:00:00" />
            </div>
          </div>
        </section>

        {/* ROSTER */}
        <section className="space-y-14">
          <div className="space-y-10">
            <h2 className="text-4xl font-bold flex items-center gap-3">
              <Users /> Основной состав
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { nick: "amulet", lvl: 8, flag: "🇺🇦", role: "Rifler" },
                { nick: "xinxed", lvl: 9, flag: "🇷🇺", role: "Rifler", captain: true },
                
                { nick: "kironixx", lvl: 8, flag: "🇷🇺", role: "Rifler" },
                { nick: "s1per", lvl: 8, flag: "🇷🇺", role: "Rifler" },
                { nick: "for4ward", lvl: 8, flag: "🇷🇺", role: "AWP" },
              ].map((player, index) => (
                <motion.div
                  key={player.nick}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="rounded-3xl bg-gradient-to-br from-white/5 to-white/10 p-6 backdrop-blur-xl shadow-xl border border-white/10"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="text-2xl font-bold">{player.nick}</div>
                      {player.captain && (
                        <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full">
                          CAPTAIN
                        </span>
                      )}
                    </div>
                    <div className="text-lg">{player.flag}</div>
                  </div>

                  <div className="mt-4 flex items-center justify-between text-sm opacity-80">
                    <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">
                      {player.role}
                    </span>
                    <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full">
                      FACEIT {player.lvl} LVL
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* BENCH */}
          <div className="space-y-10">
            <h3 className="text-3xl font-bold opacity-80">🪑 Bench</h3>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { nick: "hulsey", lvl: 7, flag: "🇷🇺", role: "Rifler" },
                { nick: "winda", lvl: 8, flag: "🇷🇺", role: "Rifler" },
              ].map((player, index) => (
                <motion.div
                  key={player.nick}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  className="rounded-3xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-6 backdrop-blur-xl shadow-xl border border-cyan-500/20"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-xl font-bold">{player.nick}</div>
                    <div>{player.flag}</div>
                  </div>

                  <div className="mt-4 flex items-center justify-between text-sm opacity-80">
                    <span>{player.role}</span>
                    <span>FACEIT {player.lvl} LVL</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section className="space-y-10">
          <h2 className="text-4xl font-bold flex items-center gap-3">
            <Trophy /> Наши достижения
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl bg-white/5 backdrop-blur-xl p-6 border border-white/10">
              <div className="text-3xl font-extrabold text-blue-500">#2</div>
              <div className="text-xl font-bold mt-2">ESL League</div>
              <div className="opacity-50 text-sm">5 место — стабильный выход в плей-офф</div>
            </div>

            <div className="rounded-3xl bg-white/5 backdrop-blur-xl p-6 border border-white/10">
              <div className="text-3xl font-extrabold text-cyan-400">#3</div>
              <div className="text-xl font-bold mt-2">W CUP 5x5</div>
              <div className="opacity-50 text-sm">3 место — сильная игра против Tier-1</div>
            </div>
          </div>
        </section>

        {/* PARTNER 1Win */}
        <section className="space-y-10">
          <h2 className="text-4xl font-bold">Партнёр 1Win</h2>

          <div className="rounded-3xl bg-gradient-to-br from-blue-600/20 to-cyan-500/10 p-8 border border-blue-500/30 backdrop-blur-xl space-y-6">
            <div className="text-3xl font-extrabold">1Win</div>
            <div className="text-lg opacity-80">
              Наш промокод: <span className="text-blue-400 font-bold">1337CS2</span>
            </div>

            <div className="space-y-2 opacity-70">
              <div>— 500% бонус к первым 4 депозитам</div>
              <div>— 500 фриспинов на первые четыре депозита</div>
              <div>— и другие бонусы для комфортного старта</div>
            </div>

            <a
              href="https://1wfetj.life/v3/landing-page/cyber?p=2gci"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="rounded-2xl px-8 py-6 text-lg shadow-xl bg-blue-600 hover:bg-blue-500 transition">
                Перейти к 1Win
              </button>
            </a>
          </div>
        </section>

        {/* SOCIALS */}
        <section className="space-y-10">
          <h2 className="text-4xl font-bold">Наши соцсети</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="https://www.twitch.tv/f0w4rdd"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl bg-gradient-to-br from-purple-600/20 to-purple-400/10 p-8 border border-purple-500/30 backdrop-blur-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/40"
            >
              <div className="flex items-center gap-4">
                <Twitch className="w-10 h-10 text-purple-400 group-hover:text-purple-300 transition-colors" />
                <div>
                  <div className="text-2xl font-bold">Twitch</div>
                  <div className="opacity-60 mt-1">twitch.tv/f0w4rdd</div>
                </div>
              </div>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              href="https://t.me/team1337cs2"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl bg-gradient-to-br from-cyan-600/20 to-blue-400/10 p-8 border border-cyan-500/30 backdrop-blur-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/40"
            >
              <div className="flex items-center gap-4">
                <Send className="w-10 h-10 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <div>
                  <div className="text-2xl font-bold">Telegram</div>
                  <div className="opacity-60 mt-1">t.me/team1337cs2</div>
                </div>
              </div>
            </motion.a>
          </div>
        </section>

        {/* ACADEMY */}
        <section className="space-y-10">
          <h2 className="text-4xl font-bold flex items-center gap-3">
            <Users /> Академический состав
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { nick: "LeV1sY", role: "Опен" },
              { nick: "Mezagy", role: "Рифл" },
              { nick: "Dezmoral", role: "AWP" },
              { nick: "TwiZzy", role: "Люрк" },
              { nick: "Klimen1245", role: "IGL" },
            ].map((player) => (
              <motion.div
                key={player.nick}
                whileHover={{ scale: 1.05 }}
                className="rounded-3xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-6 backdrop-blur-xl shadow-xl border border-cyan-500/20"
              >
                <div className="text-2xl font-bold">{player.nick}</div>
                <div className="opacity-60">{player.role}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <section className="text-center opacity-40 pt-20 border-t border-white/10">
          © 2026 1337 Team — CS2 • FACEIT • 1Win Partner
        </section>
      </div>
    </div>
  );
}
