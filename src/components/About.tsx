// ...existing code...
import { useState, useEffect, useRef } from 'react'
import aboutimg from "../assets/about-img.png"
import { gsap } from 'gsap'


export default function About() {
    const leftImgRef = useRef<HTMLImageElement | null>(null)
    const rightImgRef = useRef<HTMLImageElement | null>(null)
    const [copied, setCopied] = useState(false)
    const CONTRACT = 'Coming Soon' // ganti dengan CA asli

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(CONTRACT)
        } catch {
            const el = document.createElement('textarea')
            el.value = CONTRACT
            document.body.appendChild(el)
            el.select()
            document.execCommand('copy')
            el.remove()
        }
        setCopied(true)
        setTimeout(() => setCopied(false), 1800)
    }

    useEffect(() => {
        const left = leftImgRef.current
        const right = rightImgRef.current
        if (!left || !right) return

        console.log('GSAP ABOUT ANIM RUN') // cek di console, harus muncul

        const tweenL = gsap.to(left, {
            y: -40,             // dibesarin biar jelas banget
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        })

        const tweenR = gsap.to(right, {
            y: 40,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: 0.6
        })

        return () => {
            tweenL.kill()
            tweenR.kill()
        }
    }, [])

    return (
        <section className="w-full flex items-center justify-center py-12 px-4">
            {/* layout: column on mobile (images shown above/below), row on md+ (images left/right) */}
            <div className="mx-auto max-w-6xl w-full flex flex-col md:flex-row items-center justify-center gap-8">
                {/* left image (decorative) - visible on mobile too but smaller */}
                <img
                    ref={leftImgRef}
                    src={aboutimg}
                    alt=""
                    aria-hidden="true"
                    className="block w-28 sm:w-36 md:w-64 lg:w-80 xl:w-96 object-contain opacity-95 pointer-events-none select-none will-change-transform"
                />

                {/* center text + contract */}
                <div className="flex-1 max-w-3xl text-center px-4">
                    <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest text-red-300 uppercase mb-3">
                        JOIN THE SNOWY CULT
                    </span>

                    <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-white uppercase border-b-4 border-red-600 pb-3 mx-auto">
                        THE SUPERCYCLE IS FROZEN… IT’S TIME TO FOLLOW THE SNOW.
                    </h2>

                    <p className="mt-4 text-sm sm:text-base text-white max-w-2xl mx-auto leading-relaxed">
                        The meme coin cult that returns every December – January. Cold hands only. Believers welcome.
                    </p>

                    {/* Contract Address + Copy */}
                    <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                        <div className="flex items-center gap-3">
                            <span className="text-xs text-gray-300 uppercase tracking-wider">Contract Address</span>
                            <code className="font-mono text-sm text-white bg-white/5 px-3 py-2 rounded-md select-all">
                                {CONTRACT}
                            </code>
                        </div>

                        <button
                            type="button"
                            onClick={handleCopy}
                            aria-label="Copy contract address"
                            className="inline-block rounded-2xl px-6 py-2 transform transition duration-150 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/30"
                            style={{
                                backgroundImage: 'repeating-linear-gradient(135deg, #ffffff 0 12px, #e11d48 12px 24px)',
                                border: '2px solid #000',
                                color: '#000',
                            }}
                        >
                            <span className="text-sm font-semibold" style={{ WebkitTextStroke: '0.5px #000' }}>
                                Copy
                            </span>
                            <span
                                aria-live="polite"
                                className={`ml-2 text-xs font-medium transition-opacity duration-200 ${copied ? 'opacity-100' : 'opacity-0'}`}
                            >
                                {copied ? 'Copied!' : ''}
                            </span>
                        </button>
                    </div>
                </div>

                {/* right image (mirror) - visible on mobile too */}
                <img
                    ref={rightImgRef}
                    src={aboutimg}
                    alt=""
                    aria-hidden="true"
                    className="block w-28 sm:w-36 md:w-64 lg:w-80 xl:w-96 object-contain opacity-95 pointer-events-none select-none will-change-transform"
                    style={{ transform: 'scaleX(-1)' }}
                />
            </div>
        </section>
    )
}
// ...existing code...