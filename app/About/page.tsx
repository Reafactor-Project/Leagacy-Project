import React from "react";
import "./page.css";

interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, imageUrl }) => (
  <div className="col-md-4 col-sm-6 teamWrap">
    <div className="team-member text-center">
      <div className="team-img">
        <img src={imageUrl} alt={name} />
        <div className="overlay">
          <div className="team-details text-center">
            <p>We Worked Really Hard On This Project We Hope You Like It</p>
            {/* Social media links or other content */}
          </div>
        </div>
      </div>
      <h6 className="team-title">{name}</h6>
      <span>{role}</span>
    </div>
  </div>
);

const OurTeamPage: React.FC = () => {
  const teamMembers: TeamMemberProps[] = [
    {
      name: "Guezmir Amine",
      role: "Scrum Master",
      imageUrl: "",
    },
    {
      name: "Mohamed Merdessi",
      role: "Web Developer",
      imageUrl: "",
    },
    {
      name: "Aslen",
      role: "Web Developer",
      imageUrl: "",
    },
    {
      name: "Eya",
      role: "Web Developer",
      imageUrl: "",
    },
  ];

  return (
    <div className="container">
      <div className="row heading">
        <div className="col-md-6 col-md-offset-3">
          <h2 className="text-center">Meet Our Team</h2>
        </div>
      </div>
      <div className="row team-row">
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            role={member.role}
            imageUrl={member.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default OurTeamPage;
