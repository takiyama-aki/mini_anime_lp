export default function FooterSection() {
  return (
    <footer className="border-t">
      <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-gray-600 grid md:grid-cols-2 gap-4 items-center">
        <div>© {new Date().getFullYear()} Mini Anime Project</div>
        <div className="justify-self-start md:justify-self-end flex items-center gap-4">
          <a href="#about" className="hover:underline">
            概要
          </a>
          <a href="#tiers" className="hover:underline">
            リワード/工程
          </a>
          <a href="#contact" className="hover:underline">
            問い合わせ
          </a>
        </div>
      </div>
    </footer>
  );
}
