import Link from 'next/link';
import { PrimaryButton } from '@/components/ui/PrimaryButton';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h1 className="text-9xl font-bold text-slate-200 mb-4">404</h1>
      <h2 className="text-3xl font-bold text-slate-800 mb-4">Страницата не е намерена</h2>
      <p className="text-lg text-slate-600 mb-8 max-w-md">
        Съжаляваме, но страницата, която търсите, не съществува или е била преместена.
      </p>
      <Link href="/">
        <PrimaryButton>Към началната страница</PrimaryButton>
      </Link>
    </div>
  );
}
