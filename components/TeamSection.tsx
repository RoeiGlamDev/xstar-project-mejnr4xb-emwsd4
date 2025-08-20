Here's a React component for a Team Section that fits the luxurious and elegant design of your AirBNB website, HouseIL. This component is styled with a pink and black color scheme, suitable for a high-end aesthetic.

// components/TeamSection.tsx

import React from 'react';
import './TeamSection.css'; // Assuming you will create a CSS file for styling

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Alice Johnson',
    role: 'Founder & CEO',
    image: '/images/alice.jpg', // Replace with actual image paths
  },
  {
    name: 'Bob Smith',
    role: 'Head of Marketing',
    image: '/images/bob.jpg',
  },
  {
    name: 'Catherine Lee',
    role: 'Lead Designer',
    image: '/images/catherine.jpg',
  },
  {
    name: 'David Brown',
    role: 'Chief Technology Officer',
    image: '/images/david.jpg',
  },
];

const TeamSection: React.FC = () => {
  return (
    <section className="team-section">
      <h2 className="team-title">Meet Our Team</h2>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img src={member.image} alt={member.name} className="team-member-image" />
            <h3 className="team-member-name">{member.name}</h3>
            <p className="team-member-role">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;

### CSS (TeamSection.css)

You can create a CSS file named `TeamSection.css` to style the component. Here's an example of how you might style it:

/* components/TeamSection.css */

.team-section {
  background-color: #000; /* Black background */
  color: #ff69b4; /* Pink text */
  padding: 50px 20px;
  text-align: center;
}

.team-title {
  font-size: 2.5rem;
  margin-bottom: 40px;
}

.team-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
}

.team-member {
  background-color: #1a1a1a; /* Darker background for team member cards */
  border-radius: 10px;
  padding: 20px;
  width: 250px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s;
}

.team-member:hover {
  transform: translateY(-5px);
}

.team-member-image {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-bottom: 15px;
}

.team-member-name {
  font-size: 1.5rem;
  margin: 10px 0;
}

.team-member-role {
  font-size: 1rem;
  color: #d3d3d3; /* Light gray for role text */
}

### Usage

You can use the `TeamSection` component in your main application file or any other component like this:

import React from 'react';
import TeamSection from './components/TeamSection';

const App: React.FC = () => {
  return (
    <div>
      {/* Other components */}
      <TeamSection />
      {/* Other components */}
    </div>
  );
};

export default App;

Make sure to replace the image paths in the `teamMembers` array with the actual paths to your images. Adjust the styles as needed to fit your overall design vision.