/* eslint-disable @next/next/no-img-element */


interface InfoProps {
  title: string
  content?: Array<string>
  img_src: string
  justify_end?: boolean
}

function HorizontalDoubleInfo({ title, content, img_src , justify_end}: InfoProps) {
  const _content = content ? content.map((item) => <text key={item}>{item}</text>) : null
  const tl_classes = "flex flex-col w-1/4 gap-16 justify-center " + ( justify_end ? "self-end" : "self-start")
  return (
    <div className={tl_classes}>
      <div className="flex flex-1 flex-col gap-2">
        <text className="text-4xl">{title}</text>
        {_content}
      </div>
      <img className="flex-1 object-cover w-[500px]" src={img_src} alt={title}/>
    </div>
  )
}

export default function Page() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-center items-center py-20 text-white bg-black text-4xl">TRAINING</div>
        <div className="flex justify-center items-start pt-32 pb-16 gap-16 h-[900px]">
          <HorizontalDoubleInfo title="Training Philosophy" content={["Our training program is tailored to your needs, whether you need a horse started, re-schooled, or moved up a level for competition."]} img_src="/images/training_philosophy.webp"/>
          <HorizontalDoubleInfo title="Training Options & Prices" content={["Single Training session $50", "Tier One: Board & 3-Days a week $1180", "Tier Two: Board & 4-Days a week $1340"]} img_src="/images/training_rates.webp" justify_end/>
        </div>
    </div>
  );
}
