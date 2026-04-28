"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Expand,
  Grid2X2,
  Minimize2,
} from "lucide-react";

export type AiBasicSlide = {
  id: string;
  number: string;
  src: string;
  alt: string;
};

type AiBasicSlideViewerProps = {
  slides: AiBasicSlide[];
  ariaLabel?: string;
};

export function AiBasicSlideViewer({
  slides,
  ariaLabel = "AI Agent 기초 슬라이드 뷰어",
}: AiBasicSlideViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showOverview, setShowOverview] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const viewerRef = useRef<HTMLDivElement>(null);
  const currentSlide = slides[currentIndex];

  const goToSlide = useCallback(
    (index: number) => {
      const nextIndex = Math.min(Math.max(index, 0), slides.length - 1);
      setCurrentIndex(nextIndex);
      setShowOverview(false);
    },
    [slides.length],
  );

  const goPrevious = useCallback(() => {
    setCurrentIndex((index) => Math.max(index - 1, 0));
    setShowOverview(false);
  }, []);

  const goNext = useCallback(() => {
    setCurrentIndex((index) => Math.min(index + 1, slides.length - 1));
    setShowOverview(false);
  }, [slides.length]);

  const toggleFullscreen = useCallback(async () => {
    const element = viewerRef.current;

    if (!element) {
      return;
    }

    if (!document.fullscreenElement) {
      await element.requestFullscreen();
      return;
    }

    await document.exitFullscreen();
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === viewerRef.current);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target;

      if (
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target instanceof HTMLSelectElement
      ) {
        return;
      }

      if (event.key === "ArrowLeft" || event.key === "PageUp") {
        event.preventDefault();
        goPrevious();
      }

      if (
        event.key === "ArrowRight" ||
        event.key === "PageDown" ||
        event.key === " "
      ) {
        event.preventDefault();
        goNext();
      }

      if (event.key === "Home") {
        event.preventDefault();
        goToSlide(0);
      }

      if (event.key === "End") {
        event.preventDefault();
        goToSlide(slides.length - 1);
      }

      if (event.key.toLowerCase() === "f") {
        event.preventDefault();
        void toggleFullscreen();
      }

      if (event.key === "Escape") {
        setShowOverview(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [goNext, goPrevious, goToSlide, slides.length, toggleFullscreen]);

  return (
    <section className="basic-slide-viewer" aria-label={ariaLabel}>
      <div ref={viewerRef} className="basic-slide-stage">
        <div className="basic-slide-toolbar" aria-label="슬라이드 조작">
          <button
            type="button"
            onClick={goPrevious}
            disabled={currentIndex === 0}
            aria-label="이전 슬라이드"
            title="이전 슬라이드"
          >
            <ChevronLeft aria-hidden="true" size={20} />
          </button>
          <span className="basic-slide-counter">
            {currentIndex + 1} / {slides.length}
          </span>
          <button
            type="button"
            onClick={goNext}
            disabled={currentIndex === slides.length - 1}
            aria-label="다음 슬라이드"
            title="다음 슬라이드"
          >
            <ChevronRight aria-hidden="true" size={20} />
          </button>
          <button
            type="button"
            onClick={() => setShowOverview((value) => !value)}
            aria-pressed={showOverview}
            aria-label="슬라이드 전체 보기"
            title="슬라이드 전체 보기"
          >
            <Grid2X2 aria-hidden="true" size={19} />
          </button>
          <button
            type="button"
            onClick={() => void toggleFullscreen()}
            aria-label={isFullscreen ? "전체 화면 종료" : "전체 화면"}
            title={isFullscreen ? "전체 화면 종료" : "전체 화면"}
          >
            {isFullscreen ? (
              <Minimize2 aria-hidden="true" size={19} />
            ) : (
              <Expand aria-hidden="true" size={19} />
            )}
          </button>
        </div>

        <figure className="basic-slide-frame">
          <Image
            key={currentSlide.id}
            src={currentSlide.src}
            alt={currentSlide.alt}
            width={1672}
            height={941}
            priority={currentIndex <= 1}
            sizes="(max-width: 900px) 100vw, 1200px"
            className="basic-slide-image"
          />
        </figure>

        {showOverview ? (
          <div className="basic-slide-overview" aria-label="슬라이드 전체 목록">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                className={index === currentIndex ? "is-active" : undefined}
                onClick={() => goToSlide(index)}
                aria-label={`${index + 1}번 슬라이드로 이동`}
              >
                <Image
                  src={slide.src}
                  alt=""
                  width={334}
                  height={188}
                  sizes="160px"
                  className="basic-slide-thumb"
                />
                <span>{slide.number}</span>
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
