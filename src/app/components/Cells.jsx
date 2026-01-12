import { Briefcase, Palette, Code2, Wallet } from "lucide-react";

export default function Cells() {
  const cells = [
    {
      title: "Management",
      icon: Briefcase,
      info: "Handles the planning and smooth execution of all club activities.",
      domains: [
        "Event Management",
      ],
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      title: "Design",
      icon: Palette,
      info: "Creates the visual identity and creative assets of the club.",
      domains: [
        "Graphic Design",
        "Video Editing",
      ],
      gradient: "from-pink-500 to-purple-500",
    },
    {
      title: "Development",
      icon: Code2,
      info: "Builds technical solutions and works on innovation-driven projects.",
      domains: [
        "Web Development",
        "Research and Development",
      ],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Finance",
      icon: Wallet,
      info: "Manages finances and contributes to content-related activities.",
      domains: [
        "Content",
        "Finance Enthusiast",
      ],
      gradient: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="max-w-6xl mx-auto">

        {/* Page Title */}
        <h1 className="text-4xl font-extrabold text-center mb-14">
          Our Cells
        </h1>

        {/* Cells Grid */}
        <div className="grid gap-10 md:grid-cols-2">
          {cells.map((cell) => {
            const Icon = cell.icon;
            return (
              <div
                key={cell.title}
                className="bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-2 transition duration-300"
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-r ${cell.gradient} flex items-center justify-center text-white mb-5`}
                >
                  <Icon size={28} />
                </div>

                {/* Title */}
                <h2 className="text-2xl font-semibold mb-2">
                  {cell.title}
                </h2>

                {/* Info */}
                <p className="text-gray-600 mb-4">
                  {cell.info}
                </p>

                {/* Domains */}
                <div className="mt-4">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                    Domains
                  </h3>
                  <ul className="space-y-1 list-disc list-inside text-gray-700">
                    {cell.domains.map((domain) => (
                      <li key={domain}>{domain}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
