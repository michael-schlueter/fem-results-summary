import data from "./data.json";

export default function Result() {
  const averageScore = Math.floor(
    data.reduce((sum, item) => sum + item.score, 0) / data.length
  );

  return (
    <section className="grid place-items-center text-center bg-gradient-to-t rounded-b-[32px] md:rounded-[32px] p-14 pt-6 pb-0 md:pt-10 from-light-royal-blue to-light-slate-blue">
      <h1 className="text-light-lavender text-lg md:text-2xl">Your Result</h1>
      <div className="w-[140px] h-[140px] md:w-[200px] md:h-[200px] my-6 mx-auto flex flex-col justify-center items-center rounded-full bg-gradient-to-t from-persian-blue to-violet-blue">
        <span className="text-white text-5.5xl md:text-7xl font-extrabold">
          {averageScore}
        </span>
        <span className="text-light-lavender/50 md:text-lg">of 100</span>
      </div>
      <h2 className="text-white text-2xl md:text-3.5xl font-bold">Great </h2>
      <p className="max-w-[260px] md:max-w-none text-light-lavender md:text-lg mt-2 md:mt-[14px] mx-auto mb-10">
        Your performance exceeds 65% of the people conducting the test here!
      </p>
    </section>
  );
}
