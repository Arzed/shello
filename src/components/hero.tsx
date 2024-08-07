import { Button } from "./ui/button";
import { Icons } from "./icons";

const Hero = () => {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 pb-16 pt-20 text-center lg:pt-32">
      <h2 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-tight text-slate-900 sm:text-7xl">
        Lorem ipsum dolor sit amet consectetuer adipiscing elit
      </h2>
      <p className="mx-auto mt-12 max-w-2xl text-lg tracking-tight text-[#516371]">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa.
      </p>
      <div className="mt-16 flex flex-col md:flex-row justify-center gap-4">
        <Button className="md:rounded-full shadow-lg" size={"lg"}>
          Start a Project
        </Button>
        <Button
          variant={"outline"}
          className="md:rounded-full shadow-lg"
          size={"lg"}
        >
          Learn More
        </Button>
      </div>
      <div className="mt-12 flex justify-center gap-x-6 mb-24">
        <a href="#">
          <Button
            variant={"outline"}
            className="rounded-full shadow-lg h-12 w-12 px-2"
          >
            <Icons.whatsapp className="w-7 h-7" />
          </Button>
        </a>
        <a href="#">
          <Button
            variant={"outline"}
            className="rounded-full shadow-lg h-12 w-12 px-2"
          >
            <Icons.instagram className="w-7 h-7" />
          </Button>
        </a>
        <a href="#">
          <Button
            variant={"outline"}
            className="rounded-full shadow-lg h-12 w-12 px-2"
          >
            <Icons.mail className="w-7 h-7" />
          </Button>
        </a>
      </div>
      <div className="hidden md:block absolute w-3/4 h-[90rem] -bottom-[56rem] right-[15rem] border-t-4 border-slate-200 rounded-full -z-10"></div>
      <div className="hidden md:block absolute w-[70%] h-[86rem] -bottom-[55rem] right-[18rem] bg-gradient-to-b from-slate-400/20 via-white/0 to-white/0 rounded-full -z-10"></div>
    </section>
  );
};

export default Hero;
