import clsx from "clsx";
import data from "./data.json";

function App() {
  const averageScore = Math.floor(
    data.reduce((sum, item) => sum + item.score, 0) / data.length
  );

  return (
    <div className="w-full min-h-screen md:flex md:justify-center md:items-center">
      <main className="md:flex md:justify-center max-w-[736px] md:rounded-[32px] md:shadow-custom">
        <section className="flex flex-col text-center bg-gradient-to-t rounded-b-[32px] md:rounded-[32px] md:pt-[38px] from-light-royal-blue to-light-slate-blue md:max-w-[50%] md:px-12">
          <h1 className="text-light-lavender text-lg md:text-2xl mt-6 md:mt-0">
            Your Result
          </h1>
          <div className="w-[140px] h-[140px] md:w-[200px] md:h-[200px] mx-auto flex flex-col justify-center items-center mt-6 md:mt-[35px] rounded-full bg-gradient-to-t from-persian-blue to-violet-blue">
            <p className="text-white text-5.5xl md:text-7xl font-extrabold">
              {averageScore}
            </p>
            <p className="text-light-lavender/50 md:text-lg">of 100</p>
          </div>
          <h2 className="text-white text-2xl md:text-3.5xl font-bold mt-6 md:mt-[28px]">
            Great{" "}
          </h2>
          <p className="max-w-[260px] md:max-w-none text-light-lavender md:text-lg mt-2 md:mt-[14px] mx-auto mb-10">
            Your performance exceeds 65% of the people conducting the test here!
          </p>
        </section>
        <section className="flex flex-col gap-6 md:gap-0 pt-6 md:pt-[38px] pb-[30px] px-[30px]">
          <h3 className="text-lg md:text-2xl font-bold text-dark-gray-blue">
            Summary
          </h3>
          <ul className="flex flex-col gap-4 md:mt-[28px]">
            {data.map((item, index) => (
              <li
                key={index}
                className={clsx(
                  "flex justify-between rounded-xl p-4 md:text-lg",
                  {
                    "bg-light-red/5": item.category === "Reaction",
                    "bg-organgey-yellow/5": item.category === "Memory",
                    "bg-green-teal/5": item.category === "Verbal",
                    "bg-cobalt-blue/5": item.category === "Visual",
                  }
                )}
              >
                <div>
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
          <button className="rounded-[128px] bg-dark-gray-blue text-white font-bold py-4 px-[120px] md:text-lg outline-none md:focus-visible:bg-gradient-to-t md:focus-visible:from-light-royal-blue md:focus-visible:to-light-slate-blue md:mt-[41px]">
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
- convert to Grid
- make the app totally responsive
- fix the button (e.g. no border)
- componentalize
*/
