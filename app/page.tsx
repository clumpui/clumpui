import * as React from "react"
import Link from "next/link"
import { ArrowRight, Github, Star, Download, Code2, Zap, Palette, Shield, Smartphone, Moon, Sun, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

// Component imports for showcase
import GradientButton from "@/registry/new-york/gradient-button/gradient-button"
import FileUpload from "@/registry/new-york/file-upload/file-upload"
import AnimatedGridPatternDemo from "@/registry/new-york/animated-grid-pattern-demo/animated-grid-pattern-demo"
import ShimmerText from "@/registry/new-york/shimmer-text/shimmer-text"
import ParticleButton from "@/registry/new-york/particle-button/particle-button"
import TypeWriter from "@/registry/new-york/type-writer/type-writer"
import PackageManagerTabs from "@/components/ui/tabs-02"
import { CodeBlock, CodeBlockCode, CodeBlockGroup } from "@/components/ui/code-block"
import AllComponents from "@/components/ui/all-components"
import { ThemeProvider } from "@/components/ui/theme-provider"
import ThemeToggleButton from "@/components/ui/theme-toggle-button"

const stats = [
  { label: "Components", value: "200+" },
  { label: "Categories", value: "5" },
  { label: "Libraries", value: "3+" },
  { label: "Downloads", value: "10K+" }
]

const features = [
  {
    icon: Download,
    title: "One-Click Install",
    description: "Install components directly via shadcn CLI with a single command."
  },
  {
    icon: Code2,
    title: "TypeScript Ready",
    description: "All components are built with TypeScript for enhanced developer experience."
  },
  {
    icon: Zap,
    title: "Performance First",
    description: "Optimized components built with modern React patterns and best practices."
  },
  {
    icon: Palette,
    title: "Customizable",
    description: "Easy to modify and extend with Tailwind CSS utility classes."
  },
  {
    icon: Shield,
    title: "Accessible",
    description: "Built with accessibility in mind, following WCAG guidelines."
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Responsive design that works perfectly on all device sizes."
  }
]

const componentCategories = [
  {
    title: "AI Components",
    description: "Intelligent interfaces for modern applications",
    count: "5+",
    color: "bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-blue-500/20",
    examples: ["AI Input Search", "AI Prompts", "Voice Interface"]
  },
  {
    title: "Text Components",
    description: "Animated text effects and typography",
    count: "8+",
    color: "bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/20",
    examples: ["Shimmer Text", "Type Writer", "Glitch Text"]
  },
  {
    title: "Button Components",
    description: "Interactive buttons with engaging animations",
    count: "8+",
    color: "bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/20",
    examples: ["Gradient Button", "Particle Button", "Hold Button"]
  },
  {
    title: "Card Components",
    description: "Versatile card layouts and interactions",
    count: "7+",
    color: "bg-gradient-to-r from-orange-500/10 to-red-500/10 border-orange-500/20",
    examples: ["Card Flip", "Card Stack", "Apple Activity"]
  },
  {
    title: "Other Components",
    description: "General-purpose UI components",
    count: "170+",
    color: "bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border-indigo-500/20",
    examples: ["Bento Grid", "File Upload", "Animated Patterns"]
  }
]

export default function Home() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      forcedTheme="dark"
    >
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-background py-10 sm:py-12">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] dark:bg-gray-950 dark:bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)]">
            <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-20 blur-[100px]"></div>
          </div>

          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <Badge variant="secondary" className="mb-8 px-3 py-1">
                <Star className="mr-1 h-3 w-3" />
                200+ Components Available
              </Badge>

              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                <span className="bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 bg-clip-text text-transparent dark:from-white dark:via-gray-300 dark:to-white">
                  ClumpUI
                </span>
                <br />
                <span className="text-3xl sm:text-5xl lg:text-6xl text-muted-foreground">
                  Component Library
                </span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
                A unified component registry aggregating the best UI patterns from multiple libraries.
                One place for all your React components — curated, customizable, and ready to use.
              </p>

              <div className="sm:flex mt-10 gap-x-6 grid gap-2 w-full">
                <Button size="lg" className="h-12 px-8 w-full" asChild>
                  <Link href={'/components'}>
                    <Download className="mr-2 h-4 w-4" />
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="h-12 px-8 w-full" asChild>
                  <Link href={'https://github.com/amardeeplakshkar/clumpui'}>
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col items-center">
                    <dt className="text-3xl font-bold tracking-tight">{stat.value}</dt>
                    <dd className="text-sm text-muted-foreground mt-1">{stat.label}</dd>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Component Showcase */}
        <section className="py-24 bg-muted/30  rounded-lg">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                See Components in Action
              </h2>
              <p className="text-lg text-muted-foreground">
                Interactive previews of our most popular components
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Gradient Button Showcase */}
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-lg">Gradient Button</CardTitle>
                  <CardDescription>Beautiful gradient buttons with multiple variants</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <GradientButton label="Emerald" variant="emerald" />
                    <GradientButton label="Purple" variant="purple" />
                    <GradientButton label="Orange" variant="orange" />
                  </div>
                </CardContent>
              </Card>

              {/* Text Effects Showcase */}
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-lg">Text Effects</CardTitle>
                  <CardDescription>Animated text components for engaging UIs</CardDescription>
                </CardHeader>
                <CardContent className=" flex items-center justify-center h-32">
                  <TypeWriter sequences={[
                    { text: "Typewriter", deleteAfter: true },
                    { text: "Multiple Words", deleteAfter: true },
                    { text: "Auto Loop", deleteAfter: false }
                  ]} />
                </CardContent>
              </Card>

              {/* Background Pattern Showcase */}
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-lg">Background Patterns</CardTitle>
                  <CardDescription>Animated backgrounds and visual effects</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="h-32 relative">
                    <AnimatedGridPatternDemo />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <AllComponents />

        {/* Component Categories */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Component Categories
              </h2>
              <p className="text-lg text-muted-foreground">
                Organized collections of components for every use case
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {componentCategories.map((category) => (
                <Card key={category.title} className={cn("relative overflow-hidden transition-all hover:shadow-lg", category.color)}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{category.title}</CardTitle>
                      <Badge variant="secondary">{category.count}</Badge>
                    </div>
                    <CardDescription className="text-sm">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {category.examples.map((example) => (
                        <div key={example} className="text-sm text-muted-foreground flex items-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-current mr-2 opacity-60" />
                          {example}
                        </div>
                      ))}
                    </div>
                    <Button variant="ghost" size="sm" className="mt-4 w-full justify-start" asChild>
                      <Link href={`/components`}>
                        Explore {category.title}
                        <ArrowRight className="ml-auto h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-muted/30 rounded-lg ">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Why Choose ClumpUI?
              </h2>
              <p className="text-lg text-muted-foreground">
                Built with modern web standards and developer experience in mind
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature) => (
                <Card key={feature.title} className="border-0 shadow-none bg-background/50">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                          <feature.icon className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Getting Started Section */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">
                Get Started in Seconds
              </h2>

              <div className="rounded-lg border bg-muted/50 p-8 text-left max-w-2xl mx-auto">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">1. Install a component</p>
                    <PackageManagerTabs
                      registryUrl="https://clumpui.amardeep.space/r/gradient-button.json"
                    />
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-2">2. Use it in your project</p>
                    <CodeBlock>
                      <CodeBlockGroup className="border-border border-b px-4 py-2">
                        <div className="flex items-center gap-2">
                          <div className="bg-primary/10 text-primary rounded px-2 py-1 text-xs font-medium">
                            {"tsx"}
                          </div>
                        </div>
                      </CodeBlockGroup>
                      <CodeBlockCode
                        className="min-h-0 md:min-h-0"
                        code={`import GradientButton from "@/components/ui/gradient-button"`}
                        language={"tsx"}
                        theme={"dracula"}
                      />
                    </CodeBlock>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-12 px-8 md:w-min w-full" asChild>
                  <Link href="/componnets" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Browse Components
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="h-12 px-8" asChild>
                  <Link href="/docs/installation">
                    Read Documentation
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-24 bg-primary text-primary-foreground rounded-lg">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Join thousands of developers using ClumpUI to build better interfaces faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="h-12 px-8" asChild>
                <Link href={'/components'}>
                  <Download className="mr-2 h-4 w-4" />
                  Start Building Now
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 border-primary-foreground/20 text-primary-foreground hover:text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link href={'https://github.com/amardeeplakshkar/clumpui'}>
                  <Github className="mr-2 h-4 w-4" />
                  Star on GitHub
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </ThemeProvider>
  )
}
