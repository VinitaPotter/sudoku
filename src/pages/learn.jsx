import {
  LightBulbIcon,
  BriefcaseIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

export default function Learn() {
  const facts = [
    {
      icon: <LightBulbIcon className="w-6 h-6 text-amber-500" />,
      title: "Use Pencil Marks",
      text: "Write possible numbers in each cell — they help you eliminate options logically.",
    },
    {
      icon: <BriefcaseIcon className="w-6 h-6 text-indigo-500" />,
      title: "The 45 Rule",
      text: "Each row, column, and 3×3 box adds up to 45. Use that to find missing numbers faster.",
    },
    {
      icon: <SparklesIcon className="w-6 h-6 text-pink-500" />,
      title: "Spot Patterns",
      text: "Look for repeating patterns or numbers that appear in the same row or column across boxes.",
    },
    {
      icon: <LightBulbIcon className="w-6 h-6 text-rose-500" />,
      title: "Center Strategy",
      text: "The center box touches the most rows and columns — filling it early often helps the rest.",
    },
    {
      icon: <BriefcaseIcon className="w-6 h-6 text-blue-500" />,
      title: "World Record",
      text: "The fastest Sudoku solve ever recorded is 1 minute 23.93 seconds — no pressure!",
    },
  ];

  return (
    <div className=" mx-auto p-6 bg-white/70 space-mono-regular ">
      <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
        Sudoku Hacks
      </h2>
      <ul className="space-y-3">
        {facts.map((fact, index) => (
          <li
            key={index}
            className="flex items-center gap-3 p-3 mb-10 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition"
          >
            <div>{fact.icon}</div>
            <div>
              <h3 className="font-medium text-gray-900 text-left">
                {fact.title}
              </h3>
              <p className="text-sm text-gray-600">{fact.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
