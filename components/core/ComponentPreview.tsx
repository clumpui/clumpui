'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React, { lazy, Suspense, useMemo, useState } from 'react'
import { Card } from "@/components/ui/card";
import { File, Folder, Tree } from "@/components/ui/file-tree";
import { buildElementsFromJsonPaths, cn, getAuthorProfile } from "@/lib/utils";
import { CodeBlock, CodeBlockGroup, CodeBlockCode } from "@/components/ui/code-block";
import { Check, ChevronDown, ChevronUp, Copy, Download, InfoIcon, Maximize, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { OpenInV0Button } from '../ui/open-in-v0-button';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '../ui/dialog';
import PackageManagerTabs from '../ui/tabs-02';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '../ui/sheet';
import { InfoCard } from './CoreCard';
import IssueButton, { FeatureRequestButton } from '../ui/issue-button';
import Typescript from '../icons/typescript';

const componentMap: Record<string, () => Promise<{ default: React.ComponentType<any> }>> = {
    "complex-component": () => import(`@/registry/new-york/complex-component/complex-component`),
    "hello-world": () => import(`@/registry/new-york/hello-world/hello-world`),
    "example-form": () => import(`@/registry/new-york/example-form/example-form`),
};

const ComponentPreview = ({ component }: { component: any }) => {
    const { theme } = useTheme()
    const [forceUpdate, setForceUpdate] = React.useState(false);
    const [key, setKey] = React.useState(0);
    const [selectedFileId, setSelectedFileId] = React.useState<string | null>(null);
    const [selectedFileContent, setSelectedFileContent] = React.useState<string | null>(null);
    const [selectedFileName, setSelectedFileName] = React.useState<string | null>(null);
    const [isOpen, setIsOpen] = useState(false)
    const ELEMENTS = buildElementsFromJsonPaths(component.files);

    const profile = getAuthorProfile(component.name);

    const LazyComponent = useMemo(() => {
        const componentName = component.name;

        const allowedComponents = [
            "action-search-bar", "ai-input-search", "ai-loading", "ai-prompt", "ai-text-loading", "ai-voice", "apple-activity-card", "attract-button", "avatar-picker", "background-paths", "beams-background", "bento-grid", "button", "card-flip", "card-stack", "carousel-cards", "command-button", "complex-component", "currency-transfer", "dynamic-text", "example-form", "file-upload", "glitch-text", "gradient-button", "hello-world", "hold-button", "liquid-glass-card", "matrix-text", "particle-button", "profile-dropdown", "scroll-text", "shape-hero", "shimmer-text", "sliced-text", "smooth-drawer", "smooth-tab", "social-button", "switch-button", "swoosh-text", "team-selector", "toolbar", "tweet-card", "type-writer", "v0-button","android-demo","android-demo-2","android-demo-3","animated-beam-bidirectional","animated-beam-demo","animated-beam-multiple-inputs","animated-beam-multiple-outputs","animated-beam-unidirectional","animated-circular-progress-bar-demo","animated-gradient-text-demo","animated-gradient-text-demo-2","animated-grid-pattern-demo","animated-list-demo","animated-shiny-text-demo","animated-subscribe-button-controlled-demo","animated-subscribe-button-demo","animated-theme-toggler-demo","arc-timeline-demo","aurora-text-demo","avatar-circles-demo","bento-demo","bento-demo-vertical","blur-fade-demo","blur-fade-text-demo","border-beam-demo","border-beam-demo-2","border-beam-demo-3","border-beam-demo-4","box-reveal-demo","code-comparison-demo","comic-text-demo","confetti-basic-cannon","confetti-custom-shapes","confetti-demo","confetti-emoji","confetti-fireworks","confetti-random-direction","confetti-side-cannons","confetti-stars","cool-mode-custom","cool-mode-demo","dock-demo","dock-demo-2","dock-demo-3","dot-pattern-demo","dot-pattern-linear-gradient","dot-pattern-with-glow-effect","file-tree-demo","flickering-grid-demo","flickering-grid-rounded-demo","flip-text-demo","globe-demo","grid-beams-demo","grid-pattern-dashed","grid-pattern-demo","grid-pattern-linear-gradient","hero-video-dialog-demo","hero-video-dialog-demo-top-in-bottom-out","highlighter-demo","hyper-text-demo","icon-cloud-demo","icon-cloud-demo-2","icon-cloud-demo-3","interactive-grid-pattern-demo","interactive-grid-pattern-demo-2","interactive-hover-button-demo","iphone-15-pro-demo","iphone-15-pro-demo-2","iphone-15-pro-demo-3","lens-demo","lens-demo-2","lens-demo-3","line-shadow-text-demo","magic-card-demo","marquee-3d","marquee-demo","marquee-demo-vertical","marquee-logos","meteors-demo","morphing-text-demo","neon-gradient-card-demo","number-ticker-decimal-demo","number-ticker-demo","number-ticker-demo-2","orbiting-circles-demo","particles-demo","pixel-image-demo","pointer-demo-1","progressive-blur-demo","pulsating-button-demo","rainbow-button-demo","rainbow-button-demo-2","retro-grid-demo","ripple-button-demo","ripple-demo","safari-demo","safari-demo-2","safari-demo-3","safari-demo-4","scratch-to-reveal-demo","script-copy-btn-demo","scroll-based-velocity-demo","scroll-based-velocity-images-demo","scroll-progress-demo","shimmer-button-demo","shine-border-demo","shine-border-demo-2","shiny-button-demo","smooth-cursor-demo","sparkles-text-demo","spinning-text-demo","spinning-text-demo-2","terminal-demo","text-animate-demo","text-animate-demo-2","text-animate-demo-3","text-animate-demo-4","text-animate-demo-5","text-animate-demo-6","text-animate-demo-7","text-animate-demo-8","text-animate-demo-9","text-reveal-demo","tweet-card-demo","tweet-card-images","tweet-card-meta-preview","typing-animation-demo","video-text-demo","warp-background-demo","word-rotate-demo"
        ]
            ;
        if (!allowedComponents.includes(componentName)) {
            throw new Error(`Unknown or unsafe component: ${componentName}`);
        }

        return lazy(() =>
            import(`@/registry/new-york/${componentName}/${componentName}`)
        );
    }, [component.name]);

    const reloadComponent = () => {
        setKey((prevKey) => prevKey + 1);
        setForceUpdate(!forceUpdate);
    };

    const onSelectFile = (id: string, path: string) => {
        setSelectedFileId(id);

        const file = component.files.find((f: any) => f.path === path);
        setSelectedFileContent(file?.content || "File not found");
        setSelectedFileName(file?.path?.split("/").pop() ?? "File not found");
    };

    const [copied, setCopied] = React.useState(false)

    const code = selectedFileContent!

    const handleCopy = () => {
        navigator.clipboard.writeText(code)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div>
            <Tabs className='' defaultValue='preview'>
                <div className='flex items-center justify-between'>
                    <TabsList>
                        <TabsTrigger value='code'>
                            Code
                        </TabsTrigger>
                        <TabsTrigger value='preview'>
                            Preview
                        </TabsTrigger>
                    </TabsList>
                    <h2 className='md:block hidden text-lg font-semibold'>
                        {component.name.split("-").map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
                    </h2>
                    <div className='flex items-center gap-2'>
                        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
                            <DropdownMenuTrigger className='md:flex hidden' asChild>
                                <Button className=''>
                                    <Download />
                                    Install
                                    <ChevronDown className={cn("-m-1", isOpen && "rotate-180")} />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className='border-0 rounded-xl p-0'>
                                <PackageManagerTabs
                                    registryUrl={'"' + process.env.NEXT_PUBLIC_BASE_URL + '/r/' + component.name + '.json"'}
                                />
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant={"outline"}>
                                    <InfoIcon />
                                    Info
                                </Button>
                            </SheetTrigger>
                            <SheetContent dir='right'>
                                <SheetTitle className='sr-only'>
                                    title
                                </SheetTitle>
                                    <InfoCard component={component} profile={profile}/>
                            </SheetContent>
                        </Sheet>
                        <IssueButton
                        componentName={component.name}
                        />
                    </div>
                </div>
                <TabsContent value='code' className="md:grid  grid-cols-5 w-full">
                    <Tree
                        className="col-span-1  rounded-md bg-background"
                        initialSelectedId={selectedFileId ?? '3'}
                        initialExpandedItems={[
                            "1",
                            "2",
                            "3",
                            "4",
                            "5",
                            "6",
                            "7",
                            "8",
                            "9",
                            "10",
                            "11",
                        ]}
                        elements={ELEMENTS}
                    >
                        {ELEMENTS.map((el: any) =>
                            renderTree(el, onSelectFile, selectedFileId)
                        )}
                    </Tree>
                    <Card className="col-span-4">
                        {selectedFileContent ? (
                            <CodeBlock>
                                <CodeBlockGroup className="border-border border-b py-2 pr-2 pl-4">
                                    <div className="flex items-center gap-2">
                                        <div className="bg-primary/10 text-primary rounded px-2 py-1 text-xs font-medium">
                                            ClumpUI
                                        </div>
                                        <span className="text-muted-foreground text-sm">{selectedFileName}</span>
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-8 w-8"
                                        onClick={handleCopy}
                                    >
                                        {copied ? (
                                            <Check className="h-4 w-4 text-green-500" />
                                        ) : (
                                            <Copy className="h-4 w-4" />
                                        )}
                                    </Button>
                                </CodeBlockGroup>
                                <CodeBlockCode theme={theme === "dark" ? "github-dark" : "github-light"} code={code} language="tsx" />
                            </CodeBlock>
                        ) : (
                            <p className="text-muted-foreground p-4 flex-1">Click a file to view its content.</p>
                        )}
                    </Card>
                </TabsContent>
                <TabsContent value='preview' className='md:m-0 md:mt-2'>
                    <Card className="bg-background">
                        <div className=" relative flex w-full items-center justify-center p-10 min-h-[83.5dvh] md:min-h-[81.5dvh] max-h-[83.5dvh] md:max-h-[81.5dvh] overflow-y-auto">
                            <Suspense fallback={
                                <>
                                    Loading...
                                </>
                            }>
                                <LazyComponent key={key} />
                            </Suspense>
                            <div className="flex  items-center gap-2 text-white absolute top-2 right-2">
                                <Button
                                    size="icon"
                                    variant="ghost"
                                    className=""
                                    onClick={reloadComponent}
                                >
                                    <RotateCcw className="text-secondary-foreground" />
                                </Button>
                                <OpenInV0Button
                                    name={component.name}
                                />
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button size={'icon'} variant={"ghost"}>
                                            <Maximize className="text-secondary-foreground" />
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent className="size-full m-0 max-w-full p-0 flex justify-center items-center">
                                        <DialogTitle className="sr-only">
                                            Copmpnent Preview
                                        </DialogTitle>
                                        <div className='flex w-full items-center justify-center p-10'>
                                        <Suspense fallback={<div></div>}>
                                            <LazyComponent key={key} />
                                        </Suspense>
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            </div>
                        </div>
                    </Card>
                </TabsContent>
            </Tabs>
        </div >
    )
}

interface RegistryFile {
    path: string;
    content: string;
    type: string;
    target?: string;
}

interface RegistryData {
    name: string;
    title: string;
    description: string;
    registryDependencies: string[];
    files: RegistryFile[];
}

export function RegistryViewer({ data }: { data: RegistryData }) {
    return (
        <div className="p-4 space-y-6">
            <div>
                <h1 className="text-2xl font-bold">{data.title}</h1>
                <p className="text-gray-600">{data.description}</p>
                <p><strong>Dependencies:</strong> {data.registryDependencies.join(", ")}</p>
            </div>

            <div className="space-y-4">
                {data.files.map((file, idx) => (
                    <div key={idx} className="border p-4 rounded-md bg-secondary-foreground/5">
                        <h2 className="font-semibold">{file.path.replace("registry/new-york/", "")}</h2>
                        <p className="text-sm text-gray-500">{file.type}</p>
                        {file.target && <p className="text-sm text-blue-500">Target: {file.target}</p>}
                        <pre className="mt-2 bg-white p-2 overflow-x-auto text-sm text-black">
                            <code>{file.content}</code>
                        </pre>
                    </div>
                ))}
            </div>
        </div>
    );
}

function renderTree(
    element: any,
    onSelectFile: (id: string, path: string) => void,
    selectedFileId: string | null
) {
    const isSelected = selectedFileId === element.id;

    if (element.children && element.children.length > 0) {
        return (
            <Folder className='truncate' key={element.id} element={element.name} value={element.id}>
                {element.children.map((child: any) =>
                    renderTree(child, onSelectFile, selectedFileId)
                )}
            </Folder>
        );
    }

    return (
        <Typescript
            key={element.id}
            value={element.id}
            isSelectable
            size={16}
            isSelect={isSelected}
            onClick={() => onSelectFile(element.id, element.path)}
        >
            <p className="truncate">{element.name}</p>
        </Typescript>
    );
}


export default ComponentPreview