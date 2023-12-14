export function DesktopGrain() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 700 700"
      opacity="1"
    >
      <defs>
        <filter
          id="nnnoise-filter"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
          color-interpolation-filters="linearRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.2"
            numOctaves="4"
            seed="15"
            stitchTiles="stitch"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            result="turbulence"
          ></feTurbulence>
          <feSpecularLighting
            surfaceScale="6"
            specularConstant="1.3"
            specularExponent="20"
            lighting-color="#6d6d6d"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            in="turbulence"
            result="specularLighting"
          >
            <feDistantLight azimuth="3" elevation="95"></feDistantLight>
          </feSpecularLighting>
        </filter>
      </defs>
      <rect width="700" height="700" fill="transparent"></rect>
      <rect
        width="700"
        height="700"
        fill="#a1a1a1"
        filter="url(#nnnoise-filter)"
      ></rect>
    </svg>
  )
}

export function MobileGrain() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 700 700"
      opacity="1"
      width={700}
      height={700}
    >
      <defs>
        <filter
          id="nnnoise-filter"
          x="-20%"
          y="-20%"
          width="140%"
          height="200%"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
          color-interpolation-filters="linearRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.2"
            numOctaves="4"
            seed="15"
            stitchTiles="stitch"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            result="turbulence"
          ></feTurbulence>
          <feSpecularLighting
            surfaceScale="6"
            specularConstant="1.3"
            specularExponent="20"
            lighting-color="#6d6d6d"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            in="turbulence"
            result="specularLighting"
          >
            <feDistantLight azimuth="3" elevation="95"></feDistantLight>
          </feSpecularLighting>
        </filter>
      </defs>
      <rect width="700" height="700" fill="transparent"></rect>
      <rect
        width="700"
        height="700"
        fill="#a1a1a1"
        filter="url(#nnnoise-filter)"
      ></rect>
    </svg>
  )
}
