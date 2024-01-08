"use client";

import React from "react";
import { useEffect } from "react";

let x = 0;
let y = 0;
let dx = 1;
let dy = 1;

let viewportHeight = 0;
let viewportWidth = 0;
let currentColorId = 0;

const PUCK_SPEED = 0.8;

const COLORS = ["#00FFFF", "#4444FF", "#FF00FF", "#FF8800"];
let currentT = 1;

export function Canvas() {
  const blobRef = React.useRef<HTMLDivElement | null>(null);

  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const ctxRef = React.useRef<CanvasRenderingContext2D | null>(null);

  const TRIANGLE_HEIGHT = 64;
  const TRIANGLE_WIDTH = 64;

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

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      viewportHeight = window.innerHeight;
      viewportWidth = window.innerWidth;
    });

    window.addEventListener("mousemove", (e) => {
      blob.style.translate = `${e.clientX - blob.clientWidth / 2}px ${
        e.clientY - blob.clientHeight / 2
      }px`;
    });

    viewportHeight = window.innerHeight;
    viewportWidth = window.innerWidth;

    canvas.width = innerWidth;
    canvas.height = innerHeight;
  });

  const render = () => {
    const ctx = ctxRef.current;
    if (!ctx) {
      return;
    }

    if (!canvasRef.current) {
      return;
    }

    ctx.clearRect(0, 0, viewportWidth, viewportHeight);

    if (y + TRIANGLE_HEIGHT >= canvasRef.current.height || y < 0) {
      currentColorId === COLORS.length - 1
        ? (currentColorId = 0)
        : currentColorId++;
      currentT === 4 ? (currentT = 1) : currentT++;
      dy *= -1;
    }

    if (x + TRIANGLE_WIDTH >= canvasRef.current.width || x < 0) {
      currentColorId === COLORS.length - 1
        ? (currentColorId = 0)
        : currentColorId++;
      currentT === 4 ? (currentT = 1) : currentT++;
      dx *= -1;
    }

    x += dx * PUCK_SPEED;
    y += dy * PUCK_SPEED;

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
