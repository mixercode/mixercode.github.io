import Card from "./Card";
import image from "../assets/perfil1.jpg";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import ContactItem from "./ContactItem";

export default function InfoCard({ name, location, email, cellphone }) {
  return (
    <Card className="p-6">
      <div className="flex flex-col items-center gap-5">
        <img
          src={image}
          alt={`Foto de ${name}`}
          className="w-2/3 rounded-full border-4 border-[#1c2a56]"
        />

        <p className="text-xl font-semibold text-center">{name}</p>

        <div className="w-2/3 rounded-full bg-[#121b36] px-4 py-1 text-center">
          <p className="text-base font-medium text-gray-400">
            Desarrollador Web Fullstack
          </p>
        </div>

        <div className="w-full border-t border-white/20" />

        <div className="flex w-full flex-col gap-3">
          <ContactItem icon={MdEmail} label="Email" value={email} />
          <ContactItem icon={FaPhoneAlt} label="Celular" value={cellphone} />
          <ContactItem
            icon={FaLocationDot}
            label="Ubicación"
            value={location}
          />
        </div>
        <a href="https://github.com/mixercode/mixercode">
          <IoLogoGithub size={30} color="white" />
        </a>
      </div>
    </Card>
  );
}
