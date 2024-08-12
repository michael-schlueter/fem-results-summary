import clsx from "clsx";
import data from "./data.json";

export default function Summary() {
  return (
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
              <span className="font-bold text-dark-gray-blue/50">/ 100</span>
            </div>
          </li>
        ))}
      </ul>
      <button className="rounded-[128px] bg-dark-gray-blue text-white font-bold w-full py-3 px-0 md:text-lg outline-none border-none cursor-pointer md:focus-visible:bg-gradient-to-t md:focus-visible:from-light-royal-blue md:focus-visible:to-light-slate-blue md:hover:bg-gradient-to-t md:hover:from-light-royal-blue md:hover:to-light-slate-blue md:mb-2">
        Continue
      </button>
    </section>
  );
}
