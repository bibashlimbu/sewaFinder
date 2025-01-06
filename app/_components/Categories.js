import { AirVent, Laptop, PaintRoller, Wrench, Zap } from "lucide-react";
import Link from "next/link";
import Section from "./Section";
import { Separator } from "@/components/ui/separator";

const categories = [
  {
    herf: "plumbing",
    title: "Plumbing",
    icon: <Wrench color="#fff" size={50} />,
  },
  {
    herf: "electrician",
    title: "Electrician",
    icon: <Zap color="#fff" size={50} />,
  },
  {
    herf: "computerServicing",
    title: "Computer Servicing",
    icon: <Laptop color="#fff" size={50} />,
  },
  {
    herf: "hvacTechnicians",
    title: "HVAC Technicians",
    icon: <AirVent color="#fff" size={50} />,
  },
  {
    herf: "housePainting",
    title: "House Painting",
    icon: <PaintRoller color="#fff" size={50} />,
  },
];

function Categories() {
  return (
    <>
      <Section>
        <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold mb-3">
          Browse by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link
              key={category.title}
              href={`/${category.herf}`}
              className="bg-primary rounded-sm p-5 flex flex-col items-center "
            >
              {category.icon}
              <h3 className="text-white font-semibold">{category.title}</h3>
            </Link>
          ))}
        </div>
      </Section>
      <Separator />
    </>
  );
}

export default Categories;
