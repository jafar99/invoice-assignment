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

  return (
    <div className="invoice-container">
      <header className="invoice-header">
        <img src="path-to-amazon-logo.png" alt="Amazon Logo" />
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
            {invoices.map((invoice, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{invoice.description}</td>
                <td>{invoice.unit_price}</td>
                <td>{invoice.qty}</td>
                <td>{invoice.net_amount}</td>
                <td>{invoice.tax_rate}%</td>
                <td>{invoice.tax_amount}</td>
                <td>{invoice.total_amount}</td>
              </tr>
            ))}
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
