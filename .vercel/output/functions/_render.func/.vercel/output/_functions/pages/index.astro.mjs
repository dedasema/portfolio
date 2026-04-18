/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, d as renderHead, e as renderComponent, f as renderSlot, b as createAstro, s as spreadAttributes } from '../chunks/astro/server_BzQSfiBo.mjs';
export { renderers } from '../renderers.mjs';

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="flex justify-end items-center py-5 w-full xl:w-[1120px] mx-auto md:justify-center"> <nav id="desktop-menu" class="hidden md:flex flex-wrap justify-center gap-x-10 gap-y-4 opacity-80"> <a href="#top">Inicio</a> <a href="#proyectos">Proyectos</a> <a href="#sobre-mi">Sobre mí</a> <a href="#contacto">Contacto</a> </nav> <div class="md:hidden flex items-center"> <button id="menu-btn" aria-label="Menu" class="text-white focus:outline-none"> <!-- Hamburger Icon --> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path> </svg> </button> </div> </header> <div id="mobile-menu" class="hidden min-h-screen z-10 flex-col gap-y-4 mt-4 opacity-80"> <a href="#top" class="w-full text-center">Inicio</a> <a href="#proyectos" class="w-full text-center">Proyectos</a> <a href="#sobre-mi" class="w-full text-center">Sobre mí</a> <a href="#contacto" class="w-full text-center">Contacto</a> </div> `;
}, "/home/runner/work/portfolio/portfolio/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="rounded-lg shadow m-4 bg-black/20 backdrop-blur-lg w-full xl:w-[1120px] mx-auto mb-10"> <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between"> <span class="text-sm sm:text-center text-yellow-200/90">
© 2024
<a href="https://desesoft.vercel.app/" class="hover:underline">desesoft</a>. Pocos derechos reservados.
</span> <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-white/90 sm:mt-0"> <li> <a href="#sobre-mi" class="hover:underline me-4 md:me-6">Sobre mí</a> </li> <li> <a href="#contacto" class="hover:underline">Contacto</a> </li> </ul> </div> </footer>`;
}, "/home/runner/work/portfolio/portfolio/src/components/Footer.astro", void 0);

const $$Astro$i = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="px-4"> <div class="fixed top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/home/runner/work/portfolio/portfolio/src/layouts/Layout.astro", void 0);

const $$Badge = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center "> <span class="relative inline-flex overflow-hidden rounded-full p-[1px]"> <span class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]"></span> <div class="inline-flex items-center justify-center w-full px-3 py-1 text-sm text-green-800  rounded-full cursor-pointer bg-gray-800 text-white/80 backdrop-blur-3xl whitespace-nowrap"> ${renderSlot($$result, $$slots["default"])} </div> </span> </div>`;
}, "/home/runner/work/portfolio/portfolio/src/components/Badge.astro", void 0);

const $$Astro$h = createAstro();
const $$GitHub = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$GitHub;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 256 250" width="256" height="250" fill="currentColor" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"> <path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"></path> </svg>`;
}, "/home/runner/work/portfolio/portfolio/src/components/icons/GitHub.astro", void 0);

const $$Astro$g = createAstro();
const $$LinkedIn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$LinkedIn;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="256" height="256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"><path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="currentColor"></path></svg>`;
}, "/home/runner/work/portfolio/portfolio/src/components/icons/LinkedIn.astro", void 0);

const $$Astro$f = createAstro();
const $$SocialPill = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$SocialPill;
  return renderTemplate`${maybeRenderHead()}<a class="rounded-full border border-white/10 flex justify-center items-center gap-x-2 py-1 px-2
  md:py-2 md:px-4 text-xs md:text-base bg-white/5 hover:scale-110 hover:bg-white/10 transition"${spreadAttributes(Astro2.props)} target="_blank" rel="noopener noreferrer"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/home/runner/work/portfolio/portfolio/src/components/SocialPill.astro", void 0);

const $$Astro$e = createAstro();
const $$Mail = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Mail;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5"></path><path d="M3 6l9 6l9 -6"></path><path d="M15 18h6"></path><path d="M18 15l3 3l-3 3"></path></svg>`;
}, "/home/runner/work/portfolio/portfolio/src/components/icons/Mail.astro", void 0);

const $$Astro$d = createAstro();
const $$Code = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Code;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-code"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 8l-4 4l4 4"></path><path d="M17 8l4 4l-4 4"></path><path d="M14 4l-4 16"></path></svg>`;
}, "/home/runner/work/portfolio/portfolio/src/components/icons/Code.astro", void 0);

const $$Astro$c = createAstro();
const $$SectionContainer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$SectionContainer;
  const { class: className, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`w-full lg:w-[740px] mx-auto pb-44 ${className}`, "class")}> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "/home/runner/work/portfolio/portfolio/src/components/SectionContainer.astro", void 0);

const $$Astro$b = createAstro();
const $$Html = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Html;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 520"> <path fill="#e34f26" d="M41 460L0 0h451l-41 460-185 52"></path> <path fill="#ef652a" d="M226 472l149-41 35-394H226"></path> <path fill="#ecedee" d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z"></path> <path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z"></path> </svg>`;
}, "/home/runner/work/portfolio/portfolio/src/components/icons/Html.astro", void 0);

const $$Astro$a = createAstro();
const $$Css = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Css;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 520"> <path fill="#0c73b8" d="M41 460L0 0h451l-41 460-185 52"></path> <path fill="#30a9dc" d="M226 472l149-41 35-394H226"></path> <path fill="#ecedee" d="M226 208H94l5 57h127zm0-114H84l5 56h137zm0 261l-124-33 7 60 117 32z"></path> <path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 26-288H226v56h80l-6 58h-74z"></path> </svg>`;
}, "/home/runner/work/portfolio/portfolio/src/components/icons/Css.astro", void 0);

const $$Astro$9 = createAstro();
const $$Js = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Js;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="2500" height="2500" viewBox="0 0 1052 1052"> <path fill="#f0db4f" d="M0 0h1052v1052H0z"></path> <path d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z" fill="#323330"></path> </svg>`;
}, "/home/runner/work/portfolio/portfolio/src/components/icons/Js.astro", void 0);

