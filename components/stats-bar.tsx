export function StatsBar() {
  return (
    <section aria-label="Company stats" className="bg-brand text-white">
      <div className="container-balanced py-6 grid grid-cols-3 gap-4 text-center">
        <div>
          <div className="text-2xl md:text-3xl font-bold">5,000+</div>
          <div className="text-sm opacity-90">Clients</div>
        </div>
        <div>
          <div className="text-2xl md:text-3xl font-bold">95%</div>
          <div className="text-sm opacity-90">Success Rate</div>
        </div>
        <div>
          <div className="text-2xl md:text-3xl font-bold">10+</div>
          <div className="text-sm opacity-90">Years Experience</div>
        </div>
      </div>
    </section>
  )
}
