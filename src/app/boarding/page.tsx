/* eslint-disable @next/next/no-img-element */
interface InfoProps {
  title: string
  content: string
  img_src: string
}

function Info({ title, content, img_src }: InfoProps) {
  return (<div className="flex">
    <div className="flexl bg-white flex-1 justify-center items-center">
      <div className="flex flex-col justify-center items-center p-40">
        <text>{title}</text>
        <text>{content}</text>
      </div>
    </div>
      <div
        className="flex-1 overflow-y-scroll bg-local bg-contain bg-no-repeat bg-center"
        style={{"backgroundImage": `url(${img_src})`}}
      />
  </div>)
}

export default function Page() {
  return (
    <div className="flex flex-col">
      <div
        className="mx-auto h-96 w-full overflow-y-scroll bg-cover bg-fixed bg-center bg-no-repeat"
        style={{"backgroundImage": `url(/images/boarding_horses.webp)`}}
      />
      <div className="flex flex-col bg-black py-8 px-10 gap-8">
        <Info title="Boarding" content="Full Board includes 12x12 stall, daily turnout, grain, and hay. We offer both first and second cutting. Stalls are cleaned daily, and all have a heated, automatic waterer. Turnout options include individual or groups, large grass pastures or dry lot. Boarders have full use of the facility." img_src="/images/boarding_tack.webp"/>
        <Info title="Facility" content="Our farm is situated on 75 acres in the rolling hills of Southern Washington County. Our indoor arena measures 72' x 200', has dust free footing of sand. Large mirrors are at each end of the arena. A heated viewing room is attached to the indoor. The outdoor arena is 210' x 100' with sand footing. The farm offers many acres for hacking out that include hills, fields and a stream." img_src="/images/boarding_indoor.webp"/>
      </div>
      <div className="flex flex-col justify-center items-center pt-24 pb-12">
        <div className="flex gap-16">
          <img
            className="max-w-[460px]"
            src="/images/boarding_outdoor.webp"
            alt="Contact"
          />
          <div className="flex flex-col justify-center max-w-[460px] gap-4 mb-10">
            <text className="text-8xl">Prices</text>
            <text className="text-md">We have two options for boarders. Standard Full Board is $700 per month.  Active Board is $860 per month and includes four lessons or training sessions in addition to everything in Standard Full Board.</text>
          </div>
        </div>
      </div>
    </div>
  );
}
