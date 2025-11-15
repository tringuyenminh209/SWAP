import { Icon } from '@iconify/react';

interface TeamMember {
  name: string;
  nameJa?: string;
  role: string;
  bio: string;
  gradient: string;
}

const leadership: TeamMember[] = [
  {
    name: 'Annabelle Siddons',
    nameJa: 'シドンズ・アナベル',
    role: 'Founder & President',
    bio: 'Annabelle founded SWAP in February with a vision to reduce plastic waste in Japanese supermarkets. She leads our advocacy efforts and coordinates partnerships with local businesses and organizations.',
    gradient: 'linear-gradient(135deg, var(--pastel-green) 0%, var(--pastel-blue) 100%)'
  },
  {
    name: 'Hayato Hoori',
    nameJa: '祝部・颯音',
    role: 'Translator & Vice President',
    bio: 'Hayato joined SWAP in March and serves as our translator and Vice President. He bridges communication between Japanese and international stakeholders and supports organizational leadership.',
    gradient: 'linear-gradient(135deg, var(--pastel-blue) 0%, var(--mint) 100%)'
  },
  {
    name: 'Ellen Tanabe',
    nameJa: '田辺・エレン',
    role: 'Social Media Coordinator',
    bio: 'Ellen joined in June and manages SWAP\'s social media presence. She creates engaging content, coordinates campaigns, and helps spread awareness about plastic waste issues across digital platforms.',
    gradient: 'linear-gradient(135deg, var(--mint) 0%, var(--sky) 100%)'
  }
];

const researchTeam: TeamMember[] = [
  {
    name: 'Kazuya Ito',
    nameJa: '伊東 和哉',
    role: 'Member',
    bio: 'Kazuya joined SWAP in May. He contributes to supermarket research, data collection, and packaging analysis.',
    gradient: 'linear-gradient(135deg, var(--pastel-green) 0%, var(--mint) 100%)'
  },
  {
    name: 'Misaki Suehiro',
    nameJa: '末廣 美咲',
    role: 'Member',
    bio: 'Misaki joined in May and supports our research initiatives through field surveys and documentation.',
    gradient: 'linear-gradient(135deg, var(--sky) 0%, var(--pastel-blue) 100%)'
  },
  {
    name: 'Nguyen Minh Tri',
    role: 'Member',
    bio: 'Tri joined in May and assists with research data analysis and documentation efforts.',
    gradient: 'linear-gradient(135deg, var(--mint) 0%, var(--pastel-green) 100%)'
  }
];

const outreachTeam: TeamMember[] = [
  {
    name: 'Asrorkulov Firdavs Rafik Ugli',
    role: 'Member',
    bio: 'Firdavs joined in May and contributes to community engagement and outreach activities.',
    gradient: 'linear-gradient(135deg, var(--pastel-blue) 0%, var(--sky) 100%)'
  },
  {
    name: 'Chan Myae Kyaw',
    role: 'Member',
    bio: 'Chan joined in May and supports our community outreach programs and awareness campaigns.',
    gradient: 'linear-gradient(135deg, var(--mint) 0%, var(--sky) 100%)'
  }
];

