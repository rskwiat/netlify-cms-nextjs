import Head from "next/head"
import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/privacy.md';
import Nav from '../src/components/nav';

export default class Home extends Component {
  render() {
    let { title, cats } = attributes;
    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <Nav />
        <article>
          <h1>{title}</h1>
          <HomeContent />
        </article>
      </>
    )
  }
}