const $$Astro$8 = createAstro();
const $$Bootstrap = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Bootstrap;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 256 204" xmlns="http://www.w3.org/2000/svg" width="256" height="204" preserveAspectRatio="xMidYMid"><path fill="#7E13F8" d="M53.172 0C38.565 0 27.756 12.785 28.24 26.65c.465 13.32-.139 30.573-4.482 44.642C19.402 85.402 12.034 94.34 0 95.488v12.956c12.034 1.148 19.402 10.086 23.758 24.197 4.343 14.069 4.947 31.32 4.482 44.641-.484 13.863 10.325 26.65 24.934 26.65h149.673c14.608 0 25.414-12.785 24.93-26.65-.464-13.32.139-30.572 4.482-44.641 4.359-14.11 11.707-23.05 23.741-24.197V95.488c-12.034-1.148-19.382-10.086-23.74-24.196-4.344-14.067-4.947-31.321-4.483-44.642C228.261 12.787 217.455 0 202.847 0H53.17h.002ZM173.56 125.533c0 19.092-14.24 30.67-37.872 30.67h-40.23a4.339 4.339 0 0 1-4.338-4.339V52.068a4.339 4.339 0 0 1 4.339-4.34h39.999c19.705 0 32.637 10.675 32.637 27.063 0 11.503-8.7 21.801-19.783 23.604v.601c15.089 1.655 25.248 12.104 25.248 26.537Zm-42.26-64.05h-22.937v32.4h19.32c14.934 0 23.17-6.014 23.17-16.764 0-10.073-7.082-15.636-19.552-15.636Zm-22.937 45.256v35.705h23.782c15.548 0 23.786-6.239 23.786-17.965 0-11.728-8.467-17.742-24.786-17.742h-22.782v.002Z"></path></svg>`;
}, "/home/runner/work/portfolio/portfolio/src/components/icons/Bootstrap.astro", void 0);

