import VerticalDoubleInfo from "@/components/vertical_double_info";

export default function Page() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center justify-center bg-black py-24 text-white">
        <text className="text-center text-4xl">
          40 FUNDAMENTALS OF ENGLISH RIDING
        </text>
        <text className="text-center text-xl italic">
          Author: Hollie H. McNeil
        </text>
      </div>
      <div className="flex flex-col gap-8 px-8 py-24 md:px-48">
        <VerticalDoubleInfo img_src="/images/shop_1.webp" flip>
          <text>
            40 Fundamentals of English Riding is a book and DVD combo that
            explores the basics of English riding. The book tackles topics like
            riding position, correct aids, and the Training Scale.
          </text>
        </VerticalDoubleInfo>
        <VerticalDoubleInfo img_src="/images/shop_2.webp">
          <text>
            You can read about the right way something should be done, examine
            the common mistakes and get ideas for how to fix things.
          </text>
        </VerticalDoubleInfo>
        <VerticalDoubleInfo img_src="/images/shop_3.webp" flip>
          <text>
            The book is organized in an easy to understand format, with hundreds
            of pictures and illustrations. The 90 minute companion DVD further
            demonstrates the concepts of the fundamentals.
          </text>
        </VerticalDoubleInfo>
        <div className="flex flex-col items-center justify-center pt-8">
          <text className="text-center">
            Available at bookstores and tack shops nationwide and at{" "}
            <a
              className="underline"
              href="https://www.amazon.com/40-Fundamentals-English-Riding-Essential/dp/1603427899"
            >
              Amazon.com
            </a>
          </text>
          <text className="text-center">
            40 Fundamentals is published by Storey Publishing.
          </text>
        </div>
      </div>
    </div>
  );
}
