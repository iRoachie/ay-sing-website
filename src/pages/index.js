import React from 'react'
import { withPrefix } from 'gatsby'

import phones from '../images/phones.png'

import '../index.css'
import '../main.css'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <main className="container flex flex-col items-center justify-center md:flex-row">
      <img
        src={phones}
        alt="AY Sing"
        className="hidden md:block md:w-48 lg:w-1/2"
      />

      <div className="md:ml-8">
        <section className="flex items-center flex-col md:flex-row md:justify-start md:mb-4">
          <img
            src={withPrefix('./logo.svg')}
            alt="AY Sing"
            className="w-16 md:mr-4"
          />

          <div className="my-6">
            <h1 className="text-white text-center md:text-left text-4xl md:text-5xl">
              AY Sing
            </h1>
            <h3 className="text-secondary">Advent Youth Sing</h3>
          </div>
        </section>

        <section className="text-center md:text-left">
          <a href="https://itunes.apple.com/app/id1200976617" className="mx-1">
            <img
              src={withPrefix('./app-store.svg')}
              alt="Download on App Store"
              className="w-24 md:w-32"
            />
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.aysing"
            className="mx-1"
          >
            <img
              src={withPrefix('./play-store.svg')}
              alt="Get it on Play Store"
              className="w-24 md:w-32"
            />
          </a>
        </section>

        <a
          className="flex items-center no-underline text-white my-4"
          href="https://twitter.com/roach_iam"
        >
          <img
            className="mr-3 w-6 md:w-8"
            src={withPrefix('./twitter-icon.svg')}
            alt="Twitter"
          />
          <span className="text-sm md:text-lg">@roach_iam</span>
        </a>

        <a
          className="flex items-center no-underline text-white my-4"
          href="mailto:kroach.apps@gmail.com"
        >
          <img
            className="mr-3 w-6 md:w-8"
            src={withPrefix('./mail-icon.svg')}
            alt="Email"
          />
          <span className="text-sm md:text-lg">kroach.apps@gmail.com</span>
        </a>
      </div>
    </main>
  </Layout>
)

export default IndexPage
