import React from "react";

import { Button, Img, List, Text } from "components";
import Header from "components/Header";
import LandingPageFooter from "components/LandingPageFooter";

const PrivacyPolicyPage = () => {
  return (
    <>
      <div className="bg-gray-51 flex flex-col font-markoone sm:gap-10 md:gap-10 gap-[100px] items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start w-full">
          <Header className="bg-white-A700 flex gap-2 h-20 md:h-auto items-center justify-between md:px-5 px-[120px] py-[19px] w-full" />
          <div className="flex flex-col font-manrope items-start justify-center pl-[120px] pr-[266px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start w-full">
              <div className="flex flex-col gap-10 items-start justify-start w-full">
                <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                  <Text
                    className="sm:text-4xl md:text-[42px] text-[46px] text-gray-900 tracking-[-0.92px] w-full"
                    size="txtManropeExtraBold46"
                  >
                    Privacy Policy
                  </Text>
                  <Text
                    className="text-gray-600 text-lg w-full"
                    size="txtManropeRegular18Gray600"
                  >
                    Last updated: August 2023
                  </Text>
                </div>
                <Text
                  className="leading-[180.00%] text-gray-600 text-lg"
                  size="txtManropeRegular18Gray600"
                >
                  <>
                  Welcome to Utoopia ("us," "we," or "our"). 
                  We respect your privacy and are committed to protecting your personal information. 
                  This Privacy Policy outlines the types of data we collect, how we use and share it, and your rights regarding your personal data. 
                  By using our services, you agree to the terms outlined in this Privacy Policy.
                  </>
                </Text>
              </div>
              <div className="flex flex-col gap-10 items-start justify-start w-full">
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-full"
                    size="txtManropeBold24Gray900"
                  >
                    1. Information We Collect
                  </Text>
                  <Text
                    className="leading-[180.00%] text-gray-600 text-lg"
                    size="txtManropeRegular18Gray600"
                  >
                    <>
                    We collect the following types of personal information:<br />

{/*                     - Date of Birth: We collect your date of birth to provide personalized services and ensure compliance with age-related regulations.

                    - Time of Birth: We collect your time of birth to enhance the accuracy of certain services we offer, such as astrological analyses. */}

                    - Email Address: We collect your email address to communicate with you, provide updates, and send relevant information about our services.<br />
                      <br />
                    </>
                  </Text>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-full"
                    size="txtManropeBold24Gray900"
                  >
                    2. How We Use Your Information
                  </Text>
                  <Text
                    className="leading-[180.00%] max-w-[1054px] md:max-w-full text-gray-600 text-lg"
                    size="txtManropeRegular18Gray600"
                  >
                    We use your personal information for the following purposes:<br />

                    - Providing Services: We use your date and time of birth to offer personalized astrological and related services.<br />

                    - Communication: We use your email address to send you updates, promotional materials, and important information related to our services.<br />

                    - Legal Compliance: We may use your information to comply with legal obligations and enforce our terms of service.<br />
                  </Text>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-full"
                    size="txtManropeBold24Gray900"
                  >
                    3. Data Sharing
                  </Text>
                  <Text
                    className="leading-[180.00%] text-gray-600 text-lg"
                    size="txtManropeRegular18Gray600"
                  >
                    <>
                    We may share your personal information with:<br />

                    - Service Providers: We may share your data with trusted third-party service providers who assist us in operating our business and providing services to you.<br />

                    - Legal Authorities: We may disclose your information if required by law, legal process, or to protect our rights, privacy, safety, or property.<br />
                    </>
                  </Text>
                </div>
                <div className="flex flex-col gap-8 items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-full"
                    size="txtManropeBold24Gray900"
                  >
                    4. Your Choices
                  </Text>
                  <Text
                    className="leading-[180.00%] text-gray-600 text-lg"
                    size="txtManropeRegular18Gray600"
                  >
                    <>
                    You have the right to:<br />
                    - Access your personal information.<br />
                    - Correct any inaccuracies in your data.<br />
                    - Withdraw consent for data processing.<br />
                    - Request deletion of your personal data, subject to legal obligations.<br />
                    </>
                  </Text>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-full"
                    size="txtManropeBold24Gray900"
                  >
                    5. Security
                  </Text>
                  <Text
                    className="leading-[180.00%] max-w-[1054px] md:max-w-full text-gray-600 text-lg"
                    size="txtManropeRegular18Gray600"
                  >
                    We implement reasonable security measures to protect your personal information from unauthorized access or disclosure.
                  </Text>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-full"
                    size="txtManropeBold24Gray900"
                  >
                    6. Children's Privacy
                  </Text>
                  <Text
                    className="leading-[180.00%] max-w-[1054px] md:max-w-full text-gray-600 text-lg"
                    size="txtManropeRegular18Gray600"
                  >
                    Our services are not intended for individuals under the age of 18. We do not knowingly collect or process personal information from children without parental consent.
                  </Text>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-full"
                    size="txtManropeBold24Gray900"
                  >
                    7. Changes to this Policy
                  </Text>
                  <Text
                    className="leading-[180.00%] max-w-[1054px] md:max-w-full text-gray-600 text-lg"
                    size="txtManropeRegular18Gray600"
                  >
                    We may update this Privacy Policy from time to time. Any changes will be posted on our website, and the revised version will be effective upon posting.
                  </Text>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-full"
                    size="txtManropeBold24Gray900"
                  >
                    8. Contact Us
                  </Text>
                  <Text
                    className="leading-[180.00%] max-w-[1054px] md:max-w-full text-gray-600 text-lg"
                    size="txtManropeRegular18Gray600"
                  >
                    If you have any questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact us at gbajaj7@gmail.com.

                    By using our services, you agree to the terms of this Privacy Policy.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <LandingPageFooter className="bg-white-A700 flex gap-2 items-center justify-center md:px-5 px-[120px] py-20 w-full" />
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
