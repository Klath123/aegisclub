import React, { useState } from "react";

interface Column {
    key: string;
    label: string;
}

interface DataTableProps {
    data: Record<string, string>[];
    columns: Column[];
}

export const DataTable: React.FC<DataTableProps> = ({ data, columns }) => {
    const [search, setSearch] = useState("");

    const filtered = data.filter((row) =>
        Object.values(row).some((val) =>
            val?.toString().toLowerCase().includes(search.toLowerCase())
        )
    );

    return (
        <div className="space-y-4">
            {/* Search */}
            <input
                type="text"
                placeholder="Search registrations..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/30 focus:outline-none focus:border-blue-400 transition-colors"
                style={{ fontFamily: '"Proza Libre", sans-serif' }}
            />

            {/* Table */}
            <div className="overflow-x-auto rounded-xl border border-white/10">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="bg-white/10 border-b border-white/10">
                            <th className="px-4 py-3 text-left text-white/60 font-semibold">#</th>
                            {columns.map((col) => (
                                <th
                                    key={col.key}
                                    className="px-4 py-3 text-left text-white/60 font-semibold whitespace-nowrap"
                                    style={{ fontFamily: '"Proza Libre", sans-serif' }}
                                >
                                    {col.label}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.length === 0 ? (
                            <tr>
                                <td
                                    colSpan={columns.length + 1}
                                    className="px-4 py-10 text-center text-white/30"
                                >
                                    {search ? "No results found." : "No registrations yet."}
                                </td>
                            </tr>
                        ) : (
                            filtered.map((row, idx) => (
                                <tr
                                    key={idx}
                                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                                >
                                    <td className="px-4 py-3 text-white/40">{idx + 1}</td>
                                    {columns.map((col) => (
                                        <td
                                            key={col.key}
                                            className="px-4 py-3 text-white/80 whitespace-nowrap"
                                            style={{ fontFamily: '"Proza Libre", sans-serif' }}
                                        >
                                            {row[col.key] ?? "—"}
                                        </td>
                                    ))}
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            <p className="text-white/30 text-xs text-right">
                {filtered.length} of {data.length} registrations
            </p>
        </div>
    );
};
