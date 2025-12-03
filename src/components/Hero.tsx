// ...existing code...
import { useEffect, useRef } from 'react'
import { FaXTwitter } from 'react-icons/fa6'
import { gsap } from 'gsap'
import heroImg from '../assets/hero.png'

export default function Hero() {
    const imgRef = useRef<HTMLImageElement | null>(null)

    useEffect(() => {
        if (!imgRef.current) return

        const tween = gsap.to(imgRef.current, {
            x: 8,
            rotate: 0.6,
            duration: 0.12,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut"
        })

        return () => {
            tween.kill()
        }
    }, [])



    return (
        <section className="w-full overflow-hidden flex flex-col items-center justify-center py-12 px-4">
            <img
                ref={imgRef}
                src={heroImg}
                alt="Hero"
                className="mx-auto max-w-full w-full sm:w-10/12 md:w-8/12 lg:w-6/12 h-auto rounded-lg shadow-2xl"
                loading="lazy"
            />

            <div className="mt-6 flex flex-col items-center gap-4">
                <a
                    href="#buy"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Buy Now"
                    className="inline-block rounded-2xl px-14 py-3 transform transition-transform duration-200 hover:scale-105"
                    style={{
                        backgroundImage: 'repeating-linear-gradient(135deg, #ffffff 0 12px, #e11d48 12px 24px)',
                        border: '3px solid #000',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.45)',
                    }}
                >
                    <span
                        style={{
                            color: '#fff',
                            WebkitTextStroke: '1px #000',
                            fontSize: '1.05rem',
                            fontWeight: 800,
                            letterSpacing: '0.02em',
                            display: 'inline-block',
                            lineHeight: 1,
                        }}
                    >
                        Buy Now
                    </span>
                </a>

                <div className="flex items-center gap-4 mt-2">
                    <a
                        href="https://x.com/i/communities/1996189877717840059"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                        className="text-white hover:text-red-400 transition-colors duration-200"
                    >
                        <FaXTwitter size={34} />
                    </a>
                </div>
            </div>
        </section>
    )
}
// ...existing code...