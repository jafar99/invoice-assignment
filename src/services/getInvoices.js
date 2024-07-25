// src/services/invoiceService.js
import axios from 'axios';

const API_URL = 'https://www.zohoapis.in/invoice';

export const getInvoices = async () => {
  try {
    const response = await axios.get(`${API_URL}`, {
      headers: {
        'Authorization': 'Zoho-oauthtoken YOUR_OAUTH_TOKEN'
      },
      timeout: 10000 // 10 seconds timeout
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching invoices', error);
    throw error;
  }
};
