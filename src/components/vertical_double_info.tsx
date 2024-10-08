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
  const color = (black ? " bg-black text-white" : " bg-white text-black")
  const img = <img className="flex-1 w-1/3 object-cover" src={img_src} alt={title}/>
  const content = (
    <div className="flex bg-white flex-1 justify-center items-center">
      <div className={"flex flex-col justify-center items-center px-36 h-[500px] gap-2" + color}>
          {title ? <text className="text-4xl">{title}</text> : null}
          {children}
      </div>
    </div>
  )
  return (
    <div className="flex mx-20 max-h-[500px]">
      {flip ? img : content}
      {flip ? content : img}
    </div>
  )
}