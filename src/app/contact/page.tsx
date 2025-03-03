"use client";
import { useEffect, useState } from "react";

export default function ContactPage() {
  const [isChecked, setIsChecked] = useState(false);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    if (formVisible) {
      // Load HubSpot script only when form is visible
      const script = document.createElement("script");
      script.src = "https://js-na2.hsforms.net/forms/embed/242127585.js";
      script.defer = true;
      document.body.appendChild(script);
    }
  }, [formVisible]);

  return (
    <main className="container mx-auto px-6 py-16 text-center min-h-screen flex flex-col justify-center">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
        Contact Us
      </h2>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Let’s discuss how we can help with your AI needs.
      </p>

      {/* Consent Agreement Section */}
      {!formVisible && (
        <div className="mt-8 bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
          <div className="text-left text-gray-700 dark:text-gray-300">
            <p className="mb-2 text-sm">
              Unified Software Solutions is committed to protecting and respecting your privacy, and we’ll only use your personal information to administer your account and to provide the products and services you requested from us. From time to time, we would like to contact you about our products and services, as well as other content that may be of interest to you. If you consent to us contacting you for this purpose, please tick below to say how you would like us to contact you:
            </p>
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                className="w-4 h-4 accent-blue-600"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
              <span className="text-sm">
                I agree to allow Unified Software Solutions to store and process my personal data.
              </span>
            </label>
            <p className="mt-2 text-xs opacity-80">
              You can unsubscribe from these communications at any time. For more
              information on how to unsubscribe, our privacy practices, and how we
              are committed to protecting and respecting your privacy, please review our{" "}
              <a
                href="/privacy-policy"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>

          {/* Continue Button to Show Form */}
          <button
            onClick={() => {
              if (isChecked) {
                setFormVisible(true);
              } else {
                alert("You must agree to the privacy policy before continuing.");
              }
            }}
            className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-lg font-medium transition text-white w-full"
          >
            Continue
          </button>
        </div>
      )}

      {/* HubSpot Form (Hidden Until Consent is Given) */}
      {formVisible && (
        <div className="mt-8 max-w-2xl mx-auto">
          <div
            className="hs-form-frame"
            data-region="na2"
            data-form-id="e8b38d0e-6095-48f7-bb29-aab335193641"
            data-portal-id="242127585"
          ></div>
        </div>
      )}
    </main>
  );
}
