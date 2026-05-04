import Card from "./Card";
import image from "../assets/perfil1.jpg";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import ContactItem from "./ContactItem";

export default function InfoCard({ name, location, email, cellphone }) {
  return (
    <Card className="p-6 md:p-8">
      <div className="flex flex-col items-center gap-6">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <img
            src={image}
            alt={`Foto de ${name}`}
            className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-[#1c2a56] object-cover shadow-xl"
          />
        </div>

        <div className="space-y-2 text-center">
          <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight">{name}</h1>
          <div className="inline-block rounded-full bg-blue-500/10 px-4 py-1.5 border border-blue-500/20">
            <p className="text-xs md:text-sm font-semibold text-blue-400 uppercase tracking-wider">
              Fullstack Developer
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="flex w-full flex-col gap-4">
          <ContactItem icon={MdEmail} label="Email" value={email} />
          <ContactItem icon={FaPhoneAlt} label="Celular" value={cellphone} />
          <ContactItem
            icon={FaLocationDot}
            label="Ubicación"
            value={location}
          />
        </div>

        <div className="pt-4 flex justify-center">
          <a 
            href="https://github.com/mixercode" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="GitHub Profile"
          >
            <IoLogoGithub size={24} className="text-white" />
          </a>
        </div>
      </div>
    </Card>
  );
}
