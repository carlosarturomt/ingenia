import Image from "next/image"
import Link from "next/link"

export const Footer = () => {

  return (
    <footer className="w-full flex justify-center py-6 bg-gray-200">
      <nav className="w-full p-3 max-w-screen-xl text-sm font-light text-gray-700/80">
        <div className="flex justify-between items-center pb-3 flex-col sm:flex-row gap-2 sm:gap-0">
          <p>&copy;2014 Ingenia Group</p>
          <ul className="flex justify-end font-light">
            <Link href='/'><li className="px-2 border-r-[1.5px] border-gray-400/50 hover:text-orange">About Us</li></Link>
            <Link href='/'><li className="px-2 border-r-[1.5px] border-gray-400/50 hover:text-orange">Our Work</li></Link>
            <Link href='/'><li className="px-2 border-r-[1.5px] border-gray-400/50 hover:text-orange">Blog</li></Link>
            <Link href='/'><li className="px-2 border-r-[1.5px] border-gray-400/50 hover:text-orange">Jobs</li></Link>
            <Link href='/'><li className="px-2 hover:text-orange">Contact</li></Link>
          </ul>
        </div>

        <div className="fw-full flex justify-between items-center flex-col sm:flex-row">
          <div className="w-full sm:w-1/2 flex justify-between items-center sm:pr-10">
            <ul className="w-1/2 font-light border-r-[1.5px] border-gray-400/50">
              <li className="uppercase font-bold py-2 flex items-end gap-2">
                <div className="relative flex w-[22px] h-[22px]">
                  <Image src='/icons/address-usa.svg' fill priority={false} quality={100} alt="ingenia" />
                </div>
                Usa
              </li>
              <Link href='/'><li className=" hover:text-orange">1200 18th Street, NW</li></Link>
              <Link href='/'><li className="hover:text-orange">Suite 700</li></Link>
              <Link href='/'><li className="hover:text-orange">Washington DC 20036 USa</li></Link>
              <Link href='/'><li className="hover:text-orange">50220900</li></Link>
            </ul>
            <ul className="w-1/2 font-light border-l-[1.5px] text-right border-gray-400/50">
              <li className="uppercase font-bold py-2 flex items-end gap-1 justify-center">
                <div className="relative flex w-[33px] h-[22px]">
                  <Image src='/icons/address-mexico.svg' fill priority={false} quality={100} alt="ingenia" />
                </div>
                Mexico
              </li>            <Link href='/'><li className=" hover:text-orange">Anatole France 311</li></Link>
              <Link href='/'><li className="hover:text-orange">Polanco, Miguel Hidalgo</li></Link>
              <Link href='/'><li className="hover:text-orange">11560 México D.F.</li></Link>
              <Link href='/'><li className="hover:text-orange">50220900</li></Link>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 pt-6 sm:pt-0">
            <ul className="flex justify-center sm:justify-end font-light">
              <Link href='/'><li className="px-2 border-r-2 sm:border-r-[1.5px] border-gray-400/50 hover:text-orange">Tearm of Use</li></Link>
              <Link href='/'><li className="px-2 hover:text-orange">Privacy Policy</li></Link>
            </ul>

            <ul className="flex justify-center sm:justify-end pt-6">
              <li className="px-2">
                <Link href='/'>
                  <div className="relative flex w-[33px] h-[33px] rounded-full px-[10px] bg-gray-700/80">
                    <Image src='/icons/social-twitter.svg' fill priority={false} quality={100} alt="twitter" className="p-1" />
                  </div>
                </Link>
              </li>
              <li className="px-2">
                <Link href='/'>
                  <div className="relative flex w-[33px] h-[33px] rounded-full px-[10px] bg-gray-700/80">
                    <Image src='/icons/social-facebook.svg' fill priority={false} quality={100} alt="facebook" className="p-1" />
                  </div>
                </Link>
              </li>
              <li className="px-2">
                <Link href='/'>
                  <div className="relative flex w-[33px] h-[33px] rounded-full px-[10px] bg-gray-700/80">
                    <Image src='/icons/social-youtube.svg' fill priority={false} quality={100} alt="youtube" className="p-1" />
                  </div>
                </Link>
              </li>
              <li className="px-2">
                <Link href='/'>
                  <div className="relative flex w-[33px] h-[33px] rounded-full px-[10px] bg-gray-700/80">
                    <Image src='/icons/social-linkedin.svg' fill priority={false} quality={100} alt="linkedin" className="p-2" />
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </footer>
  )
}

export default { Footer }