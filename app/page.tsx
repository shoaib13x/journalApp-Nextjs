import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center text-white ">
      <div className="w-full max-w-[600px] mx-auto">
        <h1 className="text-6xl mb-4">Mood, The best Journal app</h1>
        <p className="text-2xl text-white/60 mb-4">Best app for tracking your mood through out your life. All you need to do is be honest</p>
        <div>
          <Link href="/journal">
          <button className="bg-white hover:bg-slate-200 px-4 py-2 rounded-lg text-xl text-black font-semibold">Get started</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
