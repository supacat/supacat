import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Supacat",
    short_name: "Supacat",
    description:
      "We create software to help people because it's fulfilling and we're passionate about it. We believe that's the best reason to do anything.",
    start_url: "/",
    display: "standalone",
    background_color: "#FDFDFB",
    theme_color: "#FDFDFB",
    orientation: "portrait",
    scope: "/",
    categories: ["startup", "studio"],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "16x16 32x32 48x48",
        type: "image/x-icon",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
