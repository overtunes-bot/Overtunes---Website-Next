import Image from "next/image";
import Link from "next/link";

export default function Navbar() {

    function toggleNavbar() {
        document.getElementById("navbar").classList.toggle("-translate-x-full")
        document.getElementById('blur').classList.toggle("opacity-0")
        document.getElementById('blur').classList.toggle("hidden")
    }

    return (
        <nav id="top" className="md:flex justify-between items-center px-8 py-4">
            <div className="flex justify-between items-center">
                <Link href="/" passHref><Image className="cursor-pointer" width={'50px'} height={'50px'} src={'/favicon-32x32.png'} alt="Overtunes logo"></Image></Link>
                <button onClick={toggleNavbar} className="md:hidden">
                    <svg id="=" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
            <div className="hidden md:flex flex-row gap-4 text-gray-300">
                <Link href={'/commands'} passHref><p className="border-2 transition duration-300 hover:text-[#4696e6] cursor-pointer md:border-0 p-2 uppercase font-spline">Commands</p></Link>
                <a href='https://discord.gg/hM8U8cHtwu' rel='noopener noreferrer' target={'_blank'} className="border-2 transition duration-300 hover:text-[#4696e6] md:border-0 p-2 uppercase font-spline">Support</a>
                <Link href={'/blog'} passHref><p className="border-2 cursor-pointer transition duration-300 hover:text-[#4696e6] md:border-0 p-2 uppercase font-spline">Blog</p></Link>
                <a href='https://overtunes.me/invite' rel='noopener noreferrer' target={'_blank'}><button className="uppercase bg-[#4696e6] font-semibold transition duration-300 hover:opacity-70 w-full py-2 rounded px-7">Invite</button></a>
            </div>
            <div id="navbar" className="w-3/4 z-50 px-5 flex flex-col gap-3 py-10 fixed h-full text-gray-200 top-0 left-0 bg-[#36393F] transition ease-in-out transform -translate-x-full">
                <Link href={'/commands'} passHref><p className="transition duration-300 hover:text-[#4696e6] cursor-pointer md:border-0 p-2 uppercase font-spline">Commands</p></Link>
                <a href='https://discord.gg/hM8U8cHtwu' rel='noopener noreferrer' target={'_blank'} className="transition duration-300 hover:text-[#4696e6] md:border-0 p-2 uppercase font-spline">Support</a>
                <Link href={'/blog'} passHref><p className="cursor-pointer transition duration-300 hover:text-[#4696e6] md:border-0 p-2 uppercase font-spline">Blog</p></Link>
                <a href='https://overtunes.me/invite' rel='noopener noreferrer' target={'_blank'}><button className="uppercase bg-[#4696e6] font-semibold transition duration-300 hover:opacity-70 w-full py-2 rounded px-7">Invite</button></a>
            </div>
            <div id="blur" onClick={toggleNavbar} className="w-full hidden fixed h-full top-0 right-0 opacity-0 bg-black/40 transition ease-in-out transform">

            </div>
        </nav>
    )
}