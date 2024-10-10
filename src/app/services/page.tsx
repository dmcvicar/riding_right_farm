/* eslint-disable @next/next/no-img-element */

import { StringDecoder } from "node:string_decoder"


interface InfoProps {
  children?: ReactNode
  title: string
  img_src: string
  justify_end?: boolean
}

function HorizontalDoubleInfo({ children, title, img_src , justify_end}: InfoProps) {
  const tl_classes = "flex flex-col md:w-1/4 gap-16 px-8 justify-center " + ( justify_end ? "md:self-end" : "self-start")
  return (
    <div className={tl_classes}>
      <div className="flex flex-1 flex-col gap-2">
        <text className="text-4xl text-center">{title}</text>
        {children}
      </div>
      <img className="flex-1 object-cover w-[500px]" src={img_src} alt={title}/>
    </div>
  )
}

export default function Page() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center py-20 text-white bg-black text-4xl">TRAINING</div>
      <div className="flex md:flex-row flex-col justify-center md:items-start items-center pt-16 pb-16 gap-16 md:h-[900px]">
        <HorizontalDoubleInfo title="Training Philosophy" img_src="/images/training_philosophy.webp">
          <text className="md:text-left text-center">Our training program is tailored to your needs, whether you need a horse started, re-schooled, or moved up a level for competition.</text>
        </HorizontalDoubleInfo>
        <HorizontalDoubleInfo title="Training Options & Prices" img_src="/images/training_rates.webp" justify_end>
          <text className="text-center">Single Training session $50</text>
          <text className="text-center">Tier One: Board & 3-Days a week $1180</text>
          <text className="text-center">Tier Two: Board & 4-Days a week $1340</text>
        </HorizontalDoubleInfo>
      </div>
    </div>
  );
}
