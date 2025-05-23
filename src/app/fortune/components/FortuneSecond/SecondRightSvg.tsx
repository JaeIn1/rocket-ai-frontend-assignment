import Image from 'next/image';

function SecondRightSvg() {
  return (
    <div className="absolute right-[7%] top-[23%] w-[43%]">
      <Image
        src="/svg/secondContainer/second-right.svg"
        alt="second-right"
        width={161}
        height={285}
        priority
        className="h-auto w-full object-contain"
      />
    </div>
  );
}

export default SecondRightSvg;
