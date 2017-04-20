import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import "../utils/tap_events";

export default function initializePage(UI) {
  return class PageComponent extends Component {
    static async getInitialProps(ctx) {
      const { req } = ctx;
      const isServer = !!req;
      const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;

      let pageProps = {};

      if (UI.getInitialProps) {
        pageProps = await UI.getInitialProps(ctx);
      }

      return {
        ...pageProps,
        isServer,
        userAgent
      };
    }

    constructor(props) {
      super(props);
    }

    render() {
      return (
        <MuiThemeProvider
          muiTheme={getMuiTheme({ userAgent: this.props.userAgent })}
        >
          <UI {...this.props} />
        </MuiThemeProvider>
      );
    }
  };
}
