import BannerImage from '../../assets/banner-stack.png'


function Banner() {

  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <div className="grid items-center gap-10 md:grid-cols-2">


        <div>

          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Build Your Ideal
            {" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-5 max-w-xl  text-slate-600">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits your
            next project.
          </p>


          <div className="mt-7 flex flex-wrap gap-4">
            <button className="rounded-xl bg-gradient-to-r from-orange-400 via-orange-500 to-pink-600 px-6 py-3 font-semibold text-white">
              Explore Technologies
            </button>

            <button className="rounded-xl border text-gray-700 border-gray-300 px-6 py-3 font-semibold hover:border-pink-500 hover:text-pink-500">
              Learn More
            </button>
          </div>
        </div>


        <div className="flex justify-center">
          <img
            src={BannerImage}
            alt=""
            className="w-full max-w-md"
          />
        </div>

      </div>
    </section>
  );
}

export default Banner;