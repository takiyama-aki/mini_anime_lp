import { Clock, Video } from "lucide-react";

export default function SampleSection() {
  return (
    <section id="sample" className="border-t bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-bold">サンプル（年内公開予定）</h2>
          <span className="inline-flex items-center gap-2 text-sm text-gray-600">
            <Clock className="w-4 h-4" /> 進行中
          </span>
        </div>
        <p className="mt-3 text-gray-700">完成次第、以下スペースに動画を掲載します（MP4/YouTube/Vimeo対応）。</p>
        <div className="mt-6 aspect-video w-full rounded-2xl bg-black/5 border flex items-center justify-center">
          <div className="text-center">
            <Video className="w-10 h-10 mx-auto mb-2" />
            <p className="text-sm text-gray-600">ここにサムネイル/埋め込みを表示</p>
          </div>
        </div>
        <p id="style-sample" className="mt-6 text-sm text-gray-600">
          スタイルの参考リンク：
          <a className="text-blue-600 hover:underline" href="#">
            [リンク]
          </a>
        </p>
      </div>
    </section>
  );
}
