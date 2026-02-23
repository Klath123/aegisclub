import React, { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import { StatsCard } from "../../components/dashboard/StatsCard";
import { DataTable } from "../../components/dashboard/DataTable";
import { DashboardNav } from "../../components/dashboard/DashboardNav";

const COLUMNS = [
    { key: "Full Name", label: "Name" },
    { key: "USN", label: "USN" },
    { key: "Email ID", label: "Email" },
    { key: "Phone Number", label: "Phone" },
    { key: "Department", label: "Dept" },
    { key: "Year of Study", label: "Year" },
];

const DecipherBlitz: React.FC = () => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            if (!supabase) return;
            const { data: rows, error } = await supabase.from("Decipher_Blitz").select("*");
            if (!error && rows) setData(rows);
            setLoading(false);
        }
        fetchData();
    }, []);

    const depts = new Set(data.map((r) => r["Department"])).size;
    const years = new Set(data.map((r) => r["Year of Study"])).size;

    return (
        <div className="min-h-screen bg-[#0a0a0f] text-white">
            <DashboardNav />
            <div className="max-w-screen-xl mx-auto px-6 py-10 space-y-8">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-1" style={{ fontFamily: '"Ikaros", sans-serif' }}>🔐 Decipher Blitz</h1>
                    <p className="text-white/40" style={{ fontFamily: '"Proza Libre", sans-serif' }}>SOLO · Table: Decipher_Blitz</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <StatsCard title="Total Registrations" value={loading ? "…" : data.length} icon="👤" color="bg-blue-500" />
                    <StatsCard title="Departments" value={loading ? "…" : depts} icon="🏫" color="bg-cyan-500" />
                    <StatsCard title="Year Groups" value={loading ? "…" : years} icon="📅" color="bg-indigo-500" />
                </div>
                {loading ? (
                    <p className="text-white/40 text-center py-20">Loading...</p>
                ) : (
                    <DataTable data={data} columns={COLUMNS} />
                )}
            </div>
        </div>
    );
};

export default DecipherBlitz;
