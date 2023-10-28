// pages/contact.jsx
import Script from "next/script";

export default function ContactUs() {
  return (
    <>
    
      <iframe
        data-tally-src="https://tally.so/embed/3Xo7xP?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height="200"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        title="Lead generation form"
      ></iframe>

      <Script
        id="tally-js"
        src="https://tally.so/widgets/embed.js"
        onLoad={() => {
          Tally.loadEmbeds();
        }}
      ></Script>
    </>
  );
}
