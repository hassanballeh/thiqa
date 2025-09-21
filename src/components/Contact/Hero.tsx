"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
const Hero = () => {
  const { t } = useTranslation();
  const [chatReady, setChatReady] = useState(false);
  useEffect(() => {
    const checkChatIcon = () => {
      const shadowHost = Array.from(document.querySelectorAll("*")).find((el) =>
        el.shadowRoot?.querySelector(".o-livechat-LivechatButton")
      );
      if (shadowHost) {
        setChatReady(true);
      } else {
        setTimeout(checkChatIcon, 500);
      }
    };

    checkChatIcon();
  }, []);

  const handleOpenChat = () => {
    const shadowHost = Array.from(document.querySelectorAll("*")).find((el) =>
      el.shadowRoot?.querySelector(".o-livechat-LivechatButton")
    );
    const chatButton = shadowHost?.shadowRoot?.querySelector(
      ".o-livechat-LivechatButton"
    ) as HTMLElement | null;

    if (chatButton) {
      chatButton.click();
    }
  };
  return (
    <div className="py-0">
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 place-items-center md:place-items-stretch w-full">
        <div className="flex-1 md:px-4 text-start flex flex-col  justify-start md:justify-center w-full ">
          <h2 className="relative text-2xl md:text-5xl font-bold text-primary leading-tight w-fit md:w-auto max-w-xs">
            Chat With Us
            <img
              src="/line-acad-support.svg"
              alt="underline"
              className="absolute top-full md:top-14 left-0 w-full "
            />
          </h2>

          <p className="text-sm md:text-[15px] md:leading-normal text-gray1 mt-4 md:mt-10 max-w-xs md:max-w-[430px] hyphens-auto">
            {t("contact.1-heading1")}
            <br />
            {t("contact.1-heading2")}{" "}
          </p>
          <div className="flex flex-col gap-4 my-4 md:mt-6 mx-0 items-start">
            <div className="flex flex-col gap-4 mt-4 sm:mt-6 mx-0 items-start">
              <div className="relative w-fit mx-0">
                <img
                  src="/arrow-contact.svg"
                  className="absolute bottom-1 -right-20 h-14"
                />
                {/* <Link
                  href=""
                  className="bg-primary rounded-3xl px-10 font-semibold py-1.5 text-white hover:bg-gold block"
                >
                  <span>Start Live Chat</span>
                </Link> */}
                <button
                  className="bg-primary rounded-3xl px-10 font-semibold py-1.5 text-white hover:bg-gold block
                   disabled:bg-gray-400 disabled:cursor-not-allowed duration-500"
                  onClick={handleOpenChat}
                  disabled={!chatReady}
                >
                  Start Live Chat
                </button>
                <img
                  src="/gif/istol-unscreen.gif"
                  className="absolute -top-[35%] sm:-top-7 -left-[40px] sm:-left-16  h-16 sm:h-24"
                />
              </div>
            </div>
          </div>
        </div>

        <section className="flex-1 relative flex justify-center items-center py- overflow-">
          <div className="relative z-10">
            <img
              src="/contact.png"
              alt="Student"
              className="object-contain z-10 relative"
            />
            <img
              src="/gif/isto-unscreen.gif"
              className="absolute top-[42%] sm:top-[47%] md:top-[42%] lg:top-[38%] xl:top-[203px] -right-2  sm:right-[17px] md:-right-[2%] lg:-right-[22px] xl:-right-[10px] h-20 lg:h-32"
            />
          </div>
        </section>
      </section>
    </div>
  );
};

export default Hero;
