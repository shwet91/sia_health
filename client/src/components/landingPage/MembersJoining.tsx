
"use client";

import { useEffect, useRef, useState } from "react";

function usePrefersReducedMotion() {
    const [reduced, setReduced] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
        setReduced(mq.matches);
        const handler = () => setReduced(mq.matches);
        if (mq.addEventListener) mq.addEventListener('change', handler);
        else mq.addListener(handler);
        return () => {
            if (mq.removeEventListener) mq.removeEventListener('change', handler);
            else mq.removeListener(handler);
        };
    }, []);

    return reduced;
}

function AnimatedNumber({ value, duration = 2000, start = true }: { value: number | string; duration?: number; start?: boolean }) {
    const target = typeof value === 'string' ? parseInt(value, 10) : (value as number);
    const [current, setCurrent] = useState(0);
    const rafRef = useRef<number | null>(null);
    const startRef = useRef<number | null>(null);
    const prefersReduced = usePrefersReducedMotion();
    const startedOnce = useRef(false);

    useEffect(() => {
        // If user requests reduced motion, don't animate; show final value only when `start` is true.
        if (prefersReduced) {
            if (start) setCurrent(target);
            else setCurrent(0);
            return;
        }

        // Don't start animation until `start` becomes true. Also run only once.
        if (!start) {
            setCurrent(0);
            return;
        }

        if (startedOnce.current) return;
        startedOnce.current = true;

        function step(ts: number) {
            if (startRef.current === null) startRef.current = ts;
            const elapsed = ts - startRef.current;
            const progress = Math.min(1, elapsed / duration);
            const eased = easeOutCubic(progress);
            setCurrent(Math.floor(eased * target));
            if (progress < 1) {
                rafRef.current = requestAnimationFrame(step);
            }
        }

        rafRef.current = requestAnimationFrame(step);

        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [target, duration, prefersReduced, start]);

    return <>{current}</>;
}

function easeOutCubic(t: number) {
    return 1 - Math.pow(1 - t, 3);
}

export default function MembersJoining() {
    const stats = [
        { value: 539, labelTop: 'Happy', labelBottom: 'Women' },
        { value: 471, labelTop: 'PCOS', labelBottom: 'Cured' },
        { value: 504, labelTop: 'Harmonal Imbalance', labelBottom: 'Cured' },
        { value: 306, labelTop: 'Pregnency', labelBottom: 'Successful' },
    ];

    const sectionRef = useRef<HTMLElement | null>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setInView(true);
                        // once in view, we can disconnect to avoid repeated triggers
                        obs.disconnect();
                    }
                });
            },
            { root: null, rootMargin: '0px', threshold: 0.25 }
        );

        obs.observe(el);

        return () => obs.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="w-full bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="py-16">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center items-center">
                        {stats.map((s) => (
                            <div key={s.value}>
                                <div className="text-4xl sm:text-5xl font-extrabold text-gray-800">
                                    <AnimatedNumber value={s.value} start={inView} />
                                </div>
                                <div className="w-12 h-1 bg-[#FF4B00] mx-auto my-3 rounded"></div>
                                <div className="text-sm text-gray-600">
                                    <div>{s.labelTop}</div>
                                    <div>{s.labelBottom}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
