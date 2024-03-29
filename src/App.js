import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Scroll from './components/Scroll';
import man from './images/man.png';
import austin from './images/austin.png';
import AutoTyping, { BlinkCursor } from 'react-auto-typing';
import {useRef, useState} from 'react';
import emailjs from 'emailjs-com';
import FullPageLoader from './hooks/fullPageLoader';




function App() {
  const [open, setOpen] = useState(false)
  const formRef = useRef();
  const[done, setDone] = useState(false)
    

  const handleSubmit = (e) => {
        e.preventDefault();
        showLoader()
        emailjs.sendForm('service_6cdygz8', 'template_ekdcqwa', formRef.current, 'user_XHnhdtIUDs3agDv7T1Sw8')
      .then((result) => {
          console.log(result.text);
          hideLoader()
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  };

  const handleOpen = () => {
    setOpen(!open)
  }

  const commentSection = useRef(null);

  const gotoCommentSection = () => {
    window.scrollTo({
      top: commentSection.current.offsetTop,
      behavior: "smooth"
    })
  }

  const contactSection = useRef(null);

  const gotoContactSection = () => {
    window.scrollTo({
      top: contactSection.current.offsetTop,
      behavior: "smooth"
    })
  }
  const servicesSection = useRef(null);

  const gotoServicesSection = () => {
    window.scrollTo({
      top: servicesSection.current.offsetTop,
      behavior: "smooth"
    })
  }
  const projectsSection = useRef(null);

  const gotoProjectsSection = () => {
    window.scrollTo({
      top: projectsSection.current.offsetTop,
      behavior: "smooth"
    }) 
  }

  const [loader, showLoader, hideLoader] = FullPageLoader()
  return (
    <>
  
    <div class="font-nunito">
      {loader}
      <div class='h-screen bg-gradient-to-t from-indigo-200 relative overflow-hidden'>
        <Intro/>
        <Scroll/>
        
        <nav class="w-full fixed top-0 bg-white z-10">
          <div class="container mx-auto py-5 flex items-center justify-between ">
            <div class="flex items-center gap-2">
              <img class="w-8" src={'https://raw.githubusercontent.com/safak/youtube2022/tailwind-portfolio/img/logo.png'} alt=""/>
              <span class="text-2xl font-bold text-gray-900">Portfolio</span>
            </div>
            <ul class="hidden md:flex space-x-10 text-grey-600 font-bold text-sm uppercase">
              <li class="hover:text-gray-500">
                <a href='/'>Home</a>
              </li>
              <li class="hover:text-gray-500 cursor-pointer">
                <a onClick={gotoCommentSection}>About me</a>
              </li>
              <li class="hover:text-gray-500 cursor-pointer">
                <a onClick={gotoServicesSection}>Services</a>
              </li>
              <li class="hover:text-gray-500 cursor-pointer">
                <a onClick={gotoProjectsSection}>Projects</a>
              </li>
              <li class="hover:text-gray-500 cursor-pointer">
                <a onClick={gotoContactSection}>Contacts</a>
              </li>
            </ul>
            <img src={'https://raw.githubusercontent.com/safak/youtube2022/tailwind-portfolio/img/moon.png'}
              class="hidden md:block w-5 cursor-pointer" alt="" />
            <div class="space-y-1 m-1 md:hidden cursor-pointer z-20" onClick={handleOpen}>
              <div class="w-6 h-0.5 bg-black"></div>
              <div class="w-6 h-0.5 bg-black"></div>
              <div class="w-6 h-0.5 bg-black"></div>
            </div>
            {open && <ul class="bg-indigo-900 absolute left-0 top-20 h-screen w-full p-10 rounded-b-2xl space-y-10 text-white text-center">
              <li class="hover:text-gray-500">
                <a href='#'>Home</a>
              </li>
              <li class="hover:text-gray-500" onClick={handleOpen}>
                <a onClick={gotoCommentSection}>About me</a>
              </li>
              <li class="hover:text-gray-500" onClick={handleOpen}>
                <a onClick={gotoServicesSection}>Services</a>
              </li>
              <li class="hover:text-gray-500" onClick={handleOpen}>
                <a onClick={gotoProjectsSection}>Projects</a>
              </li>
              <li class="hover:text-gray-500" onClick={handleOpen}>
                <a onClick={gotoContactSection}>Contacts</a>
              </li>
            </ul>}
          </div>
        </nav>


        <img class="absolute left-10 bottom-0 right-0 lg:left-0 lg:h-5/6 mx-auto h-4/6 object-cover" src={austin} alt="" />

        <div class="hidden lg:block absolute -bottom-1/2 right-0 left-0 mx-auto w-big h-big bg-red-900 rounded-full -z-10"></div>


        <div>
          <div class="hidden lg:flex flex-col absolute top-0 bottom-0 m-auto right-10 h-fit rounded-md shadow-xl gap-5 w-1/4 p-6 bg-white">
            <h1 class="text-3xl font-bold text-indigo-700">Hi, I'm John</h1>

            <p class="text-gray-500">this is test post for frontend tailwind react js developement</p>

            <a  class="bg-indigo-800 w-fit text-lg text-white px-2 py-1 rounded-lg font-semibold" href="#">Hire me</a>
          </div>
        </div>
        <div class="absolute top-20 w-1/2 left-0 text-4xl sm:left-0 sm:w-1/3 sm:top-1/3 sm:text-4xl md:text-6xl md:left-0 lg:left-5 xl:left-40 xl:text-6xl xl:w-1/4 xl:font-bold">
          <span class="text-gray-900">Freelance</span>
          <div class="flex flex-col">
          <AutoTyping class="text-red-500"
      active // <boolean>
      textRef= {'Developer Designer Writer and Doctor'} // <string>
      writeSpeed={150} // <number>
      deleteSpeed={150} // <number>
      delayToWrite={1000} // <number>
      delayToDelete={6000}// <number>
    />
    </div>
        </div> 
      </div>


      <div ref={commentSection} class="my-20 px-10 mx-auto py-10 flex flex-col-reverse lg:flex-row items-center gap-20">
            <div class="hidden md:flex md:relative md:w-1/2">
              <img class="h-1/2 absolute top-10 left-20 -z-20"
                src="https://raw.githubusercontent.com/safak/youtube2022/tailwind-portfolio/img/dots.png" alt="" />
              <div class="h-full w-full overflow-hidden">
                <img 
                  src={austin} alt="" />
              </div>
            </div>
            <div class="my-auto flex flex-col gap-3">
              <h1 class="text-gray-900 text-xl font-bold">ABOUT ME</h1>
              <h1 class="text-3xl font-medium">BETTER DESIGN</h1>
              <h1 class="text-3xl font-medium">BETTER EXPERIENCE</h1>
              <p class="text-gray-500">this is test post for frontend tailwind react js developement</p>

              <h2 class="text-gray-400 font-medium">HTML</h2>
              <div class="w-full bg-gray-200 h-1.5 rounded-md">
                <div class="w-full bg-indigo-600 h-1.5 rounded-md"></div>
              </div>

              <h2 class="text-gray-400 font-medium">JAVASCRIPT</h2>
              <div class="w-full bg-gray-200 h-1.5 rounded-md">
                <div class="w-4/5 bg-indigo-600 h-1.5 rounded-md"></div>
              </div>

              <h2 class="text-gray-400 font-medium">REACT</h2>
              <div class="w-full bg-gray-200 h-1.5 rounded-md">
                <div class="w-3/5 bg-indigo-600 h-1.5 rounded-md"></div>
              </div>

            </div>
          </div>




          <div>
            <div ref={servicesSection} class="container mx-auto">
              <div class="flex flex-col items-center gap-3">
            <h1 class="text-gray-900 text-xl font-bold">SERVICES</h1>
            <h2 class="text-indigo-800 font-medium">WHAT CAN I DO FOR YOU</h2>
            <p class="text-gray-500">This is where you can present your services to the customers</p>
            </div>
            <div class="p-5 my-10 sm:p-0 flex flex-wrap">
              <div class="w-full md:w-4/12 my-3 shadow-xl rounded-lg p-5 flex flex-col gap-3">
                <img class="w-10" src="https://www.pngkit.com/png/detail/21-215562_service-goods-and-services-icon.png" alt=""/>
                <h1 class="text-indigo-900 font-medium text-xl">SERVICES</h1>
                <p class="text-gray-500">this is test post for frontend tailwind react js developement</p>
                <a class="text-indigo-600 font-semibold text-sm">Read more</a>
              </div>
              <div class="w-full md:w-4/12 my-3 shadow-xl rounded-lg p-5 flex flex-col gap-3">
                <img class="w-10" src="https://www.pngkit.com/png/detail/21-215562_service-goods-and-services-icon.png" alt=""/>
                <h1 class="text-indigo-900 font-medium text-xl">SERVICES</h1>
                <p class="text-gray-500">this is test post for frontend tailwind react js developement</p>
                <a class="text-indigo-600 font-semibold text-sm">Read more</a>
              </div>
              <div class="w-full md:w-4/12 my-3 shadow-xl rounded-lg p-5 flex flex-col gap-3">
                <img class="w-10" src="https://www.pngkit.com/png/detail/21-215562_service-goods-and-services-icon.png" alt=""/>
                <h1 class="text-indigo-900 font-medium text-xl">SERVICES</h1>
                <p class="text-gray-500">this is test post for frontend tailwind react js developement</p>
                <a class="text-indigo-600 font-semibold text-sm">Read more</a>
              </div>
              <div class="w-full md:w-4/12 my-3 shadow-xl rounded-lg p-5 flex flex-col gap-3">
                <img class="w-10" src="https://www.pngkit.com/png/detail/21-215562_service-goods-and-services-icon.png" alt=""/>
                <h1 class="text-indigo-900 font-medium text-xl">SERVICES</h1>
                <p class="text-gray-500">this is test post for frontend tailwind react js developement</p>
                <a class="text-indigo-600 font-semibold text-sm">Read more</a>
              </div>
              <div class="w-full md:w-4/12 my-3 shadow-xl rounded-lg p-5 flex flex-col gap-3">
                <img class="w-10" src="https://www.pngkit.com/png/detail/21-215562_service-goods-and-services-icon.png" alt=""/>
                <h1 class="text-indigo-900 font-medium text-xl">SERVICES</h1>
                <p class="text-gray-500">this is test post for frontend tailwind react js developement</p>
                <a class="text-indigo-600 font-semibold text-sm">Read more</a>
              </div>
              <div class="w-full md:w-4/12 my-3 shadow-xl rounded-lg p-5 flex flex-col gap-3">
                <img class="w-10" src="https://www.pngkit.com/png/detail/21-215562_service-goods-and-services-icon.png" alt=""/>
                <h1 class="text-indigo-900 font-medium text-xl">SERVICES</h1>
                <p class="text-gray-500">this is test post for frontend tailwind react js developement</p>
                <a class="text-indigo-600 font-semibold text-sm">Read more</a>
              </div>
            </div>

            </div>
          </div>



          <div>
            <div ref={projectsSection} class="container mx-auto">
              <div class="flex flex-col items-center my-10 gap-3">
            <h1 class="text-gray-900 text-xl font-bold">PROJECTS</h1>
            <h2 class="text-indigo-800 font-medium">SAMPLES OF WHAT WE CAN OFFER</h2>
            <p class="text-gray-500">This is where you can present examples of your projects to the customers</p>
            </div>
            <div class="p-20 sm:p-0 flex flex-wrap justify-between">
              <div class="w-full md:w-4/12 lg:w-1/4 shadow-xl rounded-lg p-5 md:my-10 m-1">
                <img  src="https://raw.githubusercontent.com/safak/youtube2022/tailwind-portfolio/img/item.png" alt=""/>
              </div>
              <div class="w-full md:w-4/12 lg:w-1/4 shadow-xl rounded-lg p-5 md:my-10 m-1">
                <img  src="https://raw.githubusercontent.com/safak/youtube2022/tailwind-portfolio/img/item.png" alt=""/>
              </div>
              <div class="w-full md:w-4/12 lg:w-1/4 shadow-xl rounded-lg p-5 md:my-10 m-1">
                <img  src="https://raw.githubusercontent.com/safak/youtube2022/tailwind-portfolio/img/item.png" alt=""/>
              </div>
              <div class="w-full md:w-4/12 lg:w-1/4 shadow-xl rounded-lg p-5 md:my-10 m-1">
                <img  src="https://raw.githubusercontent.com/safak/youtube2022/tailwind-portfolio/img/item.png" alt=""/>              
              </div>
              <div class="w-full md:w-4/12 lg:w-1/4 shadow-xl rounded-lg p-5 md:my-10 m-1">
                <img  src="https://raw.githubusercontent.com/safak/youtube2022/tailwind-portfolio/img/item.png" alt=""/>
              </div>
              <div class="w-full md:w-4/12 lg:w-1/4 shadow-xl rounded-lg p-5 md:my-10 m-1">
                <img  src="https://raw.githubusercontent.com/safak/youtube2022/tailwind-portfolio/img/item.png" alt=""/>
              </div> 
            </div>
            </div>



            <div ref={contactSection} id="contact" class="dark:bg-slate-900">
      <div class="container mx-auto">
        <div class="flex flex-col gap-3 items-center">
          <h1 class="text-gray-600 text-xl font-bold">CONTACT</h1>
          <h1 class="text-3xl dark:text-white">Have a Question?</h1>
          <p class="w-1/2 text-center text-gray-400">
            Do you have an idea? Let's discuss it and see what we can do
            together.
          </p>
        </div>
        
        <form ref={formRef} onSubmit={handleSubmit} class="mt-5 p-8 flex flex-col gap-5 items-center">
          <input
            class="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:ring-0 dark:text-white"
            type="text"
            placeholder="Name Surname"
            name="user_name"
          />
          <input
            class="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:ring-0 dark:text-white"
            type="email"
            placeholder="Email"
            name="user_email"
          />
          <input
            class="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:ring-0 dark:text-white"
            type="text"
            placeholder="Subject"
            name="user_subject"
          />
          <textarea
            class="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:ring-0 dark:text-white"
            cols="30"
            rows="10"
            placeholder="Message..."
            name="message"
          ></textarea>
          <button
            class="w-1/2 bg-indigo-600 text-white font-medium px-3 py-2 rounded-md cursor-pointer"
          >
            Submit
          </button>
          {done && <h4> the message is sent</h4>}

        </form>
      </div>
    </div>
          </div>



          <div class="w-full bg-gray-800">
      <div class="container mx-auto py-5 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <img class="w-8" src="./img/logo.png" alt="" />
          <span class="text-2xl font-bold text-white">Portfolio.</span>
        </div>
        <span class="hidden md:block font-medium text-white"
          >© 2022 Dr.Mustafa Samir Younis. Design with ♥️ by Omar Alani.</span
        >
        <div class="flex gap-2">
          <img class="w-4 cursor-pointer" src="https://raw.githubusercontent.com/safak/youtube2022/tailwind-portfolio/img/facebook.png" alt="" />
          <img class="w-4 cursor-pointer" src="https://raw.githubusercontent.com/safak/youtube2022/tailwind-portfolio/img/instagram.png" alt="" />
          <img class="w-4 cursor-pointer" src="https://raw.githubusercontent.com/safak/youtube2022/tailwind-portfolio/img/twitter.png" alt="" />
          <img class="w-4 cursor-pointer" src="https://raw.githubusercontent.com/safak/youtube2022/tailwind-portfolio/img/linkedin.png" alt="" />
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default App;

/**/


