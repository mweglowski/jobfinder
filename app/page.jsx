import Feed from "@components/Feed";

export default function Home() {
  return (
    <section className="w-full flex-col justify-center items-center">
      <h1 className="text-7xl font-bold mt-10 text-center font-sans">
        Find Your <span className="green_gradient">Dream Job</span>
      </h1>
      <p className="desc text-center w-full mx-auto">
        The best tech job finding website with almost{" "}
        <span className="green_gradient text-2xl font-bold">100k</span> offers
        with{" "}
        <span className="green_gradient text-2xl font-bold">
          visible salaries
        </span>
      </p>

      <Feed />
    </section>
  );
}
