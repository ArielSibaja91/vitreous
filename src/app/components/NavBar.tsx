import Link from "next/link";
import Button from "./Button";
import { FiShoppingCart } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav className='fixed top-0 left-0 w-full z-10 p-4 bg-background font-ibm uppercase border-b-2'>
      <div className='container mx-auto flex justify-between items-center'>
        <h2 className='text-2xl font-archivo'>
          <Link href='/'>VITREOUS</Link>
        </h2>
        <ul className='flex flex-row gap-20 justify-center items-center text-sm'>
          <li>
            <Link href='/'>
              Services
            </Link>
          </li>
          <li>
            <Link href='/'>
              About Us
            </Link>
          </li>
        </ul>
        <ul className='flex flex-row gap-4 justify-center items-center text-sm'>
          <li>
            <Button type="navigation" label="Cart" href="/" icon={<FiShoppingCart />} className="bg-java" />
          </li>
          <li>
            <Button type="navigation" label="Sign Up" href="/" />
          </li>
          <li>
            <Button type="navigation" label="Login" href="/" />
          </li>
        </ul>
      </div>
    </nav>
  );
}
