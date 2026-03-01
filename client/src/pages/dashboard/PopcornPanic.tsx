import React, { useEffect, useState } from "react";
import { StatsCard } from "../../components/dashboard/StatsCard";
import { DataTable } from "../../components/dashboard/DataTable";
import { DashboardNav } from "../../components/dashboard/DashboardNav";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const COLUMNS = [
    { key: "Full Name",    label: "Team Leader" },
    { key: "USN",          label: "USN"         },
    { key: "Email ID",     label: "Email"        },
    { key: "Phone Number", label: "Phone"        },
    { key: "Department",   label: "Dept"         },
    { key: "Year of Study",label: "Year"         },
    { key: "Team Name",    label: "Team Name"    },
    { key: "Full Name-2",  label: "Member 2"     },
    { key: "USN-2",        label: "USN 2"        },
    { key: "Full Name-3",  label: "Member 3"     },
    { key: "USN-3",        label: "USN 3"        },
];

function flattenRow(reg: any) {
    const flat: any = {
        "Phone Number":  reg.phoneNumber,
        "Department":    reg.department,
        "Year of Study": reg.yearOfStudy,
        "Team Name":     reg.teamName,
    };
    (reg.participants || []).forEach((p: any, i: number) => {
        const suffix = i === 0 ? "" : `-${i + 1}`;
        flat[`Full Name${suffix}`] = p.fullName;
        flat[`USN${suffix}`]       = p.usn;
        flat[`Email ID${suffix}`]  = p.email;
    });
    return flat;
}

const PopcornPanic: React.FC = () => {
    const [data, setData]       = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError]     = useState<string | null>(null);

    useEffect(() => {
        fetch(`${API_BASE}/registrations/popcorn-panic`)
            .then((res) => res.json())
            .then((json) => {
                if (json.success) setData(json.data);
                else setError(json.message || "Failed to load data");
            })
            .catch(() => setError("Network error — could not reach the server"))
            .finally(() => setLoading(false));
    }, []);

    const rows  = data.map(flattenRow);
    const teams = new Set(data.map((r) => r.teamName)).size;
    const depts = new Set(data.map((r) => r.department)).size;

    return (
        <div className="min-h-screen bg-[#0a0a0f] text-white">
            <DashboardNav />
            <div className="max-w-screen-xl mx-auto px-6 py-10 space-y-8">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-1" style={{ fontFamily: '"Ikaros", sans-serif' }}>🍿 Popcorn Panic</h1>
                    <p className="text-white/40" style={{ fontFamily: '"Proza Libre", sans-serif' }}>GROUP · Team Size 3 · Table: Popcorn_Panic</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <StatsCard title="Total Registrations" value={loading ? "…" : data.length} icon="👥" color="bg-red-500"    />
                    <StatsCard title="Total Teams"         value={loading ? "…" : teams}       icon="🏆" color="bg-pink-500"   />
                    <StatsCard title="Departments"         value={loading ? "…" : depts}       icon="🏫" color="bg-orange-500" />
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

export default PopcornPanic;