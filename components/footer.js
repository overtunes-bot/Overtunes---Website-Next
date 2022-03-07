import Link from "next/link";

export default function Footer() {
    return (
        <footer className='bg-[#4696e6]'>
            <div className='py-12 px-10 flex flex-col gap-4 mx-auto'>
                <div className="flex flex-col gap-y-5 md:flex-row">
                    <div className='flex-grow'>
                        <h2 className='text-gray-200 font-bold text-2xl md:text-4xl'>Overtunes</h2>
                        <p className='text-gray-300 mt-2 md:text-lg'>The Best Music Bot For Discord</p>
                    </div>
                    <div className='uppercase flex flex-col md:flex-row gap-3 md:gap-0 grow md:text-xl lg:text-2xl'>
                        <div className='md:gap-5 flex flex-col gap-2 grow'>
                            <h3 className='text-gray-200 font-bold text-xl'>Social</h3>
                            <a href='https://discord.gg/hM8U8cHtwu' rel='noopener noreferrer' target={'_blank'} className='text-gray-200 hover:text-gray-200/50'>Discord</a>
                            <a href='https://github.com/overtunes-bot' rel='noopener noreferrer' target={'_blank'} className='text-gray-200 hover:text-gray-200/50'>Github</a>
                        </div>
                        <div className='md:gap-5 flex flex-col gap-2 grow'>
                            <h3 className='text-gray-200 font-bold text-xl'>Content</h3>
                            <Link href={'/commands'} passHref><p className='text-gray-200 cursor-pointer hover:text-gray-200/50'>Commands</p></Link>
                            <a href='https://discord.gg/hM8U8cHtwu' rel='noopener noreferrer' target={'_blank'} className='text-gray-200 hover:text-gray-200/50'>Support</a>
                            <Link href={'/blog'} passHref><p className='text-gray-200 cursor-pointer hover:text-gray-200/50'>Blog</p></Link>
                        </div>
                        <div className='md:gap-5 flex flex-col gap-2 grow'>
                            <h3 className='text-gray-200 font-bold text-xl'>Legal</h3>
                            <Link href={'/privacy'} passHref><p className='text-gray-200 cursor-pointer hover:text-gray-200/50'>Privacy Policy</p></Link>
                            <Link href={'/tos'} passHref><p className='text-gray-200 cursor-pointer hover:text-gray-200/50'>Term Of Service</p></Link>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
                    <div className="flex flex-col">
                        <p className='text-gray-300 md:text-lg'>© Overtunes {new Date().getFullYear()} - All rights reserved.</p>
                        <p className='md:text-lg text-gray-300'>Made with 💖 by Vann#3784</p>
                    </div>
                    <a href="#" className='md:text-xl flex items-center animate-bounce flex-row gap-x-4 text-gray-300 mt-7 font-semibold'>Scroll to top<span className="mt-1"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 md:h-8 w-5 md:w-8" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg></span></a>
                </div>
            </div>
        </footer>
    )
}