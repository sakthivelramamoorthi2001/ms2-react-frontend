import React, { useEffect, useState } from "react";
import temp1 from '../assets/temp1.svg'
import temp3 from '../assets/temp3.png'
import temp2 from '../assets/temp2.svg'
import temp4 from '../assets/temp3.png'
import temp5 from '../assets/temp5.png'
import temp6 from '../assets/temp6.png'
import { GrFacebook, GrGithub, GrLinkedin, GrYoutube, GrTwitter } from "react-icons/gr";

import leftcontentimage from '../assets/leftContent-image.png'
import rocket from '../assets/svg/rocket.svg'
import { Item } from "rc-menu";
const Home = () => {
  const [logoContent, setLogoContent] = useState(0)
  const [tempate, setTemplate] = useState(0)


  const TemplatesCollection = [temp1, temp2, temp4, temp5, temp6]
  const LogoHeaderContent = ['Welcome To Our Website...', 'create New Resume From Here...', 'Bulid your own Resume...']


  window.setInterval(() => {

    TempChange()
    HeaderChange()
  }, 4000);

  function HeaderChange() {


    let len = LogoHeaderContent.length - 1;
    if (len === logoContent) {

      setLogoContent(0)
    }
    if (len !== logoContent) {

      setLogoContent(logoContent + 1)
    }
  }

  function TempChange() {


    let len = TemplatesCollection.length - 1;



    if (len === tempate) {

      setTemplate(0)
    }
    if (len !== tempate) {
      setTemplate(tempate + 1)
    }

  }




  return <div className="p-0">
    <div className="[&>*]:mb-20 p-10 bg-white h-full flex flex-col">

      {/* heading content */}

      <section className=" text-2xl flex flex-row items-center justify-between px-5 ">
        <div>
          <h1>Hey  &#128512; !, Hello Buddy
            &#128075; </h1>
        </div>
        <div >

          <h1 className="transition duration-150" >{LogoHeaderContent[logoContent]}</h1>

        </div>
      </section>

      {/* heading content img and title */}
      <section className=" bg-blue min-h-[400px] flex flex-row items-center justify-center w-full float-left">
        <div className="w-1/2 flex flex-col items-end justify-end mr-20 [&>*]:mt-3">
          <h1 className="text-4xl font-semibold  text-darkblue">The Ultimate Resume Builder</h1>
          <h3 className=" text-xl w-3/4 text-right ">Build beautiful, recruiter-tested resumes in a few clicks! Our resume builder is powerful and easy to use, with a range of amazing functions. Custom-tailor resumes for any job within minutes. Increase your interview chances and rise above the competition.</h3>
          <div>
            <span className="text-3xl mr-5">&rarr;</span>
            <button className=" button-normal bg-darkblue text-white border-white ">Try It Out</button>
          </div>
        </div>
        <div className=" w-1/2">
          <img src={temp3} alt={temp3} />
        </div>
      </section>

      {/*  midle content and image */}
      <section className="  min-h-[400px] flex flex-row items-center justify-center w-full float-left">
        <div className=" w-1/2">


          <img src={leftcontentimage} className=' border-r-8 rounded-lg' alt={leftcontentimage} />
        </div>
        <div className="w-1/2 flex flex-col items-end justify-end mr-20 [&>*]:mt-3">
          <h1 className="text-5xl text-black text-right leading-tight w-3/4  font-extrabold">Create a resume to land your next job</h1>
          <h3 className=" text-xl w-3/4 text-right ">
            We have developed a resume builder based on feedback from thousands of users, recruiter expertise, stellar template design and the best hiring practices. The goal is simple: help you land that dream job interview! Get an advantage in the modern professional environment.</h3>
          <div>
            <button className=" button-normal bg-darkblue text-white border-white ">Bulid Your Resume</button>
            <span className="text-3xl ml-5">&larr;</span>

          </div>
        </div>
      </section>

      {/*  why its need content box */}

      <section className="mt-3 mb-3">
        <div className="w-full flexing-row [&>*]:mr-1">
          <div className="w-2/5 button-normal3 p-2 h-60 [&>*]:mt-3 ">
            <div className="flex flex-row items-center justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-skyblue">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
              </svg>


              <h1 className="text-2xl text-black font-semibold ml-3">Powerful and easy-to-use</h1>
            </div>
            <h3 className="ml-16 text-black text-xl w-3/4">Created to be suitable for all levels of job seekers. Our host of powerful features ranges from an excellent spell-checker, to job tracking, multi-format export, auto-generated summaries and more.</h3>


          </div>
          <div className="w-2/5 button-normal3 p-2 h-60 [&>*]:mt-3">
            <div className="flex flex-row items-center justify-start">

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-skyblue">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>

              <h1 className="text-2xl text-black font-semibold ml-3">Customization made simple</h1>
            </div>
            <h3 className="ml-16 text-black text-xl w-3/4">Fine-tune your resume for a specific job with ease. We help you turn a generic document into a cutting-edge instrument that wins interviews. Transform universal resumes into perfect sales pitches with a few key-strokes.</h3>

          </div>
          <div className="w-1/5 button-normal3 p-2 h-60 [&>*]:mt-3">
            <div className="flex flex-row items-center justify-start">

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-skyblue ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
              </svg>
              <h1 className="text-2xl text-black font-semibold ml-3">Templates designed by experts</h1>
            </div>
            <h3 className="ml-16 text-black text-xl w-3/4">Our designed templates and examples are reviewed by recruiters. This gives you a powerful boost in resume creation, straight from the other side of the job market - the people responsible for hiring and candidate evaluation.</h3>
          </div>

        </div>
      </section>


      {/* 
template select content */}

      <section className=" bg-blue min-h-[400px] flex flex-row items-center justify-center w-full float-left mt-3">
        <div className="w-2/5 flex flex-col items-end justify-end mr-20 [&>*]:mt-3 [&>*]:mb-3 ">
          {/* <h1 className="text-5xl text-darkblue font-semibold">Proven Resume Templates</h1> */}
          <h1 className="text-5xl text-black text-left leading-tight font-extrabold">Proven Resume Templates</h1>

          <h3 className=" text-xl w-3/4 text-right text-gray-500 ">The resume templates included in our resume builder have been approved by seasoned recruiters. Capturing the recruiters’ attention is the first step towards getting hired.</h3>
          <div className="[&>*]:mb-3" >
            <div className="flexing-row">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="fill-yellow w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="fill-yellow w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="fill-yellow w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" fill-yellow w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>

            </div>
            <div>
              <p className=" text-xs">based on 43,972 reviews</p>
              <h2 className="text-right">4.0 out of 5</h2>
            </div>

          </div>
        </div>
        <div className=" w-3/5 flexing-row [&>*]:mr-4">
          <div className=" w-3/5 h-[840px]">
            <img className="h-full w-full transition '" src={TemplatesCollection[tempate]} alt={TemplatesCollection[tempate]} />
          </div>
        </div>
      </section>



      <section className="flexing-row">
        <h1 className="text-5xl  mb-5 font-bold"  >Features designed to help you win your dream job</h1>
      </section>

      <section className="flex flex-row flex-wrap [&>*]:mb-5 [&>*]:mr-5 items-center justify-evenly">

        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-full text-sky-300 h-48 md:h-52 object-cover md:w-32 rounded-t-lg md:rounded-none md:rounded-l-lg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
            <div className="p-6 flex flex-col justify-start">
              <h5 className="text-gray-900 text-xl font-medium mb-2">Easy online resume builde</h5>
              <p className="text-gray-700 text-base mb-4">
                Create an awesome resume, cover letter or online profile without leaving your web browser.            </p>

              <p className="text-gray-600 text-xs">Last updated 3 mins ago</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-96 bg-white text-sky-300 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
            </svg>
            <div className="p-6 flex flex-col justify-start">
              <h5 className="text-gray-900 text-xl font-medium mb-2">Automatic spell-checker</h5>
              <p className="text-gray-700 text-base mb-4">
                Our built-in spell-checker takes care of the grammar for you. Create a resume with zero typos or errors.</p>
              <p className="text-gray-600 text-xs">Last updated 3 mins ago</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full bg-white text-sky-300 h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
            </svg>
            <div className="p-6 flex flex-col justify-start">
              <h5 className="text-gray-900 text-xl font-medium mb-2">Your data is safe</h5>
              <p className="text-gray-700 text-base mb-4">
                Your data is kept private and protected by strong 256-bit encryption.</p>
              <p className="text-gray-600 text-xs">Last updated 3 mins ago</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full bg-white text-sky-300 h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="p-6 flex flex-col justify-start">
              <h5 className="text-gray-900 text-xl font-medium mb-2">Approved templates</h5>
              <p className="text-gray-700 text-base mb-4">
                Professionally-designed resume templates and examples (+guides). Just edit and download in 5 minutes.</p>
              <p className="text-gray-600 text-xs">Last updated 3 mins ago</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full bg-white text-sky-300 h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
            </svg>
            <div className="p-6 flex flex-col justify-start">
              <h5 className="text-gray-900 text-xl font-medium mb-2">Job tracking</h5>
              <p className="text-gray-700 text-base mb-4">
                We’ll keep you ahead of the competition by tracking the employers and jobs you apply to.</p>            <p className="text-gray-600 text-xs">Last updated 3 mins ago</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full bg-white text-sky-300 h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
            </svg>

            <div className="p-6 flex flex-col justify-start">
              <h5 className="text-gray-900 text-xl font-medium mb-2">Cover letters</h5>
              <p className="text-gray-700 text-base mb-4">
                Our cover letter builder works with the same ease and use of elegant templates as the resume creator.</p>          </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full bg-white text-sky-300 h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
            </svg>
            <div className="p-6 flex flex-col justify-start">
              <h5 className="text-gray-900 text-xl font-medium mb-2">Multi-format resume options</h5>
              <p className="text-gray-700 text-base mb-4">
                Save your perfect resume in any common format, including Microsoft Word and PDF in a single click</p>        </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full bg-white text-sky-300 h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
            </svg>
            <div className="p-6 flex flex-col justify-start">
              <h5 className="text-gray-900 text-xl font-medium mb-2"> Interview school</h5>
              <p className="text-gray-700 text-base mb-4">
                Our unique digital tool will help you win jobs! Receive feedback, tips and improve your interview skills</p>        </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-full bg-white text-sky-300 h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
            </svg>
            <div className="p-6 flex flex-col justify-start">
              <h5 className="text-gray-900 text-xl font-medium mb-2"> Automatic summary generator</h5>
              <p className="text-gray-700 text-base mb-4">
                Create a powerful resume profile or cover letter in one click. Writer’s block is no longer an obstacle. Try for free!</p>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className=" w-full flexing-col [&>*]:mb-3 ">
          <h1 className="text-6xl text-darkblue hovering">
            Join over <u>23,535,000</u>
          </h1>
          <h1 className="text-6xl text-darkblue hovering ">users worldwide</h1>
          <h3 className=" text-slate-700 text-sm font-semibold" >
            Start for free — try our resume builder now
          </h3>
        </div>

      </section>
    </div >

    <section className=" h-[500px] bg-black w-full flexing-row text-white [&>*]:mr-5">
      <div className=" w-1/2 flexing-col">
        <h1 className=" text-2xl font-semibold text-sky-300">Connect with us
          on social media</h1>
        <div className="flexing-row mt-5 [&>*]:mr-5">
          <GrFacebook size={24} />
          <GrGithub size={24} />
          <GrLinkedin size={24} />
          <GrYoutube size={24} />
          <GrTwitter size={24} />

        </div>
      </div>
      <div className=" w-1/2 flex flex-row items-center justify-evenly">
        <div className="">
          <h1>JOB SEEKERS</h1>
          <ul className=" flex flex-col [&>*]:mt-1 ">
            <li>
              <a className="ml-10 hovering1">Create a Resume</a>
            </li>
            <li>
              <a className="ml-10 hovering1">Resume Examples</a>
            </li>
            <li>
              <a className="ml-10 hovering1">Resume Templates</a>
            </li>
            <li>
              <a className="ml-10 hovering1">Cover Letter Templates</a>
            </li>
            <li>
              <a className="ml-10 hovering1">Job Search</a>
            </li>
          </ul>
        </div>
        <div className="">
          <h1>CAREER RESOURCES</h1>
          <ul className=" flex flex-col [&>*]:mt-1 ">
            <li>
              <a className=" ml-10 hovering1">Resume Help</a>
            </li>
            <li>
              <a className=" ml-10 hovering1">Job Interview</a>
            </li>
            <li>
              <a className=" ml-10 hovering1">Career</a>
            </li>
            <li>
              <a className=" ml-10 hovering1">Cover Letter</a>
            </li>
            <li>
              <a className=" ml-10 hovering1">Blog</a>
            </li>
          </ul>
        </div>
        <div className="">
          <h1>OUR COMPANY</h1>
          <ul className=" flex flex-col [&>*]:mt-1 ">
            <li>
              <a className=" ml-10 hovering1">About us</a>
            </li>
            <li>
              <a className=" ml-10 hovering1">Pricing</a>
            </li>
            <li>
              <a className=" ml-10 hovering1">Product Updatae</a>
            </li>
            <li>
              <a className=" ml-10 hovering1">Media Kit</a>
            </li>
            <li>
              <a className=" ml-10 hovering1">Offers</a>
            </li>
          </ul>
        </div>
        <div className="">
          <h1>SUPPORT</h1>
          <ul className=" flex flex-col [&>*]:mt-1 ">
            <li>
              <a className=" ml-10 hovering1">FAQ</a>
            </li>
            <li>
              <a className=" ml-10 hovering1">Contact Us</a>
            </li>
            <li>
              <a className=" ml-10 hovering1">Terms of Service</a>
            </li>
            <li>
              <a className=" ml-10 hovering1">Privacy</a>
            </li>
            <li>
              <a className=" ml-10 hovering1">Right of Withdrawal</a>
            </li>
          </ul>
        </div>
      </div>

    </section>
  </div>

}


export default Home;