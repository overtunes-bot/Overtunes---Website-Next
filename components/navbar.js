import Image from "next/image";
import Link from "next/link";

export default function Navbar() {

    function toggleNavbar() {
        document.getElementById("navbar").classList.toggle("hidden")
    }

    return (
        <nav className="border-2 md:flex justify-between items-center border-[#3C4652] px-8 py-4">
            <div className="flex justify-between items-center">
                <Image width={'50px'} height={'50px'} src={'/favicon-32x32.png'} alt="Overtunes logo"></Image>
                <button onClick={toggleNavbar} className="md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
            <div id="navbar" className="border-[#3C4652] border-2 md:border-0 mt-10 md:mt-0 p-5 md:p-0 hidden md:block">
                <div className="flex md:flex-row flex-col gap-4 text-gray-300">
                    <a href="/commands" className="border-2 border-[#3C4652] md:border-0 p-2 uppercase font-spline">Commands</a>
                    <a href='https://discord.gg/hM8U8cHtwu' rel='noopener noreferrer' target={'_blank'} className="border-2 border-[#3C4652] md:border-0 p-2 uppercase font-spline">Support</a>
                    <a href="/blog" className="border-2 border-[#3C4652] md:border-0 p-2 uppercase font-spline">Blog</a>
                    <button className="uppercase bg-[#3C4652] py-2 rounded px-7">Invite</button>
                </div>
            </div>
        </nav>
    )
}