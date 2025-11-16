import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Info, Video } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 py-14 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            新人アニメーターの育成と雇用を生む
            <br className="hidden md:block" />
            「オリジナル・ミニアニメ」制作プロジェクト
          </h1>
          <p className="mt-5 text-base md:text-lg text-gray-700">
            年内にサンプル1本を公開予定。完成に先立ち、叩き台となる公式ページを公開します。
            支援額に応じたリワードと制作工程を、透明性高くお知らせします。
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#tiers">
              <Button className="rounded-2xl px-6 py-5 text-base">リワードを見る</Button>
            </a>
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
              <p>
                ・制作スタイルの参考例は
                <a href="#style-sample" className="text-blue-600 hover:underline">
                  こちら
                </a>
                に掲載予定。
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
