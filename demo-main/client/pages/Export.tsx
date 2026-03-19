import { Layout } from "@/components/Layout";
import { Download, FileText, Database, Calendar } from "lucide-react";
import { useState } from "react";

export default function Export() {
  const [selectedFormat, setSelectedFormat] = useState<"excel" | "csv" | "pdf">(
    "excel"
  );
  const [exportScope, setExportScope] = useState<"single" | "combined">(
    "combined"
  );

  const handleDownload = () => {
    alert(
      `Downloading as ${selectedFormat.toUpperCase()} (${exportScope === "combined" ? "All files combined" : "Single file"})`
    );
  };

  const uploadedFiles = [
    {
      id: 1,
      name: "Jan_Week1.pdf",
      date: "12 Mar 2026",
      transactions: 24,
    },
    {
      id: 2,
      name: "Feb_Statement.pdf",
      date: "10 Feb 2026",
      transactions: 31,
    },
    {
      id: 3,
      name: "Jan_Complete.pdf",
      date: "5 Feb 2026",
      transactions: 28,
    },
  ];

  const previewSections = [
    {
      title: "Transactions Sheet",
      description: "All extracted transactions with date, amount, and category",
      icon: FileText,
    },
    {
      title: "Chart of Accounts",
      description: "Complete CoA mapping with account codes and balances",
      icon: Database,
    },
    {
      title: "Journal Entries",
      description: "Double-entry bookkeeping format with debits and credits",
      icon: Calendar,
    },
  ];

  return (
    <Layout>
      <div className="p-8 space-y-8 animate-fade-in">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Export</h1>
          <p className="text-muted-foreground">
            Download your financial data in multiple formats
          </p>
        </div>

        {/* Export Options */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Format Selection */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-md border border-slate-200 dark:border-slate-700">
            <h2 className="text-lg font-bold text-foreground mb-6">
              📁 Export Format
            </h2>

            <div className="space-y-3 mb-6">
              {[
                {
                  value: "excel",
                  label: "Excel (.xlsx)",
                  description: "Recommended for spreadsheet analysis",
                },
                {
                  value: "csv",
                  label: "CSV (.csv)",
                  description: "Universal format, compatible with all tools",
                },
                {
                  value: "pdf",
                  label: "PDF Report (.pdf)",
                  description: "Professional report with charts and summaries",
                },
              ].map((format) => (
                <label
                  key={format.value}
                  className="flex items-center p-4 border border-slate-200 dark:border-slate-700 rounded-lg cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                >
                  <input
                    type="radio"
                    name="format"
                    value={format.value}
                    checked={selectedFormat === format.value}
                    onChange={(e) =>
                      setSelectedFormat(e.target.value as "excel" | "csv" | "pdf")
                    }
                    className="w-4 h-4 text-blue-600 cursor-pointer"
                  />
                  <div className="ml-4 flex-1">
                    <p className="font-medium text-foreground">{format.label}</p>
                    <p className="text-sm text-muted-foreground">
                      {format.description}
                    </p>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Scope Selection */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-md border border-slate-200 dark:border-slate-700">
            <h2 className="text-lg font-bold text-foreground mb-6">
              📂 Export Scope
            </h2>

            <div className="space-y-3 mb-6">
              {[
                {
                  value: "combined",
                  label: "All Files Combined",
                  description: "Export transactions from all uploads together",
                  files: uploadedFiles.length,
                },
                {
                  value: "single",
                  label: "Single File",
                  description: "Export from a specific uploaded file",
                  files: 1,
                },
              ].map((scope) => (
                <label
                  key={scope.value}
                  className="flex items-center p-4 border border-slate-200 dark:border-slate-700 rounded-lg cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                >
                  <input
                    type="radio"
                    name="scope"
                    value={scope.value}
                    checked={exportScope === scope.value}
                    onChange={(e) =>
                      setExportScope(e.target.value as "single" | "combined")
                    }
                    className="w-4 h-4 text-blue-600 cursor-pointer"
                  />
                  <div className="ml-4 flex-1">
                    <p className="font-medium text-foreground">{scope.label}</p>
                    <p className="text-sm text-muted-foreground">
                      {scope.description}
                    </p>
                  </div>
                  <span className="text-sm font-bold text-blue-600">
                    {scope.files} file{scope.files !== 1 ? "s" : ""}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Download Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Ready to Export?
              </h2>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                {exportScope === "combined"
                  ? `Export all ${uploadedFiles.length} files as ${selectedFormat.toUpperCase()}`
                  : `Export selected file as ${selectedFormat.toUpperCase()}`}
              </p>
              <p className="text-sm text-muted-foreground">
                Your file will be downloaded with all transactions, analytics,
                and reports.
              </p>
            </div>
            <button
              onClick={handleDownload}
              className="ml-4 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2 whitespace-nowrap"
            >
              <Download className="w-5 h-5" />
              Download
            </button>
          </div>
        </div>

        {/* File Selection for Single Export */}
        {exportScope === "single" && (
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-md border border-slate-200 dark:border-slate-700">
            <h2 className="text-lg font-bold text-foreground mb-6">
              Select File to Export
            </h2>

            <div className="space-y-3">
              {uploadedFiles.map((file) => (
                <label
                  key={file.id}
                  className="flex items-center p-4 border border-slate-200 dark:border-slate-700 rounded-lg cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                >
                  <input
                    type="radio"
                    name="file"
                    defaultChecked={file.id === 1}
                    className="w-4 h-4 text-blue-600 cursor-pointer"
                  />
                  <div className="ml-4 flex-1">
                    <p className="font-medium text-foreground">{file.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {file.date} • {file.transactions} transactions
                    </p>
                  </div>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Preview Sections */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">
            📋 What's Included in Export
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {previewSections.map((section, idx) => {
              const Icon = section.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-md border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">
                      {section.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {section.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sample Data Preview */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-md border border-slate-200 dark:border-slate-700">
          <h2 className="text-lg font-bold text-foreground mb-6">
            Sample Transactions to Export
          </h2>

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
                  <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">
                    Account
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    date: "15 Mar 2026",
                    desc: "Spotify Subscription",
                    debit: 0,
                    credit: 149,
                    account: "5201 - Subscriptions",
                  },
                  {
                    date: "14 Mar 2026",
                    desc: "BigMart Groceries",
                    debit: 2450,
                    credit: 0,
                    account: "5101 - Food & Dining",
                  },
                  {
                    date: "13 Mar 2026",
                    desc: "Salary Deposit",
                    debit: 15000,
                    credit: 0,
                    account: "4001 - Salary Income",
                  },
                  {
                    date: "12 Mar 2026",
                    desc: "Uber - Travel",
                    debit: 350,
                    credit: 0,
                    account: "5301 - Transportation",
                  },
                  {
                    date: "11 Mar 2026",
                    desc: "Restaurant",
                    debit: 750,
                    credit: 0,
                    account: "5101 - Food & Dining",
                  },
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                  >
                    <td className="px-4 py-4 text-muted-foreground whitespace-nowrap">
                      {row.date}
                    </td>
                    <td className="px-4 py-4 font-medium text-foreground">
                      {row.desc}
                    </td>
                    <td className="px-4 py-4 text-right">
                      {row.debit > 0 ? (
                        <span className="text-red-600 dark:text-red-400 font-medium">
                          ₹{row.debit.toLocaleString()}
                        </span>
                      ) : (
                        <span className="text-muted-foreground">-</span>
                      )}
                    </td>
                    <td className="px-4 py-4 text-right">
                      {row.credit > 0 ? (
                        <span className="text-green-600 dark:text-green-400 font-medium">
                          ₹{row.credit.toLocaleString()}
                        </span>
                      ) : (
                        <span className="text-muted-foreground">-</span>
                      )}
                    </td>
                    <td className="px-4 py-4 text-sm">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">
                        {row.account}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 text-sm text-muted-foreground">
            Sample showing journal entry format with account codes from Chart of
            Accounts
          </div>
        </div>
      </div>
    </Layout>
  );
}