const $$Astro$7 = createAstro();
const $$Jquery = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Jquery;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 256 63" width="256" height="63" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#prefix__clip0_1_214)"><path d="M109.481 22.561l.001-.002-1.638 5.805 1.637-5.803zm7.96 21.272h.002l-10.814.04 10.812-.04zm.948-.737l1.884-7.184-1.884 7.185zm30.795-33.084l-2.664 12.324 2.664-12.325v.001z" fill="#fff"></path><path d="M157.603 9.27h-7.504c-.416 0-.829.334-.918.741l-2.664 12.325-2.664 12.325a.984.984 0 01-.917.74h-5.311c-5.255 0-4.647-3.635-3.571-8.614l.032-.15.118-.627.022-.119.24-1.277.257-1.37c.078-.413.196-1.017.274-1.396l1.211-5.917 1.212-5.917c.084-.408-.189-.743-.606-.743h-7.702a.98.98 0 00-.914.742l-1.656 7.857-1.656 7.856a.048.048 0 00-.002.012l-.154.73c-1.907 8.709-1.401 17.013 8.966 17.273.169.005.3.007.3.007h16.273c.416 0 .828-.335.916-.743l3.509-16.495 3.509-16.497c.086-.409-.184-.742-.6-.743zm29.935 26.216c.417 0 .689.334.605.742l-.728 3.561m-.728 3.563l.729-3.563-.729 3.565v-.002zm-.913.75l.003-.001a1987.044 1987.044 0 01-.003 0zm-18.305-13.203c-.006-.39.438-1.062.855-1.062l-.937-.015c-.423 4.247.082 1.077.082 1.077z" fill="#fff"></path><path d="M187.538 35.486c.417 0 .689.334.605.742l-.728 3.561-.119.58m-11.144 3.79l-1.81.006c.597 0 1.204-.004 1.81-.006zm10.535-.805l.611-2.984-.611 2.986v-.002zM63.285 30.988l1.166-5.166-1.333 5.906-1.28 6.016 1.122-5.274c.086-.408.233-1.075.325-1.482zm13.95-21.805h-8.24a.998.998 0 00-.926.738l-.782 3.45-.781 3.45c-.092.405.173.738.59.738h8.305c.416 0 .83-.333.92-.74l.755-3.449.755-3.446v-.001c.09-.407-.178-.74-.595-.74zm-1.793 11.473v-.001l-2.417 11.181 2.417-11.18zM51.504 57.704a679.87 679.87 0 00-.004 0h.004z" fill="#fff"></path><path d="M74.846 19.915h-8.305a.995.995 0 00-.925.74l-1.167 5.167-1.166 5.167c-.092.406-.238 1.073-.325 1.482l-1.12 5.274-1.12 5.273c-.11.493-.244.98-.4 1.459 0 0-1.552 4.617-4.16 4.565l-.326-.007c-1.264-.024-2.257-.041-2.257-.041h-.002a.988.988 0 00-.93.722l-.862 3.621-.86 3.62c-.097.404.164.738.578.745 1.48.017 4.792.055 6.798.055 6.516 0 9.95-3.61 12.152-13.999l2.577-11.922 2.417-11.181c.088-.407-.181-.74-.597-.74zM192.83 43.746c-.417 0-.687-.334-.599-.743l6.247-29.265" fill="#fff"></path><path d="M192.321 43.375c-.05-.204-.021-.703.068-1.112l2.965-13.89-3.124 14.631c-.088.408.182.742.599.742h.759c-.417 0-1.217-.167-1.267-.37zm8.698.204c-.226.092-.754.167-1.171.167h.759a.967.967 0 00.908-.743l.151-.742c-.084.407-.419 1.226-.647 1.318zm1.759-6.822l1.116-5.512-.002.01-1.114 5.502zM227.431 15.7l.344 1.422c.094.407-.168.738-.584.739m-23.298 13.385c.083-.408.22-1.07.306-1.473l1.192-5.581-1.349 6.322-.149.732zm-5.312-17.986l-.259 1.221-2.965 13.892 3.124-14.633.1-.48z" fill="#fff"></path><path d="M227.773 17.121l-.344-1.422-.341-1.457-.172-.737c-.675-2.62-2.656-4.133-6.955-4.133l-6.695-.008-6.165-.007h-6.937a.978.978 0 00-.914.74h-.001l-.306 1.45-.362 1.712-.101.48-3.124 14.632-2.965 13.891c-.089.409-.118.908-.068 1.112.051.204.85.371 1.267.371h6.258c.418 0 .945-.075 1.171-.167.228-.092.563-.91.646-1.318l1.112-5.503 1.114-5.502.002-.011.149-.732 1.349-6.322 1.192-5.583a.981.981 0 01.914-.739l19.692-.01c.416 0 .679-.33.584-.737z" fill="#fff"></path><path d="M253.124 4.263c-.418.003-1.099.006-1.516.006h-6.303c-.418 0-.951.281-1.186.625l-13.937 20.42c-.236.344-.504.293-.597-.113l-1.026-4.499c-.092-.407-.51-.738-.926-.738h-8.961c-.417 0-.663.327-.55.728l4.016 14.065c.114.4.122 1.06.019 1.463l-1.75 6.807c-.104.404.153.735.57.735h8.855c.417 0 .843-.33.946-.735l1.751-6.807a4.521 4.521 0 01.644-1.34L255.8 4.848c.252-.332.115-.603-.301-.6l-2.375.015zM181.938 21.88l-.001-.009c-.052.452-.469.784-.885.784h-11.36c-.393 0-.593-.267-.535-.596.004-.01.005-.019.01-.027l-.007.004.006-.039.052-.193c1.086-2.885 3.295-4.778 7.449-4.778 4.676 0 5.588 2.285 5.271 4.854zm-3.333-13.113c-14.582 0-18.037 8.851-19.975 17.784-1.939 9.105-1.772 17.618 13.317 17.618h1.653c.059-.002.117-.002.177-.002h.561l1.811-.007h.03c3.985-.015 7.982-.045 9.6-.058a.982.982 0 00.904-.745l.611-2.985.119-.581.729-3.56c.084-.41-.19-.744-.606-.744H173.97c-5.395 0-6.997-1.433-6.406-5.648h21.684l-.002.002.015-.002a.896.896 0 00.842-.75l-.002.003c3.219-12.145 2.296-20.324-11.497-20.324h.001zm-68.918 13.066l-.206.727v.002l-1.638 5.803-1.637 5.802c-.112.4-.546.728-.964.728h-8.666c-6.573 0-8.174-5.14-6.573-12.725 1.6-7.757 4.738-12.579 11.208-13.067 8.842-.667 10.61 5.552 8.476 12.73zm5.943 12.616s4.086-9.92 5.014-15.652C121.91 11.125 118.069 0 103.233 0c-14.75 0-21.155 10.622-23.6 22.168-2.443 11.63.759 21.83 15.425 21.747l11.571-.043 10.814-.039c.417-.004.843-.334.949-.736l1.883-7.186c.105-.403-.15-.735-.566-.737l-1.805-.01-1.805-.011c-.355-.003-.558-.232-.515-.536a.712.712 0 01.045-.17l.001.001z" fill="#fff"></path><path d="M188.652 27.808a.499.499 0 01-.85.352.498.498 0 11.85-.352z" fill="#fff"></path><path d="M2.995 14.908c-4.073 5.854-3.566 13.47-.455 19.69.074.15.152.296.228.443.05.093.095.188.146.28.029.055.06.109.09.161a23.512 23.512 0 00.459.8l.17.279c.112.18.228.36.345.539.05.076.097.152.147.227.162.242.328.482.499.72l.014.02c.027.038.057.074.085.112.148.205.3.406.454.605l.172.218a26.373 26.373 0 001.178 1.39l.023.025c.407.442.828.871 1.262 1.286.065.063.13.126.194.185.217.205.438.405.662.602.037.033.076.065.113.096.194.169.393.336.591.5l.246.195c.162.13.327.26.493.386l.264.2c.183.135.367.268.553.398.069.048.134.096.202.142.02.013.036.027.055.04.177.121.358.238.538.355.078.052.154.105.233.155.277.176.558.349.842.516l.232.131c.21.121.42.239.632.355.115.062.234.12.35.18.15.079.3.159.452.235l.105.05c.06.03.123.058.184.09a26.158 26.158 0 001.704.747c.068.028.136.054.204.08a27.809 27.809 0 001.767.614c.07.02.14.043.212.064.3.09.598.199.907.256 19.698 3.592 25.42-11.837 25.42-11.837-4.805 6.26-13.335 7.911-21.417 6.073-.306-.07-.603-.165-.902-.253a25.97 25.97 0 01-1.093-.35l-.12-.044a27.77 27.77 0 01-.765-.284c-.071-.029-.143-.055-.215-.084a25.15 25.15 0 01-.826-.344c-.056-.024-.11-.05-.166-.072a38.065 38.065 0 01-.899-.422c-.18-.088-.36-.182-.54-.274-.119-.063-.24-.123-.36-.189a20.768 20.768 0 01-.646-.363l-.218-.121c-.283-.168-.564-.34-.842-.516-.076-.05-.152-.1-.227-.152-.202-.13-.402-.262-.6-.398-.065-.044-.128-.092-.193-.135-.19-.135-.379-.271-.566-.41a41.8 41.8 0 01-.99-.772 29.037 29.037 0 01-.637-.536l-.07-.059c-.226-.2-.45-.402-.67-.608l-.188-.182a19.617 19.617 0 01-.48-.471l-.19-.188c-.2-.206-.396-.414-.59-.624l-.028-.031c-.204-.223-.404-.45-.599-.681l-.157-.187c-.146-.175-.29-.353-.43-.532-.054-.065-.106-.13-.158-.197-.17-.22-.335-.439-.498-.662C4.2 26.25 2.59 17.81 6.174 10.876" fill="#0868AC"></path><path d="M15.638 9.976c-2.945 4.239-2.785 9.913-.488 14.396.385.753.82 1.48 1.303 2.175.441.632.93 1.384 1.516 1.893.213.234.435.462.661.686.058.059.116.114.174.172.22.214.444.424.676.628.01.007.018.016.027.024l.007.006c.255.224.52.44.788.652l.18.14c.268.206.543.409.824.602l.024.019c.124.086.25.165.377.248.06.039.117.08.178.118.201.129.404.254.611.374l.087.05c.178.103.36.205.54.302.064.036.128.067.193.1.125.066.25.133.378.196.019.01.038.018.057.026.26.128.52.251.788.368.057.025.116.048.174.071.214.09.43.18.646.262.092.035.186.069.277.102.197.073.395.14.594.207l.268.086c.284.088.563.199.859.248 15.208 2.52 18.72-9.19 18.72-9.19-3.166 4.559-9.295 6.733-15.835 5.035-.377-.099-.75-.21-1.12-.332a19.629 19.629 0 01-1.523-.57c-.059-.026-.118-.049-.175-.075-.267-.116-.532-.24-.793-.368-.134-.066-.266-.135-.398-.203l-.23-.118c-.169-.092-.337-.187-.503-.284l-.12-.068a19.35 19.35 0 01-.61-.372c-.062-.04-.122-.082-.183-.123a24.109 24.109 0 01-.396-.261 22.153 22.153 0 01-.822-.602l-.185-.145c-2.863-2.26-5.132-5.35-6.211-8.852-1.13-3.633-.887-7.71 1.072-11.02" fill="#0868AC"></path><path d="M120.847 56.062l-2.421 5.513h-2.672l.219-5.01-1.967 5.01h-2.588l-.068-5.513.286-1.361h1.832l-.353 5.445 2.034-5.445h2.555l-.185 5.513 2.017-5.513h1.597l-.286 1.361zm4.217 1.632c.235-1.076.168-1.277-.386-1.277h-.841l-.538 2.521-.824 2.638h-1.563l1.277-5.983.186-.875h1.428l.185.404s.824-.487 1.63-.487c1.715 0 1.58 1.293 1.21 3.059h-1.764zm5.077-3.85c-.688 0-1.126-.202-.957-1.042.184-.84.722-1.043 1.394-1.043.673 0 1.127.202.942 1.043-.169.823-.706 1.041-1.379 1.041zm-.739 7.732h-1.547l.303-2.69.538-2.486-1.075-.237.302-1.461h2.941l-1.462 6.874zm6.706-5.416l-1.933.237-.556 2.621c-.151.723-.151.925.489.925h1.293l-.269 1.378s-1.176.353-1.681.353c-1.983 0-1.966-1.092-1.613-2.723l.538-2.572-1.076-.234.319-1.463h1.127l.639-1.732h1.53l-.371 1.732h1.883l-.319 1.478zm4.016.088c-.907 0-1.378.471-1.562 1.311l2.588-.218c.117-.572-.001-1.093-1.026-1.093zm-1.814 2.554c-.119.842.201 1.127 1.276 1.127h2.706l-.269 1.277s-1.63.453-2.84.453c-3.008 0-3.043-1.696-2.656-3.512.387-1.782 1.075-3.546 3.983-3.546 2.808 0 2.942 1.697 2.252 4.201h-4.452zm10.62 2.772h-1.546l.303-2.689 1.092-5.11-1.077-.251.32-1.463h2.942l-2.034 9.513zm5.585-5.326c-.908 0-1.379.471-1.564 1.311l2.589-.218c.117-.572 0-1.093-1.025-1.093zm-1.816 2.554c-.117.842.202 1.127 1.277 1.127h2.707l-.27 1.277s-1.631.453-2.841.453c-3.008 0-3.042-1.696-2.655-3.512.387-1.782 1.076-3.546 3.983-3.546 2.807 0 2.942 1.697 2.253 4.201h-4.454zm11.545-2.471s-1.966.017-2.504.017c-1.144 0-1.261.352-1.345.721l-.068.337 3.631.27s.017 1.159-.134 1.814c-.219 1.093-1.345 2.201-3.378 2.201-1.009 0-2.64-.385-2.64-.385l.286-1.328h2.505c1.109 0 1.261-.303 1.329-.605l.083-.436-3.563-.27s-.134-.892.05-1.781c.27-1.212 1.378-2.253 3.412-2.253 1.008 0 2.638.369 2.638.369l-.302 1.329zm6.758 0s-1.966.017-2.505.017c-1.142 0-1.26.352-1.344.721l-.068.337 3.631.27s.017 1.159-.134 1.814c-.218 1.093-1.345 2.201-3.378 2.201-1.009 0-2.639-.385-2.639-.385l.286-1.328h2.504c1.109 0 1.26-.303 1.329-.605l.083-.436-3.563-.27s-.134-.892.05-1.781c.27-1.212 1.378-2.253 3.413-2.253 1.007 0 2.637.369 2.637.369l-.302 1.329zm2.116 6.338h-1.344l.05-1.01c-.488-.031-.74-.384-.622-.974.185-.84.706-1.041 1.395-1.041.672 0 1.125.2.941 1.04l-.42 1.985zm8.991-6.27c-1.008 0-1.361.605-1.597 1.715-.235 1.11-.168 1.764.84 1.764h1.395l.774-3.478h-1.412zm2.303 4.285l-.186.892-1.411-.017-.202-.437s-1.245.537-2.084.537c-2.152 0-2.253-1.764-1.866-3.546.386-1.815 1.227-3.53 3.362-3.53.774 0 1.815.387 1.815.387l.857-2.908h1.547l-1.832 8.622zm5.564-4.353c-1.311 0-1.732.738-1.966 1.814-.219 1.093-.117 1.833 1.175 1.833 1.346 0 1.749-.723 1.984-1.833.236-1.042.168-1.814-1.193-1.814zm-1.143 5.345c-2.773 0-2.992-1.73-2.622-3.53.387-1.798 1.362-3.513 4.135-3.513 2.756 0 3.009 1.715 2.621 3.513-.386 1.832-1.361 3.53-4.134 3.53zm15.734-.102l.303-2.656.151-.756c.219-1.008.354-1.747-.706-1.747h-.823c.034.52-.068 1.11-.202 1.73l-.723 3.43h-1.563l.303-2.657.151-.756c.219-1.008.352-1.747-.705-1.747h-.673l-1.11 5.16h-1.799l1.463-6.874h1.411l.219.42s.959-.505 1.732-.505c.587 0 1.025.27 1.176.605.336-.185 1.294-.605 1.984-.605 2.15 0 2.084 1.747 1.697 3.53l-.723 3.429h-1.563zm7.144-5.243c-1.312 0-1.732.738-1.966 1.814-.219 1.093-.117 1.833 1.176 1.833 1.344 0 1.749-.723 1.984-1.833.234-1.042.167-1.814-1.194-1.814zm-1.143 5.345c-2.775 0-2.992-1.73-2.622-3.53.386-1.798 1.361-3.513 4.135-3.513 2.757 0 3.008 1.715 2.621 3.513-.386 1.832-1.361 3.53-4.134 3.53zm8.805-3.982c.234-1.076.168-1.277-.386-1.277h-.842l-.538 2.521-.824 2.638h-1.562l1.277-5.983.185-.875h1.429l.184.404s.824-.487 1.631-.487c1.714 0 1.579 1.293 1.21 3.059h-1.764zm6.02-1.447c-.907 0-1.378.472-1.562 1.312l2.587-.218c.118-.572 0-1.093-1.025-1.093zm-1.815 2.555c-.117.842.201 1.127 1.277 1.127h2.706l-.269 1.277s-1.63.453-2.84.453c-3.008 0-3.042-1.696-2.657-3.512.388-1.782 1.077-3.546 3.984-3.546 2.806 0 2.942 1.697 2.252 4.201h-4.453zm5.964 2.875c-.707 0-1.143-.202-.958-1.025.167-.842.688-1.043 1.395-1.043.655 0 1.109.2.941 1.043-.186.806-.722 1.025-1.378 1.025z" fill="#fff"></path><path d="M26.271 6.291c-1.736 2.555-1.906 5.73-.702 8.552 1.271 2.995 3.875 5.345 6.913 6.46.125.046.25.088.377.131.055.017.11.036.167.052.179.056.356.122.541.157 8.398 1.622 10.675-4.31 11.282-5.183-1.995 2.873-5.349 3.563-9.462 2.564a12.19 12.19 0 01-2.177-.798 12.227 12.227 0 01-2.073-1.265C27.455 14.168 25.168 8.84 27.57 4.5" fill="#0868AC"></path></g><defs><clipPath id="prefix__clip0_1_214"><path fill="#fff" d="M0 0h256v62.669H0z"></path></clipPath></defs></svg>`;
}, "/home/runner/work/portfolio/portfolio/src/components/icons/Jquery.astro", void 0);

const $$Astro$6 = createAstro();
const $$NodeJS = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$NodeJS;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 256 292" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="256" height="292"><defs><linearGradient id="a" x1="68.188%" x2="27.823%" y1="17.487%" y2="89.755%"><stop offset="0%" stop-color="#41873F"></stop><stop offset="32.88%" stop-color="#418B3D"></stop><stop offset="63.52%" stop-color="#419637"></stop><stop offset="93.19%" stop-color="#3FA92D"></stop><stop offset="100%" stop-color="#3FAE2A"></stop></linearGradient><linearGradient id="c" x1="43.277%" x2="159.245%" y1="55.169%" y2="-18.306%"><stop offset="13.76%" stop-color="#41873F"></stop><stop offset="40.32%" stop-color="#54A044"></stop><stop offset="71.36%" stop-color="#66B848"></stop><stop offset="90.81%" stop-color="#6CC04A"></stop></linearGradient><linearGradient id="f" x1="-4.389%" x2="101.499%" y1="49.997%" y2="49.997%"><stop offset="9.192%" stop-color="#6CC04A"></stop><stop offset="28.64%" stop-color="#66B848"></stop><stop offset="59.68%" stop-color="#54A044"></stop><stop offset="86.24%" stop-color="#41873F"></stop></linearGradient><path id="b" d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z"></path><path id="e" d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z"></path></defs><path fill="url(#a)" d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z"></path><mask id="d" fill="#fff"><use xlink:href="#b"></use></mask><path fill="url(#c)" d="M249.485 67.8 134.65 1.833c-1.086-.542-2.443-1.085-3.529-1.357L2.443 220.912c1.086 1.357 2.444 2.443 3.8 3.258l114.834 65.968c3.258 1.9 7.059 2.443 10.588 1.357L252.47 70.515c-.815-1.086-1.9-1.9-2.986-2.714Z" mask="url(#d)"></path><mask id="g" fill="#fff"><use xlink:href="#e"></use></mask><path fill="url(#f)" d="M249.756 223.898c3.258-1.9 5.701-5.158 6.787-8.687L130.579.204c-3.258-.543-6.787-.272-9.773 1.628L6.786 67.53l122.979 224.238c1.628-.272 3.529-.815 5.158-1.63l114.833-66.239Z" mask="url(#g)"></path></svg>`;
}, "/home/runner/work/portfolio/portfolio/src/components/icons/NodeJS.astro", void 0);

