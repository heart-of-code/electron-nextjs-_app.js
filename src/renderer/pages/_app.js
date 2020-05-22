
import React from 'react'
import App from 'next/app'

export default class MyApp extends App {

    render() {
        return <div>
            <p>Test</p>
            <Component usedCustomApp={true} {...pageProps} />
        </div>
    }

}