// src/app/inbox/page.tsx
'use client';
export const dynamic = 'force-dynamic';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';

export default function InboxPage() {
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Inbox</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 font-semibold bg-red-600 rounded-lg hover:bg-red-700"
          >
            Logout
          </button>
        </div>
        <div className="bg-gray-800 rounded-lg p-8 text-center">
          <p>Your emails will appear here soon!</p>
        </div>
      </div>
    </div>
  );
}
