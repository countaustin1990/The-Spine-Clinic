// VideoPlayer.jsx
import { useRef, useEffect } from "react";

const VideoPlayer = () => {
  const iframeRef = useRef(null); // To reference the iframe element

  // Initialize YouTube Player API after iframe is loaded
  useEffect(() => {
    const handleIframeLoad = () => {
      // Post an "init" message to the iframe (optional if you want to mute initially)
      iframeRef.current.contentWindow.postMessage('{"event":"command","func":"mute","args":""}', '*');
    };

    if (iframeRef.current) {
      iframeRef.current.addEventListener("load", handleIframeLoad, { passive: true });
    }

    return () => {
      if (iframeRef.current) {
        iframeRef.current.removeEventListener("load", handleIframeLoad);
      }
    };
  }, []);

  return (
    <div className="flex justify-center items-center bg-gray-900 p-4 min-h-screen">
      <div className="w-full max-w-4xl"> {/* Increase max width to make the video larger */}
        {/* Embed YouTube video via iframe */}
        <iframe
          ref={iframeRef}
          className="w-full h-96 rounded-lg shadow-lg" // Increased height and width
          src="https://www.youtube.com/embed/W7f2jX3cG-0?enablejsapi=1&rel=0&controls=1" // 'controls=1' enables the default YouTube controls
          
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>

        <div className="text-white mt-4 text-center">
          <h1 className="text-2xl font-bold uppercase">together they will walk agian</h1>
          <p className="mt-2 text-xl">
           One of many patients testifying to the our promise.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
