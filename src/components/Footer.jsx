import { Link } from "react-router-dom";
import { navLinks } from "../data/navLinks";

export default function Footer() {
    return (
        <footer className="px-6 md:px-16 lg:px-24 xl:px-32 mt-40 w-full text-slate-500">
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-200 pb-6">
                <div className="md:max-w-114">
                    <img className="h-12 md:h-14 w-auto shrink-0" src="/assets/logo.svg" alt="DevSync Logo" width={180} height={56} fetchPriority="high" />
                    <p className="mt-6">
                        DevSync — Simplifying developer collaboration, analytics, and productivity.
                    </p>
                </div>
                <div className="flex-1 flex items-start md:justify-end gap-20">
                    <div>
                        <h2 className="font-semibold mb-5 text-gray-800">Company</h2>
                        <ul className="space-y-2">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.href} className="hover:text-indigo-600">{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-5 text-gray-800">Get in touch</h2>
                        <div className="space-y-2">
                            <p>Follow us on GitHub: <a href="https://github.com/" className="text-indigo-600">github.com/devsync</a></p>
                            <p>Contact: hello@devsync.app</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="pt-4 text-center pb-5">
                DevSync — Simplifying developer collaboration, analytics, and productivity. | Developed By Aman Mishra
            </p>
        </footer>
    );
}