import Link from "next/link";

const areas = [
  ["01", "Energy that moves India", "Refining, pipelines, fuel retail and aviation fuel connect communities and commerce.", "/about", "Explore our work"],
  ["02", "Indane LPG", "Find consumer services, refill support, safety information and e-KYC guidance.", "/nayara-gas", "LPG services"],
  ["03", "Sportstars", "Celebrate the athletes representing IndianOil and India across sports.", "/sportstars", "Meet the athletes"],
];

export default function Home() {
  return <>
    <section className="hero">
      <span className="eyebrow">Powering progress, every day</span>
      <h1>Energy for India.<br/>Possibility for everyone.</h1>
      <p>From refineries and fuel stations to Indane kitchens and sporting champions, IndianOil is part of the journeys that move our country forward.</p>
      <div className="hero-actions"><Link className="button" href="/about">Discover IndianOil <span aria-hidden="true">↗</span></Link><a className="button ghost" href="tel:9061859496">Call assistance · 9061859496</a></div>
    </section>
    <div className="grid">
      {areas.map(([number,title,description,href,label]) => <article className="card" key={number}>
        <span className="eyebrow">{number} / IndianOil</span><h2 style={{marginTop:14}}>{title}</h2><p>{description}</p><Link href={href}>{label} <span aria-hidden="true">→</span></Link>
      </article>)}
    </div>
    <section className="card good"><span className="eyebrow">Here to help</span><h2 style={{marginTop:10}}>Need consumer assistance?</h2><p>For help with the services featured in this portal, call <a href="tel:9061859496"><b>9061859496</b></a>. For official company information, visit <a href="https://iocl.com" target="_blank" rel="noreferrer">iocl.com</a>.</p></section>
  </>;
}
