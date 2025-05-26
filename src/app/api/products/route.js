import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function GET() {
  try {
    const products = await stripe.products.list({
      expand: ['data.default_price'],
      active: true,
      limit: 100, // Adjust based on your needs
    });

    const formattedProducts = products.data.map(product => ({
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.default_price.unit_amount,
      currency: product.default_price.currency,
      images: product.images,
      default_price: product.default_price.id,
    }));

    return NextResponse.json(formattedProducts);
  } catch (err) {
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}