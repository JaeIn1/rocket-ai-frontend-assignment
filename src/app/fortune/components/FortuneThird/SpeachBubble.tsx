import Image from 'next/image';

function ThirdSpeachBubble() {
  return (
    <div className="absolute left-[-3%] top-[-40%] z-20 w-[82%]">
      <div className="relative aspect-[239/138]">
        <Image src="/svg/common/speech-bottom.svg" alt="talk-image" fill priority className="object-contain" />
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center pb-8">
          <p className="text-base">제가 oo님의 사주를</p>
          <p className="text-base">보기 쉽게 표로 정리했어요</p>
        </div>
      </div>
    </div>
  );
}

export default ThirdSpeachBubble;
