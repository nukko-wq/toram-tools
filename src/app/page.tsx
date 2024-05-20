import Link from "next/link"

export default function Home() {
  return (
    <main className="flex flex-col">
      <h1 className="text-4xl font-bold text-gray-700">
        トーラムいろいろツール
      </h1>
      <div className="w-full max-w-xl mt-5">
        <ul>
          <li>
            <Link href="/market">マーケット単価計算</Link>
          </li>
        </ul>
      </div>
    </main>
  )
}