const $$Astro$5 = createAstro();
const $$Php = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Php;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" viewBox="0 -1 100 50"><path fill="#fff" d="M7.579 10.123h14.204c4.169.035 7.19 1.237 9.063 3.604 1.873 2.367 2.491 5.6 1.855 9.699-.247 1.873-.795 3.71-1.643 5.512a16.385 16.385 0 01-3.392 4.876c-1.767 1.837-3.657 3.003-5.671 3.498a26.11 26.11 0 01-6.254.742h-6.36l-2.014 10.07H0l7.579-38.001m6.201 6.042l-3.18 15.9c.212.035.424.053.636.053h.742c3.392.035 6.219-.3 8.48-1.007 2.261-.742 3.781-3.321 4.558-7.738.636-3.71 0-5.848-1.908-6.413-1.873-.565-4.222-.83-7.049-.795-.424.035-.83.053-1.219.053h-1.113l.053-.053M41.093 0h7.314L46.34 10.123h6.572c3.604.071 6.289.813 8.056 2.226 1.802 1.413 2.332 4.099 1.59 8.056l-3.551 17.649h-7.42L54.979 21.2c.353-1.767.247-3.021-.318-3.763s-1.784-1.113-3.657-1.113l-5.883-.053-4.346 21.783h-7.314L41.093 0M70.412 10.123h14.204c4.169.035 7.19 1.237 9.063 3.604 1.873 2.367 2.491 5.6 1.855 9.699-.247 1.873-.795 3.71-1.643 5.512a16.385 16.385 0 01-3.392 4.876c-1.767 1.837-3.657 3.003-5.671 3.498a26.11 26.11 0 01-6.254.742h-6.36L70.2 48.124h-7.367l7.579-38.001m6.201 6.042l-3.18 15.9c.212.035.424.053.636.053h.742c3.392.035 6.219-.3 8.48-1.007 2.261-.742 3.781-3.321 4.558-7.738.636-3.71 0-5.848-1.908-6.413-1.873-.565-4.222-.83-7.049-.795-.424.035-.83.053-1.219.053H76.56l.053-.053"></path></svg>`;
}, "/home/runner/work/portfolio/portfolio/src/components/icons/Php.astro", void 0);

