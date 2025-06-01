import { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import useClickOutside from "../useClickOutside";

const ImgViews = ({ close, src, alt = "Enlarged image" }) => {
  let domNode = useClickOutside(() => {
    close(false);
  });

  // Handle keyboard events for accessibility (Escape key to close)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        close(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Trap focus inside modal
    const focusableElements = document.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    const firstElement = focusableElements[0];
    if (firstElement) {
      firstElement.focus();
    }

    // Cleanup
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [close]);

  return (
    <Fragment>
      <div
        className="mfp-bg mfp-ready"
        onClick={() => close(false)}
        role="dialog"
        aria-modal="true"
        aria-label="Image viewer"
      ></div>
      <div
        className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready"
        tabIndex={-1}
        style={{ overflow: "hidden auto" }}
      >
        <div
          className={`mfp-container mfp-s-ready mfp-iframe-holder mfp-img-container`}
        >
          <div className="mfp-content" ref={domNode}>
            <div className="mfp-iframe-scaler">
              <Image
                className="mfp-img"
                src={src}
                alt={alt}
                width={1200}
                height={800}
                style={{ width: '100%', height: 'auto', maxWidth: '100%' }}
                sizes="100vw"
                priority
              />
              <button
                className="mfp-close"
                type="button"
                onClick={() => close(false)}
                aria-label="Close image viewer"
              >
                ×
              </button>
            </div>
          </div>
          <div className="mfp-preloader" aria-live="polite">Loading...</div>
        </div>
      </div>
    </Fragment>
  );
};

const ImageView = () => {
  const [img, setImg] = useState(false);
  const [imgValue, setImgValue] = useState(null);
  const [imgAlt, setImgAlt] = useState("Enlarged image");

  useEffect(() => {
    setTimeout(() => {
      const a = document.querySelectorAll("a");
      a.forEach((a) => {
        if (a.href.includes("static/img")) {
          if (a.getAttribute("download") === null) {
            a.addEventListener("click", (e) => {
              e.preventDefault();
              setImgValue(a.href);
              // Get the alt text from the image inside the link, if available
              const img = a.querySelector('img');
              setImgAlt(img && img.alt ? img.alt : "Enlarged image");
              setImg(true);
            });
          }
        }
      });
    }, 1500);
  }, []);

  return (
    <Fragment>
      {img && <ImgViews close={() => setImg(false)} src={imgValue} alt={imgAlt} />}
    </Fragment>
  );
};
export default ImageView;
