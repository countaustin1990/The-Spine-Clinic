import { useRef, useEffect } from "react";

const VideoPlayer = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframeElement = iframeRef.current;

    if (!iframeElement) return;

    const handleIframeLoad = () => {
      try {
        iframeElement?.contentWindow?.postMessage(
          '{"event":"command","func":"mute","args":""}',
          "*"
        );
      } catch (error) {
        console.error("PostMessage Error:", error);
      }
    };

    iframeElement.addEventListener("load", handleIframeLoad);

    return () => {
      iframeElement.removeEventListener("load", handleIframeLoad);
    };
  }, []);

  return (
    <div className="flex justify-center items-center bg-gray-900 p-4 min-h-screen">
      <div className="w-full max-w-4xl">
        <iframe
          ref={iframeRef}
          className="w-full h-96 rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/pC0Pqr4mw8A"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="YouTube Video Player"
        ></iframe>

        <div className="text-white mt-4 text-center">
          <h1 className="text-2xl font-extrabold uppercase">Together They Will Walk Again</h1>
          <p className="mt-2 text-md font-medium">
            One of many patients testifying to our promise.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
