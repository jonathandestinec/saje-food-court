"use client"

import { cn } from '@/lib/utils';
import { useEffect } from 'react';

declare global {
    interface Window {
        instgrm: any;
    }
}

const InstagramEmbed = ({ embedHtml, className }: { embedHtml: string, className?: string }) => {
    useEffect(() => {
        if (window.instgrm) {
            window.instgrm.Embeds.process();
        }
    }, []);

    return (
        <div className={cn(className || "")}
            dangerouslySetInnerHTML={{ __html: embedHtml }}
        />
    );
};

export default InstagramEmbed;
