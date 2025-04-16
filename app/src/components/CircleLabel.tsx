
import React from 'react';

type Props = {
  number: number;
  faded?: boolean;
};

const colors = [
  'from-red-400 to-red-600',
  'from-yellow-300 to-yellow-500',
  'from-blue-400 to-blue-600',
  'from-green-400 to-green-600',
];

export default function CircleLabel({ number, faded = false }: Props) {
  return (
    <span
      className={`inline-flex items-center justify-center text-white font-bold text-sm w-6 h-6 rounded-full
        bg-gradient-to-br ${colors[number]}
        ${faded ? 'opacity-40' : ''}`}
    >
      {number + 1}
    </span>
  );
}
