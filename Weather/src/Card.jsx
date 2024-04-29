export default function Card({title,desc}) {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">
            {desc}
          </p>
        </div>
      </div>
    </>
  );
}
