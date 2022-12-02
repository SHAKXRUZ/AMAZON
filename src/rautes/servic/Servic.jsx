import './Servic.css';
import { useState } from 'react';
import card_img1 from '../../assets/images/card_img1.png';
import card_img2 from '../../assets/images/card_img2.png';
import card_img3 from '../../assets/images/card_img3.png';
import card_img4 from '../../assets/images/card_img4.png';
import card_img5 from '../../assets/images/card_img5.png';
import card_img6 from '../../assets/images/card_img6.png';
import card_img7 from '../../assets/images/card_img7.png';
import card_img8 from '../../assets/images/card_img8.png';
import card_img9 from '../../assets/images/card_img9.png';
import { MdOutlineSearch } from 'react-icons/md';
import { SlArrowRight } from 'react-icons/sl';
function Servic() {
  const form = () => {
    const formSearch = document.querySelector(".form-search");
    formSearch.style.boxShadow = '0px 0px 2px blue';
  }
  const [index, setIndex] = useState(0);
  return (
    <div className='container'>
      <div className='service__header'>
        <p className='service__header-title'>Customer Service</p>
        <p className='service__header-line-ver'></p>
        <p className='service__header-title home-border'>Home</p>
        <p className='service__header-title'>Digital Services and Device Support</p>
      </div>
      <section className='service__section'>
        <div className='service__banner'>
          <h1 className='service__banner-title'>Welcome to Amazon Customer Service</h1>
          <h3 className='service__banner-text'>What would you like help with today? You can quickly take care of most things here, or connect with us when needed.</h3>
          <div className='service__banner-card-container'>
            <div className='banner-card'>
              <img className='card-images' src={card_img1} alt="card-img" />
              <p className='banner__card-title'>A delivery, order or return</p>
            </div>
            <div className='banner-card'>
              <img className='card-images' src={card_img2} alt="card-img" />
              <p className='banner__card-title'>Prime</p>
            </div>
            <div className='banner-card'>
              <img className='card-images' src={card_img3} alt="card-img" />
              <p className='banner__card-title'>Payment, charges or gift cards</p>
            </div>
            <div className='banner-card'>
              <img className='card-images' src={card_img4} alt="card-img" />
              <p className='banner__card-title'>Login, address, security & privacy</p>
            </div>
            <div className='banner-card'>
              <img className='card-images' src={card_img5} alt="card-img" />
              <p className='banner__card-title'>Memberships, subscriptions or communications</p>
            </div>
            <div className='banner-card'>
              <img className='card-images' src={card_img6} alt="card-img" />
              <p className='banner__card-title'>Kindle, Fire or Alexa device</p>
            </div>
            <div className='banner-card'>
              <img className='card-images' src={card_img7} alt="card-img" />
              <p className='banner__card-title'>eBooks, Prime Videos or Music</p>
            </div>
            <div className='banner-card'>
              <img className='card-images' src={card_img8} alt="card-img" />
              <p className='banner__card-title'>Accessibility</p>
            </div>
            <div className='banner-card'>
              <img className='card-images' src={card_img9} alt="card-img" />
              <p className='banner__card-title'>Something else</p>
            </div>
          </div>
        </div>
      </section>
      <section className='help__section'>
        <div className="book__search-section">
          <h1 className='book__search-title'>Search our help library</h1>
          <form onClick={form} className='form-search'>
            <button className='search-btn' type="submit">
              <MdOutlineSearch />
            </button>
            <input className='search-input' minLength={3} required type="text" placeholder='Type something like, "question about a charge"' />
          </form>
        </div>
        <div className="tabs__section">
          <h1 className='tabs__section-title'>All help topics</h1>
          <div className='tabs__div-group'>
            <div className='tabs__card-group'>
              <p className={`tabs-card ${index === 0 ? 'active' : null}`} onClick={() => { setIndex(0) }}>Recommended Topics</p>
              <p className={`tabs-card ${index === 1 ? 'active' : null}`} onClick={() => { setIndex(1) }}>Where's my stuff</p>
              <p className={`tabs-card ${index === 2 ? 'active' : null}`} onClick={() => { setIndex(2) }}>Shipping and Delivery</p>
              <p className={`tabs-card ${index === 3 ? 'active' : null}`} onClick={() => { setIndex(3) }}>Returns and Refunds</p>
              <p className={`tabs-card ${index === 4 ? 'active' : null}`} onClick={() => { setIndex(4) }}>Managing Your Account</p>
              <p className={`tabs-card ${index === 5 ? 'active' : null}`} onClick={() => { setIndex(5) }}>Security & Privacy</p>
              <p className={`tabs-card ${index === 6 ? 'active' : null}`} onClick={() => { setIndex(6) }}>Payment, Pricing and <br /> Promotions</p>
              <p className={`tabs-card ${index === 7 ? 'active' : null}`} onClick={() => { setIndex(7) }}>Devices & Digital Solutions</p>
              <p className={`tabs-card ${index === 8 ? 'active' : null}`} onClick={() => { setIndex(8) }}>Amazon Business Accounts</p>
              <p className={`tabs-card ${index === 9 ? 'active' : null}`} onClick={() => { setIndex(9) }}>Large Items and Heavy- <br /> Bulky Services</p>
              <p className={`tabs-card ${index === 10 ? 'active' : null}`} onClick={() => { setIndex(10) }}>Other topics & Help sites</p>
            </div>
            <div className='tabs__content-group'>
              <div className="tabs-content" hidden={index !== 0}>
                <div className='card-content-group'>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Find a missing package that shows as "Delivered"</p>
                    <p className='tabs__content-card-text'>Most packages arrive on time, but, sometimes, the tracking may show as "delivered" and you don't have your package.</p>
                  </div>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Late Deliveries</p>
                    <p className='tabs__content-card-text'>Most packages arrive on time. Orders sometimes show up after the estimated delivery date.</p>
                  </div>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Track your package</p>
                    <p className='tabs__content-card-text'>You can find tracking information in your order details. If an order includes multiple items, each may have separate delivery dates and tracking</p>
                  </div>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Check status of a refund</p>
                    <p className='tabs__content-card-text'>You can check the status of your refund in Your Orders .</p>
                  </div>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Find a missing item from your package</p>
                    <p className='tabs__content-card-text'>If an item is missing from your package, it may have been shipped separately.</p>
                  </div>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Replace an item</p>
                    <p className='tabs__content-card-text'>If you received a damaged, defective, or incorrect item sold by Amazon, you can request a replacement for a small number of eligible items through Your...</p>
                  </div>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Cancel Items or Orders</p>
                    <p className='tabs__content-card-text'>You can cancel items or orders that haven't entered the shipping process yet.</p>
                  </div>
                </div>
              </div>
              <div className="tabs-content" hidden={index !== 1}>
                <div className='card-content-group'>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Track your package</p>
                    <p className='tabs__content-card-text'>You can find tracking information in your order details. If an order includes multiple items, each may have separate delivery dates and tracking</p>
                  </div>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Find a missing package that shows as "Delivered"</p>
                    <p className='tabs__content-card-text'>Most packages arrive on time, but, sometimes, the tracking may show as "delivered" and you don't have your package.</p>
                  </div>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Undeliverable Packages</p>
                    <p className='tabs__content-card-text'>Occasionally, packages are returned to us as undeliverable.</p>
                  </div>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Find a missing item from your package</p>
                    <p className='tabs__content-card-text'>If an item is missing from your package, it may have been shipped separately.</p>
                  </div>
                  <div className="tabs__content-card tab-card-mini">
                    <p className='tabs__content-card-title tab'>More in Where's my Stuff</p>
                  </div>
                </div>
              </div>
              <div className="tabs-content" hidden={index !== 2}>
                <div className='card-content-group'>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Carrier Contact Information</p>
                    <p className='tabs__content-card-text'>We work with the following carriers to deliver items. If you have an issue with your delivery, you can contact the carriers directly.</p>
                  </div>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Delivery Guarantees</p>
                    <p className='tabs__content-card-text'>We offer guaranteed delivery on certain delivery speeds and select products. When guaranteed delivery is available on an order, we'll state this on the...</p>
                  </div>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Large Items and Heavy-Bulky Services</p>
                  </div>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Guaranteed Delivery Terms and Conditions</p>
                    <p className='tabs__content-card-text'>If we provide a guaranteed delivery date on the checkout page, your shipping fees may be refunded if we miss our promised delivery date.</p>
                  </div>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Collection Points</p>
                  </div>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Amazon Prime benefits</p>
                  </div>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Amazon Prime Terms & Conditions</p>
                  </div>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>End Your Amazon Prime Membership</p>
                    <p className='tabs__content-card-text'>You can end your Prime membership by selecting the End Membership button on this page.</p>
                  </div>
                  <div className='tabs__footer-two-card'>
                    <div className="tabs__content-card">
                      <p className='tabs__content-card-title'>The Amazon Prime Membership Fee</p>
                      <p className='tabs__content-card-text'>When your free trial or membership period ends, we'll automatically charge for the next membership period.</p>
                    </div>
                    <div className="tabs__content-card tab-card-mini">
                      <p className='tabs__content-card-title'>More information on Shipping and Delivery</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tabs-content" hidden={index !== 3}>
                <div className='card-content-group'>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>About Our Returns Policies</p>
                    <p className='tabs__content-card-text'>Amazon.com and most sellers on Amazon.com offer returns for items within 30 days of receipt of shipment.</p>
                  </div>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Return Items You Ordered</p>
                    <p className='tabs__content-card-text'>You can return many eligible items sold on Amazon. When you return an item, you may see different return options depending on the seller, item, or reason...</p>
                  </div>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Return a Gift</p>
                    <p className='tabs__content-card-text'>The Returns Center allows gift recipients to return items marked as a gift at the time of purchase.</p>
                  </div>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Return Costs</p>
                    <p className='tabs__content-card-text'>Your return shipment is free of charge in some cases. If you return an item using the return label provided in the Returns Center and the reason for return...</p>
                  </div>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Track Your Return</p>
                    <p className='tabs__content-card-text'>You can stay on top of your returns by tracking them in Your Orders.</p>
                  </div>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Refunds</p>
                    <p className='tabs__content-card-text'>When you return an item, your refund amount and refund method may vary. Check the payment method that was refunded and the status of your refund...</p>
                  </div>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Check the Status of Your Refund</p>
                    <p className='tabs__content-card-text'>You can check the status of your refund in Your Orders.</p>
                  </div>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Exchanges and Replacements</p>
                    <p className='tabs__content-card-text'>A small number of eligible items can be exchanged or replaced through Your Orders if your exchange or replacement meets certain criteria, including stock...</p>
                  </div>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Exchange an Item</p>
                    <p className='tabs__content-card-text'>You can exchange items that qualify through Your Orders.</p>
                  </div>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Replace an Item</p>
                    <p className='tabs__content-card-text'>If you received a damaged, defective, or incorrect item sold by Amazon, you can request a replacement for a small number of eligible items through Your...</p>
                  </div>
                  <div className="tabs__content-card tab-card-mini">
                    <p className='tabs__content-card-title tab'>More in Returns and Refunds</p>
                  </div>
                </div>
              </div>
              <div className="tabs-content" hidden={index !== 4}>
                <div className='card-content-group'>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Cancel Items or Orders</p>
                    <p className='tabs__content-card-text'>You can cancel items or orders that haven't entered the shipping process yet.</p>
                  </div>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Unknown Charges</p>
                    <p className='tabs__content-card-text'>There are several reasons why you might not recognize a charge.</p>
                  </div>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>View Your Gift Card Balance</p>
                    <p className='tabs__content-card-text'>You can view your Amazon.com Gift Card balance in Your Account.</p>
                  </div>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Request the Closure of Your Account and the Deletion of...</p>
                    <p className='tabs__content-card-text'>You can submit a request for us to permanently close your Amazon account and delete your personal information.</p>
                  </div>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Use Login with Amazon</p>
                    <p className='tabs__content-card-text'>Login with Amazon lets you use your Amazon user name and password to sign in to and share information with participating third-party websites or apps.</p>
                  </div>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Change Your Order Information</p>
                    <p className='tabs__content-card-text'>You can update the shipping address, payment method, and more, on orders that haven't entered the shipping process by visiting Your Orders in Your...</p>
                  </div>
                  <div className="tabs__content-card tab-card-mini">
                    <p className='tabs__content-card-title tab'>More in Managing Your Account</p>
                  </div>
                </div>
              </div>
              <div className="tabs-content" hidden={index !== 5}>
                <div className='card-content-group'>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Amazon.com Privacy Notice</p>
                  </div>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Conditions of Use</p>
                  </div>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Unknown Charges</p>
                    <p className='tabs__content-card-text'>There are several reasons why you might not recognize a charge.</p>
                  </div>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Identifying Whether an Email, Phone Call, Text Message, ...</p>
                    <p className='tabs__content-card-text'>Here are some tips to determine if an email, phone call, text message, or webpage is not from Amazon.com.</p>
                  </div>
                  <div className='tabs__footer-two-card'>
                    <div className="tabs__content-card">
                      <p className='tabs__content-card-title'>Report Something Suspicious</p>
                      <p className='tabs__content-card-text'>We take fraud, scam,phishing and spoofing attempts seriously. If you receive correspondence you think may not be from Amazon, please report it...</p>
                    </div>
                    <div className="tabs__content-card tab-card-mini">
                      <p className='tabs__content-card-title tab'>More in Managing Your Account</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tabs-content" hidden={index !== 6}>
                <div className='card-content-group'>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Payment Issues and Restrictions</p>
                  </div>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Strike-through Pricing & Savings</p>
                    <p className='tabs__content-card-text'>Items on Amazon may display a List Price, Was Price, or other strike-through pricing or saving information on the product detail page.</p>
                  </div>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Unknown Charges</p>
                    <p className='tabs__content-card-text'>There are several reasons why you might not recognize a charge.</p>
                  </div>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>About US State Sales and Use Taxes</p>
                    <p className='tabs__content-card-text'>Items sold on Amazon Marketplaces and shipped to locations both inside and outside the US, including territories, may be subject to tax.</p>
                  </div>
                  <div className='tabs__footer-two-card'>
                    <div className="tabs__content-card">
                      <p className='tabs__content-card-title'>Amazon Credit Cards</p>
                    </div>
                    <div className="tabs__content-card tab-card-mini">
                      <p className='tabs__content-card-title tab'>More in Payments, Pricing and Promotions</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tabs-content" hidden={index !== 7}>
                <div className='card-content-group'>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Get Kindle Book Order Refund</p>
                    <p className='tabs__content-card-text'>Cancel an accidental book order within seven days. Approved refunds are credited to the original payment source within three to five days.</p>
                  </div>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Cancel Kindle Unlimited Subscription</p>
                    <p className='tabs__content-card-text'>Follow these steps to cancel your Kindle Unlimited membership.</p>
                  </div>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Cancel Your Prime Video Channel Subscription</p>
                    <p className='tabs__content-card-text'>Cancel your Prime Video Channel subscriptions online.</p>
                  </div>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Cancel Prime Video Accidental Purchase</p>
                    <p className='tabs__content-card-text'>You are able to return a Prime Video order within 48 hours if you haven't attempted to watch or download it.</p>
                  </div>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Cancel Music Unlimited Subscription</p>
                    <p className='tabs__content-card-text'>Cancel your subscription online.</p>
                  </div>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Issues While Playing Prime Video Titles</p>
                    <p className='tabs__content-card-text'> What to do when Prime Video titles won't play or if you see error codes such as 1007, 1022, 7003, 7005, 7031, 7135, 7202, 7203, 7204, 7206, 7207, 7230,...</p>
                  </div>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Install Prime Video on Your Devices</p>
                    <p className='tabs__content-card-text'>Using the Prime Video app you will be able to watch Prime Video.</p>
                  </div>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Parental Controls on Prime Video</p>
                  </div>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Set Up a Prime Video PIN</p>
                  </div>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Can't Screen Mirror on Fire TV Devices</p>
                    <p className='tabs__content-card-text'>To resolve most issues with screen mirroring, make sure that your device and Fire TV are compatible.</p>
                  </div>
                  <div className='tabs__footer-two-card'>
                    <div className="tabs__content-card">
                      <p className='tabs__content-card-title'>Manage Your Content & Devices</p>
                    </div>
                    <div className="tabs__content-card tab-card-mini">
                      <p className='tabs__content-card-title tab'>Ask the Digital & Device Cammunity</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tabs-content" hidden={index !== 8}>
                <div className='card-content-group'>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'> Amazon Business Help</p>
                  </div>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Using Amazon Prime with Your Business Account</p>
                    <p className='tabs__content-card-text'>Business Prime is an annual membership program that provides business-specific features and benefits. These include unlimited fast delivery on eligibl...</p>
                  </div>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Tax Exemption</p>
                    <p className='tabs__content-card-text'>The Amazon Tax Exemption Program (ATEP) allows Amazon Business customers to apply your tax exemption status to eligible purchases from...</p>
                  </div>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Manage Your Business Account</p>
                    <p className='tabs__content-card-text'>Amazon Business provides purchasing solutions that allow registered businesses and their employees to shop for business supplies on Amazon. You...</p>
                  </div>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Order Restrictions</p>
                    <p className='tabs__content-card-text'>Some orders may face restrictions</p>
                  </div>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Terms & Conditions</p>
                    <p className='tabs__content-card-text'>These Amazon Business Accounts Terms & Conditions are between Amazon.com Services LLC and the entity registering for a Business Account.</p>
                  </div>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Trademark Guidelines</p>
                    <p className='tabs__content-card-text'>These Guidelines apply to your use of trademarks owned by Amazon.com, Inc. or its affiliates (“Amazon”). You may only use the specific trademarks identifie...</p>
                  </div>
                </div>
              </div>
              <div className="tabs-content" hidden={index !== 9}>
                <div className='card-content-group'>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Buying Large and Bulky Items on Amazon</p>
                    <p className='tabs__content-card-text'>Customize your delivery experience by setting your delivery preferences and selecting a preferred delivery date.</p>
                  </div>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Special Delivery Options for Large and Bulky Items</p>
                    <p className='tabs__content-card-text'>Special delivery options availability is based on item and zip code eligibility.</p>
                  </div>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Scheduled Delivery</p>
                    <p className='tabs__content-card-text'>If your order and delivery address are eligible for Scheduled Delivery for Large Items, the option to select this delivery method will be available during...</p>
                  </div>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Ordering a Large Item from a Third-Party Seller</p>
                    <p className='tabs__content-card-text'>When you order a large item from a third-party seller on Amazon.com, diverse delivery options may be available at checkout.</p>
                  </div>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Prepare for Your Service Appointment or Large Item</p>
                    <p className='tabs__content-card-text'>Before your large item delivery, installation or assembly service appointment, there are a few things you can do.</p>
                  </div>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Buy Online, Pick Up in Store</p>
                    <p className='tabs__content-card-text'>If your order and delivery address are eligible for Store Pickup, the option to select this delivery method will be available during checkout.</p>
                  </div>
                  <div className="tabs__content-card tab-card-mini min-max">
                    <p className='tabs__content-card-title tab'>More in Large Items and Heavy Bulky Services</p>
                  </div>
                </div>
              </div>
              <div className="tabs-content" hidden={index !== 10}>
                <div className='card-content-group'>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Gifts, Gift Cards, and Registries</p>
                  </div>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Redeem a Gift Card</p>
                    <p className='tabs__content-card-text'>When you redeem an Amazon.com Gift Card or gift voucher to your account, the funds are stored in Your Account and will automatically apply to your next...</p>
                  </div>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Site Features</p>
                  </div>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Ordering</p>
                  </div>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>A-to-z Guarantee</p>
                  </div>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Publisher & Vendor Help</p>
                  </div>
                  <div className="tabs__content-card">
                    <p className='tabs__content-card-title'>Amazon Games</p>
                  </div>
                  <div className='tab__last-footer'>
                    <div className="tabs__content-card">
                      <p className='tabs__content-card-title'>Amazon Physical Stores</p>
                    </div>
                    <div className="tabs__content-card tab-card-mini min">
                      <p className='tabs__content-card-title tab'>Associates Program Help</p>
                    </div>
                  </div>
                  <div className='tab__last-footer'>
                    <div className="tabs__content-card">
                      <p className='tabs__content-card-title'>Amazon Pharmacy</p>
                    </div>
                    <div className="tabs__content-card tab-card-mini min">
                      <p className='tabs__content-card-title tab'>Help for AmazonSellers</p>
                    </div>
                    <div className="tabs__content-card tab-card-mini min">
                      <p className='tabs__content-card-title tab'>Amazon Web Services</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='help__section-max-div'>
          <h1 className='help__section-max-div-title'>Help</h1>
          <div className='referral__card-group'>
            <h3 className='referral__card-title'>Recommended for You</h3>
            <div className='referral__cards-group'>
              <div className='referral-cardch'>
                <p className='referral__card-text'>Find a Missing Package That Shows As Delivered</p>
                <i><SlArrowRight /></i>
              </div>
              <div className='referral-cardch'>
                <p className='referral__card-text'>Late Deliveries</p>
                <i><SlArrowRight /></i>
              </div>
              <div className='referral-cardch'>
                <p className='referral__card-text'>Check the Status of Your Refund</p>
                <i><SlArrowRight /></i>
              </div>
              <div className='referral-cardch'>
                <p className='referral__card-text'>Find a Missing Item from Your Package</p>
                <i><SlArrowRight /></i>
              </div>
              <div className='referral-cardch'>
                <p className='referral__card-text'>Replace an Item</p>
                <i><SlArrowRight /></i>
              </div>
              <div className='referral-cardch'>
                <p className='referral__card-text'>Cancel Items or Orders</p>
                <i><SlArrowRight /></i>
              </div>
            </div>
          </div>
          <div className='referral__card-group'>
            <h3 className='referral__card-title all-help'>All Help Topics</h3>
            <div className='referral__cards-group'>
              <div className='referral-cardch'>
                <p className='referral__card-text'>Where's My Stuff?</p>
                <i><SlArrowRight /></i>
              </div>
              <div className='referral-cardch'>
                <p className='referral__card-text'>Shipping and Delivery</p>
                <i><SlArrowRight /></i>
              </div>
              <div className='referral-cardch'>
                <p className='referral__card-text'>Returns and Refunds</p>
                <i><SlArrowRight /></i>
              </div>
              <div className='referral-cardch'>
                <p className='referral__card-text'>Managing Your Account</p>
                <i><SlArrowRight /></i>
              </div>
              <div className='referral-cardch'>
                <p className='referral__card-text'>Security and Privacy</p>
                <i><SlArrowRight /></i>
              </div>
              <div className='referral-cardch'>
                <p className='referral__card-text'>Payment, Pricing & Promotions</p>
                <i><SlArrowRight /></i>
              </div>
              <div className='referral-cardch'>
                <p className='referral__card-text'>Digital Services and Device Support</p>
                <i><SlArrowRight /></i>
              </div>
              <div className='referral-cardch'>
                <p className='referral__card-text'>Amazon Business Accounts</p>
                <i><SlArrowRight /></i>
              </div>
              <div className='referral-cardch'>
                <p className='referral__card-text'>Large Items and Heavy-Bulky Services</p>
                <i><SlArrowRight /></i>
              </div>
              <div className='referral-cardch'>
                <p className='referral__card-text'>Other Topics & Help Sites</p>
                <i><SlArrowRight /></i>
              </div>
              <div className='referral-cardch'>
                <p className='referral__card-text'>Need More Help?</p>
                <i><SlArrowRight /></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Servic;