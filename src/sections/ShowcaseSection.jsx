import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase px-4 py-12">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Project 1 */}
        <div
          ref={rydeRef}
          className="flex flex-col md:flex-row items-center gap-8"
        >
          <a
            href="https://github.com/ProgrammingWithNick/Netflix.git"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-1/2"
          >
            <img
              src="/images/project1.png"
              alt="Ryde App Interface"
              className="rounded-xl shadow-lg"
            />
          </a>
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-2xl font-semibold">
              🔥 Smooth. Fast. Beautiful. Just like Netflix, but yours.
            </h2>
            <p className="text-white-50 md:text-xl text-gray-300">
              A stunning Netflix Clone made with ⚡ Vite, 💙 React, and 💡 TypeScript —
              featuring cinematic UI animations, live search, autoplay trailers, and more.
            </p>
          </div>
        </div>

        {/* Project 2 */}
        <div
          ref={libraryRef}
          className="flex flex-col md:flex-row-reverse items-center gap-8"
        >
          <a
            href="https://github.com/ProgrammingWithNick/MobileShop-With-AdminSide.git"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-1/2"
          >
            <img
              src="/images/project2.png"
              alt="Library Management Platform"
              className="rounded-xl shadow-lg bg-[#FFEFDB]"
            />
          </a>
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-2xl font-semibold">
              Mobile Shop is a feature-rich e-commerce platform designed to provide seamless product management and shopping experiences.
            </h2>
          </div>
        </div>

        {/* Project 3 */}
        <div
          ref={ycDirectoryRef}
          className="flex flex-col md:flex-row items-center gap-8"
        >
          <a
            href="https://github.com/ProgrammingWithNick/reactjs_website.git"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-1/2"
          >
            <img
              src="/images/project3.png"
              alt="YC Directory App"
              className="rounded-xl shadow-lg bg-[#FFE7EB]"
            />
          </a>
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-2xl font-semibold">
              The simple website Platform
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
