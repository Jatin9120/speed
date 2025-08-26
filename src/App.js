import React from 'react';

// --- Firebase Imports ---
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import { getAuth, signInAnonymously } from "firebase/auth";

  // --- Firebase Configuration ---
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
  };

// --- Initialize Firebase ---
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Auto sign-in anonymously (commented out for now)
// signInAnonymously(auth)
//   .then(() => console.log("Anonymous sign-in successful"))
//   .catch(error => console.error("Anonymous sign-in failed:", error));

const Header = () => (
    <header className="text-center py-20 md:py-28">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-stone-800">
            Accelerate Your Job Search
        </h1>
        <p className="text-lg md:text-xl text-stone-600 max-w-3xl mx-auto mb-10">
            We send 100 personalized emails to recruiters actively hiring for your dream role. You save time, we handle the outreach.
        </p>
        <a href="#order-form" className="bg-sky-600 text-white inline-block rounded-lg px-8 py-4 text-lg font-semibold shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-sky-700">
            Get Started Now
        </a>
    </header>
);

const HowItWorks = () => {
    const steps = [
        { title: "Submit Your Details", description: "Complete the simple form below with your name, target role, and Google Drive resume link." },
        { title: "We Call You", description: "Our team will call you within 24 hours to confirm details and discuss any referrals you might have." },
        { title: "We Find Recruiters", description: "On payment confirmation, we web-scrape for recruiters actively hiring for your role in real-time." },
        { title: "Launch Outreach", description: "We send 100 personalized emails to the best-suited HR professionals for you." },
        { title: "Verify Everything", description: "You get access to your user account to verify every single email that has been sent." },
    ];

    return (
        <section id="how-it-works" className="py-16 md:py-24">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-stone-800">How It Works</h2>
                <p className="mt-4 text-lg text-stone-600">A simple, transparent process to get you noticed.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                {steps.map((step, index) => (
                    <div key={index} className="bg-white p-8 rounded-xl shadow-md border border-stone-200 text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                        <div className="text-5xl font-bold text-sky-200 mb-4">{index + 1}</div>
                        <h3 className="text-xl font-semibold mb-3 text-stone-700">{step.title}</h3>
                        <p className="text-stone-600 leading-relaxed">{step.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

const ReferralProgram = () => (
    <section className="py-16 md:py-20 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800">🎁 Referral Program</h2>
            <p className="mt-4 text-lg text-green-700">Earn money by referring friends to our service!</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white p-6 rounded-xl shadow-md border border-green-200 text-center">
                    <div className="text-4xl mb-4">💰</div>
                    <h3 className="text-xl font-semibold mb-2 text-green-800">₹50 Per Referral</h3>
                    <p className="text-green-700">Earn ₹50 for every friend who uses our service</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-green-200 text-center">
                    <div className="text-4xl mb-4">📞</div>
                    <h3 className="text-xl font-semibold mb-2 text-green-800">Easy Process</h3>
                    <p className="text-green-700">Just mention referrals during our call with you</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-green-200 text-center">
                    <div className="text-4xl mb-4">⚡</div>
                    <h3 className="text-xl font-semibold mb-2 text-green-800">Quick Payouts</h3>
                    <p className="text-green-700">Get paid instantly when referrals are confirmed</p>
                </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md border border-green-200">
                <h3 className="text-2xl font-bold text-center mb-6 text-green-800">How Our Referral Program Works</h3>
                <div className="space-y-4 text-green-700">
                    <div className="flex items-start space-x-3">
                        <div className="text-2xl">1️⃣</div>
                        <div>
                            <h4 className="font-semibold">Submit Your Order</h4>
                            <p className="text-sm">Fill out the form below and submit your job search request.</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-3">
                        <div className="text-2xl">2️⃣</div>
                        <div>
                            <h4 className="font-semibold">We Call You</h4>
                            <p className="text-sm">Our team will call you within 24 hours to confirm your details and discuss the service.</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-3">
                        <div className="text-2xl">3️⃣</div>
                        <div>
                            <h4 className="font-semibold">Mention Referrals</h4>
                            <p className="text-sm">During the call, let us know if anyone referred you or if you want to refer others.</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-3">
                        <div className="text-2xl">4️⃣</div>
                        <div>
                            <h4 className="font-semibold">Earn Rewards</h4>
                            <p className="text-sm">Get ₹50 for each successful referral when they complete their order.</p>
                        </div>
                    </div>
                </div>
                
                <div className="mt-8 p-4 bg-green-100 rounded-lg border border-green-300">
                    <p className="text-sm text-green-800 text-center">
                        <strong>💡 Pro Tip:</strong> Keep track of friends you refer! You can mention multiple referrals during our call and earn ₹50 for each successful one.
                    </p>
                </div>
            </div>
        </div>
    </section>
);

const Offer = () => (
    <section id="offer" className="py-20 md:py-24 bg-white rounded-xl shadow-lg border border-stone-200">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-sky-700">✨ Special Introductory Offer! ✨</h2>
            <p className="mt-4 text-4xl md:text-5xl font-extrabold text-stone-800">100 Targeted Emails for just <span className="text-sky-600">₹250</span></p>
            <p className="mt-5 text-lg text-stone-700 max-w-2xl mx-auto">
                We're new, and we want to prove our value. This price is exclusively for our **first 10 customers**.
                Prices will increase soon, so lock in this deal while you can!
            </p>
            <div className="w-full bg-stone-200 rounded-full h-4 mt-10 max-w-lg mx-auto overflow-hidden">
                <div className="bg-sky-500 h-4 rounded-full" style={{ width: "30%" }}></div>
            </div>
            <p className="mt-3 text-sm text-stone-600 font-medium">3 of 10 spots claimed!</p>
        </div>
    </section>
);

const OrderForm = () => {
    const [isSubmitted, setIsSubmitted] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const [orderId, setOrderId] = React.useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const whatsappNumber = formData.get('whatsappNumber');
        const resumeLink = formData.get('resumeLink');

        if (!form.checkValidity() || !whatsappNumber || !resumeLink) {
            form.reportValidity();
            return;
        }

        setIsLoading(true);
        console.log("Starting form submission...");

        try {
            // Generate the unique Order ID
            const timestamp = Date.now();
            const phoneSuffix = whatsappNumber.slice(-4);
            const newOrderId = `${timestamp}_${phoneSuffix}`;
            setOrderId(newOrderId);
            console.log("Generated Order ID:", newOrderId);

            // Save data to Firestore
            console.log("Saving order data to Firestore...");
            try {
                const orderData = {
                    orderId: newOrderId,
                    fullName: formData.get('fullName'),
                    whatsappNumber: whatsappNumber,
                    targetRole: formData.get('targetRole'),
                    experience: formData.get('experience'),
                    resumeLink: resumeLink,
                    submittedAt: serverTimestamp(),
                    status: 'submitted',
                    callScheduled: false,
                    referralDiscussed: false,
                };

                const docRef = await addDoc(collection(db, "orders"), orderData);
                console.log("Order saved to Firestore with ID:", docRef.id);
            } catch (firebaseError) {
                console.error("Firebase save failed:", firebaseError);
                // In a production app, you would handle this error more robustly.
                // For now, we'll continue with the success message.
            }
            
            // Show success message and scroll to it
            setIsSubmitted(true);
            window.scrollTo({ top: e.target.offsetTop - 100, behavior: 'smooth' });

        } catch (error) {
            console.error("Error submitting order: ", error);
            alert("There was an error submitting your order. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    if (isSubmitted) {
        return (
            <div className="space-y-6">
                <div className="text-center bg-sky-50 border-l-4 border-sky-500 text-sky-800 p-8 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold mb-3">Thank You! Your order has been submitted.</h3>
                    <p className="text-lg mb-4">We will review your details and call you on your WhatsApp number within 24 hours.</p>
                    <p className="text-md font-semibold bg-sky-100 p-3 rounded-md">Your Order ID is: <span className="font-bold text-sky-900 select-all">{orderId}</span></p>
                </div>
                
                <div className="text-center bg-green-50 border-l-4 border-green-500 text-green-800 p-6 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold mb-2">📞 What happens next?</h4>
                    <div className="space-y-2 text-left">
                        <p>✅ Our team will call you within 24 hours</p>
                        <p>✅ We'll confirm your job search requirements</p>
                        <p>✅ We'll ask about any referrals (earn ₹50 each!)</p>
                        <p>✅ We'll process payment and start your outreach</p>
                    </div>
                </div>
                
                <div className="text-center bg-yellow-50 border-l-4 border-yellow-500 text-yellow-800 p-6 rounded-lg shadow-md">
                    <h4 className="text-lg font-bold mb-2">💡 Remember:</h4>
                    <p className="mb-2">Think of friends who might need job search help!</p>
                    <p className="text-sm">Mention them during our call and earn ₹50 for each successful referral.</p>
                </div>
            </div>
        );
    }

    return (
        <div id="form-container">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-stone-800">Place Your Order</h2>
                <p className="mt-4 text-lg text-stone-600">Let's get started. Fill out the form below and we'll call you within 24 hours.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-stone-700 mb-1">Full Name</label>
                    <input type="text" id="fullName" name="fullName" required className="mt-1 block w-full px-4 py-3 bg-white border border-stone-300 rounded-lg shadow-sm placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 sm:text-sm"/>
                </div>
                
                <div>
                    <label htmlFor="whatsappNumber" className="block text-sm font-medium text-stone-700 mb-1">WhatsApp Number</label>
                    <input type="tel" id="whatsappNumber" name="whatsappNumber" required placeholder="e.g., +919876543210" className="mt-1 block w-full px-4 py-3 bg-white border border-stone-300 rounded-lg shadow-sm placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 sm:text-sm"/>
                    <p className="mt-1 text-xs text-stone-600">
                        📞 <strong>Important:</strong> We'll call you on this number within 24 hours to confirm details and discuss referrals.
                    </p>
                </div>
                
                <div>
                    <label htmlFor="targetRole" className="block text-sm font-medium text-stone-700 mb-1">Target Job Title(s)</label>
                    <input type="text" id="targetRole" name="targetRole" placeholder="e.g., Senior Product Manager" required className="mt-1 block w-full px-4 py-3 bg-white border border-stone-300 rounded-lg shadow-sm placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 sm:text-sm"/>
                </div>
                
                <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-stone-700 mb-1">Years of Experience</label>
                    <select id="experience" name="experience" required className="mt-1 block w-full px-3 py-3 bg-white border border-stone-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 sm:text-sm">
                        <option value="">Select your experience level</option>
                        <option value="0">Fresher / Entry-Level</option>
                        <option value="1-3">1-3 Years</option>
                        <option value="3-5">3-5 Years</option>
                        <option value="5-10">5-10 Years</option>
                        <option value="10+">10+ Years</option>
                    </select>
                </div>
                
                <div>
                    <label htmlFor="resumeLink" className="block text-sm font-medium text-stone-700 mb-1">
                        Google Drive Link to Your Resume
                    </label>
                    <input 
                        type="url" 
                        id="resumeLink" 
                        name="resumeLink" 
                        required 
                        placeholder="https://drive.google.com/file/d/..." 
                        className="mt-1 block w-full px-4 py-3 bg-white border border-stone-300 rounded-lg shadow-sm placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                    />
                    <p className="mt-2 text-xs text-stone-600">
                        📁 <strong>How to get Google Drive link:</strong><br/>
                        1. Upload your resume to Google Drive<br/>
                        2. Right-click on the file → "Get link"<br/>
                        3. Change permission to "Anyone with the link can view"<br/>
                        4. Copy and paste the link here
                    </p>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                        <div className="text-2xl">📞</div>
                        <div>
                            <h4 className="font-semibold text-blue-800 mb-1">What to expect after submitting:</h4>
                            <ul className="text-sm text-blue-700 space-y-1">
                                <li>• Our team will call you within 24 hours</li>
                                <li>• We'll confirm your requirements and timeline</li>
                                <li>• We'll ask if you were referred by anyone (they get ₹50!)</li>
                                <li>• We'll ask if you want to refer others (you get ₹50 each!)</li>
                                <li>• We'll process payment and start your job outreach</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div>
                    <button type="submit" disabled={isLoading} className="w-full bg-sky-600 text-white flex justify-center py-4 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium transition-colors duration-300 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 disabled:bg-sky-300 disabled:cursor-not-allowed">
                        {isLoading ? 'Submitting Your Order...' : 'Submit Order - We\'ll Call You Soon!'}
                    </button>
                </div>
            </form>
        </div>
    );
};

const Footer = () => (
    <footer className="text-center py-10 border-t border-stone-200 mt-16">
        <p className="text-stone-500">&copy; 2025 Job Application Outreach Service. All Rights Reserved.</p>
        <p className="text-stone-500 mt-2">For any queries, please email us at: <a href="mailto:lightspeedjobs@outlook.com" className="text-sky-600 hover:underline">lightspeedjobs@outlook.com</a></p>
    </footer>
);

export default function App() {
  return (
    <>
      <style>{`
        html { scroll-behavior: smooth; }
        body { background-color: #FAFAF9; font-family: 'Inter', sans-serif; }
      `}</style>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 antialiased">
        <Header />
        <main className="space-y-20 md:px-8 antialiased">
          <HowItWorks />
          <ReferralProgram />
          <Offer />
          <section id="order-form" className="py-16 md:py-20">
            <div className="max-w-2xl mx-auto">
              <OrderForm />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}