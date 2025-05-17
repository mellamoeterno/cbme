import MobileLayout from "@/components/MobileLayout";
import DesktopLayout from "@/components/DesktopLayout";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <MobileLayout />
      <DesktopLayout />
    </main>
  );
};