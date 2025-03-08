import Stripe from "stripe";
import dotenv from "dotenv";

dotenv.config();

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


// // Sample public key (you'll replace this with your actual public key)
// const STRIPE_PUBLIC_KEY = 'pk_test_51Qziiq2fTsou5EmHje3K80lST03JB7TxZV1URUamjn2BoSvralXGwIF39uea4qLizQ4ipAUQGePJ3E4bOQHO72oV00oqc4HYH2';

// async function testStripeConnection() {
//   console.log('Testing Stripe connection...');
  
//   try {
//     // Try to list customers (a simple API call that requires authentication)
//     console.log(process.env.STRIPE_SECRET_KEY)
//     const customers = await Stripe.customers.list({ limit: 3 });
    
//     console.log('✅ Stripe connection successful!');
//     console.log(`✅ Found ${customers.data.length} customers in your account`);
//     console.log('✅ Your Stripe account is working properly');
    
//     // Verify we can access the secret key
//     if (process.env.STRIPE_SECRET_KEY) {
//       console.log('✅ Successfully loaded secret key from .env file');
//     } else {
//       console.log('❌ Failed to load STRIPE_SECRET_KEY from .env file');
//     }
    
//     // Just to show the public key is available (for frontend use)
//     console.log(`✅ Public key available: ${STRIPE_PUBLIC_KEY}`);
    
//     return true;
//   } catch (error) {
//     console.error('❌ Stripe connection failed:');
//     console.error(`❌ Error message: ${error.message}`);
    
//     if (error.type === 'StripeAuthenticationError') {
//       console.error('❌ Authentication failed. Check your Stripe secret key.');
//     } else if (error.type === 'StripeConnectionError') {
//       console.error('❌ Could not connect to Stripe API. Check your internet connection.');
//     }
    
//     return false;
//   }
// }

// // Run the test
// testStripeConnection()
//   .then(isWorking => {
//     if (!isWorking) {
//       console.log('\nTroubleshooting tips:');
//       console.log('1. Verify your STRIPE_SECRET_KEY in the .env file is correct');
//       console.log('2. Ensure the .env file is in the root directory of your project');
//       console.log('3. Check that you have installed both "dotenv" and "stripe" packages');
//       console.log('4. Make sure you have an active internet connection');
//     }
//   });
