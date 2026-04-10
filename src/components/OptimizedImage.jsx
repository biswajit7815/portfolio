import React from 'react';

/**
 * Optimized Image Component
 * 
 * Best Practices Encapsulated:
 * 1. CLS (Cumulative Layout Shift) Guard: Explicit width/height preserves aspect ratio container limits.
 * 2. LCP (Largest Contentful Paint) Boost: Selectively uses loading="eager" and decoding="sync" for above-the-fold content.
 * 3. Fallback Management: Uses decoding="async" for offscreen elements to prevent thread locking.
 */
export const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  priority = false, // Set to true if image is above the fold (Hero context)
  className = "",
  ...props
}) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      // Priority handling for Critical Rendering Path
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      // Prevents dragging the phantom image
      draggable={false}
      className={`max-w-full h-auto object-cover ${className}`}
      {...props}
    />
  );
};

export default OptimizedImage;
