"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Briefcase, GraduationCap, Languages as LanguagesIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { experience } from "@/data/experience";
import { profile } from "@/data/profile";
import { fadeInUp, staggerContainer } from "@/lib/motion-variants";

export function About() {
  const currentJob = experience.find((item) => item.current) ?? experience[0];
  const shouldReduceMotion = useReducedMotion();
  const container = shouldReduceMotion ? undefined : staggerContainer(0.1);
  const item = shouldReduceMotion ? undefined : fadeInUp;

  return (
    <section id="sobre" className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Sobre mim"
          title="Quem é Rafael"
          description="Um retrato rápido de onde estou e para onde estou indo."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="mt-10 grid gap-4 lg:grid-cols-4 lg:grid-rows-2"
        >
          <motion.div variants={item} className="lg:col-span-2 lg:row-span-2">
            <Card className="flex h-full flex-col gap-4">
              <h3 className="font-heading text-lg font-semibold">Biografia</h3>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                {profile.aboutBio}
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                {profile.objective}
              </p>
            </Card>
          </motion.div>

          <motion.div variants={item} className="lg:col-span-2">
            <Card className="flex h-full flex-col gap-3">
              <div className="flex items-center gap-2 text-accent">
                <Briefcase className="h-5 w-5" aria-hidden="true" />
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  Cargo atual
                </h3>
              </div>
              <p className="text-sm font-medium sm:text-base">{currentJob.title}</p>
              <p className="text-sm text-muted-foreground">
                {currentJob.organization}, {currentJob.location ?? profile.location}
              </p>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="flex h-full flex-col gap-3">
              <div className="flex items-center gap-2 text-accent">
                <GraduationCap className="h-5 w-5" aria-hidden="true" />
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  Formação
                </h3>
              </div>
              <p className="text-sm font-medium sm:text-base">
                {profile.education.degree}
              </p>
              <p className="text-sm text-muted-foreground">
                {profile.education.institution}
              </p>
              <p className="text-sm text-muted-foreground">
                {profile.education.period}
              </p>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="flex h-full flex-col gap-3">
              <div className="flex items-center gap-2 text-accent">
                <LanguagesIcon className="h-5 w-5" aria-hidden="true" />
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  Idiomas
                </h3>
              </div>
              <ul className="flex flex-col gap-1.5">
                {profile.languages.map((lang) => (
                  <li
                    key={lang.name}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="text-foreground">{lang.name}</span>
                    <span className="text-muted-foreground">{lang.level}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="mt-4 grid gap-4 sm:grid-cols-2"
        >
          {profile.stats.map((stat) => (
            <motion.div key={stat.label} variants={item}>
              <Card className="flex flex-col items-center gap-1 text-center">
                <span className="font-heading text-3xl font-semibold text-accent">
                  {stat.value}
                </span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
