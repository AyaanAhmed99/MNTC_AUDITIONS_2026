export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4 sm:px-6 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12 sm:mb-14">
          <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            About MNTC
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            The official knowledge club of NIT Durgapur
          </p>
        </div>

        {/* Content Cards */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 hover:-translate-y-1 transition">
            <h2 className="text-lg sm:text-xl font-semibold mb-3 text-indigo-600">
              Our Origin
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Maths N Tech Club (MNTC) was formed in 2004 when Regional Engineering
              College Durgapur became the National Institute of Technology,
              Durgapur. Since then, MNTC has stood as the official knowledge club
              of the institute.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 hover:-translate-y-1 transition">
            <h2 className="text-lg sm:text-xl font-semibold mb-3 text-purple-600">
              Our Vision
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              We aim to stimulate passion for mathematics and nurture interest
              in modern technology by promoting analytical reasoning, logical
              thinking, and curiosity-driven learning.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 hover:-translate-y-1 transition">
            <h2 className="text-lg sm:text-xl font-semibold mb-3 text-indigo-600">
              What We Do
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              MNTC organises workshops, competitions, and fun events throughout
              the year that rekindle curiosity and inspire students to explore
              mathematics and emerging technologies.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 hover:-translate-y-1 transition">
            <h2 className="text-lg sm:text-xl font-semibold mb-3 text-purple-600">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Our continuous mission is to share knowledge about recent
              technical advancements while strengthening analytical and logical
              aptitude through engaging experiences.
            </p>
          </div>
        </div>

        {/* Website Link */}
        <div className="mt-12 sm:mt-14 text-center">
          <a
            href="https://mntcnitdgp.co.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition"
          >
            Visit Our Official Website
          </a>
        </div>

      </div>
    </div>
  );
}
