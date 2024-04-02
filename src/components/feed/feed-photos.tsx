import { Photo } from "@/actions/photos-get";
import Link from "next/link";
import Image from "next/image";
import styles from "./feed.module.css";

export default function FeedPhotos({ photos }: { photos: Photo[] }) {
  return (
    <div>
      <h1>Feed Photos</h1>
      <ul>
        {photos.map((photo, i) => (
          <li key={photo.id + i}>
            <Link href={`/photo/${photo.id}`} scroll={false}>
              <Image
                src={photo.src}
                alt={photo.title}
                width={1500}
                height={1500}
                sizes="80vw"
              />
              <span>{photo.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
