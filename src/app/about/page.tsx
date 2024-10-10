/* eslint-disable @next/next/no-img-element */
export default function Page() {
  return (
    <div className="bg-black py-16 px-8">
      <div className="flex md:flex-row flex-col gap-8 justify-center items-center">
        <div className="flex md:flex-wrap md:flex-row flex-col gap-[20px] md:w-[625px] md:order-1 order-2">
          <img className="md:w-[300px] md:h-[200px] object-cover" src="/images/youth_dressage_1.webp" alt="Youth Dressage 1"/>
          <img className="md:w-[300px] md:h-[200px] object-cover" src="/images/youth_dressage_2.webp" alt="Youth Dressage 2"/>
          <img className="md:w-[300px] md:h-[200px] object-cover" src="/images/youth_dressage_3.webp" alt="Youth Dressage 3"/>
          <img className="md:w-[300px] md:h-[200px] object-cover" src="/images/youth_dressage_4.webp" alt="Youth Dressage 4"/>
          <img className="md:w-[300px] md:h-[200px] object-cover" src="/images/youth_dressage_5.webp" alt="Youth Dressage 5"/>
        </div>
        <div className="flex flex-col gap-2 justify-center text-white max-w-xs md:order-2 order-1">
          <text className="text-4xl md:text-left text-center">YOUTH DRESSAGE TEAM</text>
          <text className="italic md:text-left text-center">Helping young riders enjoy competitive dressage</text>
          <text className="md:text-left text-center">Our Youth Dressage Team is an active group of riders who enjoy learning and competing in the discipline of dressage.  We have workshops, camps, clinics and attend shows.   The highlight of our year is competing at the Lendon Gray Youth Dressage Festival.</text>
        </div>
      </div>
    </div>
  );
}
