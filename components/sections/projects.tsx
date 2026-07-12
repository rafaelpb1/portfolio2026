"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GithubIcon } from "@/components/icons/brand-icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { fadeInUp, staggerContainer } from "@/lib/motion-variants";
import { cn } from "@/lib/utils";

export function Projects() {
  const shouldReduceMotion = useReducedMotion();
  const container = shouldReduceMotion ? undefined : staggerContainer(0.1);
  const item = shouldReduceMotion ? undefined : fadeInUp;

  return (
    <section id="projetos" className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projetos"
          title="O que já construí"
          description="Uma seleção dos projetos descritos no meu currículo. Os detalhes completos de cada um chegam em breve."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={container}
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              variants={item}
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className={cn(index === 0 && "lg:col-span-2")}
            >
              <Card className="flex h-full flex-col gap-4">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-heading text-lg font-semibold">
                    {project.title}
                  </h3>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver repositório de ${project.title} no GitHub`}
                      className="shrink-0 text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <GithubIcon className="h-5 w-5" aria-hidden="true" />
                    </a>
                  )}
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {project.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-8 flex justify-center">
          <Button href={profile.social.github} variant="outline" target="_blank" rel="noopener noreferrer">
            Ver todos os repositórios
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
}
