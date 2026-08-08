import Image from "next/image";
import { ServiceCard } from "../components/ServicesCard";

export default function Services() {
  return (
    <section>
      <div className="pt-28 pb-18">
        <h1 className="text-5xl text-center mx-auto p-4 md:px-8 md:text-7xl lg:w-2/3 tracking-wider">
          Photography for Every Story
        </h1>
        <div className="relative w-full h-120 lg:h-160 my-12">
          <Image
            src="https://images.unsplash.com/photo-1603425013520-e0b30e6e37dc?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="about"
            fill
            className="object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto p-4">
          <ServiceCard />
        </div>
      </div>
    </section>
  );
}
