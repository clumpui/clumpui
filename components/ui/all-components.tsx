import React from 'react';
import { ArrowRight } from 'lucide-react';
import NotificationCenter from '@/registry/new-york/liquid-glass-card/liquid-glass-card';
import MarqueeLogos from '@/registry/new-york/marquee-logos/marquee-logos';
import SmoothTab from '@/registry/new-york/smooth-tab/smooth-tab';
import CardFlip from '@/registry/new-york/card-flip/card-flip';
import AI_Input_Search from '@/registry/new-york/ai-input-search/ai-input-search';
import CurrencyTransfer from '@/registry/new-york/currency-transfer/currency-transfer';
import HeroVideoDialogDemo from '@/registry/new-york/hero-video-dialog-demo/hero-video-dialog-demo';
import { RippleButton } from '@/registry/magicui/ripple-button';
import DynamicText from '@/registry/new-york/dynamic-text/dynamic-text';
import { ClientTweetCard } from '@/registry/magicui/client-tweet-card';
import FileUpload from '@/registry/new-york/file-upload/file-upload';
import Marquee3D from '@/registry/new-york/marquee-3d/marquee-3d';
import BoxRevealDemo from '@/registry/new-york/box-reveal-demo/box-reveal-demo';
import Link from 'next/link';
import GradientButton from '@/registry/new-york/gradient-button/gradient-button';
import HoldButton from '@/registry/new-york/hold-button/hold-button';
import TypewriterTitle from '@/registry/new-york/type-writer/type-writer';
import AI_Voice from '@/registry/new-york/ai-voice/ai-voice';
import AITextLoading from '@/registry/new-york/ai-text-loading/ai-text-loading';
import AI_Prompt from '@/registry/new-york/ai-prompt/ai-prompt';
import SwooshText from '@/registry/new-york/swoosh-text/swoosh-text';
import MarqueeDemo from '@/registry/new-york/marquee-demo/marquee-demo';
import { Card } from './card';
const homeComponents = [
    {
        id: 111,
        link: '/components/liquid-glass',
        componentSrc: <NotificationCenter />,
        className: 'lg:col-span-4 sm:col-span-5 col-span-14  row-span-4',
    },

    {
        id: 2,
        link: '/components/image-mousetrail',

        componentSrc: <MarqueeDemo />,
        className:
            ' lg:col-start-5  sm:inline-block hidden col-span-9  lg:col-end-11  lg:row-start-2  row-start-1 2xl:row-end-7 lg:row-end-6 row-end-9 row-span-4',
    },
    {
        id: 3,
        link: '/components/tabs',

        componentSrc: <SwooshText />,
        className: 'lg:col-span-4 sm:col-span-5 col-span-14  row-span-4 ',
    },

    {
        id: 4,
        link: '/components/clip-path',

        componentSrc: <div className='p-0.5'>
            <AI_Voice />
            <AITextLoading className='text-white/90' />
        </div>,
        className:
            '2xl:col-span-4 md:col-span-4 sm:col-span-5 col-span-14 lg:col-start-1 lg:col-end-5 lg:row-start-5 2xl:row-end-9 lg:row-end-7 row-span-4',
    },
    {
        id: 5,
        link: '/components/tabs',

        componentSrc: <CardFlip />,
        className:
            ' lg:col-start-5 md:col-span-10 sm:col-span-9 col-span-14   xl:col-end-9 lg:col-end-10  2xl:row-start-7 lg:row-start-6 2xl:row-end-9 lg:row-end-7 lg:row-span-4 row-span-2',
    },
    {
        id: 6,
        link: '/components/password',

        componentSrc: <CurrencyTransfer />,
        className:
            ' xl:col-start-9 lg:col-start-10 md:col-span-10 sm:col-span-9 col-span-14  xl:col-end-13 lg:col-end-15 2xl:row-start-7 lg:row-start-6 2xl:row-end-9   lg:row-end-7 lg:row-span-4 row-span-2',
    },
    {
        id: 7,
        link: '/components/media-modal',

        componentSrc: <HeroVideoDialogDemo />,
        className:
            'lg:col-start-11 sm:col-span-5 col-span-7  lg:col-end-15 lg:row-start-5 2xl:row-end-7 lg:row-end-6 row-span-4',
    },
    {
        id: 8,
        link: '/components/buttons',

        componentSrc: <div className="flex flex-wrap gap-2 justify-center items-center">
            <GradientButton label="Emerald" variant="emerald" />
            <GradientButton label="Purple" variant="purple" />
            <GradientButton label="Orange" variant="orange" />
        </div>,
        className:
            'xl:col-start-13 lg:col-start-6  lg:col-end-15  2xl:row-start-7 lg:row-start-20 xl:row-start-6 lg:row-span-4 2xl:row-end-11  xl:row-end-10  lg:row-end-21 sm:col-span-9 col-span-7 sm:row-span-2 row-span-4',
    },
    {
        id: 9,
        link: '/components/datetime-picker',

        componentSrc: <>
            <DynamicText />
            <TypewriterTitle sequences={[
                { text: "Typewriter", deleteAfter: true },
                { text: "Multiple Words", deleteAfter: true },
                { text: "Auto Loop", deleteAfter: false }
            ]} /></>,
        className:
            'xl:col-span-4 lg:col-span-7 sm:col-span-9 col-span-14 lg:row-auto row-span-2 ',
    },
    {
        id: 10,
        link: '/components/tags-input',

        componentSrc: <ClientTweetCard id="1668408059125702661" />,
        className: 'xl:col-span-4 sm:col-span-7 col-span-14 lg:row-auto row-span-2',
    },
    {
        id: 11,
        link: '/components/file-upload',

        componentSrc: <FileUpload />,
        className:
            'xl:col-start-9 lg:col-start-9  xl:col-end-13 lg:col-end-15 2xl:row-start-9 xl:row-start-7 lg:row-start-8 2xl:row-end-11  xl:row-end-10  lg:row-end-9 row-span-2 sm:col-span-7 col-span-14',
    },
    {
        id: 12,
        link: '/components/text-marquee',

        componentSrc: <Marquee3D />,
        className:
            'lg:col-start-1 lg:col-end-9 col-span-14 lg:row-span-4 2xl:row-start-10 lg:row-start-8 2xl:row-end-13 xl:row-end-12 lg:row-end-11',
    },

    {
        id: 13,
        link: '/components/image-reveal',

        componentSrc: <BoxRevealDemo />,
        className:
            'lg:col-span-6 lg:inline-block hidden sm:col-span-6 col-span-14 lg:row-span-4 2xl:row-start-11 xl:row-start-10 lg:row-start-9 2xl:row-end-13 xl:row-end-12 lg:row-end-11',
    },
];

