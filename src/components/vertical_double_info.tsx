/* eslint-disable @next/next/no-img-element */

import { ReactNode } from "react"

interface InfoProps {
  children?: ReactNode
  title?: string
  img_src: string
  black?: boolean
  flip?: boolean
}

export default function VerticalDoubleInfo({ children, title, img_src, black, flip }: InfoProps) {
  return (
    <div className="flex md:flex-row flex-col md:max-h-[500px]">
      <div className={"flex-1 " + (flip ? "md:order-1" : "md:order-2")}>
        <img className="object-cover h-[500px] w-full" src={img_src} alt={title}/>
      </div>
      <div className={"flex flex-1 bg-white justify-center items-center " + (flip ? "md:order-2" : "md:order-1")}>
        <div className={"flex flex-col justify-center items-center px-8 py-8 md:h-[500px] gap-2" + (black ? " bg-black text-white" : " bg-white text-black")}>
          {title ? <text className="text-4xl">{title}</text> : null}
          {children}
        </div>
      </div>
    </div>
  )
}