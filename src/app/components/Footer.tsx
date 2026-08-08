import Link from "next/link";

export default function Footer() {
  return (
    <footer className="max-w-7xl py-18 mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <div className="space-y-4">
          <h1 className="text-3xl">Nova Studio</h1>
        </div>
      </div>
      <div>
        <ul className="space-y-4 text-xl">
          <li>
            <Link href="/">Instagram</Link>
          </li>
          <li>
            <Link href="/">Pinterest</Link>
          </li>
          <li>
            <Link href="/">Tiktok</Link>
          </li>
          <li>
            <Link href="/">Whatsapp</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="space-y-4 text-xl">
          <li>
            <Link href="/">Work</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">Services</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
