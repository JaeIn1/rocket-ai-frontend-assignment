import Image from 'next/image';

function FirstBottomOverlay() {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-10 aspect-[375/195] w-full">
      <Image
        src="/svg/firstContainer/bottom-overlay.svg"
        alt="Bottom Overlay"
        layout="fill"
        className="w-full object-cover"
      />
    </div>
  );
}

export default FirstBottomOverlay;
