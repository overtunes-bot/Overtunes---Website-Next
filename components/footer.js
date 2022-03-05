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
                            <a href='https://discord.gg/hM8U8cHtwu' rel='noopener noreferrer' target={'_blank'} className='text-gray-200 hover:text-gray-200'>Discord</a>
                            <a href='https://github.com/overtunes-bot' rel='noopener noreferrer' target={'_blank'} className='text-gray-200 hover:text-gray-200'>Github</a>
                        </div>
                        <div className='md:gap-5 flex flex-col gap-2 grow'>
                            <h3 className='text-gray-200 font-bold text-xl'>Content</h3>
                            <Link href={'/commands'} passHref><p className='text-gray-200 cursor-pointer hover:text-gray-200'>Commands</p></Link>
                            <a href='https://discord.gg/hM8U8cHtwu' rel='noopener noreferrer' target={'_blank'} className='text-gray-200 hover:text-gray-200'>Support</a>
                            <Link href={'/blog'} passHref><p className='text-gray-200 cursor-pointer hover:text-gray-200'>Blog</p></Link>
                        </div>
                        <div className='md:gap-5 flex flex-col gap-2 grow'>
                            <h3 className='text-gray-200 font-bold text-xl'>Legal</h3>
                            <Link href={'/privacy'} passHref><p className='text-gray-200 cursor-pointer hover:text-gray-200'>Privacy Policy</p></Link>
                            <Link href={'/tos'} passHref><p className='text-gray-200 cursor-pointer hover:text-gray-200'>Term Of Service</p></Link>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <p className='text-gray-300 md:text-lg'>© Overtunes {new Date().getFullYear()} - All rights reserved.</p>
                    <p className='md:text-lg text-gray-300'>Made with 💖 by Vann#3784</p>
                </div>
            </div>
        </footer>
    )
}