const $$Astro$4 = createAstro();
const $$Laravel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Laravel;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 264"> <path d="m255.9 59.6.1 1.1v56.6c0 1.4-.8 2.8-2 3.5l-47.6 27.4v54.2c0 1.4-.7 2.8-2 3.5l-99.1 57-.7.4-.3.1c-.7.2-1.4.2-2.1 0l-.4-.1-.6-.3L2 206c-1.3-.8-2.1-2.2-2.1-3.6V32.7l.1-1.1.2-.4.3-.6.2-.4.4-.5.4-.3c.2 0 .3-.2.5-.3L51.6.6c1.3-.8 2.9-.8 4.1 0L105.3 29c.2 0 .3.2.4.3l.5.3c0 .2.2.4.3.5l.3.4.3.6.1.4.2 1v106l41.2-23.7V60.7c0-.4 0-.7.2-1l.1-.4.3-.7.3-.3.3-.5.5-.3.4-.4 49.6-28.5c1.2-.7 2.8-.7 4 0L254 57l.5.4.4.3.4.5.2.3c.2.2.2.5.3.7l.2.3Zm-8.2 55.3v-47l-17.3 10-24 13.7v47l41.3-23.7Zm-49.5 85v-47l-23.6 13.5-67.2 38.4v47.5l90.8-52.3ZM8.2 39.9V200l90.9 52.3v-47.5l-47.5-26.9-.4-.4c-.2 0-.3-.1-.4-.3l-.4-.4-.3-.4-.2-.5-.2-.5v-.6l-.2-.5V63.6L25.6 49.8l-17.3-10Zm45.5-31L12.4 32.8l41.3 23.7 41.2-23.7L53.7 8.9ZM75 157.3l24-13.8V39.8l-17.3 10-24 13.8v103.6l17.3-10ZM202.3 36.9 161 60.7l41.3 23.8 41.3-23.8-41.3-23.8Zm-4.1 54.7-24-13.8-17.3-10v47l24 13.9 17.3 10v-47Zm-95 106 60.6-34.5 30.2-17.3-41.2-23.8-47.5 27.4L62 174.3l41.2 23.3Z" fill="#FF2D20"></path> </svg>`;
}, "/home/runner/work/portfolio/portfolio/src/components/icons/Laravel.astro", void 0);

