import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="flex gap-3 border-b border-zinc-800">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/blog">Blog</Link>
    </header>
  );
}
