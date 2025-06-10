// app/page.tsx
import Image from 'next/image'

export default function Home() {
  return (
    <main className="relative p-6 max-w-4xl mx-auto space-y-8 font-press">
      {/* CRT scanlines overlay is in globals.css via body::before */}

      {/* Logo with neon glow (Estonia Blue) */}
      <div className="flex justify-center mb-6">
        <Image
          src="/dct.png"
          alt="DJ CRAZY TIMES"
          width={600}
          height={150}
          className="object-contain drop-shadow-[0_0_12px_rgba(0,114,206,0.7)]"
        />
      </div>

      {/* Live Stream Section */}
      <section id="stream" className="space-y-2">
        <h2 className="font-mono text-2xl text-estoniaBlue drop-shadow-[0_0_6px_rgba(0,114,206,0.6)]">
          Live Stream <span className="animate-blink text-estoniaBlue">█</span>
        </h2>
        <div className="aspect-video w-full bg-black border-4 border-estoniaBlue rounded-lg shadow-[0_0_10px_rgba(0,114,206,0.6)] overflow-hidden">
          <iframe
            src="https://player.twitch.tv/?channel=naughton&parent=djcrazytimes.derwydd.net"
            className="w-full h-full"
            allowFullScreen
          />
        </div>
      </section>

      {/* Music Playlist Section */}
      <section id="music" className="space-y-2">
        <h2 className="font-mono text-2xl text-estoniaBlue drop-shadow-[0_0_4px_rgba(0,114,206,0.6)]">
          Music Playlist
        </h2>
        <div className="rounded-lg overflow-hidden border-4 border-estoniaBlue shadow-[0_0_8px_rgba(0,114,206,0.5)]">
          <iframe
            src="https://untitled.stream/embed/UlZVq0OQ8J43"
            width="100%"
            height="344"
            allowFullScreen
            allow="picture-in-picture"
            frameBorder="0"
            loading="lazy"
          />
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="space-y-2">
        <h2 className="font-mono text-2xl text-estoniaBlue drop-shadow-[0_0_4px_rgba(0,114,206,0.6)]">
          Send a Request
        </h2>

        <form
          action="https://formsubmit.co/djcrazytimesdayz@gmail.com"
          method="POST"
          className="flex flex-col space-y-4 p-6 bg-black bg-opacity-50 border-4 border-estoniaBlue rounded-lg shadow-[inset_4px_4px_0_rgba(0,0,0,0.8),inset_-4px_-4px_0_rgba(255,255,255,0.25)]"
        >
          {/* Honeypot */}
          <input type="text" name="_honey" className="hidden" />
          <input type="hidden" name="_subject" value="📨 New DJ request" />
          <input type="hidden" name="_captcha" value="false" />

          <input
            type="text"
            name="name"
            placeholder="Name"
            className="px-3 py-2 bg-estoniaWhite text-estoniaBlack rounded border-2 border-estoniaBlue focus:outline-none focus:shadow-[0_0_4px_rgba(0,114,206,0.7)]"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="px-3 py-2 bg-estoniaWhite text-estoniaBlack rounded border-2 border-estoniaBlue focus:outline-none focus:shadow-[0_0_4px_rgba(0,114,206,0.7)]"
            required
          />
          <textarea
            name="message"
            placeholder="Your Request"
            rows={4}
            className="px-3 py-2 bg-estoniaWhite text-estoniaBlack rounded border-2 border-estoniaBlue focus:outline-none focus:shadow-[0_0_4px_rgba(0,114,206,0.7)]"
            required
          />

          <button
            type="submit"
            className="inline-block px-4 py-2 font-press text-sm uppercase bg-estoniaBlue text-estoniaWhite border-4 border-estoniaWhite shadow-[inset_-4px_-4px_0_rgba(255,255,255,0.6),inset_4px_4px_0_rgba(0,0,0,1)] hover:shadow-[inset_-2px_-2px_0_rgba(255,255,255,0.6),inset_2px_2px_0_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 transition-transform"
          >
            Send Request
          </button>
        </form>
      </section>
    </main>
  )
}
