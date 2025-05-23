import Image from 'next/image';

function SecondLeftSvg() {
  return (
    <div className="absolute bottom-[18%] w-[43%]">
      <Image
        src="/svg/secondContainer/second-left.svg"
        alt="second-right"
        width={161}
        height={285}
        priority
        className="h-auto w-full object-contain"
      />
    </div>
  );
}

export default SecondLeftSvg;
