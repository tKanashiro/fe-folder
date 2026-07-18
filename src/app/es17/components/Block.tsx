import { ReactNode } from "react";

interface BlockProps { children: ReactNode };

export function Block({ children }: BlockProps) {
    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm mb-6">
            {children}
        </div>
    )
}
