import React, { useEffect, useMemo, useState, useContext, createContext, useCallback } from "react";

/**
 * PutLocalApp.jsx — single file, localStorage-only
 * Fixes:
 *  - Robust load/merge so older localStorage (without `ui.selectedDate`) won’t crash
 *  - One-time migration to add missing keys
 */

export default function PutLocalApp({
    storageKey = "put.app.v1",
    initialTheme = "light",
    title = "PUT · Personal Upgradation Tracker",
}) {
    // ================== Styles ==================
    const styles = `
  .put-app{--bg:#F8FAFD; --surface:#FFFFFF; --ring:#E5EEF7; --text:#1B2945; --muted:#4B5565; --p:#00BFA6; --p2:#29B6F6}
  .put-app.dark{--bg:#0F172A; --surface:#0B1220; --ring:#1E293B; --text:#E6ECF5; --muted:#A8B2C2; --p:#1ADBC4; --p2:#5AD0FF}
  .put-app{background:var(--bg); color:var(--text); font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; min-height:100%; padding:16px}
  .put-wrap{max-width:1120px; margin:0 auto}
  .row{display:grid; gap:16px}
  .row-2{grid-template-columns:1fr 1fr}
  .row-3{grid-template-columns:2fr 1fr 1fr}
  .card{background:var(--surface); border:1px solid rgba(233,238,245,0.2); border-radius:16px; box-shadow:0 8px 24px rgba(20,30,70,0.06); padding:16px}
  .btn{border-radius:12px; padding:10px 14px; border:1px solid var(--ring); background:transparent; color:var(--text); cursor:pointer}
  .btn-primary{background:linear-gradient(135deg,var(--p),var(--p2)); color:#fff; border:none}
  .badge{border-radius:999px; padding:2px 8px; font-size:11px; display:inline-flex; align-items:center}
  .badge-phys{background:rgba(41,182,246,0.12); color:var(--p2)}
  .badge-nutri{background:rgba(255,183,77,0.12); color:#F59E0B}
  .text-muted{color:var(--muted)}
  .progress{height:8px; border-radius:999px; background:var(--ring); overflow:hidden}
  .progress > div{height:100%; background:linear-gradient(135deg, var(--p), var(--p2))}
  .ring{width:96px; height:96px; border-radius:999px; background:var(--ring); position:relative; overflow:hidden}
  .ring > .fill{position:absolute; left:0; right:0; bottom:0; background:linear-gradient(135deg, var(--p), var(--p2))}
  .heatcell{width:14px; height:14px; border-radius:4px; border:1px solid rgba(0,0,0,0.06)}
  .table{width:100%; border-collapse:collapse}
  .table th,.table td{border:1px solid #dfe6ef; padding:8px; text-align:left; font-size:13px}
  `;

    const todayKey = () => new Date().toISOString().slice(0, 10);

    // ================== Seed plan ==================
    const seedBlocks = [
        { id: "b1", time: "06:00", title: "Hydration", notes: "Lemon water + sea salt", score: 5 },
        { id: "b2", time: "06:30", title: "Breathing + Walk", notes: "15 min breath · Sunlight walk", score: 10 },
        { id: "b3", time: "08:00", title: "Gym / Core", notes: "Strength + abs", score: 20 },
        { id: "b4", time: "10:00", title: "Veg Juice", notes: "Beet+Carrot+Amla+Cucumber", score: 8, macros: { kcal: 160, p: 3, c: 35, f: 1, fi: 2 } },
        { id: "b5", time: "11:00", title: "Breakfast", notes: "Eggs + Spinach + Seeds", score: 12, macros: { kcal: 300, p: 25, c: 12, f: 17, fi: 6.5 } },
        { id: "b6", time: "13:00", title: "Lunch", notes: "Kabuli Chana + Veg + 3ml oil", score: 12, macros: { kcal: 350, p: 20, c: 38, f: 8, fi: 10 } },
        { id: "b7", time: "15:00", title: "Alt Juice", notes: "Dry Fruit (odd) / Pineapple-Papaya (even)", score: 8, macros: { kcal: 250, p: 6, c: 35, f: 12, fi: 2 } },
        { id: "b8", time: "16:30", title: "Dinner", notes: "Chicken 100g OR Fish 120g + 1/2 fruit", score: 15, macros: { kcal: 330, p: 30, c: 25, f: 5, fi: 3 } },
        { id: "b9", time: "17:30", title: "Walk + Reflection", notes: "Family time · Gratitude", score: 6 },
    ];

    // ================== Store / Context ==================
    const StoreCtx = createContext(null);
    const useStore = () => {
        const ctx = useContext(StoreCtx);
        if (!ctx) throw new Error("useStore must be used inside PutLocalApp");
        return ctx;
    };

    const defaultState = {
        theme: initialTheme === "dark" ? "dark" : "light",
        ui: { selectedDate: todayKey() },
        weights: {},
        goals: {},
        logs: {},
    };

    // Merge helper to survive old localStorage shapes
    const mergeState = (loaded) => {
        const safe = loaded && typeof loaded === "object" ? loaded : {};
        return {
            theme: safe.theme ?? defaultState.theme,
            ui: {
                selectedDate:
                    safe.ui && typeof safe.ui === "object" && typeof safe.ui.selectedDate === "string"
                        ? safe.ui.selectedDate
                        : todayKey(), // fallback
            },
            weights: safe.weights && typeof safe.weights === "object" ? safe.weights : {},
            goals: safe.goals && typeof safe.goals === "object" ? safe.goals : {},
            logs: safe.logs && typeof safe.logs === "object" ? safe.logs : {},
        };
    };

    const [state, setState] = useState(() => {
        try {
            const raw = localStorage.getItem(storageKey);
            return mergeState(raw ? JSON.parse(raw) : defaultState);
        } catch {
            return defaultState;
        }
    });

    // one-time migration if user had old storage without ui
    useEffect(() => {
        if (!state.ui || typeof state.ui.selectedDate !== "string") {
            setState((s) => mergeState(s));
        }
    }, []);

    // persist
    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(state));
    }, [state, storageKey]);

    // initialize weights/goals once
    useEffect(() => {
        setState((s) => {
            const w = { ...s.weights };
            const g = { ...s.goals };
            seedBlocks.forEach((b) => {
                if (w[b.id] == null) w[b.id] = b.score;
                if (g[b.id] == null) g[b.id] = b.id === "b3" ? 5 : 7;
            });
            return { ...s, weights: w, goals: g };
        });
    }, []);

    // actions
    const setTheme = useCallback((mode) => {
        setState((s) => ({ ...s, theme: mode === "dark" ? "dark" : "light" }));
    }, []);
    const setWeight = useCallback((id, val) => {
        setState((s) => ({ ...s, weights: { ...s.weights, [id]: Math.max(0, Math.round(Number(val) || 0)) } }));
    }, []);
    const setGoal = useCallback((id, val) => {
        setState((s) => ({ ...s, goals: { ...s.goals, [id]: Math.max(0, Math.round(Number(val) || 0)) } }));
    }, []);
    const setSelectedDate = useCallback((dateStr) => {
        setState((s) => ({ ...s, ui: { ...s.ui, selectedDate: dateStr } }));
    }, []);
    const toggle = useCallback((dateKeyStr, blockId, points) => {
        setState((s) => {
            const logs = { ...s.logs };
            const prevDay = s.logs[dateKeyStr] || {};
            const day = { ...prevDay };                        // clone the day object too
            const prev = day[blockId] || { done: false, score: 0 };
            const nextDone = !prev.done;

            day[blockId] = { done: nextDone, score: nextDone ? (points || 0) : 0 };
            logs[dateKeyStr] = day;                            // assign the cloned day
            return { ...s, logs };                             // new top-level object
        });
    }, []);


    const store = useMemo(
        () => ({ state, setTheme, setWeight, setGoal, setSelectedDate, toggle }),
        [state, setTheme, setWeight, setGoal, setSelectedDate, toggle]
    );

    // ================== UI bits ==================
    const stylesBg =
        state.theme === "light"
            ? "linear-gradient(135deg,#F0FBF8 0%,#F8FAFD 60%)"
            : "linear-gradient(135deg,#0A0F1A 0%,#0F172A 60%)";

    const Heatmap = ({ logs, days = 60 }) => {
        const total = seedBlocks.length;
        const cells = [];
        const today = new Date();
        for (let i = days - 1; i >= 0; i--) {
            const d = new Date(today);
            d.setDate(d.getDate() - i);
            const key = d.toISOString().slice(0, 10);
            const dayLogs = logs[key] || {};
            const done = Object.values(dayLogs).filter((v) => v.done).length;
            const ratio = total ? done / total : 0;
            cells.push({ key, ratio });
        }
        const styleFor = (r) => {
            if (!r) return { background: "var(--ring)" };
            const alpha = 0.2 + r * 0.8;
            return { background: "linear-gradient(135deg, var(--p), var(--p2))", opacity: alpha };
        };
        return (
            <div>
                <div className="text-muted" style={{ fontSize: 12, marginBottom: 6 }}>
                    Last {days} days
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(15,14px)", gap: 4 }}>
                    {cells.map((c) => (
                        <div key={c.key} className="heatcell" title={`${c.key}`} style={styleFor(c.ratio)} />
                    ))}
                </div>
            </div>
        );
    };

    const Dashboard = () => {
        const macros = useMemo(() => {
            return seedBlocks.reduce(
                (acc, b) => {
                    if (!b.macros) return acc;
                    acc.kcal += b.macros.kcal;
                    acc.p += b.macros.p;
                    acc.c += b.macros.c;
                    acc.f += b.macros.f;
                    acc.fi += b.macros.fi;
                    return acc;
                },
                { kcal: 0, p: 0, c: 0, f: 0, fi: 0 }
            );
        }, []);

        const ring = (label, value, target) => {
            const pct = Math.min(100, Math.round((value / target) * 100));
            return (
                <div className="card" style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <div className="ring">
                        <div className="fill" style={{ height: `${pct}%` }} />
                    </div>
                    <div>
                        <div style={{ fontSize: 14, fontWeight: 600 }}>{label}</div>
                        <div className="text-muted" style={{ fontSize: 12 }}>
                            {pct}%
                        </div>
                    </div>
                </div>
            );
        };

        const todayStr = new Date().toLocaleDateString(undefined, {
            weekday: "long",
            month: "short",
            day: "numeric",
        });

        return (
            <div className="row row-3">
                <div className="card" style={{ gridColumn: "1 / span 2" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div>
                            <div className="text-muted" style={{ fontSize: 13 }}>
                                {todayStr}
                            </div>
                            <div style={{ fontSize: 18, fontWeight: 700 }}>Good day, Vamshi</div>
                            <div className="text-muted" style={{ fontSize: 13 }}>
                                Stay consistent · Body + Mind in sync
                            </div>
                        </div>
                        <span className="badge badge-phys">Local-only · Auto-saved</span>
                    </div>
                </div>

                {ring("Physical", 27400, 30000)}
                {ring("Mind", 2.5, 3)}
                {ring("Nutrition", 1090, 1350)}

                <div className="card" style={{ gridColumn: "1 / span 2" }}>
                    <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>Streak Heatmap</div>
                    <Heatmap logs={state.logs} days={60} />
                </div>

                <div className="card">
                    <div style={{ fontSize: 14, fontWeight: 600 }}>Macros (planned)</div>
                    <div className="text-muted" style={{ fontSize: 12 }}>
                        {/* replace with real totals if you adjust meals */}
                        1140 kcal · P 64 · C 145 · F 35 · Fi 21.5
                    </div>
                </div>
            </div>
        );
    };

    const Tracker = () => {
        const { state, setSelectedDate, toggle } = useStore();
        const [rangeDays, setRangeDays] = useState(7);

        // ✅ Safe fallback if ui is missing for any reason
        const selected = state.ui?.selectedDate || todayKey();
        const dayLogs = state.logs[selected] || {};
        const weights = state.weights;
        const goals = state.goals;

        const rangeAgg = useMemo(() => {
            const end = new Date(selected);
            const start = new Date(selected);
            start.setDate(start.getDate() - (rangeDays - 1));
            const counts = {};
            seedBlocks.forEach((b) => (counts[b.id] = { count: 0, score: 0, title: b.title, goal: goals[b.id] || 0 }));
            let totalScore = 0;

            for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
                const k = d.toISOString().slice(0, 10);
                const day = state.logs[k] || {};
                Object.entries(day).forEach(([bid, val]) => {
                    if (val.done) {
                        counts[bid].count += 1;
                        counts[bid].score += val.score || 0;
                        totalScore += val.score || 0;
                    }
                });
            }
            return { start, end, counts, totalScore };
        }, [state.logs, selected, rangeDays, goals]);

        const shift = (n) => {
            const d = new Date(selected);
            d.setDate(d.getDate() + n);
            setSelectedDate(d.toISOString().slice(0, 10));
        };

        const exportCSV = () => {
            const end = new Date(selected);
            const start = new Date(selected);
            start.setDate(start.getDate() - (rangeDays - 1));
            const rows = [["date", "block_id", "block_title", "done", "score"]];
            for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
                const k = d.toISOString().slice(0, 10);
                const day = state.logs[k] || {};
                for (const b of seedBlocks) {
                    const v = day[b.id] || { done: false, score: 0 };
                    rows.push([k, b.id, b.title, v.done ? "1" : "0", String(v.score)]);
                }
            }
            const csv = rows.map((r) => r.map((x) => `"${String(x).replace(/"/g, '""')}"`).join(",")).join("\n");
            const blob = new Blob([csv], { type: "text/csv" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `put_logs_${rangeAgg.start.toISOString().slice(0, 10)}_${rangeAgg.end.toISOString().slice(0, 10)}.csv`;
            a.click();
            URL.revokeObjectURL(url);
        };

        const printPDF = () => {
            const w = window.open("", "_blank");
            if (!w) return;
            const counts = rangeAgg.counts;
            w.document.write(`<!doctype html><html><head><title>PUT Summary</title><style>
        body{font-family:Inter, system-ui, -apple-system, Segoe UI, Roboto; padding:24px}
        h1{font-size:18px;margin:0 0 8px}
        table{border-collapse:collapse;width:100%;font-size:12px}
        th,td{border:1px solid #dfe6ef;padding:8px;text-align:left}
      </style></head><body>`);
            w.document.write(
                `<h1>PUT Summary ${rangeAgg.start.toISOString().slice(0, 10)} → ${rangeAgg.end.toISOString().slice(0, 10)}</h1>`
            );
            w.document.write('<table><thead><tr><th>Item</th><th>Completed</th><th>Weekly Goal</th><th>Points</th></tr></thead><tbody>');
            seedBlocks.forEach((b) => {
                const c = counts[b.id];
                w.document.write(`<tr><td>${b.title}</td><td>${c.count}</td><td>${c.goal}</td><td>${c.score}</td></tr>`);
            });
            w.document.write(`</tbody></table><p><b>Total Score:</b> ${rangeAgg.totalScore} pts</p>`);
            w.document.write("</body></html>");
            w.document.close();
            w.focus();
            w.print();
        };

        return (
            <div className="row row-2">
                <div className="card">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                        <div className="text-lg" style={{ fontWeight: 600 }}>
                            Daily Tracker
                        </div>
                        <div style={{ display: "flex", gap: 8 }}>
                            <button className="btn" onClick={() => shift(-1)}>
                                ◀
                            </button>
                            <input
                                type="date"
                                value={selected}
                                onChange={(e) => setSelectedDate(e.target.value)}
                                className="btn"
                            />
                            <button className="btn" onClick={() => shift(+1)}>
                                ▶
                            </button>
                        </div>
                    </div>

                    <div>
                        {seedBlocks.map((b) => {
                            const checked = !!dayLogs[b.id]?.done;
                            const points = state.weights[b.id] ?? b.score;
                            return (
                                <div
                                    key={b.id}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 12,
                                        padding: "10px 0",
                                        borderTop: "1px solid rgba(0,0,0,0.05)",
                                    }}
                                >
                                    <input
                                        type="checkbox"
                                        checked={!!(state.logs[selected]?.[b.id]?.done)}
                                        onChange={() => toggle(selected, b.id, state.weights[b.id] ?? b.score)}
                                        style={{ cursor: "pointer" }}
                                    />
                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontSize: 14, fontWeight: 600 }}>
                                            {b.title}{" "}
                                            <span className="text-muted" style={{ fontSize: 12 }}>
                                                {" "}
                                                (+{points} pts)
                                            </span>
                                        </div>
                                        <div className="text-muted" style={{ fontSize: 12 }}>
                                            {b.notes}
                                        </div>
                                    </div>
                                    <span className={checked ? "badge badge-phys" : "badge badge-nutri"}>
                                        {checked ? "Done" : "Pending"}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="card">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                        <div className="text-lg" style={{ fontWeight: 600 }}>
                            Summary
                        </div>
                        <div style={{ display: "flex", gap: 8 }}>
                            <select className="btn" value={rangeDays} onChange={(e) => setRangeDays(Number(e.target.value))}>
                                <option value={7}>Last 7 days</option>
                                <option value={14}>Last 14 days</option>
                                <option value={30}>Last 30 days</option>
                            </select>
                            <button className="btn" onClick={exportCSV}>
                                Download CSV
                            </button>
                            <button className="btn btn-primary" onClick={printPDF}>
                                Print / Save PDF
                            </button>
                        </div>
                    </div>

                    <div style={{ display: "grid", gap: 10 }}>
                        {seedBlocks.map((b) => {
                            const c = rangeAgg.counts[b.id];
                            const met = c.count >= (c.goal || 0);
                            return (
                                <div key={b.id}>
                                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}>
                                        <div style={{ fontWeight: 600 }}>{b.title}</div>
                                        <div className="text-muted" style={{ fontSize: 12 }}>
                                            {c.count} / {rangeDays} days · {c.score} pts {met ? " · ✅ Goal met" : ""}
                                        </div>
                                    </div>
                                    <div className="progress">
                                        <div style={{ width: `${(c.count / rangeDays) * 100}%` }} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    };

    const Settings = () => {
        const { state, setTheme, setWeight, setGoal } = useStore();
        return (
            <div className="row">
                <div className="card">
                    <div className="text-lg" style={{ fontWeight: 600, marginBottom: 8 }}>
                        Appearance
                    </div>
                    <div className="text-muted" style={{ fontSize: 13, marginBottom: 10 }}>
                        Theme: {state.theme.toUpperCase()}
                    </div>
                    <div style={{ display: "flex", gap: 8 }}>
                        <button className="btn" onClick={() => setTheme("light")}>
                            Light
                        </button>
                        <button className="btn" onClick={() => setTheme("dark")}>
                            Dark
                        </button>
                    </div>
                </div>

                <div className="card">
                    <div className="text-lg" style={{ fontWeight: 600, marginBottom: 8 }}>
                        Scoring & Goals
                    </div>
                    <div className="text-muted" style={{ fontSize: 12, marginBottom: 10 }}>
                        Tune per-item points and weekly goals (auto-saved in your browser).
                    </div>
                    <div style={{ overflowX: "auto" }}>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Points</th>
                                    <th>Weekly Goal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {seedBlocks.map((b) => (
                                    <tr key={b.id}>
                                        <td>{b.title}</td>
                                        <td>
                                            <input
                                                type="number"
                                                style={{ width: 80 }}
                                                value={state.weights[b.id] ?? b.score}
                                                onChange={(e) => setWeight(b.id, e.target.value)}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="number"
                                                style={{ width: 80 }}
                                                value={state.goals[b.id] ?? (b.id === "b3" ? 5 : 7)}
                                                onChange={(e) => setGoal(b.id, e.target.value)}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    };

    const Plan = () => (
        <div className="card">
            <div className="text-lg" style={{ fontWeight: 600, marginBottom: 8 }}>
                Daily Plan Timeline
            </div>
            {seedBlocks.map((b) => (
                <div
                    key={b.id}
                    style={{
                        display: "flex",
                        gap: 12,
                        alignItems: "center",
                        padding: "10px 0",
                        borderTop: "1px solid rgba(0,0,0,0.05)",
                    }}
                >
                    <div className="text-muted" style={{ width: 56, fontSize: 12 }}>
                        {b.time}
                    </div>
                    <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 14, fontWeight: 600 }}>{b.title}</div>
                        <div className="text-muted" style={{ fontSize: 12 }}>
                            {b.notes}
                        </div>
                    </div>
                    {b.macros && (
                        <div className="card" style={{ padding: "6px 10px", fontSize: 12 }}>
                            {b.macros.kcal} kcal · P {b.macros.p} · C {b.macros.c} · F {b.macros.f} · Fi {b.macros.fi}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );

    // Tabs
    const [tab, setTab] = useState("dashboard");
    const bg = stylesBg;

    return (
        <StoreCtx.Provider value={store}>
            <div className={`put-app ${state.theme}`} style={{ background: bg }}>
                <style>{styles}</style>

                <div className="put-wrap">
                    {/* Top Bar */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "12px 0" }}>
                        <div style={{ color: "var(--p)", fontWeight: 700 }}>{title}</div>
                        <div style={{ display: "flex", gap: 8 }}>
                            <button className={`btn ${tab === "dashboard" ? "btn-primary" : ""}`} onClick={() => setTab("dashboard")}>
                                Dashboard
                            </button>
                            <button className={`btn ${tab === "plan" ? "btn-primary" : ""}`} onClick={() => setTab("plan")}>
                                Plan
                            </button>
                            <button className={`btn ${tab === "track" ? "btn-primary" : ""}`} onClick={() => setTab("track")}>
                                Track
                            </button>
                            <button className={`btn ${tab === "settings" ? "btn-primary" : ""}`} onClick={() => setTab("settings")}>
                                Settings
                            </button>
                            <ThemeToggle />
                        </div>
                    </div>

                    {tab === "dashboard" && <Dashboard />}
                    {tab === "plan" && <Plan />}
                    {tab === "track" && <Tracker />}
                    {tab === "settings" && <Settings />}

                    <div style={{ textAlign: "center", fontSize: 10, color: "var(--muted)", padding: "12px 0" }}>
                        Local-only prototype · Data saved in your browser (localStorage)
                    </div>
                </div>
            </div>
        </StoreCtx.Provider>
    );

    function ThemeToggle() {
        const { state, setTheme } = useStore();
        return (
            <button className="btn" onClick={() => setTheme(state.theme === "light" ? "dark" : "light")}>
                {state.theme === "light" ? "🌙 Dark" : "☀️ Light"}
            </button>
        );
    }
}
