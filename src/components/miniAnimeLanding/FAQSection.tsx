import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQSection() {
  return (
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
  );
}
