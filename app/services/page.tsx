import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      category: "Bridal",
      description:
        "Enhancing your natural radiance for the most important day of your life.",
      items: [
        {
          name: "Bridal Consultation & Trial",
          price: "$150",
          detail: "90 minutes • Full look preview",
        },
        {
          name: "Wedding Day Bridal Makeup",
          price: "$300",
          detail: "Includes lashes & touch-up kit",
        },
        {
          name: "Bridal Party Makeup",
          price: "$100",
          detail: "Per person • Includes lashes",
        },
      ],
      image:
        "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      category: "Special Occasion",
      description:
        "Red carpet ready looks for galas, proms, and special events.",
      items: [
        {
          name: "Full Face Application",
          price: "$120",
          detail: "60 minutes • Long-wearing techniques",
        },
        {
          name: "Eyes Only",
          price: "$60",
          detail: "30 minutes • Liner, shadow & lashes",
        },
        {
          name: "Photoshoot / Editorial",
          price: "Custom",
          detail: "Half or full day rates availble",
        },
      ],
      image:
        "https://images.unsplash.com/photo-1457972729786-0411a3b2b626?q=80&w=800",
    },
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header */}
      <section className="py-16 md:py-24 px-6 md:px-12 text-center">
        <h1 className="text-4xl md:text-6xl font-serif mb-6 text-gray-600">
          Services & Investment
        </h1>
        <p className="max-w-2xl mx-auto text-gray-500 font-light leading-relaxed">
          I offer a range of professional makeup services tailored to your
          specific needs. From the aisle to the runway, every application is
          performed with high-end products and meticulous attention to detail.
        </p>
      </section>

      {/* Services List */}
      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-6xl mx-auto space-y-24">
          {services.map((service: any, idx: number) => (
            <div
              key={service.category}
              className={`flex flex-col ${
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-12 items-center`}
            >
              {/* Image Side */}
              <div className="w-full md:w-1/2 relative h-[500px]">
                <div className="absolute inset-0 bg-gray-100" />
                <Image
                  src={service.image}
                  alt={service.category}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2 space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-serif italic text-gray-900">
                    {service.category}
                  </h2>
                  <p className="text-gray-500 font-light">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-6">
                  {service.items.map((item: any) => (
                    <div
                      key={item.name}
                      className="flex justify-between items-baseline border-b border-gray-100 pb-4 group cursor-default"
                    >
                      <div className="space-y-1">
                        <h4 className="font-medium text-gray-800">
                          {item.name}
                        </h4>
                        <p className="text-xs text-gray-400 font-light tracking-wide">
                          {item.detail}
                        </p>
                      </div>
                      <span className="font-serif text-lg font-bold text-gray-900">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="text-xs font-bold uppercase tracking-[0.2em] border-b-2 border-transparent hover:border-black pb-1 transition-all text-gray-600"
                  >
                    Inquire Availability
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Policies Note */}
      <section className="bg-gray-50 py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <h3 className="text-xl font-serif">Important Info</h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            A 50% non-refundable deposit is required to secure your date. <br />
            Travel fees may apply for locations outside of the metro area.
          </p>
        </div>
      </section>
    </div>
  );
}
