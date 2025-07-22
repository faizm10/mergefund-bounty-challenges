import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const footerSections = [
    {
      title: "Platform",
      links: ["Discover", "Bounties", "Leaderboard", "Projects"],
    },
    {
      title: "Resources",
      links: ["Documentation", "API Reference", "Support Center", "Developer Blog"],
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Privacy Policy", "Terms of Service"],
    },
  ]

  const founders = [
    "Isaac Gbaba (Co-Founder)",
    "Matthew Boekamp (Co-Founder)",
    "Damien Johnson (Co-Founder)",
    "Evelyn Yaskin (Co-Founder)",
    "Alvin He (Co-Founder)",
  ]

  return (
    <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4">
              MergeFund
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering developers to earn real rewards for meaningful open-source contributions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <h3 className="text-white font-semibold mb-4">Contact MergeFund</h3>
          <div className="text-gray-400 mb-4">
            Email:{" "}
            <a href="mailto:support@mergefund.org" className="text-blue-400 hover:text-blue-300">
              support@mergefund.org
            </a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 text-sm text-gray-400">
            {founders.map((founder, index) => (
              <div key={index}>{founder}</div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 MergeFund. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
