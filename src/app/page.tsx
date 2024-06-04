import Link from 'next/link'
export default function Home() {
  return (
    <main>
      <div className="text-white h-screen text-center m-3.5 p-96 ">
        <ul>
          <li></li>
          <li><Link className="hover:text-gray-500 text-lg"href="/analytics"> click here Go Ananlytics</Link></li>

        </ul>

      </div>
    </main>
  );
}
