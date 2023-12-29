import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link href="/" className={router.pathname === "/" ? "active" : ""}>
        Home
      </Link>
      <Link
        href="/about"
        className={router.pathname === "/about" ? "active" : ""}
      >
        About
      </Link>
      <style jsx>{`
        nav {
          background-color: tomato;
        }
        nav > :global(a) {
          text-decoration: none;
        }
        nav > :global(.active) {
          color: yellow;
        }
      `}</style>
    </nav>
  );
}
