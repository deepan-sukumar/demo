import { Layout } from "@/components/Layout";
import { useState } from "react";
import {
  User,
  DollarSign,
  Moon,
  Sun,
  Bell,
  Lock,
  Trash2,
  ChevronRight,
  Check,
} from "lucide-react";

export default function SettingsPage() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [currency, setCurrency] = useState("INR");
  const [notifications, setNotifications] = useState(true);
  const [twoFactor, setTwoFactor] = useState(false);

  const settingsSections = [
    {
      title: "Account",
      icon: User,
      items: [
        {
          label: "Email Address",
          value: "dhanu.pranesh@example.com",
          type: "text",
        },
        { label: "Full Name", value: "Dhanu Pranesh", type: "text" },
        { label: "Account Created", value: "March 1, 2026", type: "text" },
      ],
    },
    {
      title: "Preferences",
      icon: DollarSign,
      items: [
        {
          label: "Default Currency",
          value: currency,
          type: "select",
          options: ["INR", "USD", "EUR", "GBP"],
        },
        {
          label: "Theme",
          value: theme === "light" ? "Light Mode" : "Dark Mode",
          type: "select",
          options: ["Light Mode", "Dark Mode"],
        },
      ],
    },
    {
      title: "Security",
      icon: Lock,
      items: [
        {
          label: "Two-Factor Authentication",
          type: "toggle",
          value: twoFactor,
        },
        {
          label: "Last Login",
          value: "Today at 2:45 PM",
          type: "text",
        },
      ],
    },
  ];

  return (
    <Layout>
      <div className="p-8 max-w-4xl animate-fade-in">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-2">Settings</h1>
          <p className="text-base text-muted-foreground">
            Manage your account and preferences
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-700 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-3xl font-bold text-white">DP</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  Dhanu Pranesh
                </h2>
                <p className="text-sm text-muted-foreground">
                  Premium Member • Active
                </p>
              </div>
            </div>
            <button className="px-6 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg transition-colors">
              Edit Profile
            </button>
          </div>
        </div>

        {/* Settings Sections */}
        <div className="space-y-6">
          {/* Account Settings */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="px-8 py-6 border-b border-slate-200 dark:border-slate-700 flex items-center gap-3">
              <User className="w-5 h-5 text-slate-600 dark:text-slate-400" />
              <h3 className="text-lg font-semibold text-foreground">Account</h3>
            </div>
            <div className="divide-y divide-slate-200 dark:divide-slate-700">
              <div className="px-8 py-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Email Address
                  </p>
                  <p className="text-base text-foreground mt-1">
                    dhanu.pranesh@example.com
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-400" />
              </div>
              <div className="px-8 py-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Full Name
                  </p>
                  <p className="text-base text-foreground mt-1">Dhanu Pranesh</p>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-400" />
              </div>
              <div className="px-8 py-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Member Since
                  </p>
                  <p className="text-base text-foreground mt-1">
                    March 1, 2026
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Preferences Settings */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="px-8 py-6 border-b border-slate-200 dark:border-slate-700 flex items-center gap-3">
              <DollarSign className="w-5 h-5 text-slate-600 dark:text-slate-400" />
              <h3 className="text-lg font-semibold text-foreground">
                Preferences
              </h3>
            </div>
            <div className="divide-y divide-slate-200 dark:divide-slate-700">
              {/* Currency Selection */}
              <div className="px-8 py-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Default Currency
                  </p>
                  <p className="text-base text-foreground mt-1">{currency}</p>
                </div>
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-transparent border-none outline-none cursor-pointer"
                >
                  <option>INR</option>
                  <option>USD</option>
                  <option>EUR</option>
                  <option>GBP</option>
                </select>
              </div>

              {/* Theme Selection */}
              <div className="px-8 py-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Appearance
                  </p>
                  <p className="text-base text-foreground mt-1">
                    {theme === "light" ? "Light Mode" : "Dark Mode"}
                  </p>
                </div>
                <div className="flex items-center gap-3 bg-slate-100 dark:bg-slate-700 rounded-lg p-1">
                  <button
                    onClick={() => setTheme("light")}
                    className={`p-2 rounded-md transition-colors ${
                      theme === "light"
                        ? "bg-white dark:bg-slate-600 text-yellow-600"
                        : "text-slate-500 dark:text-slate-400"
                    }`}
                  >
                    <Sun className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setTheme("dark")}
                    className={`p-2 rounded-md transition-colors ${
                      theme === "dark"
                        ? "bg-white dark:bg-slate-600 text-blue-600"
                        : "text-slate-500 dark:text-slate-400"
                    }`}
                  >
                    <Moon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Security Settings */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="px-8 py-6 border-b border-slate-200 dark:border-slate-700 flex items-center gap-3">
              <Lock className="w-5 h-5 text-slate-600 dark:text-slate-400" />
              <h3 className="text-lg font-semibold text-foreground">Security</h3>
            </div>
            <div className="divide-y divide-slate-200 dark:divide-slate-700">
              {/* Two-Factor Authentication */}
              <div className="px-8 py-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Two-Factor Authentication
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                    {twoFactor ? "Enabled" : "Disabled"}
                  </p>
                </div>
                <button
                  onClick={() => setTwoFactor(!twoFactor)}
                  className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                    twoFactor
                      ? "bg-green-500 dark:bg-green-600"
                      : "bg-slate-300 dark:bg-slate-600"
                  }`}
                >
                  <span
                    className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                      twoFactor ? "translate-x-7" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              {/* Last Login */}
              <div className="px-8 py-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Last Login
                  </p>
                  <p className="text-base text-foreground mt-1">
                    Today at 2:45 PM
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs font-medium">
                  <span className="w-2 h-2 bg-green-600 rounded-full" />
                  Active Now
                </span>
              </div>

              {/* Change Password */}
              <div className="px-8 py-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Password
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                    Last changed 2 months ago
                  </p>
                </div>
                <button className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                  Change
                </button>
              </div>
            </div>
          </div>

          {/* Notifications Settings */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="px-8 py-6 border-b border-slate-200 dark:border-slate-700 flex items-center gap-3">
              <Bell className="w-5 h-5 text-slate-600 dark:text-slate-400" />
              <h3 className="text-lg font-semibold text-foreground">
                Notifications
              </h3>
            </div>
            <div className="divide-y divide-slate-200 dark:divide-slate-700">
              <div className="px-8 py-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Email Notifications
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                    {notifications
                      ? "Enabled"
                      : "Disabled"} • Receive alerts and insights
                  </p>
                </div>
                <button
                  onClick={() => setNotifications(!notifications)}
                  className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                    notifications
                      ? "bg-blue-500 dark:bg-blue-600"
                      : "bg-slate-300 dark:bg-slate-600"
                  }`}
                >
                  <span
                    className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                      notifications ? "translate-x-7" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
              <div className="px-8 py-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Transaction Alerts
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                    Enabled • Receive alerts for large transactions
                  </p>
                </div>
                <Check className="w-5 h-5 text-green-600" />
              </div>
            </div>
          </div>

          {/* Data Management */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="px-8 py-6 border-b border-slate-200 dark:border-slate-700 flex items-center gap-3">
              <Trash2 className="w-5 h-5 text-slate-600 dark:text-slate-400" />
              <h3 className="text-lg font-semibold text-foreground">
                Data Management
              </h3>
            </div>
            <div className="divide-y divide-slate-200 dark:divide-slate-700">
              <div className="px-8 py-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Export Data
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                    Download all your data in JSON format
                  </p>
                </div>
                <button className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                  Export
                </button>
              </div>
              <div className="px-8 py-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Clear Cache
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                    Free up storage space
                  </p>
                </div>
                <button className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                  Clear
                </button>
              </div>
              <div className="px-8 py-4 flex items-center justify-between hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                <div>
                  <p className="text-sm font-medium text-red-600 dark:text-red-400">
                    Delete Account
                  </p>
                  <p className="text-xs text-red-500 dark:text-red-500 mt-1">
                    Permanently delete your account and data
                  </p>
                </div>
                <button className="text-sm font-medium text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors">
                  Delete
                </button>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">About</h3>
            <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex justify-between items-center">
                <span>App Version</span>
                <span className="font-medium text-foreground">1.0.0</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Build Number</span>
                <span className="font-medium text-foreground">2026.01.01</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Last Updated</span>
                <span className="font-medium text-foreground">
                  March 19, 2026
                </span>
              </div>
              <div className="pt-4 border-t border-slate-200 dark:border-slate-700 mt-4">
                <p className="text-xs text-slate-500 dark:text-slate-500 text-center">
                  Made with ❤️ by LedgerLens Team
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Logout Button */}
        <div className="mt-8 mb-4">
          <button className="w-full px-6 py-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg font-medium hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors">
            Logout
          </button>
        </div>
      </div>
    </Layout>
  );
}
