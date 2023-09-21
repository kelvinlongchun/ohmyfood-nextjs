import Location from "@/components/home/Location";
import Overview from "@/components/home/Overview";
import HowItWorks from "@/components/home/HowItWorks";
import Restaurants from "@/components/home/RestaurantsPart";
import Loading from "@/components/home/Loading";

export default function Home() {
  return (
    <main>
      <Loading />
      <Location />
      <Overview />
      <HowItWorks />
      <Restaurants />
    </main>
  );
}
