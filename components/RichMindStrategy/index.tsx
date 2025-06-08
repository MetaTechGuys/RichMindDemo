'use client';

export default function RichMindStrategySection() {
  return (
    <div className="size-full py-4">
      <div className="flex size-full flex-col justify-center overflow-hidden rounded-2xl bg-black px-8 py-8 lg:px-32">
        <div className="font-display z-10 flex flex-col gap-5 text-xl text-white">
          <h4 className="text-4xl">The Three Pillars of RichMind Strategy</h4>
        </div>
        <div className="mt-15 flex w-full flex-col gap-20 md:flex-row md:gap-5 lg:mt-15 lg:gap-10 2xl:gap-30 [&>div]:w-full">
          <div className="font-display flex flex-col gap-5 text-lg text-white lg:gap-12">
            <h5 className="text-3xl">Innovation</h5>
            <p className="md:min-h-24">
              LEADING THE CHARGE IN DEVELOPING NEW TECHNOLOGIES AND METHODOLOGIES
            </p>
            <p className="md:min-h-24">
              We empower our teams to deliver high quality results with the most advanced resources
              available.
            </p>
            <ul className="custom-checklist leading-10">
              <li>Advancing with future tech.</li>
              <li>Utilizing cutting-edge tools.</li>
              <li>Progress through constant improvement.</li>
              <li>Crafting a creative legacy.</li>
            </ul>
          </div>
          <div className="font-display flex flex-col gap-5 text-lg text-white lg:gap-12">
            <h5 className="text-3xl">Collaboration</h5>
            <p className="md:min-h-24">
              REAL COLLABORATION RESULTS IN A STRONGER, MORE COHESIVE ORGANIZATION
            </p>
            <p className="md:min-h-24">
              Collaboration is vital for achieving long lasting achievements. We value individual
              contributions.
            </p>
            <ul className="custom-checklist leading-10">
              <li>Succeeding together.</li>
              <li>Building strong partnerships.</li>
              <li>Joint efforts yield results.</li>
              <li>Empowering team excellence</li>
            </ul>
          </div>
          <div className="font-display flex flex-col gap-5 text-lg text-white lg:gap-12">
            <h5 className="text-3xl">Sustainability</h5>
            <p className="md:min-h-24">
              WE BELIVE THAT LONG-TERMSUCCESS IS ROOTED IN SUSTAINABLE PRACTICES
            </p>
            <p className="md:min-h-24">
              Every project at RichMind is approached with a focus on eco-friendly practices and
              sustainability.
            </p>
            <ul className="custom-checklist leading-10">
              <li>Devoted to the environment.</li>
              <li>Building strong partnerships.</li>
              <li>Investing in a green future.</li>
              <li>Promoting eco-friendly practices</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
