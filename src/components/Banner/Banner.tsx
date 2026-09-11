import BannerImage from "../../assets/banner-stack.png";

function Banner() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <div className="grid items-center gap-10 md:grid-cols-2">

        <div>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Build Your Ideal{" "}
            <span className="gradient-text">
              Development Stack
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-slate-600">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits
            your next project.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <button className="brand-gradient rounded-xl px-6 py-3 font-semibold text-white transition hover:opacity-90">
              Explore Technologies
            </button>

            <button className="rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:border-pink-500 hover:text-pink-500">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={BannerImage}
            alt="Dev Stack"
            className="w-full max-w-md"
          />
        </div>

      </div>
    </section>
  );
}

export default Banner;