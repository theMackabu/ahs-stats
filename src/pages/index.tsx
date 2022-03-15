// @ts-nocheck

import React, { useEffect, useState, Fragment } from "react";
import { useQuery } from "react-query";
import LoadingBar from "react-top-loading-bar";
import tw from "twin.macro";
import Link from "next/link";
import Head from "next/head";
import { useTheme } from "next-themes";
import { getVersion } from "app/api";
import Loading from "components/Loading";
import Spinner from "components/Spinner";
import Modal from "react-modal";
import Fade from "components/Fade";
import CopyOnClick from "components/CopyOnClick";
import { useAddToHomescreenPrompt } from "hooks/homePWA";

import useGoogleSheets from "use-google-sheets";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";

const Index: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const { theme, setTheme } = useTheme();
  const formatDateMonth = `${new Date().getMonth() + 1}/${new Date().getDate()}`;
  const loadTimeFake = Math.floor(Math.random() * 100);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [prompt, promptToInstall] = useAddToHomescreenPrompt();

  const customStyles = {
    content: {
      backdropFilter: "blur(3px)",
      overflowY: "auto",
    },
  };

  const {
    data: sheetData,
    loading: sheetLoading,
    error: sheetError,
  } = useGoogleSheets({
    apiKey: "AIzaSyBOcts7V-BUeKAMQfint5MM3N3wdPutIzE",
    sheetId: "1T8TSvK9_1aCEi6N68CjjQdzUuJ3Opvj6uxQs7Pte7vM",
  });

  const currentHomeWork = sheetData[0]?.data.filter((x) => x.Date === formatDateMonth)[0].Assignment;
  const currentHomeWorkNumber = sheetData[0]?.data.filter((x) => x.Date === formatDateMonth)[0]["HW #"];

  useEffect(() => {
    if (sheetLoading) {
      setProgress(20);
      setTimeout(function () {
        setProgress(100);
      }, 200);
    }
  }, []);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <div css={tw`relative dark:bg-gray-900 select-none transition duration-500`}>
      <Head>
        <title>Albany High: Stats HW ({new Date().getFullYear()})</title>
      </Head>
      <LoadingBar color="#1A56DB" progress={progress} onLoaderFinished={() => setProgress(0)} />
      <div css={tw`flex flex-col justify-center items-center w-screen h-screen transition duration-500`}>
        <h5 css={tw`mb-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-white transition`}>
          <span css={tw`text-2xl text-gray-700 dark:text-gray-400 mr-2 transition`}>AP</span>Stats Homework
        </h5>
        <div
          css={tw`p-6 pt-2 w-80 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 transition duration-500`}
        >
          <span css={tw`text-xs text-gray-700 dark:text-gray-400`}>Your Homework Today</span>
          <CopyOnClick text={sheetLoading ? "Loading..." : currentHomeWork}>
            <div
              css={tw`mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-4 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300 placeholder:text-xl mb-3 font-bold text-xl text-center cursor-pointer hover:ring-2 hover:ring-blue-500 hover:border-blue-500 hover:dark:ring-blue-600 hover:dark:border-blue-600 hover:text-gray-900 hover:dark:text-gray-100 transition duration-500`}
            >
              {sheetLoading ? <Spinner size="small" isBlue={theme !== "dark"} centered /> : currentHomeWork}
            </div>
          </CopyOnClick>
          <button
            onClick={() => setVisible(true)}
            css={[
              tw`text-center w-full block py-2 px-3 text-base font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 ring-0 dark:bg-blue-500 dark:hover:bg-blue-600 dark:ring-0 transition cursor-pointer transition duration-500 focus:ring-0 focus:dark:ring-0`,
              sheetLoading && tw`opacity-90 cursor-default pointer-events-none hover:duration-100`,
            ]}
          >
            View all assignments
          </button>
        </div>
        <span suppressHydrationWarning css={tw`font-normal text-gray-400 mt-2 text-xs transition duration-500`}>
          {sheetLoading ? "Loading..." : `${formatDateMonth}/${new Date().getFullYear()} (HW: ${currentHomeWorkNumber})`}
        </span>
      </div>
      <div tw="absolute top-5 right-5">
        <div
          suppressHydrationWarning
          css={tw`cursor-pointer rounded p-2 bg-gray-100 border border-gray-50 text-indigo-800 dark:bg-gray-800 dark:border-gray-700 dark:text-orange-300 shadow-sm text-sm transition duration-500`}
          aria-label="Toggle Dark Mode"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <SunIcon css={tw`w-5 h-5`} /> : <MoonIcon css={tw`w-5 h-5`} />}
        </div>
      </div>
      <div tw="absolute bottom-5 left-5 transition duration-500">
        <span suppressHydrationWarning css={tw`font-normal text-gray-400 mt-2 text-xs`}>
          0.1.5 ({loadTimeFake}ms) by Sajjaad Farzad
        </span>
      </div>
      <div tw="absolute top-5 left-5">
        <button
          onClick={promptToInstall}
          css={tw`cursor-pointer rounded py-1 px-2 bg-gray-100 border border-gray-50 text-gray-800 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 shadow-sm text-sm transition duration-500 font-medium hover:text-green-700 hover:dark:text-teal-300`}
        >
          Install?
        </button>
      </div>
      <Fade in={visible} timeout={150} appear unmountOnExit>
        <Modal
          ariaHideApp={false}
          css={[tw`absolute w-full h-full rounded flex items-center justify-center bg-gray-400 dark:bg-gray-900 bg-opacity-10 dark:bg-opacity-70`]}
          style={customStyles}
          isOpen={visible}
          onRequestClose={() => setVisible(false)}
        >
          <div>
            {sheetLoading ? (
              <Spinner size="small" isBlue={theme !== "dark"} centered />
            ) : (
              <React.Fragment>
                <div css={tw`flex flex-col rounded`}>
                  <div css={tw`overflow-x-auto sm:-mx-6 lg:-mx-8 max-h-96 rounded`}>
                    <div css={tw`inline-block min-w-full rounded`}>
                      <div css={tw`overflow-hidden sm:rounded-lg`}>
                        <table css={tw`min-w-full`}>
                          <thead css={tw`bg-gray-50 dark:bg-gray-700`}>
                            <tr>
                              <th css={tw`py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400`}>Day</th>
                              <th css={tw`py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400`}>
                                Date
                              </th>
                              <th css={tw`py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400`}>Hw</th>
                              <th css={tw`py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400`}>
                                Topic
                              </th>
                              <th css={tw`py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400`}>
                                Assignment
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {sheetData[0].data.map((attendence, index) => {
                              return (
                                <tr css={tw`bg-white border-b dark:bg-gray-800 dark:border-gray-700`}>
                                  <td css={tw`py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white`}>
                                    {sheetData[0].data[index]["Day "]}
                                  </td>
                                  <td css={tw`py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white`}>
                                    {sheetData[0].data[index].Date}
                                  </td>
                                  <td css={tw`py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white`}>
                                    {sheetData[0].data[index]["HW #"]}
                                  </td>
                                  <td css={tw`py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white`}>
                                    {sheetData[0].data[index].Topic}
                                  </td>
                                  <td css={tw`py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white`}>
                                    {sheetData[0].data[index].Assignment}
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            )}
          </div>
        </Modal>
      </Fade>
    </div>
  );
};

export default Index;
