import Breadcrumb from '@/components/Breadcrumb';
import ArticleHeader from '@/components/partnership/ArticleHeader';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Toyonaka City Hall Partnership - SWAP | Stop Waste And Plastic',
  description: 'Working with local government to create systemic change and promote sustainable practices at the municipal level across Toyonaka City.',
};

function ImpactStatsSection() {
  const stats = [
    { number: '5,000+', label: 'Residents Reached' },
    { number: '12', label: 'Community Events' },
    { number: '8', label: 'School Workshops' },
    { number: '23%', label: 'Increase in Reusable Bags' }
  ];

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--sand)' }}>
      <div className="container mx-auto px-6 max-w-[1200px]">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          style={{
            fontFamily: "'Nunito', 'Quicksand', sans-serif",
            color: 'var(--gray-900)'
          }}
        >
          Partnership Impact
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1000px] mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-[var(--radius-round)] text-center shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
            >
              <div
                className="text-5xl font-bold mb-4"
                style={{
                  fontFamily: "'Nunito', 'Quicksand', sans-serif",
                  color: 'var(--pastel-green)'
                }}
              >
                {stat.number}
              </div>
              <div
                className="text-lg font-semibold"
                style={{
                  fontFamily: "'Nunito', 'Quicksand', sans-serif",
                  color: 'var(--gray-900)'
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-16 md:py-24 text-center" style={{ backgroundColor: 'var(--pastel-green)' }}>
      <div className="container mx-auto px-6 max-w-[1200px]">
        <h2
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{
            fontFamily: "'Nunito', 'Quicksand', sans-serif",
            color: 'var(--gray-900)'
          }}
        >
          Get Involved
        </h2>

        <p className="text-lg md:text-xl max-w-[700px] mx-auto mb-8 text-[var(--gray-800)]">
          Want to be part of our partnership initiatives? Join our community events or
          learn how you can support sustainable practices in Toyonaka.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/action#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[var(--radius-round)] font-semibold no-underline bg-[var(--gray-900)] text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
            style={{ fontFamily: "'Nunito', 'Quicksand', sans-serif" }}
          >
            <Icon icon="mdi:email-outline" width={20} />
            Contact Us
          </Link>

          <Link
            href="/action"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[var(--radius-round)] font-semibold no-underline bg-white text-[var(--gray-900)] transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
            style={{ fontFamily: "'Nunito', 'Quicksand', sans-serif" }}
          >
            <Icon icon="mdi:arrow-left" width={20} />
            Back to Action
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function ToyonakaPartnershipPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Action', href: '/action' },
    { label: 'Toyonaka City Hall Partnership' }
  ];

  const metadata = [
    { icon: 'mdi:calendar', text: 'March 2024 - Present' },
    { icon: 'mdi:office-building', text: 'Government Partnership' },
    { icon: 'mdi:map-marker', text: 'Toyonaka City, Osaka' }
  ];

  return (
    <main>
      <Breadcrumb items={breadcrumbItems} />

      <ArticleHeader
        meta={metadata}
        title="Toyonaka City Hall Partnership"
        subtitle="Working with local government to create systemic change and promote sustainable practices at the municipal level across Toyonaka City."
        featuredImage="/images/action.jpg"
        featuredImageAlt="SWAP team members meeting with Toyonaka City Hall Environmental Office staff"
        gradient="linear-gradient(135deg, var(--pastel-green) 0%, var(--mint) 100%)"
      />

      {/* Article Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="max-w-[800px] mx-auto">

            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{
                fontFamily: "'Nunito', 'Quicksand', sans-serif",
                color: 'var(--gray-900)'
              }}
            >
              About the Partnership
            </h2>
            <p className="text-lg leading-relaxed text-[var(--gray-700)] mb-6">
              In March 2024, SWAP established an official partnership with Toyonaka City Hall's
              Environmental Department (豊中市役所 環境部). This collaboration represents a significant
              milestone in our mission to reduce plastic waste in Japanese supermarkets, as it provides
              us with governmental support and resources to amplify our impact.
            </p>
            <p className="text-lg leading-relaxed text-[var(--gray-700)] mb-12">
              The partnership was formed after months of research and advocacy work that demonstrated
              the urgent need for municipal-level intervention in addressing plastic waste from
              retail sources. Toyonaka City Hall recognized SWAP's student-led initiative as an
              innovative approach to environmental activism and committed to supporting our efforts.
            </p>

            <h2
              className="text-3xl md:text-4xl font-bold mb-6 mt-12"
              style={{
                fontFamily: "'Nunito', 'Quicksand', sans-serif",
                color: 'var(--gray-900)'
              }}
            >
              What We're Accomplishing Together
            </h2>

            <h3
              className="text-2xl font-semibold mb-4 mt-8"
              style={{
                fontFamily: "'Nunito', 'Quicksand', sans-serif",
                color: 'var(--gray-900)'
              }}
            >
              1. Community Education & Workshops
            </h3>
            <p className="text-lg leading-relaxed text-[var(--gray-700)] mb-4">
              Through this partnership, we've organized multiple community workshops focused on
              plastic waste reduction. These events are held at city-sponsored venues and reach
              residents across all age groups. Our workshops cover:
            </p>
            <ul className="text-lg leading-relaxed text-[var(--gray-700)] mb-8 pl-8 space-y-4">
              <li><strong>Understanding Plastic Pollution:</strong> The environmental and health impacts of single-use plastics</li>
              <li><strong>Practical Solutions:</strong> How residents can reduce plastic consumption in daily life</li>
              <li><strong>Supermarket Alternatives:</strong> Identifying and supporting stores with sustainable packaging</li>
              <li><strong>Policy Advocacy:</strong> Teaching residents how to advocate for change at local businesses</li>
            </ul>

            <h3
              className="text-2xl font-semibold mb-4 mt-8"
              style={{
                fontFamily: "'Nunito', 'Quicksand', sans-serif",
                color: 'var(--gray-900)'
              }}
            >
              2. City-Wide Sustainability Initiatives
            </h3>
            <p className="text-lg leading-relaxed text-[var(--gray-700)] mb-4">
              We collaborate with Toyonaka City Hall on broader sustainability programs that align
              with our plastic reduction goals:
            </p>
            <ul className="text-lg leading-relaxed text-[var(--gray-700)] mb-8 pl-8 space-y-4">
              <li>Integration of plastic waste data into city environmental reports</li>
              <li>Support for Toyonaka's Zero Waste 2030 initiative</li>
              <li>Joint campaigns during national environmental awareness weeks</li>
              <li>Development of city-wide recycling education materials</li>
            </ul>

            <div
              className="p-6 rounded-[var(--radius-round)] mb-8 border-l-4"
              style={{
                backgroundColor: 'var(--sand)',
                borderColor: 'var(--pastel-green)'
              }}
            >
              <h3
                className="text-xl font-semibold mb-3"
                style={{
                  fontFamily: "'Nunito', 'Quicksand', sans-serif",
                  color: 'var(--pastel-green)'
                }}
              >
                Success Story: Plastic-Free July Campaign
              </h3>
              <p className="text-lg leading-relaxed text-[var(--gray-700)]">
                In July 2024, SWAP partnered with Toyonaka City Hall to launch a "Plastic-Free July"
                campaign. The initiative reached over 5,000 residents through social media, flyers,
                and community events. We documented a 23% increase in reusable bag usage at
                participating supermarkets during the campaign period.
              </p>
            </div>

            <h3
              className="text-2xl font-semibold mb-4 mt-8"
              style={{
                fontFamily: "'Nunito', 'Quicksand', sans-serif",
                color: 'var(--gray-900)'
              }}
            >
              3. Research & Policy Development
            </h3>
            <p className="text-lg leading-relaxed text-[var(--gray-700)] mb-4">
              Our data-driven approach has proven valuable to city policymakers. We provide:
            </p>
            <ul className="text-lg leading-relaxed text-[var(--gray-700)] mb-6 pl-8 space-y-4">
              <li>Comprehensive packaging audit data from 6+ supermarket locations</li>
              <li>Consumer behavior surveys and analysis</li>
              <li>Case studies of successful plastic reduction programs from other municipalities</li>
              <li>Evidence-based recommendations for local plastic reduction policies</li>
            </ul>
            <p className="text-lg leading-relaxed text-[var(--gray-700)] mb-8">
              This research has informed discussions about potential municipal regulations on
              single-use plastics and incentives for businesses that adopt sustainable packaging.
            </p>

            <h3
              className="text-2xl font-semibold mb-4 mt-8"
              style={{
                fontFamily: "'Nunito', 'Quicksand', sans-serif",
                color: 'var(--gray-900)'
              }}
            >
              4. Engaging with Local Residents
            </h3>
            <p className="text-lg leading-relaxed text-[var(--gray-700)] mb-4">
              The partnership gives us access to city-sponsored events where we can directly engage
              with Toyonaka residents:
            </p>
            <ul className="text-lg leading-relaxed text-[var(--gray-700)] mb-12 pl-8 space-y-4">
              <li>Monthly environmental fairs at Toyonaka City Hall plaza</li>
              <li>School presentations through the city's environmental education program</li>
              <li>Community cleanup events organized jointly with city departments</li>
              <li>Information booths at local festivals and markets</li>
            </ul>

            <h2
              className="text-3xl md:text-4xl font-bold mb-6 mt-12"
              style={{
                fontFamily: "'Nunito', 'Quicksand', sans-serif",
                color: 'var(--gray-900)'
              }}
            >
              Looking Forward
            </h2>
            <p className="text-lg leading-relaxed text-[var(--gray-700)] mb-4">
              As we continue this partnership, we're working toward several ambitious goals:
            </p>
            <ul className="text-lg leading-relaxed text-[var(--gray-700)] mb-6 pl-8 space-y-4">
              <li>Development of a Toyonaka Plastic Reduction Roadmap for 2025-2030</li>
              <li>Creation of a "Green Supermarket" certification program for local stores</li>
              <li>Establishment of a permanent SWAP resource center at city environmental facilities</li>
              <li>Expansion of the partnership model to neighboring municipalities</li>
            </ul>
            <p className="text-lg leading-relaxed text-[var(--gray-700)]">
              This partnership demonstrates that youth-led environmental activism, when supported
              by local government, can create meaningful systemic change. We're proud to be working
              with Toyonaka City Hall to build a more sustainable future for our community.
            </p>

          </div>
        </div>
      </section>

      <ImpactStatsSection />
      <CTASection />
    </main>
  );
}
