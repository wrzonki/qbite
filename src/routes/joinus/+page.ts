import type { PageLoad } from './$types';

export const load = (() => {
  return {
    posts: [
      {
        id: 1,
        title: 'Software Engineer (student)',
        subtitle: 'Your work will involve building and maintaining code relating to all three parts of the trading cycle (pre-trade, trade, and post-trade). Specifically covering:',
        contentHTML: `
          <div style="line-height: 24px; margin-top: 10px">
            <hr>
            <b>Quant Hedge Fund - Copenhagen - permanent - part time</b>
            <hr>
            <p>
            <b>QBite Capital</b> is a Quant Hedge Fund based in Copenhagen.
              QBite Capital aims to offer investors consistent and high returns with low correlation to traditional financial assets. This is done through different arbitrage and quant trading strategies. The trading strategies vary greatly in terms of sophistication ranging from simple (e.g. mean reversion) to more complex machine learning based trading strategies.
              We have a market-neutral mandate and use strategies that allow us to thrive in both bull and bear markets, particularly when volumes and volatility are high.
              QBite Capital has successfully managed funds for more than a year, while simultaneously working on securing regulatory approval, expanding client base, and further building out trading systems. We are a small team that love what we do, and love working together.
              We are looking to hire a software engineer (student job) that wants to take on critical responsibilities to help us scale and deliver value. You will have the opportunity to work on data and trading systems. You should expect to get a lot of independence and responsibility right away, and to learn at high speed!
            </p>
            <hr>
            <div style="font-size: 16px; margin-bottom: 6px; border-bottom: 1px solid #222">
              <span><b>What You Will Do</b></span>
            </div>
            Your work will involve building and maintaining code relating to all three parts of the trading cycle
            (pre-trade, trade, and post-trade).<br>
            Specifically covering:
            <ul>
                <li>Maintain and expand data acquisition infrastructure</li>
                <li>Maintain and improve automated trading systems, including risk monitoring</li>
                <li>Maintain and improve accounting and PnL systems</li>
            </ul>
            Strong Python skills and experience working with databases (SQL) is a requirement. Experience with other programming languages such as Go, Rust, Javascript is an advantage but not a requirement. Likewise, knowledge of financial markets, crypto, is an advantage, but not a requirement. 
            <hr>
            <div style="font-size: 16px; margin-bottom: 6px; border-bottom: 1px solid #222">
              <span><b>Perks and benefits</b></span>
              <hr>
                <ul>
                  <li>Strong focus on mentoring from senior staff</li>
                  <li>Gain experience with quantitative trading and the crypto ecosystem</li>
                  <li>Flexible working hours</li>
                  <li>Access to co-invest in the fund</li>
                  <li>Social gatherings &amp; team events</li>
                  <li>Paid lunch</li>
                </ul>
              <hr>
                <b>If what we're doing excites you, and the role looks like a fit, we'd love to hear from you.</b><br>
              <hr>
                Send your application as soon as possible. We conduct interviews on a rolling basis.<br><br>
                Please don't hesitate to contact recruitment@qbite.capital if you'd like to know more about the position.<br><br>
                Please note that for your application to be taken into consideration, you must provide a 1-page cover letter, a CV and attach copies of your latest exam credentials.<br><br>
                QBite Capital is an equal opportunity employer.  We make all employment decisions based solely on merit.  We provide equal employment opportunity to all applicants and employees without discrimination on the bases of race, color, religion, national origin, disability, gender, sexual orientation, age, or any other protected status.<br>
            </div>
          </div>
        `,
      }
    ]
  }
}) satisfies PageLoad;