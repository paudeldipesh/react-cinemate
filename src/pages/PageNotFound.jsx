import { Link } from "react-router-dom";
import notFound from "../assets/images/notfound.png";
import { Button } from "../components/Button";
import { useTitle } from "../hooks/useTitle";

export const PageNotFound = () => {
  useTitle("Page Not Found");
  return (
    <main>
      <section className="flex flex-col justify-center gap-x-2 md:gap-x-4">
        <div className="flex flex-col items-center gap-y-2 md:gap-y-4">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-700 dark:text-white font-bold my-4">
            Page Not Found
          </p>
          <div className="max-w-lg">
            <img className="rounded" src={notFound} alt="not found icon" />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
            <Button>back to cinemate</Button>
          </Link>
        </div>
      </section>
    </main>
  );
};
