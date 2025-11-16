import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info } from "lucide-react";

export default function ContactSection() {
  const [email, setEmail] = useState("");

  return (
    <section id="contact" className="border-t">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold">お問い合わせ / 企画相談</h2>
        <p className="mt-3 text-gray-700">
          ご関心をお持ちの方は、下記フォームよりご連絡ください。打合せ候補日・ご予算感・目的（個人/法人/教育など）を添えていただくとスムーズです。
        </p>

        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <Card className="md:col-span-2 rounded-2xl">
            <CardContent className="pt-6">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(`送信: ${email}`);
                }}
                className="grid gap-4"
              >
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
                  <Button type="submit" className="rounded-xl">
                    送信
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="w-5 h-5" /> 注意事項
              </CardTitle>
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
  );
}
