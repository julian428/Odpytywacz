import GoogleSignInButton from "@/components/ui/googleSignInButton";
import Link from "next/link";

export default function MainNav({ isLoggedIn }: { isLoggedIn: boolean }) {
  return (
    <nav className="flex justify-around py-4 items-center">
      <Link href="/">
        <h1 className="font-black text-2xl">ODPYTYWACZ</h1>
      </Link>
      <section className="flex gap-4">
        <Link href="/quizes">quizy</Link>
        <Link href="/blogs">blogi</Link>
        <Link href="/dashboard">panel</Link>
        <GoogleSignInButton isLoggedIn={isLoggedIn} />
      </section>
    </nav>
  );
}
