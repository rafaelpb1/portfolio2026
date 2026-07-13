"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import type { ComponentType } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/icons/brand-icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { profile } from "@/data/profile";
import { fadeInUp, staggerContainer } from "@/lib/motion-variants";
import { buildWhatsAppLink, socialHandle } from "@/lib/utils";

type ContactMethod = {
  label: string;
  value: string;
  href: string;
  icon: ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  external?: boolean;
};

export function Contact() {
  const shouldReduceMotion = useReducedMotion();
  const container = shouldReduceMotion ? undefined : staggerContainer(0.1);
  const item = shouldReduceMotion ? undefined : fadeInUp;

  const whatsappLink = buildWhatsAppLink(
    profile.whatsapp.number,
    profile.whatsapp.message
  );

  const methods: ContactMethod[] = [
    {
      label: "WhatsApp",
      value: "Entre em contato agora",
      href: whatsappLink,
      icon: WhatsappIcon,
      external: true,
    },
    {
      label: "E-mail",
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: Mail,
    },
    {
      label: "GitHub",
      value: socialHandle(profile.social.github),
      href: profile.social.github,
      icon: GithubIcon,
      external: true,
    },
    {
      label: "LinkedIn",
      value: socialHandle(profile.social.linkedin),
      href: profile.social.linkedin,
      icon: LinkedinIcon,
      external: true,
    },
  ];

  return (
    <section id="contato" className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          align="center"
          eyebrow="Contato"
          title="Vamos conversar?"
          description="Disponível paraa oportunidades, projetos e trocas com outros desenvolvedores. Escolha o canal que preferir."
          className="mx-auto"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="mt-10 grid gap-4 sm:grid-cols-2"
        >
          {methods.map((method) => (
            <motion.a
              key={method.label}
              href={method.href}
              target={method.external ? "_blank" : undefined}
              rel={method.external ? "noopener noreferrer" : undefined}
              variants={item}
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="block"
            >
              <Card className="flex h-full items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-muted text-accent">
                  <method.icon className="h-5 w-5" aria-hidden />
                </span>
                <span className="flex flex-col">
                  <span className="text-sm text-muted-foreground">
                    {method.label}
                  </span>
                  <span className="font-medium text-foreground">
                    {method.value}
                  </span>
                </span>
              </Card>
            </motion.a>
          ))}
        </motion.div>

        <div className="mt-8 flex justify-center">
          <Button href={profile.cvUrl} size="lg" download={profile.cvDownloadName}>
            <Download className="h-4 w-4" aria-hidden="true" />
            Baixar currículo em PDF
          </Button>
        </div>
      </div>
    </section>
  );
}
