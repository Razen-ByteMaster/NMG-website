import SectionHead from './ui/SectionHead'
import { images } from '../data/images'

export default function Headquarters() {
  return (
    <section className="bg-ink py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <SectionHead
          number="07"
          title="NMG Headquarters"
          sub="Where strategy, creativity and technology come together. This is where growth is engineered."
        />
        <div className="relative rounded-sm overflow-hidden border border-gold/20 min-h-[320px]">
          <img
            src={images.headquarters}
            alt="NMG headquarters"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 font-display uppercase tracking-[0.25em] text-sm text-gold-light">
            Alexandria · Egypt
          </div>
        </div>
      </div>
    </section>
  )
}