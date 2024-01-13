"use client";

import React from "react";
import { useEffect } from "react";

let currentColorId = 0;

const COLORS = ["#00FFFF", "#4444FF", "#FF00FF", "#FF8800"];

export function ColorCanvas() {
  const blobRef = React.useRef<HTMLDivElement | null>(null);

  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const ctxRef = React.useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const blob = document.getElementById("cursorthing") as HTMLDivElement;
    blobRef.current = blob;

    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    canvasRef.current = canvas;

    const ctx = canvas.getContext("2d");
    ctxRef.current = ctx;

    window.requestAnimationFrame(render);

    window.addEventListener("mousemove", (e) => {
      blob.style.translate = `${e.clientX - blob.clientWidth / 2}px ${
        e.clientY - blob.clientHeight / 2
      }px`;
    });
  });

  const render = () => {
    const ctx = ctxRef.current;
    if (!ctx) {
      return;
    }

    if (!canvasRef.current) {
      return;
    }

    ctx.fillStyle = COLORS[currentColorId];

    const blob = blobRef.current;
    if (blob) {
      blob.style.background = COLORS[currentColorId];
    }

    window.requestAnimationFrame(render);
  };

  return (
    <>
      <div
        id="cursorthing"
        className="pointer-events-none w-64 h-64 fixed opacity-50 blur-[10rem] z-10 rounded-full"
      />
      <canvas
        id="canvas"
        style={{ background: "#000" }}
        width="100%"
        height="100%"
      />
    </>
  );
}
