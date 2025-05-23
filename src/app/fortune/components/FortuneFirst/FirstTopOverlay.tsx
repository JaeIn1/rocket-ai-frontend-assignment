import Image from 'next/image';

function FirstTopOverlay() {
  return (
    <div className="absolute left-0 right-0 top-0 z-10">
      <Image
        src="/svg/firstContainer/top-overlay.svg"
        alt="Top Overlay"
        width={448}
        height={84}
        className="h-auto w-full object-cover"
      />
    </div>
  );
}

export default FirstTopOverlay;
