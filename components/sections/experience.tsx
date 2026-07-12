"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Award, Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { experience } from "@/data/experience";
import { fadeInUp, staggerContainer } from "@/lib/motion-variants";

export function Experience() {
  const shouldReduceMotion = useReducedMotion();
  const container = shouldReduceMotion ? undefined : staggerContainer(0.15);
  const item = shouldReduceMotion ? undefined : fadeInUp;

  return (
    <section id="experiencia" className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Trajetória"
          title="Experiência"
          description="Onde venho aplicando e testando o que aprendo."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={container}
          className="mt-10 flex flex-col"
        >
          {experience.map((exp, index) => {
            const Icon = exp.type === "work" ? Briefcase : Award;
            const isLast = index === experience.length - 1;

            return (
              <motion.div
                key={exp.title}
                variants={item}
                className="flex gap-5 sm:gap-6"
              >
                <div className="flex flex-col items-center">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-card text-accent">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  {!isLast && <span className="mt-2 w-px flex-1 bg-border" />}
                </div>

                <Card className="mb-6 flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="font-heading text-lg font-semibold">
                      {exp.title}
                    </h3>
                    <span className="text-sm font-medium text-accent">
                      {exp.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {exp.organization}
                    {exp.location ? `, ${exp.location}` : ""}
                  </p>
                  {exp.description && (
                    <p className="mt-3 text-sm text-muted-foreground sm:text-base">
                      {exp.description}
                    </p>
                  )}
                  <ul className="mt-4 flex flex-col gap-2">
                    {exp.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
