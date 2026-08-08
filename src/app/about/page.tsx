import Image from "next/image";

export default function About() {
  return (
    <section>
      <div className="pt-28 pb-18">
        <h1 className="text-5xl text-center mx-auto p-4 md:px-8 md:text-7xl lg:w-2/3 tracking-wider">
          Photography with Purpose, Crafted with Passion.
        </h1>
        <div className="relative w-full h-120 lg:h-160 my-12">
          <Image
            src="https://images.unsplash.com/photo-1520390138845-fd2d229dd553?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="about"
            fill
            className="object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
          <div className="space-y-4">
            <p className="text-3xl">
              Every image tells a story. We combine creativity, technical
              expertise, and attention to detail to create timeless photographs
              that feel authentic and meaningful.
            </p>
            <p>
              We are a modern photography studio dedicated to creating refined,
              high-quality imagery for individuals, brands, and businesses.
              Every project is approached with careful planning, technical
              expertise, and an eye for authentic storytelling, resulting in
              photographs that feel both elegant and timeless.
            </p>
            <p>
              From portraits and weddings to commercial campaigns and editorial
              work, we guide every step of the creative process—from concept
              development to professional retouching. Our goal is to deliver a
              seamless experience while producing visuals that communicate your
              story with clarity, confidence, and lasting impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
