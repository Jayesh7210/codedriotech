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
  X,
  Send,
  Activity,
  Smartphone,
  Server,
  Rocket
} from 'lucide-react'
import Services from './pages/Services'
import About from './pages/About'
import ContactUs from './pages/ContactUs'

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
    iconColor: 'text-cyan-600',
    borderColor: 'group-hover:border-cyan-500/40',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]',
  },
  {
    icon: Cloud,
    title: 'Resilient Cloud & DevOps Systems',
    desc: 'Multi-cloud orchestration across AWS, GCP, and Azure with Kubernetes, automated CI/CD pipelines, and zero-downtime distributed failover.',
    tags: ['Kubernetes', 'Terraform', 'Multi-Cloud', 'Docker'],
    color: 'from-blue-500 to-indigo-500',
    iconColor: 'text-blue-600',
    borderColor: 'group-hover:border-blue-500/40',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]',
  },
  {
    icon: Server,
    title: 'High-Throughput Microservices',
    desc: 'Ultra-low latency microservices and event-driven architectures written in Go, Rust, and Node.js that process millions of events seamlessly.',
    tags: ['Go / Rust', 'gRPC / Kafka', 'Event-Driven', 'GraphQL'],
    color: 'from-indigo-500 to-violet-500',
    iconColor: 'text-indigo-600',
    borderColor: 'group-hover:border-indigo-500/40',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]',
  },
  {
    icon: Smartphone,
    title: 'Modern Web & Cross-Platform Apps',
    desc: 'Sensational 60fps user experiences crafted with React, Next.js, React Native, and Tailwind CSS. Built for viral conversion and scale.',
    tags: ['React 19', 'Next.js', 'Tailwind CSS', 'Mobile Apps'],
    color: 'from-violet-500 to-purple-500',
    iconColor: 'text-purple-600',
    borderColor: 'group-hover:border-violet-500/40',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]',
  },
  {
    icon: Database,
    title: 'Real-Time Streaming & Big Data',
    desc: 'Enterprise data lakes, sub-second OLAP query engines, streaming analytics with Kafka and ClickHouse, empowering rapid business intelligence.',
    tags: ['Apache Kafka', 'ClickHouse', 'PostgreSQL', 'Redis'],
    color: 'from-emerald-500 to-teal-500',
    iconColor: 'text-emerald-600',
    borderColor: 'group-hover:border-emerald-500/40',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]',
  },
  {
    icon: ShieldCheck,
    title: 'Zero-Trust Cybersecurity & Compliance',
    desc: 'Military-grade end-to-end encryption, automated vulnerability scanners, identity meshes, and SOC2 / HIPAA architectural compliance.',
    tags: ['Zero-Trust', 'SOC2 Readiness', 'mTLS', 'Pen-Testing'],
    color: 'from-amber-500 to-rose-500',
    iconColor: 'text-rose-600',
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

// Target launch date
const LAUNCH_TARGET = new Date('2026-12-07T00:00:00')

function calculateTimeLeft() {
  const now = new Date().getTime()
  const difference = LAUNCH_TARGET.getTime() - now

  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    }
  }
  return { days: 0, hours: 0, minutes: 0, seconds: 0 }
}

