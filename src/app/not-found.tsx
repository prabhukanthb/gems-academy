import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";

export default function NotFound() {
  return (
    <SiteShell>
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <h1 className="font-display text-3xl font-bold text-[#0d355f]">
          Page not found
        </h1>
        <p className="font-telugu mt-1 text-[#3a5a7a]">పేజీ కనుగొనబడలేదు</p>
        <Link
          href="/"
          className="mt-8 rounded-full bg-[#1a4f8a] px-6 py-3 text-white"
        >
          Back to GEMS · GEMS కు తిరిగి
        </Link>
      </div>
    </SiteShell>
  );
}
