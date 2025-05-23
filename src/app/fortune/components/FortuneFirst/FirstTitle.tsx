import Image from 'next/image';

function FirstTitle() {
  return (
    <div className="absolute left-1/2 top-[19%] z-20 w-[42%] -translate-x-1/2 -translate-y-1/2">
      <div className="relative aspect-[157/84] w-full">
        <Image src="/svg/firstContainer/title-text.svg" alt="first-title" fill priority className="object-contain" />
      </div>
    </div>
  );
}

export default FirstTitle;
