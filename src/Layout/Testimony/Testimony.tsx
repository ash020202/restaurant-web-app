import React from "react";
// type UserData = {
//   username: string;
//   date: string;
// };

// type DataItem = {
//   id: number;
//   feedback: string;
//   user: UserData[];
// };

const TestimonyItem: React.FC = () => (
  <div className="flex flex-col justify-evenly bg-brown p-8">
    <div className="text-justify">
      “Even the all-powerful Pointing has no control about the blind texts it is
      an almost unorthographic life One day however a small.”
    </div>
    <div className="flex gap-[15px] p-[10px]">
      <img
        src="../src/assets/about.jpg"
        className="h-[32px] w-[32px] rounded-[32px]"
        alt=""
      />
      <div>
        <p>UserName</p>
        <p>bought month ago</p>
      </div>
    </div>
  </div>
);

export const Testimony: React.FC = () => {
  const data = [
    {
      id: 1,
      feedback:
        " “Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small.”",
      user: [
        {
          username: "vimal",
          date: "bought month ago",
        },
      ],
    },
    {
      id: 2,
      feedback:
        " “Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small.”",
      user: [
        {
          username: "vimal",
          date: "bought month ago",
        },
      ],
    },
    {
      id: 3,
      feedback:
        " “Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small.”",
      user: [
        {
          username: "vimal",
          date: "bought month ago",
        },
      ],
    },
    {
      id: 4,
      feedback:
        " “Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small.”",
      user: [
        {
          username: "vimal",
          date: "bought month ago",
        },
      ],
    },
    {
      id: 5,
      feedback:
        " “Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small.”",
      user: [
        {
          username: "vimal",
          date: "bought month ago",
        },
      ],
    },
  ];
  return (
    <section
      style={{
        backgroundImage: "url(../src/assets/testimonyBG.jpg)",
        height: "100%",
        width: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="flex flex-col justify-around"
    >
      <div className="text-center p-[40px]">
        <p className="text-[35px] text-brown font-bold leading-none">
          Testimony
        </p>
        <p className="text-[45px] leading-none">what our customer says</p>
        <p className="p-[20px]">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:justify-start md:items-end md:[&>div:nth-child(odd)]:h-[300px] [&>div:nth-child(even)]:bg-even md:[&>div:nth-child(even)]:h-[350px]">
        {data.map((_, index) => (
          <TestimonyItem key={index} />
        ))}
      </div>
    </section>
  );
};
