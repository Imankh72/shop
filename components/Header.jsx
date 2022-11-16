import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav className="flex items-center justify-between h-12 shadow-md px-4">
        <div>
          <Link href="/" className="text-lg font-bold">
            Shop
          </Link>
        </div>
        <div className="flex gap-x-4">
          <Link href="/cart">Cart</Link>
          <Link href="/login">Login</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
