type WordOptionProps = {
  word: string
  onDragStart: (e: React.DragEvent<HTMLDivElement>, word: string) => void
  onTouchStart: (word: string) => void
  disabled: boolean
}

export default function WordOption({ word, onDragStart, onTouchStart, disabled }: WordOptionProps) {
  return (
    <div
      draggable={!disabled}
      onDragStart={(e) => onDragStart(e, word)}
      onTouchStart={() => onTouchStart(word)} // 
      className={`cursor-${disabled ? 'not-allowed' : 'grab'} 
        ${disabled ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'} 
        text-white px-4 py-2 rounded-lg shadow transition select-none`}
    >
      {word}
    </div>
  )
}
