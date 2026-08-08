import Image from "next/image";

// Data for the service cards
const services = [
  {
    title: "Wedding Photography",
    image:
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    overlayImage:
      "https://images.unsplash.com/photo-1680359051538-9190d3e11d1f?q=80&w=1188&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Portrait Photography",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    overlayImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Commercial Photography",
    image:
      "https://images.unsplash.com/photo-1563170351-be82bc888aa4?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    overlayImage:
      "https://images.unsplash.com/photo-1587304791151-8e8b7cfe0771?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Fashion & Editorial Photography",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    overlayImage:
      "https://images.unsplash.com/photo-1483181957632-8bda974cbc91?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Event Photography",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    overlayImage:
      "https://images.unsplash.com/photo-1638132704795-6bb223151bf7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Lifestyle Photography",
    image:
      "https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    overlayImage:
      "https://images.unsplash.com/photo-1758275557784-39516582a05d?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const ServiceCard = () => {
  return (
    <div className=" w-full flex items-center justify-center font-sans">
      <section>
        <div className="mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="hidden text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 tracking-tight">
              How Can I Help?
            </h2>
            <p className="text-xl md:w-1/2 text-center mx-auto">
              From intimate moments to bold visual campaigns, I create
              photographs that feel authentic, timeless, and intentional.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group rounded-3xl p-6 flex flex-col w-full h-100 transition-all duration-300 hover:bg-gray-100 "
              >
                {/* Image Container */}
                <div className="relative grow flex items-center justify-center mb-4">
                  {/* Back Image */}
                  <Image
                    src={service.image}
                    alt={`${service.title} showcase`}
                    fill
                    className="absolute h-100 object-cover rounded-lg shadow-md transform -rotate-6 transition-all duration-400 ease-in-out group-hover:rotate-[-10deg] group-hover:scale-105"
                  />
                  {/* Front Image */}
                  <Image
                    src={service.overlayImage}
                    alt={`${service.title} example`}
                    fill
                    className="absolute h-100 object-cover rounded-lg shadow-lg transform rotate-3 transition-all duration-400 ease-in-out group-hover:rotate-[5deg] group-hover:scale-105"
                  />
                </div>

                {/* Service Title */}
                <h3 className="text-left text-lg font-medium mt-2">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
