import React, { useEffect, useState } from "react";
import MetricSection from "./MetricSection";

export default function Dashboard() {
  const [blocks, setBlocks] = useState([]);     // сюда придёт ответ API (массив массивов)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/home"); // благодаря proxy это уйдёт на FastAPI
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        setBlocks(json);
      } catch (e) {
        setError(e.message || "Ошибка загрузки");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) return <p>Загрузка…</p>;
  if (error)   return <p style={{ color: "crimson" }}>Ошибка: {error}</p>;

  // заголовки для твоих блоков (подгони под свою логику)
  const titles = [
    "🏎️ Fastest Selling Cars",
    "💰 Highest Profit Cars",
    "📈 Speed Comparison (Set A / Set B)",
    "⭐ Brand/Lineup Insights (A / B)"
  ];

  return (
    <div style={{ padding: "1rem 0" }}>
      {blocks.map((block, i) => {
        // бывает, что «блок» — это массив из двух списков метрик (например, [A, B])
        const isNested = Array.isArray(block[0]);
        if (isNested) {
          const [partA, partB] = block;
          return (
            <div key={i}>
              <MetricSection title={`${titles[i] || `Section ${i+1}`} — A`} data={partA} />
              <MetricSection title={`${titles[i] || `Section ${i+1}`} — B`} data={partB} />
            </div>
          );
        }
        // обычный список метрик
        return <MetricSection key={i} title={titles[i] || `Section ${i+1}`} data={block} />;
      })}
    </div>
  );
}
