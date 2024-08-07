import Hero from "@/components/hero";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import firstImg from "@/assets/hero-new.webp";
import { services } from "@/config/services";

const Home = () => {
  return (
    <main>
      <Hero />
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-screen-2xl mx-4 md:mx-auto">
        <Card className="bg-slate-900 text-white">
          <CardHeader>
            <div className="text-center md:text-start">Let's Start</div>
          </CardHeader>
          <CardContent>
            <h3 className="text-3xl font-bold md:w-36 text-center md:text-start">
              Work With us
            </h3>
          </CardContent>
        </Card>
        <Card className="grid md:col-span-2 md:flex p-12 items-center gap-4 bg-gray-50">
          <div className="flex-1 flex flex-col gap-4">
            <h3 className="text-3xl font-bold text-center md:text-start">
              Trusted Partner
            </h3>
            <p className="text-center md:text-start">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <h3 className="text-4xl font-bold text-center md:text-start">
              200+
            </h3>
            <p className="text-center md:text-start">Complete Project</p>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <h3 className="text-4xl font-bold text-center md:text-start">
              1,230
            </h3>
            <p className="text-center md:text-start">Client Trusted</p>
          </div>
          <Button className="rounded-full">Let's Work</Button>
        </Card>
      </section>
      <section className="mt-12 container md:flex gap-6 items-center">
        <div className="flex-1 flex flex-col gap-4">
          <h5 className="text-center md:text-start">Why Choose Us</h5>
          <h3 className="text-3xl font-bold text-center md:text-start">
            Fast Work is our Focus
          </h3>
          <p className="text-center md:text-start">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
        </div>
        <div className="flex-1">
          <img
            src={firstImg}
            alt="Image by Storyset in Freepik"
            className="w-full"
          />
        </div>
      </section>
      <section className="mt-12 container md:flex gap-6 items-center">
        <div className="flex-1">
          <img
            src={firstImg}
            alt="Image by Storyset in Freepik"
            className="w-full"
          />
        </div>
        <div className="flex-1 flex flex-col gap-4 items-center">
          <h5 className="text-center md:text-start">Who We Are</h5>
          <h3 className="text-3xl font-bold text-center md:text-start">
            Trusted 100% by many People Gradually
          </h3>
          <p className="text-center md:text-start">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
          <div>
            <Button className="rounded-full">Let's Work</Button>
          </div>
        </div>
      </section>
      <section className="mt-12 container flex flex-col gap-8 items-center">
        <h2 className="text-4xl font-bold text-center">Our Projects</h2>
        <p className="text-center max-w-3xl mb-12">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
        <div className="grid md:flex gap-4">
          <Card className="bg-[url('/src/assets/table-3.webp')] bg-cover">
            <CardHeader className="md:h-52"></CardHeader>
            <CardContent className="md:h-96"></CardContent>
            <CardFooter>
              <div className="flex items-center">
                <div>
                  <h3 className="text-3xl">Website Design</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor.
                  </p>
                </div>
                <a href="#">
                  <Button className="rounded-full">Let's Work</Button>
                </a>
              </div>
            </CardFooter>
          </Card>
          <div className="flex flex-col gap-4">
            <Card className="bg-[url('src/assets/table-2.webp')] bg-contain">
              <CardHeader></CardHeader>
              <CardContent className="md:h-48"></CardContent>
              <CardFooter>
                <div className="text-background">
                  <h3 className="text-3xl">Website Design</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor.
                  </p>
                </div>
              </CardFooter>
            </Card>
            <Card className="bg-[url('/src/assets/studio-1.webp')] bg-contain">
              <CardHeader></CardHeader>
              <CardContent className="md:h-48"></CardContent>
              <CardFooter>
                <div className="text-background">
                  <h3 className="text-3xl">Website Design</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor.
                  </p>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      <section className="mt-12 container flex flex-col gap-8 items-center">
        <h2 className="text-4xl font-bold text-center">Our Services</h2>
        <p className="text-center max-w-3xl mb-12">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
        <div className="grid md:grid-cols-4 gap-4">
          {services.map((item, i) => (
            <Card key={i} className="group relative block bg-black">
              <img
                src={item.image}
                alt={item.alt}
                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 text-white items-center"
              />
              <div className="relative p-4 sm:p-6 lg:p-8">
                <p className="text-sm font-medium uppercase tracking-widest">
                  {item.category}
                </p>

                <p className="text-xl font-bold text-white sm:text-2xl">
                  {item.title}
                </p>

                <div className="mt-32 sm:mt-48 lg:mt-64">
                  <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm text-white">{item.description}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
