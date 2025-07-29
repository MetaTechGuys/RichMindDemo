'use client';

export default function RichMindStrategySection() {
  return (
    <div className="size-full py-4">
      <div className="2xs:px-8 py-20xs:px-12 flex size-full flex-col justify-center overflow-hidden bg-black p-4 py-20 sm:rounded-2xl md:px-24">
        <div className="font-display z-10 flex flex-col gap-5 text-xl text-white">
          <h4 className="xs:text-5xl sm:text-6x text-3xl">
            The Three Pillars of RichMind Strategy
          </h4>
        </div>
        <div className="mt-15 flex w-full flex-col gap-20 lg:mt-15 xl:flex-row xl:gap-8 2xl:gap-30 [&>div]:w-full">
          <div className="font-display flex flex-col gap-5 text-white">
            <h5 className="xs:text-3xl text-2xl sm:text-4xl">Innovation</h5>
            <p className="xl:min-h-16 xl:text-xl 2xl:text-2xl">
              LEADING THE CHARGE IN DEVELOPING NEW TECHNOLOGIES AND METHODOLOGIES
            </p>
            <p className="xl:min-h-16 xl:text-xl 2xl:text-2xl">
              We empower our teams to deliver high quality results with the most advanced resources
              available.
            </p>
            <ul className="custom-checklist leading-10 xl:text-xl 2xl:text-2xl">
              <li>Advancing with future tech.</li>
              <li>Utilizing cutting-edge tools.</li>
              <li>Progress through constant improvement.</li>
              <li>Crafting a creative legacy.</li>
            </ul>
          </div>
          <div className="font-display flex flex-col gap-5 text-white">
            <h5 className="xs:text-3xl text-2xl sm:text-4xl">Collaboration</h5>
            <p className="xl:min-h-16 xl:text-xl 2xl:text-2xl">
              REAL COLLABORATION RESULTS IN A STRONGER, MORE COHESIVE ORGANIZATION
            </p>
            <p className="xl:min-h-16 xl:text-xl 2xl:text-2xl">
              Collaboration is vital for achieving long lasting achievements. We value individual
              contributions.
            </p>
            <ul className="custom-checklist leading-10 xl:text-xl 2xl:text-2xl">
              <li>Succeeding together.</li>
              <li>Building strong partnerships.</li>
              <li>Joint efforts yield results.</li>
              <li>Empowering team excellence</li>
            </ul>
          </div>
          <div className="font-display flex flex-col gap-5 text-white">
            <h5 className="xs:text-3xl text-2xl sm:text-4xl">Sustainability</h5>
            <p className="xl:min-h-16 xl:text-xl 2xl:text-2xl">
              WE BELIVE THAT LONG-TERMSUCCESS IS ROOTED IN SUSTAINABLE PRACTICES
            </p>
            <p className="xl:min-h-16 xl:text-xl 2xl:text-2xl">
              Every project at RichMind is approached with a focus on eco-friendly practices and
              sustainability.
            </p>
            <ul className="custom-checklist leading-10 xl:text-xl 2xl:text-2xl">
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
