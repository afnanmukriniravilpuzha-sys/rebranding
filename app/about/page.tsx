export default function About() {
  return <>
    <span className="eyebrow">A nationwide energy network</span>
    <h1>About IndianOil</h1>
    <div className="card"><h2>Energy across India</h2><p><b>Indian Oil Corporation Limited (IndianOil)</b> is an integrated energy company with a major role in India’s fuel supply. Its operations span refining, pipelines, fuel retail, aviation fuel, LPG and related services.</p></div>
    <div className="grid">
      <article className="card"><span className="badge">01 / Refine</span><h2>Refining</h2><p>Processing crude oil into fuels and other petroleum products.</p></article>
      <article className="card"><span className="badge">02 / Deliver</span><h2>Fuel &amp; pipelines</h2><p>Retail services and transport infrastructure connecting supply with communities.</p></article>
      <article className="card"><span className="badge">03 / Serve</span><h2>Indane LPG</h2><p>Cooking gas and consumer services for homes and businesses.</p></article>
      <article className="card"><span className="badge">04 / Connect</span><h2>Aviation fuel</h2><p>Fuel services supporting airports and airlines across the country.</p></article>
    </div>
    <div className="card"><h2>Looking ahead</h2><p>IndianOil continues to serve the country’s energy needs while investing in efficiency and lower-carbon energy options.</p></div>
  </>;
}
