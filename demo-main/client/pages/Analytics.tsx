import { Layout } from "@/components/Layout";
import { MonthlyTrendChart } from "@/components/MonthlyTrendChart";
import { CategoryComparisonChart } from "@/components/CategoryComparisonChart";
import {
  TrendingUp,
  TrendingDown,
  Target,
  AlertCircle,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

export default function Analytics() {
  const analyticsCards = [
    {
      title: "Total Spent (6 months)",
      value: "₹176,550",
      change: "-5.2%",
      isPositive: true,
      icon: TrendingDown,
      bg: "bg-red-50 dark:bg-red-900/20",
      iconBg: "bg-red-100 dark:bg-red-900/30",
      iconColor: "text-red-600",
    },
    {
      title: "Average Monthly Spend",
      value: "₹29,425",
      change: "-3.1%",
      isPositive: true,
      icon: Target,
      bg: "bg-yellow-50 dark:bg-yellow-900/20",
      iconBg: "bg-yellow-100 dark:bg-yellow-900/30",
      iconColor: "text-yellow-600",
    },
    {
      title: "Total Savings (6 months)",
      value: "₹85,270",
      change: "+8.7%",
      isPositive: true,
      icon: TrendingUp,
      bg: "bg-green-50 dark:bg-green-900/20",
      iconBg: "bg-green-100 dark:bg-green-900/30",
      iconColor: "text-green-600",
    },
    {
      title: "Highest Spend Month",
      value: "₹32,100",
      change: "February",
      isPositive: false,
      icon: AlertCircle,
      bg: "bg-orange-50 dark:bg-orange-900/20",
      iconBg: "bg-orange-100 dark:bg-orange-900/30",
      iconColor: "text-orange-600",
    },
  ];

  const spendingByCategory = [
    { category: "Food & Dining", amount: 47800, percentage: 27.1, trend: "+12%" },
    {
      category: "Transportation",
      amount: 31500,
      percentage: 17.8,
      trend: "-3%",
    },
    {
      category: "Entertainment",
      amount: 22300,
      percentage: 12.6,
      trend: "+5%",
    },
    {
      category: "Utilities",
      amount: 22200,
      percentage: 12.6,
      trend: "+2%",
    },
    {
      category: "Subscriptions",
      amount: 26100,
      percentage: 14.8,
      trend: "+8%",
    },
    { category: "Other", amount: 26650, percentage: 15.1, trend: "-1%" },
  ];

  const anomalies = [
    {
      date: "March 13-15",
      event: "Unusual spending spike",
      amount: "₹8,500",
      category: "Food & Dining",
      severity: "high",
    },
    {
      date: "April 5",
      event: "High transaction count",
      amount: "12 transactions",
      category: "Multiple categories",
      severity: "medium",
    },
    {
      date: "May 22",
      event: "Duplicate transaction detected",
      amount: "₹499",
      category: "Entertainment",
      severity: "medium",
    },
  ];

  return (
    <Layout>
      <div className="p-8 space-y-8 animate-fade-in">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Analytics</h1>
          <p className="text-muted-foreground">
            Deep dive into your spending patterns and financial trends
          </p>
        </div>

        {/* Analytics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {analyticsCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className={`${card.bg} rounded-2xl p-6 shadow-md border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {card.title}
                    </p>
                    <h3 className="text-2xl font-bold text-foreground">
                      {card.value}
                    </h3>
                  </div>
                  <div className={`p-3 rounded-lg ${card.iconBg}`}>
                    <Icon className={`w-6 h-6 ${card.iconColor}`} />
                  </div>
                </div>
                <div className={`text-sm font-medium ${card.isPositive ? "text-green-600" : "text-red-600"}`}>
                  {card.isPositive ? "↓" : "↑"} {card.change}
                </div>
              </div>
            );
          })}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <MonthlyTrendChart />
          <CategoryComparisonChart />
        </div>

        {/* Spending by Category Table */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-md border border-slate-200 dark:border-slate-700">
          <h2 className="text-lg font-bold text-foreground mb-6">
            Spending Breakdown by Category
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">
                    Category
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-semibold text-muted-foreground uppercase">
                    Total (₹)
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-semibold text-muted-foreground uppercase">
                    % of Total
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-semibold text-muted-foreground uppercase">
                    Trend
                  </th>
                </tr>
              </thead>
              <tbody>
                {spendingByCategory.map((item, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                  >
                    <td className="px-4 py-4 font-medium text-foreground">
                      {item.category}
                    </td>
                    <td className="px-4 py-4 text-right text-foreground font-medium">
                      ₹{item.amount.toLocaleString()}
                    </td>
                    <td className="px-4 py-4 text-right text-muted-foreground">
                      <div className="flex items-center justify-end gap-2">
                        <div className="w-20 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-blue-500"
                            style={{ width: `${item.percentage}%` }}
                          />
                        </div>
                        <span className="font-medium">{item.percentage}%</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-right">
                      <span
                        className={`font-medium ${
                          item.trend.includes("+")
                            ? "text-red-600"
                            : "text-green-600"
                        }`}
                      >
                        {item.trend}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Anomalies Detected */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-md border border-slate-200 dark:border-slate-700">
          <h2 className="text-lg font-bold text-foreground mb-6">
            📊 Detected Anomalies
          </h2>

          <div className="space-y-4">
            {anomalies.map((anomaly, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-lg border-l-4 ${
                  anomaly.severity === "high"
                    ? "bg-red-50 dark:bg-red-900/20 border-red-500"
                    : "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-500"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground mb-1">
                      {anomaly.event}
                    </h3>
                    <div className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                      <p>
                        <span className="text-muted-foreground">Date:</span>{" "}
                        {anomaly.date}
                      </p>
                      <p>
                        <span className="text-muted-foreground">Category:</span>{" "}
                        {anomaly.category}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-foreground">
                      {anomaly.amount}
                    </p>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        anomaly.severity === "high"
                          ? "bg-red-200 dark:bg-red-800 text-red-800 dark:text-red-200"
                          : "bg-yellow-200 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-200"
                      }`}
                    >
                      {anomaly.severity === "high" ? "High" : "Medium"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Insights */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            💡 Key Financial Insights
          </h2>
          <ul className="space-y-3 text-slate-700 dark:text-slate-300">
            <li className="flex gap-3">
              <ArrowUpRight className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>
                Your income has increased by <strong>8.6%</strong> over the past
                6 months (₹42K to ₹46K)
              </span>
            </li>
            <li className="flex gap-3">
              <ArrowDownRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <span>
                Food & Dining is your largest expense category at{" "}
                <strong>27.1%</strong> of total spending
              </span>
            </li>
            <li className="flex gap-3">
              <TrendingUp className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>
                Your savings rate has improved to <strong>37.2%</strong> in May,
                up from 31.9% in January
              </span>
            </li>
            <li className="flex gap-3">
              <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
              <span>
                Subscription expenses are steady at <strong>₹4,350/month</strong>
                — consider reviewing unused services
              </span>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
