import Link from "next/link";
import Container from "../container";
import FooterList from "./footerList";
import { MdFacebook } from "react-icons/md";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import BottomFooter from "./bottomFooter";

interface FooterSectionProps {
  title: string;
  links: string[];
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, links }) => (
  <FooterList>
    <h3 className="text-base font-bold mb-2">{title}</h3>
    {links.map((link, index) => (
      <Link key={index} href="#">
        {link}
      </Link>
    ))}
  </FooterList>
);

const Footer = () => {
  const sections = [
    {
      title: "Shop Categories",
      links: [
        "Phones",
        "Laptops",
        "Desktops",
        "Watches",
        "Tv's",
        "Phones",
        "Accessories",
      ],
    },
    {
      title: "Customer Services",
      links: [
        "Contact US",
        "Shipping policy",
        "Returns and Exchanges",
        "Watches",
        "FAQs",
      ],
    },
  ];

  const socialMediaLinks = [
    { icon: MdFacebook, href: "#" },
    { icon: AiFillInstagram, href: "#" },
    { icon: AiFillTwitterCircle, href: "#" },
    { icon: AiFillYoutube, href: "#" },
  ];

  return (
    <>
      <footer className="bg-gray-900 text-gray-300 text-sm mt-16">
        <Container>
          <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
            {sections.map(({ title, links }, index) => (
              <FooterSection key={index} title={title} links={links} />
            ))}
            <div className="w-full md:w-1/3 md-6">
              <h3 className="text-base font-bold mb-2">About Us</h3>
              <p className="mb-2">
                At our electronic store, we are dedicated to providing the
                latest and greatest devices and accessories to our customers.
                With a wide selection of phones, TVs, laptops, watches, and
                accessories.
              </p>
            </div>
            <FooterList>
              <h3 className="text-base font-bold mb-2">Follow us</h3>
              <div className="flex gap-2">
                {socialMediaLinks.map(({ icon: Icon, href }, index) => (
                  <Link key={index} href={href}>
                    <Icon size={24} />
                  </Link>
                ))}
              </div>
            </FooterList>
          </div>
        </Container>
        <BottomFooter />
      </footer>
    </>
  );
};

export default Footer;
