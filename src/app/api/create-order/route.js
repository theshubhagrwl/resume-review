import { NextResponse } from 'next/server';

// In production, use environment variables for sensitive data
const CASHFREE_API_KEY = 'YOUR_CASHFREE_API_KEY';
const CASHFREE_SECRET = 'YOUR_CASHFREE_SECRET';
const CASHFREE_BASE_URL = 'https://sandbox.cashfree.com/pg/orders'; // Use production URL as needed

export async function POST(request) {
  try {
    const { planName, amount } = await request.json();

    // Generate a unique order ID
    const orderId = `order_${Date.now()}_${Math.floor(Math.random() * 1000)}`;

    // Make API call to Cashfree to create an order
    const response = await fetch(CASHFREE_BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-version': '2022-09-01',
        'x-client-id': CASHFREE_API_KEY,
        'x-client-secret': CASHFREE_SECRET,
      },
      body: JSON.stringify({
        order_id: orderId,
        order_amount: amount,
        order_currency: 'INR',
        order_note: `Resume review - ${planName} plan`,
        customer_details: {
          customer_id: 'customer_' + Date.now(),
          // In a real app, you would collect and use these:
          // customer_email: email,
          // customer_phone: phone
        },
      }),
    });

    const data = await response.json();

    // Return the necessary data for frontend
    return NextResponse.json({
      orderId: data.order_id,
      orderToken: data.order_token,
    });
  } catch (error) {
    console.error('Error creating order:', error);
    return NextResponse.json(
      { error: 'Failed to create payment order' },
      { status: 500 }
    );
  }
}
