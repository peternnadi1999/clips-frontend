import ProcessDashboard from "./components/ProcessDashboard";
import ConnectAccountsSection from "./components/ConnectAccountsSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-zinc-50 dark:bg-black px-4 py-8">
      <ProcessDashboard />
      <section className="w-full max-w-3xl px-4">
        <ConnectAccountsSection />
      </section>
    </div>
  );
}
