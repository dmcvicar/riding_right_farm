import VerticalDoubleInfo from "@/components/vertical_double_info";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center gap-12 bg-black px-8 py-24 md:px-36">
      <div className="flex flex-col items-center justify-center gap-4 px-8 md:px-72">
        <text className="text-4xl text-white">Lessons</text>
        <text className="text-md text-white">
          Our lesson program is about building a correct, solid foundation in
          the basics of correct riding and horsemanship. The majority of our
          lessons are privates with a focus on dressage.
        </text>
      </div>
      <VerticalDoubleInfo
        title="Kid's Lessons"
        img_src="/images/lessons_kids.webp"
      />
      <VerticalDoubleInfo
        title="Adult Lessons"
        img_src="/images/lessons_adults.webp"
      />
      <div className="flex flex-col items-center justify-center px-8 md:px-72">
        <text className="text-md text-center text-white">
          Prices: Lessons are $50 Half Hour Private, $95 Hour Private
        </text>
        <text className="text-md text-center text-white">
          We offer a discount card of 5 lessons for $225.{" "}
        </text>
      </div>
    </div>
  );
}
