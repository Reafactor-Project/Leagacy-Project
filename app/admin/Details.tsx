import * as React from "react";
import './Admin.css';

interface UsersDetailsProps {
  one: {
    user_img: string;
    user_name: string;
    user_phOrEmail: string;
    createdAt: string;
  } | null; // Add null as a possible type for one
}

const UsersDetails: React.FC<UsersDetailsProps> = (props) => {
  // Check if props.one is null or undefined
  if (!props.one) {
    return null; // or return a default component, message, or handle the case accordingly
  }

  return (
    <div className="divAdmin54">
      <div className="divAdmin55">
        {/* Use conditional rendering for the user image */}
        <img
          loading="lazy"
          src={props.one.user_img || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
          alt="User"
          className="imgAdmin12"
        />

        {/* The second image seems to be a static image; consider using a regular img tag */}
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3feca3ec4a3fe1ff8b7dde674546e87a92c0e439c3c54196917e1dbbd894e71d?"
          alt="Static Image"
          className="imgAdmin13"
        />
      </div>
      <div className="divAdmin59">
        <div className="divAdmin60">
          <div className="columnAdmin4">
            <div className="divAdmin61">
              <div className="divAdmin62">Name</div>
              <div className="divAdmin63">{props.one.user_name}</div>
              <div className="divAdmin64">Email</div>
              <div className="divAdmin63">{props.one.user_phOrEmail}</div>
            </div>
          </div>
          <div className="columnAdmin5">
            <div className="divAdmin68">
              <div className="divAdmin69">Created At</div>
              <div className="divAdmin70">{props.one.createdAt}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersDetails;
