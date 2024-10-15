import VerticalDoubleInfo from "@/components/vertical_double_info";

export default function Page() {
  return (
    <div className="flex flex-col">
      <div
        className="mx-auto flex h-96 w-full items-center justify-center overflow-y-scroll bg-cover bg-fixed bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/images/boarding_outdoor.webp)` }}
      >
        <text className="flex text-4xl text-white">NEWS FROM THE FARM</text>
      </div>
      <div className="flex items-center justify-center pt-24">
        <text className="flex text-4xl">THE LATEST</text>
      </div>
      <div className="flex flex-col px-8 py-24 md:px-36">
        <VerticalDoubleInfo
          title="Article Wins Award"
          img_src="/images/news_item_1.webp"
          black
          flip
        >
          <text className="italic">November 2020</text>
          <text>
            The article &quot;Build It And They Will Come&quot; written by
            Hollie McNeil and published in the NEDA Tip of the Hat newsletter
            has won the award for Best General Interest Article from the USDF.
            Here&apos;s a{" "}
            <a className="underline" href="/files/BuildIttheyWillCome.pdf">
              link
            </a>{" "}
            to the article in case you missed it.
          </text>
        </VerticalDoubleInfo>
      </div>
    </div>
  );
}
