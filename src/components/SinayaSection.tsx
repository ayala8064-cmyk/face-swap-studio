import sinayaPortrait from "@/assets/sinaya-portrait.webp";
import iconsFrame from "@/assets/icons-frame.svg";
import EmailIcon from "@/components/icons/EmailIcon";
import DiamondIcon from "@/components/icons/DiamondIcon";
import CircleIcon from "@/components/icons/CircleIcon";
import AnimatedText from "./AnimatedText";

const SinayaSection = () => {
  return (
    <section>
      {/* Beige/Gray Section - 1550px height */}
      <div
        className="relative w-full"
        style={{
          backgroundColor: "#F2EEEA",
          height: "1550px",
        }}
      >
        {/* Heading - Centered */}
        <div className="w-full flex justify-center pt-16 px-8">
          <AnimatedText
            as="h2"
            className="text-[#282828] font-light text-center"
            style={{
              fontSize: "170px",
              lineHeight: "0.77",
              letterSpacing: "-0.02em",
            }}
          >
            Maya, the heart
            <br />
            and leading force
            <br />
            behind the studio.
          </AnimatedText>
        </div>

        {/* Group Container - Portrait + Cards */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
          {/* Portrait Image */}
          <img
            src={sinayaPortrait}
            alt="Maya - Studio Founder"
            className="w-auto object-cover object-top"
            style={{
              height: "1270px",
              maxWidth: "none",
            }}
          />

          {/* Cards Container - Positioned absolutely over the portrait, centered */}
          <div
            className="absolute left-1/2 -translate-x-1/2 flex items-start"
            style={{
              bottom: "-50px",
            }}
          >
            {/* Icons with Frame - Left Side */}
            <div
              className="relative flex items-center justify-center"
              style={{
                width: "491px",
                height: "245px",
              }}
            >
              <img src={iconsFrame} alt="" className="absolute inset-0 w-full h-full" />
              <div
                className="flex items-center gap-6"
                style={{
                  marginTop: "50px",
                  marginRight: "100px",
                }}
              >
                <EmailIcon />
                <DiamondIcon />
                <CircleIcon />
              </div>
            </div>

            {/* Pink Text Box - 984x294 */}
            <div
              className="flex items-center justify-center"
              style={{
                width: "984px",
                height: "294px",
                backgroundColor: "#C8A89C",
                borderRadius: "35px",
                padding: "32px 40px",
                marginLeft: "-1px",
              }}
            >
              <AnimatedText
                as="p"
                className="text-white font-light text-base px-0 mx-[42px]"
                style={{
                  fontSize: "20px",
                  lineHeight: "1.2",
                  letterSpacing: "0.02em",
                }}
              >
                With over fifteen years of experience transforming homes into havens, Maya brings an unmatched eye for detail and a deep understanding of how spaces shape our lives. Her philosophy is simple: every home should tell its owner's story. From initial concept to final styling, she guides each project with patience, precision, and a genuine passion for creating environments that inspire daily living.
                <br />
                <br />Her approach blends timeless elegance with modern functionality, resulting in spaces that feel both curated and completely personal.
              </AnimatedText>
            </div>
          </div>
        </div>
      </div>

      {/* Black Section */}
      <div
        className="w-full flex items-center justify-center pb-96"
        style={{
          backgroundColor: "#282828",
          height: "220px",
          paddingTop: "80px",
          boxSizing: "content-box",
        }}
      >
        <AnimatedText
          as="h3"
          className="text-white font-light text-center "
          style={{
            fontSize: "95px",
            lineHeight: "1.2",
            letterSpacing: "-0.01em",
          }}
        >
          One studio,
          <br />
          many Services
        </AnimatedText>
      </div>
    </section>
  );
};

export default SinayaSection;
