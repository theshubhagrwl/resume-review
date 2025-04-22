import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900 p-4 font-[family-name:var(--font-geist-sans)]'>
      <div className='text-center max-w-md bg-white dark:bg-slate-800 p-8 rounded-lg shadow-md'>
        <div className='w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center'>
          <svg
            className='w-8 h-8 text-green-600 dark:text-green-400'
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
        </div>
        <h1 className='text-2xl font-bold mb-4'>
          Thank You for Your Purchase!
        </h1>
        <p className='mb-6'>
          Your resume review purchase was successful. Check your email for
          further instructions on how to submit your resume.
        </p>
        <div className='text-sm text-gray-600 dark:text-gray-400 mb-6'>
          <p>
            Order number:{' '}
            {Math.floor(Math.random() * 10000)
              .toString()
              .padStart(4, '0')}
          </p>
          <p>A confirmation has been sent to your email</p>
        </div>
        <Link
          href='/'
          className='bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md inline-block transition-colors'
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}
