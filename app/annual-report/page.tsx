export default function AnnualReport() {
  return <>
    <span className="eyebrow">Performance, people, planet</span><h1>Integrated Annual Report</h1>
    <div className="card"><h2>A view of the year</h2><p>IndianOil’s annual reporting covers business and financial performance alongside sustainability, safety, social impact and governance disclosures.</p></div>
    <div className="grid">
      <article className="card"><span className="badge">01 / Business</span><h2>Performance</h2><p>Financial results, operating highlights and strategic priorities.</p></article>
      <article className="card"><span className="badge">02 / People</span><h2>Community</h2><p>Social investment, employee wellbeing and community programmes.</p></article>
      <article className="card"><span className="badge">03 / Planet</span><h2>Environment &amp; safety</h2><p>Disclosures on environmental management, energy use and process safety.</p></article>
      <article className="card"><span className="badge">04 / Trust</span><h2>Governance</h2><p>Board oversight, policies, risk management and compliance.</p></article>
    </div>
    <div className="card"><h2>Read the official report</h2><p>Find published reports and investor information on <a href="https://iocl.com" target="_blank" rel="noreferrer">IndianOil’s official website</a>.</p></div>
  </>;
}
