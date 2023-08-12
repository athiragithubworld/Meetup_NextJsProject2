import MeetupList from "../components/meetups/MeetupList";

const Dummy_MeetUps = [
  {
    id: "m1",
    title: " A First Meetup ",
    image:
      "https://lookahead.com.au/assets/blog/_1200x628_crop_center-center_82_line/meetups.jpg",
    address: "ABC 5 , South City 78975 ",
    description: "This is the first meet up!",
  },
  {
    id: "m2",
    title: " A Second Meetup ",
    image:
      "https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.webp",
    address: "SSSS 5 , South City 78975 ",
    description: "This is the Second meet up!",
  },
  {
    id: "m3",
    title: " A Third Meetup ",
    image:
      "https://wallpapers.com/images/hd/glamorous-mountain-nature-view-5zvjo2ypc8wic0uj.webp",
    address: "Santa 9 , North City 5674566 ",
    description: "This is the Third meet up!",
  },
];
const HomePage = (props) => {
  return (
    <div>
      <MeetupList meetups={props.meetups}></MeetupList>
      {/* <meetupIdIndex meetups={Dummy_MeetUps}></meetupIdIndex> */}
    </div>
  );
};

export async function getStaticProps() {
  // fetch data from API

  return {
    props: {
      meetups: Dummy_MeetUps,
    },
    revalidate: 1,
  };
}

export default HomePage;
