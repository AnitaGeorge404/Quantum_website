import React from 'react';
import { Mail, Globe } from 'lucide-react';
import { team } from '../data/team';
import SectionHeader, { Reveal } from './SectionHeader';
import TiltedCard from './TiltedCard';
import Decor from './Decor';
import { stickers } from '../data/stickers';

const hasLink = (url) => url && url !== '#';

function LinkedInIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function TeamGrid() {
  return (
    <section id="team" className="qff-section">
      <div className="qff-container">
        {/* Header row — the sticker sits in its own column so it never overlaps the photos */}
        <div className="mb-12 flex items-end justify-between gap-6 md:mb-16">
          <SectionHeader
            index="03"
            label="Speakers"
            title="Speakers & Organizers"
            className="!mb-0"
          />
          <Decor
            src={stickers.hummingbirds}
            amplitude={6}
            duration={6}
            className="w-20 shrink-0 sm:w-24 lg:w-28"
          />
        </div>

        <ul className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-14">
          {team.map((member, idx) => {
            const links = [
              hasLink(member.linkedin) && { href: member.linkedin, label: 'LinkedIn', Icon: LinkedInIcon, external: true },
              hasLink(member.email) && { href: `mailto:${member.email}`, label: 'Email', Icon: Mail },
              hasLink(member.iiitkLink) && { href: member.iiitkLink, label: 'Profile', Icon: Globe, external: true },
            ].filter(Boolean);

            return (
              <Reveal as="li" key={member.name} delay={(idx % 3) * 0.06} className="group">
                <div className="qff-tilt relative aspect-[4/5]">
                  <TiltedCard
                    imageSrc={member.image}
                    altText={member.name}
                    containerHeight="100%"
                    containerWidth="100%"
                    imageHeight="100%"
                    imageWidth="100%"
                    scaleOnHover={1.04}
                    rotateAmplitude={9}
                    showMobileWarning={false}
                    showTooltip={false}
                  />                </div>

                <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
                  <div className="min-w-0">
                    <h3 className="text-base md:text-lg font-semibold leading-snug">{member.name}</h3>
                    <p className="mt-1 text-xs md:text-sm leading-snug text-[var(--muted-foreground)]">{member.role}</p>
                  </div>

                  {links.length > 0 && (
                    <div className="-ml-2 flex shrink-0 gap-1 sm:ml-0 sm:pt-0.5">
                      {links.map(({ href, label, Icon, external }) => (
                        <a
                          key={label}
                          href={href}
                          {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                          aria-label={`${member.name} — ${label}`}
                          title={label}
                          className="grid h-8 w-8 place-items-center rounded-sm text-[var(--muted-foreground)] transition-colors hover:bg-[var(--ink)] hover:text-white"
                        >
                          <Icon className="h-4 w-4" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
