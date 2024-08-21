import logo from "./assets/logo-with-shadow.png";
import Button from "./components/Button";
import Card from "./components/Card";

const buttons = [
  {
    text: "Get Started",
    active: true,
    icon: false,
  },
  {
    text: "Why Vite?",
    active: false,
    icon: false,
  },
  {
    text: "View on GitHub",
    active: false,
    icon: false,
  },
  {
    text: "ViteConf 24!",
    active: true,
    icon: true,
  },
];

const itemsCard = [
  {
    title: "Instant Server Start",
    subtitle: "On demand file serving over native ESM, no bundling required!",
    icon: "💡",
  },
  {
    title: "Lightning Fast HMR",
    subtitle:
      "Hot Module Replacement (HMR) that stays fast regardless of app size.",
    icon: "⚡️",
  },
  {
    title: "Rich Features",
    subtitle: "Out-of-the-box support for TypeScript, JSX, CSS and more.",
    icon: "🛠️",
  },
  {
    title: "Optimized Build",
    subtitle:
      "Pre-configured Rollup build with multi-page and library mode support.",
    icon: "📦",
  },
  {
    title: "Universal Plugins",
    subtitle: "Rollup-superset plugin interface shared between dev and build.",
    icon: "🔩",
  },
  {
    title: "Fully Typed APIs",
    subtitle: "Flexible programmatic APIs with full TypeScript typing.",
    icon: "🔑",
  },
];

function App() {
  return (
    <main className="w-full h-screen flex-col p-4 gap-4">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
        <div className="max-w-[592px]">
          <h1 className="text-[56px]">Vite</h1>
          <p className="text-[56px] leading-[65px] text-[#fffff5db]">
            Next Generation Frontend Tooling
          </p>
          <p className="text-[24px] leading-[36px] pt-[12px] text-[#ebebf599]">
            Get ready for a development environment that can finally catch up
            with you.
          </p>
        </div>
        <div className="flex justify-center">
          <img className="size-[20rem]" src={logo} alt="logo-vite" />
        </div>
      </div>
      <div className="flex gap-4 pt-[32px] justify-center flex-wrap sm:justify-start">
        {buttons.map((button) => {
          return (
            <Button
              key={`${button.text}`}
              text={button.text}
              isActive={button.active}
              icon={button.icon}
            />
          );
        })}
      </div>
      <section class="grid gap-5 sm:grid-cols-3 mt-10">
        {itemsCard.map((itemCard) => {
          return (
            <Card
              key={`${itemCard.title}`}
              title={itemCard.title}
              subtitle={itemCard.subtitle}
              icon={itemCard.icon}
            />
          );
        })}
      </section>
    </main>
  );
}

export default App;
