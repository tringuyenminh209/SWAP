import Breadcrumb from '@/components/Breadcrumb';
import ArticleHeader from '@/components/partnership/ArticleHeader';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ECC Volunteer Center Partnership - SWAP',
  description: 'Connecting with passionate students and volunteers to expand our reach and bring fresh perspectives to the fight against plastic waste.',
};

export default function ECCVolunteerPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Action', href: '/action' },
    { label: 'ECC Volunteer Center' }
  ];

  const meta = [
    { icon: 'mdi:calendar', text: 'January 2024 - Present' },
    { icon: 'mdi:account-group', text: 'Student Collaboration' },
    { icon: 'mdi:map-marker', text: 'ECC Kokusai Gaikokugo, Osaka' }
  ];

  return (
    <main>
      <Breadcrumb items={breadcrumbItems} />

      <ArticleHeader
        meta={meta}
        title="ECC Volunteer Center Partnership"
        subtitle="Connecting with passionate students and volunteers to expand our reach and bring fresh perspectives to the fight against plastic waste."
        featuredImage="/images/eccaction2.jpg"
        featuredImageAlt="SWAP team leading an interactive workshop at ECC Volunteer Center"
      />

      {/* Article Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="max-w-[800px] mx-auto">
            <h2 className="text-4xl font-bold mb-6 mt-0" style={{ fontFamily: "'Nunito', 'Quicksand', sans-serif", color: 'var(--gray-900)' }}>
              About ECC Volunteer Center
            </h2>
            <p className="text-lg leading-relaxed text-[var(--gray-700)] mb-6">
              The ECC Volunteer Center (ECC国際外国語専門学校 ボランティアセンター) is a hub for student-led social action and community service. Located at ECC Kokusai Gaikokugo in Osaka, the center connects students with local and international volunteer opportunities, focusing on environmental sustainability, social justice, and community development.
            </p>
            <p className="text-lg leading-relaxed text-[var(--gray-700)] mb-6">
              Our partnership with ECC began in January 2024 when we were invited to present our supermarket plastic waste research at their monthly volunteer showcase. The presentation resonated deeply with students, leading to an ongoing collaboration that has significantly expanded SWAP's volunteer base and community reach.
            </p>

            <h2 className="text-4xl font-bold mb-6 mt-12" style={{ fontFamily: "'Nunito', 'Quicksand', sans-serif", color: 'var(--gray-900)' }}>
              How to Get Involved
            </h2>

            <h3 className="text-3xl font-semibold mb-4 mt-8" style={{ fontFamily: "'Nunito', 'Quicksand', sans-serif", color: 'var(--gray-900)' }}>
              1. Join Our Volunteer Program
            </h3>
            <p className="text-lg leading-relaxed text-[var(--gray-700)] mb-6">
              Through ECC, we've created a structured volunteer program that allows students to contribute to SWAP's mission in meaningful ways:
            </p>
            <ul className="text-lg leading-relaxed text-[var(--gray-700)] mb-6 pl-8 space-y-4">
              <li><strong>Research Volunteers:</strong> Help conduct supermarket surveys, collect packaging data, and analyze consumer behavior patterns</li>
              <li><strong>Event Coordinators:</strong> Assist with planning and executing workshops, awareness campaigns, and community events</li>
              <li><strong>Creative Team:</strong> Contribute to social media content, graphic design, and communication materials</li>
              <li><strong>Outreach Ambassadors:</strong> Represent SWAP at schools, community centers, and public events</li>
            </ul>
            <p className="text-lg leading-relaxed text-[var(--gray-700)] mb-6">
              Volunteers typically commit 4-8 hours per month, with flexible scheduling to accommodate academic responsibilities. All volunteers receive training, materials, and ongoing support from our team leaders.
            </p>

            <h3 className="text-3xl font-semibold mb-4 mt-8" style={{ fontFamily: "'Nunito', 'Quicksand', sans-serif", color: 'var(--gray-900)' }}>
              2. Participate in Monthly Events
            </h3>
            <p className="text-lg leading-relaxed text-[var(--gray-700)] mb-6">
              Every month, we organize events in collaboration with ECC that are open to all students and community members:
            </p>
            <ul className="text-lg leading-relaxed text-[var(--gray-700)] mb-6 pl-8 space-y-4">
              <li><strong>Cleanup & Awareness Days (第1土曜日):</strong> Join us for morning cleanup sessions at local supermarkets and parks, followed by educational workshops on plastic waste</li>
              <li><strong>Research Field Trips (第2日曜日):</strong> Participate in structured supermarket visits where we document packaging practices and engage with consumers</li>
              <li><strong>Workshop Wednesdays (毎週水曜日):</strong> Evening sessions covering topics like sustainable living, policy advocacy, and effective activism</li>
              <li><strong>Social Events (月1回):</strong> Casual meetups for volunteers to connect, share experiences, and build community</li>
            </ul>

            <div className="bg-[var(--sand)] p-6 rounded-[var(--radius-round)] my-8 border-l-4" style={{ borderColor: 'var(--pastel-blue)' }}>
              <h3 className="text-3xl font-semibold mb-4 mt-0" style={{ fontFamily: "'Nunito', 'Quicksand', sans-serif", color: 'var(--pastel-blue)' }}>
                Volunteer Spotlight: Spring 2024 Campaign
              </h3>
              <p className="text-lg leading-relaxed text-[var(--gray-700)]">
                In April 2024, ECC volunteers led our "Cherry Blossom, Not Plastic Bags" campaign during hanami season. Over 50 volunteers distributed reusable bags at Osaka parks and educated picnickers about plastic waste. The campaign resulted in 300+ reusable bags in circulation and significant social media engagement with #花見とエコバッグ trending locally.
              </p>
            </div>

            <h3 className="text-3xl font-semibold mb-4 mt-8" style={{ fontFamily: "'Nunito', 'Quicksand', sans-serif", color: 'var(--gray-900)' }}>
              3. Help with Research & Data Collection
            </h3>
            <p className="text-lg leading-relaxed text-[var(--gray-700)] mb-6">
              One of our core activities is conducting comprehensive packaging audits at supermarkets. ECC volunteers play a crucial role in this research:
            </p>
            <ul className="text-lg leading-relaxed text-[var(--gray-700)] mb-6 pl-8 space-y-4">
              <li>Systematic documentation of plastic usage across product categories</li>
              <li>Consumer surveys about packaging preferences and environmental awareness</li>
              <li>Photographic evidence of excessive packaging practices</li>
              <li>Comparison studies between different supermarket chains</li>
            </ul>
            <p className="text-lg leading-relaxed text-[var(--gray-700)] mb-6">
              This data forms the foundation of our advocacy work and helps us make evidence-based recommendations to supermarkets and policymakers. Volunteers receive proper training in research methodology and data ethics.
            </p>

            <h3 className="text-3xl font-semibold mb-4 mt-8" style={{ fontFamily: "'Nunito', 'Quicksand', sans-serif", color: 'var(--gray-900)' }}>
              4. Assist with Communication & Social Media
            </h3>
            <p className="text-lg leading-relaxed text-[var(--gray-700)] mb-6">
              Our social media presence is vital for spreading awareness and engaging younger audiences. ECC volunteers with skills in:
            </p>
            <ul className="text-lg leading-relaxed text-[var(--gray-700)] mb-6 pl-8 space-y-4">
              <li><strong>Content Creation:</strong> Photography, videography, graphic design for Instagram, Twitter, and TikTok</li>
              <li><strong>Translation:</strong> Help make our materials accessible in Japanese, English, and other languages</li>
              <li><strong>Community Management:</strong> Respond to messages, moderate discussions, and engage with followers</li>
              <li><strong>Campaign Strategy:</strong> Develop creative campaigns that resonate with target audiences</li>
            </ul>

            <h2 className="text-4xl font-bold mb-6 mt-12" style={{ fontFamily: "'Nunito', 'Quicksand', sans-serif", color: 'var(--gray-900)' }}>
              Volunteer Benefits & Learning Opportunities
            </h2>
            <p className="text-lg leading-relaxed text-[var(--gray-700)] mb-6">
              Volunteering with SWAP through ECC offers valuable experiences:
            </p>
            <ul className="text-lg leading-relaxed text-[var(--gray-700)] mb-6 pl-8 space-y-4">
              <li><strong>Skill Development:</strong> Learn research methods, advocacy strategies, event planning, and leadership</li>
              <li><strong>Networking:</strong> Connect with like-minded students, environmental professionals, and community leaders</li>
              <li><strong>Resume Building:</strong> Gain documented volunteer experience in environmental activism</li>
              <li><strong>Volunteer Certificates:</strong> Receive official recognition from both SWAP and ECC for your contributions</li>
              <li><strong>Leadership Roles:</strong> Opportunities to take on team lead positions for dedicated volunteers</li>
            </ul>

            <h2 className="text-4xl font-bold mb-6 mt-12" style={{ fontFamily: "'Nunito', 'Quicksand', sans-serif", color: 'var(--gray-900)' }}>
              Success Stories from Our Volunteers
            </h2>
            <p className="text-lg leading-relaxed text-[var(--gray-700)] mb-6">
              Our partnership with ECC has empowered students to make real impact:
            </p>
            <ul className="text-lg leading-relaxed text-[var(--gray-700)] mb-6 pl-8 space-y-4">
              <li>A group of 5 ECC volunteers independently organized a zero-waste cooking workshop, teaching 30 participants to reduce food packaging waste</li>
              <li>Student researchers discovered a supermarket chain using 35% more plastic packaging than competitors, leading to direct advocacy discussions</li>
              <li>Social media team increased SWAP's Instagram followers by 200% in 6 months through creative content campaigns</li>
              <li>Two volunteers developed a bilingual educational toolkit now used in 10+ schools across Osaka</li>
            </ul>

            <h2 className="text-4xl font-bold mb-6 mt-12" style={{ fontFamily: "'Nunito', 'Quicksand', sans-serif", color: 'var(--gray-900)' }}>
              How to Join
            </h2>
            <p className="text-lg leading-relaxed text-[var(--gray-700)] mb-6">
              Getting involved is easy! You can:
            </p>
            <ul className="text-lg leading-relaxed text-[var(--gray-700)] mb-6 pl-8 space-y-4">
              <li>Visit the ECC Volunteer Center office and ask about SWAP opportunities</li>
              <li>Attend our monthly orientation session (第4金曜日, 18:00-19:00 at ECC)</li>
              <li>Email us at swapplastictogreen@gmail.com with "ECC Volunteer" in the subject line</li>
              <li>Follow us on Instagram <a href="https://www.instagram.com/swapplastictogreen/" target="_blank" rel="noopener noreferrer" className="text-[var(--pastel-blue)] underline">@swapplastictogreen</a> and DM us your interest</li>
            </ul>
            <p className="text-lg leading-relaxed text-[var(--gray-700)] mb-6">
              We welcome students from all backgrounds—no prior experience in environmental activism is required. All you need is passion for creating positive change!
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--sand)' }}>
        <div className="container mx-auto px-6 max-w-[1200px]">
          <h2 className="text-5xl font-bold text-center mb-12" style={{ fontFamily: "'Nunito', 'Quicksand', sans-serif", color: 'var(--gray-900)' }}>
            Volunteer Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1000px] mx-auto">
            {[
              { number: '75+', label: 'Active Volunteers' },
              { number: '1,200+', label: 'Volunteer Hours' },
              { number: '24', label: 'Monthly Events' },
              { number: '3,000+', label: 'People Engaged' }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-[var(--radius-round)] text-center shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                <div className="text-5xl font-extrabold mb-4" style={{ fontFamily: "'Nunito', 'Quicksand', sans-serif", color: 'var(--pastel-blue)' }}>
                  {stat.number}
                </div>
                <div className="text-lg font-semibold" style={{ fontFamily: "'Nunito', 'Quicksand', sans-serif", color: 'var(--gray-900)' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 text-center" style={{ backgroundColor: 'var(--pastel-blue)' }}>
        <div className="container mx-auto px-6 max-w-[1200px]">
          <h2 className="text-5xl font-bold mb-4" style={{ fontFamily: "'Nunito', 'Quicksand', sans-serif", color: 'var(--gray-900)' }}>
            Ready to Volunteer?
          </h2>
          <p className="text-xl max-w-[700px] mx-auto mb-8 text-[var(--gray-800)]">
            Join our community of passionate students making a difference. Whether you have 2 hours or 20 hours a month, there's a role for you at SWAP!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/action#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-[var(--radius-round)] font-semibold no-underline bg-[var(--gray-900)] text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
              style={{ fontFamily: "'Nunito', 'Quicksand', sans-serif" }}
            >
              <Icon icon="mdi:account-plus" width={20} />
              Join as Volunteer
            </Link>
            <Link
              href="/action"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-[var(--radius-round)] font-semibold no-underline bg-white text-[var(--gray-900)] transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
              style={{ fontFamily: "'Nunito', 'Quicksand', sans-serif" }}
            >
              <Icon icon="mdi:arrow-left" width={20} />
              Back to Action
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
