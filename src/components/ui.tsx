import type { ReactNode } from "react";
import { WhatsAppLink } from "./WhatsAppLink.tsx";

export function TopicList({
  items,
}: {
  items: readonly { title: string; text: string }[];
}) {
  return (
    <ul className="topics">
      {items.map((item) => (
        <li key={item.title}>
          <strong>{item.title}</strong>
          {item.text ? <span>{item.text}</span> : null}
        </li>
      ))}
    </ul>
  );
}

export function PlainList({ items }: { items: readonly string[] }) {
  return (
    <ul className="plain-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function closeFaqItem(item: HTMLDetailsElement) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    item.open = false;
    return;
  }

  item.classList.add("is-closing");

  const finish = (event?: Event) => {
    if (
      event instanceof TransitionEvent &&
      (event.target !== item || event.propertyName !== "grid-template-rows")
    ) {
      return;
    }

    item.removeEventListener("transitionend", finish);
    item.open = false;
    item.classList.remove("is-closing");
  };

  item.addEventListener("transitionend", finish);
  window.setTimeout(() => {
    if (item.classList.contains("is-closing")) finish();
  }, 340);
}

export function FaqList({
  items,
}: {
  items: readonly { question: string; answer: string }[];
}) {
  return (
    <div className="faq">
      {items.map((item) => (
        <details key={item.question} className="faq__item">
          <summary
            onClick={(event) => {
              const parent = event.currentTarget.parentElement;
              if (!(parent instanceof HTMLDetailsElement) || !parent.open) return;
              event.preventDefault();
              if (!parent.classList.contains("is-closing")) closeFaqItem(parent);
            }}
          >
            <span>{item.question}</span>
            <svg className="faq__arrow" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 7.5 10 12.5 15 7.5"
              />
            </svg>
          </summary>
          <div className="faq__answer">
            <p>{item.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}

export function ClosingBand({
  title,
  text,
  label,
  titleClassName,
}: {
  title: string;
  text: string;
  label: string;
  titleClassName?: string;
}) {
  return (
    <div className="closing-band">
      <div>
        <h3 className={titleClassName}>{title}</h3>
        <p>{text}</p>
      </div>
      <WhatsAppLink className="contact-button">{label}</WhatsAppLink>
    </div>
  );
}

export function SectionTitle({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) {
  return (
    <h2 id={id} className="section-title">
      {children}
    </h2>
  );
}
