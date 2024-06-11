// components/Advantages.js
import Image from "next/image";

const Advantages = () => {
  const svgIcon = (
    <Image src="https://articlerewritertool.com/svg/advantage.svg" width={400} height={400} alt="Advantages" className="pl-10"/>
  );

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-6">Advantages of our AI Article Rewriter Tool</h2>
          <p className="mb-6 text-md">
            Our developers have worked hard to meet the needs of various writers, resulting in the AI Article Rewriter Tool.
            Our website is the go-to solution for writing content, catering to both professionals, experts, and beginners.
            With a constantly updated and improved word database, our AI rewriter tool ensures precision and meets the needs of all authors and professionals.
          </p>
          <ul className="list-disc pl-5 space-y-4">
            <li className="text-md">No login required</li>
            <li className="text-md">No fees</li>
            <li className="text-md">No need for personal or banking data</li>
            <li className="text-md">No verification required</li>
            <li className="text-md">Unlimited original content creation</li>
          </ul>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
          <div className="bg-dark p-20 rounded-l-full">
            {svgIcon}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
