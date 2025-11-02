

const TermsAndCondition = () => {
    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center py-16 px-6">
            <div className="max-w-3xl bg-white p-8 rounded-2xl shadow-lg">
                <h1 className="text-3xl font-bold text-emerald-500 mb-4 text-center">
                    Terms and Conditions
                </h1>
              
                
                   <h4 className="text-xl font-semibold">Acceptance of Terms</h4>
                   <p className="text-gray-700 mb-4">
                    By accessing or using our Point of Sale (POS) System ("Service"), you agree to be bound by these Terms and Conditions. The Service is a cloud-based SaaS platform designed for restaurants, retail stores, and cafes to manage sales transactions, inventory, staff, and customer operations. If you do not agree with any part of these terms, you may not access the Service.
                </p>

                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>
                        This POS SaaS platform serves restaurants, retail stores, and cafes for sales, inventory, and customer management.
                    </li>
                    <li>
                        By using the Service, you accept these Terms and agree to comply with all policies.
                    </li>
                    <li>
                        Access is restricted to authorized business personnel only
                    </li>
                    <li>
                        You are responsible for maintaining secure login credentials
                    </li>
                    <li>
                        Do not share usernames or passwords with unauthorized individuals
                    </li>
                    <li>
                        Use the POS system solely for legitimate business operations
                    </li>
                    <li>
                        All transaction data is confidential and proprietary.
                    </li>
                    <li>
                        Prohibited: fraudulent transactions, unauthorized access, or illegal activities
                    </li>
                    <li>
                        Monthly or annual subscription fees billed in advance.
                    </li>
                </ul>

                <p className="mt-6 text-gray-700">
                    If you have questions about our Terms and Conditions, please contact our support team.
                </p> <br />
  <h6 className="text-md font-semibold">Effective Date: 30/12/2030 </h6>
                <h6 className="text-md font-semibold">Last Updated: 25/12/2020</h6>
                <p className="mt-4 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} <span className='text-emerald-500 font-bold'>FlowPOS</span>. All Rights Reserved.
                </p>
            </div>
        </div>
    );
};

export default TermsAndCondition;