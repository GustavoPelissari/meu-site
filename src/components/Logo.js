export function Logo({ compact = false, className = "" } = {}) {
  const classes = ["logo", compact ? "logo--compact" : "", className].filter(Boolean).join(" ");

  return `
    <span class="${classes}">
      <img
        class="logo__image"
        src="/assets/brand/gustavo-pelissari-logo.svg"
        alt="Logotipo Gustavo Pelissari Oenning"
        loading="eager"
        decoding="async"
      />
    </span>
  `;
}
