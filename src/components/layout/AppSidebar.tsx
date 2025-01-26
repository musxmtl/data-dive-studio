import { Home, BarChart2, Upload, Settings, Menu } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Upload, label: "Upload Data", href: "/upload" },
  { icon: BarChart2, label: "Dashboard", href: "/dashboard" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export const AppSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={cn(
        "h-screen fixed left-0 top-0 z-40 flex flex-col glass",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex items-center justify-between p-4 border-b border-white/10">
        {!collapsed && <span className="text-xl font-bold">Analytics</span>}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 hover:bg-white/10 rounded-lg transition-colors"
        >
          <Menu size={20} />
        </button>
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="flex items-center space-x-2 p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <item.icon size={20} />
                {!collapsed && <span>{item.label}</span>}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};