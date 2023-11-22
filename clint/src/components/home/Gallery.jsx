import gallery1 from "../../assets/gallery/1.avif";
import gallery2 from "../../assets/gallery/2.avif";
import gallery3 from "../../assets/gallery/3.avif";
import gallery4 from "../../assets/gallery/4.avif";
import gallery5 from "../../assets/gallery/5.avif";
import gallery6 from "../../assets/gallery/6.avif";
import gallery7 from "../../assets/gallery/7.avif";
import gallery8 from "../../assets/gallery/8.avif";
import gallery9 from "../../assets/gallery/9.avif";
import gallery10 from "../../assets/gallery/10.avif";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Gallery = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-50 mb-10">
      <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
        <LazyLoadImage
          src={gallery1}
          alt="Gallery Image"
          className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square hover:scale-105 duration-300 ease-linear"
        />
        <LazyLoadImage
          alt="Gallery Image"
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square hover:scale-105 duration-300 ease-linear"
          src={gallery2}
        />
        <LazyLoadImage
          alt="Gallery Image"
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square hover:scale-105 duration-300 ease-linear"
          src={gallery3}
        />
        <LazyLoadImage
          alt="Gallery Image"
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square hover:scale-105 duration-300 ease-linear"
          src={gallery4}
        />
        <LazyLoadImage
          alt="Gallery Image"
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square hover:scale-105 duration-300 ease-linear"
          src={gallery5}
        />
        <LazyLoadImage
          alt="Gallery Image"
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square hover:scale-105 duration-300 ease-linear"
          src={gallery6}
        />
        <LazyLoadImage
          alt="Gallery Image"
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square hover:scale-105 duration-300 ease-linear"
          src={gallery7}
        />
        <LazyLoadImage
          alt="Gallery Image"
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square hover:scale-105 duration-300 ease-linear"
          src={gallery8}
        />
        <LazyLoadImage
          alt="Gallery Image"
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square hover:scale-105 duration-300 ease-linear"
          src={gallery9}
        />
        <LazyLoadImage
          src={gallery10}
          alt="Gallery Image"
          className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square hover:scale-105 duration-300 ease-linear"
        />
      </div>
    </section>
  );
};

export default Gallery;
