import VerticalDoubleInfo from "@/components/vertical_double_info";

export default function Page() {
  return (
  <div className="flex flex-col">
    <div className="flex flex-col justify-center items-center bg-black text-white py-24">
      <text className="text-4xl text-center">40 FUNDAMENTALS OF ENGLISH RIDING</text>
      <text className="italic text-xl text-center">Author: Hollie H. McNeil</text>
    </div>
    <div className="flex flex-col py-24 md:px-48 px-8 gap-8">
      <VerticalDoubleInfo img_src="/images/shop_1.webp" flip>
        <text>40 Fundamentals of English Riding is a book and DVD combo that explores the basics of English riding. The book tackles topics like riding position, correct aids, and the Training Scale.</text>
      </VerticalDoubleInfo>
      <VerticalDoubleInfo img_src="/images/shop_2.webp">
        <text>You can read about the right way something should be done, examine the common mistakes and get ideas for how to fix things.</text>
      </VerticalDoubleInfo>
      <VerticalDoubleInfo img_src="/images/shop_3.webp" flip>
        <text>The book is organized in an easy to understand format, with hundreds of pictures and illustrations.  The 90 minute companion DVD further demonstrates the concepts of the fundamentals.</text>
      </VerticalDoubleInfo>
      <div className="flex flex-col pt-8 justify-center items-center">
        <text className="text-center">Available at bookstores and tack shops nationwide and at <a className="underline" href="https://www.amazon.com/40-Fundamentals-English-Riding-Essential/dp/1603427899">Amazon.com</a></text>
        <text className="text-center">40 Fundamentals is published by Storey Publishing.</text>
      </div>
    </div>
  </div>
);
}
