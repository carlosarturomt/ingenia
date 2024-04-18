import Image from "next/image";

export const Places = () => {

  return (
    <section className="w-full flex flex-wrap">
      <aside className="w-full md:w-1/2 h-auto">
        <div className="relative w-full h-screen min-h-[300px] flex justify-center items-center">
          <Image src='/imgs/place_mexico_city.jpg' fill priority={false} quality={100} alt="mexico sity" className="object-cover" />
          <aside className="z-[1] w-2/3 md:w-1/2 text-center flex justify-center items-center flex-col">
            <h2 className="text-5xl mb-3 text-white">Mexico City</h2>
            <div className="w-full md:w-2/3">
              <div className="bg-gray-100 p-3">
                <p className="uppercase">Anatole France 311</p>
                <p className="font-thin leading-5">Polanco, Miguel Hidlgo</p>
                <p className="font-thin leading-5">11560 México D.F.</p>
                <p className="mt-2 text-orange">50 22 09 00</p>
              </div>
            </div>
          </aside>
        </div>
      </aside>
      <aside className="w-full md:w-1/2 h-auto">
        <div className="relative w-full h-screen min-h-[300px] flex justify-center items-center">
          <Image src='/imgs/place_washington.jpg' fill priority={false} quality={100} alt="washington" className="object-cover" />
          <aside className="z-[1] w-2/3 md:w-1/2 text-center flex justify-center items-center flex-col">
            <h2 className="text-5xl mb-3 text-white">Washington D.C.</h2>
            <div className="w-full md:w-2/3">
              <div className="bg-gray-100 p-3">
                <p className="uppercase">1200 18Th Street, NW</p>
                <p className="font-thin leading-5">Suite 700</p>
                <p className="font-thin leading-5">Washington DC 20036 USA.</p>
                <p className="mt-2 text-orange">50 22 09 00</p>
              </div>
            </div>
          </aside>
        </div>
      </aside>
    </section>
  )
}

export default { Places }
