import React from 'react';
import { useState } from 'react';
import { MdArrowDropDown } from 'react-icons/md';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      <div className="accordion-title" onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        <MdArrowDropDown size={30} />
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

const OurValue = () => {
  return (
    <div className="v-hero">
      <div className="v-herowidth"></div>
      <div className="v-heroright">
        <div className="v-imagecontainer">
          <img src="./value.png.png" alt="Our Value Illustration" />
        </div>
      </div>
      <div className="v-heroleft">
        <div className="v-herotitle">
          <h1>Our value</h1>
          <h2>Value we give to you</h2>
        </div>
        <div className="v-herocontent">
        </div>
        <Accordion title="Best Interest Rates on the Market" content={<p>As of the latest market analysis, real estate interest rates are currently historically low due to a combination of factors, including central bank policies aimed at stimulating economic growth.</p>} />
        <Accordion title="Prevent Unstable Prices" content={<p> By implementing these measures, policymakers, regulators, and market participants can work together to prevent or mitigate market instability, thereby fostering confidence, liquidity, and efficiency in financial markets. </p>} />
        <Accordion title="Best Price on the Market" content={<p> Overall, the best price on the market is a combination of competitive pricing, value proposition, market conditions, cost considerations, price transparency, promotional efforts, and customer perception. Businesses that effectively balance these factors can offer compelling prices that attract customers and drive sales. </p>} />
      </div>
    </div>
  );
};

export default OurValue;

