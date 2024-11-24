import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-gray-800 text-white p-4">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        {/* Logo on the Left */}
        <div className="flex-shrink-0">
          <Link href={"/"} className="flex items-center py-2 px-4 font-semibold text-xl">
            <img width={30} height={30} src="/logo.png" alt="logo" className="mx-2 hidden lg:block" />ShopSavy
          </Link>
        </div>

        {/* Centered Navbar Links */}
        <div className="flex-1 flex justify-center">
          <ul className="flex space-x-6 items-center">
            <li>
              <Link href={"/"} className="hover:text-gray-400">Home</Link>
            </li>

            <li className="relative">
              <details className="group">
                <summary className="cursor-pointer hover:text-gray-400">
                  Categories
                </summary>
                <ul className="absolute left-0 bg-gray-700 text-white mt-2 rounded-lg shadow-md w-48 hidden group-open:block">
                  <li>
                    <Link href={"/top"} className="block px-4 py-2 hover:bg-gray-600">Top</Link>
                  </li>
                  <li>
                    <Link href={"/bottom"} className="block px-4 py-2 hover:bg-gray-600">Pants</Link>
                  </li>
                  <li>
                    <Link href={"/accessories"} className="block px-4 py-2 hover:bg-gray-600">Accessories/Jewelry</Link>
                  </li>
                  <li>
                    <Link href={"/shoes"} className="block px-4 py-2 hover:bg-gray-600">Shoes</Link>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <Link href={"/about"} className="hover:text-gray-400">About</Link>
            </li>

            <li>
              <Link href={"/contact"} className="hover:text-gray-400">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}