// src/components/Invoice.js
import React, { useEffect, useState } from 'react';
import { getInvoices } from '../services/getInvoices';
import './Invoice.css';

const Invoice = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const data = await getInvoices();
        setInvoices(data);
      } catch (error) {
        console.error('Error fetching invoices', error);
      }
    };

    fetchInvoices();
  }, []);

  const getRandomText = () => {
    const randomTexts = ["Random Text 1", "Random Text 2", "Random Text 3"];
    return randomTexts[Math.floor(Math.random() * randomTexts.length)];
  };

  const getRandomNumber = () => {
    return (Math.random() * 100).toFixed(2);
  };

  // Dummy static data
  const staticData = [
    {
      description: "Varasiddhi Silks Men's Formal Shirt",
      unit_price: 38.10,
      qty: 1,
      net_amount: 38.10,
      tax_rate: 2.5,
      tax_amount: 1.00,
      total_amount: 39.10
    },
    {
      description: "Varasiddhi Silks Men's Formal Shirt",
      unit_price: 30.96,
      qty: 2,
      net_amount: 61.92,
      tax_rate: 2.5,
      tax_amount: 1.55,
      total_amount: 63.47
    }
  ];

  return (
    <div className="invoice-container">
      <header className="invoice-header">
        <img src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png" alt="Amazon Logo" />
        <h1>Tax Invoice/Bill of Supply/Cash Memo</h1>
        <h2>(Original for Recipient)</h2>
      </header>
      <section className="invoice-details">
        <div className="seller-info">
          <h3>Sold By:</h3>
          <p>Varasiddhi Silk Exports</p>
          <p>75, 3rd Cross, Lalbagh Road</p>
          <p>BENGALURU, KARNATAKA, 560027</p>
          <p>PAN No: AACFV3325K</p>
          <p>GST Registration No: 29AACFV3325K1ZY</p>
        </div>
        <div className="billing-info">
          <h3>Billing Address:</h3>
          <p>John Smith</p>
          <p>Zillum</p>
          <p>Maruti Platinum, Lakshminarayana Pura, AECS Layout</p>
          <p>BENGALURU, KARNATAKA, 560037</p>
        </div>
        <div className="shipping-info">
          <h3>Shipping Address:</h3>
          <p>John Smith</p>
          <p>Zillum</p>
          <p>Maruti Platinum, Lakshminarayana Pura, AECS Layout</p>
          <p>BENGALURU, KARNATAKA, 560037</p>
        </div>
      </section>
      <section className="invoice-items">
        <table>
          <thead>
            <tr>
              <th>Sl. No</th>
              <th>Description</th>
              <th>Unit Price</th>
              <th>Qty</th>
              <th>Net Amount</th>
              <th>Tax Rate</th>
              <th>Tax Amount</th>
              <th>Total Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>{staticData[0].description || getRandomText()}</td>
              <td>{staticData[0].unit_price || getRandomNumber()}</td>
              <td>{staticData[0].qty || getRandomNumber()}</td>
              <td>{staticData[0].net_amount || getRandomNumber()}</td>
              <td>{staticData[0].tax_rate ? `${staticData[0].tax_rate}%` : `${getRandomNumber()}%`}</td>
              <td>{staticData[0].tax_amount || getRandomNumber()}</td>
              <td>{staticData[0].total_amount || getRandomNumber()}</td>
            </tr>
            <tr>
              <td>2</td>
              <td>{staticData[1].description || getRandomText()}</td>
              <td>{staticData[1].unit_price || getRandomNumber()}</td>
              <td>{staticData[1].qty || getRandomNumber()}</td>
              <td>{staticData[1].net_amount || getRandomNumber()}</td>
              <td>{staticData[1].tax_rate ? `${staticData[1].tax_rate}%` : `${getRandomNumber()}%`}</td>
              <td>{staticData[1].tax_amount || getRandomNumber()}</td>
              <td>{staticData[1].total_amount || getRandomNumber()}</td>
            </tr>
          </tbody>
        </table>
      </section>
      <footer className="invoice-footer">
        <p>Amount in Words: One Thousand One Hundred And Ninety-five only</p>
        <p>For Varasiddhi Silk Exports:</p>
        <p>Authorized Signatory</p>
      </footer>
    </div>
  );
};

export default Invoice;
