import CertificatesSection from "../components/CertificatesSection";
import NavigationCard from "../components/NavigationCard";
import { CERTIFICATES_TEXT } from "../data/portafolioData";

export default function CertificatePage() {
  return (
    <>
      <NavigationCard title={"Certificados"}>
        <div className="flex flex-row gap-10">
          {CERTIFICATES_TEXT.paragraphs.map((text, index) => (
            <p key={index} className="w-full text-left">
              {text}
            </p>
          ))}
        </div>
      </NavigationCard>

      <CertificatesSection />
    </>
  );
}
