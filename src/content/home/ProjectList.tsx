import Project from '@/app/api/projects/project.d';
import ProjectItem from './ProjectItem';

export async function ProjectList({ data }: { data: Promise<Response> }) {
  const { projects } = await data.then((res) => res.json());
  return (
    <>
      {projects.map((project: Project) => (
        <ProjectItem
          key={project.id}
          id={project.id}
          title={project.title}
          subtitle={project.subtitle}
          image={project.image}
          alt={project.alt}
          href={project.href}
        />
      ))}
    </>
  );
}

export default ProjectList;
