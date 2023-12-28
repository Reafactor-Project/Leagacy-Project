import React from 'react';
import './page.css'; // Import the regular CSS file

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
    { name: "Salim Hanchaoui", role: "Scrum Master", imageUrl: "https://media.discordapp.net/attachments/1186723460072865853/1187078114275250216/zi93snopf62wwwn5vnkn.jpg?ex=659593a5&is=65831ea5&hm=10cd0fa6c2f72adafd560d6eafc4932ebcc28adc3bbdb73e0aa5a8767639f5f8&=&width=663&height=597" },
    { name: "Mohamed Merdessi", role: "Web Developer", imageUrl: "https://scontent.ftun2-2.fna.fbcdn.net/v/t1.6435-9/121981028_1290125624661622_2878146906235448276_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=be3454&_nc_ohc=t1p4HEh2-GUAX9DivQS&_nc_ht=scontent.ftun2-2.fna&oh=00_AfC5sTOxLjXhwpV6i4uad80AU3FD8o3g-P2fA8p8_cpzbw&oe=65AA8C3B" },
    { name: "Mouhib Aroua", role: "Web Developer", imageUrl: "https://images-ext-1.discordapp.net/external/MCzJ3vu5V7DW-Zw_idxXTuUNDZGGOjECf6Oj94-1ybQ/%3F_nc_cat%3D102%26ccb%3D1-7%26_nc_sid%3Defb6e6%26_nc_ohc%3DE6qY1_vvH5kAX9pzofz%26_nc_ht%3Dscontent.ftun2-2.fna%26oh%3D00_AfBoU4172gXsv1_70mgWpUkGlRQ0ml89VB0WGGbw7E4YFQ%26oe%3D65887C8F/https/scontent.ftun2-2.fna.fbcdn.net/v/t39.30808-6/347607341_1977122509294694_8933258320099856162_n.jpg?width=595&height=596" },
    { name: "Tasnim ouartani ", role: "Web Developer", imageUrl: "https://media.discordapp.net/attachments/1173349023151833140/1187077926773063760/20221228_123913.jpg?ex=65959378&is=65831e78&hm=1c42b716a78cb1330c61f1fe7eb2d4ba90ac49e39ee058b3ffc4fe81a2d69e7e&=&width=447&height=597" },
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
