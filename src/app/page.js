import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='font-[family-name:var(--font-geist-sans)]'>
      {/* Hero Section */}
      <section className='bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-800 py-20'>
        <div className='container mx-auto px-6 text-center'>
          <h1 className='text-4xl md:text-5xl font-bold mb-6'>
            Get Your Resume Reviewed
          </h1>
          <p className='text-xl mb-8 max-w-2xl mx-auto'>
            Affordable, personalized resume reviews from experienced
            professionals.
          </p>
          <a
            href='#pricing'
            className='bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-colors'
          >
            Choose Your Plan
          </a>
        </div>
      </section>

      {/* About the Service Section */}
      <section className='py-16 bg-white dark:bg-slate-900'>
        <div className='container mx-auto px-6'>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-3xl font-bold mb-6'>How It Works</h2>
              <p className='text-lg mb-4'>
                3 rounds of professional feedback to help you stand out.
              </p>
              <p className='text-lg'>
                Reviewed by experienced seniors and industry professionals.
              </p>
            </div>
            <div className='flex justify-center'>
              <Image
                src='/student-writing.webp'
                alt='Student working on resume'
                width={400}
                height={300}
                className='rounded-lg shadow-lg'
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className='py-16 bg-gray-50 dark:bg-slate-800'>
        <div className='container mx-auto px-6'>
          <h2 className='text-3xl font-bold text-center mb-12'>
            Why Choose Us
          </h2>
          <div className='grid md:grid-cols-3 gap-8'>
            {[
              {
                title: 'Affordable at just ₹50',
                description: 'Quality feedback without breaking the bank',
                icon: '/price-tag.webp',
              },
              {
                title: '3 rounds of feedback',
                description: 'Iterate and improve with multiple reviews',
                icon: '/cycle-three.webp',
              },
              {
                title: 'Real professionals',
                description: 'Get insights from industry experts',
                icon: '/user-check.webp',
              },
            ].map((feature, i) => (
              <div
                key={i}
                className='bg-white dark:bg-slate-700 p-6 rounded-lg shadow-md text-center'
              >
                <div className='inline-flex items-center justify-center w-20 h-20 rounded-full bg-white mb-6'>
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={48}
                    height={48}
                    className='rounded-full'
                  />
                </div>
                <h3 className='text-xl font-bold mb-2'>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className='py-16 bg-white dark:bg-slate-900'>
        <div className='container mx-auto px-6'>
          <h2 className='text-3xl font-bold text-center mb-12'>
            What Students Say
          </h2>
          <div className='grid md:grid-cols-2 gap-8'>
            {[
              {
                text: 'The feedback I got helped me land my first internship!',
                name: 'Aditi',
                position: 'Engineering Student',
                avatar: '/avatar-f.webp',
              },
              {
                text: 'I never realized how much my resume could improve until I got it reviewed here.',
                name: 'Ravi',
                position: 'Commerce Graduate',
                avatar: '/avatar-m.webp',
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className='bg-gray-50 dark:bg-slate-800 p-6 rounded-lg shadow'
              >
                <p className='mb-4 italic'>"{testimonial.text}"</p>
                <div className='flex items-center'>
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className='rounded-full mr-4'
                  />
                  <div>
                    <h4 className='font-bold'>{testimonial.name}</h4>
                    <p className='text-sm'>{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='py-16 bg-gray-50 dark:bg-slate-800'>
        <div className='container mx-auto px-6'>
          <h2 className='text-3xl font-bold text-center mb-12'>
            Frequently Asked Questions
          </h2>
          <div className='max-w-3xl mx-auto'>
            {[
              {
                question: 'Who reviews my resume?',
                answer:
                  'Your resume is reviewed by professionals with 3+ years of industry experience and strong recruitment backgrounds.',
              },
              {
                question: 'How long does each review take?',
                answer:
                  "You'll receive detailed feedback within 24-48 hours for each review round.",
              },
              {
                question: 'What do I get after each round of feedback?',
                answer:
                  'You receive detailed comments on content, structure, formatting, and specific suggestions for improvement.',
              },
              {
                question: 'Can I request changes to specific sections?',
                answer:
                  'Yes! You can highlight particular sections you want special attention on during the review process.',
              },
            ].map((faq, i) => (
              <details
                key={i}
                className='mb-4 bg-white dark:bg-slate-700 rounded-lg shadow-md overflow-hidden'
              >
                <summary className='p-4 font-medium cursor-pointer'>
                  {faq.question}
                </summary>
                <p className='p-4 pt-0 text-gray-600 dark:text-gray-300'>
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id='pricing' className='py-16 bg-white dark:bg-slate-900'>
        <div className='container mx-auto px-6'>
          <h2 className='text-3xl font-bold text-center mb-12'>
            Choose Your Plan
          </h2>
          <div className='grid md:grid-cols-3 gap-8'>
            {[
              {
                name: 'Student',
                price: '₹50',
                features: [
                  '3 rounds of resume reviews',
                  '48-hour turnaround time',
                  'Basic formatting tips',
                ],
              },
              {
                name: 'Pro',
                price: '₹150',
                features: [
                  'Everything in Student plan',
                  'LinkedIn profile feedback',
                  '24-hour turnaround time',
                  'Industry-specific tips',
                ],
                highlight: true,
              },
              {
                name: 'Ultimate',
                price: '₹300',
                features: [
                  'Everything in Pro plan',
                  'Personalized career tips',
                  'Priority 12-hour turnaround',
                  '1-on-1 chat support',
                ],
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`p-8 rounded-lg shadow-lg border ${
                  plan.highlight
                    ? 'border-blue-500 dark:border-blue-400 transform scale-105'
                    : 'border-gray-200 dark:border-gray-700'
                }`}
              >
                <h3 className='text-2xl font-bold mb-4'>{plan.name}</h3>
                <p className='text-4xl font-bold mb-6'>{plan.price}</p>
                <ul className='mb-8'>
                  {plan.features.map((feature, j) => (
                    <li key={j} className='flex items-center mb-2'>
                      <svg
                        className='w-5 h-5 text-green-500 mr-2'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M5 13l4 4L19 7'
                        ></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/purchase/${plan.name.toLowerCase()}`}
                  className={`block text-center py-3 px-6 rounded-full font-medium w-full transition-colors ${
                    plan.highlight
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600'
                  }`}
                >
                  Buy Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='py-12 bg-gray-100 dark:bg-slate-800'>
        <div className='container mx-auto px-6'>
          <div className='flex flex-col md:flex-row justify-between'>
            <div className='mb-6 md:mb-0'>
              <h3 className='text-xl font-bold mb-4'>Resume Review</h3>
              <p className='max-w-xs'>
                Helping students land their dream jobs with professional resume
                feedback.
              </p>
            </div>
            <div>
              <h4 className='font-bold mb-4'>Links</h4>
              <ul>
                <li className='mb-2'>
                  <a href='#' className='hover:underline'>
                    About
                  </a>
                </li>
                <li className='mb-2'>
                  <a href='#' className='hover:underline'>
                    Privacy Policy
                  </a>
                </li>
                <li className='mb-2'>
                  <a href='#' className='hover:underline'>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='border-t border-gray-300 dark:border-gray-700 mt-8 pt-8 text-center'>
            <p>
              &copy; {new Date().getFullYear()} Resume Review. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
