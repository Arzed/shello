import bannerImg from "@/assets/about.webp";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { services } from "@/config/services";

const Services = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-2">
        <div className="row-start-2 lg:row-start-1 flex flex-col items-center lg:justify-center text-center lg:h-[100vh] py-10 lg:py-10 space-y-10 relative">
          <h1 className="text-8xl text-center">Our Services</h1>
          <h2 className="text-lg max-w-xs">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa
          </h2>
        </div>
        <div className="relative overflow-hidden h-[100vh]">
          <img
            src={bannerImg}
            alt="Photo by Ryan Ancill on Unsplash"
            className="w-full h-full object-cover contrast-[1.1]"
          />
        </div>
      </div>
      <div className="grid gap-14 mt-20 mx-4 lg:mx-20">
        {services.map((item, i) => (
          <div key={i} className="grid gap-4">
            <Card className="h-[80vh] overflow-hidden scale-100">
              <img
                src={item.landscapeImg}
                alt={item.alt}
                className="w-full h-full object-center object-cover rounded-lg hover:scale-105 duration-300"
              />
            </Card>
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <Badge className="text-base" variant={"secondary"}>
                {item.category}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
