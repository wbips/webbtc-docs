const themeConfig = {
  project: {
    link: "https://github.com/wbips/webbtc-docs",
  },
  logo: (
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="130"
        height="29"
        viewBox="0 0 290 58"
      >
        <g fill="none" fill-rule="evenodd">
          <path
            stroke="#FFF"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="6"
            d="M25 52.9999999c12.1502645 0 22-9.8497355 22-22S37.1502645 8.99999991 25 8.99999991 3 18.8497354 3 30.9999999c0 12.1502645 9.8497355 22 22 22Zm0-43.99999999c5.5028168 6.02437639 8.6300561 13.84247449 8.8 21.99999999-.1699439 8.1575255-3.2971832 15.9756236-8.8 22-5.5028168-6.0243764-8.6300561-13.8424745-8.8-22 .1699439-8.1575255 3.2971832-15.9756236 8.8-21.99999999h0ZM3 30.9999999h44"
          />
          <path
            fill="#FFF"
            fill-rule="nonzero"
            d="M130.506863 12.8214653c10.177581 0 17.246512 6.7989737 17.400644 19.2722455l.002571.4178758v3.134913L120.786 35.645909l.009781.1607722c.402769 6.3087639 4.025095 10.0615228 9.69749 10.3108018l.305833.0099973.304343.0032629c4.013195 0 6.933078-1.7019533 8.227001-4.8524404l.104052-.2658882.145877-.3917071 7.983093 1.4386492-.143216.52653c-1.787582 6.5719897-8.006285 10.684701-16.39138 10.684701-11.448328 0-18.670957-7.8811838-18.670957-20.1127017 0-12.0765102 7.289885-20.3364207 18.148946-20.3364207Zm142.417613 0c8.796469 0 15.25268 5.1557784 16.219542 12.9445545l.037578.3306631.056912.5513401h-8.188937l-.087008-.3915347c-.820177-3.6907968-3.752371-6.1708902-7.913799-6.1708902-5.955747 0-9.840791 4.9597726-9.840791 12.8237112 0 8.0497437 3.84155 13.0722879 9.840791 13.0722879 3.958008 0 6.890416-2.2017359 7.849372-5.906802l.065128-.2671948.088917-.3884281h8.190277l-.061237.5548508c-.876992 7.9460746-7.181107 13.2965646-16.182172 13.2965646-11.1371 0-18.298092-8.1414527-18.298092-20.1872747 0-12.0449365 7.278673-20.2618477 18.223519-20.2618477ZM202.016896.5914916 202.016 18.922909c2.327727-3.8250063 5.095183-5.9049374 10.161531-6.0881828l.374839-.0100211.374197-.0032398c9.836488 0 16.533197 7.8990567 16.533197 20.162417 0 12.2944065-6.648039 20.2618477-16.458624 20.2618477-5.482657 0-8.609903-2.1997465-10.987491-6.1036077l-.171649-.2852133.000893 5.6430909h-8.25844V.5914916h8.432443Zm-40.799716 0L161.217 18.922909c2.327028-3.8250063 5.094468-5.9049374 10.160816-6.0881828l.374838-.0100211.374197-.0032398c9.836488 0 16.533197 7.8990567 16.533197 20.162417 0 12.2944065-6.648039 20.2618477-16.458624 20.2618477-5.482657 0-8.609903-2.1997465-10.987491-6.1036077l-.170933-.2852133.000177 5.6430909h-8.25844V.5914916h8.432443Zm83.563188 3.5795045L244.78 13.317909l7.830534.0007097v6.9658408L244.78 20.283909l.000368 20.5052817c0 3.2804424 1.16697 4.4715037 3.653005 4.5864528l.210226.0071098.210581.0022598c.504905 0 .979293-.0401978 1.464877-.1145489l.422227-.0725224 1.106513-.2226928 1.539973 7.0439526-.407128.1512189c-1.314432.4882175-2.950166.8052204-4.98589.8266206-6.617758.1402068-11.515913-3.8036622-11.644329-10.3528456l-.002498-.3138292L236.347 20.283909l-5.592051.0005505v-6.9658408l5.592051-.0007097.000925-9.1469129h8.432443ZM66.1034224 13.3186187 73.388 40.618909l7.3096445-27.3002903h8.4487276L96.405 40.492909l7.235725-27.1742903h8.733231l-11.5044289 39.1813812h-8.3346303L84.872 25.262909l-7.6625292 27.2370909h-8.309539L57.3699941 13.3186187h8.7334283ZM170.53596 20.1353135c-5.993264 0-9.467926 4.7977299-9.467926 12.7739958 0 8.0107413 3.562124 12.9977148 9.467926 12.9977148 6.001996 0 9.617072-5.1417347 9.617072-12.9977148 0-7.8058584-3.535647-12.7739958-9.617072-12.7739958Zm40.799716 0c-5.993264 0-9.467926 4.7977299-9.467926 12.7739958 0 8.0107413 3.562124 12.9977148 9.467926 12.9977148 6.001996 0 9.617072-5.1417347 9.617072-12.9977148 0-7.8058584-3.535647-12.7739958-9.617072-12.7739958Zm-80.779098-.1740037c-5.188611 0-9.041285 3.7363136-9.689014 8.7904157l-.037564.3261835h18.784l-.003093-.0883787c-.262194-5.2594909-3.725161-8.8941603-8.772312-9.0245915l-.282017-.003629Z"
          />
        </g>
      </svg>
      {/* Animation, MIT Copyright (c) 2020 Shu Ding, https://github.com/shuding/nextra */}
      <style jsx>{`
        span {
          padding: 0.5rem 0.5rem 0.5rem 0;
          mask-image: linear-gradient(
            60deg,
            black 25%,
            rgba(0, 0, 0, 0.2) 50%,
            black 75%
          );
          mask-size: 400%;
          mask-position: 0%;
        }
        span:hover {
          mask-position: 100%;
          transition: mask-position 1s ease, -webkit-mask-position 1s ease;
        }
      `}</style>
    </span>
  ),
};

export default themeConfig;