export default function App() {
  // Active navigation page
  const [currentPage, setCurrentPage] = useState('home')

  // Real-time Countdown Timer target
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft)

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
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
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
    <div className="relative min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100/70 text-slate-900 font-sans selection:bg-cyan-500 selection:text-white overflow-x-hidden">
      {/* Dynamic Ambient Background Lights */}
      <div className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-cyan-400/20 via-blue-500/15 to-transparent rounded-full blur-[140px] z-0 animate-pulse-glow" />
      <div className="pointer-events-none fixed top-1/3 -left-48 w-[500px] h-[500px] bg-indigo-400/15 rounded-full blur-[120px] z-0" />
      <div className="pointer-events-none fixed bottom-1/4 -right-48 w-[500px] h-[500px] bg-violet-400/15 rounded-full blur-[120px] z-0" />

      {/* Cyber Grid Pattern Background */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative z-10 flex flex-col min-h-screen">

        {/* Floating Header / Navbar */}
        <header
          id="main-header"
          className="sticky top-4 z-40 px-4 sm:px-6 max-w-7xl mx-auto w-full transition-all duration-300"
        >
          <div className="flex items-center justify-between bg-white/80 backdrop-blur-2xl border border-slate-200/90 rounded-2xl sm:rounded-full px-4 sm:px-6 py-2.5 sm:py-3 shadow-[0_10px_35px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_45px_rgba(0,0,0,0.09)] transition-all">
            {/* Brand Logo */}
            <button
              onClick={() => setCurrentPage('home')}
              className="flex items-center gap-3 group text-left cursor-pointer"
            >
              <div className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-600 p-[1.5px] shadow-md shadow-cyan-500/20 group-hover:shadow-cyan-500/35 transition-all duration-300">
                <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center overflow-hidden p-1">
                  <img
                    src="/favicon.png"
                    alt="CodeDrio Technologies Logo"
                    className="w-full h-full object-contain drop-shadow-[0_1px_4px_rgba(6,182,212,0.3)] group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 flex items-center gap-1 font-['Outfit']">
                  CodeDrio
                  <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Technologies
                  </span>
                </span>
                <span className="text-[9px] sm:text-[10px] text-slate-500 font-mono tracking-widest uppercase">
                  Software & AI Systems
                </span>
              </div>
            </button>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-2 py-1 rounded-full bg-slate-100/80 border border-slate-200/70 text-sm font-medium">
              <button
                onClick={() => setCurrentPage('home')}
                className={`px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                  currentPage === 'home'
                    ? 'bg-white text-cyan-600 font-bold shadow-xs'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => setCurrentPage('services')}
                className={`px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                  currentPage === 'services'
                    ? 'bg-white text-cyan-600 font-bold shadow-xs'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                Services
              </button>
              <button
                onClick={() => setCurrentPage('about')}
                className={`px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                  currentPage === 'about'
                    ? 'bg-white text-cyan-600 font-bold shadow-xs'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                About
              </button>
              <button
                onClick={() => setCurrentPage('contact')}
                className={`px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                  currentPage === 'contact'
                    ? 'bg-white text-cyan-600 font-bold shadow-xs'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                Contact Us
              </button>
            </nav>

            {/* Header Right Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-slate-600 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Under Construction</span>
              </div>

              <button
                id="header-inquire-btn"
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-full text-xs sm:text-sm font-semibold bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all duration-200 cursor-pointer shadow-md"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
              </button>
            </div>
          </div>

          {/* Floating Mobile Navigation Sub-bar */}
          <nav className="flex md:hidden items-center justify-around text-xs font-semibold mt-2 py-2 px-3 bg-white/85 backdrop-blur-xl border border-slate-200/90 rounded-2xl shadow-xs text-slate-600">
            <button
              onClick={() => setCurrentPage('home')}
              className={`cursor-pointer px-2 py-1 rounded-lg ${currentPage === 'home' ? 'bg-cyan-50 text-cyan-600 font-bold' : 'hover:text-slate-900'}`}
            >
              Home
            </button>
            <button
              onClick={() => setCurrentPage('services')}
              className={`cursor-pointer px-2 py-1 rounded-lg ${currentPage === 'services' ? 'bg-cyan-50 text-cyan-600 font-bold' : 'hover:text-slate-900'}`}
            >
              Services
            </button>
            <button
              onClick={() => setCurrentPage('about')}
              className={`cursor-pointer px-2 py-1 rounded-lg ${currentPage === 'about' ? 'bg-cyan-50 text-cyan-600 font-bold' : 'hover:text-slate-900'}`}
            >
              About
            </button>
            <button
              onClick={() => setCurrentPage('contact')}
              className={`cursor-pointer px-2 py-1 rounded-lg ${currentPage === 'contact' ? 'bg-cyan-50 text-cyan-600 font-bold' : 'hover:text-slate-900'}`}
            >
              Contact Us
            </button>
          </nav>
        </header>

        {currentPage === 'home' ? (
          <>
            {/* Hero Section */}
        {/* Premium Hero Section */}
        <section
          id="hero-section"
          className="relative pt-16 pb-16 md:pt-24 md:pb-24 px-6 max-w-7xl mx-auto w-full flex flex-col items-center text-center"
        >
          {/* Ambient Glow Spotlight behind Hero */}
          <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] h-[350px] bg-gradient-to-b from-cyan-400/25 via-blue-500/15 to-transparent rounded-full blur-[110px] -z-10" />

          {/* Premium Eyebrow Status Pill */}
          <div
            id="hero-status-pill"
            className="group inline-flex items-center gap-2.5 px-4 sm:px-5 py-1.5 rounded-full bg-white/90 border border-slate-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.04)] text-xs font-medium mb-8 backdrop-blur-xl hover:border-cyan-500/50 hover:shadow-[0_4px_20px_rgba(6,182,212,0.12)] transition-all duration-300"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-600" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-slate-700 font-semibold">
              Autonomous AI • Enterprise Cloud • Microservices
            </span>
            <span className="text-slate-300">|</span>
            <span className="inline-flex items-center gap-1 font-semibold text-cyan-700">
              <Sparkles className="w-3.5 h-3.5 text-cyan-600 animate-spin-slow" />
              <span>Next-Gen Systems</span>
            </span>
          </div>

          {/* Master Display Heading */}
          <h1
            id="hero-title"
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-black tracking-tight max-w-5xl leading-[1.08] text-slate-950 font-['Outfit']"
          >
            Architecting the Next Era of{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Intelligent Software
              </span>
              <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 rounded-full opacity-60" />
            </span>{' '}
            & Autonomous AI.
          </h1>

          {/* Master Subtitle */}
          <p
            id="hero-subtitle"
            className="mt-7 text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl font-normal leading-relaxed mx-auto"
          >
            <strong className="text-slate-900 font-semibold">CodeDrio Technologies</strong> is an elite engineering collective building high-throughput distributed architectures, custom AI agent workflows, and mission-critical cloud software designed for visionary enterprises.
          </p>

          {/* Primary Quick Actions Row */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-2xl font-bold text-sm bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
            >
              <span>Partner With an Architect</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>

            <a
              href="#architecture-preview"
              className="flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-sm bg-white/90 hover:bg-white border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-950 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              <Cpu className="w-4 h-4 text-cyan-600" />
              <span>Explore Architecture</span>
            </a>
          </div>

          {/* Live Countdown & Waitlist Hub - Dual Card Layout */}
          <div className="mt-12 w-full max-w-4xl grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Countdown Instrument Card */}
            <div
              id="countdown-clock"
              className="lg:col-span-6 p-6 sm:p-7 rounded-3xl bg-white/90 backdrop-blur-2xl border border-slate-200/90 shadow-[0_16px_40px_rgba(0,0,0,0.06)] relative overflow-hidden flex flex-col justify-between"
            >
              {/* Subtle top indicator line */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-600">
                      Live Launch Sequence
                    </span>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-cyan-50 text-cyan-700 border border-cyan-200 font-semibold">
                    Engine V3.8
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight text-left font-['Outfit']">
                  Public Launch Countdown
                </h3>
                <p className="text-xs text-slate-500 text-left mt-1">
                  Synchronized deployment across edge nodes and global AI fabrics.
                </p>
              </div>

              {/* Countdown Numbers Grid */}
              <div className="grid grid-cols-4 gap-2.5 sm:gap-3 mt-6">
                {[
                  { label: 'DAYS', value: timeLeft.days },
                  { label: 'HOURS', value: timeLeft.hours },
                  { label: 'MINUTES', value: timeLeft.minutes },
                  { label: 'SECONDS', value: timeLeft.seconds },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center p-3 rounded-2xl bg-slate-50/90 border border-slate-200/90 shadow-2xs group hover:border-cyan-500/60 hover:bg-white hover:shadow-sm transition-all"
                  >
                    <span className="text-2xl sm:text-3xl font-black font-mono tracking-tight text-slate-900 group-hover:text-cyan-600 transition-colors">
                      {String(item.value).padStart(2, '0')}
                    </span>
                    <span className="mt-1 text-[9px] font-bold tracking-widest text-slate-500">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-cyan-600 animate-pulse" />
                  Cluster Telemetry Active
                </span>
                <span className="text-emerald-600 font-semibold">Ready for Scale</span>
              </div>
            </div>

            {/* Early Access VIP Waitlist Card */}
            <div
              id="waitlist-card"
              className="lg:col-span-6 p-6 sm:p-7 rounded-3xl bg-white/90 backdrop-blur-2xl border border-slate-200/90 shadow-[0_16px_40px_rgba(0,0,0,0.06)] relative overflow-hidden flex flex-col justify-between"
            >
              {/* Subtle top indicator line */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-indigo-700">
                    <Rocket className="w-3.5 h-3.5 text-indigo-600" />
                    <span>PRIVATE BETA ACCESS</span>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 border border-indigo-200 font-semibold">
                    VIP Queue
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight text-left font-['Outfit']">
                  Reserve Early Access
                </h3>
                <p className="text-xs text-slate-500 text-left mt-1">
                  Be first in line for invite-only access, SDK previews, and architecture blueprints.
                </p>
              </div>

              <div className="mt-6">
                {!isSubscribed ? (
                  <form onSubmit={handleSubscribe} className="space-y-3">
                    <div className="relative flex items-center rounded-2xl bg-slate-50 border border-slate-200 focus-within:border-blue-500 focus-within:bg-white focus-within:ring-3 focus-within:ring-blue-500/15 transition-all">
                      <Mail className="w-4 h-4 text-slate-400 ml-3.5 flex-shrink-0" />
                      <input
                        id="waitlist-email-input"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your work email address..."
                        className="w-full bg-transparent px-3 py-3 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none"
                      />
                    </div>
                    <button
                      id="waitlist-submit-btn"
                      type="submit"
                      className="w-full py-3 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white shadow-md shadow-blue-500/25 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                    >
                      <span>Join Priority Waitlist</span>
                      <ArrowRight className="w-4 h-4 text-white" />
                    </button>
                  </form>
                ) : (
                  <div
                    id="waitlist-success-message"
                    className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-3 backdrop-blur-xl shadow-xs animate-fade-in"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <div className="text-left">
                      <div className="font-bold text-xs sm:text-sm text-emerald-950">
                        You're on the exclusive VIP waitlist!
                      </div>
                      <div className="text-[11px] text-emerald-700">
                        Priority access invite sent to <span className="underline font-mono">{email}</span>.
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Social Proof */}
              <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                <div className="flex -space-x-2 overflow-hidden">
                  <span className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-gradient-to-tr from-cyan-500 to-blue-500 shadow-2xs" />
                  <span className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-gradient-to-tr from-indigo-500 to-violet-500 shadow-2xs" />
                  <span className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-gradient-to-tr from-emerald-500 to-teal-500 shadow-2xs" />
                  <span className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-gradient-to-tr from-purple-500 to-pink-500 shadow-2xs" />
                </div>
                <span className="text-[11px] text-slate-500">
                  Joined by <strong className="text-slate-900 font-bold">{waitlistCount.toLocaleString()}+</strong> engineers & founders
                </span>
              </div>
            </div>
          </div>

          {/* Quick Pillar Highlights Bar */}
          <div className="mt-12 w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon: Cpu, label: 'Autonomous AI', sub: 'Custom Agent Meshes' },
              { icon: Cloud, label: 'Cloud Architecture', sub: 'Kubernetes & AWS/GCP' },
              { icon: Server, label: 'High Throughput', sub: 'Sub-millisecond Edge' },
              { icon: ShieldCheck, label: 'Zero-Trust Security', sub: 'SOC2 Type II Ready' },
            ].map((item, i) => {
              const ItemIcon = item.icon
              return (
                <div
                  key={i}
                  className="p-3.5 rounded-2xl bg-white/70 border border-slate-200/80 shadow-2xs flex items-center gap-3 text-left hover:bg-white hover:border-slate-300 transition-all duration-200"
                >
                  <div className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center text-cyan-600 flex-shrink-0">
                    <ItemIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 leading-tight">
                      {item.label}
                    </div>
                    <div className="text-[10px] text-slate-500 font-mono">
                      {item.sub}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Visual Architecture Showcase Section */}
        <section
          id="architecture-preview"
          className="max-w-7xl mx-auto px-6 py-12 w-full"
        >
          <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
            {/* Top Bar of Graphic */}
            <div className="px-6 py-4 bg-slate-50/90 border-b border-slate-200 flex items-center justify-between text-xs font-mono text-slate-600">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
                <span className="ml-2 text-slate-700 font-semibold">
                  codedrio-mesh-architecture // v3.8.0
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-cyan-700 font-semibold flex items-center gap-1">
                  <Activity className="w-3.5 h-3.5 animate-pulse text-cyan-600" /> Live Telemetry
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
                alt="CodeDrio Technologies Distributed Architecture and AI Neural Network"
                className="w-full h-auto object-cover max-h-[550px] transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />

              {/* Gradient overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-85" />

              {/* Interactive Floating Hotspot Badges */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4">
                <div className="p-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200/90 max-w-md shadow-2xl">
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-700 font-semibold">
                    <Zap className="w-4 h-4 text-cyan-600" />
                    <span>NEXT-GEN ARCHITECTURE</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mt-1">
                    Distributed High-Throughput Engine
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Zero-latency event mesh connecting autonomous AI cores, distributed microservices, and secure enterprise gateways.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3.5 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 text-xs font-mono text-slate-800 flex items-center gap-1.5 shadow-md">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    99.999% SLA Resiliency
                  </span>
                  <span className="px-3.5 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 text-xs font-mono text-slate-800 flex items-center gap-1.5 shadow-md">
                    <Cpu className="w-3.5 h-3.5 text-blue-600" />
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono font-semibold mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>CORE PILLARS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight font-['Outfit']">
              What CodeDrio Technologies Delivers
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg">
              We eliminate technical debt and architect high-velocity software solutions from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map((cap, i) => {
              const Icon = cap.icon
              return (
                <div
                  key={i}
                  className="group relative p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-200/90 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-cyan-500/40 flex flex-col justify-between"
                >
                  <div>
                    {/* Icon with gradient badge */}
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${cap.color} p-[1.5px] mb-6 shadow-md`}
                    >
                      <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                        <Icon className={`w-6 h-6 ${cap.iconColor} group-hover:scale-110 transition-transform duration-300`} />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-cyan-700 transition-colors font-['Outfit']">
                      {cap.title}
                    </h3>
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed font-normal">
                      {cap.desc}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap gap-2">
                    {cap.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200/80"
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
          <div className="rounded-3xl bg-[#0b0f19] backdrop-blur-2xl border border-slate-200/80 overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.12)]">
            {/* Header / Tabs */}
            <div className="px-6 py-4 bg-[#070b14] border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
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
  "company": "CodeDrio Technologies",
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
                className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm font-mono text-slate-700 hover:text-slate-950 hover:border-cyan-500/50 hover:shadow-md transition-all shadow-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Priority Project Consultation Banner */}
        <section className="max-w-7xl mx-auto px-6 py-16 w-full">
          <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-cyan-50/90 via-blue-50/70 to-indigo-50/90 border border-blue-200/80 shadow-[0_20px_50px_rgba(59,130,246,0.08)] flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left overflow-hidden">
            <div className="max-w-2xl relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-800 text-xs font-mono mb-4 border border-blue-400/30">
                <img src="/favicon.png" alt="" className="w-3.5 h-3.5 object-contain" />
                <span>FOUNDER & ENTERPRISE COLLABORATION</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight font-['Outfit']">
                Have a Complex Software Project to Build?
              </h2>
              <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                Don’t wait for the official public launch. We are accepting selected visionary partners for strategic engineering, custom MVP builds, and AI agent architectures today.
              </p>
            </div>

            <div className="relative z-10 flex-shrink-0">
              <button
                id="cta-schedule-btn"
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 rounded-2xl font-bold text-sm bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-200 cursor-pointer flex items-center gap-2"
              >
                <span>Talk with an Architect</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </section>
          </>
        ) : currentPage === 'services' ? (
          <Services />
        ) : currentPage === 'about' ? (
          <About />
        ) : (
          <ContactUs />
        )}

        {/* Footer */}
        <footer
          id="main-footer"
          className="mt-auto border-t border-slate-200/90 bg-white px-6 py-12"
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-xs text-slate-600">
            {/* Left Brand Details */}
            <div className="flex flex-col items-center md:items-start gap-2.5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-600 p-[1.5px] shadow-sm">
                  <div className="w-full h-full bg-white rounded-[6px] flex items-center justify-center p-0.5">
                    <img
                      src="/favicon.png"
                      alt="CodeDrio Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <span className="font-extrabold text-base text-slate-900 tracking-tight font-['Outfit']">
                  CodeDrio <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Technologies</span>
                </span>
              </div>
              <p className="text-slate-500 max-w-sm text-center md:text-left">
                Next-generation software engineering, artificial intelligence, and cloud-native solutions.
              </p>
            </div>

            {/* Quick Navigation Links */}
            <div className="flex items-center gap-6 font-medium text-xs">
              <button
                onClick={() => { setCurrentPage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className={`transition-colors cursor-pointer ${currentPage === 'home' ? 'text-cyan-600 font-bold' : 'text-slate-600 hover:text-slate-900'}`}
              >
                Home
              </button>
              <button
                onClick={() => { setCurrentPage('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className={`transition-colors cursor-pointer ${currentPage === 'services' ? 'text-cyan-600 font-bold' : 'text-slate-600 hover:text-slate-900'}`}
              >
                Services
              </button>
              <button
                onClick={() => { setCurrentPage('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className={`transition-colors cursor-pointer ${currentPage === 'about' ? 'text-cyan-600 font-bold' : 'text-slate-600 hover:text-slate-900'}`}
              >
                About
              </button>
              <button
                onClick={() => { setCurrentPage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className={`transition-colors cursor-pointer ${currentPage === 'contact' ? 'text-cyan-600 font-bold' : 'text-slate-600 hover:text-slate-900'}`}
              >
                Contact Us
              </button>
            </div>

            {/* Social channels */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-950 hover:border-slate-300 hover:bg-white transition-all shadow-xs"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-300 hover:bg-white transition-all shadow-xs"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-300 hover:bg-white transition-all shadow-xs"
                title="X (Twitter)"
              >
                <TwitterIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="mailto:contact@codedriotech.com"
                className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-300 hover:bg-white transition-all shadow-xs"
                title="Email Us"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right text-slate-500">
              <div>© 2026 CodeDrio Technologies Inc. All rights reserved.</div>
              <div className="mt-1 text-[11px] text-slate-400">
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-sm animate-fade-in"
        >
          <div
            id="inquiry-modal"
            className="relative w-full max-w-lg p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-2xl text-left"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {!inquirySubmitted ? (
              <div>
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-cyan-700 mb-1">
                  <img src="/favicon.png" alt="" className="w-4 h-4 object-contain inline" />
                  <span>EARLY ACCESS INQUIRY</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Outfit']">
                  Partner with CodeDrio Technologies
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 mb-6">
                  Tell us about your project requirements and our engineering leads will respond within 24 hours.
                </p>

                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
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
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-3 focus:ring-blue-500/15 transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
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
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-3 focus:ring-blue-500/15 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Company or Startup
                      </label>
                      <input
                        type="text"
                        value={inquiryData.company}
                        onChange={(e) =>
                          setInquiryData({ ...inquiryData, company: e.target.value })
                        }
                        placeholder="e.g. Acme AI"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-3 focus:ring-blue-500/15 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Primary Engineering Focus
                    </label>
                    <select
                      value={inquiryData.interest}
                      onChange={(e) =>
                        setInquiryData({ ...inquiryData, interest: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-3 focus:ring-blue-500/15 transition-all"
                    >
                      <option>AI & Custom LLM Development</option>
                      <option>Cloud Infrastructure & Kubernetes</option>
                      <option>Custom Enterprise Software</option>
                      <option>Full-Stack Web / Mobile Application</option>
                      <option>General Partnership / Investment</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Project Overview
                    </label>
                    <textarea
                      rows={3}
                      value={inquiryData.message}
                      onChange={(e) =>
                        setInquiryData({ ...inquiryData, message: e.target.value })
                      }
                      placeholder="Briefly describe what you're building, timeline, or key objectives..."
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-3 focus:ring-blue-500/15 transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-500/25 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4 text-white" />
                      <span>Submit Priority Inquiry</span>
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="py-8 text-center">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 font-['Outfit']">Inquiry Received!</h3>
                <p className="text-slate-600 text-sm mt-2 max-w-sm mx-auto">
                  Thank you, <strong className="text-slate-900">{inquiryData.name}</strong>. Our engineering leads will review your requirements and reach out via email shortly.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
