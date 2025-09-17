export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="container max-w-6xl py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/Tactec-Lock-1-2-1.png" alt="TacTec" className="h-10 w-auto" />
        <p className="text-gray-400 text-sm">© {new Date().getFullYear()} TacTec. All rights reserved.</p>
        <div className="flex gap-4 text-sm">
          <a href="/images/Client-Offering-Catalog1.png" target="_blank" className="underline">Catalog v1</a>
          <a href="/images/Client-Offering-Catalog-final.png" target="_blank" className="underline">Catalog (final)</a>
        </div>
      </div>
    </footer>
  );
}