const webDevTeam: TeamMember[] = [
  {
    name: 'Kumamoto Sora',
    nameJa: '熊本 颯天',
    role: 'Member',
    bio: 'Sora contributes to web development, helping build and maintain SWAP\'s online presence and digital tools.',
    gradient: 'linear-gradient(135deg, var(--sky) 0%, var(--pastel-blue) 100%)'
  },
  {
    name: 'Kurimune Ayumu',
    nameJa: '栗宗 歩夢',
    role: 'Member',
    bio: 'Ayumu works on web development projects, creating engaging digital experiences for SWAP\'s audience.',
    gradient: 'linear-gradient(135deg, var(--pastel-blue) 0%, var(--mint) 100%)'
  },
  {
    name: 'Kouno Rikuto',
    nameJa: '河野 陸人',
    role: 'Member',
    bio: 'Rikuto supports web development initiatives, helping design and implement SWAP\'s digital platforms.',
    gradient: 'linear-gradient(135deg, var(--mint) 0%, var(--sky) 100%)'
  }
];

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="bg-[var(--cream)] rounded-[var(--radius-round)] overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all hover:-translate-y-1 hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]">
      <div
        className="w-full h-80 flex items-center justify-center"
        style={{ background: member.gradient }}
      >
        <Icon icon="mdi:account-circle" width={120} style={{ color: 'var(--white)' }} />
      </div>
      <div className="p-6">
        <h3
          className="text-2xl font-bold mb-2"
          style={{
            fontFamily: "'Nunito', 'Quicksand', sans-serif",
            color: 'var(--gray-900)'
          }}
        >
          {member.name}
        </h3>
        {member.nameJa && (
          <p className="text-sm text-[var(--gray-700)] mb-2">
            {member.nameJa}
          </p>
        )}
        <p
          className="text-base font-semibold mb-4"
          style={{
            fontFamily: "'Nunito', 'Quicksand', sans-serif",
            color: 'var(--pastel-green)'
          }}
        >
          {member.role}
        </p>
        <p className="text-sm text-[var(--gray-700)] leading-relaxed">
          {member.bio}
        </p>
      </div>
    </div>
  );
}

export default function TeamSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-6"
          style={{
            fontFamily: "'Nunito', 'Quicksand', sans-serif",
            color: 'var(--gray-900)'
          }}
        >
          Meet Our Team
        </h2>
        <p className="text-lg text-center max-w-[800px] mx-auto mb-12 text-[var(--gray-700)]">
          Dedicated students working together to create a plastic-free future
        </p>

        {/* Leadership */}
        <h3
          className="text-3xl font-bold text-center mb-8"
          style={{
            fontFamily: "'Nunito', 'Quicksand', sans-serif",
            color: 'var(--gray-900)'
          }}
        >
          Leadership
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {leadership.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>

        {/* Team Members */}
        <h3
          className="text-3xl font-bold text-center mb-8"
          style={{
            fontFamily: "'Nunito', 'Quicksand', sans-serif",
            color: 'var(--gray-900)'
          }}
        >
          Team Members
        </h3>

        {/* Research Team */}
        <div className="mb-12">
          <h4
            className="text-2xl font-bold text-center mb-6 flex items-center justify-center gap-2"
            style={{
              fontFamily: "'Nunito', 'Quicksand', sans-serif",
              color: 'var(--pastel-green)'
            }}
          >
            <Icon icon="mdi:flask" width={32} />
            Research Team
          </h4>
          <p className="text-center max-w-[700px] mx-auto mb-8 text-[var(--gray-700)]">
            Our research team conducts supermarket surveys, collects data on packaging practices,
            and analyzes trends in plastic usage to inform our advocacy strategies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {researchTeam.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        </div>

        {/* Community Outreach Team */}
        <div className="mb-12">
          <h4
            className="text-2xl font-bold text-center mb-6 flex items-center justify-center gap-2"
            style={{
              fontFamily: "'Nunito', 'Quicksand', sans-serif",
              color: 'var(--pastel-blue)'
            }}
          >
            <Icon icon="mdi:account-group" width={32} />
            Community Outreach Team
          </h4>
          <p className="text-center max-w-[700px] mx-auto mb-8 text-[var(--gray-700)]">
            Our outreach team organizes workshops, campaigns, and educational events to
            raise awareness about plastic waste and promote sustainable alternatives.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {outreachTeam.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        </div>

        {/* Web Development Team */}
        <div>
          <h4
            className="text-2xl font-bold text-center mb-6 flex items-center justify-center gap-2"
            style={{
              fontFamily: "'Nunito', 'Quicksand', sans-serif",
              color: 'var(--sky)'
            }}
          >
            <Icon icon="mdi:code-tags" width={32} />
            Web Development Team
          </h4>
          <p className="text-center max-w-[700px] mx-auto mb-8 text-[var(--gray-700)]">
            Our web development team builds and maintains SWAP's digital presence, creating
            websites and online tools to amplify our message and reach.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {webDevTeam.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
