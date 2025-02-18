import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const experiences = [
  {
    title: "Undergraduate Researcher",
    company: "Oskar Klein Centre",
    period: "2022 – Present",
    description: "Developing metamaterial absorbers with ongoing research publications.",
  },
  {
    title: "Teaching Assistant",
    company: "KTH Royal Institute of Technology",
    period: "2021 – 2022",
    description: "Taught Python in multiple programming courses.",
  },
  {
    title: "Physics & Math Tutor",
    company: "Studybuddy",
    period: "2021",
    description: "Provided one-on-one tutoring in physics and mathematics.",
  },
  {
    title: "Structure Engineer",
    company: "Rocketry Engineering Association",
    period: "2019 – 2020",
    description: "Built and tested rocket components using fiberglass.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <h2 className="text-3xl font-bold mb-8">Experience</h2>
      <div className="grid gap-6">
        {experiences.map((exp, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{exp.title}</CardTitle>
                  <CardDescription>{exp.company}</CardDescription>
                </div>
                <span className="text-sm text-muted-foreground">{exp.period}</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{exp.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
