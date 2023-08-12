import React from "react";
import MeetupDetails from "../../components/meetups/MeetupDetails";
import { useRouter } from "next/router";

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

const meetupIdIndex = (props) => {
  const router = useRouter();

  const meetupId = router.query.meetupIdIndex;

  // console.log("id", meetupId);

  let teamData = Dummy_MeetUps.find((item) => item.id === meetupId);

  // console.log("teamdata", teamData);
  return (
    <div>
      {teamData && (
        <MeetupDetails
          title={teamData.title}
          image={teamData.image}
          address={teamData.address}
          description={teamData.description}
        ></MeetupDetails>
      )}
    </div>
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupIdIndex: "m1",
        },
      },
      {
        params: {
          meetupIdIndex: "m2",
        },
      },
      {
        params: {
          meetupIdIndex: "m3",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data for single meetup

  const meetupId = context.params.meetupIdIndex;

  let teamData = Dummy_MeetUps.find((item) => item.id === meetupId);

  return {
    props: {
      meetupData: {
        id: meetupId,
        title: teamData.title,
        image: teamData.image,
        address: teamData.address,
        description: teamData.description,
      },
    },
  };
}

export default meetupIdIndex;
