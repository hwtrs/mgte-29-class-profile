"use client";

import { useEffect, useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
    // Use a simple state to trigger animation or just rely on CSS keyframes on mount
    return (
        <div className="page-transition-wrapper">
            {children}
        </div>
    );
}
