"use client";
import React, { useEffect, useRef, useState } from "react";

export default function Footer() {
  const mainRef = useRef<HTMLDivElement>(null);

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.textContent = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
    }
  }, [time]);

  return (
    <>
      <footer className="bg-[#BDBD93] flex justify-between items-center px-2">
        <p>
          All Rights Reserved (c) Ahmed Alaa{" "}
          <span className="text-red-800 font-semibold">
            @ {time.getFullYear()}
          </span>
        </p>
        <main className="flex" ref={mainRef}></main>
      </footer>
    </>
  );
}
