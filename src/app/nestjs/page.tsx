import Link from "next/link";
import CodeBlock from "@/shared/components/CodeBlock";

const LINKS = {
  github: "https://github.com/JohnOGama/nest-js-scaffold-cli",
  readme: "https://github.com/JohnOGama/nest-js-scaffold-cli/blob/main/README.md",
  root: "/",
} as const;

const AUTHOR = {
  name: "John Ogama",
} as const;

export default function NestJsPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-100 font-sans dark:from-black dark:via-zinc-950 dark:to-zinc-900 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-30 dark:opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, rgb(113 113 122) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/5 to-zinc-900/10 dark:from-transparent dark:via-zinc-950/20 dark:to-zinc-950/30 pointer-events-none" />

      <main className="relative mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 z-10">
        {/* Header / Navigation */}
        <header className="mb-10 flex items-center justify-between">
          <Link href={LINKS.root} className="flex items-center gap-2">
            <span className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
              Scaffold
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400">
              Next.js &amp; NestJS
            </span>
          </Link>
          <nav className="flex items-center gap-3 text-sm">
            <Link
              href="/"
              className="px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/40 dark:bg-zinc-900/40 text-zinc-600 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all"
            >
              Next.js Scaffold
            </Link>
            <span className="px-3 py-1.5 rounded-full border border-blue-500/80 dark:border-blue-400/80 bg-blue-500/90 dark:bg-blue-500/90 text-white text-xs font-medium shadow-sm">
              NestJS Scaffold
            </span>
          </nav>
        </header>

        {/* Hero */}
        <section className="flex flex-col items-center justify-center text-center py-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-sm px-4 py-1.5 text-sm text-zinc-600 dark:text-zinc-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            CLI Tool for NestJS
          </div>
          <h1 className="mb-4 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 dark:from-zinc-50 dark:via-zinc-100 dark:to-zinc-50 bg-clip-text text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-transparent">
            NestJS Scaffold
          </h1>
          <p className="mb-4 max-w-2xl text-lg sm:text-xl leading-8 text-zinc-700 dark:text-zinc-300">
            A powerful CLI to scaffold NestJS projects with a structured, production-ready architecture.
          </p>
          <p className="mb-10 max-w-2xl text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
            Generate NestJS applications with TypeScript, Drizzle ORM, Better Auth, logging, testing,
            and Terraform-based infrastructure in seconds.
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
            <Link
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-11 items-center justify-center gap-2 rounded-full border-2 border-zinc-300 dark:border-zinc-700 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm px-7 text-sm font-medium text-zinc-900 dark:text-zinc-50 transition-all hover:scale-105 hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:shadow-lg"
            >
              <span>View NestJS CLI on GitHub</span>
            </Link>
            <Link
              href={LINKS.readme}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-11 items-center justify-center gap-2 rounded-full border-2 border-blue-500/80 dark:border-blue-400/80 bg-blue-500/90 dark:bg-blue-500/90 text-white backdrop-blur-sm px-7 text-sm font-medium transition-all hover:scale-105 hover:border-blue-400 dark:hover:border-blue-300 hover:bg-blue-600 dark:hover:bg-blue-400 hover:shadow-lg"
            >
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
              <span>Read NestJS Quick Start</span>
            </Link>
          </div>

          {/* Installation */}
          <div className="w-full max-w-2xl mb-12">
            <div className="group relative rounded-xl bg-zinc-900 dark:bg-zinc-950 p-3 border border-zinc-800 shadow-2xl hover:shadow-zinc-900/50 dark:hover:shadow-zinc-950/50 transition-all duration-300">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-300" />
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="h-3 w-3 rounded-full bg-red-500 shadow-lg shadow-red-500/50" />
                      <div className="h-3 w-3 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/50" />
                      <div className="h-3 w-3 rounded-full bg-green-500 shadow-lg shadow-green-500/50" />
                    </div>
                    <span className="text-sm text-zinc-400 ml-2 font-medium">Terminal</span>
                  </div>
                  <span className="text-xs text-zinc-500 px-2 py-1 rounded bg-zinc-800/50">
                    Install CLI locally
                  </span>
                </div>
                <div className="space-y-2">
                  <CodeBlock command="git clone https://github.com/JohnOGama/nest-js-scaffold-cli.git" />
                  <CodeBlock command="cd nest-js-scaffold-cli" />
                  <CodeBlock command="npm install" />
                  <CodeBlock command="npm run build" />
                  <CodeBlock command="npm link" />
                </div>
              </div>
            </div>
          </div>

          {/* Quick Start */}
          <div className="w-full max-w-2xl mb-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">Quick Start</h2>
              <Link
                href={LINKS.readme}
                target="_blank"
                rel="noopener noreferrer"
                className="group text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors flex items-center gap-1"
              >
                View Full Guide
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
            <div className="group relative rounded-xl bg-zinc-900 dark:bg-zinc-950 p-6 border border-zinc-800 shadow-2xl hover:shadow-zinc-900/50 dark:hover:shadow-zinc-950/50 transition-all duration-300">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-300" />
              <div className="relative space-y-5">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                      Generate a NestJS project
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
                      Recommended
                    </span>
                  </div>
                  <CodeBlock command="nest-js-scaffold my-nestjs-app" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Summary */}
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          <FeatureCard
            emoji="🚀"
            title="Quick Setup"
            description="Generate a complete NestJS project in seconds with a production-ready setup."
          />
          <FeatureCard
            emoji="📦"
            title="Package Manager Support"
            description="Works with npm, pnpm, yarn, and bun out of the box."
          />
          <FeatureCard
            emoji="🏗️"
            title="Structured Architecture"
            description="Modular folder structure for scalable, maintainable backend services."
          />
          <FeatureCard
            emoji="🗄️"
            title="Database Ready"
            description="Pre-configured Drizzle ORM with PostgreSQL and auto-loaded entities."
          />
          <FeatureCard
            emoji="🔐"
            title="Authentication Built-in"
            description="Better Auth integration for secure authentication and authorization."
          />
          <FeatureCard
            emoji="☁️"
            title="Terraform Infra"
            description="AWS-ready Terraform modules for VPC, ECS, RDS, and S3."
          />
        </section>

        {/* CTA */}
        <section className="text-center py-12">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-sm px-4 py-1.5 text-sm text-zinc-600 dark:text-zinc-400">
            <span>✨</span>
            <span>Pair this with your Next.js frontend scaffold</span>
          </div>
          <p className="mb-6 max-w-xl mx-auto text-lg text-zinc-600 dark:text-zinc-400">
            Use <code className="px-1 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 text-xs">next-js-scaffold</code>{" "}
            for the frontend and <code className="px-1 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 text-xs">nest-js-scaffold</code>{" "}
            for the backend to bootstrap full-stack projects in minutes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={LINKS.root}
              className="px-6 h-11 inline-flex items-center justify-center rounded-full border border-zinc-300 dark:border-zinc-700 bg-white/80 dark:bg-zinc-900/80 text-sm font-medium text-zinc-800 dark:text-zinc-50 hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all"
            >
              View Next.js Scaffold
            </Link>
            <Link
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 h-11 inline-flex items-center justify-center rounded-full border border-blue-500/80 dark:border-blue-400/80 bg-blue-500/90 dark:bg-blue-500/90 text-sm font-medium text-white hover:bg-blue-600 dark:hover:bg-blue-400 hover:border-blue-400 dark:hover:border-blue-300 transition-all"
            >
              Open NestJS Scaffold Repo
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-10 border-t border-zinc-200 dark:border-zinc-800 mt-8">
          <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
            Created with <span className="text-red-500">♥</span> by{" "}
            <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              {AUTHOR.name}
            </span>
          </p>
        </footer>
      </main>
    </div>
  );
}

interface FeatureCardProps {
  emoji: string;
  title: string;
  description: string;
}

function FeatureCard({ emoji, title, description }: FeatureCardProps) {
  return (
    <div className="group relative rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm p-6 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-lg hover:shadow-zinc-200/50 dark:hover:shadow-zinc-900/50 transition-all duration-300 hover:-translate-y-1">
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-300" />
      <div className="relative">
        <div className="mb-4 text-3xl group-hover:scale-110 transition-transform duration-300">
          {emoji}
        </div>
        <h3 className="mb-2 text-lg font-semibold text-black dark:text-zinc-50">{title}</h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
