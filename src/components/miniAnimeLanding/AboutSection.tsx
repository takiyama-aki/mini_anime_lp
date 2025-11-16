import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="border-t">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2">
          <h2 className="text-2xl md:text-3xl font-bold">【ミニアニメ/制作事業について】</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            本プロジェクトは、新人アニメーターの雇用と育成を目的に、
            オリジナルの短尺アニメーション（ミニアニメ）を段階的に制作する取り組みです。
            美術監督・<span className="font-semibold">船隠雄貴</span>（『忘却バッテリー』）の背景美術のもと、
            支援者の皆さまとともに、時間をかけて一作を仕上げます。
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm md:text-base">
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 mt-0.5 flex-none" /> 長期的・段階的な制作進行で、学習と品質を両立
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 mt-0.5 flex-none" /> 工程ごとの成果を丁寧にレビューし、透明性を確保
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 mt-0.5 flex-none" /> 進捗は年数回のリモート打合せで共有
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 mt-0.5 flex-none" /> スタイルの参考サンプルを公開予定
            </li>
          </ul>
        </div>
        <div>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-lg md:text-xl">運営からのメモ</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-2">
              <p>・価格表記はUSD想定。日本円表示や税込/税別表記は後日追記。</p>
              <p>・実名/クレジット表記の扱い、利用規約/著作権の範囲は別途ページ化。</p>
              <p>・決済手段、返金ポリシー、納期遅延の取り扱いも明記予定。</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
