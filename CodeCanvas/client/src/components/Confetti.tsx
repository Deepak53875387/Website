import { useEffect, useState } from "react";

type ConfettiPiece = {
  id: number;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  color: string;
  velocity: { x: number; y: number };
};

export function useConfetti() {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);

  const triggerConfetti = () => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const pieces: ConfettiPiece[] = [];
    const colors = [
      "hsl(var(--chart-1))",
      "hsl(var(--chart-2))",
      "hsl(var(--chart-3))",
      "hsl(var(--chart-4))",
      "hsl(var(--chart-5))",
    ];

    for (let i = 0; i < 50; i++) {
      pieces.push({
        id: Date.now() + i,
        x: 50,
        y: 50,
        rotation: Math.random() * 360,
        scale: Math.random() * 0.5 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        velocity: {
          x: (Math.random() - 0.5) * 10,
          y: Math.random() * -15 - 5,
        },
      });
    }

    setConfetti(pieces);

    setTimeout(() => {
      setConfetti([]);
    }, 3000);
  };

  return { confetti, triggerConfetti };
}

export function ConfettiCanvas({ confetti }: { confetti: ConfettiPiece[] }) {
  const [animatedConfetti, setAnimatedConfetti] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    if (confetti.length === 0) {
      setAnimatedConfetti([]);
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setAnimatedConfetti([]);
      return;
    }

    setAnimatedConfetti(confetti);

    const interval = setInterval(() => {
      setAnimatedConfetti((prev) =>
        prev.map((piece) => ({
          ...piece,
          x: piece.x + piece.velocity.x * 0.1,
          y: piece.y + piece.velocity.y * 0.1,
          rotation: piece.rotation + 5,
          velocity: {
            x: piece.velocity.x * 0.98,
            y: piece.velocity.y + 0.5,
          },
        }))
      );
    }, 16);

    return () => clearInterval(interval);
  }, [confetti]);

  if (animatedConfetti.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[60]">
      {animatedConfetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute w-3 h-3 rounded-sm"
          style={{
            left: `${piece.x}%`,
            top: `${piece.y}%`,
            transform: `rotate(${piece.rotation}deg) scale(${piece.scale})`,
            backgroundColor: piece.color,
            transition: "all 16ms linear",
          }}
        />
      ))}
    </div>
  );
}
