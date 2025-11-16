import { Mail } from "lucide-react";
import { ReactNode } from "react";

function AnchorLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="text-sm md:text-base text-blue-600 hover:underline">
      {children}
    </a>
  );
}

export default function HeaderSection() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="font-semibold text-lg md:text-xl tracking-tight">
          ミニアニメ制作事業
        </a>
        <nav className="hidden md:flex items-center gap-5">
          <AnchorLink href="#about">概要</AnchorLink>
          <AnchorLink href="#sample">サンプル</AnchorLink>
          <AnchorLink href="#tiers">リワード/工程</AnchorLink>
          <AnchorLink href="#faq">FAQ</AnchorLink>
          <AnchorLink href="#contact">問い合わせ</AnchorLink>
        </nav>
        <a href="#contact" className="md:hidden">
          <Mail className="w-5 h-5" />
        </a>
      </div>
    </header>
  );
}
