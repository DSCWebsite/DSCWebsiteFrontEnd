import Image from "next/image";

const FooterComponent = () => {
    return <footer id="footer" className="bg-white dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                    <a href="/" className="flex items-center">
                        <Image src="/main-logo.png" width={30} height={30} className="h-8 me-3" alt="FlowBite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Data Science Club</span>
                    </a>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Explore</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="/" className="hover:underline">Home</a>
                            </li>
                            <li className="mb-4">
                                <a href="/aboutus" className="hover:underline">About us</a>
                            </li>
                            <li className="mb-4">
                                <a href="/events" className="hover:underline">Events</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="https://instagram.com/dsclub.binus" className="hover:underline ">Instagram</a>
                            </li>
                            <li>
                                <a href="https://linkedin.com/company/data-science-club-binus-university/mycompany/" className="hover:underline">LinkedIn</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">Copyright © 2024 Data Science Club. All rights reserved.
                </span>
                
            </div>
        </div>
    </footer>
}

export default FooterComponent;