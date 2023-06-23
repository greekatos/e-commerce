import React from "react";

const fields = [
  {
    id: "firstName",
    label: "First Name",
    type: "text",
    placeholder: "Enter your first name",
    required: true,
  },
  {
    id: "lastName",
    label: "Last Name",
    type: "text",
    placeholder: "Enter your last name",
    required: true,
  },
  {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
    required: true,
  },
  {
    id: "phoneNumber",
    label: "Contact Phone Number",
    type: "tel",
    placeholder: "Enter your phone number",
    required: true,
  },
  {
    id: "shippingAddress",
    label: "Shipping Address",
    type: "text",
    placeholder: "Enter your shipping address",
    required: true,
  },
  {
    id: "shippingMethod",
    label: "Shipping Method",
    type: "select",
    options: [
      "Select shipping method",
      "Pickup from store",
      "Transport with delivery",
    ],
    required: true,
  },
  {
    id: "alternativeTransport",
    label: "Alternative Transport",
    type: "checkbox",
    additionalCost: "Additional cost: 5 euros",
  },
];

const CheckoutPage = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-10'>
      <h2 className='text-xl font-bold mb-4 flex justify-start text-[#0071BD]'>
        Checkout
      </h2>
      <div className='xl:w-[60%] lg:w-[80%] md:w-[80%] bg-white p-6 shadow'>
        <form className='grid grid-cols-3 gap-4 gap-x-8'>
          {fields.map((field) => (
            <div className='col-span-1' key={field.id}>
              <label
                className='block font-bold text-gray-700 text-[0.9rem] mb-1'
                htmlFor={field.id}
              >
                {field.label}
              </label>
              {field.type === "select" ? (
                <select
                  className='w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500'
                  id={field.id}
                  name={field.id}
                  required={field.required}
                >
                  {field.options.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : field.type === "checkbox" ? (
                <>
                  <input
                    className='mr-2'
                    type='checkbox'
                    id={field.id}
                    name={field.id}
                  />
                  <span className='text-gray-500 text-sm'>
                    {field.additionalCost}
                  </span>
                </>
              ) : (
                <input
                  className='w-full border border-[#E9E9E9] py-1 px-3 focus:outline-none focus:border-blue-500'
                  type={field.type}
                  id={field.id}
                  name={field.id}
                  placeholder={field.placeholder}
                  required={field.required}
                />
              )}
            </div>
          ))}

          <div className='col-span-2'>
            <button
              className='bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600'
              type='submit'
            >
              Submit Order
            </button>
          </div>
        </form>

        <div className='mt-6 text-gray-500'>
          <p>Order Code: XYZ123</p>
          <p>Thank you for your order!</p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
