import { createClient } from "microcms-js-sdk";
import KeyWord from "../KeyWord/KeyWord";

const Search = async () => {
  return (
    <section className="h-full w-full border-r border-x-gray-200 p-8">
      <div className="gird gap8">
        <h2>ボスモンスター検索</h2>
        <KeyWord />
      </div>
    </section>
  )
}

export default Search