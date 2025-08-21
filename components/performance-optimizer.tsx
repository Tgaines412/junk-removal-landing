export function PerformanceOptimizer() {
  return (
    <>
      {/* Preload critical resources */}
      <link
        rel="preload"
        href="/junk-removal-action.jpg"
        as="image"
        type="image/jpeg"
      />
      <link
        rel="preload"
        href="/bin-busters-logo.png"
        as="image"
        type="image/png"
      />
      
      {/* Preload fonts */}
      <link
        rel="preload"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        as="style"
        onLoad="this.onload=null;this.rel='stylesheet'"
      />
      
      {/* DNS Prefetch for external domains */}
      <link rel="dns-prefetch" href="//www.google.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      <link rel="dns-prefetch" href="//maps.google.com" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://www.google.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://maps.google.com" crossOrigin="anonymous" />
      
      {/* Resource hints for better performance */}
      <link rel="prefetch" href="/what-we-remove/" />
      <link rel="prefetch" href="/afterpay/" />
      <link rel="prefetch" href="/marketing-plan/" />
      
      {/* Critical CSS inline */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            /* Critical CSS for above-the-fold content */
            .hero-section {
              min-height: 90vh;
              display: flex;
              align-items: center;
            }
            .hero-title {
              font-size: clamp(2rem, 5vw, 6rem);
              font-weight: 700;
              line-height: 1.1;
            }
            .cta-button {
              background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
              transition: all 0.2s ease;
            }
            .cta-button:hover {
              transform: translateY(-2px);
              box-shadow: 0 10px 25px rgba(220, 38, 38, 0.3);
            }
          `
        }}
      />
    </>
  )
}
