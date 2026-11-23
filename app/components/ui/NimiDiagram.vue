<template>
  <figure class="diagram">
    <svg
      viewBox="0 0 680 222"
      role="img"
      aria-label="Nimi request flow: the planner's message goes to a classifier and model router, then a tool loop. Write tools produce a proposed change that the planner confirms before the action layer runs it."
    >
      <defs>
        <marker id="nimi-a" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="ah" /></marker>
        <marker id="nimi-ah" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="ah hot" /></marker>
      </defs>

      <text class="s" x="575" y="16" text-anchor="middle">read tools answer directly</text>

      <rect class="box" x="10" y="24" width="190" height="52" rx="4" />
      <text class="t" x="105" y="46" text-anchor="middle">Planner</text>
      <text class="s" x="105" y="62" text-anchor="middle">chat · voice · streamed reply</text>
      <path class="w" d="M200 50 H243" marker-end="url(#nimi-a)" />

      <rect class="box core" x="245" y="24" width="190" height="52" rx="4" />
      <text class="t" x="340" y="46" text-anchor="middle">Classifier → model router</text>
      <text class="s" x="340" y="62" text-anchor="middle">cheapest capable · fallback</text>
      <path class="w" d="M435 50 H478" marker-end="url(#nimi-a)" />

      <rect class="box core" x="480" y="24" width="190" height="52" rx="4" />
      <text class="t" x="575" y="46" text-anchor="middle">Tool loop</text>
      <text class="s" x="575" y="62" text-anchor="middle">~20 tools · permission-filtered</text>

      <path class="w hot" d="M575 76 V138" marker-end="url(#nimi-ah)" />
      <text class="s" x="584" y="112">write tools</text>

      <rect class="box hot" x="480" y="140" width="190" height="52" rx="4" />
      <text class="t" x="575" y="162" text-anchor="middle">Proposed change</text>
      <text class="s" x="575" y="178" text-anchor="middle">preview · nothing written</text>
      <path class="w hot" d="M480 166 H437" marker-end="url(#nimi-ah)" />

      <rect class="box hot" x="245" y="140" width="190" height="52" rx="4" />
      <text class="t" x="340" y="162" text-anchor="middle">Planner confirms</text>
      <text class="s" x="340" y="178" text-anchor="middle">or discards</text>
      <path class="w hot" d="M245 166 H202" marker-end="url(#nimi-ah)" />

      <rect class="box" x="10" y="140" width="190" height="52" rx="4" />
      <text class="t" x="105" y="162" text-anchor="middle">Action layer</text>
      <text class="s" x="105" y="178" text-anchor="middle">normal services · 60s undo</text>

      <text class="s" x="10" y="214">Every model call is costed and written to a usage ledger.</text>
    </svg>
    <figcaption>
      <span class="label">Fig. 1 · Nimi request flow</span>
      <span class="label" style="color: var(--signal)">— write path</span>
    </figcaption>
  </figure>
</template>
