import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Terms() {
  return (
    <>
      <Head>
        <title>trexco</title>
        <meta name="description" content="the easy way to ship" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container">
        <div className="content">
          <h1>Terms and conditions</h1>
          <p></p>

          <p>
            Please note that Trexco offers no guarantee to the charges
            applicable at the destination. Destination charges are outside of
            the control of Trexco and any figures quoted by Trexco are an
            indication only.
          </p>
          <ol>
            <h2> Definitions</h2>
          </ol>
          <p>
            1.1 - Box means a packed box, pallet, pallet box, shipping container
            or any other item which Trexco agrees in writing may be transported
            by Trexco in accordance with these Terms.
          </p>
          <p>
            1.2 - Collection Address means the address notified by the Customer
            to Trexco and which Trexco in its entire discretion agrees is where
            the Boxes are to be sent, positioned or collected from.
          </p>
          <p>
            1.3 - Contract means the contract between the Customer and Trexco
            for the Services.
          </p>
          <p>
            1.4 - Customer means the person who accepts Trexco quotation for
            the Services.
          </p>
          <p>
            1.5 - Delivery Address means the address or port or airport notified
            by the Customer to Trexco and which Trexco in its entire discretion
            agrees is where the Boxes are to be delivered to or such substituted
            address as Trexco shall in its entire discretion decide.
          </p>
          <p>
            1.6 - Force Majeure Event means any event beyond the reasonable
            control of Trexco including, without limitation, fire, flood, storm,
            tempest, inclement weather, acts of God, war, civil war or national
            emergency, protests, riot, civil commotion, acts of terrorism,
            malicious damage, compliance with law or governmental order, rule or
            regulation or direction, accident, fuel shortage, lock-out, strikes
            and other industrial disputes whether or not relating to Trexco
            workforce and restraints or delays affecting carriers.
          </p>

          <p>
            You can choose to accept or decline cookies. Most web browsers
            automatically accept cookies, but you can usually modify your
            browser setting to decline cookies if you prefer. This may prevent
            you from taking full advantage of the website.
          </p>
        </div>
      </section>
    </>
  );
}
