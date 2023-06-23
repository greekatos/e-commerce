import React, { useState } from "react";

const initialFormInfo = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

const Footer = () => {
  const [formInfo, setFormInfo] = useState(initialFormInfo);
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleInputChange = (e, field) => {
    setFormInfo((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormInfo(initialFormInfo);
    setShowSnackbar(true);

    setTimeout(() => {
      setShowSnackbar(false);
    }, 2000);
  };

  console.log(formInfo, formInfo.message.length);

  return (
    <>
      <footer className='bg-gray-700 text-white p-8 py-16 mt-28'>
        <div className='container mx-auto flex flex-col lg:flex-row justify-around'>
          <div className='w-full lg:w-2/4 flex flex-col lg:flex-row justify-center'>
            <div className='ml-40 mb-4'>
              <h3 className=' mb-2'>Quick Links</h3>
              <ul>
                <li>
                  <a href='#'>
                    About - Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.
                  </a>
                </li>
                <li>
                  <a href='#'>
                    Store Locator - Nulla posuere eros ac dolor consectetur
                    eleifend.
                  </a>
                </li>
                <li>
                  <a href='#'>
                    FAQs - Cras fermentum nisl quis neque tincidunt volutpat.
                  </a>
                </li>
              </ul>
            </div>
            <div className='mb-4 ml-40'>
              <h3 className='mb-2'>More Links</h3>
              <ul>
                <li>
                  <a href='#'>
                    News - Sed vel purus id lectus egestas tristique vitae id
                    enim.
                  </a>
                </li>
                <li>
                  <a href='#'>
                    Careers - Duis feugiat nisl sed mauris pellentesque, quis
                    pretium quam accumsan.
                  </a>
                </li>
                <li>
                  <a href='#'>
                    Contact Us - Sed sit amet justo at neque sollicitudin
                    pharetra.
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <form onSubmit={handleSubmit} className='w-full lg:w-[30%] mx-10'>
            <input
              className='mb-8 w-2/3 p-1 text-gray-500 focus:border focus:border-[#228B22] focus:outline-none'
              type='text'
              placeholder='First Name'
              value={formInfo.firstName}
              onChange={(e) => handleInputChange(e, "firstName")}
            />
            <input
              className='mb-8 w-2/3 p-1 text-gray-500 focus:border border-[#228B22] focus:outline-none'
              type='text'
              placeholder='Last Name'
              value={formInfo.lastName}
              onChange={(e) => handleInputChange(e, "lastName")}
            />
            <input
              className='mb-8 w-2/3 p-1 text-gray-500 focus:border border-[#228B22] focus:outline-none'
              type='email'
              placeholder='Email'
              value={formInfo.email}
              onChange={(e) => handleInputChange(e, "email")}
            />
            <textarea
              className='mb-4 w-full p-2 text-gray-500 focus:border border-[#228B22] focus:outline-none'
              placeholder='Your Message'
              maxLength={200}
              value={formInfo.message}
              onChange={(e) => handleInputChange(e, "message")}
            />
            <div className='text-sm text-right mb-4'>
              {200 - formInfo.message.length} words remaining
            </div>
            <button className='py-1 px-6 border border-white text-[#3390ce] font-bold text-lg hover:bg-[#228B22] hover:text-white'>
              Submit
            </button>
          </form>
        </div>
      </footer>
      <div className='h-28 bg-[#3390ce] flex justify-center items-center'>
        <div className='text-center text-white font-bold'>
          <p>Design by Eleanna</p>
        </div>
      </div>
      {showSnackbar && (
        <div className='bg-[#228B22] text-white px-4 py-2 absolute bottom-4 left-1/2 transform -translate-x-1/2'>
          Your message was submitted!
        </div>
      )}
    </>
  );
};

export default Footer;
