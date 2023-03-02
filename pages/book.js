import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Book() {
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
          <h1>Book now</h1>
          <p>
            trexco is a practical and affordable shipping solution to all over
            the world, sending from the UK and Spain to the US, Canada, Mexico,
            Europe, Asia, Africa and South America.
          </p>
          <button className="button">
            <Link href="https://trexco.involve.me/trexco-personalized-quote">
              Book now
            </Link>
          </button>
        </div>
        <div className="image">
          <Image
            src="/images/box-and-cat-round.png"
            alt="loading"
            width={600}
            height={337.5}
          />
        </div>
      </section>

      <section className="container-2">
        <div className="content-2">
          <p>
            Trexco have simplified shipping by using an easy, convenient way to
            pack, store, and move your cargo - all at the same time!
          </p>
        </div>
      </section>

      <section className="column-3">
        <div className="column">
          <Image
            src="/images/man-compu-cat-round.webp"
            alt="loading"
            width={200}
            height={200}
          />
          <h2>Place an order</h2>
          <p>
            Pick the trexco pallet boxes you need for your shipment and book the
            delivery and collection date.
          </p>
        </div>
        <div className="column">
          <Image
            src="/images/box-and-cat-round.webp"
            alt="loading"
            width={200}
            height={200}
          />
          <h2>Start packing</h2>
          <p>
            Pack your shipment on the Trexx pallet boxes, start packing the
            heavy stuff first and fragile on the top, seal and label the box.
          </p>
        </div>
        <div className="column">
          <Image
            src="/images/man-and-truck-round.webp"
            alt="loading"
            width={200}
            height={200}
          />
          <h2>Arrange collection</h2>
          <p>
            Choose the collection date a driver will load your Trexx-Box with a
            pallet truck and it will get shipped to your destination.
          </p>
        </div>
      </section>

      <section className="container">
        <div className="content">
          <h1>shipping with confidence</h1>
          <p>
            We have secured competitive shipping rates to many destinations
            around the world, from air, road or sea shipment. We have over 17
            years of experience as freight forwarders.
          </p>
        </div>
      </section>
    </>
  );
}
