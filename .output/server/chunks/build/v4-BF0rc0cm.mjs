import { hasInjectionContext, inject } from 'vue';
import { a as useNuxtApp } from './server.mjs';
import { u as useHead$1, h as headSymbol, a as useSeoMeta$1 } from '../routes/renderer.mjs';

function injectHead(nuxtApp) {
  var _a;
  const nuxt = nuxtApp || useNuxtApp();
  return ((_a = nuxt.ssrContext) == null ? void 0 : _a.head) || nuxt.runWithContext(() => {
    if (hasInjectionContext()) {
      const head = inject(headSymbol);
      if (!head) {
        throw new Error("[nuxt] [unhead] Missing Unhead instance.");
      }
      return head;
    }
  });
}
function useHead(input, options = {}) {
  const head = injectHead(options.nuxt);
  return useHead$1(input, { head, ...options });
}
function useSeoMeta(input, options = {}) {
  const head = injectHead(options.nuxt);
  return useSeoMeta$1(input, { head, ...options });
}

export { useHead as a, useSeoMeta as u };
//# sourceMappingURL=v4-BF0rc0cm.mjs.map
