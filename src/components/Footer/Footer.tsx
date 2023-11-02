import Link from "next/link";
import { BiMessageDetail } from "react-icons/bi";
import { BsFillSendFill, BsTelephoneOutbound } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="mt-16">
      <div className="container mx-auto px-4">
        <Link href="/" className="font-black text-tertiary-dark">
          Hôtelzz
        </Link>

        <h4 className="font-semibold text-[40px] py-6">Contact</h4>

        <div className="flex flex-wrap gap-16 items-center justify-between">
          <div className="flex-1">
            <p>123 Avenue des Champs-Elysées 75008 Paris</p>
            <div className="flex items-center py-4">
              <BsFillSendFill />
              <p className="ml-2">KevDev</p>
            </div>
            <div className="flex items-center">
              <BsTelephoneOutbound />
              <p className="ml-2">+336 50 24 67 14</p>
            </div>
            <div className="flex items-center pt-4">
              <BiMessageDetail />
              <p className="ml-2">KevDev</p>
            </div>
          </div>

          <div className="flex-1 md:text-right">
            <p className="pb-4">Présentation</p>
            <p className="pb-4">Contactez-nous</p>
            <p className="pb-4">Politique de Confidentialité</p>
            <p className="pb-4">Conditions d'Utilisation</p>
            <p>Service Client</p>
          </div>

          <div className="flex-1 md:text-right">
            <p className="pb-4">Séjour Gastronomique</p>
            <p className="pb-4">Bien-être</p>
            <p className="pb-4">Fitness</p>
            <p className="pb-4">Sports</p>
            <p>Evènements</p>
          </div>
        </div>
      </div>

      <div className="bg-tertiary-light h-10 md:h-[70px] mt-16 w-full bottom-0 left-0" />
    </footer>
  );
};

export default Footer;
