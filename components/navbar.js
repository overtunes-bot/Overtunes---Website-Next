import Image from "next/image";
import Link from "next/link";

export default function Navbar() {

    function toggleNavbar() {
        document.getElementById("navbar").classList.toggle("hidden")
        document.getElementById("=").classList.toggle("hidden")
        document.getElementById("x").classList.toggle("hidden")
    }

    return (
        <nav id="top" className="border-2 md:flex justify-between items-center border-[#3C4652] px-8 py-4">
            <div className="flex justify-between items-center">
                <Link href="/" passHref><Image className="cursor-pointer" width={'50px'} height={'50px'} src={'/favicon-32x32.png'} alt="Overtunes logo"></Image></Link>
                <button onClick={toggleNavbar} className="md:hidden">
                    <svg id="=" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                    <svg id="x" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-300 hidden" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
            <div id="navbar" className="border-[#3C4652] border-2 md:border-0 mt-10 md:mt-0 p-5 md:p-0 hidden md:block">
                <div className="flex md:flex-row flex-col gap-4 text-gray-300">
                    <Link href={'/commands'} passHref><p className="border-2 transition duration-300 hover:text-indigo-300 cursor-pointer border-[#3C4652] md:border-0 p-2 uppercase font-spline">Commands</p></Link>
                    <a href='https://discord.gg/hM8U8cHtwu' rel='noopener noreferrer' target={'_blank'} className="border-2 transition duration-300 hover:text-indigo-300 border-[#3C4652] md:border-0 p-2 uppercase font-spline">Support</a>
                    <Link href={'/blog'} passHref><p className="border-2 cursor-pointer transition duration-300 hover:text-indigo-300 border-[#3C4652] md:border-0 p-2 uppercase font-spline">Blog</p></Link>
                    <a href='https://overtunes.me/invite' rel='noopener noreferrer' target={'_blank'}><button className="uppercase bg-[#3C4652] transition duration-300 hover:opacity-70 w-full py-2 rounded px-7">Invite</button></a>
                </div>
            </div>
        </nav>
    )
}