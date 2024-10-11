'use client';
import { sendEmail } from '@/app/actions'
/* eslint-disable @next/next/no-img-element */

import MediaButtons from "@/components/media_buttons"

interface ServicesItemProps {
  title: string
  image_src: string
  href?: string

}

function clientSendEmail(e: React.SyntheticEvent<HTMLFormElement>) {
  e.preventDefault()
  const form = e.currentTarget
  sendEmail(form.sender.value, form.from.value, form.subject.value, form.body.value)
}

function ServicesItem({ title, image_src, href }: ServicesItemProps) {
  return (
    <div className="flex flex-col gap-16 items-center md:items-start">
      <text className="text-4xl">{title}</text>
      <img
        className="md:max-w-screen-lg"
        src={image_src}
        alt={title}
      />
    </div>
  )
}

export default function Page() {
  return (
  <div>
    <div className="flex flex-wrap justify-center items-center bg-black text-white px-16 py-24 gap-20">
      <div className="flex flex-col md:max-w-md gap-2">
        <text className="text-6xl md:text-left text-center">WELCOME TO RIDING RIGHT FARM</text>
        <text className="text-lg md:text-left text-center">Riding Right Farm is a friendly, and welcoming facility that offers lessons, boarding and training.</text>
        <text className="text-lg md:text-left text-center">Schedule for 2024 in <a>Upcoming Events</a>. Check out what we have for you.</text>
      </div>
      <img
        className="md:w-[460px]"
        src="/images/IMG_2428.webp"
        alt="IMG_2428"
      />
    </div>
    <div className="flex flex-wrap justify-center items-center px-8 pt-24 pb-8 xl:gap-60 gap-8">
      <img
        className="md:w-[600px]"
        src="/images/IMG_7261 2_edited.webp"
        alt="IMG_2428"
      />
      <div className="flex flex-col max-w-md gap-2">
        <text className="text-6xl md:text-left text-center">WHO WE ARE</text>
        <text className="italic text-lg md:text-left text-center">Experienced, Professional, Internationally Qualified</text>
        <text className="text-md md:text-left text-center">Riding Right Farm is owned and operated by long-time rider and trainer, Hollie McNeil. Hollie is a USDF L Graduate with Distinction. She has her USDF Bronze Medal and is a certified Balimo Instructor, having trained with German Sports Physiologist Eckart Meyners.  Hollie has her German Trainers License, and has earned her Small and Large German Bronze Medals.</text>
        <text className="text-md md:text-left text-center">Hollie is also the author of 40 Fundamentals of English Riding: a comprehensive book and  companion video, published by Storey Publishing.</text>
      </div>
    </div>
    <div className="xl:-mt-[80px] bg-black h-32"/>
    <div className="flex flex-col items-center justify-center my-20 gap-16 px-2">
      <text className="text-5xl mb-10">SERVICES WE OFFER</text>
      <ServicesItem title="Boarding" image_src="/images/boarding.webp"/>
      <ServicesItem title="Lessons" image_src="/images/lessons.webp"/>
      <ServicesItem title="Training" image_src="/images/training.webp"/>
      <ServicesItem title="Clinics" image_src="/images/clinics.webp"/>
      <ServicesItem title="Youth Dressage Team" image_src="/images/youth_dressage.webp"/>
    </div>
    <div className="flex flex-col justify-center items-center bg-black text-white py-24 px-8">
      <div className="flex flex-col gap-10">
        <img
          className="lg:max-w-screen-lg"
          src="/images/about_facility.webp"
          alt="About Facility"
        />
        <div className="flex flex-col max-w-screen-md gap-2 items-center md:items-start">
          <text className="text-4xl md:text-left text-center">ABOUT OUR FACILITY</text>
          <text className="md:text-left text-center">Riding Right Farm has highly-qualified, professional instructors and staff.   We strive to offer a warm, welcoming place for lessons, boarding, and training.</text>
          <text className="md:text-left text-center">Our 75 acre property features indoor and outdoor arenas, jumping, and trails for pleasure riding.  We&apos;re located in South Cambridge, NY. Convenient to Greenwich, Saratoga Springs and Albany NY, as well as Bennington, Arlington and Manchester VT,  and Western MA.</text>
        </div>
      </div>
    </div>
    <div className="flex flex-col justify-center items-center pt-24 pb-12">
      <div className="flex md:flex-row flex-col flex-wrap gap-8 px-16">
        <img
          className="max-w-[460px]"
          src="/images/contact.webp"
          alt="Contact"
        />
        <div className={"flex flex-col max-w-[460px] gap-4 mb-10 md:justify-start justify-center md:items-start items-center"}>
          <text className="text-4xl md:text-left text-center">CONTACT</text>
          <text className="text-lg md:text-left text-center">We’d be happy to provide you with additional information about Riding Right Farm.</text>
          <text className="text-lg md:text-left text-center"><a href="mailto:hollie@ridingfarm.com">hollie@ridingfarm.com</a></text>
          <MediaButtons/>
          <form className="mb-20" method="post" onSubmit={clientSendEmail}>
            <div className="flex gap-2">
                <input className="appearance-none border-b-2 border-black w-full py-2 px-3 focus:outline-none" name="sender" type="text" placeholder="Name"/>
                <input className="appearance-none border-b-2 border-black w-full py-2 px-3 focus:outline-none" name="from" type="text" placeholder="Email"/>
            </div>
            <input className="appearance-none border-b-2 border-black w-full py-2 px-3 focus:outline-none" name="subject" type="text" placeholder="Subject"/>
            <input className="appearance-none border-b-2 border-black w-full h-[150px] py-2 px-3 focus:outline-none" name="body" type="text" placeholder="Type your message here..."/>
            <button type="submit" className="bg-black italic text-white text-2xl py-3 w-full">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>);
}
