import { NextResponse } from 'next/server';
const Razorpay = require('razorpay');
import crypto from 'crypto';

// Force the route to be dynamic to prevent build-time static generation failures
export const dynamic = 'force-dynamic';

// Initialize Razorpay lazily to prevent errors at build-time if env vars are missing
const getRazorpayInstance = () => {
  const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || process.env.RAZORPAY_KEY_ID || process.env.RAZORPAY_API_KEY;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;

  if (!keyId || !keySecret) {
    throw new Error(`Razorpay keys are missing. ${!keyId ? 'Key ID is missing.' : ''} ${!keySecret ? 'Key Secret is missing.' : ''}`);
  }

  return new Razorpay({
    key_id: keyId,
    key_secret: keySecret,
  });
};

export async function POST(req: Request) {
  try {
    const { amount, currency = 'INR' } = await req.json();

    if (!amount) {
      return NextResponse.json(
        { error: 'Amount is required' },
        { status: 400 }
      );
    }

    const razorpay = getRazorpayInstance();

    const options = {
      amount: Math.round(amount * 100), // amount in smallest currency unit
      currency,
      receipt: `receipt_${crypto.randomBytes(8).toString('hex')}`,
    };

    const order = await razorpay.orders.create(options);

    return NextResponse.json(order);
  } catch (error: any) {
    console.error('Razorpay Error Detail:', {
      message: error.message,
      stack: error.stack,
      name: error.name,
      ...error
    });
    return NextResponse.json(
      { 
        error: error.message || 'Internal Server Error',
        details: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}
