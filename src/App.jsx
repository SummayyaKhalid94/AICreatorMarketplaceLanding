import {
  WandSparkles,
  Clapperboard,
  Layers3,
  ShoppingBag,
  Sparkles,
  PlayCircle,
} from 'lucide-react';
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const sectionMotion = {
  variants: fadeUp,
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.2 },
};

export default function AICreatorMarketplaceLanding() {

  const tools = [
    {
      title: 'AI Prompt Builder',
      desc: 'Create cinematic prompts for Veo, Kling, Runway and more.',
      icon: WandSparkles,
      glow: 'from-sky-500/20 to-cyan-500/20',
    },
    {
      title: 'Scene Generator',
      desc: 'Turn ideas into visual storyboards in seconds.',
      icon: Clapperboard,
      glow: 'from-blue-500/20 to-indigo-500/20',
    },
    {
      title: 'Motion Templates',
      desc: 'Drag and drop premium cinematic transitions and presets.',
      icon: Layers3,
      glow: 'from-cyan-500/20 to-sky-500/20',
    },
    {
      title: 'Creator Marketplace',
      desc: 'Buy and sell editing packs, LUTs, sounds and AI assets.',
      icon: ShoppingBag,
      glow: 'from-sky-500/20 to-blue-500/20',
    },
  ];

  const features = [
    'Built for AI filmmakers',
    'Lightning fast workflow',
    'Modern creator UI',
    'Responsive on every device',
    'Professional cinematic assets',
    'Easy prompt generation',
  ];

  const aiCategories = [
    {
      title: 'AI Image Tools',
      items: [
        'AI Clones',
        'Social Media Posts',
        'Graphic Design',
        'Image Editing',
        'Youtube Thumbnails',
        'Online Ads',
      ],
    },
    {
      title: 'AI Video Tools',
      items: [
        'Clone Videos',
        'Visual Effects',
        'Cinematic Films',
        'Video Ads',
        'Reels & TikToks',
        'Youtube Videos',
      ],
    },
    {
      title: 'AI Audio Tools',
      items: [
        'AI Voiceovers',
        'AI Voice Clones',
        'Voice Swaps',
        'AI Sound Effects',
        'AI Music Generation',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-120px] left-[-100px] h-[350px] w-[350px] rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-100px] h-[350px] w-[350px] rounded-full bg-blue-500/20 blur-3xl" />
      </div>

      {/* Navbar */}
      <header className="relative z-20 border-b border-white/10 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center">
            <img
              src="/images/promptedit-logo.png"
              alt="PromptEdit"
              className="h-12 w-auto md:h-16"
            />
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#" className="text-sm text-zinc-300 transition hover:text-white">
              Marketplace
            </a>
            <a href="#" className="text-sm text-zinc-300 transition hover:text-white">
              AI Tools
            </a>
            <a href="#" className="text-sm text-zinc-300 transition hover:text-white">
              Pricing
            </a>
            <a href="#" className="text-sm text-zinc-300 transition hover:text-white">
              Community
            </a>
          </nav>

          <button className="rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-medium transition hover:bg-white hover:text-black">
            Start Creating
          </button>
        </div>
      </header>

      {/* Hero */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 mx-auto grid max-w-7xl gap-14 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-2 lg:items-center lg:py-28"
      >
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-2 text-sm text-sky-300">
            AI Filmmaking Marketplace
          </div>

          <h2 className="max-w-2xl text-5xl font-black leading-tight md:text-7xl">
            Create Cinematic AI Videos Faster Than Ever
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Access the best AI tools in one place without paying for multiple subscriptions. Generate videos, images, music, voiceovers and cinematic content using a simple pay-as-you-go credit system.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-full bg-white px-7 py-4 font-semibold text-black transition hover:scale-105">
              Explore Marketplace
            </button>

            <button className="rounded-full border border-white/15 bg-white/5 px-7 py-4 font-semibold transition hover:bg-white/10">
              Watch Demo
            </button>
          </div>

          <div className="mt-10 rounded-[28px] border border-sky-500/20 bg-sky-500/5 p-6 backdrop-blur-xl">
            <p className="text-lg font-semibold text-white">
              No subscriptions required.
            </p>

            <p className="mt-3 leading-7 text-zinc-400">
              Try tools. Use tools. Only pay for what you actually use with AI credits.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-8 text-sm text-zinc-400">
            <div>
              <span className="block text-2xl font-bold text-sky-400">120K+</span>
              Creators
            </div>
            <div>
              <span className="block text-2xl font-bold text-sky-400">10K+</span>
              Assets
            </div>
            <div>
              <span className="block text-2xl font-bold text-sky-400">4.9/5</span>
              User Rating
            </div>
          </div>
        </div>

        {/* Hero UI Mockup */}
        <div className="relative">
          <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-sky-500/30 to-blue-500/20 blur-3xl" />

          <div className="relative rounded-[36px] border border-white/10 bg-zinc-900/80 p-5 shadow-2xl backdrop-blur-xl">
            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <h3 className="text-lg font-semibold">AI Video Workspace</h3>
                <p className="text-sm text-zinc-400">Generate cinematic scenes instantly</p>
              </div>

              <div className="rounded-full bg-sky-500/20 px-4 py-2 text-sm text-sky-300">
                Live Preview
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-800 to-zinc-900 p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-zinc-400">Prompt</p>
                    <h4 className="mt-2 text-lg font-semibold">
                      Futuristic cyberpunk street with rain and cinematic lighting
                    </h4>
                  </div>

                  <div className="rounded-xl bg-sky-500/20 px-3 py-1 text-xs text-sky-300">
                    Veo Ready
                  </div>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-zinc-400">Motion Pack</p>
                  <h4 className="mt-2 text-lg font-semibold">Cinematic Transitions</h4>
                  <div className="mt-4 h-28 rounded-2xl bg-gradient-to-br from-sky-500/30 to-blue-500/20" />
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-zinc-400">AI Scene</p>
                  <h4 className="mt-2 text-lg font-semibold">Generated Storyboard</h4>
                  <div className="mt-4 h-28 rounded-2xl bg-gradient-to-br from-cyan-500/30 to-blue-500/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Tools Section */}
      <motion.section {...sectionMotion} className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-sky-400">
            Creator Workflow
          </p>

          <h2 className="text-4xl font-black md:text-5xl">
            Everything Creators Need In One Place
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {tools.map((tool, index) => {
            const Icon = tool.icon;

            return (
              <div
                key={index}
                className="group rounded-[30px] border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-2 hover:border-sky-500/40 hover:bg-white/10"
              >
                <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${tool.glow}`}>
                  <Icon className="h-7 w-7 text-sky-400" />
                </div>

                <h3 className="text-xl font-bold">{tool.title}</h3>

                <p className="mt-4 leading-7 text-zinc-400">
                  {tool.desc}
                </p>
              </div>
            );
          })}
        </div>
      </motion.section>

      {/* Demo Video Section */}
      <motion.section {...sectionMotion} className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-2 text-sm text-sky-300">
              <Sparkles className="h-4 w-4" />
              Watch PromptEdit In Action
            </div>

            <h2 className="text-4xl font-black leading-tight md:text-6xl">
              One Platform. Endless Creative Possibilities.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
              Watch how creators use PromptEdit to generate cinematic AI content, build scenes, and create professional videos faster.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="flex items-center gap-2 rounded-full bg-sky-500 px-7 py-4 font-semibold text-white transition hover:scale-105 hover:bg-sky-400">
                <PlayCircle className="h-5 w-5" />
                Watch Demo
              </button>
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-zinc-900/80 p-3 shadow-2xl backdrop-blur-xl">
            <div className="overflow-hidden rounded-[24px]">
              <iframe
                src="https://fast.wistia.net/embed/iframe/eu37od3pav?web_component=true&seo=true"
                allow="autoplay; fullscreen"
                className="aspect-video w-full"
                title="PromptEdit Demo"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* AI Categories */}
      <motion.section {...sectionMotion} className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-sky-400">
            Everything In One Place
          </p>

          <h2 className="text-4xl font-black md:text-5xl">
            Access All Major AI Creator Tools
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            Instead of paying for multiple expensive subscriptions, PromptEdit gives creators one simple platform to access the best AI tools.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {aiCategories.map((category, index) => (
            <div
              key={index}
              className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <h3 className="text-2xl font-bold text-white">
                {category.title}
              </h3>

              <div className="mt-8 space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex items-center gap-3 rounded-2xl border border-white/5 bg-black/20 px-4 py-4"
                  >
                    <div className="h-2.5 w-2.5 rounded-full bg-sky-400" />
                    <span className="text-zinc-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section {...sectionMotion} className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-sky-400">
            PromptEdit Pricing
          </p>

          <h2 className="text-4xl font-black md:text-6xl">
            Save More On AI Credits
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            Choose between one-time credits or monthly savings with access to premium creator assets.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[36px] border border-sky-500/20 bg-gradient-to-br from-sky-500/10 to-blue-500/10 p-10 backdrop-blur-xl">
            <div className="inline-flex rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-2 text-sm text-sky-300">
              Existing Student Discount
            </div>

            <h3 className="mt-8 text-4xl font-black">$98</h3>

            <p className="mt-3 text-xl text-white">
              Get $110 Worth of AI Credits
            </p>

            <p className="mt-6 leading-8 text-zinc-300">
              Use credits across Veo, Kling, Nano Banana, ElevenLabs, Suno, Ideogram and more without paying monthly subscriptions.
            </p>

            <button className="mt-10 w-full rounded-2xl bg-sky-500 px-6 py-4 text-lg font-semibold text-white transition hover:bg-sky-400">
              Claim Discount
            </button>
          </div>

          <div className="rounded-[36px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
            <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
              Monthly Membership
            </div>

            <h3 className="mt-8 text-4xl font-black">$39/mo</h3>

            <p className="mt-3 text-xl text-white">
              Save On Everything
            </p>

            <div className="mt-8 space-y-4 text-zinc-300">
              <div>✓ $49 worth of AI credits every month</div>
              <div>✓ 10% off extra credit purchases</div>
              <div>✓ Access to 100,000+ creator assets</div>
              <div>✓ Faster generations</div>
              <div>✓ Run multiple generations at once</div>
            </div>

            <button className="mt-10 w-full rounded-2xl border border-white/10 bg-white px-6 py-4 text-lg font-semibold text-black transition hover:scale-[1.02]">
              Start Membership
            </button>
          </div>
        </div>
      </motion.section>

      {/* Templates Library */}
      <motion.section {...sectionMotion} className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-sky-400">
            Content Creator Templates Library
          </p>

          <h2 className="text-4xl font-black md:text-6xl">
            100,000+ Premium Creator Assets
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              title: '4,000+ LUTs',
              desc: 'Professional cinematic color grading packs.',
            },
            {
              title: '60,000+ Sound FX',
              desc: 'High quality sound effects for creators.',
            },
            {
              title: '3,000+ Text Animations',
              desc: 'Modern motion graphics and titles.',
            },
            {
              title: '2,000+ Overlays',
              desc: 'Textures, light leaks and cinematic overlays.',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-[30px] border border-white/10 bg-white/5 p-8"
            >
              <div className="mb-5 h-40 rounded-[24px] bg-gradient-to-br from-sky-500/20 to-blue-500/10" />

              <h3 className="text-2xl font-bold">{item.title}</h3>

              <p className="mt-4 leading-7 text-zinc-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section {...sectionMotion} className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-sky-400">
            Creator Testimonials
          </p>

          <h2 className="text-4xl font-black md:text-5xl">
            Trusted By Content Creators
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {[
            'My daughter and I got more editing work done today in 3 hours than we normally do in 3 days.',
            'My videos would not look HALF as good without the Content Creator Templates Library.',
            'I don’t need any other digital asset subscriptions anymore.',
          ].map((quote, index) => (
            <div
              key={index}
              className="rounded-[30px] border border-white/10 bg-white/5 p-8"
            >
              <div className="mb-6 text-5xl text-sky-400">“</div>

              <p className="leading-8 text-zinc-300">
                {quote}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Feature Grid */}
      <motion.section {...sectionMotion} className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-sky-400">
              Why Creators Love It
            </p>

            <h2 className="text-4xl font-black leading-tight md:text-5xl">
              Designed For Speed, Creativity & Simplicity
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
              We focus on building intuitive tools creators actually enjoy using. No clutter. No confusing workflow. Just smooth creation.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-fuchsia-500/20 text-fuchsia-300">
                    ✓
                  </div>

                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[36px] border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-6">
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold">Marketplace Dashboard</h3>
                  <p className="text-sm text-zinc-400">Modern responsive creator experience</p>
                </div>

                <div className="rounded-full bg-emerald-500/20 px-4 py-2 text-sm text-emerald-300">
                  Online
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl bg-white/5 p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold">AI Video Pack</h4>
                      <p className="mt-1 text-sm text-zinc-400">Premium cinematic transitions</p>
                    </div>

                    <button className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black">
                      Download
                    </button>
                  </div>
                </div>

                <div className="rounded-2xl bg-white/5 p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold">Kling Prompt Pack</h4>
                      <p className="mt-1 text-sm text-zinc-400">50 cinematic prompts included</p>
                    </div>

                    <button className="rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium">
                      Preview
                    </button>
                  </div>
                </div>

                <div className="rounded-2xl bg-white/5 p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold">Creator Sound FX</h4>
                      <p className="mt-1 text-sm text-zinc-400">High quality cinematic audio</p>
                    </div>

                    <button className="rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium">
                      Play
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section {...sectionMotion} className="relative z-10 px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-[40px] border border-white/10 bg-gradient-to-br from-fuchsia-500/10 to-violet-500/10 px-8 py-16 text-center backdrop-blur-xl md:px-16">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-sky-400">
            Start Creating
          </p>

          <h2 className="mx-auto max-w-3xl text-4xl font-black leading-tight md:text-6xl">
            Build The Future Of AI Filmmaking
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            Join thousands of creators using AI tools, cinematic assets and modern workflows to create better content faster.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:scale-105">
              Join Marketplace
            </button>

            <button className="rounded-full border border-white/15 bg-white/5 px-8 py-4 font-semibold transition hover:bg-white/10">
              View Tools
            </button>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-sm text-zinc-500 md:flex-row">
          <p>© 2026 PromptEdit. Built for creators.</p>

          <div className="flex items-center gap-6">
            <a href="#" className="transition hover:text-white">
              Terms
            </a>
            <a href="#" className="transition hover:text-white">
              Privacy
            </a>
            <a href="#" className="transition hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}