function AllComponents() {
    return (
        <>
            <section className='relative'>
                <h1 className='xl:text-5xl md:text-4xl sm:text-3xl text-2xl  font-medium text-center pt-44 pb-10 flex gap-2 items-start justify-center
        '>
                    <img
                        src='https://fonts.gstatic.com/s/e/notoemoji/latest/1f525/512.gif'
                        alt='🔥'
                        className='w-12 h-12 sm:block hidden'
                    />
                    Supercharge Your Projects with <br className='md:block hidden' /> Ready-to-Use Components.
                </h1>
                <div className='relative grid grid-cols-14  gap-4 lg:container xl:px-0 px-3 mx-auto'>
                    {homeComponents?.slice(0, 13).map((component, index) => {
                        return (
                            <div className={`${component.className}`} key={index}>
                                <Card className='size-full relative group bg-background'>
                                    <Link
                                        href={component.link}
                                        className='absolute top-1 transition-all group-hover:opacity-100 opacity-0 text-[0.85rem] px-2 py-0.5 dark:bg-gray-800  bg-gray-200 right-2 z-10 rounded-md grid place-content-center cursor-pointer'
                                    >
                                        Preview
                                    </Link>
                                    <div className='grid size-full place-items-center'>
                                        {component?.componentSrc && component.componentSrc}
                                    </div>
                                </Card>
                            </div>
                        );
                    })}
                </div>
                <a
                    href='/components'
                    target='_blank'
                    className='flex sm:text-base text-sm absolute bottom-0 sm:w-fit w-60 left-[50%] translate-x-[-50%] py-2 px-3 dark:bg-neutral-900 bg-neutral-100 z-[10] justify-center group mx-auto font-medium items-center gap-2 rounded-md border dark:border-[#1d1d1d]'
                >
                    {' '}
                    <span>Browse all </span>
                    <span className='flex items-center gap-2'>
                        <span className='dark:text-zinc-400 text-zinc-500'>Components</span>{' '}
                        <ArrowRight className=' group-hover:translate-x-1 transition-all' />
                    </span>
                </a>
                <div className='absolute -bottom-5 -left-0 w-[100%] h-40 bg-gradient-to-t dark:from-black from-zinc-50 dark:via-black via-zinc-50 '></div>
            </section>
        </>
    );
}

export default AllComponents;