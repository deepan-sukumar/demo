import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const categoryComparison = [
  { category: "Food", march: 8500, april: 7200, may: 6800 },
  { category: "Transport", march: 5200, april: 6100, may: 5500 },
  { category: "Entertainment", march: 3800, april: 4500, may: 3200 },
  { category: "Utilities", march: 4100, april: 4300, may: 4500 },
  { category: "Subscriptions", march: 5100, april: 5800, may: 5100 },
  { category: "Other", march: 1750, april: 3300, may: 1900 },
];

export function CategoryComparisonChart() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-md border border-slate-200 dark:border-slate-700">
      <h2 className="text-lg font-bold text-foreground mb-6">
        Category Comparison (3 Months)
      </h2>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={categoryComparison}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="category" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1e293b",
              border: "1px solid #475569",
              borderRadius: "8px",
            }}
          />
          <Legend />
          <Bar dataKey="march" fill="#3b82f6" radius={[8, 8, 0, 0]} />
          <Bar dataKey="april" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
          <Bar dataKey="may" fill="#06b6d4" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
