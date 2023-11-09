// pages/contact.jsx
import Script from "next/script";

export default function Quiz() {
  return (
    <>
      <iframe
        data-tally-src="https://tally.so/embed/3qGqD9?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height="564"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        title="Apakah kamu mengenal calon Pemimpin-mu?"
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
