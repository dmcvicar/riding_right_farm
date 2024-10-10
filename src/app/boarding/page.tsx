/* eslint-disable @next/next/no-img-element */
import VerticalDoubleInfo from "@/components/vertical_double_info";

export default function Page() {
  return (
    <div className="flex flex-col">
      <div
        className="mx-auto h-96 w-full bg-cover bg-fixed bg-center bg-no-repeat"
        style={{"backgroundImage": `url(/images/boarding_horses.webp)`}}
      />
      <div className="flex flex-col bg-black py-8 md:px-36 px-8 gap-8">
        <VerticalDoubleInfo title="Boarding" img_src="/images/boarding_tack.webp">
          <text>Full Board includes 12x12 stall, daily turnout, grain, and hay. We offer both first and second cutting. Stalls are cleaned daily, and all have a heated, automatic waterer. Turnout options include individual or groups, large grass pastures or dry lot. Boarders have full use of the facility.</text>
        </VerticalDoubleInfo>
        <VerticalDoubleInfo title="Facility" img_src="/images/boarding_indoor.webp">
          <text>Our farm is situated on 75 acres in the rolling hills of Southern Washington County. Our indoor arena measures 72' x 200', has dust free footing of sand. Large mirrors are at each end of the arena. A heated viewing room is attached to the indoor. The outdoor arena is 210' x 100' with sand footing. The farm offers many acres for hacking out that include hills, fields and a stream.</text>
        </VerticalDoubleInfo>
      </div>
      <div className="flex flex-col justify-center items-center pt-24 pb-12">
        <div className="flex md:flex-row flex-col gap-16">
          <img
            className="max-w-[460px]"
            src="/images/boarding_outdoor.webp"
            alt="Contact"
          />
          <div className="flex flex-col justify-center md:items-start items-center max-w-[460px] gap-4 mb-10">
            <text className="text-8xl">Prices</text>
            <text className="text-md">We have two options for boarders. Standard Full Board is $700 per month.  Active Board is $860 per month and includes four lessons or training sessions in addition to everything in Standard Full Board.</text>
          </div>
        </div>
      </div>
    </div>
  );
}
