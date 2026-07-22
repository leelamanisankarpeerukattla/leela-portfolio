import { profile } from '@/data/profile';
import ProjectCard from './ProjectCard';
import Section from './Section';

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured Projects"
      title="Production-oriented engineering work"
      description="A concise view of the systems, APIs, and product workflows I build with strong engineering fundamentals."
    >
      <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2">
        {profile.projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
}
