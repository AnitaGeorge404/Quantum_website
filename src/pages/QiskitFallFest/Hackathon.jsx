import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import SectionHeader, { Reveal } from './components/SectionHeader';
import Decor from './components/Decor';
import Countdown from './components/Countdown';
import { stickers } from './data/stickers';
import {
  TEMPLATE_URL,
  intro,
  deadlines,
  tracks,
  techStack,
  goldenRule,
  repoRules,
  videoStructure,
  criteria,
  conduct,
} from './data/hackathon';
import './styles.css';

const body = 'text-base leading-relaxed text-[var(--muted-foreground)]';

/** Pink-ruled callout used for the guide's warnings. */
function Note({ title, children }) {
  return (
    <Reveal className="mt-10 border-l-2 border-[var(--pink-strong)] bg-[var(--muted)] p-5 md:p-6">
      <p className="qff-label !text-[var(--pink-strong)]">{title}</p>
      <p className="mt-2 text-base leading-relaxed text-[var(--foreground)]">{children}</p>
    </Reveal>
  );
}

/** Numbered rows: mono index, bold title, muted body. */
function NumberedList({ items }) {
  return (
    <ol className="border-t border-[var(--border-strong)]">
      {items.map(([title, text], idx) => (
        <Reveal
          as="li"
          key={title}
          delay={Math.min(idx * 0.05, 0.2)}
          className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-b border-[var(--border)] py-6 md:grid-cols-[4rem_1fr] md:gap-x-8"
        >
          <span className="font-mono text-xl font-medium text-[var(--pink-strong)] tabular-nums">
            {String(idx + 1).padStart(2, '0')}
          </span>
          <div>
            <h3 className="text-lg font-semibold md:text-xl">{title}</h3>
            <p className={`mt-2 max-w-3xl ${body}`}>{text}</p>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}

/**
 * Hackathon guide page, served at /qiskit-fall-fest-26/hackathon.
 * Shares the Fall Fest theme via the .qiskit-page scope in styles.css.
 */
export default function Hackathon() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="qiskit-page min-h-screen">
      {/* Intro */}
      <section className="relative overflow-hidden">
        <div className="qff-container relative pt-32 pb-16 sm:pt-40 md:pb-20">
          <Decor
            src={stickers.badge}
            spin
            duration={40}
            className="absolute right-5 top-28 hidden w-28 sm:right-8 md:block lg:right-10 lg:w-32"
          />
          <Link to="/qiskit-fall-fest-26" className="qff-label inline-flex items-center gap-2 hover:!text-[var(--pink-strong)]">
            <ArrowLeft className="h-3.5 w-3.5" /> Qiskit Fall Fest 2026
          </Link>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] sm:text-5xl md:text-6xl">
            24-Hour Quantum Hackathon
          </h1>
          <p className="qff-label mt-4">Organized by IIIT Kottayam</p>
          <div className={`mt-6 max-w-2xl space-y-4 md:text-lg ${body}`}>
            <p>Welcome to the Qiskit Fall Fest 2026 Hackathon! {intro}</p>
            <p>
              Whether you are crafting an interactive quantum game or building a quantum solver for a
              real-world dilemma, this hackathon is designed to emphasize{' '}
              <strong className="font-medium text-[var(--ink)]">
                creativity, intuition, working code, and clear communication
              </strong>
              .
            </p>
          </div>
          <div className="mt-8">
            <Countdown />
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={TEMPLATE_URL} target="_blank" rel="noreferrer" className="qff-btn qff-btn-primary">
              Use the template <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="#tracks" className="qff-btn qff-btn-outline">
              Challenge tracks
            </a>
          </div>
        </div>
      </section>

      {/* 01 Rules */}
      <section id="rules" className="qff-section">
        <div className="qff-container">
          <SectionHeader
            index="01"
            label="Rules"
            title="Rules of Conduct & Academic Integrity"
            intro="All participants are expected to maintain the highest standards of integrity, respect, and sportsmanship throughout the event."
          />
          <NumberedList items={conduct} />
        </div>
      </section>

      {/* 02 Timeline */}
      <section id="timeline" className="qff-section">
        <div className="qff-container">
          <SectionHeader
            index="02"
            label="Timeline"
            title="Timeline & Important Deadlines"
            intro="Please keep a close eye on the clock. All deadlines are strict to ensure fair evaluation."
          />
          <ol className="border-t border-[var(--border-strong)]">
            {deadlines.map((d, idx) => (
              <Reveal
                as="li"
                key={d.title}
                delay={Math.min(idx * 0.05, 0.2)}
                className="group grid grid-cols-[4.5rem_1fr] gap-x-5 border-b border-[var(--border)] py-8 sm:grid-cols-[6rem_1fr] md:grid-cols-[8rem_1fr] md:gap-x-10"
              >
                <div className="flex flex-col">
                  <span className="font-mono text-4xl font-medium leading-none text-[var(--ink)] tabular-nums transition-colors group-hover:text-[var(--pink-strong)] md:text-5xl">
                    {d.day}
                  </span>
                  <span className="qff-label mt-2">{d.month} 2026</span>
                </div>
                <div>
                  <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-sm font-medium text-[var(--pink-strong)]">
                    {d.time}
                    {d.tag && (
                      <span className="rounded-sm border border-[var(--pink-strong)] px-1.5 py-0.5 text-[0.6875rem] uppercase tracking-[0.1em]">
                        {d.tag}
                      </span>
                    )}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold md:text-2xl">{d.title}</h3>
                  <p className={`mt-2 max-w-2xl ${body}`}>{d.body}</p>
                  {d.list && (
                    <ul className={`mt-3 list-disc space-y-1 pl-5 ${body}`}>
                      {d.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* 03 Tracks */}
      <section id="tracks" className="qff-section">
        <div className="qff-container">
          <SectionHeader
            index="03"
            label="Tracks"
            title="Challenge Tracks"
            intro="Participants must choose one of the following two tracks."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {tracks.map((t, idx) => (
              <Reveal
                key={t.id}
                delay={idx * 0.08}
                className="flex flex-col rounded-md border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_1px_2px_rgba(49,19,94,0.04)] md:p-8"
              >
                <p className="qff-label !text-[var(--pink-strong)]">{t.id}</p>
                <h3 className="mt-3 text-2xl font-semibold leading-tight md:text-[1.75rem]">{t.title}</h3>
                <p className="mt-1 italic text-[var(--muted-foreground)]">{t.tagline}</p>

                <p className="qff-label mt-8">The vision</p>
                <p className={`mt-2 ${body}`}>{t.vision}</p>

                <p className="qff-label mt-8">What must be done</p>
                <ol className={`mt-2 list-decimal space-y-2 pl-5 marker:font-mono marker:text-[var(--ink)] ${body}`}>
                  {t.steps.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ol>

                <p className="qff-label mt-8">Inspiration & example concepts</p>
                <ul className="mt-2 border-t border-[var(--border)]">
                  {t.ideas.map(([name, text]) => (
                    <li key={name} className="border-b border-[var(--border)] py-3">
                      <p className="font-medium text-[var(--ink)]">{name}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-[var(--muted-foreground)]">{text}</p>
                    </li>
                  ))}
                </ul>

                <a
                  href={t.reference}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 self-start pt-2 font-mono text-xs font-semibold uppercase tracking-[0.1em] text-[var(--ink)] transition-colors hover:text-[var(--pink-strong)] lg:mt-auto"
                >
                  Starter guide & notebook <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </Reveal>
            ))}
          </div>

          {/* Technology stack flexibility */}
          <Reveal className="mt-16 max-w-3xl">
            <h3 className="text-xl font-semibold md:text-2xl">Technology Stack Flexibility</h3>
            <p className={`mt-3 ${body}`}>
              You are completely free (and warmly encouraged!) to integrate other technologies,
              frameworks, and libraries to build great user experiences, visuals, and applications:
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <dl className="mt-6 border-t border-[var(--border-strong)]">
              {techStack.map(([label, value]) => (
                <div key={label} className="grid gap-1 border-b border-[var(--border)] py-4 md:grid-cols-[18rem_1fr] md:gap-8">
                  <dt className="font-medium text-[var(--ink)]">{label}</dt>
                  <dd className={body}>{value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Note title="The golden rule">{goldenRule}</Note>
        </div>
      </section>

      {/* 04 Template & repository */}
      <section id="template" className="qff-section">
        <div className="qff-container">
          <SectionHeader
            index="04"
            label="Template"
            title="Mandatory Template & Repository Guidelines"
            intro="To ensure automated processing and fair evaluation, all teams must base their submission on the official hackathon template repository."
          />

          <Reveal className="mb-12 flex flex-col gap-5 rounded-md bg-[var(--ink)] p-6 text-white md:flex-row md:items-center md:justify-between md:p-8">
            <div className="min-w-0">
              <p className="qff-label !text-[var(--pink)]">Official hackathon template</p>
              <p className="mt-2 break-words font-mono text-sm text-white/85 md:text-base">
                Shanwis/Qiskit-Fall-Fest-2026-IIITKottayam-Hackathon-Template
              </p>
            </div>
            <a href={TEMPLATE_URL} target="_blank" rel="noreferrer" className="qff-btn qff-btn-pink shrink-0">
              Open on GitHub <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>

          <Reveal className="mb-6">
            <h3 className="text-xl font-semibold md:text-2xl">Key Repository Requirements</h3>
          </Reveal>
          <NumberedList items={repoRules} />
        </div>
      </section>

      {/* 05 Submission */}
      <section id="submission" className="qff-section">
        <div className="qff-container">
          <SectionHeader
            index="05"
            label="Submission"
            title="Final Submission Deliverables"
          />
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal className="rounded-md border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
              <p className="qff-label !text-[var(--pink-strong)]">01</p>
              <h3 className="mt-3 text-xl font-semibold md:text-2xl">GitHub Repository URL</h3>
              <p className={`mt-3 ${body}`}>
                Containing your complete, runnable code, clear commit history, and the standardized{' '}
                <code className="font-mono text-sm text-[var(--ink)]">README.md</code>.
              </p>
            </Reveal>
            <Reveal delay={0.08} className="rounded-md border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
              <p className="qff-label !text-[var(--pink-strong)]">02</p>
              <h3 className="mt-3 text-xl font-semibold md:text-2xl">Video Presentation Link (Maximum 10 Minutes)</h3>
              <p className={`mt-3 ${body}`}>
                Uploaded to YouTube (Unlisted), Google Drive (ensure access is set to "Anyone with the
                link can view"), or Loom.
              </p>
            </Reveal>
          </div>

          <Note title="Warning">
            If your video link is private or requires access permission, judges/AI cannot evaluate it,
            resulting in a zero for the video presentation component.
          </Note>

          <Reveal className="mb-6 mt-16">
            <h3 className="text-xl font-semibold md:text-2xl">Video Structure Requirements</h3>
          </Reveal>
          <NumberedList items={videoStructure} />

          <Note title="Note on video length">
            Videos exceeding the 10-minute limit will face penalties or may only be evaluated up to the
            10:00 mark. Keep it punchy, engaging, and focused!
          </Note>
        </div>
      </section>

      {/* 06 Evaluation */}
      <section id="evaluation" className="qff-section">
        <div className="qff-container">
          <SectionHeader
            index="06"
            label="Evaluation"
            title="Evaluation & Grading Focus Areas"
            intro="Submissions will be evaluated based on the following key dimensions."
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {criteria.map(([title, text], idx) => (
              <Reveal
                key={title}
                delay={(idx % 2) * 0.08}
                className="rounded-md border border-[var(--border)] bg-[var(--surface)] p-6 transition-[border-color,box-shadow] duration-300 hover:border-[var(--border-strong)] hover:shadow-[0_8px_24px_-12px_rgba(49,19,94,0.25)] md:p-8"
              >
                <h3 className="text-lg font-semibold md:text-xl">{title}</h3>
                <p className={`mt-3 ${body}`}>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing band */}
      <footer className="relative overflow-hidden bg-[var(--ink)] text-white">
        <Decor
          src={stickers.cloudLight}
          drift
          amplitude={12}
          duration={26}
          opacity={0.07}
          className="absolute -left-10 top-6 w-72 md:w-[28rem]"
        />
        <div className="qff-container relative flex flex-col gap-8 py-16 md:flex-row md:items-end md:justify-between md:py-20">
          <div className="max-w-xl">
            <p className="qff-label !text-[var(--pink)]">10 – 11 October 2026 · 24 hours</p>
            <h2 className="mt-4 text-3xl font-semibold leading-[1.1] !text-white sm:text-4xl">
              Good luck, have fun, and happy quantum hacking!
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={TEMPLATE_URL} target="_blank" rel="noreferrer" className="qff-btn qff-btn-pink">
              Use the template <ArrowUpRight className="h-4 w-4" />
            </a>
            <Link to="/qiskit-fall-fest-26" className="qff-btn !border-white/40 text-white hover:bg-white hover:text-[var(--ink)]">
              Back to Fall Fest
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
