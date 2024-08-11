import clsx from "clsx";
import data from "./data.json";

function App() {
  const averageScore = Math.floor(
    data.reduce((sum, item) => sum + item.score, 0) / data.length
  );

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <main className="grid grid-cols-[minmax(auto, 736px)] md:grid-cols-[minmax(auto,368px)_minmax(auto,368px)] md:grid-rows-[1fr] md:rounded-[32px] md:shadow-custom">
        <section className="grid place-items-center text-center bg-gradient-to-t rounded-b-[32px] md:rounded-[32px] p-14 pt-6 pb-0 md:pt-10 from-light-royal-blue to-light-slate-blue">
          <h1 className="text-light-lavender text-lg md:text-2xl">Your Result</h1>
          <div className="w-[140px] h-[140px] md:w-[200px] md:h-[200px] my-6 mx-auto flex flex-col justify-center items-center rounded-full bg-gradient-to-t from-persian-blue to-violet-blue">
            <span className="text-white text-5.5xl md:text-7xl font-extrabold">
              {averageScore}
            </span>
            <span className="text-light-lavender/50 md:text-lg">of 100</span>
          </div>
          <h2 className="text-white text-2xl md:text-3.5xl font-bold">
            Great{" "}
          </h2>
          <p className="max-w-[260px] md:max-w-none text-light-lavender md:text-lg mt-2 md:mt-[14px] mx-auto mb-10">
            Your performance exceeds 65% of the people conducting the test here!
          </p>
        </section>
        <section className="p-6 md:p-10">
          <h3 className="text-lg md:text-2xl font-bold text-dark-gray-blue">
            Summary
          </h3>
          <ul className="grid gap-4 my-6 mx-0 md:mb-10">
            {data.map((item, index) => (
              <li
                key={index}
                className={clsx(
                  "flex items-center justify-between rounded-xl p-[14px] md:text-lg",
                  {
                    "bg-light-red/5": item.category === "Reaction",
                    "bg-organgey-yellow/5": item.category === "Memory",
                    "bg-green-teal/5": item.category === "Verbal",
                    "bg-cobalt-blue/5": item.category === "Visual",
                  }
                )}
              >
                <div className="flex items-center">
                  <img
                    className="inline mr-3"
                    src={item.icon}
                    alt="icon reaction result"
                  />
                  <span
                    className={clsx({
                      "text-light-red": item.category === "Reaction",
                      "text-organgey-yellow": item.category === "Memory",
                      "text-green-teal": item.category === "Verbal",
                      "text-cobalt-blue": item.category === "Visual",
                    })}
                  >
                    {item.category}
                  </span>
                </div>
                <div>
                  <span className="font-bold text-dark-gray-blue mr-[8px]">
                    {item.score}
                  </span>
                  <span className="font-bold text-dark-gray-blue/50">
                    / 100
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <button className="rounded-[128px] bg-dark-gray-blue text-white font-bold w-full py-3 px-0 md:text-lg outline-none border-none cursor-pointer md:focus-visible:bg-gradient-to-t md:focus-visible:from-light-royal-blue md:focus-visible:to-light-slate-blue md:mb-2">
            Continue
          </button>
        </section>
      </main>
    </div>
  );
}

export default App;

/*
TODO:
- componentalize
*/
