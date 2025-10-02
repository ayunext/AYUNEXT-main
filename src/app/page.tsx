"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleServiceClick = (serviceType: string) => {
    router.push(`/services/${serviceType}`);
  };
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');
        
        html, body {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100vh;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
          background: #000;
          color: #fff;
          animation: fadeIn 1.2s ease-in-out both;
        }

        /* Mobile Responsive Styles */
        @media (max-width: 768px) {
          html, body {
            overflow-y: auto;
            height: auto;
            min-height: 100vh;
          }

          .logo-responsive {
            width: 120px !important;
            height: 54px !important;
            left: calc(50% - 60px) !important;
            top: 10px !important;
          }

          .tagline-responsive {
            font-size: 16px !important;
            left: 20px !important;
            width: calc(100% - 40px) !important;
            top: 70px !important;
            height: auto !important;
            padding: 0 10px;
          }

          .banner-text-responsive {
            font-size: 24px !important;
            padding: 0 20px;
            height: 50px !important;
          }

          /* Mobile background adjustments */
          .mobile-bg-gray {
            height: 100px !important;
          }

          .mobile-bg-white {
            height: 110px !important;
          }

          .mobile-blue-banner {
            top: 110px !important;
            height: 50px !important;
          }

          .mobile-blue-banner-text {
            top: 110px !important;
            height: 50px !important;
          }

          .services-container-responsive {
            flex-direction: column !important;
            position: relative !important;
            top: 0 !important;
            height: auto !important;
            margin-top: 150px;
          }

          .services-container-responsive > div {
            width: 100% !important;
            height: 300px !important;
            margin-bottom: 0;
          }

          .services-container-responsive > div:hover {
            width: 100% !important;
          }

          .services-container-responsive > div > div:last-child {
            bottom: 10px !important;
            left: 20px !important;
          }

          .services-container-responsive > div > div:last-child > div:first-child {
            font-size: 24px !important;
            margin-bottom: 12px !important;
          }

          .services-container-responsive > div > div:last-child > div:last-child {
            padding: 8px 16px !important;
            font-size: 14px !important;
            display: block !important;
            opacity: 1 !important;
            width:100px;
            background-color: #1394bc !important;
          }
        }

        @media (max-width: 480px) {
          .tagline-responsive {
            font-size: 14px !important;
            left: 10px !important;
            width: calc(100% - 20px) !important;
          }

          .banner-text-responsive {
            font-size: 20px !important;
            padding: 0 10px;
          }

          .services-container-responsive > div > div:last-child > div:first-child {
            font-size: 20px !important;
          }
        }
      `}</style>

      <div style={{
        backgroundColor: '#ffffff',
        minHeight: '100vh',
        width: '100vw',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background rectangle */}
        <div style={{
          backgroundColor: '#d9d9d9',
          height: '153px',
          left: '0',
          position: 'absolute',
          top: '0',
          width: '100%'
        }} className="mobile-bg-gray" />

        {/* White overlay */}
        <div style={{
          backgroundColor: '#ffffff',
          height: '166px',
          left: '0',
          position: 'absolute',
          top: '0',
          width: '100%'
        }} className="mobile-bg-white" />

        {/* Logo */}
        <Image
          alt="Image"
          src="/image 2.png"
          width={183}
          height={83}
          style={{
            aspectRatio: '2.22',
            height: '83px',
            left: 'calc(50.00% - 92px)',
            position: 'absolute',
            top: '24px',
            width: '183px'
          }}
          className="logo-responsive"
        />

        {/* Tagline */}
        <p style={{
          alignItems: 'center',
          color: '#757575',
          display: 'flex',
          fontFamily: 'Montserrat, Helvetica, sans-serif',
          fontSize: '22px',
          fontStyle: 'italic',
          fontWeight: '500',
          height: '27px',
          justifyContent: 'center',
          left: 'calc(50.00% - 253px)',
          letterSpacing: '0',
          lineHeight: 'normal',
          position: 'absolute',
          textAlign: 'center',
          top: '118px',
          width: '506px'
        }}
          className="tagline-responsive">
          Powering Growth with Technology &amp; Services
        </p>

        {/* Blue banner */}
        <div style={{
          backgroundColor: '#1394bc',
          height: '69px',
          left: '0',
          position: 'absolute',
          top: '166px',
          width: '100%'
        }} className="mobile-blue-banner" />

        {/* Banner text */}
        <div style={{
          alignItems: 'center',
          color: '#ffffff',
          display: 'flex',
          fontFamily: 'Montserrat, Helvetica, sans-serif',
          fontSize: '42px',
          fontWeight: '700',
          height: '69px',
          justifyContent: 'center',
          left: '0',
          letterSpacing: '0',
          lineHeight: 'normal',
          position: 'absolute',
          textAlign: 'center',
          top: '166px',
          width: '100%'
        }}
          className="banner-text-responsive mobile-blue-banner-text">
          DISCOVER OUR SERVICES
        </div>

        {/* Services Container */}
        <div style={{
          display: 'flex',
          position: 'absolute',
          top: '235px',
          left: '0',
          width: '100%',
          height: 'calc(100vh - 235px)'
        }}
          className="services-container-responsive">


          {/* First service image */}
          <div
            style={{
              position: 'relative',
              width: hoveredService === null ? '33.33%' : hoveredService === 1 ? '60%' : '20%',
              height: '100%',
              transition: 'all 0.5s ease-in-out',
              cursor: 'pointer',
              overflow: 'hidden'
            }}
            onMouseEnter={() => setHoveredService(1)}
            onMouseLeave={() => setHoveredService(null)}
            onClick={() => handleServiceClick('software-development')}
          >
            <Image
              alt="Software Services"
              src="/image 42.webp"
              fill
              style={{
                objectFit: 'cover',
                filter: hoveredService === null ? 'none' : hoveredService === 1 ? 'none' : 'grayscale(100%)',
                transition: 'filter 0.3s ease'
              }}
            />
            <div style={{
              position: 'absolute',
              inset: '0',
              background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 56%, rgba(0, 0, 0, 0.6) 100%)',
              transition: 'all 0.3s ease'
            }} />

            {/* Service content */}
            <div style={{
              position: 'absolute',
              bottom: '40px',
              left: '35px',
              color: '#ffffff'
            }}>
              <div style={{
                fontFamily: 'Montserrat, Helvetica, sans-serif',
                fontSize: '33.6px',
                fontWeight: '600',
                marginBottom: '24px',
                marginTop: '60px'
              }}>
                Software Services
              </div>
              {(isMobile || hoveredService === 1) && (
                <div
                  style={{
                    backgroundColor: '#1394bc',
                    padding: isMobile ? '8px 16px' : '18px 53px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    display: 'inline-block',
                    opacity: isMobile ? 1 : (hoveredService === 1 ? 1 : 0),
                    transition: 'opacity 0.3s ease'
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleServiceClick('software-development');
                  }}
                >
                  <span style={{
                    fontFamily: 'Montserrat, Helvetica, sans-serif',
                    fontSize: isMobile ? '14px' : '20px',
                    fontWeight: '500',
                    color: '#ffffff'
                  }}>
                    Get Advice
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Second service image */}
          <div
            style={{
              position: 'relative',
              width: hoveredService === null ? '33.33%' : hoveredService === 2 ? '60%' : '20%',
              height: '100%',
              transition: 'all 0.5s ease-in-out',
              cursor: 'pointer',
              overflow: 'hidden'
            }}
            onMouseEnter={() => setHoveredService(2)}
            onMouseLeave={() => setHoveredService(null)}
            onClick={() => handleServiceClick('digital-marketing')}
          >
            <Image
              alt="Digital Marketing"
              src="/image 44.webp"
              fill
              style={{
                objectFit: 'cover',
                filter: hoveredService === null ? 'none' : hoveredService === 2 ? 'none' : 'grayscale(100%)',
                transition: 'filter 0.3s ease'
              }}
            />
            <div style={{
              position: 'absolute',
              inset: '0',
              background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 56%, rgba(0, 0, 0, 0.6) 100%)',
              transition: 'all 0.3s ease'
            }} />

            {/* Service content */}
            <div style={{
              position: 'absolute',
              bottom: '40px',
              left: '35px',
              color: '#ffffff'
            }}>
              <div style={{
                fontFamily: 'Montserrat, Helvetica, sans-serif',
                fontSize: '33.6px',
                fontWeight: '600',
                marginBottom: '24px',
                marginTop: '60px'
              }}>
                Digital Marketing
              </div>


              {(isMobile || hoveredService === 2) && (
                <div
                  style={{
                    backgroundColor: '#1394bc',
                    padding: isMobile ? '8px 16px' : '18px 53px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    display: 'inline-block',
                    opacity: isMobile ? 1 : (hoveredService === 2 ? 1 : 0),
                    transition: 'opacity 0.3s ease'
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleServiceClick('digital-marketing');
                  }}
                >
                  <span style={{
                    fontFamily: 'Montserrat, Helvetica, sans-serif',
                    fontSize: isMobile ? '14px' : '20px',
                    fontWeight: '500',
                    color: '#ffffff'
                  }}>
                    Get Advice
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Third service image */}
          <div
            style={{
              position: 'relative',
              width: hoveredService === null ? '33.33%' : hoveredService === 3 ? '60%' : '20%',
              height: '100%',
              transition: 'all 0.5s ease-in-out',
              cursor: 'pointer',
              overflow: 'hidden'
            }}
            onMouseEnter={() => setHoveredService(3)}
            onMouseLeave={() => setHoveredService(null)}
            onClick={() => handleServiceClick('financial-services')}
          >
            <Image
              alt="Financial Services"
              src="/image 45.webp"
              fill
              style={{
                objectFit: 'cover',
                filter: hoveredService === null ? 'none' : hoveredService === 3 ? 'none' : 'grayscale(100%)',
                transition: 'filter 0.3s ease'
              }}
            />
            <div style={{
              position: 'absolute',
              inset: '0',
              background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 56%, rgba(0, 0, 0, 0.6) 100%)',
              transition: 'all 0.3s ease'
            }} />

            {/* Service content */}
            <div style={{
              position: 'absolute',
              bottom: '40px',
              left: '35px',
              color: '#ffffff'
            }}>
              <div style={{
                fontFamily: 'Montserrat, Helvetica, sans-serif',
                fontSize: '33.6px',
                fontWeight: '600',
                marginBottom: '24px',
                marginTop: '60px'
              }}>
                Financial Services
              </div>
              {(isMobile || hoveredService === 3) && (
                <div
                  style={{
                    backgroundColor: '#1394bc',
                    padding: isMobile ? '8px 16px' : '18px 53px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    display: 'inline-block',
                    opacity: isMobile ? 1 : (hoveredService === 3 ? 1 : 0),
                    transition: 'opacity 0.3s ease'
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleServiceClick('financial-services');
                  }}
                >
                  <span style={{
                    fontFamily: 'Montserrat, Helvetica, sans-serif',
                    fontSize: isMobile ? '14px' : '20px',
                    fontWeight: '500',
                    color: '#ffffff'
                  }}>
                    Get Advice
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>


      </div>
    </>
  );
}
