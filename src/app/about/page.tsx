/* eslint-disable @next/next/no-img-element */
export default function Page() {
  return (
    <div className="bg-black py-16 pl-96">
      <div className="flex gap-8">
        <div className="flex flex-wrap gap-[20px] w-[625px]">
          <img className="w-[300px] h-[200px] object-cover" src="/images/youth_dressage_1.webp" alt="Youth Dressage 1"/>
          <img className="w-[300px] h-[200px] object-cover" src="/images/youth_dressage_2.webp" alt="Youth Dressage 2"/>
          <img className="w-[300px] h-[200px] object-cover" src="/images/youth_dressage_3.webp" alt="Youth Dressage 3"/>
          <img className="w-[300px] h-[200px] object-cover" src="/images/youth_dressage_4.webp" alt="Youth Dressage 4"/>
          <img className="w-[300px] h-[200px] object-cover" src="/images/youth_dressage_5.webp" alt="Youth Dressage 5"/>
        </div>
        <div className="flex flex-col gap-2 justify-center text-white max-w-xs">
          <text className="text-4xl">YOUTH DRESSAGE TEAM</text>
          <text className="italic">Helping young riders enjoy competitive dressage</text>
          <text>Our Youth Dressage Team is an active group of riders who enjoy learning and competing in the discipline of dressage.  We have workshops, camps, clinics and attend shows.   The highlight of our year is competing at the Lendon Gray Youth Dressage Festival.</text>
        </div>
      </div>
    </div>
  );
}
