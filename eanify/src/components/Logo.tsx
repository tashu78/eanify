import Link from "next/link";

interface LogoProps {
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Logo({ showText = true, size = "md", className = "" }: LogoProps) {
  const sizes = {
    sm: { container: "h-7 w-7", icon: "h-4 w-4", text: "text-lg" },
    md: { container: "h-9 w-9", icon: "h-5 w-5", text: "text-xl" },
    lg: { container: "h-12 w-12", icon: "h-7 w-7", text: "text-2xl" },
  };

  const s = sizes[size];

  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <div className={`flex ${s.container} items-center justify-center rounded-lg bg-gradient-brand relative overflow-hidden`}>
        {/* Barcode-style E logo */}
        <svg
          viewBox="0 0 32 32"
          fill="none"
          className={`${s.icon} text-white`}
        >
          {/* Stylized barcode forming letter E */}
          <rect x="4" y="4" width="3" height="24" fill="currentColor" />
          <rect x="9" y="4" width="2" height="6" fill="currentColor" />
          <rect x="13" y="4" width="3" height="6" fill="currentColor" />
          <rect x="18" y="4" width="2" height="6" fill="currentColor" />
          <rect x="22" y="4" width="3" height="6" fill="currentColor" />
          <rect x="9" y="13" width="2" height="6" fill="currentColor" />
          <rect x="13" y="13" width="3" height="6" fill="currentColor" />
          <rect x="18" y="13" width="2" height="6" fill="currentColor" />
          <rect x="9" y="22" width="2" height="6" fill="currentColor" />
          <rect x="13" y="22" width="3" height="6" fill="currentColor" />
          <rect x="18" y="22" width="2" height="6" fill="currentColor" />
          <rect x="22" y="22" width="3" height="6" fill="currentColor" />
        </svg>
      </div>
      {showText && (
        <span className={`${s.text} font-bold text-gradient`}>EANify</span>
      )}
    </Link>
  );
}

export function BarcodeHeroImage() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
        {/* Barcode */}
        <div className="flex justify-center items-end gap-[2px] h-32 mb-4">
          {/* Barcode bars with varying widths */}
          <div className="w-1 h-full bg-gray-900 rounded-t-sm" />
          <div className="w-2 h-full bg-gray-900 rounded-t-sm" />
          <div className="w-1 h-[90%] bg-gray-900 rounded-t-sm" />
          <div className="w-3 h-full bg-gray-900 rounded-t-sm" />
          <div className="w-1 h-[85%] bg-gray-900 rounded-t-sm" />
          <div className="w-2 h-full bg-gray-900 rounded-t-sm" />
          <div className="w-1 h-[95%] bg-gray-900 rounded-t-sm" />
          <div className="w-1 h-full bg-gray-900 rounded-t-sm" />
          <div className="w-3 h-[88%] bg-gray-900 rounded-t-sm" />
          <div className="w-1 h-full bg-gray-900 rounded-t-sm" />
          <div className="w-2 h-[92%] bg-gray-900 rounded-t-sm" />
          <div className="w-1 h-full bg-gray-900 rounded-t-sm" />
          <div className="w-2 h-[87%] bg-gray-900 rounded-t-sm" />
          <div className="w-3 h-full bg-gray-900 rounded-t-sm" />
          <div className="w-1 h-[90%] bg-gray-900 rounded-t-sm" />
          <div className="w-1 h-full bg-gray-900 rounded-t-sm" />
          <div className="w-2 h-[94%] bg-gray-900 rounded-t-sm" />
          <div className="w-1 h-full bg-gray-900 rounded-t-sm" />
          <div className="w-3 h-[86%] bg-gray-900 rounded-t-sm" />
          <div className="w-1 h-full bg-gray-900 rounded-t-sm" />
          <div className="w-2 h-[91%] bg-gray-900 rounded-t-sm" />
          <div className="w-1 h-full bg-gray-900 rounded-t-sm" />
          <div className="w-2 h-[89%] bg-gray-900 rounded-t-sm" />
          <div className="w-1 h-full bg-gray-900 rounded-t-sm" />
          <div className="w-3 h-[93%] bg-gray-900 rounded-t-sm" />
          <div className="w-1 h-full bg-gray-900 rounded-t-sm" />
          <div className="w-2 h-full bg-gray-900 rounded-t-sm" />
        </div>
        {/* Text under barcode */}
        <div className="text-center">
          <span className="font-mono text-lg font-bold tracking-[0.3em] text-gradient">
            EANify.store
          </span>
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
      <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
    </div>
  );
}
