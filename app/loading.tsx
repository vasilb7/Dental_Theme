export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[60vh] loading-container">
      <div className="loading scale-150">
        <svg width="64px" height="48px">
          <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="back" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></polyline>
          <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="front" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></polyline>
        </svg>
      </div>
    </div>
  );
}
