import { MdOutlineLocationOn, MdOutlineMail } from "react-icons/md";
import ContactCard from "../components/ContactCard";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section>
      <div className="pt-28 pb-18 space-y-12">
        <h1 className="text-5xl text-center mx-auto p-4 md:px-8 md:text-7xl lg:w-1/2 tracking-wider">
          Let&apos;s Create Something Meaningful
        </h1>
        <p className="text-xl md:w-1/2 text-center mx-auto">
          Tell me a little about your vision, your date, and what you have in
          mind. I&apos;ll get back to you with availability and the next steps.
        </p>

        <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ContactCard
            icon={MdOutlineMail}
            title="Email"
            content="booking@photography.com"
          />
          <ContactCard
            icon={FaInstagram}
            title="Instagram"
            content="@photography"
          />
          <ContactCard
            icon={FaWhatsapp}
            title="Whatsapp"
            content="+1 (123) 456-7890"
          />
          <ContactCard
            icon={MdOutlineLocationOn}
            title="Our Studio"
            content="Jakarta, Indonesia"
          />
        </div>
      </div>
    </section>
  );
}
