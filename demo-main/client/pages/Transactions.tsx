import { Layout } from "@/components/Layout";
import { Upload, Download, Trash2, Eye, Search } from "lucide-react";
import { useState } from "react";

export default function Transactions() {
  const [uploadedFiles, setUploadedFiles] = useState<
    {
      id: number;
      name: string;
      date: string;
      status: "Processing" | "Processed";
      transactionCount: number;
    }[]
  >([
    {
      id: 1,
      name: "Jan_Week1.pdf",
      date: "12 Mar 2026",
      status: "Processed",
      transactionCount: 24,
    },
    {
      id: 2,
      name: "Feb_Statement.pdf",
      date: "10 Feb 2026",
      status: "Processed",
      transactionCount: 31,
    },
    {
      id: 3,
      name: "Jan_Complete.pdf",
      date: "5 Feb 2026",
      status: "Processed",
      transactionCount: 28,
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [draggingOver, setDraggingOver] = useState(false);

  const transactions = [
    {
      date: "15 Mar 2026",
      description: "Spotify Subscription",
      debit: 0,
      credit: 149,
      balance: 19351,
      category: "Entertainment",
    },
    {
      date: "14 Mar 2026",
      description: "Grocery Store - BigMart",
      debit: 2450,
      credit: 0,
      balance: 19500,
      category: "Food & Dining",
    },
    {
      date: "14 Mar 2026",
      description: "ATM Withdrawal",
      debit: 5000,
      credit: 0,
      balance: 21950,
      category: "Cash",
    },
    {
      date: "13 Mar 2026",
      description: "Netflix Subscription",
      debit: 0,
      credit: 499,
      balance: 26950,
      category: "Entertainment",
    },
    {
      date: "13 Mar 2026",
      description: "Salary Deposit - ABC Corp",
      debit: 15000,
      credit: 0,
      balance: 26451,
      category: "Income",
    },
    {
      date: "12 Mar 2026",
      description: "Uber - Travel",
      debit: 350,
      credit: 0,
      balance: 11451,
      category: "Transportation",
    },
    {
      date: "11 Mar 2026",
      description: "Restaurant - FoodCourt",
      debit: 750,
      credit: 0,
      balance: 11801,
      category: "Food & Dining",
    },
    {
      date: "10 Mar 2026",
      description: "Electricity Bill Payment",
      debit: 1200,
      credit: 0,
      balance: 12551,
      category: "Utilities",
    },
  ];

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDraggingOver(true);
  };

  const handleDragLeave = () => {
    setDraggingOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDraggingOver(false);
    // Handle file upload
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const newFile = {
        id: uploadedFiles.length + 1,
        name: files[0].name,
        date: new Date().toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }),
        status: "Processing" as const,
        transactionCount: 0,
      };
      setUploadedFiles([newFile, ...uploadedFiles]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const newFile = {
        id: uploadedFiles.length + 1,
        name: files[0].name,
        date: new Date().toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }),
        status: "Processing" as const,
        transactionCount: 0,
      };
      setUploadedFiles([newFile, ...uploadedFiles]);
    }
  };

  const handleDelete = (id: number) => {
    setUploadedFiles(uploadedFiles.filter((f) => f.id !== id));
  };

  const filteredTransactions = transactions.filter(
    (t) =>
      t.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <div className="p-8 space-y-8 animate-fade-in">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Transactions
          </h1>
          <p className="text-muted-foreground">
            Upload bank statements and manage your transactions
          </p>
        </div>

        {/* Upload Section */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-md border border-slate-200 dark:border-slate-700">
          <h2 className="text-lg font-bold text-foreground mb-6">
            📂 Upload Bank Statement
          </h2>

          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-xl p-12 text-center transition-all duration-300 ${
              draggingOver
                ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                : "border-slate-300 dark:border-slate-600 hover:border-blue-400"
            }`}
          >
            <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Drag and drop your statement here
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              or click to browse
            </p>
            <label className="inline-block">
              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png,.xlsx,.csv"
                onChange={handleFileInput}
                className="hidden"
              />
              <button className="px-6 py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors">
                Select File
              </button>
            </label>
            <p className="text-xs text-muted-foreground mt-4">
              Supported: PDF, JPG, PNG, Excel (CSV)
            </p>
          </div>
        </div>

        {/* Upload History */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-md border border-slate-200 dark:border-slate-700">
          <h2 className="text-lg font-bold text-foreground mb-6">
            📅 Upload History
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">
                    File Name
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">
                    Upload Date
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">
                    Transactions
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {uploadedFiles.map((file) => (
                  <tr
                    key={file.id}
                    className="border-b border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                  >
                    <td className="px-4 py-4 font-medium text-foreground">
                      {file.name}
                    </td>
                    <td className="px-4 py-4 text-muted-foreground">
                      {file.date}
                    </td>
                    <td className="px-4 py-4 text-muted-foreground">
                      {file.transactionCount > 0
                        ? file.transactionCount
                        : "Processing..."}
                    </td>
                    <td className="px-4 py-4">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                          file.status === "Processed"
                            ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                            : "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400"
                        }`}
                      >
                        {file.status === "Processed" ? "✓ " : "↻ "}
                        {file.status}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors" title="View">
                          <Eye className="w-4 h-4 text-muted-foreground" />
                        </button>
                        <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors" title="Download Excel">
                          <Download className="w-4 h-4 text-muted-foreground" />
                        </button>
                        <button
                          onClick={() => handleDelete(file.id)}
                          className="p-2 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4 text-red-500" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Extracted Transactions */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-md border border-slate-200 dark:border-slate-700">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-foreground">
              📊 Extracted Transactions
            </h2>
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search transactions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-700 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">
                    Date
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">
                    Description
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-semibold text-muted-foreground uppercase">
                    Debit (₹)
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-semibold text-muted-foreground uppercase">
                    Credit (₹)
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-semibold text-muted-foreground uppercase">
                    Balance (₹)
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">
                    Category
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredTransactions.map((transaction, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                  >
                    <td className="px-4 py-4 text-muted-foreground whitespace-nowrap">
                      {transaction.date}
                    </td>
                    <td className="px-4 py-4 font-medium text-foreground">
                      {transaction.description}
                    </td>
                    <td className="px-4 py-4 text-right">
                      {transaction.debit > 0 ? (
                        <span className="text-red-600 dark:text-red-400 font-medium">
                          ₹{transaction.debit.toLocaleString()}
                        </span>
                      ) : (
                        <span className="text-muted-foreground">-</span>
                      )}
                    </td>
                    <td className="px-4 py-4 text-right">
                      {transaction.credit > 0 ? (
                        <span className="text-green-600 dark:text-green-400 font-medium">
                          ₹{transaction.credit.toLocaleString()}
                        </span>
                      ) : (
                        <span className="text-muted-foreground">-</span>
                      )}
                    </td>
                    <td className="px-4 py-4 text-right text-foreground font-medium">
                      ₹{transaction.balance.toLocaleString()}
                    </td>
                    <td className="px-4 py-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">
                        {transaction.category}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 text-sm text-muted-foreground">
            Showing {filteredTransactions.length} of {transactions.length}{" "}
            transactions
          </div>
        </div>
      </div>
    </Layout>
  );
}
