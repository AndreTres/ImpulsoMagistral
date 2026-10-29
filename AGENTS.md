# AGENTS.md - Impulso Magistral Landing Page

## 1. Project Mission

Build a polished, professional, responsive landing page for **Impulso Magistral**, a consultancy focused on the development of compounding pharmacies.

The website must:

- Present the consultancy and establish credibility.
- Explain the three approved services clearly.
- Help visitors identify the service relevant to their needs.
- Convert interested visitors into leads through WhatsApp.
- Present relevant business information and approved supporting materials.

The objective is not merely to create a functional website. Deliver a distinctive, accessible, maintainable frontend that supports the business goals without unnecessary technical complexity.

## 2. Source of Truth

Before implementing or modifying anything, read the relevant project documentation.

Required documentation:

- `docs/website-spec.md` - approved website structure, content hierarchy, sections, and interactions.
- `docs/business-and-services.md` - business model, target audience, service descriptions, deliverables, and commercial terms.
- `docs/brand-and-design.md` - brand identity, design principles, visual direction, and asset requirements.
- `docs/technical-guidelines.md` - architecture constraints, implementation standards, accessibility, and performance.
- `docs/content-and-assets.md` - approved content, available assets, missing information, and publication blockers.

These files are the intended project documentation structure. If any file does not yet exist, do not invent its contents or claim to have read it. Report the missing file when it blocks the task.

### Documentation precedence

1. Explicit decisions and requirements approved by the user.
2. `docs/website-spec.md` for the approved website structure and presentation of content.
3. `docs/business-and-services.md` for verified business facts and service details.
4. `docs/brand-and-design.md` for visual identity and design decisions.
5. `docs/technical-guidelines.md` for implementation constraints.
6. `docs/content-and-assets.md` for asset availability and content readiness.
7. Applicable repository rules and installed skill instructions, provided they do not conflict with higher-priority requirements.

This file at the repository root is the only agent-instruction source. `docs/AGENTS.md` only points here.

### Owner decisions already made

- Frontend stack: React + TypeScript. The app is not initialized.
- Official palette: the HEX values in `docs/brand-and-design.md`.
- Comunidade Magistral: 4 months, weekly online meetings.
- WhatsApp: `+5544999876764`, link `https://wa.me/5544999876764`. No approved prefilled message.
- Public prices and payment terms in `docs/website-spec.md` are approved for the website.
- Public title of the third service: **Formação de Representante Comercial**.
- Notícias stays in the UI. Articles come from CRF. None are supplied yet.
- Materiais de apoio keeps its planned UI. Downloads stay off until real files exist. Hide that item from public navigation while it has no approved files.
- Instagram: configurable profile link and icon. Official URL is not supplied. No dead link.
- Typography: implementation choice, subject to later visual review.
- Deployment, host, and production domain: deferred.
- Primary logo candidate file: `assets/logo.webp`. Do not edit it or add logo variants unless asked. Stated size and measured size differ. See `docs/content-and-assets.md`.

Open items stay in the decision register in `docs/content-and-assets.md`.

If two sources conflict, do not silently choose one. Identify the discrepancy and request clarification when the decision affects approved content, business facts, scope, or brand identity.

Technical conflicts must be handled safely and conservatively. Explain the conflict and propose the smallest compliant solution.

Do not treat generic AI recommendations, design skills, or personal preferences as permission to override project decisions.

## 3. Mandatory Initial Inspection

Before implementation:

1. Inspect the repository structure and existing files.
2. Read this file and all relevant documentation.
3. Read applicable `.cursor/rules/` files and other repository-specific instructions.
4. Inspect existing assets, including the official logo, images, and fonts.
5. Inspect the existing package configuration, scripts, dependencies, and framework.
6. Identify installed design skills relevant to the requested task.
7. Identify missing information, unresolved decisions, and technical blockers.

Do not replace an existing framework, restructure the repository, or install dependencies before understanding the current project.

