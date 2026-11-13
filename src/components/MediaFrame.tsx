import { useEffect, useState } from 'react';
import { Layers } from 'lucide-react';

interface MediaFrameProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  fallbackTitle?: string;
  loading?: 'eager' | 'lazy';
}

export function MediaFrame({
  src,
  alt,
  className = '',
  imgClassName = 'w-full h-full object-cover',
  fallbackTitle = 'Clean Pros Surface Care',
  loading = 'lazy',
}: MediaFrameProps) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  }, [src]);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`relative flex flex-col items-center justify-center bg-gradient-to-br from-[#EAF0F4] via-white to-[#DCE6EE] border border-[#344957]/15 text-[#17232D] p-6 text-center ${className}`}
      >
        <Layers className="w-8 h-8 text-[#1687D9] mb-2" aria-hidden="true" />
        <p className="font-display font-semibold text-sm text-[#17232D]">
          {fallbackTitle}
        </p>
        <p className="text-xs text-[#344957] mt-1 max-w-xs">{alt}</p>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#EAF0F4] ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding={loading === 'eager' ? 'sync' : 'async'}
        fetchPriority={loading === 'eager' ? 'high' : 'auto'}
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
        className={imgClassName}
      />
    </div>
  );
}
