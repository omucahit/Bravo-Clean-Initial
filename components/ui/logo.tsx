import Image from "next/image";

export function Logo() {
  return (
    <div className="relative w-[280px] h-[80px]">
      <Image
        src="/logo.svg"
        alt="Bravo Clean Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}