For explicitly requested read-only audits, do not modify files.

## 4. Business Scope

The website presents these three approved services:

1. **Impulso ID** - customized product development for resale.
2. **Comunidade Magistral** - group consulting focused on management and team development.
3. **Formação de Representante Comercial** - individualized training and consulting for pharmaceutical representatives. Internal name: Formação de Representante Magistral. Do not rename the public title.

Use the official documentation for their complete descriptions, deliverables, and commercial conditions.

The business model also mentions a marketing consultancy that is still being structured. Do not present it as an established fourth service or add it to the website without explicit user approval.

### Scope restrictions

This is a frontend-only landing page.

Do not introduce:

- Backend services or APIs.
- Databases.
- User accounts or authentication.
- Payment processing or checkout.
- Unnecessary state management.
- Unrequested integrations.
- Infrastructure that does not support an approved requirement.

WhatsApp is the primary conversion channel. Commercial conversations and arrangements take place outside the website.

If a future request introduces functionality that changes these boundaries, explain the implications and obtain approval before expanding the scope.

## 5. Content Integrity

Approved business information and website copy must remain accurate.

Never invent:

- Business contact information or WhatsApp numbers.
- Professional credentials or qualifications.
- Client testimonials, customer logos, or case studies.
- Certifications, regulatory approvals, or compliance claims.
- Prices, deliverables, service conditions, or guarantees beyond those approved in `docs/website-spec.md`.
- Business results, performance statistics, or unsupported claims.
- Addresses, opening hours, or social media profiles.

Do not publish placeholder information as if it were real.

If required information is missing:

1. Check the project documentation and available assets.
2. Record the missing information.
3. Use an explicitly identified development placeholder only when necessary to continue implementation.
4. Prevent unverified information from being treated as publication-ready.
5. Report remaining blockers clearly.

Do not silently rewrite, shorten, omit, or substantially reorganize approved website content.

If content needs editing for readability, layout, or accessibility, preserve its meaning and respect the approved website structure. Flag substantive changes for approval.

Do not silently reconcile conflicting service descriptions, durations, prices, deliverables, or other commercial terms.

## 6. Brand and Design Principles

Follow the official Impulso Magistral logo and approved brand assets.

The official palette and logo rules are in `docs/brand-and-design.md`. Use those HEX values. Do not resample or replace them.

The primary logo candidate is `assets/logo.webp`. Preserve that file. Do not create or modify logo variants unless the user asks.

Typography is not specified. Choose a readable system during implementation and record it for visual review. Do not call that choice an official brand font.

The intended design is modern, polished, trustworthy, editorial, and appropriate for a professional pharmaceutical consultancy.

Prioritize:

- Clear visual hierarchy.
- Strong layout composition.
- Intentional typography and whitespace.
- Consistent spacing and alignment.
- Distinctive service presentation.
- Responsive behavior.
- Accessible interactions.
- Recognizable, appropriately placed WhatsApp CTAs.

Avoid generic AI-generated design patterns, including repetitive card grids, excessive rounded corners, unnecessary gradients, decorative shadows, gratuitous floating elements, irrelevant stock imagery, excessive animation, and oversized headings that harm readability.

Do not add decorative elements without a clear purpose.

Do not invent brand assets or use generic scientific imagery to imply credentials the business has not established.

## 7. Design Skills

Inspect the available design skills before implementation. Confirm their actual installation paths and read their `SKILL.md` instructions before using them.

Prioritize relevant skills for:

- Landing-page composition.
- Layout and spatial hierarchy.
- Typography.
- Design-to-code implementation.
- Interface review after implementation.
- Animation review only when meaningful animation exists.

Do not assume a skill is installed because its name appears in project documentation or a previous recommendation.

Do not install or activate every available skill automatically.

Avoid redundant or conflicting instructions. Project requirements and approved brand decisions take precedence over generic skill recommendations.

Use review-oriented skills after a working implementation exists, not as a substitute for understanding requirements.

