import Link from "next/link";
import { featuredProjects } from "@/lib/featured-projects";
import { VectorIcon } from "@/components/vector-icon";
import { TigerScene } from "@/components/tiger-scene";
import "@/app/studio.css";

const methods = [
  { title: "Exploration", description: "Find the useful question." },
  { title: "Strategy", description: "Choose a clear direction." },
  { title: "Production", description: "Design, engineer and ship." },
];

export function StudioHome() {
  return (
    <main id="main-content" className="studio-home">
      <section className="studio-hero">
        <TigerScene />
        <div className="container hero-content">
          <h1>Software.<br /><em>Applied AI.</em></h1>
          <p>Strategy, design and engineering.</p>
          <Link href="#work" className="btn btn-fill">Explore work <VectorIcon name="down-right" /></Link>
        </div>
      </section>
      <section id="work" className="container selected-work">
        <span id="companies" className="anchor-target" aria-hidden="true" />
        <h2>Selected work.</h2>
        <div className="selected-projects">
          {featuredProjects.map((project) => (
            <article className="selected-project" key={project.name}>
              <div className="project-identity">
                <h3>{project.name === "KeyboardShortcuts" ? <>Keyboard<wbr />Shortcuts</> : project.name === "forecast.social" ? <>forecast.<wbr />social</> : project.name}</h3>
                <p className="project-status">{project.status}</p>
              </div>
              <p className="project-description">{project.summary}</p>
              {project.href ? <a href={project.href} target="_blank" rel="noopener noreferrer" className="project-link" aria-label={`Explore ${project.name} (opens in a new tab)`}><VectorIcon /></a> : null}
            </article>
          ))}
        </div>
        <p className="workflow-development">Business Workflow Plugins <span aria-hidden="true">·</span> <span>Private testing</span></p>
      </section>
      <section id="approach" className="container minimal-method" aria-label="Our approach">
        {methods.map((method) => <article key={method.title}><h2>{method.title}</h2><p>{method.description}</p></article>)}
      </section>
      <div id="studio" className="container studio-byline">Led by Dr. Syed Irfan. <Link href="/about">About Altcorp <VectorIcon /></Link></div>
      <section className="container draft-contact-band">
        <h2>Let’s build.</h2>
        <Link href="/contact" className="btn btn-light">Talk to us <VectorIcon /></Link>
        <a href="mailto:contact@altcorp.in">contact@altcorp.in</a>
      </section>
    </main>
  );
}
