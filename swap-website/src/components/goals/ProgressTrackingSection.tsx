import { Icon } from '@iconify/react';

interface ProgressItem {
  icon: string;
  title: string;
  current: number;
  target: number;
  unit: string;
  color: string;
}

const progressItems: ProgressItem[] = [
  {
    icon: 'mdi:fountain-pen-tip',
    title: 'Petition Signatures',
    current: 100,
    target: 1000,
    unit: 'signatures',
    color: 'var(--pastel-green)'
  },
  {
    icon: 'mdi:account-group',
    title: 'People Reached',
    current: 1000,
    target: 5000,
    unit: 'people',
    color: 'var(--pastel-blue)'
  },
  {
    icon: 'mdi:presentation',
    title: 'Workshops Conducted',
    current: 15,
    target: 50,
    unit: 'workshops',
    color: 'var(--mint)'
  },
  {
    icon: 'mdi:handshake',
    title: 'Partnership Agreements',
    current: 2,
    target: 10,
    unit: 'partnerships',
    color: 'var(--sky)'
  }
];

export default function ProgressTrackingSection() {
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
          Progress Towards Our Goals
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {progressItems.map((item, index) => {
            const percentage = Math.round((item.current / item.target) * 100);

            return (
              <div
                key={index}
                className="bg-[var(--sand)] p-8 rounded-[var(--radius-round)] shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-full flex-shrink-0"
                    style={{ backgroundColor: item.color }}
                  >
                    <Icon
                      icon={item.icon}
                      width={24}
                      style={{ color: 'white' }}
                    />
                  </div>
                  <h3
                    className="text-2xl font-semibold"
                    style={{
                      fontFamily: "'Nunito', 'Quicksand', sans-serif",
                      color: 'var(--gray-900)'
                    }}
                  >
                    {item.title}
                  </h3>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between items-baseline mb-2">
                    <span
                      className="text-3xl font-bold"
                      style={{
                        fontFamily: "'Nunito', 'Quicksand', sans-serif",
                        color: 'var(--gray-900)'
                      }}
                    >
                      {item.current.toLocaleString()} / {item.target.toLocaleString()}
                    </span>
                    <span
                      className="text-xl font-semibold"
                      style={{ color: item.color }}
                    >
                      {percentage}%
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div
                    className="w-full h-3 rounded-full overflow-hidden"
                    style={{ backgroundColor: 'var(--gray-200)' }}
                  >
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${percentage}%`,
                        backgroundColor: item.color
                      }}
                    />
                  </div>
                </div>

                <p className="text-[var(--gray-700)]">
                  {item.current.toLocaleString()} {item.unit} completed,{' '}
                  {(item.target - item.current).toLocaleString()} to go
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
