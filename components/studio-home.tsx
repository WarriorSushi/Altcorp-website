import Image from "next/image";
import Link from "next/link";
import { featuredProjects } from "@/lib/featured-projects";
import "@/app/studio.css";

const methods = [
  {
    title: "Exploration",
    description:
      "Map the problem, examine the workflow and test the riskiest assumptions with prototypes.",
    icon: "search",
  },
  {
    title: "Strategy",
    description:
      "Define the audience, product scope and interaction model. Decide what the first useful release needs.",
    icon: "layers",
  },
  {
    title: "Production",
    description:
      "Design and engineer the interface, connect the systems, and verify the experience across desktop and mobile.",
    icon: "code",
  },
];

function MethodIcon({ type }: { type: string }) {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {type === "search" ? (
        <>
          <circle cx="13" cy="13" r="8" />
          <path d="m19 19 7 7" />
        </>
      ) : type === "layers" ? (
        <>
          <path d="m3 10 12-7 12 7-12 7-12-7Z" />
          <path d="m3 15 12 7 12-7M3 20l12 7 12-7" />
        </>
      ) : (
        <>
          <path d="m10 7-7 8 7 8m10-16 7 8-7 8m-3-20-4 24" />
        </>
      )}
    </svg>
  );
}

export function StudioHome() {
  return (
    <main id="main-content" className="studio-home">
      <section className="studio-hero">
        <Image
          src="/art/material-study-monochrome.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-art"
        />
        <div className="container hero-content">
          <h1>
            Software. Systems.
            <br />
            <em>Applied AI.</em>
          </h1>
          <p>
            Altcorp develops software for visual planning, product feedback and
            AI conversation, alongside research tools, games and forecasting
            systems.
          </p>
          <Link href="#work" className="btn btn-fill">
            See the work <span aria-hidden="true">↘</span>
          </Link>
        </div>
        <div className="container hero-baseline">
          <span>Software products.</span>
          <span>Active development.</span>
          <span>Private testing.</span>
        </div>
      </section>

      <section id="work" className="container selected-work section-padding">
        <span id="companies" className="anchor-target" aria-hidden="true" />
        <p className="section-label">01 / Selected work</p>
        <h2>
          Specific products.
          <br />
          <em>Real work.</em>
        </h2>
        <p className="work-intro">
          Planning, feedback, AI conversation, research, games and forecasting —
          each project has a specific purpose and a clear stage of development.
        </p>
        <div className="selected-projects">
          {featuredProjects.map((project) => (
            <article className="selected-project" key={project.name}>
              <div>
                <p className="project-category">{project.category}</p>
                <h3>
                  {project.name === "KeyboardShortcuts" ? (
                    <>Keyboard<wbr />Shortcuts</>
                  ) : project.name === "forecast.social" ? (
                    <>forecast.<wbr />social</>
                  ) : project.name}
                </h3>
                <p className="project-status">{project.status}</p>
              </div>
              <div>
                <p className="project-description">{project.description}</p>
                <ul className="project-focus">
                  {project.focus.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  {project.name === "Hyperstate"
                    ? "Explore Hyperstate"
                    : "View project"}{" "}
                  <span aria-hidden="true">↗</span>
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="container workflow-development">
        <p className="section-label">Further development / Private testing</p>
        <div>
          <h2>Business Workflow Plugins</h2>
          <p className="body-text">
            Business tools for ChatGPT workflows, currently in private testing.
          </p>
          <span className="workflow-status">Private testing</span>
        </div>
      </section>

      <section id="approach" className="container draft-method-section">
        <p className="section-label">02 / How we work</p>
        <h2>
          From a specific problem
          <br />
          <em>to working software.</em>
        </h2>
        <div className="draft-method-list">
          {methods.map((method) => (
            <article key={method.title}>
              <span className="method-icon">
                <MethodIcon type={method.icon} />
              </span>
              <h3>{method.title}</h3>
              <p>{method.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="studio" className="container draft-studio">
        <p className="section-label">03 / Altcorp</p>
        <div>
          <h2>
            Product direction.
            <br />
            <em>Interface craft.</em>
          </h2>
          <div>
            <p className="body-text">
              Led by Dr. Syed Irfan, Altcorp brings product strategy, software
              development and AI workflow exploration into one practice.
            </p>
            <p className="body-text">
              The portfolio spans planning, product feedback, AI conversation,
              research workflows, puzzle interaction and reputation-based
              forecasting. Each project is presented with its current stage.
            </p>
          </div>
        </div>
      </section>

      <section className="container draft-contact-band">
        <h2>Have a product in mind?</h2>
        <Link href="/contact" className="btn btn-light">
          Discuss a project <span aria-hidden="true">↗</span>
        </Link>
        <a href="mailto:contact@altcorp.in">contact@altcorp.in</a>
      </section>
    </main>
  );
}
