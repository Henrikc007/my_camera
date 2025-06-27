// SidebarLayout.js
import React, { useState } from "react";
import AboutHenrik from "./pages/aboutpage/AboutHenrik";
import Cloverimageapp from "./pages/cloverapp/Cloverimageapp"
const tabs = [
  { id: "hjem", label: "Hjem" },
  { id: "neuralnet", label: "Neurale Netværk" },
  { id: "cloverapp", label: "Kløver app" },
  { id: "settings", label: "Settings" },
  { id: "help", label: "Help" },
];

export default function SidebarLayout() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "sans-serif" }}>
      {/* Sidebar */}
      <aside style={{ width: "200px", backgroundColor: "#f3f4f6", padding: "1rem", borderRight: "1px solid #ddd" }}>
        {tabs.map((tab) => (
          <div key={tab.id}>
            <button
              onClick={() => setActiveTab(tab.id)}
              style={{
                width: "100%",
                padding: "0.5rem 1rem",
                margin: "0.2rem 0",
                textAlign: "left",
                backgroundColor: activeTab === tab.id ? "#e5e7eb" : "transparent",
                border: "none",
                cursor: "pointer",
                fontWeight: activeTab === tab.id ? "bold" : "normal",
              }}
            >
              {tab.label}
            </button>
          </div>
        ))}
      </aside>

      {/* Main content */}
      <main style={{ flex: 1, padding: "2rem", backgroundColor: "#fafafa" }}>
        <h1 style={{ fontSize: "1.5rem" }}>
          {activeTab === "hjem" && <AboutHenrik /> }
          {activeTab === "neuralnet" && "Your Profile"}
          {activeTab === "cloverapp" && <Cloverimageapp/>}
          {activeTab === "settings" && "Settings"}
          {activeTab === "help" && "Help & Support"}
        </h1>
      </main>
    </div>
  );
}
