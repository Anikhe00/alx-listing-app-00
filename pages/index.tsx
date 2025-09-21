import Image from "next/image";
import Layout from "@/components/layout/Layout";
import Pill from "@/components/common/Pill";
import { HERO_BG, FILTERS, PROPERTYLISTINGSAMPLE } from "@/constants";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-center text-white">
        <Image
          src={HERO_BG}
          alt="Hero Background"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-2">
            Find your favorite place here!
          </h1>
          <p className="text-lg">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-6 flex gap-3 flex-wrap justify-center">
        {FILTERS.map((filter, index) => (
          <Pill key={index} label={filter} />
        ))}
      </section>

      {/* Listing Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {PROPERTYLISTINGSAMPLE.map((property) => (
          <div
            key={property.id}
            className="border rounded-lg shadow-md overflow-hidden"
          >
            <Image
              src={property.image}
              alt={property.name}
              width={400}
              height={250}
              className="object-cover w-full h-48"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{property.name}</h3>
              <p className="text-gray-600">${property.price} / night</p>
              <p className="text-yellow-500">⭐ {property.rating}</p>
            </div>
          </div>
        ))}
      </section>
    </Layout>
  );
}
