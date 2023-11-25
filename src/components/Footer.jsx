import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white shadow dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col sm:flex-row justify-between items-center gap-y-2 sm:gap-y-0">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {new Date().getFullYear()}{" "}
          <Link to="/" className="hover:underline">
            Cinemate
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap justify-center items-center text-sm font-medium text-gray-500 dark:text-gray-400">
          <li>
            <a
              href="https://www.facebook.com/dipeshpaudelofficial"
              target="_blank"
              className="hover:underline me-4 md:me-6"
              rel="noreferrer"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://github.com/paudeldipesh"
              target="_blank"
              className="hover:underline me-4 md:me-6"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
