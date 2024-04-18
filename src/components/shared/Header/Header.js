import Image from "next/image"
import Link from "next/link"

export const Header = () => {

  return (
    <header className="w-full flex justify-center fixed z-10 bg-white/60">
      <nav className="w-full p-3 flex justify-between items-center max-w-screen-xl">
        <div className="relative flex w-[111px] h-[40px]">
          <Image src='/logo_ingenia.png' fill priority={false} quality={100} alt="ingenia" />
        </div>
        <ul className="flex justify-end uppercase font-light text-lg text-black">
          <Link href='/'><li className="py-1 px-2 hover:text-orange">About Us</li></Link>
          <Link href='/store'><li className="py-1 px-2 hover:text-orange">Our Work</li></Link>
          <Link href='/store/Tech'><li className="py-1 px-2 hover:text-orange text-orange">Contact</li></Link>
          <Link href='/test'><li className="py-1 px-2 hover:text-orange">Manifiesto</li></Link>
        </ul>
      </nav>
    </header>
  )
}

export default { Header }