import Company from "@/Components/Section/Company/Company";
import Hero from "@/Components/Section/Hero/Hero";
import Service from "@/Components/Section/Service/Service";
import Share from "@/Share/Share";

export default function Home() {
  return (
    <main>
        <Share>
            <Hero/>
            <Company/>
            <Service/>

            <Service left={true}/>
        </Share>
    </main>
  );
}
