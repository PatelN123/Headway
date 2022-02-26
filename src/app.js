import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';


if (ExecutionEnvironment.canUseDOM) {
    window.HW_config = {
        selector: ".navbar__logo", // CSS selector where to inject the badge
        account: "yBWwGx" // your account ID, you can find it in Settings->Widget
    };
  }