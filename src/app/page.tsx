"use client";
import { sendEmail } from "@/app/actions";
/* eslint-disable @next/next/no-img-element */

import MediaButtons from "@/components/media_buttons";

interface ServicesItemProps {
  title: string;
  image_src: string;
  href?: string;
}

function clientSendEmail(e: React.SyntheticEvent<HTMLFormElement>) {
  e.preventDefault();
  const form = e.currentTarget;
  sendEmail(
    form.sender.value,
    form.from.value,
    form.subject.value,
    form.body.value,
  );
}

function ServicesItem({ title, image_src, href }: ServicesItemProps) {
  let component = (
    <>
      <text className="text-4xl">{title}</text>
      <img className="md:max-w-screen-lg" src={image_src} alt={title} />
    </>
  );
  if (href) {
    component = (
      <a
        href={href}
        className="flex flex-col items-center gap-16 md:items-start"
      >
        {component}
      </a>
    );
  } else {
    component = (
      <div className="flex flex-col items-center gap-16 md:items-start">
        {component}
      </div>
    );
  }
  return component;
}

export default function Page() {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-20 bg-black px-16 py-24 text-white">
        <div className="flex flex-col gap-2 md:max-w-md">
          <text className="text-center text-6xl md:text-left">
            WELCOME TO RIDING RIGHT FARM
          </text>
          <text className="text-center text-lg md:text-left">
            Riding Right Farm is a friendly, and welcoming facility that offers
            lessons, boarding and training.
          </text>
          <text className="text-center text-lg md:text-left">
            Schedule for 2024 in <a>Upcoming Events</a>. Check out what we have
            for you.
          </text>
        </div>
        <img
          className="md:w-[460px]"
          src="/images/IMG_2428.webp"
          alt="IMG_2428"
        />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-8 px-8 pb-8 pt-24 xl:gap-60">
        <img
          className="md:w-[600px]"
          src="/images/IMG_7261 2_edited.webp"
          alt="IMG_2428"
        />
        <div className="flex max-w-md flex-col gap-2">
          <text className="text-center text-6xl md:text-left">WHO WE ARE</text>
          <text className="text-center text-lg italic md:text-left">
            Experienced, Professional, Internationally Qualified
          </text>
          <text className="text-md text-center md:text-left">
            Riding Right Farm is owned and operated by long-time rider and
            trainer, Hollie McNeil. Hollie is a USDF L Graduate with
            Distinction. She has her USDF Bronze Medal and is a certified Balimo
            Instructor, having trained with German Sports Physiologist Eckart
            Meyners. Hollie has her German Trainers License, and has earned her
            Small and Large German Bronze Medals.
          </text>
          <text className="text-md text-center md:text-left">
            Hollie is also the author of 40 Fundamentals of English Riding: a
            comprehensive book and companion video, published by Storey
            Publishing.
          </text>
        </div>
      </div>
      <div className="h-32 bg-black xl:-mt-[80px]" />
      <div className="my-20 flex flex-col items-center justify-center gap-16 px-2">
        <text className="mb-10 text-5xl">SERVICES WE OFFER</text>
        <ServicesItem
          title="Boarding"
          image_src="/images/boarding.webp"
          href="/boarding"
        />
        <ServicesItem title="Lessons" image_src="/images/lessons.webp" />
        <ServicesItem title="Training" image_src="/images/training.webp" />
        <ServicesItem title="Clinics" image_src="/images/clinics.webp" />
        <ServicesItem
          title="Youth Dressage Team"
          image_src="/images/youth_dressage.webp"
        />
      </div>
      <div className="flex flex-col items-center justify-center bg-black px-8 py-24 text-white">
        <div className="flex flex-col gap-10">
          <img
            className="lg:max-w-screen-lg"
            src="/images/about_facility.webp"
            alt="About Facility"
          />
          <div className="flex max-w-screen-md flex-col items-center gap-2 md:items-start">
            <text className="text-center text-4xl md:text-left">
              ABOUT OUR FACILITY
            </text>
            <text className="text-center md:text-left">
              Riding Right Farm has highly-qualified, professional instructors
              and staff. We strive to offer a warm, welcoming place for lessons,
              boarding, and training.
            </text>
            <text className="text-center md:text-left">
              Our 75 acre property features indoor and outdoor arenas, jumping,
              and trails for pleasure riding. We&apos;re located in South
              Cambridge, NY. Convenient to Greenwich, Saratoga Springs and
              Albany NY, as well as Bennington, Arlington and Manchester VT, and
              Western MA.
            </text>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center pb-12 pt-24">
        <div className="flex flex-col flex-wrap gap-8 px-16 md:flex-row">
          <img
            className="max-w-[460px]"
            src="/images/contact.webp"
            alt="Contact"
          />
          <div
            className={
              "mb-10 flex max-w-[460px] flex-col items-center justify-center gap-4 md:items-start md:justify-start"
            }
          >
            <text className="text-center text-4xl md:text-left">CONTACT</text>
            <text className="text-center text-lg md:text-left">
              We’d be happy to provide you with additional information about
              Riding Right Farm.
            </text>
            <text className="text-center text-lg md:text-left">
              <a href="mailto:hollie@ridingfarm.com">hollie@ridingfarm.com</a>
            </text>
            <MediaButtons />
            <form className="mb-20" method="post" onSubmit={clientSendEmail}>
              <div className="flex gap-2">
                <input
                  className="w-full appearance-none border-b-2 border-black px-3 py-2 focus:outline-none"
                  name="sender"
                  type="text"
                  placeholder="Name"
                />
                <input
                  className="w-full appearance-none border-b-2 border-black px-3 py-2 focus:outline-none"
                  name="from"
                  type="text"
                  placeholder="Email"
                />
              </div>
              <input
                className="w-full appearance-none border-b-2 border-black px-3 py-2 focus:outline-none"
                name="subject"
                type="text"
                placeholder="Subject"
              />
              <input
                className="h-[150px] w-full appearance-none border-b-2 border-black px-3 py-2 focus:outline-none"
                name="body"
                type="text"
                placeholder="Type your message here..."
              />
              <button
                type="submit"
                className="w-full bg-black py-3 text-2xl italic text-white"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
