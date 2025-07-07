import Footer from "@/components/Footer";
import Header from "@/components/Header";

const PrivacyPolicy = () => {
  // The HTML content from text.txt has been converted to TSX below.
  // I have removed the <style> block as it uses global selectors that are better handled in a global CSS file.
  // I have also converted inline styles to JSX style objects and replaced non-standard <bdt> tags with <span>.
  return (
    <>
      <Header />
      <main className="pt-20">
        <div data-custom-class="body" className="prose lg:prose-xl max-w-4xl mx-auto px-4 py-8">
          <div>
            <strong>
              <span style={{ fontSize: '26px' }}>
                <span data-custom-class="title">
                  <h1>PRIVACY POLICY</h1>
                </span>
              </span>
            </strong>
          </div>
          <div>
            <span style={{ color: 'rgb(127, 127, 127)' }}>
              <strong>
                <span style={{ fontSize: '15px' }}>
                  <span data-custom-class="subtitle">
                    Last updated July 07, 2025
                  </span>
                </span>
              </strong>
            </span>
          </div>
          <br />
          <br />
          <br />
          <div style={{ lineHeight: 1.5 }}>
            <span style={{ color: 'rgb(127, 127, 127)' }}>
              <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>
                <span data-custom-class="body_text">
                  This Privacy Notice for Business Compliance Inc (doing business as AI Business Compliance) (
                  "<strong>we</strong>," "<strong>us</strong>," or "<strong>our</strong>"
                  ), describes how and why we might access, collect, store,
                  use, and/or share ("<strong>process</strong>") your
                  personal information when you use our services (
                  "<strong>Services</strong>"), including when you:
                </span>
              </span>
            </span>
          </div>
          <ul>
            <li data-custom-class="body_text" style={{ lineHeight: 1.5 }}>
              <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                Visit our website at{' '}
                <span style={{ color: 'rgb(0, 58, 250)' }}>
                  Business Compliance Ai
                </span>{' '}
                or any website of ours that links to this Privacy Notice
              </span>
            </li>
            <li data-custom-class="body_text" style={{ lineHeight: 1.5 }}>
              <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                Engage with us in other related ways, including any sales,
                marketing, or events
              </span>
            </li>
          </ul>
          <div style={{ lineHeight: 1.5 }}>
            <span style={{ color: 'rgb(127, 127, 127)' }}>
              <span data-custom-class="body_text">
                <strong>Questions or concerns? </strong>Reading this Privacy
                Notice will help you understand your privacy rights and choices.
                We are responsible for making decisions about how your personal
                information is processed. If you do not agree with our policies
                and practices, please do not use our Services. If you still have
                any questions or concerns, please contact us at{' '}
                info@businesscompliance.ai.
              </span>
            </span>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <br />
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <br />
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <strong>
              <span style={{ fontSize: '15px' }}>
                <span data-custom-class="heading_1">
                  <h2>SUMMARY OF KEY POINTS</h2>
                </span>
              </span>
            </strong>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <span style={{ fontSize: '15px' }}>
              <span data-custom-class="body_text">
                <strong>
                  <em>
                    This summary provides key points from our Privacy Notice,
                    but you can find out more details about any of these topics
                    by clicking the link following each key point or by using
                    our{' '}
                  </em>
                </strong>
              </span>
            </span>
            <a data-custom-class="link" href="#toc">
              <span style={{ color: 'rgb(0, 58, 250)', fontSize: '15px' }}>
                <span data-custom-class="body_text">
                  <strong>
                    <em>table of contents</em>
                  </strong>
                </span>
              </span>
            </a>
            <span style={{ fontSize: '15px' }}>
              <span data-custom-class="body_text">
                <strong>
                  <em> below to find the section you are looking for.</em>
                </strong>
              </span>
            </span>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <br />
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <span style={{ fontSize: '15px' }}>
              <span data-custom-class="body_text">
                <strong>What personal information do we process?</strong> When
                you visit, use, or navigate our Services, we may process
                personal information depending on how you interact with us and
                the Services, the choices you make, and the products and
                features you use. Learn more about{' '}
              </span>
            </span>
            <a data-custom-class="link" href="#personalinfo">
              <span style={{ color: 'rgb(0, 58, 250)', fontSize: '15px' }}>
                <span data-custom-class="body_text">
                  personal information you disclose to us
                </span>
              </span>
            </a>
            <span data-custom-class="body_text">.</span>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <br />
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <span style={{ fontSize: '15px' }}>
              <span data-custom-class="body_text">
                <strong>Do we process any sensitive personal information? </strong>
                Some of the information may be considered "special" or
                "sensitive" in certain jurisdictions, for example your racial or
                ethnic origins, sexual orientation, and religious beliefs. We do
                not process sensitive personal information.
              </span>
            </span>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <br />
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <span style={{ fontSize: '15px' }}>
              <span data-custom-class="body_text">
                <strong>Do we collect any information from third parties?</strong>{' '}
                We do not collect any information from third parties.
              </span>
            </span>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <br />
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <span style={{ fontSize: '15px' }}>
              <span data-custom-class="body_text">
                <strong>How do we process your information?</strong> We process
                your information to provide, improve, and administer our
                Services, communicate with you, for security and fraud
                prevention, and to comply with law. We may also process your
                information for other purposes with your consent. We process
                your information only when we have a valid legal reason to do
                so. Learn more about{' '}
              </span>
            </span>
            <a data-custom-class="link" href="#infouse">
              <span style={{ color: 'rgb(0, 58, 250)', fontSize: '15px' }}>
                <span data-custom-class="body_text">
                  how we process your information
                </span>
              </span>
            </a>
            <span data-custom-class="body_text">.</span>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <br />
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <span style={{ fontSize: '15px' }}>
              <span data-custom-class="body_text">
                <strong>
                  In what situations and with which parties do we share personal
                  information?
                </strong>{' '}
                We may share information in specific situations and with specific
                third parties. Learn more about{' '}
              </span>
            </span>
            <a data-custom-class="link" href="#whoshare">
              <span style={{ color: 'rgb(0, 58, 250)', fontSize: '15px' }}>
                <span data-custom-class="body_text">
                  when and with whom we share your personal information
                </span>
              </span>
            </a>
            <span style={{ fontSize: '15px' }}>
              <span data-custom-class="body_text">.</span>
            </span>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <br />
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <span style={{ fontSize: '15px' }}>
              <span data-custom-class="body_text">
                <strong>How do we keep your information safe?</strong> We have
                adequate organizational and technical processes and procedures in
                place to protect your personal information. However, no
                electronic transmission over the internet or information storage
                technology can be guaranteed to be 100% secure, so we cannot
                promise or guarantee that hackers, cybercriminals, or other
                unauthorized third parties will not be able to defeat our
                security and improperly collect, access, steal, or modify your
                information. Learn more about{' '}
              </span>
            </span>
            <a data-custom-class="link" href="#infosafe">
              <span style={{ color: 'rgb(0, 58, 250)', fontSize: '15px' }}>
                <span data-custom-class="body_text">
                  how we keep your information safe
                </span>
              </span>
            </a>
            <span data-custom-class="body_text">.</span>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <br />
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <span style={{ fontSize: '15px' }}>
              <span data-custom-class="body_text">
                <strong>What are your rights?</strong> Depending on where you are
                located geographically, the applicable privacy law may mean you
                have certain rights regarding your personal information. Learn
                more about{' '}
              </span>
            </span>
            <a data-custom-class="link" href="#privacyrights">
              <span style={{ color: 'rgb(0, 58, 250)', fontSize: '15px' }}>
                <span data-custom-class="body_text">your privacy rights</span>
              </span>
            </a>
            <span data-custom-class="body_text">.</span>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <br />
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <span style={{ fontSize: '15px' }}>
              <span data-custom-class="body_text">
                <strong>How do you exercise your rights?</strong> The easiest
                way to exercise your rights is by submitting a{' '}
              </span>
            </span>
            <a
              data-custom-class="link"
              href="https://app.termly.io/notify/26b5a1aa-f3eb-43a1-9b98-f3ef65425a80"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span style={{ color: 'rgb(0, 58, 250)', fontSize: '15px' }}>
                <span data-custom-class="body_text">
                  data subject access request
                </span>
              </span>
            </a>
            <span style={{ fontSize: '15px' }}>
              <span data-custom-class="body_text">
                , or by contacting us. We will consider and act upon any request
                in accordance with applicable data protection laws.
              </span>
            </span>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <br />
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <span style={{ fontSize: '15px' }}>
              <span data-custom-class="body_text">
                Want to learn more about what we do with any information we
                collect?{' '}
              </span>
            </span>
            <a data-custom-class="link" href="#toc">
              <span style={{ color: 'rgb(0, 58, 250)', fontSize: '15px' }}>
                <span data-custom-class="body_text">
                  Review the Privacy Notice in full
                </span>
              </span>
            </a>
            <span style={{ fontSize: '15px' }}>
              <span data-custom-class="body_text">.</span>
            </span>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <br />
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <br />
          </div>
          <div id="toc" style={{ lineHeight: 1.5 }}>
            <span style={{ fontSize: '15px' }}>
              <span style={{ color: 'rgb(0, 0, 0)' }}>
                <strong>
                  <span data-custom-class="heading_1">
                    <h2>TABLE OF CONTENTS</h2>
                  </span>
                </strong>
              </span>
            </span>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <span style={{ fontSize: '15px' }}>
              <a data-custom-class="link" href="#infocollect">
                <span style={{ color: 'rgb(0, 58, 250)' }}>
                  1. WHAT INFORMATION DO WE COLLECT?
                </span>
              </a>
            </span>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <span style={{ fontSize: '15px' }}>
              <a data-custom-class="link" href="#infouse">
                <span style={{ color: 'rgb(0, 58, 250)' }}>
                  2. HOW DO WE PROCESS YOUR INFORMATION?
                </span>
              </a>
            </span>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <span style={{ fontSize: '15px' }}>
              <a data-custom-class="link" href="#whoshare">
                <span style={{ color: 'rgb(0, 58, 250)' }}>
                  3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
                </span>
              </a>
            </span>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <span style={{ fontSize: '15px' }}>
              <a data-custom-class="link" href="#cookies">
                <span style={{ color: 'rgb(0, 58, 250)' }}>
                  4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                </span>
              </a>
            </span>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <a data-custom-class="link" href="#ai">
              <span style={{ color: 'rgb(0, 58, 250)' }}>
                5. DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?
              </span>
            </a>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <span style={{ fontSize: '15px' }}>
              <a data-custom-class="link" href="#inforetain">
                <span style={{ color: 'rgb(0, 58, 250)' }}>
                  6. HOW LONG DO WE KEEP YOUR INFORMATION?
                </span>
              </a>
            </span>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <span style={{ fontSize: '15px' }}>
              <a data-custom-class="link" href="#infosafe">
                <span style={{ color: 'rgb(0, 58, 250)' }}>
                  7. HOW DO WE KEEP YOUR INFORMATION SAFE?
                </span>
              </a>
            </span>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <span style={{ fontSize: '15px' }}>
              <a data-custom-class="link" href="#infominors">
                <span style={{ color: 'rgb(0, 58, 250)' }}>
                  8. DO WE COLLECT INFORMATION FROM MINORS?
                </span>
              </a>
            </span>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <span style={{ fontSize: '15px' }}>
              <a data-custom-class="link" href="#privacyrights">
                <span style={{ color: 'rgb(0, 58, 250)' }}>
                  9. WHAT ARE YOUR PRIVACY RIGHTS?
                </span>
              </a>
            </span>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <span style={{ fontSize: '15px' }}>
              <a data-custom-class="link" href="#DNT">
                <span style={{ color: 'rgb(0, 58, 250)' }}>
                  10. CONTROLS FOR DO-NOT-TRACK FEATURES
                </span>
              </a>
            </span>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <span style={{ fontSize: '15px' }}>
              <a data-custom-class="link" href="#uslaws">
                <span style={{ color: 'rgb(0, 58, 250)' }}>
                  11. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
                </span>
              </a>
            </span>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <span style={{ fontSize: '15px' }}>
              <a data-custom-class="link" href="#policyupdates">
                <span style={{ color: 'rgb(0, 58, 250)' }}>
                  12. DO WE MAKE UPDATES TO THIS NOTICE?
                </span>
              </a>
            </span>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <a data-custom-class="link" href="#contact">
              <span style={{ color: 'rgb(0, 58, 250)', fontSize: '15px' }}>
                13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
              </span>
            </a>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <a data-custom-class="link" href="#request">
              <span style={{ color: 'rgb(0, 58, 250)' }}>
                14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT
                FROM YOU?
              </span>
            </a>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <br />
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <br />
          </div>
          <div id="infocollect" style={{ lineHeight: 1.5 }}>
            <span style={{ color: 'rgb(0, 0, 0)' }}>
              <strong>
                <span data-custom-class="heading_1">
                  <h2>1. WHAT INFORMATION DO WE COLLECT?</h2>
                </span>
              </strong>
            </span>
            <span data-custom-class="heading_2" id="personalinfo" style={{ color: 'rgb(0, 0, 0)' }}>
              <span style={{ fontSize: '15px' }}>
                <strong>
                  <h3>Personal information you disclose to us</h3>
                </strong>
              </span>
            </span>
            <span style={{ color: 'rgb(127, 127, 127)' }}>
              <span data-custom-class="body_text">
                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                  <strong>
                    <em>In Short:</em>
                  </strong>
                  <em> We collect personal information that you provide to us.</em>
                </span>
              </span>
            </span>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <br />
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
              <span data-custom-class="body_text">
                We collect personal information that you voluntarily provide to us
                when you express an interest in obtaining information about us or
                our products and Services, when you participate in activities on
                the Services, or otherwise when you contact us.
              </span>
            </span>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <br />
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
              <span data-custom-class="body_text">
                <strong>Personal Information Provided by You.</strong> The
                personal information that we collect depends on the context of
                your interactions with us and the Services, the choices you make,
                and the products and features you use. The personal information
                we collect may include the following:
              </span>
            </span>
          </div>
          <ul>
            <li data-custom-class="body_text" style={{ lineHeight: 1.5 }}>
              <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                names
              </span>
            </li>
          </ul>
          <ul>
            <li data-custom-class="body_text" style={{ lineHeight: 1.5 }}>
              <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                email addresses
              </span>
            </li>
          </ul>
          <div id="sensitiveinfo" style={{ lineHeight: 1.5 }}>
            <span style={{ fontSize: '15px' }}>
              <span data-custom-class="body_text">
                <strong>Sensitive Information.</strong> We do not process
                sensitive information.
              </span>
            </span>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <br />
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
              <span data-custom-class="body_text">
                All personal information that you provide to us must be true,
                complete, and accurate, and you must notify us of any changes to
                such personal information.
              </span>
            </span>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <br />
          </div>
          <div id="infouse" style={{ lineHeight: 1.5 }}>
            <span style={{ color: 'rgb(0, 0, 0)' }}>
              <strong>
                <span data-custom-class="heading_1">
                  <h2>2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
                </span>
              </strong>
            </span>
            <span data-custom-class="body_text">
              <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                <strong>
                  <em>In Short: </em>
                </strong>
                <em>
                  We process your information to provide, improve, and
                  administer our Services, communicate with you, for security
                  and fraud prevention, and to comply with law. We may also
                  process your information for other purposes with your consent.
                </em>
              </span>
            </span>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <br />
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
              <span data-custom-class="body_text">
                <strong>
                  We process your personal information for a variety of reasons,
                  depending on how you interact with our Services, including:
                </strong>
              </span>
            </span>
          </div>
          <ul>
            <li data-custom-class="body_text" style={{ lineHeight: 1.5 }}>
              <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
                <strong>To send administrative information to you. </strong>We
                may process your information to send you details about our
                products and services, changes to our terms and policies, and
                other similar information.
              </span>
            </li>
            <li data-custom-class="body_text" style={{ lineHeight: 1.5 }}>
              <span style={{ fontSize: '15px' }}>
                <span data-custom-class="body_text">
                  <strong>To send you marketing and promotional communications. </strong>
                  We may process the personal information you send to us for our
                  marketing purposes, if this is in accordance with your
                  marketing preferences. You can opt out of our marketing emails
                  at any time. For more information, see "
                </span>
              </span>
              <a href="#privacyrights">
                <span data-custom-class="link">
                  <span style={{ color: 'rgb(0, 58, 250)', fontSize: '15px' }}>
                    <span data-custom-class="link">
                      WHAT ARE YOUR PRIVACY RIGHTS?
                    </span>
                  </span>
                </span>
              </a>
              <span style={{ fontSize: '15px' }}>
                <span data-custom-class="body_text">" below.</span>
              </span>
            </li>
          </ul>
          <div style={{ lineHeight: 1.5 }}>
            <br />
          </div>
          <div id="whoshare" style={{ lineHeight: 1.5 }}>
            <span style={{ color: 'rgb(0, 0, 0)' }}>
              <strong>
                <span data-custom-class="heading_1">
                  <h2>3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h2>
                </span>
              </strong>
            </span>
            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
              <span data-custom-class="body_text">
                <strong>
                  <em>In Short:</em>
                </strong>
                <em>
                  {' '}
                  We may share information in specific situations described in
                  this section and/or with the following third parties.
                </em>
              </span>
            </span>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <br />
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <span style={{ fontSize: '15px' }}>
              <span data-custom-class="body_text">
                We may need to share your personal information in the following
                situations:
              </span>
            </span>
          </div>
          <ul>
            <li data-custom-class="body_text" style={{ lineHeight: 1.5 }}>
              <span style={{ fontSize: '15px' }}>
                <span data-custom-class="body_text">
                  <strong>Business Transfers.</strong> We may share or transfer
                  your information in connection with, or during negotiations
                  of, any merger, sale of company assets, financing, or
                  acquisition of all or a portion of our business to another
                  company.
                </span>
              </span>
            </li>
            <li data-custom-class="body_text" style={{ lineHeight: 1.5 }}>
              <span style={{ fontSize: '15px' }}>
                <span data-custom-class="body_text">
                  <strong>When we use Google Maps Platform APIs.</strong> We may
                  share your information with certain Google Maps Platform APIs
                  (e.g., Google Maps API, Places API). Google Maps uses GPS,
                  Wi-Fi, and cell towers to estimate your location. GPS is
                  accurate to about 20 meters, while Wi-Fi and cell towers help
                  improve accuracy when GPS signals are weak, like indoors. This
                  data helps Google Maps provide directions, but it is not
                  always perfectly precise.
                </span>
              </span>
            </li>
          </ul>
          <div style={{ lineHeight: 1.5 }}>
            <br />
          </div>
          <div id="cookies" style={{ lineHeight: 1.5 }}>
            <span style={{ color: 'rgb(0, 0, 0)' }}>
              <strong>
                <span data-custom-class="heading_1">
                  <h2>4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2>
                </span>
              </strong>
            </span>
            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
              <span data-custom-class="body_text">
                <strong>
                  <em>In Short:</em>
                </strong>
                <em>
                  {' '}
                  We may use cookies and other tracking technologies to collect
                  and store your information.
                </em>
              </span>
            </span>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <br />
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
              <span data-custom-class="body_text">
                We may use cookies and similar tracking technologies (like web
                beacons and pixels) to gather information when you interact with
                our Services. Some online tracking technologies help us maintain
                the security of our Services, prevent crashes, fix bugs, save
                your preferences, and assist with basic site functions.
              </span>
            </span>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <br />
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
              <span data-custom-class="body_text">
                We also permit third parties and service providers to use online
                tracking technologies on our Services for analytics and
                advertising, including to help manage and display
                advertisements, to tailor advertisements to your interests, or to
                send abandoned shopping cart reminders (depending on your
                communication preferences). The third parties and service
-providers use their technology to provide advertising about products and services tailored to your interests which may appear either on our Services or on other websites.
              </span>
            </span>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <span style={{ fontSize: '15px' }}>
              <br />
            </span>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <span style={{ fontSize: '15px' }}>
              <span data-custom-class="body_text">
                To the extent these online tracking technologies are deemed to be
                a "sale"/"sharing" (which includes targeted advertising, as
                defined under the applicable laws) under applicable US state
                laws, you can opt out of these online tracking technologies by
                submitting a request as described below under section "
              </span>
            </span>
            <span data-custom-class="body_text">
              <a data-custom-class="link" href="#uslaws">
                <span style={{ color: 'rgb(0, 58, 250)', fontSize: '15px' }}>
                  DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
                </span>
              </a>
            </span>
            <span style={{ fontSize: '15px' }}>
              <span data-custom-class="body_text">"</span>
            </span>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <br />
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
              <span data-custom-class="body_text">
                Specific information about how we use such technologies and how
                you can refuse certain cookies is set out in our Cookie Notice.
              </span>
            </span>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <br />
          </div>
          <div id="ai" style={{ lineHeight: 1.5 }}>
            <span style={{ fontSize: '15px' }}>
              <strong>
                <span data-custom-class="heading_1">
                  <h2>5. DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?</h2>
                </span>
              </strong>
              <strong>
                <em>
                  <span data-custom-class="body_text">In Short:</span>
                </em>
              </strong>
              <em>
                <span data-custom-class="body_text">
                  {' '}
                  We offer products, features, or tools powered by artificial
                  intelligence, machine learning, or similar technologies.
                </span>
              </em>
            </span>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <br />
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <span style={{ fontSize: '15px' }}>
              <span data-custom-class="body_text">
                As part of our Services, we offer products, features, or tools
                powered by artificial intelligence, machine learning, or similar
                technologies (collectively, "AI Products"). These tools are
                designed to enhance your experience and provide you with
                innovative solutions. The terms in this Privacy Notice govern
                your use of the AI Products within our Services.
              </span>
            </span>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <br />
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <span style={{ fontSize: '15px' }}>
              <strong>
                <span data-custom-class="body_text">Use of AI Technologies</span>
              </strong>
            </span>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <br />
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <span style={{ fontSize: '15px' }}>
              <span data-custom-class="body_text">
                We provide the AI Products through third-party service providers
                ("AI Service Providers"), including OpenAI, Amazon Web Services
                (AWS) AI, Anthropic and IBM Watson. As outlined in this Privacy
                Notice, your input, output, and personal information will be
                shared with and processed by these AI Service Providers to enable
                your use of our AI Products for purposes outlined in "
              </span>
              <a data-custom-class="link" href="#whoshare">
                <span style={{ color: 'rgb(0, 58, 250)', fontSize: '15px' }}>
                  WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
                </span>
              </a>
              <span data-custom-class="body_text">
                " You must not use the AI Products in any way that violates the
                terms or policies of any AI Service Provider.
              </span>
            </span>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <span style={{ fontSize: '15px' }}>
              <br />
            </span>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <span style={{ fontSize: '15px' }}>
              <strong>
                <span data-custom-class="body_text">Our AI Products</span>
              </strong>
            </span>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <span style={{ fontSize: '15px' }}>
              <br />
            </span>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <span style={{ fontSize: '15px' }}>
              <span data-custom-class="body_text">
                Our AI Products are designed for the following functions:
              </span>
            </span>
          </div>
          <ul>
            <li data-custom-class="body_text" style={{ lineHeight: 1.5 }}>
              <span style={{ fontSize: '15px' }}>
                <span data-custom-class="body_text">AI automation</span>
              </span>
            </li>
          </ul>
          <ul>
            <li data-custom-class="body_text" style={{ lineHeight: 1.5 }}>
              <span style={{ fontSize: '15px' }}>
                <span data-custom-class="body_text">AI bots</span>
              </span>
            </li>
          </ul>
          <ul>
            <li data-custom-class="body_text" style={{ lineHeight: 1.5 }}>
              <span style={{ fontSize: '15px' }}>
                <span data-custom-class="body_text">AI development</span>
              </span>
            </li>
          </ul>
          <div>
            <span style={{ fontSize: '15px' }}>
              <br />
            </span>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <span style={{ fontSize: '15px' }}>
              <strong>
                <span data-custom-class="body_text">
                  How We Process Your Data Using AI
                </span>
              </strong>
            </span>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <span style={{ fontSize: '15px' }}>
              <br />
            </span>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <span style={{ fontSize: '15px' }}>
              <span data-custom-class="body_text">
                All personal information processed using our AI Products is
                handled in line with our Privacy Notice and our agreement with
                third parties. This ensures high security and safeguards your
                personal information throughout the process, giving you peace of
                mind about your data's safety.
              </span>
            </span>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <br />
          </div>
          <div id="inforetain" style={{ lineHeight: 1.5 }}>
            <span style={{ color: 'rgb(0, 0, 0)' }}>
              <strong>
                <span data-custom-class="heading_1">
                  <h2>6. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
                </span>
              </strong>
            </span>
            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
              <span data-custom-class="body_text">
                <strong>
                  <em>In Short: </em>
                </strong>
                <em>
                  We keep your information for as long as necessary to fulfill
                  the purposes outlined in this Privacy Notice unless otherwise
                  required by law.
                </em>
              </span>
            </span>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <br />
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
              <span data-custom-class="body_text">
                We will only keep your personal information for as long as it is
                necessary for the purposes set out in this Privacy Notice,
                unless a longer retention period is required or permitted by law
                (such as tax, accounting, or other legal requirements). No
                purpose in this notice will require us keeping your personal
                information for longer than 1 year.
              </span>
            </span>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <br />
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
              <span data-custom-class="body_text">
                When we have no ongoing legitimate business need to process your
                personal information, we will either delete or anonymize such
                information, or, if this is not possible (for example, because
                your personal information has been stored in backup archives),
                then we will securely store your personal information and
                isolate it from any further processing until deletion is
                possible.
              </span>
            </span>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <br />
          </div>
          <div id="infosafe" style={{ lineHeight: 1.5 }}>
            <span style={{ color: 'rgb(0, 0, 0)' }}>
              <strong>
                <span data-custom-class="heading_1">
                  <h2>7. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
                </span>
              </strong>
            </span>
            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
              <span data-custom-class="body_text">
                <strong>
                  <em>In Short: </em>
                </strong>
                <em>
                  We aim to protect your personal information through a system of
                  organizational and technical security measures.
                </em>
              </span>
            </span>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <br />
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
              <span data-custom-class="body_text">
                We have implemented appropriate and reasonable technical and
                organizational security measures designed to protect the security
                of any personal information we process. However, despite our
                safeguards and efforts to secure your information, no electronic
                transmission over the Internet or information storage technology
                can be guaranteed to be 100% secure, so we cannot promise or
                guarantee that hackers, cybercriminals, or other unauthorized
                third parties will not be able to defeat our security and
                improperly collect, access, steal, or modify your information.
                Although we will do our best to protect your personal
                information, transmission of personal information to and from
                our Services is at your own risk. You should only access the
                Services within a secure environment.
              </span>
            </span>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <br />
          </div>
          <div id="infominors" style={{ lineHeight: 1.5 }}>
            <span style={{ color: 'rgb(0, 0, 0)' }}>
              <strong>
                <span data-custom-class="heading_1">
                  <h2>8. DO WE COLLECT INFORMATION FROM MINORS?</h2>
                </span>
              </strong>
            </span>
            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
              <span data-custom-class="body_.tsx">
                <strong>
                  <em>In Short:</em>
                </strong>
                <em>
                  {' '}
                  We do not knowingly collect data from or market to children
                  under 18 years of age.
                </em>
              </span>
            </span>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <br />
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
              <span data-custom-class="body_text">
                We do not knowingly collect, solicit data from, or market to
                children under 18 years of age, nor do we knowingly sell such
                personal information. By using the Services, you represent that
                you are at least 18 or that you are the parent or guardian of
                such a minor and consent to such minor dependent's use of the
                Services. If we learn that personal information from users less
                than 18 years of age has been collected, we will deactivate the
                account and take reasonable measures to promptly delete such
                data from our records. If you become aware of any data we may
                have collected from children under age 18, please contact us at{' '}
                <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>
                  info@businesscompliance.ai
                </span>
                .
              </span>
            </span>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <br />
          </div>
          <div id="privacyrights" style={{ lineHeight: 1.5 }}>
            <span style={{ color: 'rgb(0, 0, 0)' }}>
              <strong>
                <span data-custom-class="heading_1">
                  <h2>9. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
                </span>
              </strong>
            </span>
            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
              <span data-custom-class="body_text">
                <strong>
                  <em>In Short:</em>
                </strong>
                <em>
                  {' '}
                  You may review, change, or terminate your account at any time,
                  depending on your country, province, or state of residence.
                </em>
              </span>
            </span>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <br />
          </div>
          <div id="withdrawconsent" style={{ lineHeight: 1.5 }}>
            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>
              <span data-custom-class="body_text">
                <strong>
                  <u>Withdrawing your consent:</u>
                </strong>{' '}
                If we are relying on your consent to process your personal
                information, which may be express and/or implied consent
                depending on the applicable law, you have the right to withdraw
                your consent at any time. You can withdraw your consent at any
                time by contacting us by using the contact details provided in
                the section "
              </span>
            </span>
            <a data-custom-class="link" href="#contact">
              <span style={{ fontSize: '15px', color: 'rgb(0, 58, 250)' }}>
                HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
              </span>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy; 