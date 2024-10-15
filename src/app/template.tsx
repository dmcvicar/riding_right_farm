/* eslint-disable @next/next/no-img-element */

import MediaButtons from "@/components/media_buttons";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="flex flex-col px-5 pb-2 pt-8 md:px-20">
        <div className="flex justify-between border-b border-black pb-3">
          <a href="mailto:hollie@ridingfarm.com">hollie@ridingfarm.com</a>
          <MediaButtons />
        </div>
        <div className="my-6 flex flex-wrap items-center justify-center md:justify-between">
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
          <div>
            <ul className="flex">
              <li className="group p-2">
                <a href="/">Home</a>
                <div
                  className="md:w-25 absolute z-10 -ml-4 mt-2 flex gap-4 bg-white focus:outline-none md:invisible md:flex-col md:px-2 md:group-hover:visible"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                >
                  <a
                    href="/boarding"
                    className="block"
                    role="menuitem"
                    id="menu-item-0"
                  >
                    Boarding
                  </a>
                  <a
                    href="/lessons"
                    className="block"
                    role="menuitem"
                    id="menu-item-2"
                  >
                    Lessons
                  </a>
                  <a
                    href="/services"
                    className="block"
                    role="menuitem"
                    id="menu-item-1"
                  >
                    Training
                  </a>
                  <a
                    href="/about"
                    className="block"
                    role="menuitem"
                    id="menu-item-2"
                  >
                    Youth Dressage Team
                  </a>
                </div>
              </li>
              <li className="p-2">
                <a href="/upcoming-events">Upcoming Events</a>
              </li>
              <li className="p-2">
                <a href="/news">News</a>
              </li>
              <li className="p-2">
                <a href="shop">Book/DVD</a>
              </li>
            </ul>
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
