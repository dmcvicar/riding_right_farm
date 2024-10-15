/* eslint-disable @next/next/no-img-element */

import MediaButtons from "@/components/media_buttons";

interface SubMenuItemProps {
  dropdown?: boolean;
}

function SubMenuItems({ dropdown }: SubMenuItemProps) {
  let tl_classes = "flex gap-4 justify-center z-10 bg-white ";
  if (dropdown) {
    tl_classes =
      tl_classes +
      "flex-col px-2 py-2 focus:outline-none -ml-4 w-25 absolute invisible md:group-hover:visible";
  } else {
    tl_classes = tl_classes + "md:hidden";
  }
  return (
    <div
      className={tl_classes}
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
    >
      <a href="/boarding" className="block" role="menuitem" id="menu-item-0">
        Boarding
      </a>
      <a href="/lessons" className="block" role="menuitem" id="menu-item-2">
        Lessons
      </a>
      <a href="/services" className="block" role="menuitem" id="menu-item-1">
        Training
      </a>
      <a href="/about" className="block" role="menuitem" id="menu-item-2">
        Youth Dressage Team
      </a>
    </div>
  );
}

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="flex flex-col px-5 pb-2 pt-8 md:px-20">
        <div className="flex justify-between border-b border-black pb-3">
          <a href="mailto:hollie@ridingfarm.com">hollie@ridingfarm.com</a>
          <MediaButtons />
        </div>
        <div className="my-6 flex flex-col items-center justify-center gap-2 md:flex-row md:justify-between">
          <div className="flex">
            <img
              className="mr-4 h-12"
              src="/images/riding_right_logo.webp"
              alt="Riding Right Farm"
            />
            <div className="flex flex-col">
              <text className="text-xl italic">RIDING RIGHT FARM</text>
              <text className="text-md">A Welcoming Place to Ride</text>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <ul className="flex justify-center gap-4 md:justify-end">
              <li className="group">
                <a href="/">Home</a>
                <SubMenuItems dropdown />
              </li>
              <li>
                <a href="/upcoming-events">Upcoming Events</a>
              </li>
              <li>
                <a href="/news">News</a>
              </li>
              <li>
                <a href="shop">Book/DVD</a>
              </li>
            </ul>
            <SubMenuItems />
          </div>
        </div>
      </div>
      {children}
      <div className="border-slate flex flex-col items-center justify-center gap-4 border-t pb-20 pt-8">
        <a href="mailto:hollie@ridingfarm.com">hollie@ridingfarm.com</a>
        <text>358 Co Rd 59, Buskirk, NY 12028, USA</text>
        <MediaButtons />
      </div>
    </div>
  );
}
