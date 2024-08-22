import laptopImage from '../../public/assets/laptopss.png';
import bgImageLaptops from '../../public/assets/bgLaptopss.jpeg';

const HomeBanner = () => {
  return (
    <div className="relative overflow-hidden">
      <div
        className="absolute inset-0 z-[-1] bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImageLaptops.src})`, opacity: 0.3 }}
      ></div>
      <div className="bg-gradient-to-r from-black via-[#384269] to-black mb-8 relative">
        <div className="mx-auto p-24 flex flex-col gap-2 md:flex-row items-center justify-evenly ">
          <div className="mb-8 md:mb-1 text-center md:text-left">
            <h3 className="text-2xl md:text-5xl font-bold text-white mb-4">Laptops/PC's</h3>
            <p className="text-textColor mt-6 mb-7 font-serif font-bold">Exclusive offer - GET 20% OFF</p>
            <p className="w-full md:w-2/3 max-w-full text-white mb-2">
              Expanding the offering is the choice between various electronic devices bringing the total new look. Black-tone stainless steel case with a black theme. Scratch-free sapphire crystal.
            </p>
            <p className="">
              Starting @ <span className="text-2xl ml-5 md:text-3xl text-textColor font-thin">$25000</span>
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-3/5 relative ">
            <img
              src={laptopImage.src}
              alt="LaptopImage"
              className="object-contain "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
