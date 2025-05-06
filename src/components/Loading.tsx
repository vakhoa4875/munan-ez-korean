export default function Loading() {
  return (
    <div className="fixed top-0 left-0 h-screen w-screen bg-white bg-opacity-50 flex justify-center items-center">
      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[var(--primary-color)]"></div>
    </div>
  );
}
