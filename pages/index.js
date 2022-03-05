import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/footer'
import Navbar from '../components/navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Overtunes - The Best Music Bot For Discord</title>
        <meta name="description" content="Best music bot for Discord. Supports Spotify, Soundcloud, Deezer and more..." />
        <meta property="og:title" content="Overtunes - The Best Music Bot For Discord" />
        <meta property="og:description" content="Best music bot for Discord. Supports Spotify, Soundcloud, Deezer and more..." />
        <meta property="og:image" content="/favicon-32x32.png" />
      </Head>

      <div className='bg-[url(/background.png)] bg-contain'>
        <Navbar />

        <section className='p-10 bg-repeat bg-center'>
          <div className='p-5 lg:mt-24'>
            <h1 className='text-center p-2 text-gray-200 uppercase font-bold text-2xl md:text-3xl lg:text-5xl'>The Best Music Bot For Discord</h1>
            <p className='text-center p-2 mt-2 text-gray-300/75 md:text-xl lg:text-2xl'>Best music bot for Discord. Supports Spotify, Soundcloud, Deezer and more</p>
            <div className='flex-col flex md:flex-row gap-4 mt-10 justify-center'>
              <a href='https://discord.com/oauth2/authorize?client_id=873101608467185684&scope=bot&permissions=4332047432&scope=applications.commands%20bot' rel='noopener noreferrer' target={'_blank'}><button className='bg-[#4696e6] transition duration-300 hover:opacity-80 text-gray-200 font-bold w-full md:w-56 lg:w-72 rounded-xl py-2 md:p-4 md:text-2xl'>Invite</button></a>
              <a href='https://discord.gg/hM8U8cHtwu' rel='noopener noreferrer' target={'_blank'}><button className='border-[#3C4652] transition duration-300 hover:opacity-80 text-gray-200 border-2 w-full md:w-56 lg:w-72 rounded-xl py-2 md:p-4 font-bold md:text-2xl'>Support</button></a>
            </div>
          </div>
        </section>


        {/* features start */}
        <section className='p-10 md:p-24 lg:p-32 grid lg:grid-cols-2 gap-6'>
          <div className='text-gray-200'>
            <h1 className='font-bold text-xl md:text-3xl'>We got something for you</h1>
            <p className='mt-4'>We have something cool for you, and thats why Overtunes is different</p>
          </div>
          <div className='bg-[#262b30] rounded-lg flex flex-col md:flex-row items-center justify-center p-3 lg:p-10 gap-3'>
            <Image loading='lazy' width={'300px'} height={'300px'} src={'/easy.png'} className='grow' alt='easy to use'></Image>
            <div className='flex flex-col grow'>
              <h2 className='text-gray-200 font-bold p-3'>Easy to use</h2>
              <p className='text-gray-200 p-3'>We make it easy for our users to use Overtunes, from new features and more.</p>
            </div>
          </div>
          <div className='bg-[#262b30] rounded-lg flex flex-col md:flex-row items-center justify-center p-3 lg:p-10 gap-3'>
            <Image loading='lazy' width={'300px'} height={'300px'} src={'/safe.png'} className='grow' alt='safe for users'></Image>
            <div className='flex flex-col grow'>
              <h2 className='text-gray-200 font-bold p-3'>Guaranteed safe for users</h2>
              <p className='text-gray-200 p-3'>We always keep our users safe when using Overtunes.</p>
            </div>
          </div>
          <div className='bg-[#262b30] rounded-lg flex flex-col md:flex-row items-center justify-center p-3 lg:p-10 gap-3'>
            <Image loading='lazy' width={'300px'} height={'300px'} src={'/functional.png'} className='grow' alt='functional'></Image>
            <div className='flex flex-col grow'>
              <h2 className='text-gray-200 font-bold p-3'>We always keep Overtunes fully functional</h2>
              <p className='text-gray-200 p-3'>We always welcome feedback from users in managing Overtunes so that it meets our user standards.</p>
            </div>
          </div>
        </section>
        {/* features end */}

        {/* stats start */}
        <section className="text-gray-200 p-10">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4 text-center">
              <div className="p-4 sm:w-1/4 w-1/2 bg-[#262b30]">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-200">180K+</h2>
                <p className="leading-relaxed">Users</p>
              </div>
              <div className="p-4 sm:w-1/4 w-1/2 bg-[#262b30]">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-200">1K+</h2>
                <p className="leading-relaxed">Servers</p>
              </div>
              <div className="p-4 sm:w-1/4 w-1/2 bg-[#262b30]">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-200">40+</h2>
                <p className="leading-relaxed">Daily Listeners</p>
              </div>
              <div className="p-4 sm:w-1/4 w-1/2 bg-[#262b30]">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-200">300+</h2>
                <p className="leading-relaxed">Votes</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* stats end */}

      <Footer />
    </>
  )
}
