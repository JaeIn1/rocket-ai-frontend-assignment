import Image from 'next/image';

function FirstSpeachBubble() {
  return (
    <div className="absolute bottom-[-15%] left-[5%] z-20 w-[60%]">
      <div className="relative aspect-[215/139] w-full">
        <Image src="/svg/common/speech-top.svg" alt="talk-image" fill priority className="object-contain" />
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center pt-4">
          <p className="text-base">이제 본격적으로</p>
          <p className="text-base">OO님의 사주팔자를</p>
          <p className="text-base">분석해볼 차례네요.</p>
        </div>
      </div>
    </div>
  );
}

export default FirstSpeachBubble;
