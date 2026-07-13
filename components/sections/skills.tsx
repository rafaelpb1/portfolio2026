"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { skills } from "@/data/skills";
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
          title="Skills"
          description="Tecnologias que uso no dia a dia e competências que levo para o time."
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
      </div>
    </section>
  );
}
