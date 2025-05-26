This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Razorpay Integration

To enable the payment functionality, you need to set up Razorpay API keys:

1. Create an account at [Razorpay](https://razorpay.com/) if you don't have one already
2. In your Razorpay dashboard, go to Settings > API Keys
3. Create a test key for development purposes
4. Create a `.env.local` file in the root of your project with the following content:

```
# Razorpay Keys
NEXT_PUBLIC_RAZORPAY_KEY=rzp_test_YOUR_ACTUAL_TEST_KEY_HERE
```

5. Replace `rzp_test_YOUR_ACTUAL_TEST_KEY_HERE` with your actual test key from Razorpay

**Important**: Never commit your `.env.local` file to version control. It's already included in the `.gitignore` file to prevent accidental commits.

For production deployment, set the environment variables in your hosting platform (like Netlify or Vercel).
