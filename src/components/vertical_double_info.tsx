/* eslint-disable @next/next/no-img-element */

interface InfoProps {
  title: string
  content?: string
  img_src: string
}

export default function VerticalDoubleInfo({ title, content, img_src }: InfoProps) {
  return (
    <div className="flex mx-20 max-h-[500px]">
        <div className="flex bg-white flex-1 justify-center items-center">
            <div className="flex flex-col justify-center items-center p-40 gap-2">
                <text className="text-4xl">{title}</text>
                <text>{content}</text>
            </div>
        </div>
        <img className="flex-1 w-1/3 object-cover" src={img_src} alt={title}/>
    </div>
  )
}