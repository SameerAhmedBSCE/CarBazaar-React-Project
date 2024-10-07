import React from "react";

const Footer = () => {
  return (
    <div className="mt-10">
      <hr className="border-t border-gray-300" />

      <footer className="p-4 flex flex-col justify-center lg:flex-row lg:justify-between items-center flex-wrap">
        <p className="text-center text-gray-600 font-medium mt-2">
          Copyright &copy; 2024. A project of{" "}
          <span
            className="font-extrabold text-blue-600 hover:text-blue-800 hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            Bano Qabil 3.0
          </span>{" "}
          developed by{" "}
          <span
            className="font-extrabold text-blue-600 hover:text-blue-800 hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            Okasha & Sameer
          </span>
          .
        </p>

        <div className="flex flex-col lg:flex-row justify-center items-center mt-4 space-y-2 lg:space-y-0 lg:space-x-8">
          {/* Follow Us Section */}
          <div className="flex justify-center items-center">
            <p className="mr-4 text-gray-900 font-medium">Follow Us On:</p>
            <div className="social-cons mb-2 sm:mb-0">
              <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start space-x-4">
                {/* Social Media Links */}
                <a
                  className="text-gray-700 hover:text-blue-600 transition duration-300"
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a
                  className="text-gray-700 hover:text-blue-400 transition duration-300"
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a
                  className="text-gray-700 hover:text-pink-500 transition duration-300"
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a
                  className="text-gray-700 hover:text-blue-700 transition duration-300"
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </span>
            </div>
          </div>

          {/* View Code Section */}
          <div className="flex justify-center items-center">
            <p className="mr-2 text-gray-900 font-medium">View Code:</p>
            <a
              className="text-gray-700 hover:text-gray-900 transition duration-300"
              href="https://github.com/SameerAhmedBSCE/CarBazaar-React-Project"
              target="_blank"
              rel="noreferrer"
            >
              <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M12 0a12 12 0 00-3.79 23.38c.6.11.82-.26.82-.58v-2.1c-3.34.73-4-1.61-4-1.61a3.15 3.15 0 00-1.33-1.75c-1.08-.74.08-.72.08-.72a2.49 2.49 0 011.8 1.2 2.54 2.54 0 003.48 1 2.56 2.56 0 01.76-1.6c-2.67-.31-5.47-1.34-5.47-5.95a4.64 4.64 0 011.23-3.22 4.31 4.31 0 01.12-3.17s1-.32 3.35 1.23a11.4 11.4 0 016.1 0c2.33-1.55 3.35-1.23 3.35-1.23a4.31 4.31 0 01.12 3.17 4.64 4.64 0 011.23 3.22c0 4.62-2.8 5.63-5.47 5.95a2.86 2.86 0 01.82 2.22v3.29c0 .32.22.69.82.58A12 12 0 0012 0z"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
