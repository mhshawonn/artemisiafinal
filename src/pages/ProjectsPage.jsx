import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import Navbar from "../components/NavBar";
import Footer from "../sections/Footer";
import TitleHeader from "../components/TitleHeader";

const projectSections = [
  {
    id: "ai-agents",
    kicker: "AI Agents",
    title: "AI Agent Development",
    heroCopy:
      "From multi-channel assistants to internal copilots, we design AI agents that stay on-brand, stay grounded, and stay online for your team and customers.",
    heroImage: "/images/poject/medibot.png",
    detailKicker: "AI that ships",
    detailTitle: "Your Expert Agent Partner",
    detailCopy:
      "We craft agent workflows that mix reasoning, retrieval, and automation so you get reliable outcomes—not just clever demos. Every build includes logging, guardrails, and human handoff paths.",
    bullets: [
      "Retrieval-augmented responses tuned to your knowledge bases",
      "Voice, chat, and email coverage with escalation routing",
      "Telemetry, evals, and playbooks so teams can operate confidently",
    ],
    mediaType: "video",
    mediaSrc: "/images/screen.mp4",
    poster: "/images/readme-video-kit.png",
  },
  {
    id: "web",
    kicker: "Web Experience",
    title: "Web Experience Engineering",
    heroCopy:
      "High-conversion sites, dashboards, and portals that blend performance with polish. We pair bold visuals with fast, accessible builds.",
    heroImage: "/images/project2.png",
    detailKicker: "Design to deploy",
    detailTitle: "Your Expert Web Partner",
    detailCopy:
      "We architect modern, maintainable web stacks with thoughtful UX. From landing pages to complex dashboards, every page is optimized for clarity, speed, and conversions.",
    bullets: [
      "Component-driven systems that stay consistent as you scale",
      "Performance budgets with real metrics, not just guesses",
      "SEO-ready foundations plus analytics to measure impact",
    ],
    mediaType: "image",
    mediaSrc: "/images/readme.png",
  },
  {
    id: "apps",
    kicker: "App Development",
    title: "App Development",
    heroCopy:
      "From custom websites to advanced applications, we develop high-performance digital solutions tailored to your needs.",
    heroImage: "/images/project1.png",
    detailKicker: "Built for people",
    detailTitle: "Your Expert Product Partner",
    detailCopy:
      "We ship mobile and desktop apps with resilient architecture, intuitive flows, and room to iterate. Expect clean handoffs, documentation, and a roadmap you can trust.",
    bullets: [
      "Cross-platform React Native builds with native-level polish",
      "Robust API layers with observability and auth baked in",
      "Launch support, analytics, and growth experiments from day one",
    ],
    mediaType: "video",
    mediaSrc: "/images/screen.mp4",
    poster: "/images/readme-video-kit.png",
  },
  {
    id: "machine-learning",
    kicker: "Machine Learning",
    title: "Machine Learning Systems",
    heroCopy:
      "End-to-end ML pipelines—from data ingestion to deployment—that stay explainable, observable, and tuned to your business signals.",
    heroImage: "/images/project3.png",
    detailKicker: "ML, production ready",
    detailTitle: "Your Expert ML Partner",
    detailCopy:
      "We design training and inference workflows with monitoring, evaluation, and cost controls. The result: models that perform in the real world, not just the lab.",
    bullets: [
      "Data pipelines with validation, lineage, and governance hooks",
      "Model monitoring with drift detection and feedback loops",
      "Containerized deployments across cloud or edge targets",
    ],
    mediaType: "image",
    mediaSrc: "/images/readme-bottom.png",
  },
];

const ProjectsPage = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".project-hero",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
      }
    );

    gsap.fromTo(
      ".project-detail",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
        delay: 0.15,
      }
    );
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="pt-32">
        <section className="section-padding flex-center">
          <div className="w-full max-w-5xl flex flex-col items-center gap-6">
            <TitleHeader
              title="Project Portfolio"
              sub="🚀 Build across AI, web, apps, and ML"
            />
            <p className="text-center text-white-50 md:text-lg">
              Every engagement pairs strategy, design, and engineering so you
              get production-ready results—not just prototypes.
            </p>
          </div>
        </section>

        {projectSections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="section-padding flex justify-center"
          >
            <div className="w-full max-w-6xl flex flex-col gap-10">
              <div className="project-hero relative overflow-hidden rounded-3xl card-border shadow-2xl">
                <img
                  src={section.heroImage}
                  alt={section.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
                <div className="relative z-10 p-8 md:p-12 lg:p-16 max-w-2xl space-y-6">
                  <p className="tracking-[0.3em] uppercase text-sm text-white-50">
                    {section.kicker}
                  </p>
                  <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
                    {section.title}
                  </h2>
                  <p className="text-white-50 md:text-lg leading-relaxed">
                    {section.heroCopy}
                  </p>
                  <div className="flex gap-4 flex-wrap">
                    <a
                      href="/#contact"
                      className="px-6 py-3 rounded-full bg-white text-black font-semibold shadow-lg transition duration-300 hover:-translate-y-0.5"
                    >
                      Book a Demo
                    </a>
                    <a
                      href="/#work"
                      className="px-6 py-3 rounded-full border border-white-50 text-white font-semibold transition duration-300 hover:bg-white hover:text-black"
                    >
                      View Home Work
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-detail grid md:grid-cols-2 items-center gap-8 rounded-3xl overflow-hidden bg-white text-black shadow-2xl">
                <div className="p-8 md:p-12 space-y-4">
                  <p className="text-sm font-semibold text-gray-500 uppercase">
                    {section.detailKicker}
                  </p>
                  <h3 className="text-3xl md:text-4xl font-semibold leading-snug">
                    {section.detailTitle}
                  </h3>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    {section.detailCopy}
                  </p>
                  <ul className="space-y-2 text-gray-800">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <span className="mt-1 size-2 rounded-full bg-black" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/#contact"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-black text-white font-semibold shadow-md transition duration-300 hover:-translate-y-0.5 w-fit"
                  >
                    Book a Demo
                    <img
                      src="/images/arrow-right.svg"
                      alt=""
                      className="size-4"
                    />
                  </a>
                </div>

                <div className="p-8 md:p-12 bg-gradient-to-br from-black-100 via-black-50 to-black text-white h-full w-full">
                  <div className="rounded-2xl overflow-hidden shadow-2xl border border-black-50 bg-black-100 h-full">
                    {section.mediaType === "video" ? (
                      <video
                        src={section.mediaSrc}
                        poster={section.poster}
                        controls
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <img
                        src={section.mediaSrc}
                        alt={section.detailTitle}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
