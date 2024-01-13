import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen bg-red flex-col items-center justify-between p-24">
      
  <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
     
      <ul className="flex">
        <li className="w-1/5 bg-gray-400"> 
          Home
        </li>
        <li className="w-1/5 bg-gray-500">
         Services
        </li>
        <li className="w-1/5 bg-gray-400">
          Github
        </li>


        <Image
          className="w-1/5 bg-gray-400 h-12 dark:drop-shadow-[0_0_0.3rem_gold] grey:invert"
          src="/jn-high-resolution-logo-transparent.png"
          alt="Next.js Logo"
          width={500}
          height={300}
          priority
        />


   
    
<button className="w-1/5 bg-black-400 h-12">
    Get in Touch
</button>
</ul>


      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://thewordofgodrisen.vercel.app/"
          className="group rounded-lg border border-gold px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
          The WORD  {' '} 
           
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          of God Risen: 
           An entire bible application built from scratch with Next.js and tailwind.css
          </p>
        </a>

        <a
          href="#project2"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Project 2{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            I have not yet gotten to this import yet. This will contain the second project.
          </p>
        </a>

        <a
          href="#project3"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Project 3 {' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          I have not yet gotten to this import yet. This will contain the Next project.
          </p>
        </a>

        <a
          href="#project4"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Project 4{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          I have not yet gotten to this import yet. This will contain the Next project.
          </p>
        </a>
      </div>
    </main>
  )
}
