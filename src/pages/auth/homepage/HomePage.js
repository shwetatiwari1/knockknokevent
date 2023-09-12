import React from "react";
import { useState } from "react";
const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center space-y-14  ">
      <div className="w-[70%] flex justify-end ">
        <button
          onClick={openModal}
          id="openModalButton"
          class="bg-gray-50 shadow-md hover:bg-gray-200 hover:border-gray-300 border-gray-200 text-black font-bold py-2 px-4 rounded-xl inline-flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.9"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>

          <span>Add User</span>
        </button>
        {isModalOpen && (
          <div
            id="myModal"
            className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
          >
            <div className="bg-white w-[30%] p-4 rounded-lg shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-semibold">Modal Title</h1>
                <button
                  onClick={closeModal} 
                  id="closeModalButton"
                  className="text-gray-600 hover:text-gray-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2" // Use 'strokeWidth' instead of 'stroke-width'
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <p>Modal content goes here...</p>
            </div>
          </div>
        )}
      </div>

      <table class=" table-collapse w-[70%] h-[40%] bg-white shadow-lg">
        <thead>
          <tr className="bg-gray-50 h-14 ">
            <th class="text-sm font-sans text-left uppercase font-semibold text-grey-darker p-3 ">
              Name
            </th>
            <th class="text-sm text-left uppercase font-semibold text-grey-darker p-3 ">
              Issues Date
            </th>
            <th class="text-sm text-left uppercase font-semibold text-grey-darker p-3 ">
              Due Date
            </th>
            <th class="text-sm  uppercase font-semibold text-grey-darker p-3  text-left">
              Amount Owing
            </th>
            <th class="text-sm uppercase font-semibold text-grey-darker p-3 "></th>
          </tr>
        </thead>
        <tbody class="align-baseline p-6">
          <tr class="group cursor-pointer hover:bg-gray-100">
            <td class="text-sm p-3 font-mono border-t border-grey-light whitespace-no-wrap text-left">
              Dang Van Thanh
            </td>
            <td class="text-sm font-mono p-3 border-t border-grey-light whitespace-no-wrap text-left">
              Sep, 11 2018
            </td>
            <td class="text-sm font-mono p-3 border-t border-grey-light whitespace-no-wrap text-left">
              2 days ago
            </td>
            <td class="text-sm font-mono p-3 border-t border-grey-light whitespace-no-wrap text-left">
              $100.00
            </td>
            <td class="text-sm font-mono p-3 border-t border-grey-light whitespace-no-wrap group-hover:visible"></td>
          </tr>
          <tr class="group cursor-pointer hover:bg-gray-100">
            <td class="text-sm font-mono p-3 border-t border-grey-light whitespace-no-wrap text-left">
              Hanux Huynh
            </td>
            <td class="text-sm font-mono p-3 border-t border-grey-light whitespace-no-wrap text-left">
              Sep, 15 2018
            </td>
            <td class="text-sm font-mono p-3 border-t border-grey-light whitespace-no-wrap text-left">
              6 days ago
            </td>
            <td class="text-sm font-mono p-3 border-t border-grey-light whitespace-no-wrap text-left">
              $450.00
            </td>
            <td class="text-sm font-mono p-3 border-t border-grey-light whitespace-no-wrap text-sm"></td>
          </tr>
          <tr class="group cursor-pointer hover:bg-gray-200">
            <td class="text-sm  font-mono p-3 border-t border-grey-light whitespace-no-wrap text-left">
              Dinh Ngoc Thien Thao
            </td>
            <td class="text-sm font-mono p-3 border-t border-grey-light whitespace-no-wrap text-left">
              Sep, 19 2018
            </td>
            <td class="text-sm font-mono p-3 border-t border-grey-light whitespace-no-wrap text-left">
              10 days ago
            </td>
            <td class="text-sm font-mono p-3 border-t border-grey-light whitespace-no-wrap text-left ">
              $600.00
            </td>
            <td class="font-mono p-3 border-t border-grey-light whitespace-no-wrap text-sm group-hover:visible"></td>
          </tr>
          <tr class="group cursor-pointer hover:bg-gray-200">
            <td class="text-sm  font-mono p-3 border-t border-grey-light whitespace-no-wrap text-left">
              Cao Thai Sang
            </td>
            <td class="text-sm font-mono p-3 border-t border-grey-light whitespace-no-wrap text-left">
              Aug, 11 2018
            </td>
            <td class="text-sm  font-mono p-3 border-t border-grey-light whitespace-no-wrap text-left">
              1 month ago
            </td>
            <td class="text-sm font-mono p-3 border-t border-grey-light whitespace-no-wrap text-left">
              $150.00
            </td>
            <td class=" p-3 font-mono border-t border-grey-light whitespace-no-wrap text-sm text-left"></td>
          </tr>
          <tr class="group cursor-pointer hover:bg-gray-200">
            <td class="text-sm p-3 font-mono border-t border-grey-light whitespace-no-wrap text-left">
              Cao Thai Sang
            </td>
            <td class="text-sm p-3 font-mono border-t border-grey-light whitespace-no-wrap text-left">
              Aug, 11 2018
            </td>
            <td class="text-sm p-3 font-mono border-t border-grey-light whitespace-no-wrap text-left">
              1 month ago
            </td>
            <td class="text-sm p-3 font-mono border-t border-grey-light whitespace-no-wrap text-left">
              $150.00
            </td>
            <td class=" p-3 font-mono border-t border-grey-light whitespace-no-wrap text-sm text-left"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;
