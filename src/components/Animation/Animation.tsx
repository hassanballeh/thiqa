import { useEffect, useState } from 'react';
const colors = ['text-red-500', 'text-yellow-500', 'text-green-500', 'text-blue-500', 'text-purple-500'];

const AnimatedText = () => {
  const text = 'Take Comfort';
  const letters = text.split('');
  const groupSize = 2;
  const [step, setStep] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => {
        const next = reverse ? prev - 1 : prev + 1;
        if (next >= Math.ceil(letters.length / groupSize)) {
          setReverse(true);
          return prev - 1;
        }
        if (next < 0) {
          setReverse(false);
          return prev + 1;
        }
        return next;
      });
    }, 300); // مدة التغيير بين كل خطوتين

    return () => clearInterval(interval);
  }, [reverse]);

  const getColorForGroup = (groupIndex: number) => {
    if (groupIndex === step) {
      return colors[groupIndex % colors.length];
    }
    return 'text-black'; // اللون الافتراضي
  };

  return (
    <h2 className="text-5xl w-1/2 leading-snug font-bold flex flex-wrap gap-1">
      {letters.map((char, idx) => {
        const groupIndex = Math.floor(idx / groupSize);
        return (
          <span key={idx} className={`${getColorForGroup(groupIndex)} transition duration-300`}>
            {char}
          </span>
        );
      })}
    </h2>
  );
};

export default AnimatedText;
