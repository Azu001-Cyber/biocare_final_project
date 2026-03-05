

export default function Footer () {
    return (
        <footer className="bg-teal-50 text-slate-800 border-t border-teal-200">
            <div className="max-w-7xl mx-auto px-6 py-12">
                
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                
                {/* Brand */}
                <div>
                    <div className="flex items-center gap-2 mb-4">
                    <img src="/biocare_rbg.png" alt="Biocare" className="w-20 h-25" />
                    <span className="text-lg font-semibold text-slate-800">
                        Biocare
                    </span>
                    </div>
                    <p className="text-sm text-slate-600 leading-6">
                    Providing accessible, structured medical information 
                    to help users make informed health decisions.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="font-semibold text-slate-800 mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-sm text-slate-600 font-semibold">
                    <li><a href="/" className="hover:text-teal-600 transition">Home</a></li>
                    <li><a href="/" className="hover:text-teal-600 transition">Search</a></li>
                    <li><a href="/about" className="hover:text-teal-600 transition">About</a></li>
                    <li><a href="/contact" className="hover:text-teal-600 transition">Contact</a></li>
                    </ul>
                </div>

                {/* Account */}
                <div>
                    <h4 className="font-semibold text-slate-800 mb-4">Account</h4>
                    <ul className="space-y-2 text-sm text-slate-600 font-semibold">
                    <li><a href="/login" className="hover:text-teal-600 transition">Login</a></li>
                    <li><a href="/signup" className="hover:text-teal-600 transition">Sign Up</a></li>
                    <li><a href="/profile" className="hover:text-teal-600 transition">Profile</a></li>
                    <li><a href="/saved" className="hover:text-teal-600 transition">Saved</a></li>
                    </ul>
                </div>

                {/* Legal */}
                <div>
                    <h4 className="font-semibold text-slate-800 mb-4">Legal</h4>
                    <ul className="space-y-2 text-sm text-slate-600 font-semibold">
                    <li><a href="/privacy" className=" hover:text-teal-600 transition">Privacy Policy</a></li>
                    <li><a href="/terms" className=" hover:text-teal-600 transition">Terms of Service</a></li>
                    <li><a href="/disclaimer" className=" hover:text-teal-600 transition">Medical Disclaimer</a></li>
                    </ul>
                </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-200 mt-10 pt-6 text-sm text-slate-500 text-center font-semibold">
                © 2026 Biocare. All rights reserved. <br />
                Biocare provides health information for educational purposes only and does not replace professional medical advice.
                </div>

            </div>
</footer>
    )
}