import React from 'react';

import classnames from 'classnames';
import styles from './pricing.module.css';


export function Pricing() {
  return (
    <div className={styles.pricingContainer} id="pricing">
      <div className={styles.background}>
        <div className={styles.container}>
          <div className={styles.panel}>
          <div className={styles.pricingtable}>   
            <div className={styles.pricingplan}>
              <img src="/img/self-service-web-logo.png" alt="Self-Service" className={styles.pricingimg}/>
              <h2 className={styles.pricingheader}>Self-Service</h2>
              <h3 className={styles.pricingsubheader}>Free OHIP Billing</h3>
              <ul className={styles.pricingfeatures}>
                <li className={styles.pricingfeaturesitem}>Easy to use Mobile App.</li>
                <li className={styles.pricingfeaturesitem}>Fix and resubmit rejected claims quickly using the in app tools.</li>
                <li className={styles.pricingfeaturesitem}>Automated Health Card scanning and validation.</li>
                <li className={styles.pricingfeaturesitem}>Use historical claims and Revenue charting to reconcile payments.</li>
              </ul>
              <span className={styles.pricingprice}>Free</span>              
            </div>
            
            
            <div className={styles.pricingplan}>
              <img src="/img/full-service-logo.png" alt="Full-Service" className={styles.pricingimg}/>
              <h2 className={styles.pricingheader}>Full-Service</h2>
              <h3 className={styles.pricingsubheader}>Personal Billing Agent</h3>
              <ul className={styles.pricingfeatures}>
              <li className={styles.pricingfeaturesitem}>Optimize claim submissions.</li>        
              <li className={styles.pricingfeaturesitem}>Agent hanldes all Version Code Correction and health card errors.</li>
              <li className={styles.pricingfeaturesitem}>Remittance Advice Inquiry submission on disputed claims.</li>
              <li className={styles.pricingfeaturesitem}>Payment reconciliation delivered monthly.</li>
              </ul>
              <span className={styles.pricingprice}>2% of Paid Claims</span>              
            </div>

           
          </div>  
          </div>
        </div>
      </div>
    </div>
  );
}