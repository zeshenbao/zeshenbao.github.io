import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const projects = [
  {
    title: "Master's Thesis",
    year: "2025",
    description: "State-of-the-art deep learning model",
    image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc",
  },
  {
    title: "Denoising Diffusion Probabilistic Models",
    year: "2024",
    description: "Implementation and research of DDPM architecture",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e",
  },
  {
    title: "Metamaterial Absorber Design",
    year: "2022 – Present",
    description: "Research and development of novel metamaterial absorbers",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
  },
  {
    title: "N-body Solar System Simulation",
    year: "2023",
    description: "Physics-based simulation of celestial bodies",
    image: "https://images.unsplash.com/photo-1614642264762-d0a3b8bf3700",
  },
  {
    title: "Ray Tracer & Queue Simulation",
    year: "2021, 2019",
    description: "Computer graphics and system simulation projects",
    image: "https://images.unsplash.com/photo-1634041834359-39e1760b9c56",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Projects</h2>
        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="md:w-2/3">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                      <span className="text-sm text-muted-foreground">
                        {project.year}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{project.description}</p>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}