const $$Astro$3 = createAstro();
const $$Sqlite = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Sqlite;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 512 228"> <defs> <linearGradient x1="57.7%" y1="2%" x2="57.7%" y2="94.4%" id="a"> <stop stop-color="#97D9F6" offset="0%"></stop> <stop stop-color="#0F80CC" offset="92%"></stop> <stop stop-color="#0F80CC" offset="100%"></stop> </linearGradient> </defs> <path d="M194.5 112c-6.8 0-12.3 2-16.6 6.1-4.3 4-6.4 9.3-6.4 15.8a23.3 23.3 0 0 0 6.5 17c2.2 2.4 6.6 5.6 13.2 9.7 8 5 13.4 9 16 12 2.5 3.2 3.7 6.4 3.7 9.9 0 4.5-1.5 8.2-4.6 11a18 18 0 0 1-12.4 4 20.1 20.1 0 0 1-20.3-20.8h-2.5v22.9h2.5c.8-2.2 1.8-3.3 3.2-3.3.7 0 2.3.4 4.7 1.3 6 2.1 10.9 3.2 14.7 3.2a23 23 0 0 0 17-7 23.2 23.2 0 0 0 2.4-30.8c-3-4-9-8.6-18-14a59.5 59.5 0 0 1-15-11.3c-2.3-3-3.5-6.1-3.5-9.7 0-3.8 1.5-7 4.2-9.2 2.8-2.3 6.5-3.5 11-3.5 5.2 0 9.5 1.5 12.9 4.6 3.3 3 5.3 7.4 5.9 12.8h2.5V113h-2.3a6 6 0 0 1-.8 2c-.3.3-.7.4-1.4.4a17 17 0 0 1-4.3-1 38.6 38.6 0 0 0-12.3-2.3Zm82.4 0a44.6 44.6 0 0 0-39 22.2 43.5 43.5 0 0 0 4.5 50.2c7 8.2 15.3 13.3 25 15.3 2.1 1.1 5.3 4.1 9.4 9 4.7 5.3 8.6 9.3 11.9 11.6A35.6 35.6 0 0 0 311 227c5.3 0 10-.9 14-2.7l-.9-2.3a20.1 20.1 0 0 1-18.7-2.3c-3.6-2.5-8.3-7.1-13.8-14a47.6 47.6 0 0 0-5.4-6.1c10.6-2 19.3-7.2 26-15.4a42.8 42.8 0 0 0 10.2-28 42 42 0 0 0-13.2-31.4 44.8 44.8 0 0 0-32.4-12.9Zm51.4 0 .1 2.7c5.5 0 8.6 1.7 9.3 5 .3 1.1.4 3.3.4 6.4v59.6c0 4.5-.7 7.3-2 8.6-1.1 1.2-3.2 2-6.2 2.3l-.1 2.6h55.1l1.4-13.5h-2.5c-.7 3.7-2.3 6.3-5 7.8a30.5 30.5 0 0 1-14 2.3h-5.2c-6 0-9.5-2.2-10.5-6.6-.2-.9-.2-1.8-.2-2.8l.2-60.3c0-4.4.5-7.4 1.7-8.9 1.2-1.4 3.3-2.3 6.4-2.5l-.2-2.7h-28.7Zm-50.6 3.3a28 28 0 0 1 23 11.2 48 48 0 0 1 8.8 30.5c0 12.3-3 22.1-8.9 29.5a29 29 0 0 1-23.7 11c-9.5 0-17.2-3.8-23-11.4a47.1 47.1 0 0 1-8.9-29.6c0-12.5 3-22.5 9-30 5.9-7.5 13.8-11.2 23.7-11.2Zm126.9 12.8c-1.3 0-2.4.5-3.1 1.4-.8 1-1 2-.8 3.4a6 6 0 0 0 2.2 3.4c1.1 1 2.4 1.4 3.7 1.4 1.3 0 2.3-.5 3-1.4.7-1 1-2.1.7-3.4-.3-1.4-1-2.5-2-3.4a5.6 5.6 0 0 0-3.7-1.4Zm36.4 9.2c-2.3 8.8-7.3 13.5-14.9 14.3l.1 2.5h8.9l-.2 29.8c0 5.1.2 8.5.5 10.2 1 4.2 3.6 6.3 8.1 6.3 6.6 0 13.4-4 20.6-12l-2.2-1.8c-5.2 5.2-9.7 7.8-13.7 7.8-2.5 0-4-1.4-4.6-4.2l-.2-2.4v-33.7h13.7l-.2-4h-13.4v-12.8H441Zm52.4 11.2c-7.6 0-13.7 3.7-18.5 11a31.3 31.3 0 0 0-4.4 24.4 21 21 0 0 0 6.7 12.2 19 19 0 0 0 12.7 4.3c4.7 0 11.4-1.2 14.1-3.7 2.8-2.4 5.4-6.3 7.8-11.7l-2-2a20.6 20.6 0 0 1-17.1 10.5c-8 0-12.8-4.3-14.6-13l-.5-3.5a46 46 0 0 0 21.4-8c4.8-3.8 9.6-7.9 8.7-12.1a9.9 9.9 0 0 0-3.9-6c-2-1.6-7.4-2.4-10.4-2.4Zm-83 .3-16.3 3.8v2.9l5.7-.7c2.7 0 4.3 1.2 4.8 3.7.2.8.3 2 .4 3.4l-.2 26.8c0 3.7-.5 5.8-1.3 6.5-.8.6-3 1-6.6 1v2.5h25.9v-2.5c-3.7 0-6-.3-7-.9-1-.5-1.8-1.5-2.1-3-.2-1.2-.3-3.1-.4-5.7l.1-37.8h-3Zm78.9 5c1.6 0 3 .6 4.6 1.8a7 7 0 0 1 2.8 4c1.4 7-4.9 12-19 14.7a25 25 0 0 1 2.7-14.1c2.3-4.3 5.3-6.4 8.9-6.4Z" fill="#003B57"></path> <path d="M157.9 10H17C7.7 10 0 17.7 0 27v155.2c0 9.4 7.7 17.2 17.1 17.2h92.7c-1-46.2 14.7-135.7 48-189.5Z" fill="#0F80CC"></path> <path d="M152.8 15H17C10.5 15 5 20.4 5 27V171c30.7-11.8 76.8-22 108.7-21.5a989.7 989.7 0 0 1 39-134.5Z" fill="url(#a)"></path> <path d="M190.7 4.9c-9.6-8.6-21.3-5.2-32.8 5a81.4 81.4 0 0 0-5.1 5c-19.7 21-38 59.7-43.7 89.2a81.5 81.5 0 0 1 5.8 17.7l.8 3.5-.9-2.8a173.8 173.8 0 0 0-.8-2 172 172 0 0 0-6.4-12.1l-3.5 11c4.5 8.2 7.3 22.4 7.3 22.4l-1.4-4.1c-1-2.9-6-11.7-7.2-13.7-2 7.5-2.8 12.6-2.1 13.8 1.4 2.4 2.7 6.5 4 11a257.6 257.6 0 0 1 4.6 25c-.3 8.6-.1 17.6.5 25.7a91 91 0 0 0 4.7 24.8l1.5-.8a111 111 0 0 1-3.9-37c.9-22.5 6-49.5 15.6-77.7 16-42.5 38.4-76.6 58.8-93-18.6 17-43.8 71.4-51.4 91.6a365.7 365.7 0 0 0-18 64c6.2-19 26.4-27.2 26.4-27.2s9.8-12.2 21.4-29.6a210 210 0 0 0-22.1 6l-7.1 3s18.1-11 33.7-16C191 73.8 214.2 25.9 190.7 4.9" fill="#003B57"></path> </svg>`;
}, "/home/runner/work/portfolio/portfolio/src/components/icons/Sqlite.astro", void 0);

