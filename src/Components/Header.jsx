import React from "react";

function Header() {
  return (
    <div>
      <header aria-label="Page Header">
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <div class="text-center sm:text-left">
              <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl text-primary">
                انشاء بطاقة عيد مبارك 🎉
              </h1>

              <p class="mt-1.5 text-sm text-gray-500 sm:mt-2 text-center sm:text-right">
                عيدكم مبارك وكل عام وأنتم بألف خير
              </p>
            </div>

            <div class="mt-4 flex flex-col gap-4 sm:mt-0 justify-center sm:flex-row">
              <button
                class=" rounded-lg border border-gray-200 px-5 py-3 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring sm:w-50"
                type="button"
              >
                <a
                  class="text-sm font-medium"
                  href="https://ali-hatem-ramadan.vercel.app/"
                  target="_blank"
                >
                  View my profile
                </a>
                <i class="ml-2 text-sm fas fa-external-link-alt"></i>
              </button>

              <div class="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200">
                <img
                  src="https://i.postimg.cc/Z57TPpyP/400108500287-305640-01-01.jpg"
                  alt="random"
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
