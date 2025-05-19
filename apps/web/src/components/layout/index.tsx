import { Geist, Geist_Mono } from "next/font/google";
import clsx from "clsx";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";

ModuleRegistry.registerModules([AllCommunityModule]);

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={clsx(
        geistSans.className,
        geistMono.className,
        "min-h-screen w-screen flex flex-col"
      )}
    >
      {children}
    </div>
  );
};