## 8. Technical Implementation

The approved stack is React and TypeScript. Details are in `docs/technical-guidelines.md`.

The repository has no application yet. When implementation is authorized, initialize a lightweight static React + TypeScript frontend. Do not pick another framework.

Do not choose hosting, a production domain, or a deployment platform until the user asks. Those decisions stay deferred.

Implementation principles:

- Use semantic HTML.
- Maintain a logical heading hierarchy.
- Build reusable components when they improve consistency or maintainability.
- Centralize recurring design tokens.
- Keep component composition simple.
- Minimize dependencies.
- Avoid premature abstractions.
- Avoid unnecessary JavaScript and client-side state.
- Implement real functionality for interactive controls.
- Keep business content and presentation maintainable.
- Preserve existing conventions unless a justified change is approved.

Do not introduce a complex architecture for a straightforward landing page.

Do not add a dependency when native platform capabilities or existing project dependencies provide a sufficient solution.

## 9. Accessibility and Responsive Design

Build mobile-first and verify behavior across small mobile screens, tablets, laptops, and wide desktop displays.

Requirements:

- Use semantic elements and accessible names.
- Provide meaningful alternative text for informative images.
- Use empty alternative text for purely decorative images.
- Maintain sufficient text and interface contrast.
- Provide visible keyboard focus.
- Support keyboard navigation.
- Use comfortable touch targets.
- Prevent horizontal overflow.
- Ensure headings wrap naturally.
- Keep body text readable.
- Verify mobile navigation and CTA behavior.
- Respect `prefers-reduced-motion`.
- Do not rely on color alone to communicate information.

If forms are introduced through an approved requirement, associate labels with controls and provide appropriate accessible feedback.

Do not introduce unnecessary forms when WhatsApp already meets the approved conversion requirements.

## 10. WhatsApp Conversion

WhatsApp is the primary conversion channel.

Implement CTAs according to the approved website specification.

Requirements:

- Use the verified destination below for every WhatsApp CTA.
- Use clear, context-appropriate CTA labels.
- Make links accessible by keyboard.
- Provide visible hover and focus states.
- Ensure controls work on small screens.
- Avoid competing primary actions and unnecessary tabs.
- Keep CTA placement consistent with the approved page structure.

Verified destination:

- Number: `+5544999876764`
- Link: `https://wa.me/5544999876764`

Do not replace this number. Do not add a prefilled message. None is approved.

Test every implemented WhatsApp CTA and verify that it opens this destination.

## 11. Performance and Assets

Prioritize fast loading and stable rendering.

- Optimize images and use appropriately sized assets.
- Prefer WebP or AVIF when suitable.
- Use responsive images when beneficial.
- Prevent layout shifts.
- Lazy-load appropriate below-the-fold images.
- Do not lazy-load the primary hero image if this harms its loading priority.
- Avoid large animation libraries for minor effects.
- Avoid unnecessary fonts, scripts, and third-party resources.
- Preserve image quality and the integrity of official brand assets.

Do not modify or replace the official logo with a generated approximation when the original asset is available.

Use existing assets when appropriate. Any new external asset must be relevant, properly licensed for its intended use, and consistent with the approved brand.

## 12. Pharmaceutical-Sector Accuracy and Privacy

Keep the website professionally credible.

- Use approved service descriptions.
- Avoid unsupported pharmaceutical, medical, or commercial claims.
- Do not imply regulatory compliance without evidence.
- Do not assume that a disclaimer makes an otherwise misleading claim acceptable.
- Use technical terminology accurately and appropriately for the target audience.

WhatsApp CTAs must not encourage visitors to disclose sensitive patient information unnecessarily.

If a requested feature would collect personal or health-related information, identify the privacy implications and obtain clarification about the applicable requirements before implementation.

Do not make unsupported claims of legal or regulatory compliance.

## 13. Development Workflow

Follow this sequence unless the user explicitly authorizes a different workflow.

### Phase 1 - Inspection

