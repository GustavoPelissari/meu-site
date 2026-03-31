export function Card({
  modifier = "service",
  title = "",
  text = "",
  meta = "",
  icon = "",
  visual = "",
  extraClass = ""
}) {
  const classes = ["card", `card--${modifier}`, extraClass].filter(Boolean).join(" ");

  return `
    <article class="${classes}">
      ${modifier === "portfolio" && visual ? `<div class="card__visual">${visual}</div>` : ""}
      ${icon ? `<div class="card__icon" aria-hidden="true">${icon}</div>` : ""}
      <div class="card__project">
        ${title ? `<h3 class="card__title">${title}</h3>` : ""}
        ${text ? `<p class="card__text">${text}</p>` : ""}
        ${meta ? `<span class="card__meta">${meta}</span>` : ""}
      </div>
    </article>
  `;
}