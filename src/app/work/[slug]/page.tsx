"use client";
import { listClients } from "@/app/data/clients";
import { generateSlug } from "@/app/lib/utils";
import { useParams } from "next/navigation";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import { useEffect, useState } from "react";

export default function Slug() {
  const [index, setIndex] = useState(-1);
  const params = useParams<{ slug: string }>();
  const slug = params.slug;
  const [page, setPage] = useState(1);
  const client = listClients.find((item) => generateSlug(item.title) === slug);

  const itemPerPage = 6;
  const totalPage = Math.ceil((client?.images.length ?? 0) / itemPerPage);

  const start = itemPerPage * (page - 1);
  const end = start + itemPerPage;

  const currentImages = client?.images.slice(start, end) ?? [];

  useEffect(() => {
    setPage(1);
  }, [slug]);
  return (
    <section>
      <div className="max-w-7xl mx-auto py-16 px-4 space-y-8">
        <div>
          <h1 className="text-5xl tracking-wider">{client?.title}</h1>
        </div>
        <div>
          <p className="font-semibold text-xl">
            Client: <span className="font-normal">{client?.client}</span>
          </p>
          <p className="font-semibold text-xl">
            Date: <span className="font-normal">{client?.date}</span>
          </p>
          <p className="font-semibold text-xl">
            Location: <span className="font-normal">{client?.location}</span>
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4">
        <Lightbox
          index={index}
          plugins={[Zoom, Fullscreen, Thumbnails]}
          slides={
            currentImages.map((image) => ({
              src: image.url,
              alt: "Portrait Studio",
              classname: "object-cover",
            })) ?? []
          }
          open={index >= 0}
          close={() => setIndex(-1)}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {currentImages.map((image, i) => (
            <button
              key={image.id}
              onClick={() => setIndex(i)}
              className="relative h-120 w-full"
            >
              <Image
                src={image.url}
                alt="Portrait Studio"
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>

        <div className="mt-4 text-xl flex items-center justify-end gap-4">
          <button
            onClick={() => setPage((prev) => prev - 1)}
            disabled={page === 1}
            className="cursor-pointer"
          >
            Previous
          </button>
          <span>
            {page} / {totalPage}
          </span>
          <button
            onClick={() => setPage((prev) => prev + 1)}
            disabled={page === totalPage}
            className="cursor-pointer"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
