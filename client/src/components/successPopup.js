const SuccessPopup = () => (
  <div
    id="popup-modal"
    tabIndex="-1"
    className="overflow-y-auto overflow-x-hidden fixed inset-0 z-50 flex justify-center items-center animate-openingPopup"
  >
    <div className="relative p-4 w-full max-w-md max-h-full">
      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <div className="p-4 md:p-5 text-center">
          <svg
            viewBox="0 -398 1820 1820"
            className="icon w-[150px] h-[150px] m-auto "
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#CCCCCC"
              strokeWidth="10.92"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M910.317037 172.562963C723.247407 172.562963 570.785185 325.025185 570.785185 512.094815c0 186.974815 152.462222 339.531852 339.531852 339.531852s339.721481-152.651852 339.721482-339.531852c0-187.06963-152.557037-339.531852-339.721482-339.531852z m0 632.225185c-161.185185 0-292.503704-131.697778-292.503704-292.693333 0-161.374815 131.318519-292.314074 292.503704-292.314074 161.28 0 292.693333 130.939259 292.693333 292.314074 0 160.995556-131.318519 292.693333-292.693333 292.693333z"
                fill="#00a85f"
              ></path>
              <path
                d="M823.087407 497.682963c7.205926 13.463704 17.066667 29.771852 25.220741 45.700741 8.343704 16.213333 20.574815 38.684444 20.574815 38.684444s35.934815-74.714074 61.724444-113.493333c65.801481-98.702222 127.051852-122.121481 127.051852-122.121482s-6.352593 52.717037-5.688889 73.955556c0.758519 24.272593 10.808889 52.242963 10.808889 52.242963s-56.604444 32.900741-110.269629 90.832592c-33.848889 36.598519-79.36 108.468148-79.36 108.468149s-38.4-46.743704-68.645926-70.542223c-33.564444-26.453333-73.671111-47.881481-73.671111-47.881481s33.28-21.807407 50.157037-32.711111c16.971852-10.808889 42.097778-23.134815 42.097777-23.134815z"
                fill="#f52d00"
              ></path>
            </g>
          </svg>
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Thêm thành công sản phẩm vào giỏ hàng
          </h3>
        </div>
      </div>
    </div>
  </div>
);

export default SuccessPopup;