import React, { ReactNode } from "react";

function Container({ children }: { children: ReactNode }) {
  return (
    <div
      className="w-full min-h-screen bg-gradient-to-br from-gray-900
       via-gray-800 to-gray-700 text-slate-200"
    >
      {children}
    </div>
  );
}

export default Container;
