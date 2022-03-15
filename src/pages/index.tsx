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
import { SunIcon, MoonIcon, BookOpenIcon } from "@heroicons/react/solid";

const Index: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const { theme, setTheme } = useTheme();
  const loadTimeFake = Math.floor(Math.random() * 100);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [prompt, promptToInstall] = useAddToHomescreenPrompt();
  const formatDateMonth = `${new Date().getMonth() + 1}/${new Date().getDate()}`;

  const customStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0)",
      backdropFilter: "blur(4px)",
      overflowY: "auto",
    },
  };

  const {
    data: sheetData,
    loading: sheetLoading,
    error: sheetError,
  } = useGoogleSheets({
    apiKey: "AIzaSyBOcts7V-BUeKAMQfint5MM3N3wdPutIzE",
    sheetId: "1xdJRXmFCPD1yVg72kVqyvbFhBPUKZz-eZiYKpSPrhKQ",
    //sheetId: "1T8TSvK9_1aCEi6N68CjjQdzUuJ3Opvj6uxQs7Pte7vM",
  });

  function _0x3505() {
    var _0x12dc63 = [
        'data',
        '14rMvnnP',
        'Date',
        '4388136PfmkwY',
        '253PiyNOg',
        '125192hHdXoM',
        '3359484ceGFCc',
        'getMonth',
        'Assignment',
        '4814838WVJRcd',
        '13vkOUwP',
        'HW\x20#',
        'getDate',
        '5ZUrazU',
        'filter',
        '3348308iwgWgK',
        '1311230HRYezZ',
        '990112FCqnUP'
    ];
    _0x3505 = function () {
        return _0x12dc63;
    };
    return _0x3505();
}
var _0x15250a = _0x5968;
(function (_0x399d87, _0x92557a) {
    var _0x42b1df = _0x5968, _0x310822 = _0x399d87();
    while (!![]) {
        try {
            var _0x6f31f1 = -parseInt(_0x42b1df(0x1b4)) / 0x1 * (parseInt(_0x42b1df(0x1af)) / 0x2) + -parseInt(_0x42b1df(0x1b0)) / 0x3 + parseInt(_0x42b1df(0x1b9)) / 0x4 * (-parseInt(_0x42b1df(0x1b7)) / 0x5) + parseInt(_0x42b1df(0x1ad)) / 0x6 + parseInt(_0x42b1df(0x1bd)) / 0x7 * (parseInt(_0x42b1df(0x1bb)) / 0x8) + -parseInt(_0x42b1df(0x1b3)) / 0x9 + -parseInt(_0x42b1df(0x1ba)) / 0xa * (-parseInt(_0x42b1df(0x1ae)) / 0xb);
            if (_0x6f31f1 === _0x92557a)
                break;
            else
                _0x310822['push'](_0x310822['shift']());
        } catch (_0x46e124) {
            _0x310822['push'](_0x310822['shift']());
        }
    }
}(_0x3505, 0xa83b6));
function _0x5968(_0x3c8012, _0x135ae7) {
    var _0x350503 = _0x3505();
    return _0x5968 = function (_0x59683e, _0x3e39c0) {
        _0x59683e = _0x59683e - 0x1ac;
        var _0x30aec7 = _0x350503[_0x59683e];
        return _0x30aec7;
    }, _0x5968(_0x3c8012, _0x135ae7);
}
if (sheetData[0x0]?.[_0x15250a(0x1bc)][_0x15250a(0x1b8)](_0x548123 => _0x548123[_0x15250a(0x1ac)] === formatDateMonth && _0x548123[_0x15250a(0x1b2)] !== undefined)[0x0])
    var currentHomeWork = sheetData[0x0]?.['data']['filter'](_0x58b9f4 => _0x58b9f4[_0x15250a(0x1ac)] === formatDateMonth)[0x0][_0x15250a(0x1b2)], currentHomeWorkNumber = sheetData[0x0]?.['data'][_0x15250a(0x1b8)](_0xb18d2 => _0xb18d2[_0x15250a(0x1ac)] === formatDateMonth)[0x0][_0x15250a(0x1b5)];
