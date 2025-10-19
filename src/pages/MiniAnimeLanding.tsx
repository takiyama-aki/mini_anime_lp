import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Video, Calendar, Mail, ArrowRight, Clock, Info } from "lucide-react";

// 叩き台：1ファイルのシングルページ。Tailwind + shadcn/ui を使用。
// ここにサンプル動画が完成したら <video> / YouTube 埋め込みを差し替えてください。

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

function AnchorLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="text-sm md:text-base text-blue-600 hover:underline">
      {children}
    </a>
  );
}

export default function MiniAnimeLanding() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#" className="font-semibold text-lg md:text-xl tracking-tight">ミニアニメ制作事業</a>
          <nav className="hidden md:flex items-center gap-5">
            <AnchorLink href="#about">概要</AnchorLink>
            <AnchorLink href="#sample">サンプル</AnchorLink>
            <AnchorLink href="#tiers">リワード/工程</AnchorLink>
            <AnchorLink href="#faq">FAQ</AnchorLink>
            <AnchorLink href="#contact">問い合わせ</AnchorLink>
          </nav>
          <a href="#contact" className="md:hidden"><Mail className="w-5 h-5" /></a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-14 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
              新人アニメーターの育成と雇用を生む<br className="hidden md:block" />
              「オリジナル・ミニアニメ」制作プロジェクト
            </h1>
            <p className="mt-5 text-base md:text-lg text-gray-700">
              年内にサンプル1本を公開予定。完成に先立ち、叩き台となる公式ページを公開します。
              支援額に応じたリワードと制作工程を、透明性高くお知らせします。
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#tiers"><Button className="rounded-2xl px-6 py-5 text-base">リワードを見る</Button></a>
              <a href="#sample" className="inline-flex items-center gap-2 text-blue-600 hover:underline">
                <Video className="w-5 h-5" /> サンプルへ
              </a>
            </div>
            <div className="mt-6 text-xs text-gray-500 flex items-center gap-2">
              <Info className="w-4 h-4" /> 本ページは叩き台のため、文言・構成は今後更新されます。
            </div>
          </div>
          <div className="md:justify-self-end">
            <Card className="rounded-2xl shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                  <Calendar className="w-5 h-5" /> 進捗共有の基本方針
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm md:text-base text-gray-700 space-y-3">
                <p>・各リワードに応じた年数/回数で、リモート制作打ち合わせを実施（Zoom等）。</p>
                <p>・工程ごとの成果物（イメージボード、キャラデザ、背景、原画 等）を合意の範囲で共有。</p>
                <p>・制作スタイルの参考例は<a href="#style-sample" className="text-blue-600 hover:underline">こちら</a>に掲載予定。</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About */}
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
              <li className="flex items-start gap-2"><Check className="w-5 h-5 mt-0.5 flex-none" /> 長期的・段階的な制作進行で、学習と品質を両立</li>
              <li className="flex items-start gap-2"><Check className="w-5 h-5 mt-0.5 flex-none" /> 工程ごとの成果を丁寧にレビューし、透明性を確保</li>
              <li className="flex items-start gap-2"><Check className="w-5 h-5 mt-0.5 flex-none" /> 進捗は年数回のリモート打合せで共有</li>
              <li className="flex items-start gap-2"><Check className="w-5 h-5 mt-0.5 flex-none" /> スタイルの参考サンプルを公開予定</li>
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

      {/* Sample placeholder */}
      <section id="sample" className="border-t bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl md:text-3xl font-bold">サンプル（年内公開予定）</h2>
            <span className="inline-flex items-center gap-2 text-sm text-gray-600"><Clock className="w-4 h-4" /> 進行中</span>
          </div>
          <p className="mt-3 text-gray-700">完成次第、以下スペースに動画を掲載します（MP4/YouTube/Vimeo対応）。</p>
          <div className="mt-6 aspect-video w-full rounded-2xl bg-black/5 border flex items-center justify-center">
            <div className="text-center">
              <Video className="w-10 h-10 mx-auto mb-2" />
              <p className="text-sm text-gray-600">ここにサムネイル/埋め込みを表示</p>
            </div>
          </div>
          <p id="style-sample" className="mt-6 text-sm text-gray-600">スタイルの参考リンク：<a className="text-blue-600 hover:underline" href="#">[リンク]</a></p>
        </div>
      </section>

      {/* Tiers */}
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
                      <li key={i} className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5 flex-none" /> {c}</li>
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
                    <a href="#contact"><Button className="w-full rounded-xl">このリワードについて相談する <ArrowRight className="w-4 h-4 ml-1" /></Button></a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-sm text-gray-600 space-y-2">
            <p>※ 各工程はクリエイティブの性質上、前後/重複/取捨選択が発生する場合があります。</p>
            <p>※ 実制作のクレジット/権利関係、納品仕様（尺/解像度/コーデック等）は個別契約で合意。</p>
            <p>※ 参考スタイルリンク：
              <a className="text-blue-600 hover:underline ml-1" href="#">[リンク]</a>
              <a className="text-blue-600 hover:underline ml-3" href="#">[リンク]</a>
              <a className="text-blue-600 hover:underline ml-3" href="#">[リンク]</a>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold">FAQ</h2>
          <Accordion type="single" collapsible className="mt-6">
            <AccordionItem value="q1">
              <AccordionTrigger>支援後の返金は可能ですか？</AccordionTrigger>
              <AccordionContent>
                原則として返金不可ですが、制作不能・重大な遅延等、契約で定める条件に該当する場合は個別に協議します。
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2">
              <AccordionTrigger>サンプル映像の公開時期は？</AccordionTrigger>
              <AccordionContent>
                年内（2025年）に1本公開予定です。公開後、本ページに動画を掲載します。
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q3">
              <AccordionTrigger>クレジット表記は入りますか？</AccordionTrigger>
              <AccordionContent>
                支援プランに応じ、作品内/サイト内/資料内のいずれかにお名前・法人名を掲載可能です（匿名も可）。
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q4">
              <AccordionTrigger>法人/団体での相談は可能？</AccordionTrigger>
              <AccordionContent>
                可能です。請求書払い・NDA締結・制作体制拡張など、要件に合わせてご提案します。
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold">お問い合わせ / 企画相談</h2>
          <p className="mt-3 text-gray-700">ご関心をお持ちの方は、下記フォームよりご連絡ください。打合せ候補日・ご予算感・目的（個人/法人/教育など）を添えていただくとスムーズです。</p>

          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <Card className="md:col-span-2 rounded-2xl">
              <CardContent className="pt-6">
                <form onSubmit={(e) => { e.preventDefault(); alert(`送信: ${email}`); }} className="grid gap-4">
                  <div className="grid gap-2">
                    <label className="text-sm font-medium">メールアドレス</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border px-3 py-3 focus:outline-none focus:ring-2"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-medium">お問い合わせ内容</label>
                    <textarea
                      placeholder="ご相談内容・用途・希望時期など"
                      className="w-full rounded-xl border px-3 py-3 min-h-[140px] focus:outline-none focus:ring-2"
                      required
                    />
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>※ 実運用では送信先メール/APIを接続してください。</span>
                    <Button type="submit" className="rounded-xl">送信</Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Info className="w-5 h-5" /> 注意事項</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 space-y-2">
                <p>・工程/スケジュールは状況により変動。</p>
                <p>・掲載の名称・肩書は敬称略。クレジット表記の最終形は別途合意。</p>
                <p>・未成年の方は保護者の同意が必要です。</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-gray-600 grid md:grid-cols-2 gap-4 items-center">
          <div>© {new Date().getFullYear()} Mini Anime Project</div>
          <div className="justify-self-start md:justify-self-end flex items-center gap-4">
            <a href="#about" className="hover:underline">概要</a>
            <a href="#tiers" className="hover:underline">リワード/工程</a>
            <a href="#contact" className="hover:underline">問い合わせ</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
