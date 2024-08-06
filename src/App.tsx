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
        <section>
          <h3>Summary</h3>
          <ul>
            <li>
              <span>Reaction</span>
              <span>80 / 100</span>
            </li>
            <li>
              <span>Memory</span>
              <span>92 / 100</span>
            </li>
            <li>
              <span>Verbal</span>
              <span>61 / 100</span>
            </li>
            <li>
              <span>Reaction</span>
              <span>73 / 100</span>
            </li>
          </ul>
          <button>Continue</button>
        </section>
      </div>
    </div>
  );
}

export default App;
