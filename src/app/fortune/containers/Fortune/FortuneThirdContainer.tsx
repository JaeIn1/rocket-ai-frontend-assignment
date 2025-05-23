import Image from 'next/image';
import ThirdBottomOverlay from '../../components/FortuneThird/ThirdBottomOverlay';
import ThirdSpeachBubble from '../../components/FortuneThird/SpeachBubble';
import CompleteSajuTable from '../../components/FortuneThird/CompleteSajuTable';

export default function FortuneFirstContainer() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="relative aspect-[375/306] w-full">
        <Image
          src="/svg/thirdContainer/third-top.svg"
          alt="third-top"
          layout="fill"
          priority
          className="h-auto w-full object-contain"
        />
        <ThirdBottomOverlay />
        <ThirdSpeachBubble />
      </div>

      <div className="relative z-20 aspect-[351/621] w-[95%] -translate-y-5">
        <Image
          src="/svg/thirdContainer/fortune-table.svg"
          alt="fortune-table"
          layout="fill"
          className="object-contain"
        />

        <div className="absolute inset-0">
          <CompleteSajuTable />
        </div>
      </div>
    </div>
  );
}
