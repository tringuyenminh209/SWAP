import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { StatsSection } from '@/components/sections/StatsSection'
import { IconCard } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Leaf, Users, Target, Lightbulb, PenTool, UserPlus } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  const stats = [
    { number: '6+', label: 'Supermarkets Researched' },
    { number: '15+', label: 'Manager Interviews' },
    { number: '100+', label: 'Petition Signatures' },
    { number: '3', label: 'Official Partners' },
  ]

  const coreValues = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Evidence-Based',
      description: 'Our advocacy is built on rigorous research and data from direct supermarket surveys and manager interviews.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaborative',
      description: 'We work with supermarkets, city government, and communities to find practical solutions that work for everyone.',
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Student-Led',
      description: 'High school students driving real environmental change through research, education, and direct action.',
    },
  ]

  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <Hero
          icon={<Leaf className="w-20 h-20 text-white bg-pastel-green rounded-full p-4" />}
          title="Stop Waste And Plastic"
          subtitle="Student-led movement tackling plastic waste in Japanese supermarkets"
          description="Through research, advocacy, and community action, we're working to reduce unnecessary plastic packaging at the source."
          primaryCTA={{
            label: 'Sign Petition',
            href: '#petition',
            icon: <PenTool className="w-5 h-5" />,
          }}
          secondaryCTA={{
            label: 'Join Us',
            href: '/action',
            icon: <UserPlus className="w-5 h-5" />,
          }}
          gradient="green"
        />

        {/* Stats Section */}
        <StatsSection title="Our Impact" stats={stats} />

        {/* Mission Section */}
        <section className="section bg-white">
          <div className="container-swap">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="font-rounded text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Our Mission
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-4">
                We're tackling plastic waste originating from packaging in Japanese supermarkets
                through education, advocacy, and practical solutions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From conducting supermarket research to partnering with Toyonaka City Hall,
                we're building a movement for sustainable packaging alternatives.
              </p>
            </div>

            {/* Research Image */}
            <div className="max-w-4xl mx-auto mb-12 rounded-round overflow-hidden shadow-medium">
              <Image
                src="/images/Marketvisit.jpg"
                alt="SWAP research documentation at supermarket"
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="section bg-sand">
          <div className="container-swap">
            <h2 className="font-rounded text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
              What Makes Us Different
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
                <IconCard
                  key={index}
                  icon={value.icon}
                  title={value.title}
                  description={value.description}
                  iconBgColor={index === 0 ? 'bg-pastel-green' : index === 1 ? 'bg-pastel-blue' : 'bg-mint'}
                />
              ))}
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="section bg-white">
          <div className="container-swap">
            <h2 className="font-rounded text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
              What We Do
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Research */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="icon-circle bg-pastel-green text-white">
                    <Target className="w-8 h-8" />
                  </div>
                </div>
                <div>
                  <h3 className="font-rounded text-2xl font-semibold mb-3 text-gray-900">
                    Research & Documentation
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We conduct systematic surveys at 6+ supermarket locations, documenting
                    packaging practices and interviewing managers to understand the challenges
                    and opportunities for plastic reduction.
                  </p>
                </div>
              </div>

              {/* Advocacy */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="icon-circle bg-pastel-blue text-white">
                    <Users className="w-8 h-8" />
                  </div>
                </div>
                <div>
                  <h3 className="font-rounded text-2xl font-semibold mb-3 text-gray-900">
                    Supermarket Engagement
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Working directly with supermarket managers and corporate offices to
                    advocate for sustainable alternatives, from reusable containers to
                    improved recycling systems.
                  </p>
                </div>
              </div>

              {/* Education */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="icon-circle bg-mint text-white">
                    <Lightbulb className="w-8 h-8" />
                  </div>
                </div>
                <div>
                  <h3 className="font-rounded text-2xl font-semibold mb-3 text-gray-900">
                    Community Education
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Through workshops, social media, and partnerships with organizations like
                    ECC Volunteer Center, we raise awareness about plastic waste and empower
                    individuals to take action.
                  </p>
                </div>
              </div>

              {/* Partnerships */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="icon-circle bg-sky text-white">
                    <Users className="w-8 h-8" />
                  </div>
                </div>
                <div>
                  <h3 className="font-rounded text-2xl font-semibold mb-3 text-gray-900">
                    Government Partnerships
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our partnership with Toyonaka City Hall Environmental Department gives us
                    access to resources and platforms to amplify our impact across the
                    community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section bg-gradient-green text-center">
          <div className="container-swap">
            <h2 className="font-rounded text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Join Our Movement
            </h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto mb-8">
              Whether you sign our petition, volunteer at events, or simply spread awareness,
              every action counts in reducing plastic waste.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" href="#petition">
                <PenTool className="w-5 h-5" />
                Sign Petition
              </Button>
              <Button variant="secondary" href="/action">
                <UserPlus className="w-5 h-5" />
                Get Involved
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
