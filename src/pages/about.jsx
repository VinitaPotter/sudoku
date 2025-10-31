import { CodeBracketIcon, HeartIcon } from "@heroicons/react/24/outline";

export default function About() {
  return (
    <div className="space-mono-regular  w-full flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800 px-4">
      <div
        className="w-4/5 text-center bg-gradient-to-br
                    from-pink-200 via-yellow-100 
                    to-purple-200 rounded-2xl shadow-md p-8 border border-gray-200"
      >
        <CodeBracketIcon className="w-10 h-10 mx-auto text-indigo-500 mb-3" />
        <h1 className="text-2xl font-semibold mb-2">About This Project</h1>
        <p className="text-gray-600 mb-6">A minimal Sudoku built with React.</p>
        <p>
          This is my first project in years using React. A lot has changed since
          I last used it almost 6 years back. There are plenty of bugs and I am
          not a designer (As you can see! 😛) But I had so much fun building
          this simple app while learning the basics
        </p>
        <p>Peace!! ✌🏼</p>

        <div className="mt-6">
          <a
            href="https://github.com/VinitaPotter"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 rounded-xl hover:bg-gray-100 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6 text-gray-800"
            >
              <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.29 3.438 9.77 8.207 11.36.6.11.793-.26.793-.58v-2.02c-3.338.73-4.033-1.61-4.033-1.61-.546-1.39-1.333-1.76-1.333-1.76-1.09-.75.084-.74.084-.74 1.205.09 1.84 1.25 1.84 1.25 1.07 1.83 2.806 1.3 3.49.99.107-.77.42-1.3.762-1.6-2.665-.3-5.467-1.34-5.467-5.94 0-1.31.47-2.39 1.235-3.23-.124-.303-.535-1.52.118-3.16 0 0 1.008-.32 3.3 1.23a11.47 11.47 0 0 1 3-.4c1.02.01 2.05.14 3 .4 2.29-1.55 3.297-1.23 3.297-1.23.654 1.64.243 2.86.12 3.16.77.84 1.233 1.92 1.233 3.23 0 4.61-2.807 5.63-5.48 5.93.43.37.81 1.1.81 2.23v3.31c0 .32.192.7.8.58C20.565 22.27 24 17.79 24 12.5 24 5.87 18.63.5 12 .5z" />
            </svg>
            <span className="font-medium">VinitaPotter</span>
          </a>
        </div>

        <p className="text-sm text-gray-500 mt-6 flex items-center justify-center gap-1">
          Built with <HeartIcon className="w-4 h-4 text-rose-500" /> in React
        </p>
      </div>
    </div>
  );
}
