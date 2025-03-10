import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    // ✅ Ensure code runs only on the client-side (fixes Vercel issue)
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      const about = document.getElementById('about');
      const projects = document.getElementById('projects');
      const experience = document.getElementById('experience');

      if (about.getBoundingClientRect().top < window.innerHeight / 2 && about.getBoundingClientRect().bottom > window.innerHeight / 2) {
        setActiveSection('about');
      } 
      else if (projects.getBoundingClientRect().top < window.innerHeight / 2 && projects.getBoundingClientRect().bottom > window.innerHeight / 2) {
        setActiveSection('projects');
      } 
      else if (experience.getBoundingClientRect().top < window.innerHeight / 2 && experience.getBoundingClientRect().bottom > window.innerHeight / 2) {
        setActiveSection('experience');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (


    < >
      <div >
        <div>

          <div className='flex justify-between gap-4  mx-40  items-start'>
            <header className='sticky top-0 w-1/2 flex flex-col justify-between py-24 leading-4  '>
              <div>
                <h1 className='text-4xl font-bold tracking-tight  text-slate-200 mb-2'><a href="">Nishu Patel</a></h1>
                <h2 className='text-xl font-medium text-slate-200 mb-4'>Freelancer</h2>
                <p className='leading-normal text-slate-400 mb-40'>Playing with pixels...</p>

              </div>
              <ul className='leading-[4rem]'>
                <li>
                  <a href="#about" className={`flex items-center gap-4 group ` }>
                  <span className={`h-[1px] w-8 bg-slate-400 transition-all duration-300 group-hover:w-16 group-hover:bg-slate-200 ${activeSection === 'about' ? 'w-16 bg-slate-200' : 'w-8'}`}></span>
                  
                  <span className={`text-slate-400 group-hover:text-slate-200 ${activeSection === 'about' ? 'text-slate-200' : 'text-slate-400'}`}>About</span>
                </a>
                </li>

                <li>
                  <a href="#projects" className={`flex items-center gap-4 group`}>
                  <span className={`h-[1px] w-8 bg-slate-400 transition-all duration-300 group-hover:w-16 group-hover:text-slate-200 ${activeSection === 'projects' ? 'w-16 bg-slate-200' : 'w-8'}`}></span>
                  <span className={`text-slate-400 group-hover:text-slate-200 ${activeSection === 'projects' ? 'text-slate-200' : 'text-slate-400'}`}>Projects</span>
                </a>
                </li>
                
                <li>
                  <a href="#experience" className="flex items-center gap-4 group">
                  <span className={`h-[1px] w-8 bg-slate-400 transition-all duration-300 group-hover:w-16 group-hover:text-slate-200 ${activeSection === 'experience' ? 'w-16 bg-slate-200' : 'w-8'}`}></span>
                  <span className={`text-slate-400 group-hover:text-slate-200 ${activeSection === 'experience' ? 'text-slate-200' : 'text-slate-400'}`}>Experience</span>
                  </a>
                </li>
              </ul>
            </header>
            <main className='w-1/2 text-slate-400 flex flex-col gap-4 py-24'>
              <section className='mb-5' id='about' >
                <div>
                  <h1>About</h1>
                
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore dicta hic necessitatibus accusantium illum impedit, suscipit dolor, voluptates asperiores vero ratione ullam natus maxime veniam eaque, qui doloribus voluptate minus.</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti commodi quo reiciendis nesciunt, velit odit. Ipsum sequi non delectus vel repellendus mollitia quibusdam labore animi, neque sapiente facilis laboriosam! Amet!
                  </p>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem laboriosam doloribus, sunt harum repudiandae dolore explicabo nostrum omnis architecto officia earum laborum, at cupiditate assumenda dolor qui perferendis tenetur expedita!
                  </p>
                </div>
              </section>
              <section id='projects' className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'>
                <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
                  <h1 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>Projects</h1>

                </div>
                <div>
                  <ol className='group/list'>
                    <li className='mb-12'>
                      <div className='group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
                      <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
                      <header className='z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2'>2024  -- present</header>
                      <div className='z-10 sm:col-span-6'>
                        <h3 className='font-medium leading-snug text-slate-200'>
                          <div className=''>
                            <a href="" className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base'>
                            <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
                            <span>Community manager</span></a>
                          </div>
                        </h3>
                        <p className='mt-2 text-sm leading-normal'>
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo ullam dolor ipsam quas provident fuga ratione, obcaecati voluptates minima illum voluptate quae, vitae ex repudiandae eaque aliquid velit eligendi consequatur.
                        </p>
                        <ul className='mt-2 flex flex-wrap'>
                          <li className='mr-1.5 mt-2'>
                              <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                              javaScript
                              </div>
                          </li>
                        </ul>
                      </div>
                      </div>
                    </li>
                    <li className='mb-12'>
                      <div className='group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
                      <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
                      <header className='z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2'>2024  -- present</header>
                      <div className='z-10 sm:col-span-6'>
                        <h3 className='font-medium leading-snug text-slate-200'>
                          <div className=''>
                            <a href="" className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base'>
                            <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
                            <span>Community manager</span></a>
                          </div>
                        </h3>
                        <p className='mt-2 text-sm leading-normal'>
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo ullam dolor ipsam quas provident fuga ratione, obcaecati voluptates minima illum voluptate quae, vitae ex repudiandae eaque aliquid velit eligendi consequatur.
                        </p>
                        <ul className='mt-2 flex flex-wrap'>
                          <li className='mr-1.5 mt-2'>
                              <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                              javaScript
                              </div>
                          </li>
                        </ul>
                      </div>
                      </div>
                    </li>
                    <li className='mb-12'>
                      <div className='group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
                      <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
                      <header className='z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2'>2024  -- present</header>
                      <div className='z-10 sm:col-span-6'>
                        <h3 className='font-medium leading-snug text-slate-200'>
                          <div className=''>
                            <a href="" className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base'>
                            <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
                            <span>Community manager</span></a>
                          </div>
                        </h3>
                        <p className='mt-2 text-sm leading-normal'>
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo ullam dolor ipsam quas provident fuga ratione, obcaecati voluptates minima illum voluptate quae, vitae ex repudiandae eaque aliquid velit eligendi consequatur.
                        </p>
                        <ul className='mt-2 flex flex-wrap'>
                          <li className='mr-1.5 mt-2'>
                              <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                              javaScript
                              </div>
                          </li>
                        </ul>
                      </div>
                      </div>
                    </li>
                  </ol>
                </div>
              </section>

              <section id='experience' className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'>
                <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
                  <h1 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>Projects</h1>

                </div>
                <div>
                  <ol className='group/list'>
                    <li className='mb-12'>
                      <div className='group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
                      <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
                      <header className='z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2'>2024  -- present</header>
                      <div className='z-10 sm:col-span-6'>
                        <h3 className='font-medium leading-snug text-slate-200'>
                          <div className=''>
                            <a href="" className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base'>
                            <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
                            <span>Community manager</span></a>
                          </div>
                        </h3>
                        <p className='mt-2 text-sm leading-normal'>
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo ullam dolor ipsam quas provident fuga ratione, obcaecati voluptates minima illum voluptate quae, vitae ex repudiandae eaque aliquid velit eligendi consequatur.
                        </p>
                        <ul className='mt-2 flex flex-wrap'>
                          <li className='mr-1.5 mt-2'>
                              <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                              javaScript
                              </div>
                          </li>
                        </ul>
                      </div>
                      </div>
                    </li>
                    <li className='mb-12'>
                      <div className='group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
                      <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
                      <header className='z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2'>2024  -- present</header>
                      <div className='z-10 sm:col-span-6'>
                        <h3 className='font-medium leading-snug text-slate-200'>
                          <div className=''>
                            <a href="" className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base'>
                            <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
                            <span>Community manager</span></a>
                          </div>
                        </h3>
                        <p className='mt-2 text-sm leading-normal'>
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo ullam dolor ipsam quas provident fuga ratione, obcaecati voluptates minima illum voluptate quae, vitae ex repudiandae eaque aliquid velit eligendi consequatur.
                        </p>
                        <ul className='mt-2 flex flex-wrap'>
                          <li className='mr-1.5 mt-2'>
                              <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                              javaScript
                              </div>
                          </li>
                        </ul>
                      </div>
                      </div>
                    </li>
                    <li className='mb-12'>
                      <div className='group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
                      <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
                      <header className='z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2'>2024  -- present</header>
                      <div className='z-10 sm:col-span-6'>
                        <h3 className='font-medium leading-snug text-slate-200'>
                          <div className=''>
                            <a href="" className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base'>
                            <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
                            <span>Community manager</span></a>
                          </div>
                        </h3>
                        <p className='mt-2 text-sm leading-normal'>
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo ullam dolor ipsam quas provident fuga ratione, obcaecati voluptates minima illum voluptate quae, vitae ex repudiandae eaque aliquid velit eligendi consequatur.
                        </p>
                        <ul className='mt-2 flex flex-wrap'>
                          <li className='mr-1.5 mt-2'>
                              <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                              javaScript
                              </div>
                          </li>
                        </ul>
                      </div>
                      </div>
                    </li>
                  </ol>
                </div>
              </section>
              <section></section>
            </main>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
