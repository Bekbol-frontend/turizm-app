import dynamic from "next/dynamic";

export const ContactMapComponent = dynamic(() => import("./ContactMap"), {
  ssr: false,
});
