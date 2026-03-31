export function Button({
  label,
  href = "#",
  variant = "primary",
  target = "_self",
  rel = "",
  type = "link",
  className = "",
  icon = ""
}) {
  const classes = ["button", `button--${variant}`, className].filter(Boolean).join(" ");
  const content = `
    <span>${label}</span>
    ${icon ? `<span aria-hidden="true">${icon}</span>` : ""}
  `;

  if (type === "button") {
    return `<button class="${classes}" type="button">${content}</button>`;
  }

  const relAttr = rel ? ` rel="${rel}"` : "";
  const targetAttr = target ? ` target="${target}"` : "";

  return `<a class="${classes}" href="${href}"${targetAttr}${relAttr}>${content}</a>`;
}