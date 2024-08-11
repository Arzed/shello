import bannerImg from "@/assets/about.webp";
import studioImg from "@/assets/studio-1.webp";

const AboutUs = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-2">
        <div className="row-start-2 lg:row-start-1 flex flex-col items-center lg:justify-center text-center lg:h-[100vh] py-10 lg:py-10 space-y-10 relative">
          <h1 className="text-8xl text-center">Creative Makers</h1>
          <h2 className="text-lg">Product Builder in Indonesia</h2>
        </div>
        <div className="relative overflow-hidden h-[100vh]">
          <img
            src={bannerImg}
            alt="Photo by Ryan Ancill on Unsplash"
            className="w-full h-full object-cover contrast-[1.1]"
          />
        </div>
      </div>
      <div className="pt-40 lg:pt-0 relative w-full px-5 lg:px-16">
        <div className="my-40 h-[80vh]">
          <img
            src={studioImg}
            alt="Shello company"
            className="w-full h-full object-cover contrast-[1.1]"
          />
        </div>
      </div>
      <div className="flex flex-col items-center text-center mt-20 lg:mt-40 space-y-14 max-w-xs lg:max-w-2xl mx-auto">
        <h3 className="text-4xl font-bold">Lorem ipsum dolor sit amet</h3>
        <p className="text-4xl font-bold">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa
        </p>
      </div>
      <div className="grid lg:grid-cols-2 my-40">
        <div className="bg-[url('/src/assets/about.webp')] bg-cover bg-center lg:translate-y-[1%] lg:scale-125 h-[100vh]" />
        <div className="flex items-center justify-center my-10">
          <div className="flex-flex-col items-center text-center">
            <div className="my-4">
              <h3 className="text-sm font-bold uppercase">Services:</h3>
            </div>
            <p className="text-3xl font-semibold uppercase">Logo Design</p>
            <p className="text-3xl font-semibold uppercase">Branding</p>
            <p className="text-3xl font-semibold uppercase">Product Design</p>
            <p className="text-3xl font-semibold uppercase">Logo Design</p>
            <p className="text-3xl font-semibold uppercase">Branding</p>
            <p className="text-3xl font-semibold uppercase">Product Design</p>
            <p className="text-3xl font-semibold uppercase">Logo Design</p>
            <p className="text-3xl font-semibold uppercase">Branding</p>
            <p className="text-3xl font-semibold uppercase">Product Design</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
