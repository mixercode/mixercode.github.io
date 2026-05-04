import CertificatesSection from "../components/CertificatesSection";
import NavigationCard from "../components/NavigationCard";
import { CERTIFICATES_TEXT } from "../data/portafolioData";

export default function CertificatePage() {
  return (
    <div className="space-y-12">
      <NavigationCard title={"Certificados"}>
        <div className="flex flex-col gap-4">
          {CERTIFICATES_TEXT.paragraphs.map((text, index) => (
            <p key={index} className="w-full text-left text-white/80 leading-relaxed">
              {text}
            </p>
          ))}
        </div>
      </NavigationCard>

      <CertificatesSection />
    </div>
  );
}