const $$Astro$2 = createAstro();
const $$Mysql = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Mysql;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 252"> <path d="M236 194c-14 0-25 1-34 5-3 1-7 1-7 4l3 6c2 3 5 8 9 11l11 8 21 10 11 9 6 4-3-6-5-5c-5-7-11-13-18-18-6-3-18-9-20-15h-1l12-3 18-3 8-2v-2l-9-10c-8-8-18-15-28-22l-18-8c-2-1-6-2-7-4l-7-13-15-30-8-20c-18-30-38-48-68-65-6-4-14-5-22-7l-13-1-8-6C34 5 8-9 1 9c-5 11 7 22 11 28l9 13 3 9c3 8 5 17 9 24l6 10c2 2 4 3 5 6-3 4-3 9-4 13-7 20-4 44 5 59 2 4 9 14 18 10 8-3 6-13 8-22l1-4 8 14c5 9 14 18 22 24 4 3 8 8 13 10l-4-4-9-10c-8-10-14-21-20-32l-7-17-3-6c-3 4-7 7-9 12-3 7-3 17-4 26h-1c-6-1-8-7-10-12-5-12-6-32-1-46 1-4 6-15 4-19-1-3-4-5-6-7l-7-12-10-30-9-13c-3-5-7-8-10-14-1-2-2-5 0-7l2-2c2-2 9 0 11 1 6 3 12 5 17 9l8 6h4c6 1 12 0 17 2 9 3 18 7 25 12 23 14 42 35 54 59 3 4 3 8 5 12l12 26c4 8 7 16 12 23 3 4 14 6 18 8l12 4 18 12c2 2 11 7 12 10Z" fill="#00546B"></path> <path d="m58 43-7 1 6 7 4 9v-1c3-1 4-4 4-8l-2-4-5-4Z" fill="#00546B"></path> </svg>`;
}, "/home/runner/work/portfolio/portfolio/src/components/icons/Mysql.astro", void 0);

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const TAGS = {
    HTML: {
      name: "HTML",
      class: "text-white border border-red-500",
      icon: $$Html
    },
    CSS: {
      name: "CSS",
      class: "text-white border border-blue-500",
      icon: $$Css
    },
    JS: {
      name: "JavaScript",
      class: "text-white border border-yellow-500",
      icon: $$Js
    },
    BOOTSTRAP: {
      name: "Bootstrap",
      class: "text-white border border-purple-500",
      icon: $$Bootstrap
    },
    JQUERY: {
      name: "jQuery",
      class: "text-white border border-blue-500",
      icon: $$Jquery
    },
    NODEJS: {
      name: "Node.js",
      class: "text-white border border-green-500",
      icon: $$NodeJS
    },
    PHP: {
      name: "PHP",
      class: "text-white border border-blue-500",
      icon: $$Php
    },
    LARAVEL: {
      name: "Laravel",
      class: "text-white border border-red-500",
      icon: $$Laravel
    },
    SQLITE: {
      name: "SQLite",
      class: "text-white border border-blue-500",
      icon: $$Sqlite
    },
    MYSQL: {
      name: "MySQL",
      class: "text-white border border-blue-500",
      icon: $$Mysql
    }
  };
  const PROJECTS = [
    {
      title: "JAHNISSI - Ministerio de J\xF3venes",
      description: "Website del ministerio de j\xF3venes JAHNISSI de la Iglesia Fortaleza, con informaci\xF3n de eventos, servicios y videos",
      link: "https://jahnissi.netlify.app",
      github: "https://github.com/dedasema/website-jahnissi",
      image: "/projects/jahnissi.webp",
      tags: [TAGS.HTML, TAGS.CSS, TAGS.JS]
    },
    {
      title: "FORTALEZA - Iglesia Evang\xE9lica Anabautista (En desarrollo)",
      description: "Website de la Iglesia Cristiana Fortaleza, con informaci\xF3n de la iglesia, eventos y contacto",
      link: "https://fortaleza.vercel.app",
      github: "https://github.com/dedasema/website-fortaleza",
      image: "/projects/fortaleza.webp",
      tags: [TAGS.JQUERY, TAGS.BOOTSTRAP, TAGS.NODEJS, TAGS.SQLITE]
    },
    {
      title: "PCSTOCK - Sistema de gesti\xF3n Inventario",
      description: "Sistema de gesti\xF3n de inventario de productos, con registro de productos, categor\xEDas, proveedores, ventas, reportes, etc",
      link: "https://pcstock.vercel.app",
      github: "https://github.com/dedasema/pcstock",
      image: "/projects/inventario.webp",
      tags: [TAGS.PHP, TAGS.LARAVEL, TAGS.MYSQL]
    }
  ];
  return renderTemplate`${PROJECTS.map(({ title, description, tags, image }) => renderTemplate`${maybeRenderHead()}<article class="mt-24"><h3 class="text-2xl font-semibold text-yellow-200 mb-2">${title}</h3><p class="text-lg mb-4 text-pretty">${description}</p><ul class="flex gap-x-4 flex-wrap">${tags.map((tag) => renderTemplate`<li><span${addAttribute(`flex gap-x-2 rounded-full text-xs ${tag.class} py-2 px-3`, "class")}>${renderComponent($$result, "tag.icon", tag.icon, { "class": "size-4" })}${tag.name}</span></li>`)}</ul><img class="rounded shadow-2xl shadow-white/10 mt-5"${addAttribute(image, "src")}${addAttribute(`Foto del proyecto ${image}`, "alt")}></article>`)}`;
}, "/home/runner/work/portfolio/portfolio/src/components/Projects.astro", void 0);

