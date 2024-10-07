/* eslint-disable @next/next/no-img-element */

import MediaButtons from "@/components/media_buttons";


export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
        <div className="flex flex-col px-20 pt-8 pb-2">
            <div className="flex justify-between border-b pb-3 border-black">
                <a href="mailto:hollie@ridingfarm.com">hollie@ridingfarm.com</a>
                <MediaButtons/>
            </div>
            <div className="flex my-6 justify-between items-center">
                <div className="flex">
                    <img
                        className="h-12 mr-4"
                        src="/images/riding_right_logo.webp"
                        alt="Riding Right Farm"
                    />
                    <div className="flex flex-col">
                        <text className="italic text-xl">RIDING RIGHT FARM</text>
                        <text className="text-md">A Welcoming Place to Ride</text>
                    </div>
                </div>
                <div>
                    <ul className="flex flex-wrap">
                        <li className="group p-2">
                            <a href="/">Home</a>
                            <div className="absolute invisible -ml-4 group-hover:visible z-10 mt-2 w-25 bg-white focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
                                <a href="/boarding" className="block px-4 py-2" role="menuitem" id="menu-item-0">Boarding</a>
                                <a href="/lessons" className="block px-4 py-2" role="menuitem" id="menu-item-2">Lessons</a>
                                <a href="/services" className="block px-4 py-2" role="menuitem" id="menu-item-1">Training</a>
                                <a href="/about" className="block px-4 py-2" role="menuitem" id="menu-item-2">Youth Dressage Team</a>
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
        <div className="flex flex-col border-t border-slate justify-center items-center pt-8 pb-20 gap-4">
            <a href="mailto:hollie@ridingfarm.com">hollie@ridingfarm.com</a>
            <text>358 Co Rd 59, Buskirk, NY 12028, USA</text>
            <MediaButtons/>
        </div>
    </div>
  );
}