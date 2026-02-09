"use client";

import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isHome = pathname === "/";

    return (
        <div className={isHome ? "page-transition-wrapper home" : "page-transition-wrapper"}>
            {children}
        </div>
    );
}
