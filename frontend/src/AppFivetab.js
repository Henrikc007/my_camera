import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Home as HomeIcon,
  User as UserIcon,
  MessageSquare as MessageIcon,
  Settings as SettingsIcon,
  HelpCircle as HelpIcon,
} from "lucide-react";

const tabs = [
  { id: "home", label: "Home", icon: <HomeIcon size={20} /> },
  { id: "profile", label: "Profile", icon: <UserIcon size={20} /> },
  { id: "messages", label: "Messages", icon: <MessageIcon size={20} /> },
  { id: "settings", label: "Settings", icon: <SettingsIcon size={20} /> },
  { id: "help", label: "Help", icon: <HelpIcon size={20} /> },
];

export default function SidebarLayout() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r shadow-lg">
        <nav className="flex flex-col p-4 space-y-2">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className="relative"
              onClick={() => setActiveTab(tab.id)}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="sidebar-highlight"
                  className="absolute inset-y-0 left-0 w-1 bg-blue-500 rounded-tr-lg rounded-br-lg"
                />
              )}
              <button
                className={`flex items-center w-full space-x-3 p-2 rounded-lg transition-colors hover:bg-gray-100  \$
                  {activeTab === tab.id ? "bg-gray-100 font-medium" : "text-gray-600"}
                `}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-50">
        <Card className="rounded-2xl shadow-md p-6">
          <CardContent>
            {activeTab === "home" && <h1 className="text-xl">Welcome to Home</h1>}
            {activeTab === "profile" && <h1 className="text-xl">Your Profile</h1>}
            {activeTab === "messages" && <h1 className="text-xl">Your Messages</h1>}
            {activeTab === "settings" && <h1 className="text-xl">Settings</h1>}
            {activeTab === "help" && <h1 className="text-xl">Help & Support</h1>}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}