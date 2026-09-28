import { useState, useEffect } from 'react'
import {
  Sparkles,
  Zap,
  Cpu,
  Layers,
  ShieldCheck,
  Cloud,
  Database,
  Terminal,
  Mail,
  Check,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  X,
  Send,
  Activity,
  Flame,
  Smartphone,
  Server
} from 'lucide-react'

function GithubIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  )
}

function LinkedinIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  )
}

function TwitterIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )
}

// Core engineering pillars
const CAPABILITIES = [
  {
    icon: Cpu,
    title: 'Autonomous AI & Machine Learning',
    desc: 'Self-improving AI agent workflows, custom LLM fine-tuning, RAG pipelines, and automated intelligence layers engineered for high-throughput enterprise use.',
    tags: ['Autonomous Agents', 'Custom LLMs', 'RAG Pipelines', 'PyTorch'],
    color: 'from-cyan-500 to-blue-500',
    borderColor: 'group-hover:border-cyan-500/40',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]',
  },
  {
    icon: Cloud,
    title: 'Resilient Cloud & DevOps Systems',
    desc: 'Multi-cloud orchestration across AWS, GCP, and Azure with Kubernetes, automated CI/CD pipelines, and zero-downtime distributed failover.',
    tags: ['Kubernetes', 'Terraform', 'Multi-Cloud', 'Docker'],
    color: 'from-blue-500 to-indigo-500',
    borderColor: 'group-hover:border-blue-500/40',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]',
  },
  {
    icon: Server,
    title: 'High-Throughput Microservices',
    desc: 'Ultra-low latency microservices and event-driven architectures written in Go, Rust, and Node.js that process millions of events seamlessly.',
    tags: ['Go / Rust', 'gRPC / Kafka', 'Event-Driven', 'GraphQL'],
    color: 'from-indigo-500 to-violet-500',
    borderColor: 'group-hover:border-indigo-500/40',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]',
  },
  {
    icon: Smartphone,
    title: 'Modern Web & Cross-Platform Apps',
    desc: 'Sensational 60fps user experiences crafted with React, Next.js, React Native, and Tailwind CSS. Built for viral conversion and scale.',
    tags: ['React 19', 'Next.js', 'Tailwind CSS', 'Mobile Apps'],
    color: 'from-violet-500 to-purple-500',
    borderColor: 'group-hover:border-violet-500/40',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]',
  },
  {
    icon: Database,
    title: 'Real-Time Streaming & Big Data',
    desc: 'Enterprise data lakes, sub-second OLAP query engines, streaming analytics with Kafka and ClickHouse, empowering rapid business intelligence.',
    tags: ['Apache Kafka', 'ClickHouse', 'PostgreSQL', 'Redis'],
    color: 'from-emerald-500 to-teal-500',
    borderColor: 'group-hover:border-emerald-500/40',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]',
  },
  {
    icon: ShieldCheck,
    title: 'Zero-Trust Cybersecurity & Compliance',
    desc: 'Military-grade end-to-end encryption, automated vulnerability scanners, identity meshes, and SOC2 / HIPAA architectural compliance.',
    tags: ['Zero-Trust', 'SOC2 Readiness', 'mTLS', 'Pen-Testing'],
    color: 'from-amber-500 to-rose-500',
    borderColor: 'group-hover:border-amber-500/40',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]',
  },
]

// Tech Stack Badges
const TECH_STACK = [
  'React 19',
  'Tailwind CSS v4',
  'Next.js 15',
  'TypeScript',
  'Python',
  'PyTorch',
  'Go',
  'Rust',
  'Kubernetes',
  'AWS',
  'Docker',
  'PostgreSQL',
  'Kafka',
  'Redis',
]

