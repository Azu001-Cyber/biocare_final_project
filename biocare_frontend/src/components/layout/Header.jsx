import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-teal-900 border-b border-teal-200 p-3">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer">
            <Link to={'/'}/>
            <img src="/biocare_rbg.png" alt="Biocare" className="w-20 h-25" />
            <span className="text-lg font-semibold text-slate-800">Biocare</span>
            </div>

            {/* Desktop Search */}
            <div className="hidden md:flex flex-1 max-w-xl mx-6">
            <div className="relative w-full">
                <input
                type="text"
                placeholder="Search diseases..."
                className="w-full px-4 py-2 pl-10 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-300 text-white"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
            </div>

            {/* Desktop Auth */}
            <div className="hidden md:flex items-center gap-4">
            <a href="/login" className="text-white hover:text-teal-100 font-semibold transition duration-200 ease-in-out">
                Login
            </a>
            <a
                href="/signup"
                className=" text-white px-4 py-2 rounded-lg hover:bg-teal-500 hover:text-black font-semibold transition duration-400 ease-in"
            >
                Sign Up
            </a>
            </div>

            {/* Mobile Icons */}
            <div className="flex md:hidden items-center gap-4">
            {/* <Search className="w-5 h-5 text-slate-700 cursor-pointer" /> */}
            <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                <X className="w-6 h-6 text-slate-700" />
                ) : (
                <Menu className="w-6 h-6 text-slate-700" />
                )}
            </button>
            </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
            <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-4">
            
            <input
                type="text"
                placeholder="Search diseases..."
                className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <a href="/login" className="block text-slate-700">
                Login
            </a>
            <a
                href="/signup"
                className="block bg-blue-600 text-white px-4 py-2 rounded-lg text-center"
            >
                Sign Up
            </a>
            </div>
        )}
        </header>
    );
}