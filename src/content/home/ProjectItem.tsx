import ImageColumnPanel from '@/components/common/ImageColumnPanel';
import Project from '@/app/api/projects/project.d';
import Link from 'next/link';

const ProjectItem: React.FC<Project> = ({ image, alt, title, subtitle, href }) => {
  return (
    <ImageColumnPanel image={image} alt={alt}>
      <h2>
        {href ? (
          <Link
            className="underline text-zinc-100 hover:text-zinc-300"
            target="__blank"
            href={href}
          >
            {title}
          </Link>
        ) : (
          <>{title}</>
        )}
      </h2>
      <h3>{subtitle}</h3>
    </ImageColumnPanel>
  );
};

export default ProjectItem;
