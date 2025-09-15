import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>
      <div className="container mx-auto relative z-10">
        <div className="py-16 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 space-y-6 text-center lg:text-left">
              <div className="space-y-4">
                <img
                  src="/logo-white.svg"
                  alt="Logo"
                  className="mx-auto lg:mx-0 w-32 md:w-36 transition-transform duration-300 hover:scale-105"
                />
                <div className="w-12 h-0.5 bg-white/30 mx-auto lg:mx-0"></div>
              </div>

              <p className="text-base max-w-sm mx-auto lg:mx-0 font-light leading-relaxed text-white/90">
                Top 50 Future Companies in UAE
              </p>

              <div className="pt-4">
                <p className="text-sm text-white/70 font-light">
                  Empowering students to achieve their academic excellence
                  through personalized tutoring and innovative learning
                  solutions.
                </p>
              </div>
            </div>

            <div className="lg:col-span-3 text-center lg:text-left">
              <h3 className="text-lg font-semibold mb-6 relative">
                Quick Links
                <div className="w-8 h-0.5 bg-white/40 mx-auto lg:mx-0 mt-2"></div>
              </h3>

              <nav className="space-y-4">
                <a
                  href="/about"
                  className="block text-sm font-light text-white/90 hover:text-white transition-all duration-300 hover:translate-x-1 lg:hover:translate-x-2"
                >
                  About Us
                </a>
                <a
                  href="/contact"
                  className="block text-sm font-light text-white/90 hover:text-white transition-all duration-300 hover:translate-x-1 lg:hover:translate-x-2"
                >
                  Contact Us
                </a>
                <a
                  href="/join-us"
                  className="block text-sm font-light text-white/90 hover:text-white transition-all duration-300 hover:translate-x-1 lg:hover:translate-x-2"
                >
                  Join Us
                </a>
              </nav>
            </div>

            <div className="lg:col-span-5 space-y-8 text-center lg:text-right">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold relative">
                  Follow Us
                  <div className="w-8 h-0.5 bg-white/40 mx-auto lg:ml-auto lg:mr-0 mt-2"></div>
                </h3>

                <div className="flex justify-center lg:justify-end gap-4">
                  <a
                    href="https://wa.link/456qjx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white/20 group-hover:scale-110">
                      <FaWhatsapp className="text-xl group-hover:text-white transition-colors duration-300" />
                    </div>
                  </a>
                  <a
                    href="https://www.instagram.com/thiqa.education/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white/20 group-hover:scale-110">
                      <FaInstagram className="text-xl group-hover:text-white transition-colors duration-300" />
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/thiqa-tutoring/?viewAsMember=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white/20 group-hover:scale-110">
                      <FaLinkedin className="text-xl group-hover:text-white transition-colors duration-300" />
                    </div>
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-base font-medium text-white/90">
                  Download Our App
                </h4>

                <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row justify-center lg:justify-end items-center gap-3">
                  <a
                    href="https://apps.apple.com/app/your_app_id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <img
                      src="/OL.svg"
                      alt="Download on App Store"
                      className="w-32 md:w-36 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg"
                    />
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=your_app_id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <img
                      src="/google-play.svg"
                      alt="Get it on Google Play"
                      className="w-32 md:w-36 border border-white/20 rounded-lg transition-all duration-300 group-hover:scale-105 group-hover:border-white/40 group-hover:shadow-lg"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 py-6 px-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-sm text-white/70 font-light">
              © {new Date().getFullYear()} Thiqa Education. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
