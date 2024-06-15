// components/FeaturesSection.jsx

import { FaRegLightbulb, FaRegSmile, FaShieldAlt, FaRocket, FaCogs, FaPenFancy } from 'react-icons/fa';

const features = [
  {
    icon: <FaRegLightbulb className="text-indigo-600 w-12 h-12" />,
    title: "Deep Spinning",
    description: "Our tool rewrites content with deep understanding to ensure quality."
  },
  {
    icon: <FaRegSmile className="text-indigo-600 w-12 h-12" />,
    title: "User-Friendly",
    description: "Easily rewrite articles with an intuitive interface."
  },
  {
    icon: <FaShieldAlt className="text-indigo-600 w-12 h-12" />,
    title: "Secure",
    description: "Your data is safe with us, ensuring privacy and security."
  },
  {
    icon: <FaRocket className="text-indigo-600 w-12 h-12" />,
    title: "Fast Processing",
    description: "Experience quick rewriting speeds for large amounts of text."
  },
  {
    icon: <FaCogs className="text-indigo-600 w-12 h-12" />,
    title: "Customizable",
    description: "Tailor the rewriting settings to fit your specific needs."
  },
  {
    icon: <FaPenFancy className="text-indigo-600 w-12 h-12" />,
    title: "High Quality",
    description: "Generate high-quality content that reads naturally and accurately."
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-12 bg-gradient-to-tl from-white via-red to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Features of our AI Article Rewriter Tool</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-grey rounded-lg shadow-lg ">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