const $$Astro$1 = createAstro();
const $$ProfileCheck = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProfileCheck;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path><path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path><path d="M15 19l2 2l4 -4"></path></svg>`;
}, "/home/runner/work/portfolio/portfolio/src/components/icons/ProfileCheck.astro", void 0);

const $$AboutMe = createComponent(($$result, $$props, $$slots) => {
  const personalImageAlt = "Dennis Sejas";
  return renderTemplate`${maybeRenderHead()}<article class="flex flex-col items-center justify-center gap-8  text-gray-300 md:flex-row"> <div class="[&>p]:mb-4 [&>p>strong]:text-yellow-500  [&>p>strong]:font-normal [&>p>strong]:font-mono text-pretty order-2 md:order-1"> <p>
Me llamo Dennis. Empecé en la
      programación en la pandemia, tenía 18 años. Actualmente estoy <strong>estudiando para convertirme en fullstack además de la carrera de Ingeniería en Sistemas</strong>.
</p> <p>
Me gusta aprender cosas nuevas, me apasiona la tecnología y la programación.
      Me encanta la música, toco el piano.
</p></div> <img width="200" height="200" src="/Foto.jpg"${addAttribute(personalImageAlt, "alt")} class="order-1 object-cover w-64 h-full p-1 md:order-2 rotate-3 lg:p-2 lg:w-64 aspect-square rounded-2xl bg-black/20 dark:bg-yellow-500/5 ring-1 ring-black/70 dark:ring-white/20 " style="object-position: 50% 50%"> </article>`;
}, "/home/runner/work/portfolio/portfolio/src/components/AboutMe.astro", void 0);

const $$Astro = createAstro();
const $$Curriculum = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Curriculum;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-user"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path></svg>`;
}, "/home/runner/work/portfolio/portfolio/src/components/icons/Curriculum.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Portfolio de Dennis - Desarrollador y Programador Web, estudiante de Ingenier\xEDa en Sistemas", "description": "Contrata a Dennis para craer tu sitio web, blog, tienda online, sistema o cualquier proyecto web que tengas en mente" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="px-4"> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "py-24" }, { "default": ($$result3) => renderTemplate` <div class="flex flex-row mb-4"> <img class="rounded-full size-12" src="https://avatars.githubusercontent.com/u/112269448?v=4" alt="Dennis Sejas"> <div class="flex justify-center items-center ml-5"> <a href="https://www.linkedin.com/in/dennis-sejas/" target="_blank" rel="noopener" class="flex justify-center items-center"> ${renderComponent($$result3, "Badge", $$Badge, {}, { "default": ($$result4) => renderTemplate`Disponible para trabajar` })} </a> </div> </div> <h1 class="text-white text-3xl md:text-4xl lg:text-5xl font-bold flex flex-row gap-x-4 pb-6 lg:pb-10">
Hey, soy Dennis
</h1> <h2 class="text-xl lg:text-2xl opacity-80 text-wrap max-w-[700px]">
Desarrollador Web. Santa Cruz Bolivia, apasionado por la tecnología,
        aprendiendo cada día para seguir mejorando.
</h2> <nav class="flex gap-4 mt-8 flex-wrap"> ${renderComponent($$result3, "SocialPill", $$SocialPill, { "href": "https://www.linkedin.com/in/dennis-sejas/" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "LinkedInIcon", $$LinkedIn, { "class": "size-4 md:size-6" })}
LinkedIn
` })} ${renderComponent($$result3, "SocialPill", $$SocialPill, { "href": "https://github.com/dedasema" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "GitHubIcon", $$GitHub, { "class": "size-4 md:size-6" })}
GitHub
` })} ${renderComponent($$result3, "SocialPill", $$SocialPill, { "href": "" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "MailIcon", $$Mail, { "class": "size-4 md:size-6", "href": "mailto:dedasema734012@gmail.com" })}
Contáctame
` })} ${renderComponent($$result3, "SocialPill", $$SocialPill, { "href": "https://cv-dennis-sejas.netlify.app" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "CurriculumIcon", $$Curriculum, { "class": "size-4 md:size-6" })}
CV
` })} </nav> ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "proyectos" }, { "default": ($$result3) => renderTemplate` <h2 class="text-4xl font-semibold mb-8 flex gap-x-3 items-center"> ${renderComponent($$result3, "CodeIcon", $$Code, { "class": "size-8" })}
Proyectos
</h2> ${renderComponent($$result3, "Projects", $$Projects, {})} ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "sobre-mi" }, { "default": ($$result3) => renderTemplate` <h2 class="text-4xl font-semibold mb-8 flex gap-x-3 items-center"> ${renderComponent($$result3, "ProfileCheck", $$ProfileCheck, { "class": "size-8" })}
Sobre mí
</h2> ${renderComponent($$result3, "AboutMe", $$AboutMe, {})} ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "contacto" }, { "default": ($$result3) => renderTemplate` <h2 class="text-4xl font-semibold mb-8 flex gap-x-3 items-center"> ${renderComponent($$result3, "MailIcon", $$Mail, { "class": "size-8" })}
Contacto
</h2> <div class="flex flex-col gap-4"> <p class="text-xl">
Si tienes alguna pregunta o quieres trabajar conmigo, no dudes en
          contactarme.
</p> ${renderComponent($$result3, "SocialPill", $$SocialPill, { "href": "mailto:dedasema734012@gmail.com" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "MailIcon", $$Mail, { "class": "size-4" })}
Contáctame
` })} </div> ` })} </main> ` })}`;
}, "/home/runner/work/portfolio/portfolio/src/pages/index.astro", void 0);

const $$file = "/home/runner/work/portfolio/portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
