import React from "react";

const WorkingProcess = () => {
  return (
    <div className="bg-primary">
      <h2 class="text-accent text-center text-3xl font-semibold pt-20 pb-20">
        HOW IT ALL WORKS
      </h2>
      <div className="container mx-auto pb-24">
        <div className="card bg-secondary shadow-xl mb-6">
          <div className="card-body">
            <h2 className="card-title text-accent text-2xl font-bold">REGISTRATION</h2>
            <p className="text-accent">
              You can sign up as a buyer or a seller. A seller can add products as per the categories in their dashboard, whereas buyers can see their booked products in their dashboard and make payments.
            </p>
          </div>
        </div>
        <div className="card bg-secondary shadow-xl mb-6">
          <div className="card-body">
            <h2 className="card-title text-accent text-2xl font-bold">BOOKING AND PAYMENT</h2>
            <p className="text-accent">
              Any user can book the same product. However, to complete the purchase, payment must be done online.
            </p>
          </div>
        </div>
        <div className="card bg-secondary shadow-xl mb-6">
          <div className="card-body">
            <h2 className="card-title text-accent text-2xl font-bold">PRODUCT AVAILABILITY</h2>
            <p className="text-accent">
              If a product is sold, you will be able to see that status on the product items. Namely, <span className="text-success">AVAILABLE</span> or <span className="text-error">SOLD.</span>
            </p>
          </div>
        </div>
        <div className="card bg-secondary shadow-xl mb-6">
          <div className="card-body">
            <h2 className="card-title text-accent text-2xl font-bold">FINDING SOMETHING WRONG</h2>
            <p className="text-accent">
              If you seem to find inappropriate behavior or offerings from either the buyers/sellers you may rightfully report them. The support team will take care of that.
            </p>
          </div>
        </div>
        <div className="card bg-secondary shadow-xl mb-6">
          <div className="card-body">
            <h2 className="card-title text-accent text-2xl font-bold">AVOIDING SCAMS</h2>
            <p className="text-accent">
              To avoid any sort of frauds/scams, it is included in our policy that you will make the online payment/cash-on-delivery after meeting the seller in person, while receiving your product.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingProcess;
