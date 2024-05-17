"use client";

import Link from "next/link";
import Image from "next/image";

import iconImg from "@/assets/icon.png";
import { usePathname } from "next/navigation";

function AppHeader() {
  const path = usePathname();

  return (
    <header className="flex flex-row shadow-lg bg-green-600 text-white p-4 gap-3 items-center">
      <div>
        <Link href={"/"}>
          <Image
            src={iconImg}
            alt="about food"
            height={50}
            // sizes="10vw"
            priority
          />
        </Link>
      </div>

      <div className="flex flex-row gap-3">
        <div>
          <Link
            href={"/feed"}
            className={
              path.startsWith("/feed")
                ? "bg-slate-50 text-gray-600  p-2"
                : "p-2"
            }
          >
            Browse Feeds
          </Link>
        </div>
        <div>
          <Link
            href={"/new-feed"}
            className={
              path.startsWith("/new-feed")
                ? "bg-slate-50 text-gray-600 p-2"
                : "p-2"
            }
          >
            New Feed
          </Link>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
