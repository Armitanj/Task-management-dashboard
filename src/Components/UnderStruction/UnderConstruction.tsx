const UnderConstruction = () => {
  return (
    <>
      {/* Desktop version */}
      <div className="hidden md:flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">🚧 Under Construction 🚧</h1>
          <p className="text-lg text-gray-600">This page is under development and will be available soon.</p>
        </div>
      </div>

      {/* Mobile version */}
      <div className="flex md:hidden items-center justify-center h-screen bg-yellow-100">
        <h1 className="text-2xl text-yellow-700 font-semibold">📱 Please open this page on a desktop device.</h1>
      </div>
    </>
  );
};

export default UnderConstruction;
