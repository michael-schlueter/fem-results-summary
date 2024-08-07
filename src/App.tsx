function App() {
  return (
    <div className="w-full min-h-screen">
      <div>
        <section className="flex flex-col text-center bg-gradient-to-t rounded-b-[32px] from-light-royal-blue to-light-slate-blue">
          <h1 className="text-light-lavender text-lg mt-6">Your Result</h1>
          <div className="w-[140px] h-[140px] mx-auto flex flex-col justify-center items-center mt-6 rounded-full bg-gradient-to-t from-persian-blue to-violet-blue">
            <p className="text-white text-5.5xl font-extrabold">76</p>
            <p className="text-light-lavender/50">of 100</p>
          </div>
          <h2 className="text-white text-2xl font-bold mt-6">Great </h2>
          <p className="max-w-[260px] text-light-lavender mt-2 mx-auto mb-10">
            Your performance exceeds 65% of the people conducting the test here!
          </p>
        </section>
        <section className="flex flex-col gap-6 pt-6 pb-[30px] px-[30px]">
          <h3 className="text-lg font-bold text-dark-gray-blue">Summary</h3>
          <ul className="flex flex-col gap-4">
            <li className="flex justify-between rounded-xl bg-light-red/5 p-4">
              <div>
                <img
                  className="inline mr-3"
                  src="/public/images/icon-reaction.svg"
                  alt="icon reaction result"
                />
                <span className="text-light-red">Reaction</span>
              </div>
              <div>
                <span className="font-bold text-dark-gray-blue mr-[8px]">
                  80
                </span>
                <span className="font-bold text-dark-gray-blue/50">/ 100</span>
              </div>
            </li>
            <li className="flex justify-between rounded-xl bg-organgey-yellow/5 p-4">
              <div>
                <img
                  className="inline mr-3"
                  src="/public/images/icon-memory.svg"
                  alt="icon memory result"
                />
                <span className="text-organgey-yellow">Memory</span>
              </div>
              <div>
                <span className="font-bold text-dark-gray-blue mr-[8px]">
                  92
                </span>
                <span className="font-bold text-dark-gray-blue/50">/ 100</span>
              </div>
            </li>
            <li className="flex justify-between rounded-xl bg-green-teal/5 p-4">
              <div>
                <img
                  className="inline mr-3"
                  src="/public/images/icon-verbal.svg"
                  alt="icon verbal result"
                />
                <span className="text-green-teal">Verbal</span>
              </div>
              <div>
                <span className="font-bold text-dark-gray-blue mr-[8px]">
                  61
                </span>
                <span className="font-bold text-dark-gray-blue/50">/ 100</span>
              </div>
            </li>
            <li className="flex justify-between rounded-xl bg-cobalt-blue/5 p-4">
              <div>
                <img
                  className="inline mr-3"
                  src="/public/images/icon-visual.svg"
                  alt="icon visual result"
                />
                <span className="text-cobalt-blue">Visual</span>
              </div>
              <div>
                <span className="font-bold text-dark-gray-blue mr-[8px]">
                  73
                </span>
                <span className="font-bold text-dark-gray-blue/50">/ 100</span>
              </div>
            </li>
          </ul>
          <button className="rounded-[128px] bg-dark-gray-blue text-white font-bold py-4 px-[120px]">Continue</button>
        </section>
      </div>
    </div>
  );
}

export default App;
