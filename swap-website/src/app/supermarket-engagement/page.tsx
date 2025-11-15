import Breadcrumb from '@/components/Breadcrumb';
import ArticleHeader from '@/components/partnership/ArticleHeader';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Supermarket Engagement - SWAP | Stop Waste And Plastic',
  description: 'Working directly with supermarkets to encourage sustainable packaging alternatives through research, dialogue, and practical solutions.',
};

function ImpactStatsSection() {
  const stats = [
    { number: '6+', label: 'Locations Researched' },
    { number: '15+', label: 'Manager Interviews' },
    { number: '500+', label: 'Products Documented' },
    { number: '3', label: 'Corporate Meetings' }
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
          Research Impact
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
                  color: 'var(--mint)'
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
    <section className="py-16 md:py-24 text-center" style={{ backgroundColor: 'var(--mint)' }}>
      <div className="container mx-auto px-6 max-w-[1200px]">
        <h2
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{
            fontFamily: "'Nunito', 'Quicksand', sans-serif",
            color: 'var(--gray-900)'
          }}
        >
          Support Our Advocacy
        </h2>

        <p className="text-lg md:text-xl max-w-[700px] mx-auto mb-8 text-[var(--gray-800)]">
          Help us encourage supermarkets to adopt sustainable packaging. Sign our petition
          and share your voice for change!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/action#petition"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[var(--radius-round)] font-semibold no-underline bg-[var(--gray-900)] text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
            style={{ fontFamily: "'Nunito', 'Quicksand', sans-serif" }}
          >
            <Icon icon="mdi:draw-pen" width={20} />
            Sign Petition
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

export default function SupermarketEngagementPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Action', href: '/action' },
    { label: 'Supermarket Engagement' }
  ];

  const metadata = [
    { icon: 'mdi:calendar', text: 'January 2025 - Present' },
    { icon: 'mdi:store', text: 'Direct Business Advocacy' },
    { icon: 'mdi:chart-line', text: '6+ Locations' }
  ];

  return (
    <main>
      <Breadcrumb items={breadcrumbItems} />

      <ArticleHeader
        meta={metadata}
        title="Supermarket Engagement"
        subtitle="Working directly with supermarkets to encourage sustainable packaging alternatives through research, dialogue, and practical solutions."
        featuredImage="/images/1.jpg"
        featuredImageAlt="SWAP petition campaign at supermarket plastic bags section"
        gradient="linear-gradient(135deg, var(--mint) 0%, var(--pastel-green) 100%)"
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
              Our Research-Based Approach
            </h2>
            <p className="text-lg leading-relaxed text-[var(--gray-700)] mb-6">
              SWAP's supermarket engagement strategy is built on rigorous research and evidence-based
              advocacy. Rather than simply criticizing plastic usage, we work to understand the
              challenges supermarkets face and present viable alternatives that benefit both
              businesses and the environment.
            </p>
            <p className="text-lg leading-relaxed text-[var(--gray-700)] mb-12">
              Since January 2025, we've conducted comprehensive research at 6+ supermarket locations
              across Osaka, documenting packaging practices, interviewing managers, and analyzing
              consumer behavior. This research forms the foundation of our constructive dialogue
              with supermarket chains.
            </p>

            <h2
              className="text-3xl md:text-4xl font-bold mb-6 mt-12"
              style={{
                fontFamily: "'Nunito', 'Quicksand', sans-serif",
                color: 'var(--gray-900)'
              }}
            >
              Our Four-Step Engagement Process
            </h2>

            <h3
              className="text-2xl font-semibold mb-4 mt-8"
              style={{
                fontFamily: "'Nunito', 'Quicksand', sans-serif",
                color: 'var(--gray-900)'
              }}
            >
              1. Comprehensive Packaging Audits
            </h3>
            <p className="text-lg leading-relaxed text-[var(--gray-700)] mb-4">
              Our first step is systematic documentation of current packaging practices at each
              supermarket location:
            </p>
            <ul className="text-lg leading-relaxed text-[var(--gray-700)] mb-8 pl-8 space-y-4">
              <li><strong>Product Category Analysis:</strong> We examine packaging across produce, meats, prepared foods, bakery items, and more</li>
              <li><strong>Plastic Type Documentation:</strong> Identifying types of plastics used (PET, PS, PE, PVC) and their recyclability</li>
              <li><strong>Excess Packaging Assessment:</strong> Documenting instances of unnecessary double or triple packaging</li>
              <li><strong>Photographic Evidence:</strong> Creating visual documentation to support our findings</li>
              <li><strong>Comparative Analysis:</strong> Benchmarking against best practices from other stores and regions</li>
            </ul>

            <h3
              className="text-2xl font-semibold mb-4 mt-8"
              style={{
                fontFamily: "'Nunito', 'Quicksand', sans-serif",
                color: 'var(--gray-900)'
              }}
            >
              2. Presenting Alternative Solutions
            </h3>
            <p className="text-lg leading-relaxed text-[var(--gray-700)] mb-4">
              Once we've completed our research, we schedule meetings with store managers and
              corporate sustainability teams to present our findings and alternatives:
            </p>
            <ul className="text-lg leading-relaxed text-[var(--gray-700)] mb-8 pl-8 space-y-4">
              <li><strong>Cost-Benefit Analysis:</strong> Demonstrating how sustainable alternatives can reduce costs over time</li>
              <li><strong>エフピコ方式 (Efpico Method):</strong> Highlighting successful in-store recycling systems already in use at some locations</li>
              <li><strong>Reusable Container Programs:</strong> Proposing bring-your-own-container options for produce and deli items</li>
              <li><strong>Paper and Compostable Alternatives:</strong> Identifying suitable replacements for specific plastic applications</li>
              <li><strong>Consumer Education Materials:</strong> Offering to help create signage and information about sustainable choices</li>
            </ul>

            <div
              className="p-6 rounded-[var(--radius-round)] mb-8 border-l-4"
              style={{
                backgroundColor: 'var(--sand)',
                borderColor: 'var(--mint)'
              }}
            >
              <h3
                className="text-xl font-semibold mb-3"
                style={{
                  fontFamily: "'Nunito', 'Quicksand', sans-serif",
                  color: 'var(--pastel-green)'
                }}
              >
                Key Finding: The Three Reasons for Plastic
              </h3>
              <p className="text-lg leading-relaxed text-[var(--gray-700)]">
                Through manager interviews, we identified three primary reasons supermarkets rely
                on plastic packaging: <strong>(1) Operational Efficiency</strong> - plastic is
                faster for staff to apply, <strong>(2) Product Quality Protection</strong> - extends
                shelf life and prevents damage, and <strong>(3) Tampering Prevention</strong> -
                sealed packages provide security. Our solutions address all three concerns while
                reducing plastic usage.
              </p>
            </div>

            <h3
              className="text-2xl font-semibold mb-4 mt-8"
              style={{
                fontFamily: "'Nunito', 'Quicksand', sans-serif",
                color: 'var(--gray-900)'
              }}
            >
              3. Highlighting Successful Case Studies
            </h3>
            <p className="text-lg leading-relaxed text-[var(--gray-700)] mb-4">
              We strengthen our advocacy by sharing examples of supermarkets that have successfully
              reduced plastic packaging:
            </p>
            <ul className="text-lg leading-relaxed text-[var(--gray-700)] mb-8 pl-8 space-y-4">
              <li><strong>International Examples:</strong> UK supermarket chains that eliminated plastic bags and excessive produce packaging</li>
              <li><strong>Japanese Success Stories:</strong> Stores in Tokyo and Kyoto implementing innovative plastic reduction programs</li>
              <li><strong>エフピコ方式 Details:</strong> In-depth explanation of the recycling tray system we observed at certain locations</li>
              <li><strong>Consumer Response Data:</strong> Evidence showing customer appreciation for plastic reduction efforts</li>
              <li><strong>Economic Benefits:</strong> Cost savings achieved by stores that reduced packaging</li>
            </ul>

            <h3
              className="text-2xl font-semibold mb-4 mt-8"
              style={{
                fontFamily: "'Nunito', 'Quicksand', sans-serif",
                color: 'var(--gray-900)'
              }}
            >
              4. Building Long-Term Relationships
            </h3>
            <p className="text-lg leading-relaxed text-[var(--gray-700)] mb-4">
              Sustainable change doesn't happen overnight. We maintain ongoing relationships
              with supermarket managers and staff:
            </p>
            <ul className="text-lg leading-relaxed text-[var(--gray-700)] mb-12 pl-8 space-y-4">
              <li><strong>Regular Follow-Ups:</strong> Monthly check-ins to discuss progress and address challenges</li>
              <li><strong>Feedback Loops:</strong> Gathering input from managers about what's working and what isn't</li>
              <li><strong>Collaborative Problem-Solving:</strong> Working together to overcome obstacles to plastic reduction</li>
              <li><strong>Recognition Programs:</strong> Publicly acknowledging stores that make meaningful improvements</li>
              <li><strong>Corporate Connections:</strong> Escalating successful local partnerships to corporate sustainability offices</li>
            </ul>

            <h2
              className="text-3xl md:text-4xl font-bold mb-6 mt-12"
              style={{
                fontFamily: "'Nunito', 'Quicksand', sans-serif",
                color: 'var(--gray-900)'
              }}
            >
              Research Findings from Our Supermarket Visits
            </h2>

            <h3
              className="text-2xl font-semibold mb-4 mt-8"
              style={{
                fontFamily: "'Nunito', 'Quicksand', sans-serif",
                color: 'var(--gray-900)'
              }}
            >
              Packaging Practices Across Categories
            </h3>
            <p className="text-lg leading-relaxed text-[var(--gray-700)] mb-4">
              Our research revealed significant variations in packaging practices:
            </p>
            <ul className="text-lg leading-relaxed text-[var(--gray-700)] mb-8 pl-8 space-y-4">
              <li><strong>Produce Section:</strong> Excessive use of plastic bags and foam trays for items that don't require packaging (bananas, onions, squash)</li>
              <li><strong>Meat & Fish:</strong> Heavy reliance on styrofoam trays and plastic wrap, though some stores offer エフピコ recycling</li>
              <li><strong>Prepared Foods:</strong> Multiple layers of packaging (container + lid + outer wrap) common</li>
              <li><strong>Bakery Items:</strong> Plastic bags standard, though paper bags available at some locations</li>
              <li><strong>Checkout Area:</strong> Plastic shopping bags still common despite national bag charge policy</li>
            </ul>

            <h3
              className="text-2xl font-semibold mb-4 mt-8"
              style={{
                fontFamily: "'Nunito', 'Quicksand', sans-serif",
                color: 'var(--gray-900)'
              }}
            >
              Manager Interview Insights
            </h3>
            <p className="text-lg leading-relaxed text-[var(--gray-700)] mb-4">
              Our conversations with supermarket managers revealed important perspectives:
            </p>
            <ul className="text-lg leading-relaxed text-[var(--gray-700)] mb-8 pl-8 space-y-4">
              <li>Many managers are personally concerned about plastic waste but face corporate-level constraints</li>
              <li>Staff training is key—at one location, employees are trained to ask customers before adding extra bags</li>
              <li>Customer expectations are a significant barrier; some shoppers expect high levels of packaging</li>
              <li>Economic pressures make it difficult to invest in alternative packaging without clear ROI</li>
              <li>Successful changes often start small and scale up based on customer response</li>
            </ul>

            <h3
              className="text-2xl font-semibold mb-4 mt-8"
              style={{
                fontFamily: "'Nunito', 'Quicksand', sans-serif",
                color: 'var(--gray-900)'
              }}
            >
              The エフピコ方式 (Efpico Method)
            </h3>
            <p className="text-lg leading-relaxed text-[var(--gray-700)] mb-4">
              One of our most significant discoveries was the エフピコ方式 recycling system used
              at select supermarkets. This system allows customers to return used food trays,
              which are then recycled into new trays. Key features include:
            </p>
            <ul className="text-lg leading-relaxed text-[var(--gray-700)] mb-12 pl-8 space-y-4">
              <li>Dedicated collection bins at store entrances for clean, used trays</li>
              <li>Clear signage explaining the recycling process and what can be returned</li>
              <li>Closed-loop system that demonstrates circular economy principles</li>
              <li>High participation rates when customers are educated about the program</li>
              <li>Potential model for expanding to other types of packaging</li>
            </ul>

            <h2
              className="text-3xl md:text-4xl font-bold mb-6 mt-12"
              style={{
                fontFamily: "'Nunito', 'Quicksand', sans-serif",
                color: 'var(--gray-900)'
              }}
            >
              Challenges We're Addressing
            </h2>
            <p className="text-lg leading-relaxed text-[var(--gray-700)] mb-4">
              Our supermarket engagement work faces several challenges:
            </p>
            <ul className="text-lg leading-relaxed text-[var(--gray-700)] mb-6 pl-8 space-y-4">
              <li><strong>Corporate Decision-Making:</strong> Individual store managers often lack authority to change packaging policies</li>
              <li><strong>Supply Chain Complexity:</strong> Many products arrive pre-packaged from distributors</li>
              <li><strong>Cost Concerns:</strong> Alternative materials may have higher upfront costs</li>
              <li><strong>Consumer Habits:</strong> Some customers resist change and prefer familiar packaging</li>
              <li><strong>Food Safety Regulations:</strong> Strict hygiene requirements can limit packaging alternatives</li>
            </ul>
            <p className="text-lg leading-relaxed text-[var(--gray-700)] mb-12">
              We address these challenges by focusing on win-win solutions, providing economic
              justification, and working within existing regulatory frameworks.
            </p>

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
              Our supermarket engagement strategy continues to evolve:
            </p>
            <ul className="text-lg leading-relaxed text-[var(--gray-700)] mb-6 pl-8 space-y-4">
              <li>Expanding research to more supermarket chains across Osaka and beyond</li>
              <li>Developing a "Green Supermarket" certification program in partnership with Toyonaka City Hall</li>
              <li>Creating consumer education materials to shift shopper expectations</li>
              <li>Building coalitions with other environmental groups for greater advocacy impact</li>
              <li>Pursuing media coverage to highlight stores making positive changes</li>
            </ul>
            <p className="text-lg leading-relaxed text-[var(--gray-700)]">
              By maintaining respectful, research-based dialogue with supermarkets, we believe
              we can create systemic change that benefits businesses, consumers, and the environment.
            </p>

          </div>
        </div>
      </section>

      <ImpactStatsSection />
      <CTASection />
    </main>
  );
}
