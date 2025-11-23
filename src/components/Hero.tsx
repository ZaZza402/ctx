import React, { Suspense } from "react";

// Lazy load Spline so the site loads instantly
const Spline = React.lazy(() => import("@splinetool/react-spline"));

export function Hero() {
  return (
    <section className="relative w-full h-dvh flex items-center justify-center overflow-hidden">
      {/* SEO & Accessibility Patch (Visually Hidden) */}
      <div className="sr-only">
        <h1 className="font-display">Future of Finance</h1>
        <p>
          Secure, decentralized, and lightning fast. Experience the flow of data
          like never before.
        </p>
      </div>
      {/* 3D Scene Layer */}
      <div className="absolute inset-0 z-0">
        <Suspense
          fallback={
            <div className="w-full h-full flex items-center justify-center text-white/20 animate-pulse">
              Loading Neural Network...
            </div>
          }
        >
          <Spline
            className="w-full h-full"
            scene="https://prod.spline.design/B5dQMNE20GZ2ow9s/scene.splinecode"
          />
        </Suspense>
      </div>
      {/* Mobile Safety Overlay (Prevents scroll trapping) */}
      <div className="absolute inset-0 z-20 md:hidden pointer-events-none" />
    </section>
  );
}
