'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Mock plan data - in production, you would fetch this from a database
const PLANS = {
  student: {
    name: 'Student',
    price: 50,
    features: [
      '3 rounds of resume reviews',
      '48-hour turnaround time',
      'Basic formatting tips',
    ],
  },
  pro: {
    name: 'Pro',
    price: 150,
    features: [
      '3 rounds of resume reviews',
      'LinkedIn profile feedback',
      '24-hour turnaround time',
      'Industry-specific tips',
    ],
  },
  ultimate: {
    name: 'Ultimate',
    price: 300,
    features: [
      'Everything in Pro plan',
      'Personalized career tips',
      'Priority 12-hour turnaround',
      '1-on-1 chat support',
    ],
  },
};

export default function PurchasePage({ params }) {
  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Get plan details based on the URL parameter
    const planSlug = params.plan.toLowerCase();
    if (PLANS[planSlug]) {
      setPlan(PLANS[planSlug]);
    }
  }, [params.plan]);

  const handlePayment = async () => {
    setLoading(true);
    // In a real implementation, you would:
    // 1. Call your API to create an order
    // 2. Initialize Cashfree SDK with the order token
    // 3. Handle the payment flow

    // Example (placeholder) code for Cashfree integration:
    try {
      // Mock API call to create order
      const orderResponse = await fetch('/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          planName: plan.name,
          amount: plan.price,
        }),
      });

      const { orderId, orderToken } = await orderResponse.json();

      // Initialize Cashfree SDK
      // This is simplified - refer to Cashfree docs for actual implementation
      const cashfree = window.Cashfree;
      cashfree.initialisePayment({
        orderToken,
        onSuccess: function (data) {
          // Redirect to thank you page
          window.location.href = '/thank-you';
        },
        onFailure: function (data) {
          alert('Payment failed. Please try again.');
          setLoading(false);
        },
      });
    } catch (error) {
      console.error('Payment initialization failed:', error);
      alert('Something went wrong. Please try again later.');
      setLoading(false);
    }

    // For demo purposes, let's just redirect after a delay
    setTimeout(() => {
      window.location.href = '/thank-you';
    }, 2000);
  };

  if (!plan) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <p>Plan not found. Please select a valid plan.</p>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gray-50 dark:bg-slate-900 py-12 px-4 sm:px-6 lg:px-8 font-[family-name:var(--font-geist-sans)]'>
      <div className='max-w-md mx-auto bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden'>
        <div className='bg-blue-600 dark:bg-blue-700 py-6 px-8 text-white'>
          <h1 className='text-2xl font-bold'>Complete Your Purchase</h1>
          <p className='mt-1 opacity-90'>You&apos;re almost there!</p>
        </div>

        <div className='p-8'>
          <div className='mb-8'>
            <h2 className='text-xl font-semibold mb-2'>Order Summary</h2>
            <div className='bg-gray-50 dark:bg-slate-700 p-4 rounded-md'>
              <div className='flex justify-between mb-2'>
                <span>Selected Plan</span>
                <span className='font-medium'>{plan.name}</span>
              </div>
              <div className='flex justify-between font-bold text-lg'>
                <span>Total</span>
                <span>₹{plan.price}</span>
              </div>
            </div>
          </div>

          <div className='mb-6'>
            <h3 className='font-semibold mb-2'>What&apos;s included:</h3>
            <ul className='space-y-2'>
              {plan.features.map((feature, index) => (
                <li key={index} className='flex items-start'>
                  <svg
                    className='w-5 h-5 text-green-500 mr-2 mt-0.5'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M5 13l4 4L19 7'
                    ></path>
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={handlePayment}
            disabled={loading}
            className='w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors flex items-center justify-center'
          >
            {loading ? (
              <>
                <svg
                  className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <circle
                    className='opacity-25'
                    cx='12'
                    cy='12'
                    r='10'
                    stroke='currentColor'
                    strokeWidth='4'
                  ></circle>
                  <path
                    className='opacity-75'
                    fill='currentColor'
                    d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                  ></path>
                </svg>
                Processing...
              </>
            ) : (
              <>Pay Now: ₹{plan.price}</>
            )}
          </button>

          <div className='mt-6 text-center'>
            <Link
              href='/'
              className='text-blue-600 dark:text-blue-400 hover:underline'
            >
              Return to homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
