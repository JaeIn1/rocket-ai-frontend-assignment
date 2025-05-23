import Image from 'next/image';

function ThirdBottomOverlay() {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-10 aspect-[375/118] w-full">
      <Image
        src="/svg/thirdContainer/bottom-overlay.svg"
        alt="Bottom Overlay"
        layout="fill"
        className="w-full object-cover"
      />
    </div>
  );
}

export default ThirdBottomOverlay;
