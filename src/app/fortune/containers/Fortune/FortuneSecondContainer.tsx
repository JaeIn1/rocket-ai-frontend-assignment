import SecondRightSvg from '../../components/FortuneSecond/SecondRightSvg';
import SecondLeftSvg from '../../components/FortuneSecond/SecondLeftSvg';

export default function FortuneFirstContainer() {
  return (
    <div className="flex w-full justify-center">
      <div className="relative aspect-[15/16] w-full max-w-[448px]">
        {/* 첫 번째 이미지 */}
        <SecondRightSvg />
        {/* 두 번째 이미지 */}
        <SecondLeftSvg />
      </div>
    </div>
  );
}
