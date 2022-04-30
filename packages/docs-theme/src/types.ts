export interface Site {
    title: string;
    description: string;
    defaultLanguage: string;
}

export interface Image {
    src: string;
    alt: string;
}

export interface OpenGraph {
    image: Image;
    twitter: string;
}

export interface KnownLanguages {
    [name: string]: string;
}

export interface SidebarLink {
    text: string;
    link: string;
}

export interface SidebarHeader {
    text: string;
    header: true;
}

export type SidebarItem = SidebarLink | SidebarHeader;

export function isSidebarHeader(item: SidebarItem): item is SidebarHeader {
    return 'header' in item;
}

export function isSidebarLink(item: SidebarLink): item is SidebarLink {
    return 'link' in item;
}

export interface Sidebar {
    [lang: string]: [SidebarItem];
}

export interface Algolia {
    indexName: string;
    appId: string;
    apiKey: string;
}

export interface ThemeOptions {
    site: Site;
    openGraph: OpenGraph;
    knownLanguages: KnownLanguages;
    sidebar: SidebarHeader;
    languagePathRegex: RegExp;
    algolia?: Algolia;
    githubEditUrl?: string;
    communityInviteUrl?: string;
}
