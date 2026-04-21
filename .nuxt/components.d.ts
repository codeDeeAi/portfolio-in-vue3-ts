
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'AppFooter': typeof import("../app/components/layout/AppFooter.vue")['default']
    'AppHeader': typeof import("../app/components/layout/AppHeader.vue")['default']
    'ThemePrompt': typeof import("../app/components/layout/ThemePrompt.vue")['default']
    'AboutSection': typeof import("../app/components/sections/AboutSection.vue")['default']
    'ContactSection': typeof import("../app/components/sections/ContactSection.vue")['default']
    'ExperienceSection': typeof import("../app/components/sections/ExperienceSection.vue")['default']
    'HeroSection': typeof import("../app/components/sections/HeroSection.vue")['default']
    'ProjectsSection': typeof import("../app/components/sections/ProjectsSection.vue")['default']
    'SpeakingSection': typeof import("../app/components/sections/SpeakingSection.vue")['default']
    'TechStackSection': typeof import("../app/components/sections/TechStackSection.vue")['default']
    'DarkModeToggle': typeof import("../app/components/ui/DarkModeToggle.vue")['default']
    'ProjectCard': typeof import("../app/components/ui/ProjectCard.vue")['default']
    'SectionHeading': typeof import("../app/components/ui/SectionHeading.vue")['default']
    'TechBadge': typeof import("../app/components/ui/TechBadge.vue")['default']
    'ThemeToggle': typeof import("../app/components/ui/ThemeToggle.vue")['default']
    'TimelineItem': typeof import("../app/components/ui/TimelineItem.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtTime': typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
    'NuxtPicture': typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
      'LazyAppFooter': LazyComponent<typeof import("../app/components/layout/AppFooter.vue")['default']>
    'LazyAppHeader': LazyComponent<typeof import("../app/components/layout/AppHeader.vue")['default']>
    'LazyThemePrompt': LazyComponent<typeof import("../app/components/layout/ThemePrompt.vue")['default']>
    'LazyAboutSection': LazyComponent<typeof import("../app/components/sections/AboutSection.vue")['default']>
    'LazyContactSection': LazyComponent<typeof import("../app/components/sections/ContactSection.vue")['default']>
    'LazyExperienceSection': LazyComponent<typeof import("../app/components/sections/ExperienceSection.vue")['default']>
    'LazyHeroSection': LazyComponent<typeof import("../app/components/sections/HeroSection.vue")['default']>
    'LazyProjectsSection': LazyComponent<typeof import("../app/components/sections/ProjectsSection.vue")['default']>
    'LazySpeakingSection': LazyComponent<typeof import("../app/components/sections/SpeakingSection.vue")['default']>
    'LazyTechStackSection': LazyComponent<typeof import("../app/components/sections/TechStackSection.vue")['default']>
    'LazyDarkModeToggle': LazyComponent<typeof import("../app/components/ui/DarkModeToggle.vue")['default']>
    'LazyProjectCard': LazyComponent<typeof import("../app/components/ui/ProjectCard.vue")['default']>
    'LazySectionHeading': LazyComponent<typeof import("../app/components/ui/SectionHeading.vue")['default']>
    'LazyTechBadge': LazyComponent<typeof import("../app/components/ui/TechBadge.vue")['default']>
    'LazyThemeToggle': LazyComponent<typeof import("../app/components/ui/ThemeToggle.vue")['default']>
    'LazyTimelineItem': LazyComponent<typeof import("../app/components/ui/TimelineItem.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtTime': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const AppFooter: typeof import("../app/components/layout/AppFooter.vue")['default']
export const AppHeader: typeof import("../app/components/layout/AppHeader.vue")['default']
export const ThemePrompt: typeof import("../app/components/layout/ThemePrompt.vue")['default']
export const AboutSection: typeof import("../app/components/sections/AboutSection.vue")['default']
export const ContactSection: typeof import("../app/components/sections/ContactSection.vue")['default']
export const ExperienceSection: typeof import("../app/components/sections/ExperienceSection.vue")['default']
export const HeroSection: typeof import("../app/components/sections/HeroSection.vue")['default']
export const ProjectsSection: typeof import("../app/components/sections/ProjectsSection.vue")['default']
export const SpeakingSection: typeof import("../app/components/sections/SpeakingSection.vue")['default']
export const TechStackSection: typeof import("../app/components/sections/TechStackSection.vue")['default']
export const DarkModeToggle: typeof import("../app/components/ui/DarkModeToggle.vue")['default']
export const ProjectCard: typeof import("../app/components/ui/ProjectCard.vue")['default']
export const SectionHeading: typeof import("../app/components/ui/SectionHeading.vue")['default']
export const TechBadge: typeof import("../app/components/ui/TechBadge.vue")['default']
export const ThemeToggle: typeof import("../app/components/ui/ThemeToggle.vue")['default']
export const TimelineItem: typeof import("../app/components/ui/TimelineItem.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
export const NuxtPicture: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const LazyAppFooter: LazyComponent<typeof import("../app/components/layout/AppFooter.vue")['default']>
export const LazyAppHeader: LazyComponent<typeof import("../app/components/layout/AppHeader.vue")['default']>
export const LazyThemePrompt: LazyComponent<typeof import("../app/components/layout/ThemePrompt.vue")['default']>
export const LazyAboutSection: LazyComponent<typeof import("../app/components/sections/AboutSection.vue")['default']>
export const LazyContactSection: LazyComponent<typeof import("../app/components/sections/ContactSection.vue")['default']>
export const LazyExperienceSection: LazyComponent<typeof import("../app/components/sections/ExperienceSection.vue")['default']>
export const LazyHeroSection: LazyComponent<typeof import("../app/components/sections/HeroSection.vue")['default']>
export const LazyProjectsSection: LazyComponent<typeof import("../app/components/sections/ProjectsSection.vue")['default']>
export const LazySpeakingSection: LazyComponent<typeof import("../app/components/sections/SpeakingSection.vue")['default']>
export const LazyTechStackSection: LazyComponent<typeof import("../app/components/sections/TechStackSection.vue")['default']>
export const LazyDarkModeToggle: LazyComponent<typeof import("../app/components/ui/DarkModeToggle.vue")['default']>
export const LazyProjectCard: LazyComponent<typeof import("../app/components/ui/ProjectCard.vue")['default']>
export const LazySectionHeading: LazyComponent<typeof import("../app/components/ui/SectionHeading.vue")['default']>
export const LazyTechBadge: LazyComponent<typeof import("../app/components/ui/TechBadge.vue")['default']>
export const LazyThemeToggle: LazyComponent<typeof import("../app/components/ui/ThemeToggle.vue")['default']>
export const LazyTimelineItem: LazyComponent<typeof import("../app/components/ui/TimelineItem.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>

export const componentNames: string[]
