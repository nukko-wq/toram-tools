import Link from "next/link"

export default function Home() {
  return (
    <main className="flex flex-col justify-center min-h-screen">
      <div className="mt-10">
      <h1 className="text-center text-3xl font-bold text-gray-700">
        トーラムいろいろツール
      </h1>
      <div className="w-full text-center mt-8">
        <ul>
          <li>
            <Link href="/market" className="text-lg text-blue-600 hover:underline">マーケット単価計算</Link>
          </li>
        </ul>
      </div>
      </div>
      <footer className="mt-auto items-center p-4">
        <aside className="items-center flex flex-row justify-center">
          <p className="text-sm text-gray-500">© トーラムいろいろツール 2024</p>
        </aside>
      </footer>
    </main>
  )
}
