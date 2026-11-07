const CLOUD =
  'M40 70a25 25 0 0 1 5-49 35 35 0 0 1 66-8 28 28 0 0 1 48 20 20 20 0 0 1 1 37z';

function Cloud({ className }) {
  return (
    <svg className={`cloud ${className}`} viewBox="0 0 200 80" aria-hidden="true">
      <path d={CLOUD} fill="#fff" />
    </svg>
  );
}

// Decorative Himalayan sunrise. Each layer moves at its own speed for parallax depth.
function Scene() {
  return (
    <div className="scene" aria-hidden="true">
      <div className="sun" />
      <Cloud className="cloud--a" />
      <Cloud className="cloud--b" />
      <Cloud className="cloud--c" />
      <svg className="birds" viewBox="0 0 90 34">
        <path d="M0 14q7-8 14 0 7-8 14 0M42 6q5-6 10 0 5-6 10 0M62 26q5-6 10 0 5-6 10 0" />
      </svg>

      <svg className="layer layer--far" viewBox="0 0 1600 520" preserveAspectRatio="none">
        <defs>
          <linearGradient id="far" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#a9c4ea" />
            <stop offset="1" stopColor="#dbe8f8" />
          </linearGradient>
          <linearGradient id="mid" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#7fa3dc" />
            <stop offset="1" stopColor="#bcd2f0" />
          </linearGradient>
          <linearGradient id="near" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#4a74c4" />
            <stop offset="1" stopColor="#8fb0e4" />
          </linearGradient>
        </defs>
        <g className="rise rise--1">
          <path
            fill="url(#far)"
            d="M0 420 120 300l90 50 130-160 80 70 100-110 100 120 100-70 100-80 80 90 110-120 120 150 110-70 100 110 120-80 140 120v200H0z"
          />
          <path fill="#fff" d="m1010 90 45 56-20-12-20 24-20-22-20 14-16-4z" />
          <path fill="#fff" d="m820 120 36 40-18-10-16 18-18-18-18 12-16-2z" />
          <path fill="#fff" d="m520 150 37 45-17-11-18 20-19-18-13 11-11-2z" />
        </g>
      </svg>
      <svg className="layer layer--mid" viewBox="0 0 1600 520" preserveAspectRatio="none">
        <g className="rise rise--2">
          <path
            fill="url(#mid)"
            d="M0 470c120-70 200-110 300-70s160-70 260-20 200-80 320-20 220-60 340 10 240-30 380 30v120H0z"
          />
        </g>
      </svg>
      <svg className="layer layer--near" viewBox="0 0 1600 520" preserveAspectRatio="none">
        <g className="rise rise--3">
          <path
            fill="url(#near)"
            d="M0 500c200-60 380-30 560-50s340-30 560 10 300-20 480 10v50H0z"
          />
        </g>
      </svg>
    </div>
  );
}

export default Scene;
