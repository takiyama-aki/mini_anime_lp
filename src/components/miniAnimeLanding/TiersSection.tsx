import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Check } from "lucide-react";

const steps1000 = [
  "① 1年目：企画相談",
  "② 2年目：イメージボード・ラフ",
  "③ 3年目：イメージボード完成",
  "④ 4年目：キャラクターデザイン",
  "⑤ 5年目：背景美術",
  "⑥ 6年目：レイアウト・原画",
  "⑦ 7年目：作監修正",
  "⑧ 8年目：動画・動画検査",
  "⑨ 9年目：仕上げ・色彩設計",
  "⑩ 10年目：撮影・ミニアニメ完成",
];

const steps2000 = [
  "1年目：企画相談・イメージボード・ラフ",
  "2年目：イメージボード完成・キャラクターデザイン",
  "3年目：背景美術・レイアウト/原画",
  "4年目：作監修正・動画/動画検査",
  "5年目：仕上げ/色彩設計・撮影・完成",
];

const steps5000 = [
  "1年目：企画相談・ラフ・完成ボード・キャラデザ・背景美術",
  "2年目：レイアウト/原画・作監修正・動画/検査・仕上げ/色設・撮影・完成",
];

const steps10000 = [
  "1年内：企画相談・ラフ・完成ボード・キャラデザ・背景美術・レイアウト/原画・作監修正・動画/検査・仕上げ/色設・撮影・完成",
];

const tiers = [
  {
    price: "$1,000",
    title: "オリジナル・ミニアニメ制作・10%（1年目/企画相談まで）",
    freq: "2025年以降、$1,000以上の支援向けリワード",
    checks: [
      "美術監督・船隠雄貴（『忘却バッテリー』）の背景美術",
      "新人アニメーターの雇用・育成を目的",
      "年1回のリモート制作打合せで進捗確認",
    ],
    steps: steps1000,
    meetings: "年1回",
    id: "tier-1000",
  },
  {
    price: "$2,000",
    title: "オリジナル・ミニアニメ制作・20%（1年目/イメージボード・ラフまで）",
    freq: "2025年以降、$2,000以上の支援向けリワード",
    checks: [
      "美術監督・船隠雄貴（『忘却バッテリー』）の背景美術",
      "新人アニメーターの雇用・育成を目的",
      "年2回のリモート制作打合せで進捗確認",
    ],
    steps: steps2000,
    meetings: "年2回",
    id: "tier-2000",
  },
  {
    price: "$5,000",
    title: "オリジナル・ミニアニメ制作・50%（1年目/背景美術まで）",
    freq: "2025年以降、$5,000以上の支援向けリワード",
    checks: [
      "美術監督・船隠雄貴（『忘却バッテリー』）の背景美術",
      "新人アニメーターの雇用・育成を目的",
      "年5回のリモート制作打合せで進捗確認",
    ],
    steps: steps5000,
    meetings: "年5回",
    id: "tier-5000",
  },
  {
    price: "$10,000",
    title: "オリジナル・ミニアニメ制作（1年/完成まで）",
    freq: "2025年以降、$10,000以上の支援向けリワード",
    checks: [
      "美術監督・船隠雄貴（『忘却バッテリー』）の背景美術",
      "新人アニメーターの雇用・育成を目的",
      "年10回のリモート制作打合せで進捗確認",
    ],
    steps: steps10000,
    meetings: "年10回",
    id: "tier-10000",
  },
];

export default function TiersSection() {
  return (
    <section id="tiers" className="border-t">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold">支援リワード & 制作工程</h2>
        <p className="mt-3 text-gray-700">支援額に応じて進行割合/面談回数が異なります。各カードを開いて、詳細な工程をご確認ください。</p>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {tiers.map((t) => (
            <Card key={t.id} id={t.id} className="rounded-2xl shadow-sm">
              <CardHeader className="space-y-2">
                <div className="flex items-baseline justify-between gap-3">
                  <CardTitle className="text-xl font-bold">{t.price}</CardTitle>
                  <span className="text-xs text-gray-500">面談：{t.meetings}</span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{t.title}</p>
                <p className="text-xs text-gray-500">{t.freq}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="grid gap-2 text-sm">
                  {t.checks.map((c, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 mt-0.5 flex-none" /> {c}
                    </li>
                  ))}
                </ul>
                <Accordion type="single" collapsible>
                  <AccordionItem value="steps">
                    <AccordionTrigger>工程の内訳</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-5 text-sm space-y-1">
                        {t.steps.map((s, i) => (
                          <li key={i}>{s}</li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <div className="pt-1">
                  <a href="#contact">
                    <Button className="w-full rounded-xl">
                      このリワードについて相談する <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-sm text-gray-600 space-y-2">
          <p>※ 各工程はクリエイティブの性質上、前後/重複/取捨選択が発生する場合があります。</p>
          <p>※ 実制作のクレジット/権利関係、納品仕様（尺/解像度/コーデック等）は個別契約で合意。</p>
          <p>
            ※ 参考スタイルリンク：
            <a className="text-blue-600 hover:underline ml-1" href="#">
              [リンク]
            </a>
            <a className="text-blue-600 hover:underline ml-3" href="#">
              [リンク]
            </a>
            <a className="text-blue-600 hover:underline ml-3" href="#">
              [リンク]
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
