import type { MetadataRoute } from "next";
import AndroidIcon from '/public/images/Metadata/android-touch-icon.png'
import AndroidIcon512 from '/public/images/Metadata/android-touch-icon-512.png'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "トーラムいろいろツール",
    description: "トーラムのいろいろなツール",
    icons: [
      {
        src: AndroidIcon.src,
        type: "image/png",
        sizes: "192x192"
      },
      {
        src: AndroidIcon512.src,
        type: "image/png",
        sizes: "512x512"

      }
    ]
  }
}