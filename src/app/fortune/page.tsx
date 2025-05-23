import FortuneFirstContainer from './containers/Fortune/FortuneFirstContainer';
import FortuneSecondContainer from './containers/Fortune/FortuneSecondContainer';
import FortuneThirdContainer from './containers/Fortune/FortuneThirdContainer';

export default function FortunePage() {
  return (
    <div className="flex min-h-screen w-full justify-center">
      <div className="w-full max-w-[448px] bg-[#F3F2F0] pb-[50px]">
        <FortuneFirstContainer />
        <FortuneSecondContainer />
        <FortuneThirdContainer />
      </div>
    </div>
  );
}
