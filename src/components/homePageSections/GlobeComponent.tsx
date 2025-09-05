import React, { useRef, useEffect, useState } from "react";
import Globe from "react-globe.gl";

const GlobeComponent: React.FC = () => {
  const globeRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        });
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); 

const markers = [
  { lat: 25.7617, lng: -80.1918, text: "USA-Miami" },
  { lat: 42.3601, lng: -71.0589, text: "USA-Boston" },
  { lat: 51.5074, lng: -0.1278, text: "UK-London" },
  { lat: 52.5200, lng: 13.4050, text: "Germany" },
  { lat: 52.2297, lng: 21.0122, text: "Poland" },
  { lat: 52.3676, lng: 4.9041, text: "Netherlands" },
  { lat: 47.4979, lng: 19.0402, text: "Hungary" },
  { lat: 44.4268, lng: 26.1025, text: "Romania" },
  { lat: 24.4539, lng: 54.3773, text: "Abu Dhabi" },
  { lat: 1.3521, lng: 103.8198, text: "Singapore" },
];

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", height: "100%", position: "relative" }}
    >
      {dimensions.width > 0 && dimensions.height > 0 && (
        <Globe
          ref={globeRef}
          width={dimensions.width}
          height={dimensions.height}
          backgroundColor="rgba(0,0,0,0)"
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          onGlobeReady={() => {
            if (globeRef.current) {
              const controls = globeRef.current.controls();
              controls.autoRotate = true;
              controls.autoRotateSpeed = 0.6;
              controls.enableZoom = false;
            }
          }}
          htmlElementsData={markers}
          htmlLat={(d: any) => d.lat}
          htmlLng={(d: any) => d.lng}
          htmlElement={(d: any) => {
            const el = document.createElement("div");
            el.style.pointerEvents = "none";
            el.innerHTML = `
              <div style="
                position: relative; 
                transform: translate(-50%, -100%); 
                text-align: center;
                width: 36px;
                height: 36px;
              ">
                <svg 
                  viewBox="-4 0 36 36" 
                  fill="#000000"  
                  style="width: 100%; height: 100%;"
                >
                  <path d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
                </svg>

                <div class="pulsing-dot-in-pin"></div>

                <span style="
                  display: block; 
                  margin-top: 8px; 
                  color: #f8fafc; 
                  font-size: 14px; 
                  font-weight: 600; 
                  text-shadow: 0 1px 3px rgba(0,0,0,0.9);
                  white-space: nowrap;
                ">${d.text}</span>
              </div>
            `;
            return el;
          }}
        />
      )}
    </div>
  );
};

export default GlobeComponent;