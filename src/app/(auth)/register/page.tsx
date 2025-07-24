'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { log } from 'node:console';
import { useState } from 'react';

export default function RegisterPage() {
  const { push } = useRouter();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const handleRegister = async (e: any) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    const res = await fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({
        fullname: e.target.fullname.value,
        email: e.target.email.value,
        password: e.target.password.value,
      }),
    });

    if (res.status === 200) {
      e.target.reset();
      setIsLoading(false);
      push('/login');
    } else {
      setError("Email already exists");
      setIsLoading(false);
      console.log(res);
    }
  };

  return (
    <div className="h-screen w-100 flex justify-center items-center flex-col">
      {error !== '' && <div className="text-red-600 font-bold mb-3">{error}</div>}
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" onSubmit={e => handleRegister(e)}>
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign Up to our platform</h3>
          <div>
            <label htmlFor="fullname" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">
              Your Fullname
            </label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Ki Anom"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
              autoComplete="off"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              autoComplete="new-password"
            />
          </div>
          <button disabled={isLoading}
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {isLoading ? 'Loading...' : 'Sign Up Account'}
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Have registered?{' '}
            <Link href="/login" className="text-blue-700 hover:underline dark:text-blue-500">
              Sign In here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
