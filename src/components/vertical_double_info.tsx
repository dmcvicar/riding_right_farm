/* eslint-disable @next/next/no-img-element */

import { ReactNode } from "react";

interface InfoProps {
  children?: ReactNode;
  title?: string;
  img_src: string;
  black?: boolean;
  flip?: boolean;
}

export default function VerticalDoubleInfo({
  children,
  title,
  img_src,
  black,
  flip,
}: InfoProps) {
  return (
    <div className="flex flex-col md:max-h-[500px] md:flex-row">
      <div className={"flex-1 " + (flip ? "md:order-1" : "md:order-2")}>
        <img
          className="h-[500px] w-full object-cover"
          src={img_src}
          alt={title}
        />
      </div>
      <div
        className={
          "flex flex-1 items-center justify-center bg-white " +
          (flip ? "md:order-2" : "md:order-1")
        }
      >
        <div
          className={
            "flex flex-col items-center justify-center gap-2 px-8 py-8 md:h-[500px]" +
            (black ? " bg-black text-white" : " bg-white text-black")
          }
        >
          {title ? <text className="text-4xl">{title}</text> : null}
          {children}
        </div>
      </div>
    </div>
  );
}
