import ImageColumnPanel from '@/components/common/ImageColumnPanel';
import Project from '@/app/api/projects/project.d';

const ProjectItem: React.FC<Project> = ({ image, alt, title, subtitle }) => {
  return (
    <ImageColumnPanel image={image} alt={alt}>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
    </ImageColumnPanel>
  );
};

export default ProjectItem;
