import React from "react";
import Dashboard from "./components/Dashboard";
import "./App.css";

export default function App() {
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "1.5rem" }}>
      <h1 style={{ marginBottom: "1rem" }}>📊 My Dashboard</h1>
      <Dashboard />
    </div>
  );
}