export default function App() {
  // Real-time Countdown Timer target (e.g. 45 days from now)
  const [timeLeft, setTimeLeft] = useState({
    days: 42,
    hours: 18,
    minutes: 36,
    seconds: 24,
  })

  // Waitlist form state
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [waitlistCount, setWaitlistCount] = useState(1284)

  // Interactive contact / early inquiry modal
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [inquiryData, setInquiryData] = useState({
    name: '',
    email: '',
    company: '',
    interest: 'AI & Custom Software',
    message: '',
  })
  const [inquirySubmitted, setInquirySubmitted] = useState(false)

  // Interactive Terminal Tab
  const [activeTab, setActiveTab] = useState('terminal')

  // Live timer effect
  useEffect(() => {
    // Launch target date: 45 days from current date
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 45)
    targetDate.setHours(12, 0, 0, 0)

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate.getTime() - now

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        )
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        )
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!email || !email.includes('@')) return
    setIsSubscribed(true)
    setWaitlistCount((prev) => prev + 1)
  }

  const handleInquirySubmit = (e) => {
    e.preventDefault()
    if (!inquiryData.name || !inquiryData.email) return
    setInquirySubmitted(true)
    setTimeout(() => {
      setInquirySubmitted(false)
      setIsModalOpen(false)
      setInquiryData({
        name: '',
        email: '',
        company: '',
        interest: 'AI & Custom Software',
        message: '',
      })
    }, 2500)
  }

  return (
    <div className="relative min-h-screen bg-[#05070d] text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 overflow-x-hidden">
      {/* Dynamic Ambient Background Lights */}
      <div className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-cyan-500/12 via-indigo-600/8 to-transparent rounded-full blur-[140px] z-0 animate-pulse-glow" />
      <div className="pointer-events-none fixed top-1/3 -left-48 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] z-0" />
      <div className="pointer-events-none fixed bottom-1/4 -right-48 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px] z-0" />

      {/* Cyber Grid Pattern Background */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Top Announcement Bar */}
        <div className="bg-gradient-to-r from-cyan-950/60 via-slate-900/80 to-indigo-950/60 border-b border-cyan-500/20 py-2 px-4 text-center text-xs font-medium text-cyan-300 backdrop-blur-md">
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
            </span>
            <span>
              Private Beta Launching Soon • Early Access Applications are Now Open
            </span>
            <button
              onClick={() => setIsModalOpen(true)}
              className="hidden sm:inline-flex items-center gap-1 font-semibold underline underline-offset-2 hover:text-white transition-colors cursor-pointer ml-1"
            >
              Request Access <ChevronRight className="w-3.5 h-3.5 inline" />
            </button>
          </div>
        </div>

        {/* Header / Navbar */}
        <header
          id="main-header"
          className="sticky top-0 z-40 backdrop-blur-xl bg-[#05070d]/75 border-b border-slate-800/80 px-6 py-4 transition-all"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Brand Logo */}
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 p-[1.5px] shadow-lg shadow-cyan-500/20">
                <div className="w-full h-full bg-[#070b14] rounded-[10px] flex items-center justify-center">
                  <Flame className="w-5 h-5 text-cyan-400 animate-pulse" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-white flex items-center gap-1">
                  codedrio
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    tech
                  </span>
                </span>
                <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">
                  Software & AI Systems
                </span>
              </div>
            </div>

            {/* Header Right Actions */}
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="hidden md:flex items-center gap-2 text-xs font-mono text-slate-400 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Under Construction</span>
              </div>

              <button
                id="header-inquire-btn"
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 hover:shadow-[0_0_20px_rgba(6,182,212,0.35)] transition-all duration-200 cursor-pointer shadow-md"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section
          id="hero-section"
          className="relative pt-16 pb-12 md:pt-24 md:pb-20 px-6 max-w-7xl mx-auto w-full flex flex-col items-center text-center"
        >
          {/* Mission Badge */}
          <div
            id="hero-status-pill"
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-medium mb-8 backdrop-blur-md shadow-inner"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
            <span>ARCHITECTING THE NEXT ERA OF DIGITAL SYSTEMS</span>
          </div>

          {/* Master <h1> */}
          <h1
            id="hero-title"
            className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight max-w-5xl leading-[1.1] text-white"
          >
            Engineering Intelligent Software,{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Autonomous AI
            </span>{' '}
            & Cloud Architectures.
          </h1>

          {/* Subtitle */}
          <p
            id="hero-subtitle"
            className="mt-6 text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl font-normal leading-relaxed"
          >
            <strong className="text-slate-200 font-semibold">codedrio tech</strong> is an elite engineering collective building high-throughput cloud infrastructure, mission-critical custom software, and autonomous artificial intelligence systems for future-forward enterprises.
          </p>

          {/* Live Countdown Clock */}
          <div
            id="countdown-clock"
            className="mt-12 w-full max-w-3xl p-6 sm:p-8 rounded-3xl bg-slate-900/60 backdrop-blur-2xl border border-slate-800 shadow-2xl relative overflow-hidden"
          >
            {/* Subtle inner glow */}
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />

            <div className="text-center mb-6">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-cyan-400">
                Official Launch Countdown
              </span>
              <h2 className="text-xl font-bold text-white mt-1">
                We are Launching in
              </h2>
            </div>

            <div className="grid grid-cols-4 gap-3 sm:gap-6">
              {[
                { label: 'DAYS', value: timeLeft.days },
                { label: 'HOURS', value: timeLeft.hours },
                { label: 'MINUTES', value: timeLeft.minutes },
                { label: 'SECONDS', value: timeLeft.seconds },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center p-3 sm:p-5 rounded-2xl bg-[#070b14]/90 border border-slate-800/90 shadow-inner group hover:border-cyan-500/40 transition-colors"
                >
                  <span className="text-3xl sm:text-5xl md:text-6xl font-black font-mono tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                    {String(item.value).padStart(2, '0')}
                  </span>
                  <span className="mt-2 text-[10px] sm:text-xs font-bold tracking-widest text-slate-400">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Email Waitlist Early Access Form */}
          <div
            id="waitlist-card"
            className="mt-10 w-full max-w-xl"
          >
            {!isSubscribed ? (
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-3 p-2 rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-slate-700/80 shadow-2xl focus-within:border-cyan-500/80 transition-all"
              >
                <div className="relative flex-1 flex items-center pl-3">
                  <Mail className="w-5 h-5 text-slate-400" />
                  <input
                    id="waitlist-email-input"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your work email address..."
                    className="w-full bg-transparent px-3 py-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none"
                  />
                </div>
                <button
                  id="waitlist-submit-btn"
                  type="submit"
                  className="px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 transition-all duration-200 shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap active:scale-[0.98]"
                >
                  <span>Notify Me at Launch</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div
                id="waitlist-success-message"
                className="p-4 rounded-2xl bg-cyan-950/60 border border-cyan-500/40 text-cyan-200 flex items-center justify-center gap-3 backdrop-blur-xl shadow-xl animate-fade-in"
              >
                <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                <div className="text-left">
                  <div className="font-bold text-sm text-white">
                    You're on the exclusive VIP waitlist!
                  </div>
                  <div className="text-xs text-cyan-300">
                    Priority access invite sent to <span className="underline font-mono">{email}</span>.
                  </div>
                </div>
              </div>
            )}

            {/* Social Proof Stats */}
            <div className="mt-4 flex items-center justify-center gap-3 text-xs text-slate-400">
              <div className="flex -space-x-2 overflow-hidden">
                <span className="inline-block h-6 w-6 rounded-full ring-2 ring-slate-950 bg-gradient-to-tr from-cyan-500 to-blue-500" />
                <span className="inline-block h-6 w-6 rounded-full ring-2 ring-slate-950 bg-gradient-to-tr from-indigo-500 to-violet-500" />
                <span className="inline-block h-6 w-6 rounded-full ring-2 ring-slate-950 bg-gradient-to-tr from-emerald-500 to-teal-500" />
                <span className="inline-block h-6 w-6 rounded-full ring-2 ring-slate-950 bg-gradient-to-tr from-purple-500 to-pink-500" />
              </div>
              <span>
                Joined by <strong className="text-slate-200 font-bold">{waitlistCount.toLocaleString()}+</strong> technology founders, CTOs & engineers
              </span>
            </div>
          </div>
        </section>

        {/* Visual Architecture Showcase Section */}
        <section
          id="architecture-preview"
          className="max-w-7xl mx-auto px-6 py-12 w-full"
        >
          <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-[#070b14] shadow-[0_0_60px_rgba(6,182,212,0.08)]">
            {/* Top Bar of Graphic */}
            <div className="px-6 py-4 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                <span className="ml-2 text-slate-300 font-semibold">
                  codedrio-mesh-architecture // v3.8.0
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-cyan-400 font-semibold flex items-center gap-1">
                  <Activity className="w-3.5 h-3.5 animate-pulse" /> Live Telemetry
                </span>
                <span className="hidden sm:inline text-slate-500">
                  Global Edge Nodes: 48
                </span>
              </div>
            </div>

            {/* Generated Architecture Image */}
            <div className="relative group overflow-hidden">
              <img
                src="/hero-tech.jpg"
                alt="codedrio tech Distributed Architecture and AI Neural Network"
                className="w-full h-auto object-cover max-h-[550px] transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />

              {/* Gradient overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-transparent to-transparent opacity-80" />

              {/* Interactive Floating Hotspot Badges */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4">
                <div className="p-4 rounded-2xl bg-slate-950/85 backdrop-blur-xl border border-cyan-500/30 max-w-md shadow-2xl">
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-semibold">
                    <Zap className="w-4 h-4" />
                    <span>NEXT-GEN ARCHITECTURE</span>
                  </div>
                  <h3 className="text-base font-bold text-white mt-1">
                    Distributed High-Throughput Engine
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    Zero-latency event mesh connecting autonomous AI cores, distributed microservices, and secure enterprise gateways.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3.5 py-1.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-xs font-mono text-cyan-300 flex items-center gap-1.5 shadow">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    99.999% SLA Resiliency
                  </span>
                  <span className="px-3.5 py-1.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-xs font-mono text-indigo-300 flex items-center gap-1.5 shadow">
                    <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                    Sub-millisecond Edge
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Capabilities / What We Build */}
        <section
          id="capabilities-section"
          className="max-w-7xl mx-auto px-6 py-16 md:py-24 w-full"
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-950/40 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-semibold mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>CORE PILLARS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              What codedrio tech Delivers
            </h2>
            <p className="mt-4 text-slate-400 text-base sm:text-lg">
              We eliminate technical debt and architect high-velocity software solutions from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map((cap, i) => {
              const Icon = cap.icon
              return (
                <div
                  key={i}
                  className={`group relative p-8 rounded-3xl bg-[#090e1a]/80 backdrop-blur-xl border border-slate-800/90 transition-all duration-300 hover:-translate-y-1.5 ${cap.borderColor} ${cap.glowColor} flex flex-col justify-between`}
                >
                  <div>
                    {/* Icon with gradient badge */}
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${cap.color} p-[1px] mb-6 shadow-md`}
                    >
                      <div className="w-full h-full bg-slate-950 rounded-[15px] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                      {cap.title}
                    </h3>
                    <p className="mt-3 text-sm text-slate-400 leading-relaxed font-normal">
                      {cap.desc}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap gap-2">
                    {cap.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Interactive Live Terminal / Tech Radar */}
        <section
          id="interactive-tech-radar"
          className="max-w-5xl mx-auto px-6 py-12 w-full"
        >
          <div className="rounded-3xl bg-slate-900/60 backdrop-blur-2xl border border-slate-800 overflow-hidden shadow-2xl">
            {/* Header / Tabs */}
            <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono font-bold text-slate-200">
                  CODEDRIO CLI // LIVE ENVIRONMENT
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab('terminal')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                    activeTab === 'terminal'
                      ? 'bg-slate-800 text-white border border-slate-700'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  system_log.sh
                </button>
                <button
                  onClick={() => setActiveTab('manifest')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                    activeTab === 'manifest'
                      ? 'bg-slate-800 text-white border border-slate-700'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  company_manifest.json
                </button>
              </div>
            </div>

            {/* Content view */}
            <div className="p-6 font-mono text-xs sm:text-sm text-slate-300 leading-relaxed overflow-x-auto min-h-[220px]">
              {activeTab === 'terminal' ? (
                <div className="space-y-2">
                  <div className="text-slate-500">
                    # Initializing codedrio tech cloud & software fabric
                  </div>
                  <div>
                    <span className="text-cyan-400">$ codedrio-stack</span>{' '}
                    <span className="text-indigo-400">--bootstrap --cluster=global</span>
                  </div>
                  <div className="text-emerald-400 flex items-center gap-2">
                    <Check className="w-3.5 h-3.5" /> [23:30:12] Autonomous AI orchestration engine loaded (PyTorch 2.5 / CUDA 12.4)
                  </div>
                  <div className="text-emerald-400 flex items-center gap-2">
                    <Check className="w-3.5 h-3.5" /> [23:30:13] Multi-Region Kubernetes clusters connected across AWS & GCP
                  </div>
                  <div className="text-emerald-400 flex items-center gap-2">
                    <Check className="w-3.5 h-3.5" /> [23:30:14] Zero-Trust Identity Mesh verified (SOC2 Type II compliant)
                  </div>
                  <div className="text-cyan-300 flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 animate-pulse text-amber-400" /> [STATUS] Ready for public release. Launch sequence in progress.
                  </div>
                  <div className="text-slate-400 pt-2 animate-pulse">
                    codedrio-tech:~$ █
                  </div>
                </div>
              ) : (
                <pre className="text-slate-300 text-xs font-mono">
{`{
  "company": "codedrio tech",
  "vision": "Architecting mission-critical software & AI systems",
  "specialties": [
    "Enterprise Software Development",
    "Autonomous Artificial Intelligence",
    "Cloud & Distributed Microservices",
    "Digital Engineering & Scalable UX"
  ],
  "status": "Private Beta / Early Access",
  "locations": ["Global Delivery", "Silicon Valley", "India"],
  "contact": "connect@codedriotech.com"
}`}
                </pre>
              )}
            </div>
          </div>
        </section>

        {/* Modern Tech Stack Badges */}
        <section className="max-w-7xl mx-auto px-6 py-10 w-full text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-6 font-semibold">
            ENGINEERED WITH INDUSTRY BENCHMARK TECHNOLOGIES
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {TECH_STACK.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm font-mono text-slate-300 hover:text-white hover:border-slate-700 transition-colors shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Priority Project Consultation Banner */}
        <section className="max-w-7xl mx-auto px-6 py-16 w-full">
          <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-cyan-950/40 via-slate-900 to-indigo-950/40 border border-cyan-500/20 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left overflow-hidden">
            <div className="max-w-2xl relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs font-mono mb-4 border border-cyan-500/20">
                <Flame className="w-3.5 h-3.5" />
                <span>FOUNDER & ENTERPRISE COLLABORATION</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Have a Complex Software Project to Build?
              </h2>
              <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
                Don’t wait for the official public launch. We are accepting selected visionary partners for strategic engineering, custom MVP builds, and AI agent architectures today.
              </p>
            </div>

            <div className="relative z-10 flex-shrink-0">
              <button
                id="cta-schedule-btn"
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 rounded-2xl font-bold text-sm bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 hover:from-cyan-300 hover:to-indigo-400 text-slate-950 shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all duration-200 cursor-pointer flex items-center gap-2"
              >
                <span>Talk with an Architect</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          id="main-footer"
          className="mt-auto border-t border-slate-800/80 bg-[#04060a] px-6 py-12"
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-xs text-slate-400">
            {/* Left Brand Details */}
            <div className="flex flex-col items-center md:items-start gap-2">
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-cyan-400" />
                <span className="font-bold text-sm text-white">codedrio tech</span>
              </div>
              <p className="text-slate-500 max-w-sm text-center md:text-left">
                Next-generation software engineering, artificial intelligence, and cloud-native solutions.
              </p>
            </div>

            {/* Social channels */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-colors"
                title="X (Twitter)"
              >
                <TwitterIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="mailto:contact@codedriotech.com"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-colors"
                title="Email Us"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right text-slate-500">
              <div>© 2026 codedrio tech Inc. All rights reserved.</div>
              <div className="mt-1 text-[11px] text-slate-600">
                Privacy Policy • Terms of Service • Security
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Early Partnership & Consultation Modal */}
      {isModalOpen && (
        <div
          id="inquiry-modal-backdrop"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in"
        >
          <div
            id="inquiry-modal"
            className="relative w-full max-w-lg p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl text-left"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {!inquirySubmitted ? (
              <div>
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-cyan-400 mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span>EARLY ACCESS INQUIRY</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Partner with codedrio tech
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 mb-6">
                  Tell us about your project requirements and our engineering leads will respond within 24 hours.
                </p>

                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={inquiryData.name}
                      onChange={(e) =>
                        setInquiryData({ ...inquiryData, name: e.target.value })
                      }
                      placeholder="e.g. Alex Mercer"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Work Email
                      </label>
                      <input
                        type="email"
                        required
                        value={inquiryData.email}
                        onChange={(e) =>
                          setInquiryData({ ...inquiryData, email: e.target.value })
                        }
                        placeholder="alex@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Company or Startup
                      </label>
                      <input
                        type="text"
                        value={inquiryData.company}
                        onChange={(e) =>
                          setInquiryData({ ...inquiryData, company: e.target.value })
                        }
                        placeholder="e.g. Acme AI"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Primary Engineering Focus
                    </label>
                    <select
                      value={inquiryData.interest}
                      onChange={(e) =>
                        setInquiryData({ ...inquiryData, interest: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                    >
                      <option>AI & Custom LLM Development</option>
                      <option>Cloud Infrastructure & Kubernetes</option>
                      <option>Custom Enterprise Software</option>
                      <option>Full-Stack Web / Mobile Application</option>
                      <option>General Partnership / Investment</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Project Overview
                    </label>
                    <textarea
                      rows={3}
                      value={inquiryData.message}
                      onChange={(e) =>
                        setInquiryData({ ...inquiryData, message: e.target.value })
                      }
                      placeholder="Briefly describe what you're building, timeline, or key objectives..."
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 shadow-lg shadow-cyan-500/25 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Priority Inquiry</span>
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="py-8 text-center">
                <div className="w-14 h-14 rounded-full bg-cyan-500/20 text-cyan-400 mx-auto flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Inquiry Received!</h3>
                <p className="text-slate-400 text-sm mt-2 max-w-sm mx-auto">
                  Thank you, <strong className="text-white">{inquiryData.name}</strong>. Our engineering leads will review your requirements and reach out via email shortly.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
