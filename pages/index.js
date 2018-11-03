import React from "react";
import Page from "../components/Page";

const email = "kroach.apps@gmail.com";

export default () => (
  <Page>
    <main className="container">
      <img src="static/images/phones.png" alt="AY Sing" className="phones" />

      <div className="content">
        <div className="row main-block">
          <img src="static/images/logo.svg" alt="AY Sing" className="main-logo" />
          <div className="title-block">
            <h1 className="title">AY Sing</h1>
            <h3 className="subtitle">Advent Youth Sing</h3>
          </div>
        </div>

        <div className="row app-store-block">
          <a href="https://itunes.apple.com/app/id1200976617" className="app-store">
            <img src="static/images/app-store.svg" alt="Download on App Store" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.aysing" className="app-store">
            <img src="static/images/play-store.svg" alt="Get it on Play Store" />
          </a>
        </div>

        <a className="contact" href="https://twitter.com/roach_iam">
          <img className="contact__image" src="static/images/twitter-icon.svg" alt="Twitter" />
          <span className="contact__text">@roach_iam</span>
        </a>

        <a className="contact" href={`mailto:${email}`}>
          <img className="contact__image" src="static/images/mail-icon.svg" alt="Email" />
          <span className="contact__text">{email}</span>
        </a>
      </div>
    </main>
  </Page>
);
