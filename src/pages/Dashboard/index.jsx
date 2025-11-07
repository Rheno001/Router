import { useAuth } from '../../context/AuthContext';

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Dashboard</h1>
      <p>Welcome back, <strong>{user?.email}</strong>!</p>
      <p>This page is <strong>protected</strong> – only logged-in users can see it.</p>
    </div>
  );
}
