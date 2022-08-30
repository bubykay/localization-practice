import React from "react";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import WeeklyBasket from "./components/WeeklyBasket";
import { IntlProvider } from "react-intl";
import "./App.css";

const messages = {
  app_name: "Φρουτοκάλαθος",
  weekly_basket_link: "Εβδομαδιαίο καλάθι",
};
const lang = "en";

interface AppProps {}
const App: React.FC<AppProps> = () => {
  return (
    <IntlProvider
      messages={messages}
      key={lang}
      locale={lang}
      defaultLocale="en"
    >
      <Navbar />
      <main role="main" className="pt-5 px-3">
        <Header />
        <WeeklyBasket />
      </main>
    </IntlProvider>
  );
};
export default App;
