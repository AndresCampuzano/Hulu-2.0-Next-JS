import Image from "next/image";

export default function Header() {
  return (
    <header className="">
      <h1>this is the header</h1>
      <Image src="https://links.papareact.com/ua6" width={200} height={100} />
    </header>
  );
}
