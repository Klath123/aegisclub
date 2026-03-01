import React, { useEffect, useState } from "react";
import { StatsCard } from "../../components/dashboard/StatsCard";
import { DataTable } from "../../components/dashboard/DataTable";
import { DashboardNav } from "../../components/dashboard/DashboardNav";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const COLUMNS = [
    { key: "Full Name",    label: "Name"  },
    { key: "USN",          label: "USN"   },
    { key: "Email ID",     label: "Email" },
    { key: "Phone Number", label: "Phone" },
    { key: "Department",   label: "Dept"  },
    { key: "Year of Study",label: "Year"  },
];

function flattenRow(reg: any) {
    const p = reg.participants?.[0] || {};
    return {
        "Full Name":     p.fullName,
        "USN":           p.usn,
        "Email ID":      p.email,
        "Phone Number":  reg.phoneNumber,
        "Department":    reg.department,
        "Year of Study": reg.yearOfStudy,
    };
}

const DecipherBlitz: React.FC = () => {
    const [data, setData]       = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError]     = useState<string | null>(null);

    useEffect(() => {
        fetch(`${API_BASE}/registrations/decipher-blitz`)
            .then((res) => res.json())
            .then((json) => {
                if (json.success) setData(json.data);
                else setError(json.message || "Failed to load data");
            })
            .catch(() => setError("Network error — could not reach the server"))
            .finally(() => setLoading(false));
    }, []);

    const rows  = data.map(flattenRow);
    const depts = new Set(data.map((r) => r.department)).size;
    const years = new Set(data.map((r) => r.yearOfStudy)).size;

    return (
        <div className="min-h-screen bg-[#0a0a0f] text-white">
            <DashboardNav />
            <div className="max-w-screen-xl mx-auto px-6 py-10 space-y-8">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-1" style={{ fontFamily: '"Ikaros", sans-serif' }}>🔐 Decipher Blitz</h1>
                    <p className="text-white/40" style={{ fontFamily: '"Proza Libre", sans-serif' }}>SOLO · Table: Decipher_Blitz</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <StatsCard title="Total Registrations" value={loading ? "…" : data.length} icon="👤" color="bg-blue-500"   />
                    <StatsCard title="Departments"          value={loading ? "…" : depts}       icon="🏫" color="bg-cyan-500"   />
                    <StatsCard title="Year Groups"          value={loading ? "…" : years}       icon="📅" color="bg-indigo-500" />
                </div>
                {error && <p className="text-red-400 text-center py-4">{error}</p>}
                {loading
                    ? <p className="text-white/40 text-center py-20">Loading...</p>
                    : <DataTable data={rows} columns={COLUMNS} />
                }
            </div>
        </div>
    );
};

export default DecipherBlitz;