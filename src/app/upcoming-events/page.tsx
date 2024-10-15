import VerticalDoubleInfo from "@/components/vertical_double_info";

export default function Page() {
  return (
    <div className="px-8 py-16 md:px-36">
      <VerticalDoubleInfo
        title="2024 Schedule of Events"
        img_src={"/images/upcoming_events.webp"}
      >
        <text>
          Back by Popular Demand- Our Fall Dressage Show. Set for Sunday October
          27th. Link to entry form{" "}
          <a className="underline" href="/files/Fall Dressage show 2024.pdf">
            here
          </a>
          . We have a special Halloween Costume Dressage Test- Prizes! And only
          $10 entry fee.
        </text>
      </VerticalDoubleInfo>
    </div>
  );
}
