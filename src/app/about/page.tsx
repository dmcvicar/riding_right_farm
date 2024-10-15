/* eslint-disable @next/next/no-img-element */
export default function Page() {
  return (
    <div className="bg-black px-8 py-16">
      <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
        <div className="order-2 flex flex-col gap-[20px] md:order-1 md:w-[625px] md:flex-row md:flex-wrap">
          <img
            className="object-cover md:h-[200px] md:w-[300px]"
            src="/images/youth_dressage_1.webp"
            alt="Youth Dressage 1"
          />
          <img
            className="object-cover md:h-[200px] md:w-[300px]"
            src="/images/youth_dressage_2.webp"
            alt="Youth Dressage 2"
          />
          <img
            className="object-cover md:h-[200px] md:w-[300px]"
            src="/images/youth_dressage_3.webp"
            alt="Youth Dressage 3"
          />
          <img
            className="object-cover md:h-[200px] md:w-[300px]"
            src="/images/youth_dressage_4.webp"
            alt="Youth Dressage 4"
          />
          <img
            className="object-cover md:h-[200px] md:w-[300px]"
            src="/images/youth_dressage_5.webp"
            alt="Youth Dressage 5"
          />
        </div>
        <div className="order-1 flex max-w-xs flex-col justify-center gap-2 text-white md:order-2">
          <text className="text-center text-4xl md:text-left">
            YOUTH DRESSAGE TEAM
          </text>
          <text className="text-center italic md:text-left">
            Helping young riders enjoy competitive dressage
          </text>
          <text className="text-center md:text-left">
            Our Youth Dressage Team is an active group of riders who enjoy
            learning and competing in the discipline of dressage. We have
            workshops, camps, clinics and attend shows. The highlight of our
            year is competing at the Lendon Gray Youth Dressage Festival.
          </text>
        </div>
      </div>
    </div>
  );
}
