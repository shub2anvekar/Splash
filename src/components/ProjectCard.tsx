import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Project {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'approved' | 'revision';
  thumbnailUrl: string;
  createdAt: number;
}

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800',
    approved: 'bg-green-100 text-green-800',
    revision: 'bg-red-100 text-red-800',
  };

  return (
    <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={onClick}>
      <CardHeader>
        <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
          <img
            src={project.thumbnailUrl}
            alt={project.title}
            className="object-cover w-full h-full"
          />
        </div>
        <CardTitle>{project.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 line-clamp-2">{project.description}</p>
      </CardContent>
      <CardFooter className="justify-between">
        <Badge variant="outline" className={statusColors[project.status]}>
          {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
        </Badge>
        <span className="text-sm text-gray-500">
          {new Date(project.createdAt).toLocaleDateString()}
        </span>
      </CardFooter>
    </Card>
  );
}