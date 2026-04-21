import { defineComponent, mergeProps, ref, unref, computed, reactive, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { d as usePreferencesStore, b as useRuntimeConfig } from './server.mjs';
import { u as useSeoMeta, a as useHead } from './v4-BF0rc0cm.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'ipx';
import 'pinia';
import 'vue-router';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "ThemeToggle",
  __ssrInlineRender: true,
  setup(__props) {
    const store = usePreferencesStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center gap-1 p-1 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)]" }, _attrs))}><button class="${ssrRenderClass([
        "flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200",
        unref(store).isTerminal ? "bg-[var(--accent)] text-white shadow-sm" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
      ])}" title="Terminal theme"><svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg><span class="hidden sm:inline font-mono">Terminal</span></button><button class="${ssrRenderClass([
        "flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200",
        unref(store).isMinimal ? "bg-[var(--accent)] text-white shadow-sm" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
      ])}" title="Minimal theme"><svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect></svg><span class="hidden sm:inline">Minimal</span></button></div>`);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/ThemeToggle.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const __nuxt_component_0$3 = Object.assign(_sfc_main$f, { __name: "ThemeToggle" });
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "DarkModeToggle",
  __ssrInlineRender: true,
  setup(__props) {
    const store = usePreferencesStore();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(store).isMinimal) {
        _push(`<button${ssrRenderAttrs(mergeProps({
          class: "p-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors",
          title: unref(store).darkMode ? "Switch to light mode" : "Switch to dark mode"
        }, _attrs))}>`);
        if (unref(store).darkMode) {
          _push(`<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`);
        } else {
          _push(`<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`);
        }
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/DarkModeToggle.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const __nuxt_component_1$3 = Object.assign(_sfc_main$e, { __name: "DarkModeToggle" });
const personal = {
  name: "Adeola Bada",
  title: "Senior Backend Engineer",
  tagline: "Building the backend infrastructure that powers products at scale.",
  bio: `I'm a Senior Backend Engineer with 5+ years of experience designing and shipping the systems behind products — from real-time payment platforms and marketplace backends to custom PHP frameworks and distributed APIs. My background in Civil Engineering gives me a structural approach to software: I think in systems, constraints, and load long before I think in code.

I've led backend teams, driven architecture decisions, and delivered measurable results: 25% increases in user engagement, 40% reductions in payout processing time, and 30% drops in payment fraud. Currently learning Rust and pursuing an MSc in Information Technology.`,
  location: "Nigeria",
  email: "dunsin.bada@gmail.com",
  website: "https://www.adeolabada.com",
  resumeUrl: "https://docs.google.com/document/d/1okaqsmiuCgyqf4zxqJ1wNJG4i71-njDJLHzOD_70N4E/edit?usp=sharing",
  photo: "/images/1-rb.png",
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/codeDeeAi",
      icon: "github"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/adeola-bada-aiism-a51174124/",
      icon: "linkedin"
    },
    {
      name: "Twitter / X",
      url: "https://twitter.com/AdeolaBada1",
      icon: "twitter"
    }
  ],
  stats: [
    { value: "5+", label: "Years Experience" },
    { value: "3", label: "Continents" },
    { value: "10+", label: "Products Shipped" }
  ]
};
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "AppHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const store = usePreferencesStore();
    const mobileOpen = ref(false);
    const navLinks = [
      { label: "About", href: "#about" },
      { label: "Experience", href: "#experience" },
      { label: "Speaking", href: "#speaking" },
      { label: "Projects", href: "#projects" },
      { label: "Stack", href: "#stack" },
      { label: "Contact", href: "#contact" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ThemeToggle = __nuxt_component_0$3;
      const _component_DarkModeToggle = __nuxt_component_1$3;
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: [
          "fixed top-0 left-0 right-0 z-50 transition-all",
          unref(store).isTerminal ? "bg-[var(--bg-primary)]/95 border-b border-[var(--border-color)] backdrop-blur-sm" : "bg-[var(--bg-primary)]/90 border-b border-[var(--border-color)] backdrop-blur-md shadow-sm"
        ]
      }, _attrs))}><nav class="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4"><a href="#hero" class="${ssrRenderClass([
        "font-bold text-sm shrink-0 transition-colors",
        unref(store).isTerminal ? "font-mono text-[var(--accent)] hover:text-[var(--accent-hover)]" : "text-[var(--text-primary)] hover:text-[var(--accent)]"
      ])}">`);
      if (unref(store).isTerminal) {
        _push(`<span>~/adeola.bada</span>`);
      } else {
        _push(`<span>Adeola Bada</span>`);
      }
      _push(`</a><ul class="hidden md:flex items-center gap-1"><!--[-->`);
      ssrRenderList(navLinks, (link) => {
        _push(`<li><a${ssrRenderAttr("href", link.href)} class="${ssrRenderClass([
          "px-3 py-1.5 rounded-md text-xs font-medium transition-colors",
          unref(store).isTerminal ? "font-mono text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--bg-card)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]"
        ])}">`);
        if (unref(store).isTerminal) {
          _push(`<span>./${ssrInterpolate(link.label.toLowerCase())}</span>`);
        } else {
          _push(`<span>${ssrInterpolate(link.label)}</span>`);
        }
        _push(`</a></li>`);
      });
      _push(`<!--]--></ul><div class="flex items-center gap-2 shrink-0">`);
      _push(ssrRenderComponent(_component_ThemeToggle, null, null, _parent));
      _push(ssrRenderComponent(_component_DarkModeToggle, null, null, _parent));
      _push(`<a${ssrRenderAttr("href", unref(personal).resumeUrl)} target="_blank" rel="noopener noreferrer" class="${ssrRenderClass([
        "hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded transition-all",
        unref(store).isTerminal ? "border border-[var(--accent)] text-[var(--accent)] font-mono hover:bg-[var(--accent-subtle)] hover:shadow-[0_0_8px_var(--accent)]" : "bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)]"
      ])}"><svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8"></path></svg>`);
      if (unref(store).isTerminal) {
        _push(`<span>resume.pdf</span>`);
      } else {
        _push(`<span>Resume</span>`);
      }
      _push(`</a><button class="md:hidden p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)]">`);
      if (!mobileOpen.value) {
        _push(`<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`);
      } else {
        _push(`<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`);
      }
      _push(`</button></div></nav>`);
      if (mobileOpen.value) {
        _push(`<div class="md:hidden border-t border-[var(--border-color)] bg-[var(--bg-primary)] px-4 py-3 space-y-1"><!--[-->`);
        ssrRenderList(navLinks, (link) => {
          _push(`<a${ssrRenderAttr("href", link.href)} class="${ssrRenderClass([
            "block px-3 py-2 rounded-md text-sm font-medium transition-colors",
            unref(store).isTerminal ? "font-mono text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--bg-card)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]"
          ])}">${ssrInterpolate(link.label)}</a>`);
        });
        _push(`<!--]--><a${ssrRenderAttr("href", unref(personal).resumeUrl)} target="_blank" rel="noopener noreferrer" class="block px-3 py-2 text-sm font-semibold text-[var(--accent)]"> Resume ↗ </a></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/AppHeader.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __nuxt_component_0$2 = Object.assign(_sfc_main$d, { __name: "AppHeader" });
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "HeroSection",
  __ssrInlineRender: true,
  setup(__props) {
    const store = usePreferencesStore();
    const lines = [
      { text: "~/portfolio $ whoami", type: "command" },
      { text: "{", type: "bracket" },
      { text: '  name:       "Adeola Bada",', type: "prop", key: "name", val: '"Adeola Bada"' },
      { text: '  role:       "Senior Backend Engineer",', type: "prop", key: "role", val: '"Senior Backend Engineer"' },
      { text: '  stack:      ["PHP", "Laravel", "Node.js", "TypeScript"],', type: "prop", key: "stack", val: '["PHP", "Laravel", "Node.js", "TypeScript"]' },
      { text: '  experience: "5+ years",', type: "prop", key: "experience", val: '"5+ years"' },
      { text: '  location:   "Nigeria 🌍",', type: "prop", key: "location", val: '"Nigeria 🌍"' },
      { text: '  learning:   "Rust",', type: "prop", key: "learning", val: '"Rust"' },
      { text: "  available:  true", type: "prop", key: "available", val: "true" },
      { text: "}", type: "bracket" }
    ];
    const visibleLines = ref(0);
    const showCursor = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "hero",
        class: "min-h-screen flex items-center pt-14"
      }, _attrs))}><div class="max-w-6xl mx-auto px-4 sm:px-6 w-full py-16 md:py-24">`);
      if (unref(store).isTerminal) {
        _push(`<div class="flex flex-col lg:flex-row gap-12 items-start lg:items-center"><div class="flex-1 min-w-0"><div class="inline-flex items-center gap-2 px-3 py-1.5 border border-[var(--accent-green)] rounded text-xs font-mono text-[var(--accent-green)] mb-8"><span class="w-1.5 h-1.5 rounded-full bg-[var(--accent-green)] animate-pulse"></span> available for new opportunities </div><div class="terminal-window mb-8"><div class="terminal-titlebar"><div class="terminal-dot bg-[#ff5f56]"></div><div class="terminal-dot bg-[#ffbd2e]"></div><div class="terminal-dot bg-[#27c93f]"></div><span class="ml-2 text-xs text-[var(--text-muted)] font-mono">adeola@portfolio ~ zsh</span></div><div class="terminal-body"><!--[-->`);
        ssrRenderList(lines.slice(0, visibleLines.value), (line, i) => {
          _push(`<div class="leading-7">`);
          if (line.type === "command") {
            _push(`<span class="text-[var(--accent-green)]">${ssrInterpolate(line.text)}</span>`);
          } else if (line.type === "bracket") {
            _push(`<span class="text-[var(--text-secondary)]">${ssrInterpolate(line.text)}</span>`);
          } else {
            _push(`<span><span class="text-[var(--text-secondary)] pl-4"></span><span class="text-[var(--accent)]">${ssrInterpolate(line.key)}</span><span class="text-[var(--text-secondary)]">:</span><span class="text-[var(--text-muted)]"></span><span class="${ssrRenderClass([
              line.key === "available" ? "text-[var(--accent-green)]" : "text-orange-300"
            ])}">${ssrInterpolate(line.val)}</span>`);
            if (line.key !== "available") {
              _push(`<span class="text-[var(--text-secondary)]">,</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</span>`);
          }
          _push(`</div>`);
        });
        _push(`<!--]-->`);
        if (visibleLines.value < lines.length) {
          _push(`<span class="${ssrRenderClass(["inline-block w-2 h-4 bg-[var(--accent)] align-middle", showCursor.value ? "opacity-100" : "opacity-0"])}"></span>`);
        } else {
          _push(`<!---->`);
        }
        if (visibleLines.value >= lines.length) {
          _push(`<div class="mt-2"><span class="text-[var(--accent-green)]">$ </span><span class="${ssrRenderClass(["inline-block w-2 h-4 bg-[var(--accent)] align-middle", showCursor.value ? "opacity-100" : "opacity-0"])}"></span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="flex flex-wrap gap-3 mb-8"><a${ssrRenderAttr("href", unref(personal).resumeUrl)} target="_blank" rel="noopener noreferrer" class="terminal-btn"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8"></path></svg> $ cat resume.pdf </a><a href="#contact" class="terminal-btn"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> $ ./contact.sh </a></div><div class="flex flex-wrap gap-4"><!--[-->`);
        ssrRenderList(unref(personal).stats, (stat) => {
          _push(`<div class="flex items-center gap-2"><span class="text-[var(--accent)] font-mono font-bold text-sm">${ssrInterpolate(stat.value)}</span><span class="text-[var(--text-muted)] font-mono text-xs">${ssrInterpolate(stat.label)}</span><span class="text-[var(--border-color)] font-mono">|</span></div>`);
        });
        _push(`<!--]--></div></div><div class="hidden lg:flex flex-col items-center gap-4"><div class="w-px h-16 bg-[var(--border-color)]"></div><!--[-->`);
        ssrRenderList(unref(personal).socials, (social) => {
          _push(`<a${ssrRenderAttr("href", social.url)} target="_blank" rel="noopener noreferrer" class="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"${ssrRenderAttr("title", social.name)}>`);
          if (social.icon === "github") {
            _push(`<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"></path></svg>`);
          } else if (social.icon === "linkedin") {
            _push(`<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>`);
          } else if (social.icon === "twitter") {
            _push(`<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.736-8.846L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</a>`);
        });
        _push(`<!--]--><div class="w-px h-16 bg-[var(--border-color)]"></div></div></div>`);
      } else {
        _push(`<div class="grid lg:grid-cols-2 gap-12 items-center"><div class="order-2 lg:order-1"><div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--accent-subtle)] text-[var(--accent)] text-xs font-semibold mb-6"><span class="w-1.5 h-1.5 rounded-full bg-[var(--accent-green)] animate-pulse"></span> Available for new opportunities </div><h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-[var(--text-primary)] leading-tight mb-4" style="${ssrRenderStyle({ "font-family": "'Space Grotesk', sans-serif" })}"> Adeola<br><span class="text-[var(--accent)]">Bada</span></h1><p class="text-xl font-semibold text-[var(--text-secondary)] mb-4" style="${ssrRenderStyle({ "font-family": "'Space Grotesk', sans-serif" })}"> Senior Backend Engineer </p><p class="text-base text-[var(--text-secondary)] leading-relaxed mb-8 max-w-lg"> Building the backend infrastructure that powers products at scale — APIs, distributed systems, and the code behind the curtain. </p><div class="flex flex-wrap gap-3 mb-10"><a${ssrRenderAttr("href", unref(personal).resumeUrl)} target="_blank" rel="noopener noreferrer" class="btn-primary"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8"></path></svg> View Resume </a><a href="#contact" class="btn-outline"> Get in Touch <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a></div><div class="flex flex-wrap gap-6 pt-6 border-t border-[var(--border-color)]"><!--[-->`);
        ssrRenderList(unref(personal).stats, (stat) => {
          _push(`<div class="text-center"><div class="text-2xl font-bold text-[var(--text-primary)]" style="${ssrRenderStyle({ "font-family": "'Space Grotesk', sans-serif" })}">${ssrInterpolate(stat.value)}</div><div class="text-xs text-[var(--text-muted)] mt-0.5">${ssrInterpolate(stat.label)}</div></div>`);
        });
        _push(`<!--]--></div></div><div class="order-1 lg:order-2 flex justify-center lg:justify-end"><div class="relative"><div class="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border-2 border-[var(--border-color)] shadow-xl"><img${ssrRenderAttr("src", unref(personal).photo)} alt="Adeola Bada" class="w-full h-full object-cover"></div><div class="absolute -bottom-3 -right-3 w-64 sm:w-80 h-64 sm:h-80 rounded-2xl border-2 border-[var(--accent)] opacity-30 -z-10"></div><div class="absolute -top-3 -left-3 w-16 h-16 rounded-xl bg-[var(--accent-subtle)] -z-10"></div><div class="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-full px-4 py-2 shadow-lg"><!--[-->`);
        ssrRenderList(unref(personal).socials, (social) => {
          _push(`<a${ssrRenderAttr("href", social.url)} target="_blank" rel="noopener noreferrer" class="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors">`);
          if (social.icon === "github") {
            _push(`<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"></path></svg>`);
          } else if (social.icon === "linkedin") {
            _push(`<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>`);
          } else if (social.icon === "twitter") {
            _push(`<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.736-8.846L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</a>`);
        });
        _push(`<!--]--></div></div></div></div>`);
      }
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/HeroSection.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_1$2 = Object.assign(_sfc_main$c, { __name: "HeroSection" });
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "SectionHeading",
  __ssrInlineRender: true,
  props: {
    title: {},
    subtitle: {},
    align: {}
  },
  setup(__props) {
    const store = usePreferencesStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["mb-12 md:mb-16", __props.align === "center" ? "text-center" : "text-left"]
      }, _attrs))}>`);
      if (unref(store).isTerminal) {
        _push(`<div class="space-y-2"><div class="${ssrRenderClass([__props.align === "center" ? "justify-center" : "", "flex items-center gap-2"])}"><span class="text-[var(--accent-green)] font-mono text-sm">##</span><h2 class="text-2xl md:text-3xl font-bold font-mono text-[var(--text-primary)]">${ssrInterpolate(__props.title)}</h2></div>`);
        if (__props.subtitle) {
          _push(`<p class="text-[var(--text-secondary)] font-mono text-sm"><span class="text-[var(--text-muted)]">// </span>${ssrInterpolate(__props.subtitle)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="${ssrRenderClass([__props.align === "center" ? "mx-auto" : "", "w-12 h-px bg-[var(--accent)]"])}"></div></div>`);
      } else {
        _push(`<div class="space-y-3"><h2 class="text-3xl md:text-4xl font-bold text-[var(--text-primary)]" style="${ssrRenderStyle({ "font-family": "'Space Grotesk', sans-serif" })}">${ssrInterpolate(__props.title)}</h2>`);
        if (__props.subtitle) {
          _push(`<p class="${ssrRenderClass([__props.align === "center" ? "mx-auto" : "", "text-[var(--text-secondary)] text-base md:text-lg max-w-2xl"])}">${ssrInterpolate(__props.subtitle)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="${ssrRenderClass([__props.align === "center" ? "justify-center" : "", "flex items-center gap-2"])}"><div class="w-8 h-1 rounded-full bg-[var(--accent)]"></div><div class="w-2 h-1 rounded-full bg-[var(--accent-subtle)]"></div></div></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/SectionHeading.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_0$1 = Object.assign(_sfc_main$b, { __name: "SectionHeading" });
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "AboutSection",
  __ssrInlineRender: true,
  setup(__props) {
    const store = usePreferencesStore();
    const facts = [
      { icon: "🎓", label: "Background", value: "BEng Civil Engineering → Software" },
      { icon: "📍", label: "Location", value: "Nigeria" },
      { icon: "🦀", label: "Learning", value: "Rust + MSc in Information Technology" },
      { icon: "🎮", label: "Outside work", value: "Gaming, nature & family" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionHeading = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "about",
        class: "py-20 md:py-28 bg-[var(--bg-secondary)]"
      }, _attrs))}><div class="max-w-6xl mx-auto px-4 sm:px-6">`);
      _push(ssrRenderComponent(_component_SectionHeading, {
        title: "About Me",
        subtitle: "The engineer behind the code"
      }, null, _parent));
      _push(`<div class="grid lg:grid-cols-2 gap-12 items-start"><div class="space-y-4">`);
      if (unref(store).isTerminal) {
        _push(`<div class="terminal-window"><div class="terminal-titlebar"><div class="terminal-dot bg-[#ff5f56]"></div><div class="terminal-dot bg-[#ffbd2e]"></div><div class="terminal-dot bg-[#27c93f]"></div><span class="ml-2 text-xs text-[var(--text-muted)] font-mono">about.md</span></div><div class="terminal-body space-y-4"><!--[-->`);
        ssrRenderList(unref(personal).bio.split("\n\n"), (para, i) => {
          _push(`<p class="text-[var(--text-secondary)] text-sm leading-relaxed">${ssrInterpolate(para.trim())}</p>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!--[-->`);
        ssrRenderList(unref(personal).bio.split("\n\n"), (para, i) => {
          _push(`<p class="text-[var(--text-secondary)] text-base leading-relaxed">${ssrInterpolate(para.trim())}</p>`);
        });
        _push(`<!--]-->`);
      }
      _push(`<div class="pt-4"><a${ssrRenderAttr("href", unref(personal).resumeUrl)} target="_blank" rel="noopener noreferrer" class="${ssrRenderClass(unref(store).isTerminal ? "terminal-btn" : "btn-primary")}"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8"></path></svg> ${ssrInterpolate(unref(store).isTerminal ? "$ open resume.pdf" : "Download Resume")}</a></div></div><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><!--[-->`);
      ssrRenderList(facts, (fact) => {
        _push(`<div class="${ssrRenderClass([
          "p-5 rounded-lg border transition-colors",
          unref(store).isTerminal ? "border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[var(--accent)]" : "border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[var(--accent)] shadow-sm"
        ])}"><div class="text-2xl mb-2">${ssrInterpolate(fact.icon)}</div><div class="${ssrRenderClass(["text-xs font-semibold uppercase tracking-wider mb-1", unref(store).isTerminal ? "text-[var(--text-muted)] font-mono" : "text-[var(--text-muted)]"])}">${ssrInterpolate(fact.label)}</div><div class="${ssrRenderClass(["text-sm font-medium text-[var(--text-primary)]", unref(store).isTerminal ? "font-mono" : ""])}">${ssrInterpolate(fact.value)}</div></div>`);
      });
      _push(`<!--]-->`);
      if (unref(store).isTerminal) {
        _push(`<div class="sm:col-span-2 border border-[var(--border-color)] rounded-lg overflow-hidden"><img${ssrRenderAttr("src", unref(personal).photo)} alt="Adeola Bada" class="w-full h-48 object-cover object-top"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></section>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/AboutSection.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$a, { __name: "AboutSection" });
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "TechBadge",
  __ssrInlineRender: true,
  props: {
    name: {},
    icon: {},
    level: {}
  },
  setup(__props) {
    const store = usePreferencesStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({
        class: [
          "inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium transition-all",
          unref(store).isTerminal ? "border border-[var(--border-color)] text-[var(--accent)] bg-[var(--bg-card)] font-mono rounded hover:border-[var(--accent)] hover:bg-[var(--accent-subtle)]" : "rounded-full bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border-color)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
        ]
      }, _attrs))}>`);
      if (__props.icon) {
        _push(`<img${ssrRenderAttr("src", __props.icon)}${ssrRenderAttr("alt", __props.name)} class="w-3.5 h-3.5 object-contain">`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span>${ssrInterpolate(unref(store).isTerminal ? __props.name : __props.name)}</span></span>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/TechBadge.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$9, { __name: "TechBadge" });
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "TimelineItem",
  __ssrInlineRender: true,
  props: {
    experience: {},
    isLast: { type: Boolean }
  },
  setup(__props) {
    const store = usePreferencesStore();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_TechBadge = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex gap-6 md:gap-8" }, _attrs))}><div class="flex flex-col items-center shrink-0"><div class="${ssrRenderClass([
        "w-3 h-3 rounded-full mt-1.5 shrink-0 z-10",
        __props.experience.current ? "bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]" : "bg-[var(--border-color)] border-2 border-[var(--bg-secondary)]"
      ])}"></div>`);
      if (!__props.isLast) {
        _push(`<div class="w-px flex-1 mt-1 bg-[var(--border-color)] min-h-[2rem]"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="pb-10 flex-1 min-w-0">`);
      if (unref(store).isTerminal) {
        _push(`<div class="${ssrRenderClass([
          "border rounded-lg p-5 transition-colors",
          __props.experience.current ? "border-[var(--accent)] bg-[var(--bg-card)]" : "border-[var(--border-color)] bg-[var(--bg-card)]"
        ])}"><div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3"><div><h3 class="font-mono font-bold text-[var(--text-primary)] text-sm"><span class="text-[var(--accent-green)]">${ssrInterpolate(__props.experience.role)}</span></h3><p class="text-[var(--accent)] font-mono text-xs mt-0.5">@ ${ssrInterpolate(__props.experience.company)}</p></div><div class="text-right shrink-0"><span class="text-[var(--text-muted)] font-mono text-xs block">${ssrInterpolate(__props.experience.period)}</span><span class="text-[var(--text-muted)] font-mono text-xs">${ssrInterpolate(__props.experience.location)}</span></div></div>`);
        if ((_a = __props.experience.metrics) == null ? void 0 : _a.length) {
          _push(`<div class="flex flex-wrap gap-2 mb-3"><!--[-->`);
          ssrRenderList(__props.experience.metrics, (metric) => {
            _push(`<div class="flex items-center gap-1.5 px-2.5 py-1 bg-[var(--accent-subtle)] border border-[var(--accent)] rounded text-xs font-mono"><span class="text-[var(--accent)] font-bold">${ssrInterpolate(metric.value)}</span><span class="text-[var(--text-secondary)]">${ssrInterpolate(metric.label)}</span></div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<ul class="space-y-1.5"><!--[-->`);
        ssrRenderList(__props.experience.highlights, (item, i) => {
          _push(`<li class="flex gap-2 text-xs font-mono text-[var(--text-secondary)] leading-relaxed"><span class="text-[var(--accent-green)] shrink-0 mt-0.5">›</span><span>${ssrInterpolate(item)}</span></li>`);
        });
        _push(`<!--]--></ul><div class="flex flex-wrap gap-1.5 mt-4 items-center justify-between"><div class="flex flex-wrap gap-1.5"><!--[-->`);
        ssrRenderList(__props.experience.stack, (tech) => {
          _push(ssrRenderComponent(_component_TechBadge, {
            key: tech,
            name: tech
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
        if (__props.experience.website) {
          _push(`<a${ssrRenderAttr("href", __props.experience.website)} target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 text-[10px] font-mono text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors shrink-0"><svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"></path></svg> visit site </a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<div class="pb-2"><div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3"><div><h3 class="font-bold text-[var(--text-primary)] text-base" style="${ssrRenderStyle({ "font-family": "'Space Grotesk', sans-serif" })}">${ssrInterpolate(__props.experience.role)}</h3><p class="text-[var(--accent)] font-semibold text-sm mt-0.5">${ssrInterpolate(__props.experience.company)}</p><p class="text-[var(--text-muted)] text-xs mt-0.5">${ssrInterpolate(__props.experience.location)}</p></div><span class="${ssrRenderClass([
          "text-xs font-medium px-2.5 py-1 rounded-full shrink-0 mt-0.5",
          __props.experience.current ? "bg-[var(--accent-subtle)] text-[var(--accent)]" : "bg-[var(--bg-secondary)] text-[var(--text-muted)]"
        ])}">${ssrInterpolate(__props.experience.period)}</span></div>`);
        if ((_b = __props.experience.metrics) == null ? void 0 : _b.length) {
          _push(`<div class="flex flex-wrap gap-2 mb-4"><!--[-->`);
          ssrRenderList(__props.experience.metrics, (metric) => {
            _push(`<div class="flex items-center gap-1.5 px-3 py-1.5 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg"><span class="text-[var(--accent)] font-bold text-sm">${ssrInterpolate(metric.value)}</span><span class="text-[var(--text-secondary)] text-xs">${ssrInterpolate(metric.label)}</span></div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<ul class="space-y-2 mb-4"><!--[-->`);
        ssrRenderList(__props.experience.highlights, (item, i) => {
          _push(`<li class="flex gap-2.5 text-sm text-[var(--text-secondary)] leading-relaxed"><span class="text-[var(--accent)] shrink-0 mt-1 text-xs">●</span><span>${ssrInterpolate(item)}</span></li>`);
        });
        _push(`<!--]--></ul><div class="flex flex-wrap gap-1.5 items-center justify-between"><div class="flex flex-wrap gap-1.5"><!--[-->`);
        ssrRenderList(__props.experience.stack, (tech) => {
          _push(ssrRenderComponent(_component_TechBadge, {
            key: tech,
            name: tech
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
        if (__props.experience.website) {
          _push(`<a${ssrRenderAttr("href", __props.experience.website)} target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 text-xs text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors shrink-0"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"></path></svg> Visit site </a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/TimelineItem.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_1$1 = Object.assign(_sfc_main$8, { __name: "TimelineItem" });
const experiences = [
  {
    id: 1,
    company: "Kouture Konect LLC",
    role: "Senior Backend Engineer",
    period: "Dec 2024 – Present",
    location: "Remote, USA",
    current: true,
    highlights: [
      "Migrated legacy codebase from Laravel 8 to Laravel 11, implementing modern features and ensuring full compatibility.",
      "Designed and maintained scalable, secure server-side applications and REST APIs supporting web and mobile platforms.",
      "Built and optimized relational MySQL databases ensuring data integrity and high query performance.",
      "Collaborated with frontend and mobile teams for seamless platform integration.",
      "Implemented secure coding practices to protect sensitive data and ensure compliance."
    ],
    stack: ["PHP", "Laravel", "Node.js", "TypeScript", "MySQL", "REST APIs"],
    website: "https://www.kouturekonect.com"
  },
  {
    id: 7,
    company: "NxtEvent",
    role: "Backend Engineer & Team Lead (Contract)",
    period: "May 2025 – Present",
    location: "Remote",
    current: true,
    highlights: [
      "Leading backend development and engineering team for NxtEvent, a modern event technology platform.",
      "Overseeing system architecture, API development, and deployment operations.",
      "Managing team workflows, prioritising features, and ensuring timely delivery of platform milestones."
    ],
    stack: ["Node.js", "TypeScript", "REST APIs", "PostgreSQL", "Docker"],
    website: "https://www.thenxtevnt.com"
  },
  {
    id: 2,
    company: "Weeshr App Ltd",
    role: "Senior Backend Developer",
    period: "Sep 2023 – Oct 2025",
    location: "Remote, Lagos",
    current: false,
    highlights: [
      "Designed and implemented a Modular Monolithic Architecture, optimising system performance and scalability.",
      "Led development of critical features: user wallets, payments, payouts, and delivery systems.",
      "Managed user notifications system, driving a 25% increase in user engagement.",
      "Implemented robust security measures in payment systems, reducing fraud incidents by 30%.",
      "Streamlined payout processes for users and partners, decreasing processing time by 40%.",
      "Mentored junior developers and fostered a collaborative, high-performance team environment."
    ],
    stack: ["Node.js", "TypeScript", "Redis", "Socket.IO", "Ably", "Supabase", "MongoDB", "Docker", "Paystack", "Cloudinary", "Digital Ocean"],
    website: "https://weeshr.com",
    metrics: [
      { value: "+25%", label: "User Engagement" },
      { value: "-30%", label: "Fraud Incidents" },
      { value: "-40%", label: "Payout Processing Time" }
    ]
  },
  {
    id: 3,
    company: "Silky Systems",
    role: "Software Developer → Team Lead",
    period: "Jul 2021 – Present",
    location: "Riyadh, Saudi Arabia",
    current: true,
    highlights: [
      "Promoted to Team Lead, overseeing a team of developers and ensuring project milestones are met on schedule.",
      "Redesigned and implemented new UI for iPOS Version 2, enhancing usability for end-users.",
      "Directed development of a comprehensive admin panel (iPortal) with authentication, authorization, and multi-language support.",
      "Spearheaded creation of a Warehouse Fulfilment Management System (Logistics) to streamline order tracking.",
      "Designed a Token System for the CRM platform, improving product identification and user tracking.",
      "Developed a custom reporting system and integrated a payment gateway."
    ],
    stack: ["PHP", "Laravel", "Vue.js", "JavaScript", "MySQL", "REST APIs"]
  },
  {
    id: 4,
    company: "DueDash Capital Networks",
    role: "Product Development & Testing Intern",
    period: "May 2021 – Jul 2021",
    location: "Cologne, Germany",
    current: false,
    highlights: [
      "Conducted 20+ comprehensive End-to-End (E2E) tests, identifying bugs that improved user flow.",
      "Authored 8+ FAQs for the company website, significantly reducing customer support queries."
    ],
    stack: ["E2E Testing", "QA", "Documentation"]
  },
  {
    id: 5,
    company: "Freelance",
    role: "Web Developer",
    period: "Mar 2020 – Jan 2021",
    location: "Ondo, Nigeria",
    current: false,
    highlights: [
      "Developed and launched a modern website for a construction company, improving visibility and UX.",
      "Designed a stateless user authentication flow and built a functional e-commerce prototype."
    ],
    stack: ["Vue.js", "Firebase", "PHP", "JavaScript"]
  },
  {
    id: 6,
    company: "Longbridge Technologies Ltd",
    role: "Software Development Graduate Intern",
    period: "Oct 2019 – Feb 2020",
    location: "Ondo, Nigeria",
    current: false,
    highlights: [
      "Conducted 200+ E2E tests, improving system reliability and user experience.",
      "Assisted in developing UML diagrams and a prototype KYC banking application."
    ],
    stack: ["PHP", "SQL", "UML", "Testing"]
  }
];
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "ExperienceSection",
  __ssrInlineRender: true,
  setup(__props) {
    usePreferencesStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionHeading = __nuxt_component_0$1;
      const _component_TimelineItem = __nuxt_component_1$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "experience",
        class: "py-20 md:py-28"
      }, _attrs))}><div class="max-w-6xl mx-auto px-4 sm:px-6">`);
      _push(ssrRenderComponent(_component_SectionHeading, {
        title: "Experience",
        subtitle: "5+ years across 3 continents, from intern to team lead"
      }, null, _parent));
      _push(`<div class="relative"><!--[-->`);
      ssrRenderList(unref(experiences), (exp, index) => {
        _push(ssrRenderComponent(_component_TimelineItem, {
          key: exp.id,
          experience: exp,
          isLast: index === unref(experiences).length - 1
        }, null, _parent));
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/ExperienceSection.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$7, { __name: "ExperienceSection" });
const speakingEngagements = [
  {
    id: 1,
    event: "Career Pathways & Global Opportunities in IT",
    organisation: "Reconciliation House Youth Church",
    role: "Guest Speaker",
    topic: "Career Pathways & Global Opportunities in Information Technology",
    date: "27 July 2025",
    location: "Akure, Ondo State, Nigeria",
    format: "Live-streamed (YouTube Live)",
    recordingUrl: "https://www.youtube.com/live/Gtrg7suZQJI",
    description: "Addressed a youth audience on navigating career pathways in the IT industry and accessing global professional opportunities — drawing from personal experience working across Nigeria, Saudi Arabia, Germany, and the United States."
  }
];
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "SpeakingSection",
  __ssrInlineRender: true,
  setup(__props) {
    const store = usePreferencesStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionHeading = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "speaking",
        class: "py-20 md:py-28"
      }, _attrs))}><div class="max-w-6xl mx-auto px-4 sm:px-6">`);
      _push(ssrRenderComponent(_component_SectionHeading, {
        title: "Speaking",
        subtitle: "Public talks, panels & community engagements"
      }, null, _parent));
      _push(`<div class="space-y-6"><!--[-->`);
      ssrRenderList(unref(speakingEngagements), (talk) => {
        _push(`<div class="${ssrRenderClass([
          "rounded-lg border p-6 transition-all",
          unref(store).isTerminal ? "border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[var(--accent)]" : "border-[var(--border-color)] bg-[var(--bg-card)] shadow-sm hover:shadow-md hover:border-[var(--accent)]"
        ])}"><div class="flex flex-col sm:flex-row gap-4 sm:items-start sm:justify-between mb-4"><div class="flex-1">`);
        if (unref(store).isTerminal) {
          _push(`<!--[--><div class="flex items-center gap-2 mb-1"><span class="text-[var(--accent-green)] font-mono text-xs">▶</span><h3 class="font-mono font-bold text-[var(--text-primary)] text-sm">${ssrInterpolate(talk.topic)}</h3></div><p class="font-mono text-[var(--accent)] text-xs">${ssrInterpolate(talk.organisation)}</p><p class="font-mono text-[var(--text-muted)] text-xs mt-0.5">${ssrInterpolate(talk.role)} · ${ssrInterpolate(talk.date)} · ${ssrInterpolate(talk.location)}</p><!--]-->`);
        } else {
          _push(`<!--[--><h3 class="font-bold text-[var(--text-primary)] text-base mb-1" style="${ssrRenderStyle({ "font-family": "'Space Grotesk', sans-serif" })}">${ssrInterpolate(talk.topic)}</h3><p class="text-[var(--accent)] font-semibold text-sm">${ssrInterpolate(talk.organisation)}</p><p class="text-[var(--text-muted)] text-xs mt-0.5">${ssrInterpolate(talk.role)} · ${ssrInterpolate(talk.date)} · ${ssrInterpolate(talk.location)}</p><!--]-->`);
        }
        _push(`</div><div class="flex flex-col sm:items-end gap-2 shrink-0"><span class="${ssrRenderClass([
          "text-[10px] font-semibold px-2.5 py-1 rounded-full w-fit",
          unref(store).isTerminal ? "font-mono border border-[var(--accent)] text-[var(--accent)]" : "bg-[var(--accent-subtle)] text-[var(--accent)]"
        ])}">${ssrInterpolate(talk.format)}</span>`);
        if (talk.recordingUrl) {
          _push(`<a${ssrRenderAttr("href", talk.recordingUrl)} target="_blank" rel="noopener noreferrer" class="${ssrRenderClass([
            "flex items-center gap-1.5 text-xs font-semibold transition-colors",
            unref(store).isTerminal ? "font-mono text-[var(--accent-green)] hover:underline" : "text-red-500 hover:text-red-600"
          ])}"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg>`);
          if (unref(store).isTerminal) {
            _push(`<span>$ watch_recording</span>`);
          } else {
            _push(`<span>Watch Recording</span>`);
          }
          _push(`</a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><p class="${ssrRenderClass(["leading-relaxed", unref(store).isTerminal ? "font-mono text-xs text-[var(--text-secondary)]" : "text-sm text-[var(--text-secondary)]"])}">`);
        if (unref(store).isTerminal) {
          _push(`<span class="text-[var(--text-muted)]">// </span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`${ssrInterpolate(talk.description)}</p></div>`);
      });
      _push(`<!--]--></div><p class="${ssrRenderClass(["mt-6 text-xs", unref(store).isTerminal ? "font-mono text-[var(--text-muted)]" : "text-[var(--text-muted)]"])}">`);
      if (unref(store).isTerminal) {
        _push(`<span>// Additional speaking engagements — stay tuned.</span>`);
      } else {
        _push(`<span>More speaking engagements coming soon.</span>`);
      }
      _push(`</p></div></section>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/SpeakingSection.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main$6, { __name: "SpeakingSection" });
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ProjectCard",
  __ssrInlineRender: true,
  props: {
    project: {}
  },
  setup(__props) {
    const store = usePreferencesStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TechBadge = __nuxt_component_0;
      if (unref(store).isTerminal) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "group flex flex-col border border-[var(--border-color)] bg-[var(--bg-card)] rounded-lg overflow-hidden transition-all duration-200 hover:border-[var(--accent)] hover:shadow-[0_0_16px_rgba(88,166,255,0.1)]" }, _attrs))}><div class="relative overflow-hidden h-44"><img${ssrRenderAttr("src", __props.project.image)}${ssrRenderAttr("alt", __props.project.title)} class="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-300" loading="lazy"><div class="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] to-transparent"></div></div><div class="p-5 flex flex-col flex-1 gap-3"><div class="flex items-start justify-between gap-2"><h3 class="font-mono font-bold text-[var(--text-primary)] text-sm"><span class="text-[var(--accent-green)]">~/projects/</span>${ssrInterpolate(__props.project.title.toLowerCase().replace(/\s+/g, "-"))}</h3><div class="flex items-center gap-1.5 shrink-0">`);
        if (__props.project.wip) {
          _push(`<span class="text-[10px] px-2 py-0.5 border border-[var(--accent-green)] text-[var(--accent-green)] font-mono rounded animate-pulse">wip</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span class="text-[10px] px-2 py-0.5 border border-[var(--border-color)] text-[var(--text-muted)] font-mono rounded">${ssrInterpolate(__props.project.category)}</span></div></div>`);
        if (__props.project.company) {
          _push(`<p class="text-[10px] font-mono text-[var(--accent)] -mt-1">@ ${ssrInterpolate(__props.project.company)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<p class="text-[var(--text-secondary)] text-xs font-mono leading-relaxed line-clamp-3 flex-1">${ssrInterpolate(__props.project.description)}</p><div class="flex flex-wrap gap-1.5"><!--[-->`);
        ssrRenderList(__props.project.stack.slice(0, 5), (tech) => {
          _push(ssrRenderComponent(_component_TechBadge, {
            key: tech,
            name: tech
          }, null, _parent));
        });
        _push(`<!--]-->`);
        if (__props.project.stack.length > 5) {
          _push(`<span class="text-[var(--text-muted)] text-xs font-mono"> +${ssrInterpolate(__props.project.stack.length - 5)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="flex items-center gap-3 pt-1">`);
        if (__props.project.github) {
          _push(`<a${ssrRenderAttr("href", __props.project.github)} target="_blank" rel="noopener noreferrer" class="flex items-center gap-1.5 text-xs font-mono text-[var(--accent)] hover:underline"><svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"></path></svg> source </a>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.project.demo) {
          _push(`<a${ssrRenderAttr("href", __props.project.demo)} target="_blank" rel="noopener noreferrer" class="flex items-center gap-1.5 text-xs font-mono text-[var(--accent-green)] hover:underline"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"></path></svg> live demo </a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "group flex flex-col bg-[var(--bg-card)] rounded-xl overflow-hidden border border-[var(--border-color)] hover:border-[var(--accent)] shadow-[var(--card-shadow,0_1px_3px_rgba(0,0,0,0.08))] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1" }, _attrs))}><div class="relative overflow-hidden h-44"><img${ssrRenderAttr("src", __props.project.image)}${ssrRenderAttr("alt", __props.project.title)} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy"><div class="absolute top-3 right-3 flex gap-1.5">`);
        if (__props.project.wip) {
          _push(`<span class="text-[10px] px-2.5 py-1 bg-[var(--accent-green)] text-white rounded-full font-semibold animate-pulse">WIP</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span class="text-[10px] px-2.5 py-1 bg-[var(--accent)] text-white rounded-full font-semibold capitalize">${ssrInterpolate(__props.project.category)}</span></div></div><div class="p-5 flex flex-col flex-1 gap-3"><div><h3 class="font-bold text-[var(--text-primary)] text-base" style="${ssrRenderStyle({ "font-family": "'Space Grotesk', sans-serif" })}">${ssrInterpolate(__props.project.title)}</h3>`);
        if (__props.project.company) {
          _push(`<p class="text-xs text-[var(--accent)] mt-0.5">${ssrInterpolate(__props.project.company)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><p class="text-[var(--text-secondary)] text-sm leading-relaxed line-clamp-3 flex-1">${ssrInterpolate(__props.project.description)}</p><div class="flex flex-wrap gap-1.5"><!--[-->`);
        ssrRenderList(__props.project.stack.slice(0, 5), (tech) => {
          _push(ssrRenderComponent(_component_TechBadge, {
            key: tech,
            name: tech
          }, null, _parent));
        });
        _push(`<!--]-->`);
        if (__props.project.stack.length > 5) {
          _push(`<span class="text-[var(--text-muted)] text-xs"> +${ssrInterpolate(__props.project.stack.length - 5)} more </span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="flex items-center gap-4 pt-1 border-t border-[var(--border-color)]">`);
        if (__props.project.github) {
          _push(`<a${ssrRenderAttr("href", __props.project.github)} target="_blank" rel="noopener noreferrer" class="flex items-center gap-1.5 text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"><svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"></path></svg> GitHub </a>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.project.demo) {
          _push(`<a${ssrRenderAttr("href", __props.project.demo)} target="_blank" rel="noopener noreferrer" class="flex items-center gap-1.5 text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"></path></svg> Live Demo </a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
      }
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/ProjectCard.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$5, { __name: "ProjectCard" });
const thumb = (url) => `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`;
const projects = [
  // ─── FEATURED — MOST RECENT PRODUCTION ────────────────────────────────────
  {
    id: 15,
    title: "NxtEvent Platform",
    description: "Modern event technology platform that unites planners, clients, vendors, and guests in one shared space. Leading backend architecture, API development, and team operations as contract Team Lead.",
    stack: ["Node.js", "TypeScript", "PostgreSQL", "REST APIs", "Docker"],
    image: thumb("https://www.thenxtevnt.com/"),
    demo: "https://www.thenxtevnt.com/",
    featured: true,
    category: "production",
    company: "NxtEvent",
    highlights: [
      "Led full backend architecture from ground up",
      "Overseeing API design, deployment & team workflows"
    ]
  },
  {
    id: 16,
    title: "Kouture Konect",
    description: "Global fashion tech platform facilitating custom design connections. Migrated the backend from Laravel 8 to Laravel 11 and maintain the production API infrastructure supporting web and mobile clients.",
    stack: ["PHP", "Laravel", "Node.js", "TypeScript", "MySQL", "REST APIs"],
    image: thumb("https://www.kouturekonect.com/"),
    demo: "https://www.kouturekonect.com/",
    featured: true,
    category: "production",
    company: "Kouture Konect LLC",
    highlights: [
      "Full Laravel 8 → 11 migration",
      "Scalable REST API supporting web & mobile"
    ]
  },
  {
    id: 18,
    title: "Weeshr",
    description: "Gifting marketplace platform allowing users to gift themselves or surprise loved ones. Led backend as Senior Developer: built wallet system, payments, payouts, and realtime notification infrastructure.",
    stack: ["Node.js", "TypeScript", "Redis", "MongoDB", "Socket.IO", "Paystack", "Supabase", "Docker"],
    image: "https://res.cloudinary.com/drykej1am/image/upload/v1757702126/weeshr-marketplace/Desktop_-_19_jcvfpg.png",
    demo: "https://weeshr.com/",
    featured: true,
    category: "production",
    company: "Weeshr App Ltd",
    highlights: [
      "+25% user engagement via notification system",
      "-30% fraud incidents in payment system",
      "-40% payout processing time"
    ]
  },
  // ─── PRODUCTION (COMPANY PROJECTS) ───────────────────────────────────────
  {
    id: 11,
    title: "iPOS v2",
    description: "Point-of-sale system with a fully redesigned web interface. Rebuilt the UI from scratch to improve usability and modernise the end-user experience for retail operations.",
    stack: ["PHP", "Laravel", "Vue.js", "MySQL", "REST APIs"],
    image: thumb("https://ipos.silkysystems.com/"),
    demo: "https://ipos.silkysystems.com/",
    featured: false,
    category: "production",
    company: "Silky Systems"
  },
  {
    id: 12,
    title: "CRM — Silky Systems",
    description: "Customer relationship management platform with a custom Token System for product identification and user tracking. Includes reporting, analytics, and integrated payment gateway.",
    stack: ["PHP", "Laravel", "Vue.js", "MySQL", "REST APIs"],
    image: thumb("https://crm.silkysystems.com/"),
    demo: "https://crm.silkysystems.com/",
    featured: false,
    category: "production",
    company: "Silky Systems"
  },
  {
    id: 13,
    title: "Logistics / Warehouse FMS",
    description: "Warehouse Fulfilment Management System built to streamline order tracking and warehouse operations for Silky Systems clients.",
    stack: ["PHP", "Laravel", "Vue.js", "MySQL", "REST APIs"],
    image: thumb("https://logistics.silkysystems.com/"),
    demo: "https://logistics.silkysystems.com/",
    featured: false,
    category: "production",
    company: "Silky Systems"
  },
  {
    id: 14,
    title: "iPortal",
    description: "Admin and operations portal for Silky Systems. Features robust authentication, role-based authorization, multi-language support, and a comprehensive management dashboard.",
    stack: ["PHP", "Laravel", "Vue.js", "MySQL", "REST APIs"],
    image: thumb("https://iportal.silkysystems.com/"),
    demo: "https://iportal.silkysystems.com/",
    featured: false,
    category: "production",
    company: "Silky Systems"
  },
  // ─── WIP ─────────────────────────────────────────────────────────────────
  {
    id: 17,
    title: "Flowtali",
    description: "Invoice and letterhead generation tool currently in development. Streamlines professional document creation for freelancers and small businesses.",
    stack: ["Node.js", "TypeScript", "REST APIs"],
    image: "/images/projects/precis.png",
    featured: false,
    category: "backend",
    wip: true
  },
  // ─── OPEN SOURCE / PERSONAL ───────────────────────────────────────────────
  {
    id: 1,
    title: "Hulo",
    description: "Real estate marketplace PWA connecting verified house owners and realtors to prospective buyers. Features secure auth, realtime chats via Redis + Pusher, AWS S3 uploads, subscriptions, and listing recommendations.",
    stack: ["PWA", "Vue.js", "Nuxt.js", "Laravel", "PHP", "Redis", "Pusher", "AWS S3", "Node.js", "Express.js", "SQL"],
    image: "/images/projects/hulo.png",
    featured: false,
    category: "fullstack",
    highlights: [
      "Real-time chat infrastructure with Redis pub/sub and Pusher",
      "AWS S3 for scalable media storage",
      "Realtor verification and subscription system"
    ]
  },
  {
    id: 2,
    title: "Précis",
    description: "Custom PHP framework built from scratch — routing, MVC, migrations, Active Records, middlewares, events, and a DI container. Built to understand how Laravel and Symfony work under the hood.",
    stack: ["PHP", "Composer", "Pest", "Phinx"],
    image: "/images/projects/precis.png",
    github: "https://github.com/codeDeeAi/Precis",
    featured: false,
    category: "framework",
    highlights: [
      "Custom routing engine with middleware pipeline",
      "Active Record ORM with migration system",
      "Event-driven architecture and DI container"
    ]
  },
  {
    id: 3,
    title: "CBT Platform APIs",
    description: "Backend API system for Computer Based Assessments. Teachers create exams, register students, and grade results. Features auto + manual grading, instant results, and performance analytics.",
    stack: ["PHP", "Laravel", "REST APIs", "MySQL"],
    image: "/images/projects/cbt.png",
    github: "https://github.com/codeDeeAi/CBT_be_apis",
    featured: false,
    category: "backend",
    highlights: [
      "Auto and manual grading engine",
      "Instant result computation post-exam",
      "Student performance analytics"
    ]
  },
  {
    id: 4,
    title: "Thrift.io",
    description: "Application for organising rotating savings (AJO) among family and friends. Create thrift groups, manage members, auto-calculate due dates, and track finances.",
    stack: ["Vue.js", "Laravel", "PHP", "MySQL", "JavaScript"],
    image: "/images/projects/thrift.png",
    github: "https://github.com/codeDeeAi/thrift.io",
    featured: false,
    category: "fullstack"
  },
  {
    id: 5,
    title: "Wafi — Bank CLI",
    description: "PHP 8+ CLI application for bank transactions: creating accounts, depositing credits, and transferring between accounts. Clean OOP design, fully backwards compatible.",
    stack: ["PHP 8+", "Composer", "CLI", "OOP"],
    image: "/images/projects/wafi.png",
    github: "https://github.com/codeDeeAi/wafi",
    featured: false,
    category: "cli"
  },
  {
    id: 6,
    title: "Countries & States API",
    description: "RESTful API built with Node.js and Express.js exposing all countries and their states. Simple, powerful endpoints with fast response times.",
    stack: ["Node.js", "Express.js", "JavaScript", "REST APIs"],
    image: "/images/projects/countries-states.png",
    github: "https://github.com/codeDeeAi/countries_and_states_api",
    demo: "https://countries-and-states.onrender.com/api/v1",
    featured: false,
    category: "backend"
  },
  {
    id: 7,
    title: "Finance Tracker",
    description: "Personal finance tracker for daily income, expenses, and savings across multiple accounts. Visualises data through lists and charts.",
    stack: ["Vue.js", "Laravel", "PHP", "MySQL", "JavaScript"],
    image: "/images/projects/financelogger.png",
    github: "https://github.com/codeDeeAi/financeloggerclient",
    featured: false,
    category: "fullstack"
  },
  {
    id: 8,
    title: "Issue / Bug Tracker",
    description: "Issue and bug tracker for QA teams. Manage teams, assign tasks, record defects, and export reports to Excel.",
    stack: ["Vue.js", "Laravel", "PHP", "MySQL", "JavaScript"],
    image: "/images/projects/bugtracker.png",
    github: "https://github.com/codeDeeAi/issue_tracker.git",
    featured: false,
    category: "fullstack"
  },
  {
    id: 9,
    title: "LaraBlog",
    description: "Full-featured blog platform with role-based admin panel, fully customisable by the administrator with user roles and permissions.",
    stack: ["Laravel 7", "Vue.js", "PHP", "MySQL"],
    image: "/images/projects/larablog.png",
    github: "https://github.com/codeDeeAi/Larablog.git",
    featured: false,
    category: "fullstack"
  },
  {
    id: 10,
    title: "Hulo Admin Dashboard",
    description: "Administrator portal for the Hulo platform with realtime notifications, role-based access, app customisation, email management, and listing controls.",
    stack: ["Vue.js", "TypeScript", "JavaScript", "AWS S3", "Pusher", "REST APIs"],
    image: "/images/projects/hulo-admin.png",
    featured: false,
    category: "fullstack"
  }
];
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ProjectsSection",
  __ssrInlineRender: true,
  setup(__props) {
    const store = usePreferencesStore();
    const categories = ["all", "production", "backend", "fullstack", "framework", "cli"];
    const activeFilter = ref("all");
    const featured = computed(() => projects.filter((p) => p.featured));
    const filtered = computed(
      () => activeFilter.value === "all" ? projects : projects.filter((p) => p.category === activeFilter.value)
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionHeading = __nuxt_component_0$1;
      const _component_ProjectCard = __nuxt_component_1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "projects",
        class: "py-20 md:py-28 bg-[var(--bg-secondary)]"
      }, _attrs))}><div class="max-w-6xl mx-auto px-4 sm:px-6">`);
      _push(ssrRenderComponent(_component_SectionHeading, {
        title: "Projects",
        subtitle: "Open-source, side projects & production systems"
      }, null, _parent));
      _push(`<div class="mb-16"><p class="${ssrRenderClass(["text-xs font-semibold uppercase tracking-widest mb-6", unref(store).isTerminal ? "font-mono text-[var(--accent-green)]" : "text-[var(--accent)]"])}">${ssrInterpolate(unref(store).isTerminal ? "// featured" : "Featured")}</p><div class="grid md:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(featured.value, (project) => {
        _push(ssrRenderComponent(_component_ProjectCard, {
          key: project.id,
          project
        }, null, _parent));
      });
      _push(`<!--]--></div></div><div><p class="${ssrRenderClass(["text-xs font-semibold uppercase tracking-widest mb-5", unref(store).isTerminal ? "font-mono text-[var(--accent-green)]" : "text-[var(--accent)]"])}">${ssrInterpolate(unref(store).isTerminal ? "// all projects" : "All Projects")}</p><div class="flex flex-wrap gap-2 mb-8"><!--[-->`);
      ssrRenderList(categories, (cat) => {
        _push(`<button class="${ssrRenderClass([
          "px-3 py-1.5 text-xs font-medium rounded transition-all capitalize",
          activeFilter.value === cat ? unref(store).isTerminal ? "border border-[var(--accent)] text-[var(--accent)] bg-[var(--accent-subtle)] font-mono" : "bg-[var(--accent)] text-white" : unref(store).isTerminal ? "border border-[var(--border-color)] text-[var(--text-muted)] font-mono hover:border-[var(--accent)] hover:text-[var(--accent)]" : "bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
        ])}">${ssrInterpolate(unref(store).isTerminal ? `./${cat}` : cat)}</button>`);
      });
      _push(`<!--]--></div><div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(filtered.value, (project) => {
        _push(ssrRenderComponent(_component_ProjectCard, {
          key: project.id,
          project
        }, null, _parent));
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/ProjectsSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_5 = Object.assign(_sfc_main$4, { __name: "ProjectsSection" });
const skillGroups = [
  {
    category: "Languages",
    description: "Core programming languages",
    skills: [
      { name: "PHP", icon: "/svg/php-svgrepo-com.svg", level: "expert" },
      { name: "TypeScript", icon: "/svg/typescript.svg", level: "expert" },
      { name: "JavaScript", icon: "/svg/javascript-svgrepo-com.svg", level: "expert" },
      { name: "SQL", icon: "/svg/sql-svgrepo-com.svg", level: "expert" },
      { name: "Rust", level: "familiar" }
    ]
  },
  {
    category: "Backend",
    description: "Frameworks, runtimes & databases",
    skills: [
      { name: "Laravel", icon: "/svg/laravel-svgrepo-com (1).svg", level: "expert" },
      { name: "Node.js", icon: "/svg/node-js.svg", level: "expert" },
      { name: "Express.js", icon: "/svg/expressjs.svg", level: "expert" },
      { name: "Redis", level: "proficient" },
      { name: "MySQL", level: "expert" },
      { name: "MongoDB", icon: "/svg/mongodb.svg", level: "proficient" },
      { name: "PostgreSQL", level: "proficient" },
      { name: "Supabase", level: "proficient" },
      { name: "REST APIs", level: "expert" },
      { name: "WebSockets", level: "proficient" },
      { name: "TDD", level: "proficient" }
    ]
  },
  {
    category: "Frontend",
    description: "UI frameworks & tooling",
    skills: [
      { name: "Vue.js", icon: "/svg/vue-9-logo-svgrepo-com.svg", level: "expert" },
      { name: "Nuxt.js", icon: "/svg/nuxtjs-svgrepo-com.svg", level: "expert" },
      { name: "Tailwind CSS", icon: "/svg/tailwind-svgrepo-com.svg", level: "expert" },
      { name: "HTML", icon: "/svg/html5-svgrepo-com.svg", level: "expert" },
      { name: "CSS", icon: "/svg/css3-svgrepo-com.svg", level: "expert" },
      { name: "Bootstrap", icon: "/svg/bootstrap-fill-svgrepo-com.svg", level: "expert" }
    ]
  },
  {
    category: "DevOps & Cloud",
    description: "Infrastructure & deployment",
    skills: [
      { name: "Docker", level: "proficient" },
      { name: "AWS (S3)", level: "proficient" },
      { name: "Linux", level: "proficient" },
      { name: "Digital Ocean", level: "proficient" },
      { name: "Render", level: "proficient" },
      { name: "Heroku", level: "proficient" },
      { name: "Nginx", level: "familiar" }
    ]
  },
  {
    category: "Tools & Process",
    description: "Version control, workflow & PM",
    skills: [
      { name: "Git", icon: "/svg/git-svgrepo-com.svg", level: "expert" },
      { name: "GitHub", icon: "/svg/github-svgrepo-com.svg", level: "expert" },
      { name: "Bitbucket", icon: "/svg/bitbucket-svgrepo-com.svg", level: "expert" },
      { name: "Jira", icon: "/svg/jira-svgrepo-com.svg", level: "expert" },
      { name: "Linear", level: "proficient" },
      { name: "Slack", icon: "/svg/slack.svg", level: "expert" },
      { name: "Postman", level: "expert" },
      { name: "Notion", level: "proficient" },
      { name: "Agile / Scrum", level: "expert" }
    ]
  },
  {
    category: "AI & Developer Tools",
    description: "AI assistants & productivity tooling",
    skills: [
      {
        name: "Claude (Anthropic)",
        iconUrl: "https://www.anthropic.com/images/icons/apple-touch-icon.png",
        level: "expert"
      },
      {
        name: "GitHub Copilot",
        iconUrl: "https://github.githubassets.com/images/modules/site/copilot/copilot-logo.png",
        level: "expert"
      },
      {
        name: "ChatGPT",
        iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/64px-ChatGPT_logo.svg.png",
        level: "proficient"
      },
      { name: "Cursor", level: "proficient" },
      { name: "VS Code", icon: "/svg/vscode-svgrepo-com.svg", level: "expert" }
    ]
  }
];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "TechStackSection",
  __ssrInlineRender: true,
  setup(__props) {
    const store = usePreferencesStore();
    const levelColors = {
      expert: "var(--accent-green)",
      proficient: "var(--accent)",
      familiar: "var(--text-muted)"
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionHeading = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "stack",
        class: "py-20 md:py-28"
      }, _attrs))}><div class="max-w-6xl mx-auto px-4 sm:px-6">`);
      _push(ssrRenderComponent(_component_SectionHeading, {
        title: "Tech Stack",
        subtitle: "Tools I build with — and how well I know them"
      }, null, _parent));
      _push(`<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(unref(skillGroups), (group) => {
        _push(`<div class="${ssrRenderClass([
          "p-6 rounded-lg border transition-colors",
          unref(store).isTerminal ? "border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[var(--accent)]" : "border-[var(--border-color)] bg-[var(--bg-card)] shadow-sm hover:shadow-md hover:border-[var(--accent)]"
        ])}"><div class="mb-5"><h3 class="${ssrRenderClass(["font-bold text-sm mb-1", unref(store).isTerminal ? "font-mono text-[var(--accent)]" : "text-[var(--text-primary)]"])}" style="${ssrRenderStyle(!unref(store).isTerminal ? "font-family: Space Grotesk, sans-serif" : "")}">`);
        if (unref(store).isTerminal) {
          _push(`<span class="text-[var(--text-muted)]">[ </span>`);
        } else {
          _push(`<!---->`);
        }
        _push(` ${ssrInterpolate(group.category)} `);
        if (unref(store).isTerminal) {
          _push(`<span class="text-[var(--text-muted)]"> ]</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</h3><p class="${ssrRenderClass(["text-xs", unref(store).isTerminal ? "font-mono text-[var(--text-muted)]" : "text-[var(--text-muted)]"])}">${ssrInterpolate(group.description)}</p></div><div class="space-y-2.5"><!--[-->`);
        ssrRenderList(group.skills, (skill) => {
          _push(`<div class="flex items-center justify-between gap-2"><div class="flex items-center gap-2">`);
          if (skill.icon || skill.iconUrl) {
            _push(`<img${ssrRenderAttr("src", skill.icon || skill.iconUrl)}${ssrRenderAttr("alt", skill.name)} class="w-4 h-4 object-contain shrink-0 rounded">`);
          } else {
            _push(`<!---->`);
          }
          _push(`<span class="${ssrRenderClass(["text-xs", unref(store).isTerminal ? "font-mono text-[var(--text-secondary)]" : "text-[var(--text-secondary)]"])}">${ssrInterpolate(skill.name)}</span></div>`);
          if (skill.level) {
            _push(`<span class="${ssrRenderClass(["text-[10px] px-2 py-0.5 rounded capitalize shrink-0", unref(store).isTerminal ? "font-mono border border-[var(--border-color)]" : "bg-[var(--bg-secondary)]"])}" style="${ssrRenderStyle({ color: levelColors[skill.level ?? ""] })}">${ssrInterpolate(skill.level)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div><div class="flex flex-wrap items-center gap-6 mt-8 pt-6 border-t border-[var(--border-color)]"><span class="${ssrRenderClass(["text-xs", unref(store).isTerminal ? "font-mono text-[var(--text-muted)]" : "text-[var(--text-muted)]"])}">${ssrInterpolate(unref(store).isTerminal ? "// proficiency" : "Proficiency:")}</span><!--[-->`);
      ssrRenderList(levelColors, (color, level) => {
        _push(`<div class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full" style="${ssrRenderStyle({ background: color })}"></span><span class="${ssrRenderClass(["text-xs capitalize", unref(store).isTerminal ? "font-mono text-[var(--text-secondary)]" : "text-[var(--text-secondary)]"])}">${ssrInterpolate(level)}</span></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/TechStackSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_6 = Object.assign(_sfc_main$3, { __name: "TechStackSection" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ContactSection",
  __ssrInlineRender: true,
  setup(__props) {
    const store = usePreferencesStore();
    const { public: { formspreeId } } = useRuntimeConfig();
    const placeholders = {
      name: computed(() => store.isTerminal ? '"Your name"' : "Your name"),
      email: computed(() => store.isTerminal ? '"your@email.com"' : "your@email.com"),
      message: computed(() => store.isTerminal ? '"Tell me about your project..."' : "Tell me about your project or opportunity...")
    };
    const form = reactive({ name: "", email: "", message: "" });
    const status = ref("idle");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionHeading = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "contact",
        class: "py-20 md:py-28 bg-[var(--bg-secondary)]"
      }, _attrs))}><div class="max-w-6xl mx-auto px-4 sm:px-6">`);
      _push(ssrRenderComponent(_component_SectionHeading, {
        title: "Contact",
        subtitle: "Let's build something together",
        align: "center"
      }, null, _parent));
      _push(`<div class="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto"><div class="space-y-6"><p class="${ssrRenderClass(["text-[var(--text-secondary)] leading-relaxed", unref(store).isTerminal ? "font-mono text-sm" : "text-base"])}">`);
      if (unref(store).isTerminal) {
        _push(`<!--[--><span class="text-[var(--text-muted)]">/*</span><br>  * Open to senior backend roles, contract work,<br>  * and interesting system design conversations.<br>  * Response time: usually within 24 hours.<br><span class="text-[var(--text-muted)]"> */</span><!--]-->`);
      } else {
        _push(`<!--[--> I&#39;m open to senior backend roles, contract/consulting work, and interesting conversations about system design and engineering challenges. I usually respond within 24 hours. <!--]-->`);
      }
      _push(`</p><div class="space-y-3"><a${ssrRenderAttr("href", `mailto:${unref(personal).email}`)} class="${ssrRenderClass(["flex items-center gap-3 group", unref(store).isTerminal ? "font-mono text-sm" : "text-sm"])}"><span class="p-2 rounded-lg border border-[var(--border-color)] group-hover:border-[var(--accent)] transition-colors bg-[var(--bg-card)]"><svg class="w-4 h-4 text-[var(--accent)]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></span><span class="text-[var(--text-secondary)] group-hover:text-[var(--accent)] transition-colors">${ssrInterpolate(unref(personal).email)}</span></a><!--[-->`);
      ssrRenderList(unref(personal).socials, (social) => {
        _push(`<a${ssrRenderAttr("href", social.url)} target="_blank" rel="noopener noreferrer" class="${ssrRenderClass(["flex items-center gap-3 group", unref(store).isTerminal ? "font-mono text-sm" : "text-sm"])}"><span class="p-2 rounded-lg border border-[var(--border-color)] group-hover:border-[var(--accent)] transition-colors bg-[var(--bg-card)]">`);
        if (social.icon === "github") {
          _push(`<svg class="w-4 h-4 text-[var(--accent)]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"></path></svg>`);
        } else if (social.icon === "linkedin") {
          _push(`<svg class="w-4 h-4 text-[var(--accent)]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>`);
        } else if (social.icon === "twitter") {
          _push(`<svg class="w-4 h-4 text-[var(--accent)]" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.736-8.846L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</span><span class="text-[var(--text-secondary)] group-hover:text-[var(--accent)] transition-colors">${ssrInterpolate(social.name)}</span></a>`);
      });
      _push(`<!--]--></div></div><form class="space-y-4">`);
      if (status.value === "success") {
        _push(`<div class="${ssrRenderClass(["p-4 rounded-lg border text-sm", unref(store).isTerminal ? "font-mono border-[var(--accent-green)] text-[var(--accent-green)] bg-[var(--bg-card)]" : "border-green-200 text-green-700 bg-green-50"])}">${ssrInterpolate(unref(store).isTerminal ? "// Message sent successfully. I'll respond soon." : "Message sent! I'll get back to you soon.")}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (status.value === "error") {
        _push(`<div class="${ssrRenderClass(["p-4 rounded-lg border text-sm", unref(store).isTerminal ? "font-mono border-red-500 text-red-400 bg-[var(--bg-card)]" : "border-red-200 text-red-600 bg-red-50"])}">${ssrInterpolate(unref(store).isTerminal ? "// Error: failed to send. Try emailing directly." : "Something went wrong. Please email me directly.")}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div><label class="${ssrRenderClass(["block text-xs font-medium mb-1.5 text-[var(--text-secondary)]", unref(store).isTerminal ? "font-mono" : ""])}">${ssrInterpolate(unref(store).isTerminal ? "name:string" : "Name")}</label><input${ssrRenderAttr("value", form.name)} type="text" required${ssrRenderAttr("placeholder", placeholders.name.value)} class="${ssrRenderClass([
        "w-full px-3.5 py-2.5 text-sm rounded-lg border bg-[var(--bg-card)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none transition-colors",
        unref(store).isTerminal ? "font-mono border-[var(--border-color)] focus:border-[var(--accent)]" : "border-[var(--border-color)] focus:border-[var(--accent)]"
      ])}"></div><div><label class="${ssrRenderClass(["block text-xs font-medium mb-1.5 text-[var(--text-secondary)]", unref(store).isTerminal ? "font-mono" : ""])}">${ssrInterpolate(unref(store).isTerminal ? "email:string" : "Email")}</label><input${ssrRenderAttr("value", form.email)} type="email" required${ssrRenderAttr("placeholder", placeholders.email.value)} class="${ssrRenderClass([
        "w-full px-3.5 py-2.5 text-sm rounded-lg border bg-[var(--bg-card)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none transition-colors",
        unref(store).isTerminal ? "font-mono border-[var(--border-color)] focus:border-[var(--accent)]" : "border-[var(--border-color)] focus:border-[var(--accent)]"
      ])}"></div><div><label class="${ssrRenderClass(["block text-xs font-medium mb-1.5 text-[var(--text-secondary)]", unref(store).isTerminal ? "font-mono" : ""])}">${ssrInterpolate(unref(store).isTerminal ? "message:string" : "Message")}</label><textarea rows="5" required${ssrRenderAttr("placeholder", placeholders.message.value)} class="${ssrRenderClass([
        "w-full px-3.5 py-2.5 text-sm rounded-lg border bg-[var(--bg-card)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none transition-colors resize-none",
        unref(store).isTerminal ? "font-mono border-[var(--border-color)] focus:border-[var(--accent)]" : "border-[var(--border-color)] focus:border-[var(--accent)]"
      ])}">${ssrInterpolate(form.message)}</textarea></div><button type="submit"${ssrIncludeBooleanAttr(status.value === "sending") ? " disabled" : ""} class="${ssrRenderClass([
        "w-full py-2.5 text-sm font-semibold rounded-lg transition-all",
        unref(store).isTerminal ? "font-mono border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent-subtle)] disabled:opacity-50" : "bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] disabled:opacity-50"
      ])}">${ssrInterpolate(status.value === "sending" ? unref(store).isTerminal ? "// sending..." : "Sending..." : unref(store).isTerminal ? "$ ./send_message.sh" : "Send Message")}</button></form></div></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/ContactSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_7 = Object.assign(_sfc_main$2, { __name: "ContactSection" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const store = usePreferencesStore();
    const year = (/* @__PURE__ */ new Date()).getFullYear();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "border-t border-[var(--border-color)] bg-[var(--bg-secondary)] py-8 mt-16" }, _attrs))}><div class="max-w-6xl mx-auto px-4 sm:px-6"><div class="flex flex-col sm:flex-row items-center justify-between gap-4"><p class="${ssrRenderClass(["text-xs text-[var(--text-muted)]", unref(store).isTerminal ? "font-mono" : ""])}">`);
      if (unref(store).isTerminal) {
        _push(`<span>// © ${ssrInterpolate(unref(year))} Adeola Bada — built with Nuxt 4 + Tailwind</span>`);
      } else {
        _push(`<span>© ${ssrInterpolate(unref(year))} Adeola Bada. Built with Nuxt &amp; Tailwind CSS.</span>`);
      }
      _push(`</p><div class="flex items-center gap-4"><!--[-->`);
      ssrRenderList(unref(personal).socials, (social) => {
        _push(`<a${ssrRenderAttr("href", social.url)} target="_blank" rel="noopener noreferrer" class="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"${ssrRenderAttr("title", social.name)}>`);
        if (social.icon === "github") {
          _push(`<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"></path></svg>`);
        } else if (social.icon === "linkedin") {
          _push(`<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>`);
        } else if (social.icon === "twitter") {
          _push(`<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.736-8.846L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</a>`);
      });
      _push(`<!--]--></div></div></div></footer>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/AppFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_8 = Object.assign(_sfc_main$1, { __name: "AppFooter" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Adeola Bada | Senior Backend Engineer",
      description: "Senior Backend Engineer with 5+ years building scalable APIs, distributed systems, and high-performance backend infrastructure. Laravel · Node.js · TypeScript · Redis.",
      ogTitle: "Adeola Bada | Senior Backend Engineer",
      ogDescription: "Senior Backend Engineer specialising in scalable APIs, distributed systems, and backend infrastructure.",
      ogImage: "https://www.adeolabada.com/images/1-rb.png",
      ogUrl: "https://www.adeolabada.com",
      twitterCard: "summary_large_image",
      twitterTitle: "Adeola Bada | Senior Backend Engineer",
      twitterDescription: "Senior Backend Engineer with 5+ years building scalable APIs and distributed systems.",
      twitterImage: "https://www.adeolabada.com/images/1-rb.png"
    });
    useHead({
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                "@id": "https://www.adeolabada.com/#website",
                url: "https://www.adeolabada.com",
                name: "Adeola Bada Portfolio",
                description: "Portfolio of Adeola Bada, Senior Backend Engineer"
              },
              {
                "@type": "Person",
                "@id": "https://www.adeolabada.com/#person",
                name: "Adeola Bada",
                url: "https://www.adeolabada.com",
                image: "https://www.adeolabada.com/images/1-rb.png",
                jobTitle: "Senior Backend Engineer",
                email: "dunsin.bada@gmail.com",
                sameAs: [
                  "https://github.com/codeDeeAi",
                  "https://www.linkedin.com/in/adeola-bada-aiism-a51174124/",
                  "https://twitter.com/AdeolaBada1"
                ],
                knowsAbout: ["PHP", "Laravel", "Node.js", "TypeScript", "Redis", "MySQL", "MongoDB", "Docker", "AWS", "REST APIs"],
                alumniOf: {
                  "@type": "CollegeOrUniversity",
                  name: "Federal University Oye Ekiti"
                }
              }
            ]
          })
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = __nuxt_component_0$2;
      const _component_HeroSection = __nuxt_component_1$2;
      const _component_AboutSection = __nuxt_component_2;
      const _component_ExperienceSection = __nuxt_component_3;
      const _component_SpeakingSection = __nuxt_component_4;
      const _component_ProjectsSection = __nuxt_component_5;
      const _component_TechStackSection = __nuxt_component_6;
      const _component_ContactSection = __nuxt_component_7;
      const _component_AppFooter = __nuxt_component_8;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-[var(--bg-primary)] min-h-screen" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
      _push(`<main>`);
      _push(ssrRenderComponent(_component_HeroSection, null, null, _parent));
      _push(ssrRenderComponent(_component_AboutSection, null, null, _parent));
      _push(ssrRenderComponent(_component_ExperienceSection, null, null, _parent));
      _push(ssrRenderComponent(_component_SpeakingSection, null, null, _parent));
      _push(ssrRenderComponent(_component_ProjectsSection, null, null, _parent));
      _push(ssrRenderComponent(_component_TechStackSection, null, null, _parent));
      _push(ssrRenderComponent(_component_ContactSection, null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CLbTC4_t.mjs.map
