import FirstBackground from '../../components/FortuneFirst/FirstBackground';
import FirstTopOverlay from '../../components/FortuneFirst/FirstTopOverlay';
import FirstBottomOverlay from '../../components/FortuneFirst/FirstBottomOverlay';
import FirstTitle from '../../components/FortuneFirst/FirstTitle';
import FirstSpeachBubble from '../../components/FortuneFirst/SpeachBubble';

export default function FortuneFirstContainer() {
  return (
    <div className="flex w-full justify-center">
      <div className="relative aspect-[375/652] w-full">
        {/* 배경 오버레이*/}
        <FirstBackground />
        {/* 상단 오버레이*/}
        <FirstTopOverlay />
        {/* 바텀 오버레이*/}
        <FirstBottomOverlay />
        {/* 제목 */}
        <FirstTitle />
        {/* 말풍선 */}
        <FirstSpeachBubble />
      </div>
    </div>
  );
}
