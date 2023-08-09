import React from "react";
import useForm from "hooks/useForm";
import { ToastContainer, toast } from "react-toastify";

import { userSignUpPut } from "service/api";
import * as yup from "yup";
import "react-toastify/dist/ReactToastify.css";


import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, Text } from "components";
import LandingPageFooter from "components/LandingPageFooter";
import LandingPageHeader from "components/LandingPageHeader";

const payloadData = { payload: { Item: { emailAddress: "" } } };

const AboutUsPage = () => {
  
  const [userSignUp, setUserSignUp] = React.useState();
  const formValidationSchema = yup
  .object()
  .shape({
    payload: yup
      .object()
      .shape({
        Item: yup
          .object()
          .shape({
            emailAddress: yup
              .string()
              .matches(
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                "EmailAddress is not in correct format",
              ),
          }),
      }),
  });

  const form = useForm(
    { payload: { Item: { emailAddress: "" } } },
    {
      validate: true,
      validateSchema: formValidationSchema,
      validationOnChange: true,
    },
  );

  const navigate = useNavigate();

  function signup(data) {
    const req = {
      data: { 
            "payload": {
              "TableName": "userSignup",
              "Item": 
                {"emailAddress" : data?.payload.Item.emailAddress  } 
            }
          }
    };
  
    userSignUpPut(req)
    .then((res) => {
      setUserSignUp(res?.data);

      localStorage.setItem("email", JSON.stringify(res?.data?.emailAddress));

      toast.success("Success, Registered your email!");
    })
    .catch((err) => {
      console.error(err);
      toast.error(err + data + "Please enter the correct email address.");
    });
  }

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-markoone sm:gap-10 md:gap-10 gap-[100px] items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <LandingPageHeader className="bg-white-A700 flex gap-2 h-20 md:h-auto items-center justify-between md:px-5 px-[120px] py-[19px] w-full" />
        <div className="flex flex-col font-manrope items-center justify-center md:px-10 sm:px-5 px-[120px] w-full">
          <div className="flex flex-col gap-10 items-center justify-start max-w-[1200px] mx-auto w-full">
            <div className="flex flex-col gap-4 items-center justify-start w-full">
              <Text
                className="leading-[140.00%] sm:text-[40px] md:text-[46px] text-[46px] text-center text-gray-900 tracking-[-1.08px]"
                size="txtManropeExtraBold46"
              >
                <>
                A Dating app to find compatibility based LOVE Partner <br />
                with a Southeast Asia influence
                
                </>
              </Text>
              <Text
                    className="leading-[140.00%] text-bluegray-600 text-xl tracking-[-0.40px]"
                    size="txtManropeSemiBold20"
                  >
                    Are you tired of swiping on apps looking for a perfect compatible matches?  <br />
                    40% of users are saying the same. Hence, we provide deep compatibility based matches.
              </Text>
                  
              <div className="bg-gray-401 flex flex-col items-center justify-center md:px-10 sm:px-5 px-[100px] py-10 rounded-[10px] w-full">
              <div className="flex flex-col gap-[30px] items-center justify-start md:px-10 sm:px-5 px-[200px] w-full">
                <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                  {/* <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.56px] w-auto"
                    size="txtManropeExtraBold28"
                  >
                    Sign up NOW to get free subscriton before we launch, only till Aug 15.
                  </Text> */}
                  <Text
                    className="leading-[180.00%] max-w-[600px] md:max-w-full text-center text-gray-900 text-lg"
                    size="txtManropeRegular18Gray900"
                  >
                    <b>Sign up NOW to get free subscriton before we launch, only till Aug 15</b>.
                  </Text>
                  {/* <Text
                    className="leading-[180.00%] max-w-[600px] md:max-w-full text-center text-gray-900 text-lg"
                    size="txtManropeRegular18Gray900"
                  >
                    We helps businesses customize, automate and scale up their
                    ad production and delivery.
                  </Text> */}
                </div>
                <div className="flex sm:flex-col flex-row gap-2 items-start justify-start w-full">
                  <Input
                    name="input"
                    placeholder="Enter your Email"
                    className="font-semibold p-0 placeholder:text-gray-700 text-gray-700 text-left text-sm w-full"
                    wrapClassName="bg-gray-52 flex-1 sm:flex-1 pb-3 pl-4 pr-3 pt-[15px] rounded-[10px] w-[78%] sm:w-full"
                    type="email"
                    onChange={(e) => {
                      form.handleChange("payload.Item.emailAddress", e);
                    }}
                    errors={form?.errors?.payload?.Item?.emailAddress}
                    value={form?.values?.payload?.Item?.emailAddress}
                  ></Input>
                  
                  <Button
                    className="common-pointer bg-gray-900 cursor-pointer font-semibold min-w-[126px] py-[13px] rounded-[10px] text-base text-center text-white-A700"
                    onClick={() => {
                      form.handleSubmit(signup);
                    }}
                  >
                    Sign Up
                  </Button>
                </div>
              </div>
            </div>
              <Text
                className="leading-[180.00%] max-w-[1200px] md:max-w-full text-center text-gray-700 text-lg"
                size="txtManropeRegular18"
              >
                <>
                At Utoopia, we believe that human compatibility is Colorful🌈, much more than just shared hobbies and likes. <br />
                Created in Seattle, WA by a Southeast asian woman software engineer.<br />
                #BIPOC #womenwhocode #mindfuldating #inclusive #changemakers
                </>
              </Text>
            </div>
            <div className="flex flex-col gap-10 items-start justify-start w-full">
              <div className="flex md:flex-col flex-row gap-14 items-start justify-start w-full">
                <Img
                  //className="flex-1 md:flex-none h-[400px] sm:h-auto max-h-[400px] object-cover rounded-[10px] sm:w-[] md:w-[]"
                  className="md:h-[400px] sm:h-auto h-full max-h-[400px] object-cover rounded-[10px] sm:w-[] md:w-[]"
                  src="images/app_preview.png"
                  alt="rectangle5592"
                />
                <video
                  className="md:h-[400px] sm:h-auto h-full max-h-[400px] object-cover rounded-[10px] sm:w-[] md:w-[]"
                  src="assets/Utoopia_Demo1.mov" controls="controls" playsinline webkit-playsinline>
                </video>
                {/* <Img
                  className="md:h-[400px] sm:h-auto h-full max-h-[400px] object-cover rounded-[10px] sm:w-[] md:w-[]"
                  src="images/img_rectangle5593.png"
                  alt="rectangle5593"
                /> */}
              </div>
              <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.56px] w-auto"
                    size="txtManropeExtraBold28"
                  >
                  <>
                    How are we different?
                  </>
                  </Text>
                  <Text
                  className="leading-[180.00%] max-w-[1200px] md:max-w-full text-center text-gray-700 text-lg"
                  size="txtManropeRegular18"
                  >
                  <>
                  🌈 <b>We find compatibility from the Root </b><br />
                  Our unique compatibility calculations delve into the essence of what makes relationships thrive. 
                  Utoopia celebrates diversity and recognizes that every individual has their own unique preferences and needs.<br />
                  </>
                  </Text>
                  <Text
                  className="leading-[180.00%] max-w-[1200px] md:max-w-full text-center text-gray-700 text-lg"
                  size="txtManropeRegular18"
                  >
                  <>
                  🛠 <b>Crafted with Care </b><br />
                  Designed by a relationship enthusiast, with a multi-cultural experience who is ready to listen to customers and solve their problems.<br />
                  </>
                  </Text>
                  <Text
                  className="leading-[180.00%] max-w-[1200px] md:max-w-full text-center text-gray-700 text-lg"
                  size="txtManropeRegular18"
                  >
                  <>
                  🏆 <b>High-Quality Compatibility Score </b><br />
                  By blending ancient wisdom with modern science, we've created a comprehensive system that considers multiple dimensions, 
                  including romantic, emotional, intellectual, and many others.<br />
                  </>
                  </Text>
                {/* <Img
                  className="md:h-[400px] sm:h-auto h-full max-h-[400px] object-cover rounded-[10px] sm:w-[] md:w-[]"
                  src="images/img_rectangle5595.png"
                  alt="rectangle5595"
                /> */}
                {/* <Img
                  className="flex-1 md:flex-none h-[400px] sm:h-auto max-h-[400px] object-cover rounded-[10px] sm:w-[] md:w-[]"
                  src="images/img_rectangle5594.png"
                  alt="rectangle5594"
                /> */}
              </div>
            </div>
          </div>
        </div>
{/*         <div className="bg-gray-50 flex flex-col font-manrope items-center justify-center md:px-10 sm:px-5 px-[120px] py-[50px] w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1200px] mx-auto w-full">
            <List
              className="md:flex-1 sm:flex-col flex-row md:gap-10 gap-[100px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-[73%] md:w-full"
              orientation="horizontal"
            >
              <div className="flex flex-col gap-[18px] items-start justify-start w-[225px]">
                <Button className="bg-white-A700 flex h-[60px] items-center justify-center p-3.5 rounded-[50%] shadow-bs w-[60px]">
                  <Img className="h-8" src="images/img_clock.svg" alt="clock" />
                </Button>
                <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                  <Text
                    className="sm:text-4xl md:text-[42px] text-[46px] text-gray-900 tracking-[-0.92px] w-full"
                    size="txtManropeExtraBold46"
                  >
                    $15.4M
                  </Text>
                  <Text
                    className="leading-[140.00%] text-bluegray-600 text-xl tracking-[-0.40px]"
                    size="txtManropeSemiBold20"
                  >
                    <>
                      Owned from
                      <br />
                      Properties transactions
                    </>
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[18px] items-start justify-start w-[225px]">
                <Button className="bg-white-A700 flex h-[60px] items-center justify-center p-3.5 rounded-[50%] shadow-bs w-[60px]">
                  <Img
                    className="h-8"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown"
                  />
                </Button>
                <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                  <Text
                    className="sm:text-4xl md:text-[42px] text-[46px] text-gray-900 tracking-[-0.92px] w-full"
                    size="txtManropeExtraBold46"
                  >
                    25K+
                  </Text>
                  <Text
                    className="leading-[140.00%] max-w-[225px] md:max-w-full text-bluegray-600 text-xl tracking-[-0.40px]"
                    size="txtManropeSemiBold20"
                  >
                    Properties for Buy & sell Successfully
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[18px] items-start justify-start w-[225px]">
                <Button className="bg-white-A700 flex h-[60px] items-center justify-center p-3.5 rounded-[50%] shadow-bs w-[60px]">
                  <Img className="h-8" src="images/img_reply.svg" alt="reply" />
                </Button>
                <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                  <Text
                    className="sm:text-4xl md:text-[42px] text-[46px] text-gray-900 tracking-[-0.92px] w-full"
                    size="txtManropeExtraBold46"
                  >
                    500
                  </Text>
                  <Text
                    className="leading-[140.00%] max-w-[225px] md:max-w-full text-bluegray-600 text-xl tracking-[-0.40px]"
                    size="txtManropeSemiBold20"
                  >
                    <>
                      Daily completed <br />
                      transactions
                    </>
                  </Text>
                </div>
              </div>
            </List>
            <div className="flex flex-col gap-[18px] items-start justify-start w-[225px]">
              <Button className="bg-white-A700 flex h-[60px] items-center justify-center p-3.5 rounded-[50%] shadow-bs w-[60px]">
                <Img
                  className="h-8"
                  src="images/img_checkmark.svg"
                  alt="checkmark"
                />
              </Button>
              <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                <Text
                  className="sm:text-4xl md:text-[42px] text-[46px] text-gray-900 tracking-[-0.92px] w-full"
                  size="txtManropeExtraBold46"
                >
                  600+
                </Text>
                <Text
                  className="text-bluegray-600 text-xl tracking-[-0.40px] w-full"
                  size="txtManropeSemiBold20"
                >
                  Reagular Clients
                </Text>
              </div>
            </div>
          </div>
        </div> */}
        <div className="flex flex-col font-manrope items-center justify-center max-w-[1440px] pl-[120px] pr-[173px] md:px-10 sm:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[84px] items-center justify-start max-w-[1147px] mx-auto w-full">
            <div className="flex flex-1 flex-col gap-14 items-start justify-start w-full">
              <div className="flex flex-col gap-5 items-start justify-start w-full">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[-0.72px] w-full"
                  size="txtManropeExtraBold36"
                >
                  A note from founder.
                </Text>
                <Text
                  className="leading-[180.00%] max-w-[531px] md:max-w-full text-gray-700 text-lg"
                  size="txtManropeRegular18"
                >
                  I am a relationship enthusiast at heart and software engineer by profession. 
                  I was born in India and came to US a decade ago. 
                </Text>
              </div>
              <List
                className="flex flex-col gap-8 items-start w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 sm:flex-col flex-row gap-[26px] items-start justify-start my-0 w-full">
                  <div className="flex flex-1 flex-col gap-[17px] items-start justify-start w-full">
                    <Text
                      className="text-[22px] text-gray-900 sm:text-lg md:text-xl tracking-[-0.44px] w-full"
                      size="txtManropeBold22"
                    >
                      A Holistic Approach
                    </Text>
                    <Text
                      className="leading-[180.00%] max-w-[470px] md:max-w-full text-gray-700 text-lg"
                      size="txtManropeRegular18"
                    >
                      Utoopia is built from my heart with customers in my mind. I want to listen to you and create positive experience for you. 
                      I am dedicated to building a holistic and effective product, that addresses all your relationship needs, 
                      every step of the way. Utoopia celebrates inclusivity in ethinicity, gender identity, sexual orientation, and relationship types.
                    </Text>
                  </div>
                </div>
{/*                 <div className="flex flex-1 sm:flex-col flex-row gap-[26px] items-start justify-start my-0 w-full">
                  <Text
                    className="border-2 border-gray-900 border-solid flex h-[35px] items-center justify-center rounded-[17px] text-center text-gray-900 text-xl tracking-[-0.40px] w-[35px]"
                    size="txtManropeExtraBold20"
                  >
                    2
                  </Text>
                  <div className="flex flex-1 flex-col gap-[17px] items-start justify-start w-full">
                    <Text
                      className="text-[22px] text-gray-900 sm:text-lg md:text-xl tracking-[-0.44px] w-full"
                      size="txtManropeBold22"
                    >
                      Donate launches in 2007
                    </Text>
                    <Text
                      className="leading-[180.00%] max-w-[470px] md:max-w-full text-gray-700 text-lg"
                      size="txtManropeRegular18"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. In a free hour, On the other hand,
                      we denounce with righteous indignation and dislike men who
                      are so beguiled and demoralized by the charms of pleasure
                      of the moment.
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 sm:flex-col flex-row gap-[26px] items-start justify-start my-0 w-full">
                  <Text
                    className="border-2 border-gray-900 border-solid flex h-[35px] items-center justify-center rounded-[17px] text-center text-gray-900 text-xl tracking-[-0.40px] w-[35px]"
                    size="txtManropeExtraBold20"
                  >
                    3
                  </Text>
                  <div className="flex flex-1 flex-col gap-[17px] items-start justify-start w-full">
                    <Text
                      className="text-[22px] text-gray-900 sm:text-lg md:text-xl tracking-[-0.44px] w-full"
                      size="txtManropeBold22"
                    >
                      Utoopia holds its initial public offering in 2008
                    </Text>
                    <Text
                      className="leading-[180.00%] max-w-[470px] md:max-w-full text-gray-700 text-lg"
                      size="txtManropeRegular18"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. In a free hour, On the other hand,
                      we denounce with righteous indignation and dislike men who
                      are so beguiled and demoralized by the charms of pleasure
                      of the moment.
                    </Text>
                  </div>
                </div> */}
              </List>
            </div>
            <Img
              className="flex-1 md:flex-none h-[300px] sm:h-auto max-h-[300px] object-cover rounded-[5px] sm:w-[] md:w-[]"
              src="images/founder_photo.jpeg"
              alt="rectangleTwenty"
            />
          </div>
        </div>
{/*         <div className="flex flex-col font-manrope items-center justify-center max-w-[1440px] pl-[170px] pr-[120px] md:px-10 sm:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[158px] items-center justify-between max-w-[1150px] mx-auto w-full">
            <Img
              className="flex-1 md:flex-none h-[589px] sm:h-auto max-h-[589px] object-cover rounded-[10px] sm:w-[] md:w-[]"
              src="images/img_rectangle20_589x496.png"
              alt="rectangleTwenty_One"
            />
            <div className="flex flex-1 flex-col gap-14 items-start justify-start w-full">
              <div className="flex flex-col gap-5 items-start justify-start w-full">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[-0.72px] w-full"
                  size="txtManropeExtraBold36"
                >
                  Our vision is simple.
                </Text>
                <Text
                  className="leading-[180.00%] text-gray-700 text-lg"
                  size="txtManropeRegular18"
                >
                  <>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. In a free hour, On the other hand, we
                    denounce with righteous indignation and dislike men who are
                    so beguiled and demoralized by the charms of pleasure of the
                    moment.
                    <br />
                    In a free hour, On the other hand, we denounce with
                    righteous indignation and dislike men .
                  </>
                </Text>
              </div>
              <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                <Text
                  className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                  size="txtManropeSemiBold20Gray900"
                >
                  Kausar Pial
                </Text>
                <Text
                  className="text-gray-700 text-lg w-full"
                  size="txtManropeSemiBold18"
                >
                  CEO at Static Mania
                </Text>
              </div>
            </div>
          </div>
        </div> */}
{/*         <div className="flex flex-col font-manrope items-center justify-center md:px-10 sm:px-5 px-[120px] w-full">
          <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start max-w-[1200px] mx-auto w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-center text-gray-900 tracking-[-0.72px] w-full"
              size="txtManropeExtraBold36"
            >
              Utoopia Team members
            </Text>
            <div className="flex flex-col items-start justify-start w-full">
              <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <Img
                    className="h-[282px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                    src="images/img_rectangle5596.png"
                    alt="rectangle5596"
                  />
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                      size="txtManropeSemiBold20Gray900"
                    >
                      Kausar Pial
                    </Text>
                    <Text
                      className="text-gray-700 text-lg w-full"
                      size="txtManropeRegular18"
                    >
                      CEO
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <Img
                    className="h-[282px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                    src="images/img_rectangle5597.png"
                    alt="rectangle5597"
                  />
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                      size="txtManropeSemiBold20Gray900"
                    >
                      Floyd Miles
                    </Text>
                    <Text
                      className="text-gray-700 text-lg w-full"
                      size="txtManropeRegular18"
                    >
                      President of Sales
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <Img
                    className="h-[282px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                    src="images/img_rectangle5598.png"
                    alt="rectangle5598"
                  />
                  <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                    <Text
                      className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                      size="txtManropeSemiBold20Gray900"
                    >
                      Darlene Robertson
                    </Text>
                    <Text
                      className="text-gray-700 text-lg w-full"
                      size="txtManropeRegular18"
                    >
                      Marketing Coordinator
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <Img
                    className="h-[282px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                    src="images/img_rectangle5599.png"
                    alt="rectangle5599"
                  />
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                      size="txtManropeSemiBold20Gray900"
                    >
                      Guy Hawkins
                    </Text>
                    <Text
                      className="text-gray-700 text-lg w-full"
                      size="txtManropeRegular18"
                    >
                      Marketing Coordinator
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <Img
                    className="h-[282px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                    src="images/img_rectangle5600.png"
                    alt="rectangle5600"
                  />
                  <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                    <Text
                      className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                      size="txtManropeSemiBold20Gray900"
                    >
                      Jerome Bell
                    </Text>
                    <Text
                      className="text-gray-700 text-lg w-full"
                      size="txtManropeRegular18"
                    >
                      Marketing Coordinator
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <Img
                    className="h-[282px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                    src="images/img_rectangle5601.png"
                    alt="rectangle5601"
                  />
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                      size="txtManropeSemiBold20Gray900"
                    >
                      Ralph Edwards
                    </Text>
                    <Text
                      className="text-gray-700 text-lg w-full"
                      size="txtManropeRegular18"
                    >
                      Marketing Coordinator
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <Img
                    className="h-[282px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                    src="images/img_rectangle5602.png"
                    alt="rectangle5602"
                  />
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                      size="txtManropeSemiBold20Gray900"
                    >
                      Arlene McCoy
                    </Text>
                    <Text
                      className="text-gray-700 text-lg w-full"
                      size="txtManropeRegular18"
                    >
                      Marketing Coordinator
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <Img
                    className="h-[282px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                    src="images/img_rectangle5603.png"
                    alt="rectangle5603"
                  />
                  <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                    <Text
                      className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                      size="txtManropeSemiBold20Gray900"
                    >
                      Devon Lane
                    </Text>
                    <Text
                      className="text-gray-700 text-lg w-full"
                      size="txtManropeRegular18"
                    >
                      Marketing Coordinator
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <Img
                    className="h-[282px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                    src="images/img_rectangle5604.png"
                    alt="rectangle5604"
                  />
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                      size="txtManropeSemiBold20Gray900"
                    >
                      Courtney Henry
                    </Text>
                    <Text
                      className="text-gray-700 text-lg w-full"
                      size="txtManropeRegular18"
                    >
                      Marketing Coordinator
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <Img
                    className="h-[282px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                    src="images/img_rectangle5605.png"
                    alt="rectangle5605"
                  />
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                      size="txtManropeSemiBold20Gray900"
                    >
                      Bessie Cooper
                    </Text>
                    <Text
                      className="text-gray-700 text-lg w-full"
                      size="txtManropeRegular18"
                    >
                      Marketing Coordinator
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <Img
                    className="h-[282px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                    src="images/img_rectangle5606.png"
                    alt="rectangle5606"
                  />
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                      size="txtManropeSemiBold20Gray900"
                    >
                      Cody Fisher
                    </Text>
                    <Text
                      className="text-gray-700 text-lg w-full"
                      size="txtManropeRegular18"
                    >
                      Marketing Coordinator
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <Img
                    className="h-[282px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                    src="images/img_rectangle5607.png"
                    alt="rectangle5607"
                  />
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                      size="txtManropeSemiBold20Gray900"
                    >
                      Cody Fisher
                    </Text>
                    <Text
                      className="text-gray-700 text-lg w-full"
                      size="txtManropeRegular18"
                    >
                      Marketing Coordinator
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
{/*         <div className="bg-gray-900 flex flex-col font-manrope items-center justify-center p-[120px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[120px] items-center justify-start max-w-[1200px] mx-auto w-full">
            <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start w-full">
              <div className="flex sm:flex-col flex-row gap-5 items-center justify-start w-full">
                <Text
                  className="flex-1 text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[-0.72px] w-auto"
                  size="txtManropeExtraBold36WhiteA700"
                >
                  News & Consult
                </Text>
                <Button
                  className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[124px]"
                  onClick={() => navigate("")}
                  rightIcon={
                    <Img
                      className="h-6 mb-[3px] ml-2"
                      src="images/img_arrowright.svg"
                      alt="arrow_right"
                    />
                  }
                >
                  <div className="font-bold text-left text-lg text-orange-A700">
                    Explore All
                  </div>
                </Button>
              </div>
              <List
                className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-full"
                orientation="horizontal"
              >
                <div className="flex flex-1 flex-col gap-6 h-[487px] md:h-auto items-start justify-start w-full">
                  <Img
                    className="md:h-auto h-full object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                    src="images/img_image_350x384.png"
                    alt="image"
                  />
                  <div className="flex flex-col gap-6 items-start justify-start w-full">
                    <Text
                      className="leading-[135.00%] md:max-w-full max-w-sm text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[-0.48px]"
                      size="txtManropeBold24"
                    >
                      9 Easy-to-Ambitious DIY Projects to Improve Your Home
                    </Text>
                    <div className="flex flex-row gap-2 items-center justify-start w-full sm:w-full">
                      <Text
                        className="text-deep_orange-400 text-lg w-auto"
                        size="txtManropeBold18"
                      >
                        Read the Article
                      </Text>
                      <Img
                        className="h-6 w-6"
                        src="images/img_arrowright_deep_orange_400.svg"
                        alt="arrowright"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-6 h-[487px] md:h-auto items-start justify-start w-full">
                  <Img
                    className="md:h-auto h-full object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                    src="images/img_image_6.png"
                    alt="image"
                  />
                  <div className="flex flex-col gap-6 items-start justify-start w-full">
                    <Text
                      className="leading-[135.00%] md:max-w-full max-w-sm text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[-0.48px]"
                      size="txtManropeBold24"
                    >
                      Serie Shophouse Launch In July, Opportunity For Investors
                    </Text>
                    <div className="flex flex-row gap-2 items-center justify-start w-full sm:w-full">
                      <Text
                        className="text-deep_orange-400 text-lg w-auto"
                        size="txtManropeBold18"
                      >
                        Read the Article
                      </Text>
                      <Img
                        className="h-6 w-6"
                        src="images/img_arrowright_deep_orange_400.svg"
                        alt="arrowright"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-6 h-[487px] md:h-auto items-start justify-start w-full">
                  <Img
                    className="md:h-auto h-full object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                    src="images/img_image_7.png"
                    alt="image"
                  />
                  <div className="flex flex-col gap-6 items-start justify-start w-full">
                    <Text
                      className="leading-[135.00%] md:max-w-full max-w-sm text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[-0.48px]"
                      size="txtManropeBold24"
                    >
                      Looking for a New Place? Use This Time to Create Your
                      Wishlist
                    </Text>
                    <div className="flex flex-row gap-2 items-center justify-start w-full sm:w-full">
                      <Text
                        className="text-deep_orange-400 text-lg w-auto"
                        size="txtManropeBold18"
                      >
                        Read the Article
                      </Text>
                      <Img
                        className="h-6 w-6"
                        src="images/img_arrowright_deep_orange_400.svg"
                        alt="arrowright"
                      />
                    </div>
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div> */}
        <LandingPageFooter className="bg-white-A700 flex gap-2 items-center justify-center md:px-5 px-[120px] py-20 w-full" />
      </div>
      <ToastContainer />
    </>
  );
};

export default AboutUsPage;