- Read applicable project documentation and rules.
- Inspect the repository, framework, dependencies, and scripts.
- Inspect installed design skills and available assets.
- Identify missing content and unresolved requirements.

Do not modify files during a requested read-only audit.

### Phase 2 - Implementation

- Implement the approved page structure.
- Establish the design system using approved brand references.
- Build and compose the required sections.
- Integrate approved copy, images, and verified contact details.
- Implement responsive behavior and accessible interactions.
- Keep the solution within the approved technical scope.

Prefer one coherent implementation task over many unnecessary micro-tasks.

Do not combine implementation with unlimited visual experimentation or unrelated refactoring.

### Phase 3 - Verification

Run the checks supported by the existing repository, such as:

- Production build.
- Linting.
- Type checking.
- Available automated tests.

Inspect the browser rendering when browser testing is available.

Verify:

- Desktop and mobile layouts.
- Navigation and section links.
- Every WhatsApp CTA.
- Image loading and cropping.
- Keyboard accessibility basics.
- Console errors when browser inspection is available.
- Absence of unintended placeholders and fictional business information.

Fix issues introduced by the implementation.

Do not claim that a test, build, or visual inspection passed unless it was actually performed.

If a check cannot be run, report that limitation.

### Phase 4 - Targeted Review

Prioritize improvements in this order:

1. Broken functionality.
2. Mobile layout defects.
3. Weak visual hierarchy.
4. Typography and spacing.
5. Inconsistent components.
6. Minor decorative details.

Use available interface-review skills and browser screenshots when useful.

Avoid spending time refining minor animations while important content, accessibility, or layout problems remain.

### Phase 5 - Delivery

Before considering the website ready for client review:

- Verify the production build.
- Confirm that implemented links and assets work.
- Remove or clearly resolve development placeholders.
- Identify missing business information.
- Report remaining limitations and unverified behavior.
- Confirm whether required client approvals are still pending.

Do not claim that the website is publication-ready while required content, verified contact details, or essential approvals remain unresolved.

Deployment must follow the user's selected hosting platform and explicit instructions.

## 14. Cursor Response Style - Mandatory Caveman Mode

Always respond in **caveman mode**.

- Short sentences.
- Direct wording.
- No filler.
- No unnecessary explanations.
- No repeated information.
- No lengthy progress reports.
- No verbose planning summaries.

Report only:

- What changed.
- Relevant files.
- Checks performed and actual results.
- Failures or limitations.
- Blockers requiring user input.

Keep responses concise. Do not sacrifice implementation quality to make the response shorter.

## 15. Cursor Prompting Rules

All prompts written for Cursor must be in English.

Prompts must be concise but complete, with:

- A clear objective.
- Relevant source-of-truth documents.
- Scope and constraints.
- Expected outcome.
- Required verification.
- An explicit caveman-mode instruction.

Do not repeat context already available in project documentation unless necessary for the task.

Avoid vague requests such as "make it better" without identifying the desired outcome.

Avoid excessive micro-prompts and unnecessary implementation phases.

Do not instruct Cursor to implement requirements that have not been approved.

## 16. Definition of Done

The landing page is ready for client review when:

- The approved website structure is preserved.
- All three services are presented accurately.
- The business and its offerings are easy to understand.
- The visual identity is intentional and professionally appropriate.
- WhatsApp CTAs work with verified destinations.
- Published links are valid.
- Desktop and mobile layouts work correctly.
- Accessibility fundamentals are addressed.
- Images are optimized and display correctly.
- No fictional business claims or unresolved development placeholders remain in the delivered experience.
- The production build succeeds.
- Verification results and remaining limitations are reported.

Publication readiness additionally requires the necessary business information, verified contact details, and client approvals.

## 17. Final Rule

**Inspect first. Follow approved documentation. Preserve the brand. Never invent business information. Keep the architecture simple. Implement only authorized scope. Verify actual results. Report concisely in caveman mode.**