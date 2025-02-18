import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const education = [
  {
    school: "KTH Royal Institute of Technology",
    degree: "MSc in Engineering Physics",
    period: "2019 – 2025",
  },
  {
    school: "Uppsala University",
    degree: "Astronomy Courses",
    period: "2019 & 2020",
  },
  {
    school: "Södra Latin",
    degree: "Natural Science Programme",
    period: "2016 – 2019",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20">
      <h2 className="text-3xl font-bold mb-8">Education</h2>
      <div className="grid gap-6">
        {education.map((edu, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{edu.school}</CardTitle>
                  <CardDescription>{edu.degree}</CardDescription>
                </div>
                <span className="text-sm text-muted-foreground">{edu.period}</span>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
      
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Achievements</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Scania Student Competition Winner (2019)</li>
          <li>Mathematics Scholarship (2016)</li>
          <li>Unga Forskare Semifinalist (2019)</li>
        </ul>
      </div>
    </section>
  );
}
