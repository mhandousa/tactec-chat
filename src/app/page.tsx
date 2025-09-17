"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import FeatureCard from "@/components/FeatureCard";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main>
      <Navbar />
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container max-w-6xl py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="h1">Revolutionising Football Club Management</h1>
            <p className="lead mt-4">
              One platform for operations, medical, tactics, reporting, communication, and more.
            </p>
            <div className="mt-8 flex gap-4">
              <a href="#start" className="px-5 py-3 rounded-xl bg-white text-black font-semibold">Get Started</a>
              <a href="#features" className="px-5 py-3 rounded-xl border border-white/20 font-semibold">Explore Features</a>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/Surface-Pro-8-1-2.png" alt="TacTec App" className="w-full h-auto" />
          </motion.div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/1_TacTec-Revolutionising-Football-Club-Management.png" alt="" className="absolute -z-10 opacity-10 w-[1200px] left-1/2 -translate-x-1/2 top-10" />
      </section>

      <Section id="challenge" title="The Challenge" subtitle="Fragmented football operations slow teams down.">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/2_The-Challenge-Fragmented-Football-Operations.png" alt="Challenge" className="rounded-2xl w-full border border-white/10" />
      </Section>

      <Section id="solution" title="The Solution" subtitle="A unified platform that consolidates everything clubs need.">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/3_The-Solution.png" alt="Solution" className="rounded-2xl w-full border border-white/10" />
      </Section>

      <Section title="What is TacTec?" subtitle="Purpose-built for modern clubs—fast, secure, and delightful for staff and players.">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/4_What-is-TacTec.png" alt="What is TacTec" className="rounded-2xl w-full border border-white/10" />
      </Section>

      <Section title="Why Choose TacTec" subtitle="Cross-platform excellence, integrated care, advanced reporting, and more.">
        <div className="grid md:grid-cols-2 gap-6">
          <FeatureCard title="Cross-Platform Excellence" img="/images/5_Cross-Platform-Excellence.png" />
          <FeatureCard title="Why Choose TacTec" img="/images/6_Why-Choose-TacTec.png" />
          <FeatureCard title="Tactical Board & Formation Maker" img="/images/7_Tactical-Board-and-Formation-Maker.png" />
          <FeatureCard title="Comprehensive Team Management" img="/images/8_Comprehensive-Team-Management.png" />
          <FeatureCard title="Medical Module & Wellness Monitoring" img="/images/9_Medical-Module-and-Wellness-Monitoring.png" />
          <FeatureCard title="Proactive Health Management" img="/images/10_Proactive-Health-Management.png" />
          <FeatureCard title="Advanced Reporting Systems" img="/images/11_Advanced-Reporting-Systems.png" />
          <FeatureCard title="Integrated Communication System" img="/images/12_Integrated-Communication-System.png" />
        </div>
      </Section>

      <Section id="tech" title="Technical Excellence" subtitle="Universal Clean Architecture & Revolutionary Graphics Engine.">
        <div className="grid md:grid-cols-2 gap-6">
          <FeatureCard title="Universal Clean Architecture" img="/images/13_Technical-Excellence-Universal-Clean-Architecture.png" />
          <FeatureCard title="Revolutionary Graphics Engine" img="/images/14_Revolutionary-Graphics-Engine.png" />
        </div>
      </Section>

      <Section id="start" title="Getting Started" subtitle="Onboarding is simple and guided.">
        <div className="grid md:grid-cols-2 gap-6">
          <FeatureCard title="Getting Started" img="/images/18_Getting-Started.png" />
          <FeatureCard title="Your Club in Your Hand" img="/images/19_Your-Club-in-your-Hand.png" />
        </div>
      </Section>

      <Section title="Gallery">
        <div className="grid md:grid-cols-3 gap-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/1000286390.jpg" alt="Gallery" className="card p-1" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/1000286392.jpg" alt="Gallery" className="card p-1" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/1000286398.jpg" alt="Gallery" className="card p-1" />
        </div>
      </Section>

      <Footer />
    </main>
  );
}
