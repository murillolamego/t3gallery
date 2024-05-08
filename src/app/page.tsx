import { url } from "inspector";
import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/f7a35b0c-f876-4817-a110-f4e8453257bf-1u7hy.jfif",
  "https://utfs.io/f/e40db09f-77f1-4fa2-bc6b-572bc74d90e3-1u7hz.jfif",
  "https://utfs.io/f/2c644ddb-7545-423b-a89d-aec309be053f-1u7i0.jfif",
  "https://utfs.io/f/22610572-71e7-4e23-a748-592610aaa066-1u7hx.jpg"
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="flex flex-wrap gap-4">
      <div className="flex flex-wrap">{
        [...mockImages,...mockImages,...mockImages,...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" className="h-full object-cover"/>
          </div>
        ))
      }
      </div>
    </main>
  );
}
