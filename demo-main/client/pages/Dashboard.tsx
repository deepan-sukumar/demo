import { Layout } from "@/components/Layout";
import { IncomeExpenseChart } from "@/components/IncomeExpenseChart";
import { NetBalanceTrendChart } from "@/components/NetBalanceTrendChart";
import { ExpenseCategoryChart, categoryData } from "@/components/ExpenseCategoryChart";
import {
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Lightbulb,
} from "lucide-react";

export default function Dashboard() {
  // Mock data
  const summaryCards = [
    {
      label: "Total Income",
      value: "₹45,320",
      trend: "+12.5%",
      isPositive: true,
      icon: TrendingUp,
    },
    {
      label: "Total Expense",
      value: "₹28,450",
      trend: "+8.2%",
      isPositive: false,
      icon: TrendingDown,
    },
    {
      label: "Net Profit",
      value: "₹16,870",
      trend: "+18.3%",
      isPositive: true,
      icon: TrendingUp,
    },
    {
      label: "Savings Rate",
      value: "37.2%",
      trend: "+2.1%",
      isPositive: true,
      icon: TrendingUp,
    },
  ];

  const insights = [
    {
      icon: Lightbulb,
      title: "Spending Pattern",
      description:
        "Food expenses increased by 22% compared to last upload. Consider meal planning.",
    },
    {
      icon: TrendingUp,
      title: "Savings Success",
      description:
        "Your savings rate is above average. Keep up the good financial discipline!",
    },
    {
      icon: AlertTriangle,
      title: "Subscription Alert",
      description:
        "Subscriptions account for 18% of total expenses (₹5,100). Review unused services.",
    },
  ];

  const alerts = [
    {
      type: "warning",
      title: "Spending Spike Detected",
      description:
        "Food spending increased by 35% on March 12-14. This is unusual for you.",
    },
    {
      type: "alert",
      title: "Duplicate Transaction Found",
      description:
        'Netflix ₹499 appears twice on March 15. Possible duplicate charge detected.',
    },
    {
      type: "warning",
      title: "Balance Mismatch",
      description:
        "Account balance discrepancy of ₹250 detected on March 20. Please verify.",
    },
  ];

  return (
    <Layout>
      <div className="p-8 space-y-8 animate-fade-in">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's your financial overview.
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {summaryCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-slate-200 dark:border-slate-700"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {card.label}
                    </p>
                    <h3 className="text-3xl font-bold text-foreground">
                      {card.value}
                    </h3>
                  </div>
                  <div
                    className={`p-3 rounded-lg ${
                      card.isPositive
                        ? "bg-green-100 dark:bg-green-900/30"
                        : "bg-red-100 dark:bg-red-900/30"
                    }`}
                  >
                    <Icon
                      className={`w-6 h-6 ${
                        card.isPositive ? "text-green-600" : "text-red-600"
                      }`}
                    />
                  </div>
                </div>
                <div
                  className={`text-sm font-medium ${
                    card.isPositive ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {card.trend} from last month
                </div>
              </div>
            );
          })}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <IncomeExpenseChart />
          <NetBalanceTrendChart />
        </div>

        {/* Category Breakdown and Pie Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ExpenseCategoryChart />

          {/* Category Breakdown Table */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-md border border-slate-200 dark:border-slate-700">
            <h2 className="text-lg font-bold text-foreground mb-6">
              Breakdown by Category
            </h2>
            <div className="space-y-4">
              {categoryData.map((category, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: category.fill }}
                    />
                    <span className="text-sm font-medium text-foreground">
                      {category.name}
                    </span>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-foreground">
                      ₹{category.value.toLocaleString()}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {(
                        (category.value /
                          categoryData.reduce((sum, c) => sum + c.value, 0)) *
                        100
                      ).toFixed(1)}
                      %
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Insights Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">
            🧠 AI Financial Insights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {insights.map((insight, idx) => {
              const Icon = insight.icon;
              return (
                <div
                  key={idx}
                  className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex gap-4">
                    <Icon className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground mb-2">
                        {insight.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        {insight.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Alerts & Anomalies Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">
            ⚠️ Alerts & Anomalies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {alerts.map((alert, idx) => (
              <div
                key={idx}
                className={`rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 ${
                  alert.type === "warning"
                    ? "bg-orange-50 dark:bg-orange-900/20 border-orange-500"
                    : "bg-red-50 dark:bg-red-900/20 border-red-500"
                }`}
              >
                <div className="flex gap-4">
                  <AlertTriangle
                    className={`w-6 h-6 flex-shrink-0 mt-1 ${
                      alert.type === "warning"
                        ? "text-orange-600"
                        : "text-red-600"
                    }`}
                  />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">
                      {alert.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      {alert.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
