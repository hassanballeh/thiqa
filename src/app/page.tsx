// import AboutSection from "@/components/Home/AboutSection";
// import AddedText from "@/components/Home/AddedText";
// import CrossTeamSection from "@/components/Home/CrossTeamSection";
import AccordionHome from "@/components/Home/AccordionHome";
import Company from "@/components/Home/Company";
import Gallery from "@/components/Home/Gallery";
import HeroSection from "@/components/Home/HeroSection";
import LampSection from "@/components/Home/LampSection";
import MapSection from "@/components/Home/MapSection";
import Numbers from "@/components/Home/Numbers";
import PictureWithText from "@/components/Home/PictureWithText";
// import InstagramPosts from "@/components/Home/InstagramPosts";
import ServicesSection from "@/components/Home/ServicesSection";
import SubjectsSliders from "@/components/Home/SubjectsSliders";
// import SiteMapSection from "@/components/Home/SiteMapSection";
import TextWithPicture from "@/components/Home/TextWithPicture";
// import WorksSection from "@/components/Home/WorksSection";
// import PackagesSection from "@/components/Home/PackagesSection";

// import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="overflow-hidden">
        <HeroSection />
      </section>
      <section className=" overflow-hidden" id="about">
        <ServicesSection />
      </section>
      <section className="mt-16 overflow-hidden" id="about">
        <TextWithPicture />
      </section>
      <section className=" overflow-hidden" id="about">
        <Numbers />
      </section>
      <section className=" overflow-hidden" id="about">
        <LampSection />
      </section>
      <section className=" overflow-hidden" id="about">
        <SubjectsSliders />
      </section>
      <section className=" overflow-hidden" id="about">
        <MapSection />
      </section>
      <section className=" overflow-hidden" id="about">
        <PictureWithText />
      </section>
      <section className=" overflow-hidden" id="about">
        <Gallery />
      </section>
      <section className=" overflow-hidden" id="about">
        <Company />
      </section>
      <section className=" overflow-hidden" id="about">
        <AccordionHome />
      </section>
      {/* <section className="container mx-auto mt-16 overflow-hidden" id="about">
        <SiteMapSection />
      </section>
      <section className="pt-16 pb-16 overflow-hidden" id="services">
        <ServicesSection />
      </section>
         <section className="mt-16  overflow-hidden" id="about">
        <CrossTeamSection />
      </section>
      <section className="pt-16 overflow-hidden  container mx-auto" id="works">
        <WorksSection />
      </section>
        <section className="pt-16 overflow-hidden" id="works">
        <InstagramPosts />
      </section> */}
      {/* 
      <section className="pt-16 overflow-hidden" id="packages">
        <PackagesSection />
      </section> */}
    </>
  );
}
