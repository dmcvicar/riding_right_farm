/* eslint-disable @next/next/no-img-element */
export default function MediaButtons() {
    return (
        <div className="flex gap-3">
            <a href="https://www.facebook.com/ridingrightfarm/">
                <img
                    className="w-[20px] h-[20px]"
                    src="/images/Facebook.webp"
                    alt="Facebook"
                />
            </a>
            <a href="https://maps.google.com/?cid=12793311414803734331">
                <img
                    className="w-[20px] h-[20px]"
                    src="/images/Google Places.webp"
                    alt="Google Places"
                />
            </a>
        </div>
    )
}