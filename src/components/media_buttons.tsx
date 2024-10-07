/* eslint-disable @next/next/no-img-element */
export default function MediaButtons() {
    return (
        <div className="flex gap-3">
            <img
                className="w-[20px] h-[20px]"
                src="/images/Facebook.webp"
                alt="Facebook"
            />
            <img
                className="w-[20px] h-[20px]"
                src="/images/Google Places.webp"
                alt="Google Places"
            />
        </div>
    )
}