import Activities from "@/components/school/activities";
import Banner from "@/components/school/banner";
import Blogs from "@/components/school/blogs";
import Footer from "@/components/school/footer";
import Gallery from "@/components/school/gallery";
import Nav from "@/components/school/nav";
import Team from "@/components/school/team";

export default function page() {
  return (
    <section className="w-full bg-background min-h-dvh max-w-monitor mx-auto">
      <div className="">
        <Nav />
        <Banner />
        <Activities />
        <Blogs />
        <Team />
        <Gallery />
        <Footer />
      </div>

    </section>
  )
}
