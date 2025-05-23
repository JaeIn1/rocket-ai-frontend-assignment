import Image from 'next/image';

function FirstBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Image src="/svg/firstContainer/first-bg.svg" alt="Background" fill priority className="object-cover" />
    </div>
  );
}

export default FirstBackground;
