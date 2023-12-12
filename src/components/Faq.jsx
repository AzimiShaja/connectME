import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Faq = () => {
  return (
    <div className="flex flex-col items-center gap-1 justify-center">
      <div className="flex flex-col items-center gap-4 max-w-[600px]">
        <p className="p-2 bg-whiteGreen font-md uppercase text-green ">
          Frequently asked questions
        </p>
        <h1 className="font-dm text-4xl">How can We Help?</h1>
        <p className="text-gray-400 text-center font-light">
          Here are some of the most common questions about our services and
          membership. For extra help, reach out anytime.
        </p>
        <p className="text-green cursor-pointer flex items-center gap-1">
          Need Help? Reach Out Now <FaArrowRight />{" "}
        </p>
      </div>
      <div className="lg:w-9/12 w-full px-8 flex flex-col items-center gap-14">
        <div className="grid md:grid-cols-3 px-8 gap-20  mt-20">
          <div className="flex flex-col items-center md:items-start gap-3">
            <h1 className="font-semibold text-md flex items-center gap-2">
              1. What is the Freelancer membership?
            </h1>
            <p className="font-light text-gray-500 text-sm max-md:text-center leading-6">
              Best freelancer Membership is a subscription-based service
              designed to help connect freelancer with job opportunities.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start  gap-3 ">
            <h1 className="font-semibold text-md flex items-center gap-3  max-md:text-center">
              2. How do I start?
            </h1>
            <p className="font-light text-gray-500 text-sm max-md:text-center leading-6">
              Subscribe to the most suitable plan to get instant access. All
              plans are risk-free since we have a full 30-day money-back
              guarantee.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start  gap-3">
            <h1 className="font-semibold text-md flex items-center gap-3 max-md:text-center">
              {" "}
              3. How can I pay?
            </h1>
            <p className="font-light text-gray-500 text-sm max-md:text-center leading-6">
              Payments are securely processed by Stripe. You can pay with your
              Visa, Mastercard, American Express card, or any other card from a
              major issuer. If you're having issues with your card, get in
              touch.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start  gap-3">
            <h1 className="font-semibold text-md flex items-center gap-3 max-md:text-center">
              {" "}
              4. Do you offer discounts?
            </h1>
            <p className="font-light text-gray-500 text-sm max-md:text-center leading-6">
              We don't offer discounts, but you can save 50% by choosing annual
              plans.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start  gap-3">
            <h1 className="font-semibold text-md flex items-center gap-3 max-md:text-center">
              {" "}
              5. What if I'm not happy?
            </h1>
            <p className="font-light text-gray-500 text-sm max-md:text-center leading-6">
              Stuff happens. Just let us know and we'll try to find a solution.
              If you're still unhappy with your membership, you can request a
              full refund within 30 days for any plan. No questions asked.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start  gap-3">
            <h1 className="font-semibold text-md flex items-center gap-3 max-md:text-center">
              {" "}
              6. What's the money-back guarantee?
            </h1>
            <p className="font-light text-gray-500 text-sm max-md:text-center leading-6">
              The money-back guarantee allows you to get a full refund within
              the first 30 days of your subscription if you're not happy with
              our services. Just contact our support team, and we'll issue the
              refund.
            </p>
          </div>{" "}
          <div className="flex flex-col items-center md:items-start  gap-3">
            <h1 className="font-semibold text-md flex items-center gap-3 max-md:text-center">
              {" "}
              7. How can I get a refund?
            </h1>
            <p className="font-light text-gray-500 text-sm max-md:text-center leading-6">
              You can try our membership risk-free. We offer a 100% 30-day
              money-back guarantee for any plan. Just send us an email and we'll
              process the refund.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start  gap-3">
            <h1 className="font-semibold text-md flex items-center gap-3 max-md:text-center">
              {" "}
              8. Can I cancel at any time?
            </h1>
            <p className="font-light text-gray-500 text-sm max-md:text-center leading-6">
              There's no minimum contract. Cancel anytime without penalty or
              hassle. Resubscribe again whenever you change your mind.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start  gap-3">
            <h1 className="font-semibold text-md flex items-center gap-3 max-md:text-center">
              {" "}
              9. How to cancel my membership?
            </h1>
            <p className="font-light text-gray-500 text-sm max-md:text-center leading-6">
              You can cancel your subscription directly from your account at any
              time. If you're having issues, contact us anytime. If you want to
              continue using the service, you can resubscribe from your account.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
