const steps = [
  ["Apply Online", "Fill out the application form below with your details and motivation."],
  ["Get Selected", "Our team reviews your application and reaches out within 3-5 business days."],
  ["Onboarding", "Attend a virtual orientation session and receive your ambassador kit."],
  ["Start Representing", "Share interview resources, organize practice groups, and help peers prepare."],
];

export default function ApplicationSteps() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8" aria-labelledby="amb-process-title">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-[#fa7405]">Process</p>
        <h2 id="amb-process-title" className="mt-5 text-center text-[clamp(2rem,4vw,3.2rem)] font-semibold tracking-[-0.045em] text-[#252525]">How It Works</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(([title, description], index) => (
            <article key={title} className="rounded-[22px] border border-[#eadfd7] p-7 shadow-[0_6px_24px_rgba(30,46,80,0.035)]">
              <span className="text-[32px] font-medium tracking-[-0.05em] text-[#ffd5ad]">0{index + 1}</span>
              <h3 className="mt-5 text-[19px] font-semibold text-[#252525]">{title}</h3>
              <p className="mt-4 text-[14px] leading-[1.85] text-[#707070]">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
