"use client"
import { useState } from "react"

export const ContactForm = () => {
  const [error, setError] = useState(false)

  return (
    <section className="w-full flex flex-col justify-center items-center">
      <hgroup className="w-full p-6 text-center text-white bg-orange pt-24">
        <p className="font-light text-xl">Ingenia is located in two major business & government hubs in the Americas</p>
        <h2 className="text-5xl py-6">Contact us</h2>
        <p className="font-light text-xl">Send us e-mail and we will get back to you</p>
      </hgroup>

      <form className="w-full max-w-screen-md py-6">
        <div className="flex gap-6">
          <div className='w-1/2'>
            <span className="uppercase text-xs font-light text-orange">*Required Field</span>
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full flex items-center justify-center text-sm bg-orange text-white">1</span>
              <input
                required
                placeholder="Name"
                className={(error && ' border-orange ') + ` focus:outline-none w-full border-2 border-midnight no-focus p-2 font-light`}
                id="fistName" type="fistName" name="fistName"
              />
            </div>
          </div>
          <div className='w-1/2'>
            <span className="uppercase text-xs font-light text-orange">*Required Field</span>
            <input
              required
              placeholder="Last Name"
              className={(error && ' border-orange ') + ` focus:outline-none w-full border-2 border-midnight no-focus p-2 font-light`}
              id="lastName" type="lastName" name="lastName"
            />
          </div>
        </div>

        <div className="flex gap-6">
          <div className='w-1/2'>
            <span className="uppercase text-xs font-light text-orange">*Required Field</span>
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full flex items-center justify-center text-sm bg-orange text-white">2</span>
              <input
                required
                placeholder="E-mail"
                className={(error && ' border-orange ') + ` focus:outline-none w-full border-2 border-midnight no-focus p-2 font-light`}
                id="email" type="email" name="email"
              />
            </div>
          </div>
          <div className='w-1/2'>
            <span className="uppercase text-xs font-light text-orange">*Required Field</span>
            <input
              required
              placeholder="Phone"
              className={(error && ' border-orange ') + ` focus:outline-none w-full border-2 border-midnight no-focus p-2 font-light`}
              id="phone" type="phone" name="phone"
            />
          </div>
        </div>

        <div className="flex gap-6">
          <div className='w-full mt-4'>
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full flex items-center justify-center text-sm bg-orange text-white">3</span>
              <p className="font-light">Tell us about your challenge or opportunity</p>
            </div>
            <span className="uppercase text-xs font-light text-orange">*Required Field</span>
            <textarea
              required
              className={(error && ' border-orange ') + ` focus:outline-none w-[98%] border-2 border-midnight no-focus p-2 font-light ml-5`}
              id="phone" type="phone" name="phone"
            />
          </div>
        </div>

        <div className='flex justify-end mt-3'>
          <button className="flex items-center uppercase py-1 px-3 bg-orange text-white">Send</button>
        </div>
      </form>
    </section>
  )
}

export default { ContactForm }