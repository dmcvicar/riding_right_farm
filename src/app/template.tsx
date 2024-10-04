/* eslint-disable @next/next/no-img-element */
export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
        <div className="flex flex-col px-20 pt-8 pb-2">
            <div className="flex justify-between border-b border-black">
                <a href="mailto:hollie@ridingfarm.com">hollie@ridingfarm.com</a>
                <div className="flex">
                    <img
                        className=""
                        src="/images/Facebook.webp"
                        alt="Facebook"
                    />
                    <img
                        className=""
                        src="/images/Google Places.webp"
                        alt="Google Places"
                    />
                </div>
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
                        <li className="p-2">Home</li>
                        <li className="p-2">Upcoming Events</li>
                        <li className="p-2">News</li>
                        <li className="p-2">Book/DVD</li>
                    </ul>
                </div>
            </div>
        </div>
        {children}
        <div className="flex flex-col border-t border-slate justify-center items-center pt-8 pb-20 gap-4">
            <a href="mailto:hollie@ridingfarm.com">hollie@ridingfarm.com</a>
            <text>358 Co Rd 59, Buskirk, NY 12028, USA</text>
            <div className="flex">
                <img
                    className=""
                    src="/images/Facebook.webp"
                    alt="Facebook"
                />
                <img
                    className=""
                    src="/images/Google Places.webp"
                    alt="Google Places"
                />
            </div>
        </div>
    </div>
  );
}
