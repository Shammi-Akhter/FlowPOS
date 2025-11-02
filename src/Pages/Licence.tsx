

const Licence = () => {
    return (
         <div className="min-h-screen bg-base-200 flex items-center justify-center py-16 px-6">
            <div className="max-w-3xl bg-white p-8 rounded-2xl shadow-lg">
                <h1 className="text-3xl font-bold text-emerald-500 mb-4 text-center">
                   Software License Agreement
                </h1>
              
                
                   
                   <p className="text-gray-700 mb-4">
                    By accessing or using our Point of Sale (POS) System ("Service"), you agree to be bound by these Terms and Conditions. The Service is a cloud-based SaaS platform designed for restaurants, retail stores, and cafes to manage sales transactions, inventory, staff, and customer operations. If you do not agree with any part of these terms, you may not access the Service.
                </p>

                <ul className="list-disc list-inside text-gray-700 space-y-2">
                   <h4 className="text-xl font-semibold"> License Grant</h4>
                    <li>
                        We grant you a non-exclusive, non-transferable license to use our POS System for your business operations
                    </li>
                    <li>
                        License is valid per subscription plan (single location or multi-location)
                    </li>
                    <h4 className="text-xl font-semibold">  License Restrictions</h4>
                    <li>
                       Do not copy, modify, reverse-engineer, or redistribute the software
                    </li>
                    <li>
                        Do not sell, rent, lease, or sublicense access to third parties
                    </li>
                      <h4 className="text-xl font-semibold"> Intellectual Property</h4>
                    <li>
                        You retain ownership of your business data (sales, inventory, customer info)
                    </li>
                    <li>
                        All software, trademarks, and content remain our exclusive property.
                    </li>
                    <h4 className="text-xl font-semibold">  License Duration</h4>
                    <li>
                        Automatically renews unless cancelled before renewal date
                    </li>
                    <li>
                        Terminated licenses must cease all software use immediately
                    </li>
                    <li>
                    Automatic software updates included with active license.
                    </li>
                </ul>

                <p className="mt-6 text-gray-700">
                    If you have questions about our Terms and Conditions, please contact our support team.
                </p> <br />
  
                <p className="mt-4 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} <span className='text-emerald-500 font-bold'>FlowPOS</span>. All Rights Reserved.
                </p>
            </div>
        </div>
    );
};

export default Licence;