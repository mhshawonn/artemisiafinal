import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import Navbar from "../components/NavBar";
import Footer from "../sections/Footer";
import TitleHeader from "../components/TitleHeader";
import { growthAgents } from "../constants";

const AgentsPage = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".agent-card",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.inOut",
        stagger: 0.15,
      }
    );
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <section className="section-padding flex-center">
        <div className="w-full h-full md:px-10 px-5">
          <TitleHeader
            title="All AI Agents"
            sub="📈 Deep-dive into every builder"
          />
          <div className="mt-12 grid xl:grid-cols-2 gap-6">
            {growthAgents.map((agent, index) => (
              <div
                key={agent.title}
                className="card-border agent-card rounded-xl p-6 flex flex-col gap-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold">0{index + 1}</span>
                  <span className="text-white-50">Growth Agent</span>
                </div>
                <h3 className="text-2xl font-semibold">{agent.title}</h3>
                <p className="text-white-50 leading-relaxed">{agent.desc}</p>
                <ul className="list-disc ms-5 flex flex-col gap-2 text-white-50">
                  {agent.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <a
              href="/"
              className="card-border px-6 py-3 rounded-lg font-semibold hover:opacity-80 transition"
            >
              Back to Home
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AgentsPage;
