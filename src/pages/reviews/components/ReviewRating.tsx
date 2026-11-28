import { Star } from "lucide-react";

export function ReviewRating({ rating, className = "" }: { rating: number; className?: string }) {
  return (
    <span role="img" aria-label={`${rating} out of 5 stars`} className={`inline-flex items-center gap-0.5 ${className}`}>
      {[1, 2, 3, 4, 5].map(value => (
        <Star key={value} size={13} aria-hidden="true" stroke={value <= rating ? "#F5B93E" : "#ecd2b9"} fill={value <= rating ? "#F5B93E" : "none"} />
      ))}
    </span>
  );
}
