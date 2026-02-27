import React from "react";

interface StatsCardProps {
    title: string;
    value: number | string;
    icon: React.ReactNode;
    color: string; // Tailwind bg class e.g. "bg-blue-500"
}

export const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon, color }) => {
    return (
        <div className="glass-card rounded-xl p-5 flex items-center space-x-4 border border-white/10">
            <div className={`${color} p-3 rounded-lg text-white text-xl`}>
                {icon}
            </div>
            <div>
                <p className="text-white/50 text-sm font-medium" style={{ fontFamily: '"Proza Libre", sans-serif' }}>
                    {title}
                </p>
                <p className="text-white text-2xl font-bold" style={{ fontFamily: '"Ikaros", sans-serif' }}>
                    {value}
                </p>
            </div>
        </div>
    );
};
