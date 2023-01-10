import React from "react";

import { Stack, Img, Text, Line, List, Button } from "components";

const IPadPro11OnePage = () => {
  return (
    <>
      <div className="bg-gray_400 flex flex-col font-aldrich items-center justify-start mx-[auto] sm:pb-[15px] md:pb-[47px] pb-[48px] w-[100%]">
        <Stack className="bg-black_900 h-[150px] md:p-[15px] sm:p-[15px] p-[16px] relative w-[100%]">
          <Stack className="absolute h-[118px] inset-[0] justify-center m-[auto] w-[26%]">
            <Img
              src="images/img_yobb1.png"
              className="absolute h-[118px] max-w-[100%] w-[100%]"
              alt="yobbOne"
            />
          </Stack>
        </Stack>
        <div className="flex flex-col justify-start max-w-[769px] ml-[auto] mr-[auto] sm:mt-[23px] md:mt-[30px] mt-[31px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <div className="bg-white_A700 flex flex-col justify-start sm:p-[15px] md:p-[24px] p-[25px] rounded-radius10 w-[100%]">
            <div className="flex flex-col justify-start md:ml-[8px] ml-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[94%]">
              <Text
                className="not-italic text-black_900 w-[auto]"
                as="h1"
                variant="h1"
              >
                Name
              </Text>
              <Line className="bg-white_A700_7f h-[3px] sm:mt-[26px] md:mt-[33px] mt-[34px] w-[100%]" />
            </div>
            <Line className="bg-black_900_7f h-[3px] sm:ml-[6px] md:ml-[8px] ml-[9px] mt-[10px] sm:mt-[7px] md:mt-[9px] sm:w-[100%] w-[94%]" />
            <Text
              className="sm:ml-[6px] md:ml-[8px] ml-[9px] sm:mt-[20px] md:mt-[26px] mt-[27px] not-italic text-black_900 w-[auto]"
              as="h1"
              variant="h1"
            >
              Roll Number
            </Text>
            <Line className="bg-black_900_7f h-[3px] sm:ml-[6px] md:ml-[8px] ml-[9px] sm:mt-[36px] md:mt-[46px] mt-[47px] sm:w-[100%] w-[94%]" />
            <Text
              className="sm:ml-[6px] md:ml-[8px] ml-[9px] sm:mt-[18px] md:mt-[23px] mt-[24px] not-italic text-black_900 w-[auto]"
              as="h1"
              variant="h1"
            >
              Hall of Residence
            </Text>
            <Line className="bg-black_900_7f h-[3px] sm:ml-[6px] md:ml-[8px] ml-[9px] sm:mt-[37px] md:mt-[48px] mt-[49px] sm:w-[100%] w-[94%]" />
            <Text
              className="sm:ml-[6px] md:ml-[8px] ml-[9px] sm:mt-[18px] md:mt-[23px] mt-[24px] not-italic text-black_900 w-[auto]"
              as="h1"
              variant="h1"
            >
              Mobile Number
            </Text>
            <Line className="bg-black_900_7f h-[3px] md:mb-[12px] mb-[13px] sm:mb-[9px] sm:ml-[6px] md:ml-[8px] ml-[9px] sm:mt-[39px] md:mt-[51px] mt-[52px] sm:w-[100%] w-[94%]" />
          </div>
          <Img
            src="images/img_group15.svg"
            className="max-w-[100%] sm:mt-[24px] md:mt-[31px] mt-[32px] rounded-radius10 w-[100%]"
            alt="GroupFifteen"
          />
          <Img
            src="images/img_group15.svg"
            className="max-w-[100%] sm:mt-[26px] md:mt-[33px] mt-[34px] rounded-radius10 w-[100%]"
            alt="GroupSixteen"
          />
          <Img
            src="images/img_group15.svg"
            className="max-w-[100%] sm:mt-[22px] md:mt-[28px] mt-[29px] rounded-radius10 w-[100%]"
            alt="GroupSeventeen"
          />
          <Img
            src="images/img_group15.svg"
            className="max-w-[100%] sm:mt-[23px] md:mt-[30px] mt-[31px] rounded-radius10 w-[100%]"
            alt="GroupEighteen"
          />
          <Img
            src="images/img_group15.svg"
            className="max-w-[100%] sm:mt-[24px] md:mt-[31px] mt-[32px] rounded-radius10 w-[100%]"
            alt="GroupNineteen"
          />
          <List
            className="sm:gap-[27px] md:gap-[35px] gap-[36px] grid min-h-[auto] sm:mt-[26px] md:mt-[34px] mt-[35px] w-[100%]"
            orientation="vertical"
          >
            <div className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
              <div className="bg-white_A700 flex flex-col justify-start sm:p-[15px] md:p-[27px] p-[28px] rounded-radius10 w-[100%]">
                <Text
                  className="sm:ml-[3px] md:ml-[4px] ml-[5px] not-italic text-black_900 w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  Which T-shirt would you like to gift yourself ?
                </Text>
                <Line className="bg-white_A700_7f h-[3px] sm:ml-[3px] md:ml-[4px] ml-[5px] sm:mr-[26px] md:mr-[33px] mr-[34px] sm:mt-[12px] md:mt-[15px] mt-[16px] sm:w-[100%] w-[95%]" />
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[25px] ml-[26px] mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[33%]">
                  <div className="bg-bluegray_100 sm:h-[20px] h-[25px] rounded-radius2 sm:w-[19px] md:w-[24px] w-[25px]"></div>
                  <Text
                    className="sm:ml-[14px] md:ml-[18px] ml-[19px] not-italic text-black_900 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    The minimalistic one
                  </Text>
                </div>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[25px] ml-[26px] sm:mt-[15px] md:mt-[19px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[39%]">
                  <div className="bg-bluegray_100 sm:h-[20px] h-[25px] rounded-radius2 sm:w-[19px] md:w-[24px] w-[25px]"></div>
                  <Text
                    className="sm:ml-[14px] md:ml-[18px] ml-[19px] sm:mt-[3px] md:mt-[4px] mt-[5px] not-italic text-black_900 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    The main-building basher
                  </Text>
                </div>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-end md:ml-[25px] ml-[26px] sm:mt-[15px] md:mt-[19px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[39%]">
                  <div className="bg-bluegray_100 sm:h-[20px] h-[25px] rounded-radius2 sm:w-[19px] md:w-[24px] w-[25px]"></div>
                  <Text
                    className="mb-[1px] sm:ml-[14px] md:ml-[18px] ml-[19px] sm:mt-[4px] md:mt-[5px] mt-[6px] not-italic text-black_900 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    The main-building basher
                  </Text>
                </div>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[25px] ml-[26px] sm:mt-[15px] md:mt-[19px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[39%]">
                  <div className="bg-bluegray_100 sm:h-[20px] h-[25px] rounded-radius2 sm:w-[19px] md:w-[24px] w-[25px]"></div>
                  <Text
                    className="sm:ml-[14px] md:ml-[18px] ml-[19px] sm:mt-[3px] md:mt-[4px] mt-[5px] not-italic text-black_900 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    The main-building basher
                  </Text>
                </div>
                <Text
                  className="sm:ml-[3px] md:ml-[4px] ml-[5px] sm:mt-[23px] md:mt-[30px] mt-[31px] not-italic text-black_900 w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  Size:
                </Text>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start mb-[1px] md:ml-[27px] ml-[28px] sm:mt-[17px] md:mt-[22px] mt-[23px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[91%]">
                  <div className="bg-bluegray_100 sm:h-[20px] h-[25px] rounded-radius2 sm:w-[19px] md:w-[24px] w-[25px]"></div>
                  <Text
                    className="md:ml-[10px] ml-[11px] sm:ml-[8px] sm:mt-[3px] md:mt-[4px] mt-[5px] not-italic text-black_900 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    XS
                  </Text>
                  <div className="bg-bluegray_100 sm:h-[20px] h-[25px] sm:ml-[37px] md:ml-[48px] ml-[49px] rounded-radius2 sm:w-[19px] md:w-[24px] w-[25px]"></div>
                  <Text
                    className="ml-[10px] sm:ml-[7px] md:ml-[9px] sm:mt-[3px] md:mt-[4px] mt-[5px] not-italic text-black_900 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    S
                  </Text>
                  <div className="bg-bluegray_100 sm:h-[20px] h-[25px] sm:ml-[49px] md:ml-[64px] ml-[65px] rounded-radius2 sm:w-[19px] md:w-[24px] w-[25px]"></div>
                  <Text
                    className="sm:ml-[6px] md:ml-[8px] ml-[9px] sm:mt-[3px] md:mt-[4px] mt-[5px] not-italic text-black_900 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    M
                  </Text>
                  <div className="bg-bluegray_100 sm:h-[20px] h-[25px] sm:ml-[49px] md:ml-[64px] ml-[65px] rounded-radius2 sm:w-[19px] md:w-[24px] w-[25px]"></div>
                  <Text
                    className="sm:ml-[5px] md:ml-[6px] ml-[7px] sm:mt-[4px] md:mt-[5px] mt-[6px] not-italic text-black_900 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    L
                  </Text>
                  <div className="bg-bluegray_100 sm:h-[20px] h-[25px] sm:ml-[49px] md:ml-[63px] ml-[64px] rounded-radius2 sm:w-[19px] md:w-[24px] w-[25px]"></div>
                  <Text
                    className="ml-[10px] sm:ml-[7px] md:ml-[9px] sm:mt-[4px] md:mt-[5px] mt-[6px] not-italic text-black_900 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    XL
                  </Text>
                  <div className="bg-bluegray_100 sm:h-[20px] h-[25px] sm:ml-[44px] md:ml-[57px] ml-[58px] rounded-radius2 sm:w-[19px] md:w-[24px] w-[25px]"></div>
                  <Text
                    className="sm:ml-[10px] md:ml-[13px] ml-[14px] sm:mt-[4px] md:mt-[5px] mt-[6px] not-italic text-black_900 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    XXL
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
              <div className="bg-white_A700 flex flex-col justify-start sm:p-[15px] md:p-[28px] p-[29px] rounded-radius10 w-[100%]">
                <Text
                  className="ml-[4px] not-italic text-black_900 w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  Which Varsity-Jacket would you like to gift yourself ?
                </Text>
                <Line className="bg-white_A700_7f h-[3px] ml-[4px] mt-[2px] sm:w-[100%] w-[95%]" />
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-end md:ml-[22px] ml-[23px] sm:mt-[16px] md:mt-[21px] mt-[22px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[33%]">
                  <div className="bg-bluegray_100 sm:h-[20px] h-[25px] rounded-radius2 sm:w-[19px] md:w-[24px] w-[25px]"></div>
                  <Text
                    className="sm:ml-[14px] md:ml-[18px] ml-[19px] sm:my-[3px] md:my-[4px] my-[5px] not-italic text-black_900 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    The minimalistic one
                  </Text>
                </div>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-end md:ml-[22px] ml-[23px] sm:mt-[16px] md:mt-[21px] mt-[22px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[33%]">
                  <div className="bg-bluegray_100 sm:h-[20px] h-[25px] rounded-radius2 sm:w-[19px] md:w-[24px] w-[25px]"></div>
                  <Text
                    className="sm:ml-[14px] md:ml-[18px] ml-[19px] sm:my-[3px] md:my-[4px] my-[5px] not-italic text-black_900 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    The minimalistic one
                  </Text>
                </div>
                <Text
                  className="ml-[4px] sm:mt-[23px] md:mt-[30px] mt-[31px] not-italic text-black_900 w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  Size:
                </Text>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:mb-[11px] mb-[12px] sm:mb-[9px] md:ml-[25px] ml-[26px] sm:mt-[21px] md:mt-[27px] mt-[28px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[91%]">
                  <div className="bg-bluegray_100 sm:h-[20px] h-[25px] rounded-radius2 sm:w-[19px] md:w-[24px] w-[25px]"></div>
                  <Text
                    className="sm:ml-[6px] md:ml-[7px] ml-[8px] sm:mt-[3px] md:mt-[4px] mt-[5px] not-italic text-black_900 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    XS
                  </Text>
                  <div className="bg-bluegray_100 sm:h-[20px] h-[25px] sm:ml-[40px] md:ml-[52px] ml-[53px] rounded-radius2 sm:w-[19px] md:w-[24px] w-[25px]"></div>
                  <Text
                    className="sm:ml-[6px] md:ml-[7px] ml-[8px] sm:mt-[4px] md:mt-[5px] mt-[6px] not-italic text-black_900 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    S
                  </Text>
                  <div className="bg-bluegray_100 sm:h-[20px] h-[25px] sm:ml-[51px] md:ml-[66px] ml-[67px] rounded-radius2 sm:w-[19px] md:w-[24px] w-[25px]"></div>
                  <Text
                    className="sm:ml-[6px] md:ml-[8px] ml-[9px] sm:mt-[5px] md:mt-[6px] mt-[7px] not-italic text-black_900 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    M
                  </Text>
                  <div className="bg-bluegray_100 sm:h-[20px] h-[25px] sm:ml-[49px] md:ml-[64px] ml-[65px] rounded-radius2 sm:w-[19px] md:w-[24px] w-[25px]"></div>
                  <Text
                    className="sm:ml-[5px] md:ml-[6px] ml-[7px] sm:mt-[5px] md:mt-[6px] mt-[7px] not-italic text-black_900 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    L
                  </Text>
                  <div className="bg-bluegray_100 sm:h-[20px] h-[25px] sm:ml-[49px] md:ml-[63px] ml-[64px] rounded-radius2 sm:w-[19px] md:w-[24px] w-[25px]"></div>
                  <Text
                    className="sm:ml-[6px] md:ml-[8px] ml-[9px] sm:mt-[5px] md:mt-[6px] mt-[7px] not-italic text-black_900 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    XL
                  </Text>
                  <div className="bg-bluegray_100 sm:h-[20px] h-[25px] sm:ml-[46px] md:ml-[59px] ml-[60px] rounded-radius2 sm:w-[19px] md:w-[24px] w-[25px]"></div>
                  <Text
                    className="sm:ml-[11px] md:ml-[14px] ml-[15px] sm:mt-[3px] md:mt-[4px] mt-[5px] not-italic text-black_900 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    XXL
                  </Text>
                </div>
              </div>
            </div>
          </List>
          <div className="bg-white_A700 flex flex-col justify-start sm:mt-[39px] md:mt-[51px] mt-[52px] sm:p-[15px] md:p-[20px] p-[21px] rounded-radius10 w-[100%]">
            <Text
              className="md:ml-[11px] ml-[12px] sm:ml-[9px] not-italic text-black_900 w-[auto]"
              as="h1"
              variant="h1"
            >
              Your feedback:
            </Text>
            <Line className="bg-black_900_7f h-[3px] sm:mb-[6px] md:mb-[7px] mb-[8px] sm:ml-[4px] md:ml-[5px] ml-[6px] sm:mr-[36px] md:mr-[46px] mr-[47px] sm:mt-[41px] md:mt-[53px] mt-[54px] sm:w-[100%] w-[93%]" />
          </div>
          <Stack className="h-[180px] sm:ml-[213px] md:ml-[276px] ml-[279px] sm:mt-[68px] md:mt-[88px] mt-[89px] relative w-[23%]">
            <div className="absolute bg-black_901 flex flex-col items-center justify-end sm:p-[15px] md:p-[16px] p-[17px] rounded-radius12 top-[0] w-[100%]">
              <Text
                className="mt-[2px] not-italic text-white_A700 w-[auto]"
                as="h1"
                variant="h1"
              >
                SUBMIT !
              </Text>
            </div>
            <Line className="absolute bg-white_A700 bottom-[0] sm:h-[100px] md:h-[129px] h-[130px] right-[46%] w-[3px]" />
          </Stack>
          <Button className="cursor-pointer font-normal min-w-[23%] sm:ml-[215px] md:ml-[278px] ml-[281px] sm:mt-[21px] md:mt-[27px] mt-[28px] not-italic sm:text-[19.8px] md:text-[21.8px] text-[23.8px] text-black_900 text-center w-[max-content]">
            SUBMITED !
          </Button>
        </div>
      </div>
    </>
  );
};

export default IPadPro11OnePage;
