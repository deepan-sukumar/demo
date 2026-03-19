import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const categoryData = [
  { name: "Food", value: 8500, fill: "#3b82f6" },
  { name: "Transportation", value: 5200, fill: "#06b6d4" },
  { name: "Entertainment", value: 3800, fill: "#8b5cf6" },
  { name: "Utilities", value: 4100, fill: "#ec4899" },
  { name: "Other", value: 6850, fill: "#f59e0b" },
];

export function ExpenseCategoryChart() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-md border border-slate-200 dark:border-slate-700">
      <h2 className="text-lg font-bold text-foreground mb-6">
        Expense Categories
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={categoryData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, value }) => `${name}: ₹${value.toLocaleString()}`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {categoryData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export { categoryData };
