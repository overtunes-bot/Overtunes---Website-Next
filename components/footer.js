export default function Footer() {
    return (
        <footer className='border-[#3C4652] border-2 bg-[#04182E]'>
            <div className='p-10 flex flex-col md:flex-row gap-4'>
                <div className='border-[#3C4652] border-2 p-2 md:p-6 lg:p-10'>
                    <h2 className='text-gray-200 font-bold text-2xl'>Overtunes</h2>
                    <p className='text-gray-300/80 mt-2'>The Best Music Bot For Discord</p>
                </div>
                <div className='border-[#3C4652] uppercase border-2 flex gap-3 p-2 grow md:text-xl lg:text-2xl'>
                    <div className='border-[#3C4652] border-2 p-2 md:p-6 md:gap-5 flex flex-col gap-2 grow'>
                        <h3 className='text-gray-200 font-semibold'>Social</h3>
                        <a href='https://discord.gg/hM8U8cHtwu' rel='noopener noreferrer' target={'_blank'} className='text-gray-200/70'>Discord</a>
                        <a href='https://github.com/overtunes-bot' rel='noopener noreferrer' target={'_blank'} className='text-gray-200/70'>Github</a>
                    </div>
                    <div className='border-[#3C4652] border-2 p-2 md:p-6 md:gap-5 flex flex-col gap-2 grow'>
                        <h3 className='text-gray-200 font-semibold'>Content</h3>
                        <a href="/commands" className='text-gray-200/70'>Commands</a>
                        <a href='https://discord.gg/hM8U8cHtwu' rel='noopener noreferrer' target={'_blank'} className='text-gray-200/70'>Support</a>
                        <a href="/blog" className='text-gray-200/70'>Blog</a>
                    </div>
                </div>
            </div>
            <div className='p-2 md:p-6 flex justify-between items-center'>
                <p className='text-gray-300 text-[10px] md:text-xl'>© Overtunes {new Date().getFullYear()} - All rights reserved.</p>
                <p className='text-right font-mono text-[12px] md:text-xl text-gray-300'>Made with 💖 by Vann#3784</p>
            </div>
        </footer>
    )
}