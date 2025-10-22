"use client";

import React from "react";

type Props = {
  /** YouTube video id (for example 'dQw4w9WgXcQ'). Defaults to a short placeholder video. */
  videoId?: string;
  /** Optional title for iframe for accessibility */
  title?: string;
};

const DEFAULT_VIDEO_ID = "6TPce1DDm_U";

const Video: React.FC<Props> = ({
  videoId = DEFAULT_VIDEO_ID,
  title = "YouTube video",
}) => {
  const src = `https://www.youtube.com/embed/${encodeURIComponent(videoId)}`;

  return (
    <div className="w-full px-4">
      {/* Centered container with responsive max width */}
      <div className="mx-auto max-w-3xl">
        {/* 16:9 wrapper */}
        <div className="relative" style={{ paddingTop: "56.25%" }}>
          <iframe
            src={src}
            title={title}
            aria-label={title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Video;
