export const ComingPlaces = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center px-6 lg:p-0">

      <aside className="flex gap-1 items-center flex-wrap">
        <p className="font-light text-xl">
          <strong className="mr-1">Coming to visit us?</strong>
          Here are some of our favorite places around town to
        </p>
        <select
          required
          className={`w-fit focus:outline-none border-2 no-focus py-1 p-2 font-base bg-transparent`}
          id="country" type="country" name="country">
          <option value="" className='hidden'>A quiet place to read a book</option>
          <option value="namePlace_1">Name of Place</option>
          <option value="namePlace_2">Name of Place</option>
          <option value="namePlace_3">Name of Place</option>
          <option value="namePlace_4">Name of Place</option>
        </select>
      </aside>

      <article className="w-full max-w-screen-sm flex justify-center py-12 flex-col sm:flex-row">
        <aside className="w-full sm:w-1/2 px-10 sm:max-w-[250px] sm:border-r-[1px]">
          <h2 className="text-xs uppercase font-thin text-right tracking-xl">Mexico City:</h2>

          <hgroup className="flex items-end flex-col font-light py-5">
            <h3 className="text-xl flex items-center gap-2">
              Name of Place
              <i className="w-7 h-7 flex justify-center items-center pb-[2px] px-[5px] rounded-full bg-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 512 512"><path fill="#fff" d="M61.1 224C45 224 32 211 32 194.9c0-1.9.2-3.7.6-5.6C37.9 168.3 78.8 32 256 32s218.1 136.3 223.4 157.3c.5 1.9.6 3.7.6 5.6c0 16.1-13 29.1-29.1 29.1zm82.9-96a16 16 0 1 0-32 0a16 16 0 1 0 32 0m240 16a16 16 0 1 0 0-32a16 16 0 1 0 0 32M272 96a16 16 0 1 0-32 0a16 16 0 1 0 32 0M16 304c0-26.5 21.5-48 48-48h384c26.5 0 48 21.5 48 48s-21.5 48-48 48H64c-26.5 0-48-21.5-48-48m16 96c0-8.8 7.2-16 16-16h416c8.8 0 16 7.2 16 16v16c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64z" /></svg>
              </i>
            </h3>
            <span className="font-thin text-sm text-black/60">123 Main St</span>
            <p className="text-right">amazing burgers, imprompteau jazz trios</p>
          </hgroup>
          <hgroup className="flex items-end flex-col font-light py-5">
            <h3 className="text-xl flex items-center gap-2">
              Name of Place
              <i className="w-7 h-7 flex justify-center items-center pb-[2px] px-[5px] rounded-full bg-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 512 512"><path fill="#fff" d="M61.1 224C45 224 32 211 32 194.9c0-1.9.2-3.7.6-5.6C37.9 168.3 78.8 32 256 32s218.1 136.3 223.4 157.3c.5 1.9.6 3.7.6 5.6c0 16.1-13 29.1-29.1 29.1zm82.9-96a16 16 0 1 0-32 0a16 16 0 1 0 32 0m240 16a16 16 0 1 0 0-32a16 16 0 1 0 0 32M272 96a16 16 0 1 0-32 0a16 16 0 1 0 32 0M16 304c0-26.5 21.5-48 48-48h384c26.5 0 48 21.5 48 48s-21.5 48-48 48H64c-26.5 0-48-21.5-48-48m16 96c0-8.8 7.2-16 16-16h416c8.8 0 16 7.2 16 16v16c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64z" /></svg>
              </i>
            </h3>
            <span className="font-thin text-sm text-black/60">123 Main St</span>
            <p className="text-right">amazing burgers, imprompteau jazz trios</p>
          </hgroup>
        </aside>

        <aside className="w-full sm:w-1/2 px-10 sm:max-w-[250px] border-t-2 pt-6 sm:pt-0 sm:border-l-[1px] sm:border-t-0">
          <h2 className="text-xs uppercase font-thin text-right tracking-xl">Washington. D.C:</h2>

          <hgroup className="flex items-start flex-col font-light py-5">
            <h3 className="text-xl flex items-center gap-2">
              <i className="w-7 h-7 flex justify-center items-center pb-[2px] px-[5px] rounded-full bg-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 512 512"><path fill="#fff" d="M61.1 224C45 224 32 211 32 194.9c0-1.9.2-3.7.6-5.6C37.9 168.3 78.8 32 256 32s218.1 136.3 223.4 157.3c.5 1.9.6 3.7.6 5.6c0 16.1-13 29.1-29.1 29.1zm82.9-96a16 16 0 1 0-32 0a16 16 0 1 0 32 0m240 16a16 16 0 1 0 0-32a16 16 0 1 0 0 32M272 96a16 16 0 1 0-32 0a16 16 0 1 0 32 0M16 304c0-26.5 21.5-48 48-48h384c26.5 0 48 21.5 48 48s-21.5 48-48 48H64c-26.5 0-48-21.5-48-48m16 96c0-8.8 7.2-16 16-16h416c8.8 0 16 7.2 16 16v16c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64z" /></svg>
              </i>
              Name of Place
            </h3>
            <span className="font-thin text-sm text-black/60">123 Main St</span>
            <p className="text-left">amazing burgers, imprompteau jazz trios</p>
          </hgroup>
          <hgroup className="flex items-start flex-col font-light py-5">
            <h3 className="text-xl flex items-center gap-2">
              <i className="w-7 h-7 flex justify-center items-center pb-[2px] px-[5px] rounded-full bg-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 512 512"><path fill="#fff" d="M61.1 224C45 224 32 211 32 194.9c0-1.9.2-3.7.6-5.6C37.9 168.3 78.8 32 256 32s218.1 136.3 223.4 157.3c.5 1.9.6 3.7.6 5.6c0 16.1-13 29.1-29.1 29.1zm82.9-96a16 16 0 1 0-32 0a16 16 0 1 0 32 0m240 16a16 16 0 1 0 0-32a16 16 0 1 0 0 32M272 96a16 16 0 1 0-32 0a16 16 0 1 0 32 0M16 304c0-26.5 21.5-48 48-48h384c26.5 0 48 21.5 48 48s-21.5 48-48 48H64c-26.5 0-48-21.5-48-48m16 96c0-8.8 7.2-16 16-16h416c8.8 0 16 7.2 16 16v16c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64z" /></svg>
              </i>
              Name of Place
            </h3>
            <span className="font-thin text-sm text-black/60">123 Main St</span>
            <p className="text-left">amazing burgers, imprompteau jazz trios</p>
          </hgroup>
        </aside>

      </article>
    </section>
  )
}

export default { ComingPlaces }