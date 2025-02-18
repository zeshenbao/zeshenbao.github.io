import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skills = {
  technical: ["Python", "Diffusion Models", "Flow Models", "ML Theory"],
  languages: [
    { lang: "Swedish", level: "Native" },
    { lang: "English", level: "Proficient" },
    { lang: "Mandarin", level: "Proficient" },
    { lang: "Spanish", level: "Basic" },
    { lang: "German", level: "Beginner" },
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Technical Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {skills.technical.map((skill, index) => (
                <Badge key={index} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Languages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {skills.languages.map((lang, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center text-sm"
                >
                  <span>{lang.lang}</span>
                  <Badge variant="outline">{lang.level}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
