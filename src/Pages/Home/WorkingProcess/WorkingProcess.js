import React from "react";
import logoLight from "../../../assets/logo/logoLight.png";

const WorkingProcess = () => {
  return (
    <div className="bg-primary pb-20">
      <h2 className="text-success text-center text-3xl font-semibold pt-20 pb-20">
        HOW IT ALL WORKS
      </h2>
      <div className="container mx-auto pb-24 bg-secondary p-5 rounded-xl">
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-16 border p-1 rounded-full border-slate-100">
              <img
                className="rounded-full"
                src="https://placeimg.com/192/192/people"
                alt=""
              />
            </div>
          </div>
          <div className="chat-bubble bg-accent text-secondary">
            Hello, what is the registration process?
          </div>
        </div>
        <div className="chat chat-end mb-8">
          <div className="chat-image avatar">
            <div className="w-16 rounded-full border p-1 border-slate-100">
              <img src={logoLight} alt="" />
            </div>
          </div>
          <div className="chat-bubble bg-success text-secondary">
            Hey there! You can sign up as a buyer or a seller. A seller can add
            products as per the categories in their dashboard, whereas buyers
            can see their booked products in their dashboard and make payments.
          </div>
        </div>

        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-16 border p-1 rounded-full border-slate-100">
              <img
                className="rounded-full"
                src="https://placeimg.com/192/192/people"
                alt=""
              />
            </div>
          </div>
          <div className="chat-bubble bg-accent text-secondary">
            How does the booking and payment system work?
          </div>
        </div>
        <div className="chat chat-end mb-8">
          <div className="chat-image avatar">
            <div className="w-16 rounded-full border p-1 border-slate-100">
              <img src={logoLight} alt="" />
            </div>
          </div>
          <div className="chat-bubble bg-success text-secondary">
            Any user can book the same product. However, to complete the
            purchase, payment must be done online.
          </div>
        </div>

        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-16 border p-1 rounded-full border-slate-100">
              <img
                className="rounded-full"
                src="https://placeimg.com/192/192/people"
                alt=""
              />
            </div>
          </div>
          <div className="chat-bubble bg-accent text-secondary">
            How do I know if a product is available or not?
          </div>
        </div>
        <div className="chat chat-end mb-8">
          <div className="chat-image avatar">
            <div className="w-16 rounded-full border p-1 border-slate-100">
              <img src={logoLight} alt="" />
            </div>
          </div>
          <div className="chat-bubble bg-success text-secondary">
            If a product is sold, you will be able to see that status on the
            product items.
          </div>
        </div>

        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-16 border p-1 rounded-full border-slate-100">
              <img
                className="rounded-full"
                src="https://placeimg.com/192/192/people"
                alt=""
              />
            </div>
          </div>
          <div className="chat-bubble bg-accent text-secondary">
            What are the processes of handling fraud/unfair/unjust activities?
          </div>
        </div>
        <div className="chat chat-end mb-8">
          <div className="chat-image avatar">
            <div className="w-16 rounded-full border p-1 border-slate-100">
              <img src={logoLight} alt="" />
            </div>
          </div>
          <div className="chat-bubble bg-success text-secondary">
            If you seem to find inappropriate behavior or offerings from either
            the buyers/sellers you may rightfully report them. The support team
            will take care of that.
          </div>
        </div>

        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-16 border p-1 rounded-full border-slate-100">
              <img
                className="rounded-full"
                src="https://placeimg.com/192/192/people"
                alt=""
              />
            </div>
          </div>
          <div className="chat-bubble bg-accent text-secondary">
            How can I avoid scams?
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-16 rounded-full border p-1 border-slate-100">
              <img src={logoLight} alt="" />
            </div>
          </div>
          <div className="chat-bubble bg-success text-secondary">
            To avoid any sort of frauds/scams, it is included in our policy that
            you will make the online payment/cash-on-delivery after meeting the
            seller in person, while receiving your product.
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingProcess;
