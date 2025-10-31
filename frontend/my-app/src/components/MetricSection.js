import React from "react";

export default function MetricSection({ title, data }) {
  if (!data || data.length === 0) {
    return (
      <div style={{ margin: "1.5rem 0" }}>
        <h2 style={{ marginBottom: ".5rem" }}>{title}</h2>
        <p style={{ color: "#777" }}>Нет данных</p>
      </div>
    );
  }

  const headers = Object.keys(data[0]);

  return (
    <div style={{ margin: "1.5rem 0" }}>
      <h2 style={{ marginBottom: ".5rem" }}>{title}</h2>
      <div style={{ overflowX: "auto", border: "1px solid #eee", borderRadius: 8 }}>
        <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 500 }}>
          <thead>
            <tr>
              {headers.map((h) => (
                <th
                  key={h}
                  style={{ textAlign: "left", padding: "10px", borderBottom: "1px solid #eee", background: "#fafafa" }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i} style={{ borderBottom: "1px solid #f3f3f3" }}>
                {headers.map((h) => (
                  <td key={h} style={{ padding: "10px" }}>
                    {/* простое форматирование чисел/денег по ключу */}
                    {typeof row[h] === "number" ? row[h].toLocaleString() : String(row[h])}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
