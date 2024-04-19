
"use client"
import useWindowSize from "@/hooks/useWindowSise"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export const Header = () => {
  const size = useWindowSize()
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    if (size.width < 640) {
      setToggle(true)
    } else {
      setToggle(false)
    }
    //console.log(size.width, toggle)
  }, [size])


  return (
    <header className="w-full flex justify-center fixed z-10 bg-white/60">
      <nav className="w-full p-3 flex justify-between items-center max-w-screen-xl backdrop-blur sm:backdrop-blur-none">
        <div className="relative flex w-[111px] h-[40px]">
          <Image src='/logo_ingenia.png' fill priority={false} quality={100} alt="ingenia" />
        </div>

        {
          toggle ?
            <span
              className="block sm:hidden relative w-10 h-8 flex items-center justify-end"
              onClick={() => setToggle((prev) => !prev)}
            >
              <i className={`absolute w-10 h-1 top-2 bg-orange ${toggle && ' '}`}></i>
              <i className={`absolute w-10 h-1 top-5 bg-orange ${toggle && ' '}`}></i>
            </span>
            :
            <span
              className="block sm:hidden relative w-10 h-8 flex items-center justify-end mt-2"
              onClick={() => setToggle((prev) => !prev)}
            >
              <i className={`absolute w-10 h-1 top-2 rotate-45 bg-orange ${toggle && ' '}`}></i>
              <i className={`absolute w-10 h-1 top-2 -rotate-45 bg-orange ${toggle && ' '}`}></i>
            </span>
        }

        {
          !toggle &&
          <ul className="w-full absolute left-0 top-16 z-10 sm:top-0 sm:relative flex-col sm:flex-row flex justify-end uppercase font-light text-lg text-black bg-white/60 sm:bg-transparent pt-3 px-3 pb-9 backdrop-blur sm:p-0 sm:backdrop-blur-none">
            <Link href='/'><li className="py-1 px-2 hover:text-orange">About Us</li></Link>
            <Link href='/'><li className="py-1 px-2 hover:text-orange">Our Work</li></Link>
            <Link href='/'><li className="py-1 px-2 hover:text-orange text-orange">Contact</li></Link>
            <Link href='/'><li className="py-1 px-2 hover:text-orange">Manifiesto</li></Link>
          </ul>
        }
      </nav>
    </header>
  )
}

export default { Header }