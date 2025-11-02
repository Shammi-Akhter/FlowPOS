

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center md:py-16 py-10 px-6">
                <div className="max-w-3xl bg-white p-8 rounded-2xl shadow-lg">
                    <h1 className="text-3xl font-bold text-emerald-500 mb-4 text-center">
                        Privacy Policy
                    </h1>
                    <p className="text-gray-700 mb-4">
                        Your privacy is important to us. This Privacy Policy explains how our
                        FlowPOS collects, uses, and protects your
                        information when you visit or interact with our website.
                    </p>

                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>
                            We collect basic information such as your name, email, and phone number
                            when you make reservations, apply for jobs, or contact us.
                        </li>
                        <li>
                            Your personal data is used only for restaurant-related purposes like
                            managing bookings, orders, and recruitment.
                        </li>
                        <li>
                            We do not share your information with third parties without your consent,
                            except when required by law.
                        </li>
                        <li>
                            Our website may use cookies to improve user experience and system performance.
                        </li>
                        <li>
                            You have the right to request correction or deletion of your personal data at any time.
                        </li>
                    </ul>

                    <p className="mt-6 text-gray-700">
                        By using this website, you consent to the collection and use of your
                        information as described in this policy.
                    </p>

                    <p className="mt-4 text-center text-sm text-gray-500">
                        © {new Date().getFullYear()} <span className='text-emerald-500 font-bold'>FlowPOS</span>. All Rights Reserved.
                    </p>
                </div>
            </div>
    );
};

export default PrivacyPolicy;


