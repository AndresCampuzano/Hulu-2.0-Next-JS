import Image from "next/image";
import { HeaderItem } from "./HeaderItem";
import { Nav } from "./Nav";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

export const Header = () => {
  return (
    <>
      <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
        <div className="flex flex-grow justify-evenly max-w-2xl ">
          <HeaderItem title="HOME" icon={HomeIcon} />
          <HeaderItem title="TRENDING" icon={LightningBoltIcon} />
          <HeaderItem title="VERIFIED" icon={BadgeCheckIcon} />
          <HeaderItem title="COLLECTIONS" icon={CollectionIcon} />
          <HeaderItem title="SEARCH" icon={SearchIcon} />
          <HeaderItem title="ACCOUNT" icon={UserIcon} />
        </div>
        <Image
          className="object-contain"
          src="https://links.papareact.com/ua6"
          width={200}
          height={100}
        />
      </header>
      <Nav />
    </>
  );
};
