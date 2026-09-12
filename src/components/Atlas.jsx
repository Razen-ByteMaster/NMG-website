import Button from './ui/Button'
import Card from './ui/Card'
import SectionHead from './ui/SectionHead'
import AtlasMap from './AtlasMap'

export default function Atlas() {
  return (
    <section id="atlas" className="bg-black py-20 md:py-28 border-y border-white/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-2">
          <SectionHead
            number="04"
            title="The Atlas"
            sub="From Alexandria to the world. We help clinics and businesses scale beyond borders."
          />
          <div className="space-y-2 text-[13px] font-display uppercase tracking-[0.2em] text-cream/50">
            {['Egypt — HQ', 'Kuwait', 'Saudi Arabia', 'UAE', '…and beyond'].map((c) => (
              <div key={c} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                {c}
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Button
              variant="outlineGold"
              icon
              onClick={() =>
                document.getElementById('strategy')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Explore the map
            </Button>
          </div>
        </div>
        <Card className="lg:col-span-3 bg-ink-panel/60 border border-gold/15 rounded-lg p-4 md:p-6">
          <AtlasMap />
        </Card>
      </div>
    </section>
  )
}