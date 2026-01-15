import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/mathsntechclub/",
      label: "Facebook",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/mntc.nitd/",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/maths-n-tech-club-nit-durgapur/",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="relative bg-[#0b0f1a] text-white overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-transparent to-purple-600/10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14 flex flex-col items-center text-center gap-6">

        {/* Club Identity */}
        <h2 className="text-xl sm:text-2xl font-semibold tracking-wide">
          Maths N Tech Club
          <span className="block text-xs sm:text-sm text-indigo-400 font-medium tracking-wider mt-1">
            National Institute of Technology, Durgapur
          </span>
        </h2>

        {/* Elegant Statement */}
        <p className="max-w-xl text-xs sm:text-sm text-gray-400 leading-relaxed">
          The official knowledge and technical club of NIT Durgapur,  
          dedicated to fostering analytical thinking, innovation, and
          technological excellence.
        </p>

        {/* Social Platforms */}
        <div className="flex gap-6 sm:gap-8 pt-2 sm:pt-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="group relative"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full 
                              border border-white/10 
                              bg-white/5 
                              flex items-center justify-center
                              transition-all duration-300
                              group-hover:border-indigo-400/40
                              group-hover:bg-indigo-500/10">
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300 transition-colors duration-300 group-hover:text-indigo-400" />
              </div>
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full max-w-md sm:max-w-lg h-px bg-gradient-to-r from-transparent via-gray-600/40 to-transparent mt-4 sm:mt-6" />

        {/* Copyright */}
        <p className="text-[10px] sm:text-xs text-gray-500 leading-relaxed">
          © {new Date().getFullYear()} Maths N Tech Club (MNTC),  
          National Institute of Technology, Durgapur.  
          All rights reserved.
        </p>

      </div>
    </footer>
  );
}