else {
    if (sheetData[0x0]?.[_0x15250a(0x1bc)][_0x15250a(0x1b8)](_0x134019 => _0x134019[_0x15250a(0x1ac)] === new Date()['getMonth']() + 0x1 + '/' + (new Date()[_0x15250a(0x1b6)]() - 0x2) && _0x134019['Assignment'] !== undefined)[0x0])
        var currentHomeWork = sheetData[0x0]?.[_0x15250a(0x1bc)][_0x15250a(0x1b8)](_0x286efa => _0x286efa[_0x15250a(0x1ac)] === new Date()[_0x15250a(0x1b1)]() + 0x1 + '/' + (new Date()['getDate']() - 0x2))[0x0][_0x15250a(0x1b2)], currentHomeWorkNumber = sheetData[0x0]?.['data'][_0x15250a(0x1b8)](_0x1fc16b => _0x1fc16b['Date'] === new Date()[_0x15250a(0x1b1)]() + 0x1 + '/' + (new Date()[_0x15250a(0x1b6)]() - 0x2))[0x0][_0x15250a(0x1b5)];
    else {
        if (sheetData[0x0]?.[_0x15250a(0x1bc)][_0x15250a(0x1b8)](_0x706414 => _0x706414[_0x15250a(0x1ac)] === new Date()[_0x15250a(0x1b1)]() + 0x1 + '/' + (new Date()[_0x15250a(0x1b6)]() - 0x1))[0x0]?.[_0x15250a(0x1b2)] === undefined)
            var currentHomeWork = sheetData[0x0]?.[_0x15250a(0x1bc)][sheetData[0x0]?.['data']['length'] - 0x1]['Assignment'], currentHomeWorkNumber = sheetData[0x0]?.[_0x15250a(0x1bc)][sheetData[0x0]?.[_0x15250a(0x1bc)]['length'] - 0x1][_0x15250a(0x1b5)];
        else
            var currentHomeWork = sheetData[0x0]?.[_0x15250a(0x1bc)]['filter'](_0x31977f => _0x31977f[_0x15250a(0x1ac)] === new Date()[_0x15250a(0x1b1)]() + 0x1 + '/' + (new Date()['getDate']() - 0x1))[0x0][_0x15250a(0x1b2)], currentHomeWorkNumber = sheetData[0x0]?.[_0x15250a(0x1bc)][_0x15250a(0x1b8)](_0x343962 => _0x343962[_0x15250a(0x1ac)] === new Date()['getMonth']() + 0x1 + '/' + (new Date()[_0x15250a(0x1b6)]() - 0x1))[0x0][_0x15250a(0x1b5)];
    }
}

  useEffect(() => {
    if (sheetLoading) {
      setProgress(20);
      setTimeout(function () {
        setProgress(100);
      }, 200);
    }
  }, []);

  Modal.setAppElement("#__next");

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <div css={tw`relative dark:bg-gray-900 select-none transition duration-500`}>
      <Head>
        <title>Albany High: PRE-CALC HW ({new Date().getFullYear()})</title>
      </Head>
      <LoadingBar color="#1A56DB" progress={progress} onLoaderFinished={() => setProgress(0)} />
      <div css={tw`flex flex-col justify-center items-center w-screen h-screen transition duration-500`}>
        <h5 css={tw`mb-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-white transition`}>
          <span css={tw`text-2xl text-gray-700 dark:text-gray-400 mr-2 transition`}>Pre Calc</span>Homework
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
          <div css={tw`flex`}>
            <button
              onClick={() => setVisible(true)}
              css={[
                tw`text-center w-full block py-2 px-3 text-base font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 ring-0 dark:bg-blue-500 dark:hover:bg-blue-600 dark:ring-0 transition cursor-pointer transition duration-500 focus:ring-0 focus:dark:ring-0 outline-none`,
                sheetLoading && tw`opacity-90 cursor-default pointer-events-none hover:duration-100`,
              ]}
            >
              View all assignments
            </button>
            <a
              href="https://drive.google.com/file/d/1lc6pKLgvfdsMBzKLpGipk5a4J8RUy9bM/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              css={[
                tw`ml-1.5 text-center block py-2 px-3 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 ring-0 dark:bg-teal-500 dark:hover:bg-teal-600 dark:ring-0 transition cursor-pointer transition duration-500 focus:ring-0 focus:dark:ring-0 outline-none`,
              ]}
            >
              <BookOpenIcon css={tw`w-6 h-6`} />
            </a>
          </div>
        </div>
        <span suppressHydrationWarning css={tw`font-normal text-gray-400 mt-2 text-xs transition duration-500`}>
          {sheetLoading ? "Loading..." : `${formatDateMonth}/${new Date().getFullYear()} (HW: ${currentHomeWorkNumber})`}
        </span>
      </div>
      <div tw="absolute top-5 right-5">
        <div
          suppressHydrationWarning
          css={tw`cursor-pointer rounded p-2 bg-gray-100 border border-gray-50 text-indigo-800 dark:bg-gray-800 dark:border-gray-700 dark:text-yellow-300 shadow-sm text-sm transition duration-500 hover:text-teal-800 hover:dark:text-orange-300`}
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
      <div onClick={() => setVisible(false)}>
        <Modal
          css={[tw`md:h-full md:flex md:items-center md:justify-center ring-0 outline-none`]}
          style={customStyles}
          isOpen={visible}
          backdrop="static"
          onRequestClose={(e) => {
            e.stopPropagation();
            setVisible(false);
          }}
        >
          <div>
            {sheetLoading ? (
              <Spinner size="small" isBlue={theme !== "dark"} centered />
            ) : (
              <React.Fragment>
                <Fade in={visible} timeout={100} appear unmountOnExit>
                  <div css={tw`flex flex-col rounded`}>
                    <div css={[`max-height: 100vh`, tw`overflow-x-auto sm:-mx-6 lg:-mx-8 md:max-h-96 rounded`]}>
                      <div css={tw`inline-block min-w-full rounded`}>
                        <div css={tw`overflow-hidden sm:rounded-lg`}>
                          <table css={tw`min-w-full`}>
                            <thead css={tw`bg-gray-50 dark:bg-gray-700`}>
                              <tr>
                                <th css={tw`py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400`}>
                                  Day
                                </th>
                                <th css={tw`py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400`}>
                                  Date
                                </th>
                                <th css={tw`py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400`}>
                                  Hw
                                </th>
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
                                    <td css={tw`py-4 px-6 text-sm font-bold text-gray-900 whitespace-nowrap dark:text-white`}>
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
                </Fade>
              </React.Fragment>
            )}
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Index;
