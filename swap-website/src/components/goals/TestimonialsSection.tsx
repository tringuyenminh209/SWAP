import { Icon } from '@iconify/react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "The SWAP team's dedication to reducing plastic waste is truly inspiring. Their research-driven approach and community engagement have made a real difference in how we think about packaging in our daily lives.",
    author: 'Tanaka Yuki',
    role: 'ECC Volunteer Center Coordinator',
    avatar: '👤'
  },
  {
    quote: "Participating in SWAP's workshop opened my eyes to the scale of plastic pollution. The practical solutions they presented are things I can actually implement in my household. It's empowering to be part of the change.",
    author: 'Suzuki Hiroshi',
    role: 'Workshop Participant & Local Resident',
    avatar: '👤'
  },
  {
    quote: "As a teacher, I appreciate how SWAP makes environmental education accessible and engaging for students. Their presentations are well-researched, age-appropriate, and inspire young people to take action.",
    author: 'Watanabe Keiko',
    role: 'Elementary School Teacher',
    avatar: '👤'
  }
];

export default function TestimonialsSection() {
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
          What People Are Saying
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[var(--sand)] p-8 rounded-[var(--radius-round)] shadow-[0_2px_8px_rgba(0,0,0,0.08)] relative"
            >
              {/* Quote icon */}
              <div className="mb-4">
                <Icon
                  icon="mdi:format-quote-open"
                  width={40}
                  style={{ color: 'var(--pastel-blue)', opacity: 0.5 }}
                />
              </div>

              {/* Quote text */}
              <p className="text-[var(--gray-700)] mb-6 leading-relaxed">
                {testimonial.quote}
              </p>

              {/* Author info */}
              <div className="flex items-center gap-3 mt-auto">
                <div
                  className="w-12 h-12 flex items-center justify-center rounded-full text-2xl flex-shrink-0"
                  style={{ backgroundColor: 'var(--pastel-blue)' }}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <div
                    className="font-semibold"
                    style={{
                      fontFamily: "'Nunito', 'Quicksand', sans-serif",
                      color: 'var(--gray-900)'
                    }}
                  >
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-[var(--gray-600)]">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
