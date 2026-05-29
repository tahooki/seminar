"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type TouchEvent,
} from "react";
import {
  ChevronLeft,
  ChevronRight,
  Expand,
  Grid2X2,
  Minimize2,
} from "lucide-react";

type FullscreenDocument = Document & {
  webkitExitFullscreen?: () => Promise<void> | void;
  webkitFullscreenElement?: Element | null;
  webkitFullscreenEnabled?: boolean;
};

type FullscreenTarget = HTMLDivElement & {
  webkitRequestFullscreen?: () => Promise<void> | void;
};

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

function getFullscreenElement() {
  const fullscreenDocument = document as FullscreenDocument;

  return (
    document.fullscreenElement ??
    fullscreenDocument.webkitFullscreenElement ??
    null
  );
}

function canRequestFullscreen(element: FullscreenTarget) {
  const fullscreenDocument = document as FullscreenDocument;

  return Boolean(
    document.fullscreenEnabled ||
      fullscreenDocument.webkitFullscreenEnabled ||
      element.requestFullscreen ||
      element.webkitRequestFullscreen,
  );
}

async function requestNativeFullscreen(element: FullscreenTarget) {
  if (element.requestFullscreen) {
    await element.requestFullscreen();
    return true;
  }

  if (element.webkitRequestFullscreen) {
    await element.webkitRequestFullscreen();
    return true;
  }

  return false;
}

async function exitNativeFullscreen() {
  const fullscreenDocument = document as FullscreenDocument;

  if (document.exitFullscreen) {
    await document.exitFullscreen();
    return;
  }

  await fullscreenDocument.webkitExitFullscreen?.();
}

export function AiBasicSlideViewer({
  slides,
  ariaLabel = "AI Agent 기초 슬라이드 뷰어",
}: AiBasicSlideViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showOverview, setShowOverview] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isFullscreenFallback, setIsFullscreenFallback] = useState(false);
  const viewerRef = useRef<HTMLDivElement>(null);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
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
    const element = viewerRef.current as FullscreenTarget | null;

    if (!element) {
      return;
    }

    const fullscreenElement = getFullscreenElement();
    const isViewerNativeFullscreen = fullscreenElement === element;

    if (isFullscreenFallback || isViewerNativeFullscreen) {
      setIsFullscreenFallback(false);
      setIsFullscreen(false);

      if (isViewerNativeFullscreen) {
        try {
          await exitNativeFullscreen();
        } catch {
          setIsFullscreen(false);
        }
      }

      return;
    }

    setShowOverview(false);
    setIsFullscreenFallback(true);

    if (!canRequestFullscreen(element)) {
      return;
    }

    try {
      const didRequestNativeFullscreen = await requestNativeFullscreen(element);
      const didEnterNativeFullscreen =
        didRequestNativeFullscreen && getFullscreenElement() === element;

      setIsFullscreen(didEnterNativeFullscreen);

      if (didEnterNativeFullscreen) {
        setIsFullscreenFallback(false);
      }
    } catch {
      setIsFullscreenFallback(true);
    }
  }, [isFullscreenFallback]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      const isViewerFullscreen = getFullscreenElement() === viewerRef.current;

      setIsFullscreen(isViewerFullscreen);

      if (isViewerFullscreen) {
        setIsFullscreenFallback(false);
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange,
      );
    };
  }, []);

  useEffect(() => {
    if (!isFullscreenFallback) {
      return;
    }

    const previousBodyOverflow = document.body.style.overflow;
    const previousDocumentOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousDocumentOverflow;
    };
  }, [isFullscreenFallback]);

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
        if (isFullscreenFallback) {
          setIsFullscreenFallback(false);
        }
        setShowOverview(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    goNext,
    goPrevious,
    goToSlide,
    isFullscreenFallback,
    slides.length,
    toggleFullscreen,
  ]);

  const handleTouchStart = useCallback((event: TouchEvent<HTMLDivElement>) => {
    const touch = event.changedTouches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  }, []);

  const handleTouchEnd = useCallback(
    (event: TouchEvent<HTMLDivElement>) => {
      const start = touchStartRef.current;
      const touch = event.changedTouches[0];
      touchStartRef.current = null;

      if (!start || showOverview) {
        return;
      }

      const deltaX = touch.clientX - start.x;
      const deltaY = touch.clientY - start.y;

      if (Math.abs(deltaX) < 52 || Math.abs(deltaX) < Math.abs(deltaY) * 1.2) {
        return;
      }

      if (deltaX < 0) {
        goNext();
        return;
      }

      goPrevious();
    },
    [goNext, goPrevious, showOverview],
  );

  return (
    <section className="basic-slide-viewer" aria-label={ariaLabel}>
      <div
        ref={viewerRef}
        className={`basic-slide-stage${
          isFullscreen || isFullscreenFallback ? " is-fullscreen" : ""
        }${isFullscreenFallback ? " is-pseudo-fullscreen" : ""}${
          showOverview ? " has-overview" : ""
        }`}
        onTouchEnd={handleTouchEnd}
        onTouchStart={handleTouchStart}
      >
        <div
          className="basic-slide-toolbar"
          aria-label="슬라이드 조작"
          onTouchEnd={(event) => event.stopPropagation()}
          onTouchStart={(event) => event.stopPropagation()}
        >
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
            onClick={(event) => {
              event.stopPropagation();
              setShowOverview((value) => !value);
            }}
            aria-pressed={showOverview}
            aria-label="슬라이드 전체 보기"
            title="슬라이드 전체 보기"
          >
            <Grid2X2 aria-hidden="true" size={19} />
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              void toggleFullscreen();
            }}
            aria-pressed={isFullscreen || isFullscreenFallback}
            aria-label={
              isFullscreen || isFullscreenFallback ? "전체 화면 종료" : "전체 화면"
            }
            title={
              isFullscreen || isFullscreenFallback ? "전체 화면 종료" : "전체 화면"
            }
          >
            {isFullscreen || isFullscreenFallback ? (
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
