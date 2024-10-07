/* eslint-disable @next/next/no-img-element */

import MediaButtons from "@/components/media_buttons"

interface ServicesItemProps {
  title: string
  image_src: string
  href?: string
}

function ServicesItem({ title, image_src, href }: ServicesItemProps) {
  return (
    <div className="flex flex-col gap-16">
      <text className="text-4xl">{title}</text>
      <img
        className="max-w-screen-lg"
        src={image_src}
        alt={title}
      />
    </div>
  )
}

export default function Page() {
  return (
  <div>
    <div className="flex justify-center items-center bg-black text-white py-24 gap-20">
      <div className="flex flex-col max-w-md gap-2">
        <text className="text-6xl">WELCOME TO RIDING RIGHT FARM</text>
        <text className="text-lg">Riding Right Farm is a friendly, and welcoming facility that offers lessons, boarding and training.</text>
        <text className="text-lg">Schedule for 2024 in <a>Upcoming Events</a>. Check out what we have for you.</text>
      </div>
      <img
        className="w-[460px]"
        src="/images/IMG_2428.webp"
        alt="IMG_2428"
      />
    </div>
    <div className="flex justify-center items-center py-24 gap-60">
      <img
        className="w-[600px]"
        src="/images/IMG_7261 2_edited.webp"
        alt="IMG_2428"
      />
      <div className="flex flex-col max-w-md gap-2">
        <text className="text-6xl">WHO WE ARE</text>
        <text className="italic text-lg">Experienced, Professional, Internationally Qualified</text>
        <text className="text-md">Riding Right Farm is owned and operated by long-time rider and trainer, Hollie McNeil. Hollie is a USDF L Graduate with Distinction. She has her USDF Bronze Medal and is a certified Balimo Instructor, having trained with German Sports Physiologist Eckart Meyners.  Hollie has her German Trainers License, and has earned her Small and Large German Bronze Medals.</text>
        <text className="text-md">Hollie is also the author of 40 Fundamentals of English Riding: a comprehensive book and  companion video, published by Storey Publishing.</text>
      </div>
    </div>
    <div className="-mt-[120px] bg-black h-32"></div>
    <div className="flex flex-col items-center justify-center my-28 gap-16">
      <text className="text-5xl mb-10">SERVICES WE OFFER</text>
      <ServicesItem title="Boarding" image_src="/images/boarding.webp"/>
      <ServicesItem title="Lessons" image_src="/images/lessons.webp"/>
      <ServicesItem title="Training" image_src="/images/training.webp"/>
      <ServicesItem title="Clinics" image_src="/images/clinics.webp"/>
      <ServicesItem title="Youth Dressage Team" image_src="/images/youth_dressage.webp"/>
    </div>
    <div className="flex flex-col justify-center items-center bg-black text-white py-24">
      <div className="flex flex-col gap-10">
        <img
          className="max-w-screen-lg"
          src="/images/about_facility.webp"
          alt="About Facility"
        />
        <div className="flex flex-col max-w-screen-md gap-2">
          <text className="text-4xl">ABOUT OUR FACILITY</text>
          <text>Riding Right Farm has highly-qualified, professional instructors and staff.   We strive to offer a warm, welcoming place for lessons, boarding, and training.</text>
          <text>Our 75 acre property features indoor and outdoor arenas, jumping, and trails for pleasure riding.  We're located in South Cambridge, NY. Convenient to Greenwich, Saratoga Springs and Albany NY, as well as Bennington, Arlington and Manchester VT,  and Western MA.</text>
        </div>
      </div>
    </div>
    <div className="flex flex-col justify-center items-center pt-24 pb-12">
      <div className="flex gap-8">
        <img
          className="max-w-[460px]"
          src="/images/contact.webp"
          alt="Contact"
        />
        <div className="flex flex-col max-w-[460px] gap-4 mb-10">
          <text className="text-4xl">CONTACT</text>
          <text className="text-lg">We’d be happy to provide you with additional information about Riding Right Farm.</text>
          <text className="text-lg">hollie@ridingfarm.com</text>
          <MediaButtons/>
        <div className="flex gap-2">
          <input className="appearance-none border-b-2 border-black w-full py-2 px-3 focus:outline-none" id="name" type="text" placeholder="Name"/>
          <input className="appearance-none border-b-2 border-black w-full py-2 px-3 focus:outline-none" id="email" type="text" placeholder="Email"/>
        </div>
        <input className="appearance-none border-b-2 border-black w-full py-2 px-3 focus:outline-none" id="subject" type="text" placeholder="Subject"/>
        <input className="appearance-none border-b-2 border-black w-full h-full py-2 px-3 focus:outline-none" id="body" type="text" placeholder="Type your message here..."/>
        <button className="bg-black italic text-white text-2xl py-3">Submit</button>
      </div>
    </div>
  </div>
  </div>);
}
