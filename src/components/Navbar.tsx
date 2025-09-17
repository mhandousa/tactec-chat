export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/30 border-b border-white/10">
      <div className="container max-w-6xl flex items-center justify-between py-3">
        <div className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/Tactec-2nd-lockup.png" alt="TacTec" className="h-10 w-auto" />
        </div>
        <nav className="text-sm md:text-base flex gap-4 md:gap-6 text-gray-300">
          <a href="#challenge" className="hover:text-white">Challenge</a>
          <a href="#solution" className="hover:text-white">Solution</a>
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#tech" className="hover:text-white">Tech</a>
          <a href="#start" className="hover:text-white">Get Started</a>
        </nav>
      </div>
    </header>
  );
}
