"use client"
import { env } from "@/conf/env"
import { useRef, useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"


export const ContactForm = () => {
  //const [displayName, setDisplayName] = useState({ firstName: '', lastName: '', fullName: '' })
  const [frmData, setFrmData] = useState({ fullName: '', email: '', phone: '', comment: '' })
  const [errors, setErrors] = useState({ fullName: '', email: '', phone: '', comment: '' })
  const [message, setMessage] = useState('')
  const [showMessage, setShowMessage] = useState(false)
  const [isCaptcha, setIsCaptcha] = useState(false)

  const captcha = useRef(null)


  /* const handleChangeName = async (e) => {
    const { name, value } = e.target
    setDisplayName(
      {
        ...displayName,
        [name]: value,
        'fullName': displayName.firstName + ' ' + displayName.lastName
      }
    )
  } */

  const onChange = () => {
    if (captcha.current.getValue()) {
      setIsCaptcha(false)
      console.log('The user isn´t a robot :D')
    }
  }


  const handleChange = (e) => {
    const { name, value } = e.target
    setFrmData({ ...frmData, [name]: value })
  }

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    let isValid = true;

    // Validate fullName
    if (!frmData.fullName.trim()) {
      setErrors((errors) => ({
        ...errors,
        fullName: 'empty'
      }));
      console.log('fullName EMPTY')
      isValid = false;
    }

    // Validate email
    if (!frmData.email.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'empty',
      }));
      isValid = false;
      console.log('email EMPTY')
    } else if (!isValidEmail(frmData.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'invalid',
      }));
      isValid = false;
    }

    // Validate phone
    if (!frmData.phone.trim()) {
      setErrors((errors) => ({
        ...errors,
        phone: 'empty'
      }));
      console.log('phone EMPTY')
      isValid = false;
    }

    // Validate comment
    if (!frmData.comment.trim()) {
      setErrors((errors) => ({
        ...errors,
        comment: 'empty'
      }));
      console.log('comment EMPTY')
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (validateForm()) {
      // Form is valid, handle submission (e.g., send data to server)
      if (captcha.current.getValue()) {
        console.log('The user isn´t a robot :D')
        const data = new FormData(e.target)
        const response = await fetch(e.target.action, {
          method: 'POST',
          body: data,
          headers: {
            Accept: 'application/json',
          }
        })
        const result = await response.json()
        if (!response.ok) {
          setShowMessage(true)
          setMessage(result.errors.map(error => error.message).join(', '))
          return false
        } else {
          setShowMessage(true)
          setMessage('Se ha enviado con éxito')
          setTimeout(() => { setShowMessage(false) }, 6000)
        }
        console.log('message: ', message);
      } else {
        setIsCaptcha(true)
        console.log('Por favor valida el captcha')
      }
      //console.log('Form submitted:', frmData);
    }
    //console.log(errors.fullName, errors.email)
    //setShowMessage(true)

    /* console.log(':D'); */
  }

  return (
    <section className="w-full flex flex-col justify-center items-center">
      <hgroup className="w-full p-6 text-center text-white bg-orange pt-24">
        <p className="font-light text-xl">Ingenia is located in two major business & government hubs in the Americas</p>
        <h2 className="text-5xl py-6">Contact us</h2>
        <p className="font-light text-xl">Send us e-mail and we will get back to you</p>
      </hgroup>

      <form
        action="https://formspree.io/f/xzbnyedz"
        //action="http://ingenia.com/snippets/test/contact.php"
        method="POST"
        onSubmit={handleSubmit}
        className="relative w-full max-w-screen-md py-6"
      >
        <div className="flex gap-6">
          <div className='w-1/2 relative'>
            {
              errors.fullName == 'empty' &&
              <span className="absolute ml-7 uppercase text-xs font-light text-orange">*Required Field</span>
            }
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full flex items-center justify-center text-sm bg-orange text-white">1</span>
              <input
                //required
                placeholder="Name"
                className={(errors.fullName == 'empty' && ' border-orange ') + ` mt-4 focus:outline-none w-full border-2 border-midnight no-focus p-2 font-light`}
                type="text"
                id="fullName" name="fullName"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='w-1/2 relative'>
            {
              errors.fullName == 'empty' &&
              <span className="absolute uppercase text-xs font-light text-orange">*Required Field</span>
            }
            <input
              //required
              placeholder="Last Name"
              className={(errors.fullName && ' border-orange ') + ` mt-4 focus:outline-none w-full border-2 border-midnight no-focus p-2 font-light`}
              type="text"
            //id="lastName" name="lastName"
            //onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex gap-6">
          <div className='w-1/2 relative'>
            {
              errors.email == 'empty' &&
              <span className="absolute ml-7 uppercase text-xs font-light text-orange">*Required Field</span>
            }
            {
              errors.email == 'invalid' &&
              <span className="absolute ml-7 uppercase text-xs font-light text-orange">*Email Invalid</span>
            }
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full flex items-center justify-center text-sm bg-orange text-white">2</span>
              <input
                //required
                placeholder="E-mail"
                className={(errors.email && ' border-orange ') + ` mt-4 focus:outline-none w-full border-2 border-midnight no-focus p-2 font-light`}
                type="email"
                id="email" name="email"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='w-1/2 relative'>
            {
              errors.phone == 'empty' &&
              <span className="absolute uppercase text-xs font-light text-orange">*Required Field</span>
            }
            <input
              //required
              placeholder="Phone"
              className={(errors.phone && ' border-orange ') + ` mt-4 focus:outline-none w-full border-2 border-midnight no-focus p-2 font-light`}
              type="tel"
              id="phone" name="phone"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex gap-6">
          <div className='w-full mt-4'>
            <div className="flex items-center gap-2">

              <span className="w-5 h-5 rounded-full flex items-center justify-center text-sm bg-orange text-white">3</span>
              <p className="font-light">Tell us about your challenge or opportunity</p>
            </div>
            {
              errors.comment == 'empty' &&
              <span className="absolute ml-7 uppercase text-xs font-light text-orange">*Required Field</span>
            }
            <textarea
              //required
              className={(errors.comment && ' border-orange ') + ` mt-4 focus:outline-none w-[98%] border-2 border-midnight no-focus p-2 font-light ml-5`}
              type="text"
              id="comment" name="comment"
              onChange={handleChange}
            />
          </div>
        </div>

        {
          showMessage &&
          <div className="absolute top-12 w-full flex items-center justify-center">
            <p className="w-1/2 py-24 rounded-md text-xl uppercase flex items-center justify-center backdrop-blur-sm font-light bg-orange/60 text-white">
              {message}
            </p>
          </div>
        }

        <div className={`${isCaptcha && 'rounded-md border-[1px] border-red-500 text-red-700 '} + mt-3 p-3 flex items-start justify-between `}>
          <div>
            <ReCAPTCHA
              ref={captcha}
              sitekey={env.RECAPTCHA_SITE_KEY_V2}
              onChange={onChange}
            />

            {isCaptcha &&
              <p>Comprueba que no eres un robot.</p>
            }
          </div>

          <div className='flex justify-end'>
            <button className="flex items-center uppercase py-1 px-3 bg-orange text-white">Send</button>
          </div>
        </div>

      </form>

    </section>
  )
}

export default { ContactForm }