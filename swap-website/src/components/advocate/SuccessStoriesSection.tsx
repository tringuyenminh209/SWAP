import Image from 'next/image';

interface Story {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  tag: string;
}

const stories: Story[] = [
  {
    image: '/images/Marketvisit26th2025.jpg',
    imageAlt: 'Manager interview at supermarket',
    title: 'Direct Manager Engagement',
    description: 'Successfully conducted interviews with supermarket managers to understand their challenges and identify practical solutions like employee training programs to reduce bag usage.',
    tag: '2025 Initiative'
  },
  {
    image: '/images/action.jpg',
    imageAlt: 'Partnership with Toyonaka City Hall',
    title: 'City Hall Partnership',
    description: 'Established formal partnership with Toyonaka City Hall environmental department, gaining official support for our advocacy initiatives and access to municipal resources.',
    tag: 'Partnership'
  },
  {
    image: '/images/1.jpg',
    imageAlt: 'Petition campaign at supermarket',
    title: 'Petition Campaign',
    description: 'Launched Change.org petition and on-site awareness campaigns, gathering 100+ signatures and raising visibility about plastic packaging issues directly where consumers shop.',
    tag: 'Grassroots'
  }
];

export default function SuccessStoriesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          style={{
            fontFamily: "'Nunito', 'Quicksand', sans-serif",
            color: 'var(--gray-900)'
          }}
        >
          Advocacy in Action
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-[var(--sand)] rounded-[var(--radius-round)] overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
            >
              {/* Image */}
              <div className="w-full h-[250px]">
                <Image
                  src={story.image}
                  alt={story.imageAlt}
                  width={400}
                  height={250}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3
                  className="text-2xl font-semibold mb-4"
                  style={{
                    fontFamily: "'Nunito', 'Quicksand', sans-serif",
                    color: 'var(--gray-900)'
                  }}
                >
                  {story.title}
                </h3>

                <p className="text-[var(--gray-700)] mb-4">
                  {story.description}
                </p>

                <span
                  className="inline-block px-4 py-2 rounded-[var(--radius-soft)] text-sm font-semibold"
                  style={{
                    backgroundColor: 'var(--pastel-green)',
                    color: 'var(--gray-900)'
                  }}
                >
                  {story.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
