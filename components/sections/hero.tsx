"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Download } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/icons/brand-icons";
import { GridSpotlightBackground } from "@/components/grid-spotlight-background";
import { profile } from "@/data/profile";
import { fadeInUp, staggerContainer } from "@/lib/motion-variants";
import { buildWhatsAppLink } from "@/lib/utils";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const whatsappLink = buildWhatsAppLink(
    profile.whatsapp.number,
    profile.whatsapp.message
  );

  const container = shouldReduceMotion ? undefined : staggerContainer(0.12, 0.1);
  const item = shouldReduceMotion ? undefined : fadeInUp;

  return (
    <section
      id="topo"
      className="relative overflow-hidden px-4 pt-16 pb-20 sm:px-6 sm:pt-20 sm:pb-28 lg:px-8"
    >
      <GridSpotlightBackground />

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="flex flex-col gap-6 lg:col-span-7"
        >
          <motion.span
            variants={item}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-sm font-medium text-muted-foreground"
          >
            {profile.heroBadge}
          </motion.span>

          <motion.h1
            variants={item}
            className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p variants={item} className="text-xl text-accent sm:text-2xl">
            {profile.role}
          </motion.p>

          <motion.p
            variants={item}
            className="max-w-xl text-base text-muted-foreground sm:text-lg"
          >
            {profile.heroTagline}
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-3 pt-2">
            <Button href={whatsappLink} size="lg" target="_blank" rel="noopener noreferrer">
              Falar no WhatsApp
            </Button>
            <Button
              href={profile.cvUrl}
              size="lg"
              variant="outline"
              download={profile.cvDownloadName}
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Baixar CV
            </Button>
          </motion.div>

          <motion.div variants={item} className="flex items-center gap-2 pt-2">
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de Rafael Luna"
              className="rounded-full p-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <GithubIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Rafael Luna"
              className="rounded-full p-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <LinkedinIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.92 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="lg:col-span-5"
        >
          <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-3xl border border-border bg-muted shadow-sm">
            <Image
              src={profile.photo}
              alt={`Foto de ${profile.name}`}
              fill
              priority
              sizes="(min-width: 1024px) 384px, 320px"
              className="object-cover object-[center_18%]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
