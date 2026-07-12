"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { certifications, skills } from "@/data/skills";
import { fadeInUp, staggerContainer } from "@/lib/motion-variants";

export function Skills() {
  const shouldReduceMotion = useReducedMotion();
  const container = shouldReduceMotion ? undefined : staggerContainer(0.1);
  const item = shouldReduceMotion ? undefined : fadeInUp;

  return (
    <section id="skills" className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Stack"
          title="Skills & Certificações"
          description="Tecnologias que uso no dia a dia e cursos que complementam a formação acadêmica."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="mt-10 grid gap-4 sm:grid-cols-2"
        >
          {skills.map((group) => (
            <motion.div key={group.category} variants={item}>
              <Card className="flex h-full flex-col gap-4">
                <h3 className="font-heading text-lg font-semibold">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="mt-4"
        >
          <motion.div variants={item}>
            <Card className="flex flex-col gap-4">
              <h3 className="font-heading text-lg font-semibold">
                Cursos & Certificações
              </h3>
              <ul className="flex flex-col gap-3">
                {certifications.map((cert) => (
                  <li
                    key={cert.title}
                    className="flex items-start justify-between gap-4 text-sm"
                  >
                    <span className="flex items-start gap-2">
                      <BadgeCheck
                        className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                        aria-hidden="true"
                      />
                      <span>
                        <span className="font-medium text-foreground">
                          {cert.title}
                        </span>
                        <span className="text-muted-foreground">
                          {" "}
                          · {cert.issuer}
                        </span>
                      </span>
                    </span>
                    <span className="shrink-0 text-muted-foreground">
                      {cert.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
